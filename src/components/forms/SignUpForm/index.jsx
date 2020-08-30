import React from 'react'
import PropTypes from 'prop-types'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import Input from '../components/Input'
import * as Yup from 'yup'
import {ref} from "yup";


const NAME_VALIDATION_SCHEMA = Yup.string()
    .min(2)
    .max(64)
    .matches(/^[[a-z]*$/i)
    .required()

const SIGN_UP_VALIDATION_SCHEMA = Yup.object({
    firstName: NAME_VALIDATION_SCHEMA,
    lastName: NAME_VALIDATION_SCHEMA,
    displayName: Yup.string().min(6).max(64).required(),
    email: Yup.string().email().required(),
    password: Yup.string().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,40}$/).required(),
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
                <Form>
                    {
                        fields.map(field => (
                                <Field key={field.name} {...field}>
                                    {fieldProps => <label>
                                        <Input {...fieldProps} placeholder={field.placeholder}/>
                                        <ErrorMessage name={fieldProps.field.name}/>
                                    </label>
                                    }
                                </Field>
                            )
                        )
                    }
                    <button type='submit'>Sign Up</button>
                </Form>
            )}
        </Formik>
    )
}

SignUpForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default SignUpForm