import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ExpenseDashboardPage from '../componenets/Dashboard';
import AddExpensePage from '../componenets/AddExpense';
import EditExpensePage from '../componenets/EditExpense';
import HelpPage from '../componenets/Help';
import NotFoundPage from '../componenets/404NotFound';
import Header from '../componenets/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

// /edit?key1=value1&key2=value2 (search)
// #contact-us (hash)

export default AppRouter;