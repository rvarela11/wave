// @vendors
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// @material-ui
import { ThemeProvider, createTheme } from '@mui/material/styles';

// @containers
import App from './components/App';

// @reducers
import { reducer } from './store/reducers';

// @style
import './css--reset.css';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

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
