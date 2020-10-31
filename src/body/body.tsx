import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './body.scss'

export const Body = () => {
    return (
        <>
            <div className="body-content">
                bonjour je suis TOTO
                <Switch>
                    <Route path="/"
                        render={
                            () => {
                                return (
                                    <Redirect to="/lists" />
                                )
                            }
                        }
                    />
                    <Route path="/lists">
                    </Route>
                    <Route path="/join-list">
                    </Route>
                    <Route path="/connection">
                    </Route>
                </Switch>
            </div>
        </>
    )
}