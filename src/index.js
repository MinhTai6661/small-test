import React from 'react';
import ReactDOM from 'react-dom/client';
 
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import GolbalStyle from './components/GlobalStyle';
import { Provider } from 'react-redux'
import store from './redux/store'
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'
import translations from './translations';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter >
    <Provider store={store}>
       <IntlProvider  translations={translations} locale='vi'>+
          <GolbalStyle>
            <App />
          </GolbalStyle>
       </IntlProvider>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
