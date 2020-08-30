import React from 'react'
import {SignUpForm} from "../../components/forms"
import {LoginForm} from '../../components/forms'

function Authentication(props) {
    const isLogin = props.match.path === '/login'
    const pageTitle = isLogin ? 'LOGIN TO YOUR ACCOUNT' : 'CREATE AN ACCOUNT'

        return (
            <div>
                <h1>{pageTitle}</h1>
                {isLogin? <LoginForm /> : <SignUpForm onSubmit={()=>{}} />}

            </div>
        )
}

export default Authentication