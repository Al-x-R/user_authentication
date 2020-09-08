import React from 'react'
import PropTypes from 'prop-types'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import Input from '../components/Input'
import * as Yup from 'yup'
import styles from './LoginForm.module.scss'

const SIGN_IN_VALIDATION_SCHEMA = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string()
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,40}$/, "\n" +
            "password must be at least 8 characters long and contain at least one capital letter")
        .required(),
})

function LoginForm(props) {
    const {onSubmit} = props

    const fields = [
        {
            name: 'email',
            type: 'email',
            initialValue: '',
            placeholder: 'Email address',
        },
        {
            name: 'password',
            type: 'password',
            initialValue: '',
            placeholder: 'Password',
        },
    ]

    const initialValues = fields.reduce((total, field) =>
        (total[field.name] = field.initialValue, total), {}
    )


    return (
        <Formik onSubmit={onSubmit}
                initialValues={initialValues}
                validationSchema={SIGN_IN_VALIDATION_SCHEMA}
        >
            {formikProps => (
                <Form className={styles.form}>
                    {
                        fields.map(field => (
                                <Field key={field.name} {...field} >
                                    {fieldProps => <label className={styles.field}>
                                        <Input {...fieldProps}
                                               {...field}
                                               className={styles.input}
                                        />
                                        <ErrorMessage name={fieldProps.field.name}>
                                            {(msg) => <div className={styles.error}>{msg}</div>}
                                        </ErrorMessage>
                                    </label>
                                    }
                                </Field>
                            )
                        )
                    }
                    <button type='submit' className={styles.submitButton}>Login</button>
                </Form>
            )}
        </Formik>
    )
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default LoginForm