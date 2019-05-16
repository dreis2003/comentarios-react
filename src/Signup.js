import React, { Component } from 'react'


class Signup extends Component {

    state = {
        email: '',
        pwd: ''
    }

    handleChange = field => event => {
        this.setState({
            [field]: event.target.value
        })
    }

    createAccount = () => {
        this.props.createAccount(this.state.email, this.state.senha)
    }

    render() {
        const errorMessages = {
            'auth/wrong-password' : 'E-mail e/ou senha inválidos',
            'auth/user-not-found' : 'Usuário não encontrado',
            'auth/invalid-email' : 'Email inválido'
        }
        return (
            <div>
                <h4>Criar Conta</h4>
                <input type='text' onChange={this.handleChange('email')} placehoder='email' />
                <input type='password' onChange={this.handleChange('senha')} placehoder='senha' />
                <button type='button' onClick={this.createAccount} >Entrar</button>
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

export default Signup