import {Navbar} from '@attrybtech/attryb-ui';

import React from 'react';
import Alert from './alert';
import './nav.css';
function Navbar1({addtweet}) {
 
  return (
    <div className='navbar-fixed'>
                            <Navbar 
                        navbarLeftSection={

                        <ul className='navbar-list'>
                          <li>Home</li>
                          <li>Moments</li>
                          <li>Notifications</li>
                          <li className='messages'>
                            Messages
                            <img src="https://th.bing.com/th/id/R.b757f2bca8039d4a08882d38f4c1b8f0?rik=ghH7DAGg25Eeew&riu=http%3a%2f%2fpluspng.com%2fimg-png%2ftwitter-png-logo-logo-twitter-in-png-2500.png&ehk=8T3AUm4YM1VPbzANgHJr0FTLLw4och8GO%2bj%2fFN9SSrA%3d&risl=&pid=ImgRaw&r=0"/>
                            </li>
                        </ul>
                      }
                        navbarRightSection={
                    <>
                    <div class="right">
                    <Alert  addtweet={addtweet}/>
                    </div>
                    </>

                        }
                      
                      >

                      </Navbar>
    </div>
  )
}

export default Navbar1;
 