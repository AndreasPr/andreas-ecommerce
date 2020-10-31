import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

import './index.css';
import App from './App';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';

import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import common_en from './translations/en/common.json';
import common_es from './translations/es/common.json';

i18next.init({
  interpolation:{escapeValue: false},
  lng: 'en',                              // language to use
  resources: {
      en: {
          common: common_en               // 'common' is our custom namespace
      },
      es: {
          common: common_es
      },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <I18nextProvider i18n={i18next}>
          <App />
        </I18nextProvider>
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();