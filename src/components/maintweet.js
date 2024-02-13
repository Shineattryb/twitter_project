import React from 'react'
import { MainHeader } from '@attrybtech/attryb-ui'

import './main.css';
const DocMainHeader=({tweets})=> {
  return (
    <div>
      <div className="card-container">
         {/* <ul> */}
                    {tweets.map((tweet,index)=>(
                       
                        <div key={index} className='tweet-card'>
                            <div className="description">
                            <img src="https://www.pngkey.com/png/full/2-27646_twitter-logo-png-transparent-background-logo-twitter-png.png" />
                            <div className='d2'>
                            <p id="paragraph"><span>Remy</span> @remy Nov 19</p>
                           
                             {/* <h2><b>Tweet:</b></h2> */}
                            <p id="p2">{tweet}</p>
                            </div>
                            </div>
                            </div>
                    ))}
                {/* </ul> */}
            </div>
        </div>
 
  )
}

export default DocMainHeader
