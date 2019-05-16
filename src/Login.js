import React, { Component } from 'react'


class Login extends Component {

    state = {
        email: '',
        pwd: ''
    }

    handleChange = field => event => {
        this.setState({
            [field]: event.target.value
        })
    }

    login = () => {
        this.props.login(this.state.email, this.state.senha)
    }

    render() {
        const errorMessages = {
            'auth/wrong-password' : 'E-mail e/ou senha inválidos',
            'auth/user-not-found' : 'Usuário não encontrado',
            'auth/invalid-email' : 'Email inválido'
        }
        return (
            <div>
                <h4>Login</h4>
                <input type='text' onChange={this.handleChange('email')} placehoder='email' />
                <input type='password' onChange={this.handleChange('senha')} placehoder='senha' />
                <button type='button' onClick={this.login} >Entrar</button>
                {
                    this.props.isAuthError && 
                        <p>
                        <b>Erro: </b>{errorMessages[this.props.authError]}
                        </p>

                }
            </div>
        )   
    }
    
}

export default Login