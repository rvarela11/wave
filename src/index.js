// @vendors
import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';

// @containers
import App from './components/App';

// @reducers
import { reducer } from './store/reducers';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

// Setting the Material-UI theme
const theme = {};

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);
