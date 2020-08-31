import React from 'react'
import {SignUpForm} from "../../components/forms"
import {LoginForm} from '../../components/forms'
import styles from './Authentication.module.scss'
import {Link} from "react-router-dom";
import logo from "../../static/images/logo.png";

function Authentication(props) {
    const isLogin = props.match.path === '/login'
    const pageTitle = isLogin ? 'LOGIN TO YOUR ACCOUNT' : 'CREATE AN ACCOUNT'

    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <img src={logo} alt="Logo"/>
                </div>
                {
                    isLogin ?
                        <Link className={styles.loginBtn} to='/register'>
                            Signup
                        </Link> :
                        <Link className={styles.loginBtn} to='/login'>
                            Login
                        </Link>
                }
            </div>
            <h1>{pageTitle}</h1>
            {!isLogin && <p>We always keep your name and email address private.</p>}
            {isLogin ?
                <LoginForm onSubmit={() => {
                }}/> :
                <SignUpForm onSubmit={() => {
                }}/>}
        </div>
    )
}

export default Authentication