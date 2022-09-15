import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount } from './redux/slices/counterSlice';
import {getPostsAPI} from './services/PostService';
import { useEffect, useState } from 'react';
import Web from './Web';
import GlobalStyle from './components/GlobalStyle';


function App() {
  
  return (
    <GlobalStyle>
      <Web />
    </GlobalStyle>
  );
}


export default App;
