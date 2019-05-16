import React, {Component} from 'react'
import Comments from './Comments'
import NewComment from './NewComment'
import Login from './Login'
import User from './User'
import Signup from './Signup'


class App extends Component {

  state = {
    comments : {},
    isLoading: false,
    isAuth: false,
    authErros: '',
    isAuthError: false,
    user: {},
    userScreen: 'login'
  }

  sendComment = comment => {
    const { database } = this.props
    const id = database.ref().child('comments').push().key;
    const comments = {};
    comments['comments/'+id] = {
      comment,
      email: this.state.user.email,
      userId: this.state.user.uid
    }
    database.ref().update(comments);
    
    /*this.setState({
      comments: [...this.state.comments, this.state.newComment]
      
    })*/
  }


  login = async (email, senha) => {
    const { auth } = this.props
    this.setState({
      isAuthError: false,
      authError: ''
    })
    try {
      await auth.signInWithEmailAndPassword(email, senha)
    } catch(err) {
      this.setState({
        isAuthError: true,
        authError: err.code
      })
    }
    
  }

  logout = () => {
    const { auth } = this.props
    auth.signOut()
  }

  componentDidMount() {
    const { database, auth  } = this.props
    this.setState({isLoading: true})
    this.comments = database.ref('comments');
    this.comments.on('value', snapshot => {
      this.setState({
        comments: snapshot.val(),
        isLoading: false
      })
    })

    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          isAuth: true,
          authError: '',
          user
        })
      } else {
        this.setState({
          isAuth: false,
          user: {}
        })
      }
    })
  }

  render() {
    return (
      <div >
        {this.state.isAuth && <User email={this.state.user.email} logout={this.logout}   /> }
        {!this.state.isAuth 
          && this.state.userScreen === 'login' &&
          <Login login={this.login} isAuthError={this.state.authError}  authError={this.state.authError} 
        />}
        {!this.state.isAuth 
          && this.state.userScreen === 'signup' &&
          <Signup createAccount={this.login} isAuthError={this.state.authError}  authError={this.state.authError} 
        />}
        {this.state.isAuth && <NewComment sendComment={this.sendComment}/>}
        {/*Comments */}
        <Comments comments={this.state.comments}/>
        {
          this.state.isLoading && <p>Carregando ...</p>
        }
        
      </div>
    );
  }
  
}

export default App
