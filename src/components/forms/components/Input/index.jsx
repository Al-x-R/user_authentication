import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './Input.module.scss'

function Input(props) {
    const {
        field,
        meta: {error, touched},
        ...rest
    } = props
    const isError = error && touched

    const inputClassName = classNames(styles.input, {
        [styles.inputValid]: !error && touched,
        [styles.inputError]: isError
    })


    return (
        <input className={inputClassName} {...field} {...rest}/>
    )
}

Input.propTypes = {
    type: PropTypes.oneOf(['text', 'email', 'url', 'password', 'textarea'])
}

Input.defaultProps = {
    type: 'text'
}

export default Input