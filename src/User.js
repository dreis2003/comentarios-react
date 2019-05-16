import React from 'react'


const User = props => {
    return(
        <div>
            Usuario logado como: {props.email}
            <button onClick={props.logout} >Sair</button>
        </div>
    )
}

export default User