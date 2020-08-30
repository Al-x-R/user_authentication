import React from 'react'
import PropTypes from 'prop-types'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import Input from '../components/Input'
import * as Yup from 'yup'


const SIGN_IN_VALIDATION_SCHEMA = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,40}$/).required(),
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
                    <button type='submit'>Login</button>
                </Form>
            )}
        </Formik>
    )
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default LoginForm