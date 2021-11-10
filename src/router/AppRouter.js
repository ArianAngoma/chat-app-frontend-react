import {useContext, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    // Route,
    Redirect
} from 'react-router-dom';

/* Importaciones propias */
import {ChatPage} from '../pages/ChatPage';
import {AuthRouter} from './AuthRouter';
import {AuthContext} from '../auth/AuthContext';
import {PublicRoute} from './PublicRoute';
import {PrivateRoute} from './PrivateRoute';

export const AppRouter = () => {
    const {auth, checkToken} = useContext(AuthContext);

    useEffect(() => {
        checkToken();
    }, [checkToken]);

    if (auth.checking) {
        return (
            <div className="m-0 vh-100 row justify-content-center align-items-center">
                <div className="spinner-border text-primary"></div>
            </div>
        );
    }

    return (
        <Router>
            <div>
                <Switch>
                    {/*<Route path="/auth" component={AuthRouter}/>*/}
                    <PublicRoute isAuthenticated={auth.logged} path="/auth" component={AuthRouter}/>

                    {/*<Route exact path="/" component={ChatPage}/>*/}
                    <PrivateRoute isAuthenticated={auth.logged} exact path="/" component={ChatPage}/>

                    <Redirect to="/"/>
                </Switch>
            </div>
        </Router>
    )
}