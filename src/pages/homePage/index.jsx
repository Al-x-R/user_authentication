import React from 'react'
import styles from './homePage.module.scss'
import {Link, NavLink} from 'react-router-dom'
import logo from './logo-color.png'

const HomePage = () => {
    return (
        <>
            <header>
                <Link to='/' className={styles.brand}>
                    <img src={logo} alt="Logo"/>
                </Link>
                <ul className={styles.links}>
                    <li className={styles.linkItem}>
                        <NavLink to='/login' className={styles.link} activeStyle={{
                            fontWeight: "bold",
                            color: "black"
                        }}>
                            Login
                        </NavLink>
                    </li>
                    <li className={styles.linkItem}>
                        <NavLink to='/register' className={styles.link} activeStyle={{
                            fontWeight: "bold",
                            color: "black"
                        }}>
                            Signup
                        </NavLink>
                    </li>
                </ul>
            </header>
        </>
    )
}

export default HomePage
