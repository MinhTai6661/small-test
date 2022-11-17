import { configureStore } from '@reduxjs/toolkit'
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'
import { IntlActions } from 'react-redux-multilingual'


 const store = configureStore({
    reducer: {
        Intl
    },
    
  })
  store.dispatch(IntlActions.setLocale('vi')) //set default language

  export default store
  