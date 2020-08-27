import React from 'react'
import {Switch, Route} from 'react-router-dom'
import HomePage from './../pages/homePage'

export default () => {
    return (
        <Switch>
            <Route path='/' component={HomePage} exact />
            <Route path='/login' component={HomePage} />
            <Route path='/register' component={HomePage} />
        </Switch>
    )
}