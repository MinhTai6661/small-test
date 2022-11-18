
 

import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/home/HomePage';
import { useEffect, useState } from 'react';
import Container from './components/Container';
import GuidePage from './pages/GuidePage';
import ActivitiesList from './pages/ActivitiesList';
import images from './assets';
import { useTranslate } from 'react-redux-multilingual'
import { useSelector, useDispatch } from 'react-redux'

import { IntlActions } from 'react-redux-multilingual'
import store from './redux/store';
import CustommerCare from './pages/CustomerCare';
import Login from './pages/Login';

// let store = createStore(reducers)
// store.dispatch(IntlActions.setLocale('zh'))



function App() {
  const dispatch  = useDispatch()

  const translate = useTranslate()
 
  const [count, setCount] = useState(1)
   
  

  return (
    <div className="App"  >
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/guide' element={<GuidePage />} />
          <Route path='/activities-list' element={<ActivitiesList />} />
          <Route path='/custommer-care' element={<CustommerCare />} />
          <Route path='/login' element={<Login />} />
          {/* <Route element={<h1>NOT FOUND</h1>} /> */}
        </Routes>
      </Container>
    </div>
  );
}

export default App;
