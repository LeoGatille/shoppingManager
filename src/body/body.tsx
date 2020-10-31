import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './body.scss'

export const Body = () => {
    return (
        <>
            <div className="body-content">
                bonjour je suis TOTO
                <Switch>
                    <Route path="/input">
                    </Route>
                </Switch>
            </div>
        </>
    )
}