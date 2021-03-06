import React from 'react'
import PropTypes from 'prop-types'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import Input from '../components/Input'
import * as Yup from 'yup'
import {ref} from "yup";
import styles from './SignUpForm.module.scss'


const NAME_VALIDATION_SCHEMA = Yup.string()
    .min(2)
    .max(64)
    .matches(/^[[a-z]*$/i, 'this field must contain only letters')
    .required()

const SIGN_UP_VALIDATION_SCHEMA = Yup.object({
    firstName: NAME_VALIDATION_SCHEMA,
    lastName: NAME_VALIDATION_SCHEMA,
    displayName: Yup.string().min(6).max(64).required('name must be at least 6 characters'),
    email: Yup.string().email().required(),
    password: Yup.string()
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,40}$/,
            "password must be at least 8 characters long and contain at least one capital letter")
        .required(),
    passwordConfirm: Yup.string().oneOf[ref('password')]
})

function SignUpForm(props) {
    const {onSubmit} = props

    const fields = [
        {
            name: 'firstName',
            type: 'text',
            initialValue: '',
            placeholder: 'First name',
        },
        {
            name: 'lastName',
            type: 'text',
            initialValue: '',
            placeholder: 'Last name',
        },
        {
            name: 'displayName',
            type: 'text',
            initialValue: '',
            placeholder: 'Display name',
        },
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
        {
            name: 'passwordConfirm',
            type: 'password',
            initialValue: '',
            placeholder: 'Password confirmation',
        },
    ]

    const initialValues = fields.reduce((total, field) =>
        (total[field.name] = field.initialValue, total), {}
    )

    return (
        <Formik onSubmit={onSubmit}
                initialValues={initialValues}
                validationSchema={SIGN_UP_VALIDATION_SCHEMA}
        >
            {formikProps => (
                <Form className={styles.form}>
                    {
                        fields.map(field => (
                                <Field key={field.name} {...field}>
                                    {fieldProps => <label className={styles.field}>
                                        <Input {...fieldProps} {...field}
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
                    <div className={styles.field_container}>
                        <Field className={styles.radio} type="radio" name="picked" value="JoinAsBuyer"/>
                        <label className={styles.label}>
                            Join As a Buyer
                            <span>I am looking for a Name, Logo or Tagline for my business, brand or product.</span>
                        </label>
                    </div>
                    <div className={styles.field_container}>
                        <Field className={styles.radio} type="radio" name="picked" value="JoinAsCreative"/>
                        <label className={styles.label}>
                            Join As a Creative or Marketplace Seller
                            <span>I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.</span>
                        </label>
                    </div>
                    <button className={styles.submit} type='submit'>Sign Up</button>
                </Form>
            )}
        </Formik>
    )
}

SignUpForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default SignUpForm