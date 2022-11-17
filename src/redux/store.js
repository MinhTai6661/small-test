import { configureStore } from '@reduxjs/toolkit'
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'

 const store = configureStore({
    reducer: {
        Intl
    },
    
  })

  export default store
  