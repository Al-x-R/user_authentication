import React from 'react'
import {Link, NavLink} from "react-router-dom"
import styles from './TopBar.module.scss'

const TopBar = () => {
        return (
            <nav className={styles.navbar}>
                <div className={styles.container}>
                    <Link to='/' className={styles.navbarBrand}>
                        medium
                    </Link>
                    <ul className={styles.navbarRight}>
                        <li className={styles.navItem}>
                            <NavLink to='/' className={styles.navbarLink} exact activeStyle={{
                                fontWeight: "bold",
                                color: "black"
                            }}>
                                home
                            </NavLink>
                        </li>
                        <li className={styles.navItem}>
                            <NavLink to='/login' className={styles.navbarLink} activeStyle={{
                                fontWeight: "bold",
                                color: "black"
                            }}>
                                Sign in
                            </NavLink>
                        </li>
                        <li className={styles.navItem}>
                            <NavLink to='/register' className={styles.navbarLink} activeStyle={{
                                fontWeight: "bold",
                                color: "black"
                            }}>
                                Register
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
}

export default TopBar;