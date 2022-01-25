// @vendors
import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// @material-ui
import { ThemeProvider, createTheme } from '@mui/material/styles';

// @containers
import App from './components/App';

// @reducers
import { reducer } from './store/reducers';

// @style
import './css--reset.css';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

// Setting the Material-UI theme
const theme = createTheme({});

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);
