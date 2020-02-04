import React from 'react';

const Card = () =>
    <div className='Credit-Card'>
        <h1 className='Credit-Card-title'>CREDIT CARD </h1>
        <div className='Credit-Card-chip'>
            <img src='https://pngimage.net/wp-content/uploads/2018/05/credit-card-chip-png-9.png' width='20%' />
        </div>

        <div className='Credit-Card-number'>
            <h5> 7253 3256 7895 1245</h5>
        </div>
        <div className='Credit-Card-Content '>
            <div className='Credit-Card-holder'>
                <h1>5422</h1>
                <h1>CARDHOLDER</h1>
              </div>
              <div className='valid'>
               <p> VALID <br></br>THRU</p>
              </div>
            <div className='Credit-Card-Valid'>
            <p className='month'>MONTH/YEAR</p>
                <h1 className='valid'> <i class="fas fa-caret-right"></i>11/50</h1>
            </div>

            <div className='Credit-Card-Logo'>
                <img src="https://i.ebayimg.com/images/g/B7MAAMXQgJRRBDvt/s-l300.jpg" />
            </div>

        </div>
    </div>


export default Card
