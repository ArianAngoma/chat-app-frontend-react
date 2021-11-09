import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

/* Importaciones propias */
import {ChatPage} from '../pages/ChatPage';
import {AuthRouter} from './AuthRouter';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/auth" component={AuthRouter}/>
                    <Route exact path="/" component={ChatPage}/>

                    <Redirect to="/"/>
                </Switch>
            </div>
        </Router>
    )
}