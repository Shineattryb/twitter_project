import logo from './logo.svg';
import './App.css';
import Navbar1 from './components/navbar1';
// import {AlertPopup} from '@attrybtech/attryb-ui';
import {useClickOutside} from '@attrybtech/attryb-ui';
// import {Backdrop} from '@attrybtech/attryb-ui/lib/layout';
import Alert from './components/alert';
import React,{useState} from 'react';
import DocSidebar from './components/sidebar';
import DocMainHeader from './components/maintweet';
import DocMainHeader1 from './components/main_header_side';

function App() {
 const [tweets, settweets]=useState([]);
 const addtweet=(tweet)=>{
  settweets([tweet, ...tweets]);
 }
  return (
    <>
    
  <Navbar1 addtweet={addtweet}/>
  <div className='container'>
 {/* <DocSidebar/> */}
 <DocMainHeader1 />
 <div className='main-header'>
 <DocMainHeader  tweets={tweets}/>
 </div>
 </div>

  </>
  );
}

export default App;
