import React from 'react'
import {SignUpForm} from "../../components/forms"
import {LoginForm} from '../../components/forms'
import styles from './Authentication.module.scss'
import {Link} from "react-router-dom";
import logo from "./logo.png";

function Authentication(props) {
    const isLogin = props.match.path === '/login'
    const pageTitle = isLogin ? 'LOGIN TO YOUR ACCOUNT' : 'CREATE AN ACCOUNT'

    return (
        <>
            <header>
                <div className={styles.wrapper}>
                    <Link to='/' className={styles.brand}>
                        <img src={logo} alt="Logo"/>
                    </Link>
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

            </header>
            <main>
                <h1 className={styles.pageTitle}>{pageTitle}</h1>
                {!isLogin && <p className={styles.pageDescription}>We always keep your name and email address private.</p>}
                {isLogin ?
                    <LoginForm onSubmit={() => {
                    }}/> :
                    <SignUpForm onSubmit={() => {
                    }}/>}
            </main>
        </>


    )
}

export default Authentication