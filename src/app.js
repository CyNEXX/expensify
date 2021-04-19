import 'react-dates/initialize';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import { addExpense } from './actions/expenses';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();
store.subscribe(() => {
    const state = store.getState();
    console.log('-- STATE -- ', state);
});

store.dispatch(addExpense({ description: 'Water bill', amount: 1, createdAt: 4500 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 10, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 25, createdAt: 800 }));
/* store.dispatch(setTextFilter('bill')); */


/* setTimeout(function () {
    store.dispatch(setTextFilter('water'));
}, 3000); */

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>

);

ReactDOM.render(jsx, document.getElementById('app'));
