import React from 'react'
import IMG1 from '../../assets/planet-min.a84fa0d1.svg'
import IMG2 from '../../assets/cash-min.84752fdc.svg' 
import IMG3 from '../../assets/coin-min.1dcdd9c4.svg'
import IMG4 from '../../assets/plus-min.1f71d0e7.svg'

export default function BalanceShow () {
    return(
        <section id="balanceshow">
            <h1>My Stats</h1>
            <div>
                <p style={{marginBottom: '10px'}}>1.2.8 Update: Backward Galaxy </p>
                <a href='#' style={{color: "white", textDecoration: "Underline"}}>Read more about the 1.2.8 Update here</a>
            </div>
            <div className='statebalanceshow'>
                <div className='mystate'>
                    <div style={{width: '35px'}}><img src={IMG1} /></div>
                    <div>
                        <p style={{marginBottom: '10px', fontSize: '40px'}} id="myhalo">0</p>
                        <p style={{color: "white", fontSize: '30px'}}>My Halo</p>
                    </div>
                </div>
                <div className='mystate'>
                    <div style={{width: '35px'}}><img src={IMG2} /></div>
                    <div>
                        <p style={{marginBottom: '10px', fontSize: '40px'}}>0 Halo $0.00 </p>
                        <p style={{color: "white", fontSize: '30px'}}>My Halo Balance</p>
                    </div>
                </div>
                <div className='mystate'>
                    <div style={{width: '35px'}}><img src={IMG3} /></div>
                    <div>
                        <p style={{marginBottom: '10px', fontSize: '40px'}}>0 Halo $0.00 </p>
                        <p style={{color: "white", fontSize: '30px'}}>Estimated Per Day</p>
                    </div>
                </div>
            </div>
            <div className='smartdaily'>
                <h1>Smart Daily Limits</h1>
                <p style={{padding: '10px 30px'}}>Smart Daily Limits are part of Universe innovations to keep liquidity pools safer from bots and vicious whales. You are limited to only accumulating some tokens every 24 hours. You can always sell what you have bought at any time, which allows swing trading. You can always safely claim rewards for your planet(s) but transferring or selling them more than the limit will require you to wait 24 hours.</p>
                <div className='statebalanceshow'>
                    <div className='mystate'>
                        <div style={{width: '50px', height: '35px', position:'relative'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="33.5 33.5 67 67" data-v-49af6a0a="" style={{transform: 'rotate(-90deg)', overflow: 'visible'}}><circle cx="67" cy="67" r="31.5" stroke="#212121" strokeWidth="4" fill="none" data-v-49af6a0a=""></circle><circle cx="67" cy="67" r="31.5" fill="none" strokeWidth="4" strokeDasharray="197.92033717615698" strokeDashoffset="0" strokeLinecap="round" stroke="#fff" data-v-49af6a0a="" style={{transition: 'strokeDashoffset 400ms ease 0s'}}></circle><filter id="shd2_oitjabj90ols" width="500%" height="500%" x="-250%" y="-250%" data-v-49af6a0a=""><feOffset dx="-3" dy="0" data-v-49af6a0a=""></feOffset><feGaussianBlur stdDeviation="3" data-v-49af6a0a=""></feGaussianBlur><feComposite operator="out" in="SourceGraphic" result="inverse" data-v-49af6a0a=""></feComposite><feFlood floodColor="#000000" floodOpacity="0.4" result="color" data-v-49af6a0a=""></feFlood><feComposite operator="in" in="color" in2="inverse" result="shadow" data-v-49af6a0a=""></feComposite><feComposite operator="over" in="shadow" in2="SourceGraphic" data-v-49af6a0a=""></feComposite></filter></svg>
                            <span className="current-counter" data-v-49af6a0a="">100</span>
                        </div>
                        <div>
                            <p style={{marginBottom: '10px', fontSize: '20px'}} id="myhalo">200,000,000 UNIV</p>
                            <p style={{color: "white", fontSize: '20px'}}>Incoming Transfers Buys Remaining </p>
                        </div>
                    </div>
                    <div className='mystate'>
                        <div style={{width: '50px', height: '35px', position:'relative'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="33.5 33.5 67 67" data-v-49af6a0a="" style={{transform: 'rotate(-90deg)', overflow: 'visible'}}><circle cx="67" cy="67" r="31.5" stroke="#212121" strokeWidth="4" fill="none" data-v-49af6a0a=""></circle><circle cx="67" cy="67" r="31.5" fill="none" strokeWidth="4" strokeDasharray="197.92033717615698" strokeDashoffset="0" strokeLinecap="round" stroke="#fff" data-v-49af6a0a="" style={{transition: 'strokeDashoffset 400ms ease 0s'}}></circle><filter id="shd2_oitjabj90ols" width="500%" height="500%" x="-250%" y="-250%" data-v-49af6a0a=""><feOffset dx="-3" dy="0" data-v-49af6a0a=""></feOffset><feGaussianBlur stdDeviation="3" data-v-49af6a0a=""></feGaussianBlur><feComposite operator="out" in="SourceGraphic" result="inverse" data-v-49af6a0a=""></feComposite><feFlood floodColor="#000000" floodOpacity="0.4" result="color" data-v-49af6a0a=""></feFlood><feComposite operator="in" in="color" in2="inverse" result="shadow" data-v-49af6a0a=""></feComposite><feComposite operator="over" in="shadow" in2="SourceGraphic" data-v-49af6a0a=""></feComposite></filter></svg>
                            <span className="current-counter" data-v-49af6a0a="">100</span>
                        </div>
                        <div>
                            <p style={{marginBottom: '10px', fontSize: '20px'}}>7,000,000 UNIV </p>
                            <p style={{color: "white", fontSize: '20px'}}>Sells Remaining</p>
                        </div>
                    </div>
                    <div className='mystate'>
                        <div style={{width: '50px', height: '35px', position:'relative'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="33.5 33.5 67 67" data-v-49af6a0a="" style={{transform: 'rotate(-90deg)', overflow: 'visible'}}><circle cx="67" cy="67" r="31.5" stroke="#212121" strokeWidth="4" fill="none" data-v-49af6a0a=""></circle><circle cx="67" cy="67" r="31.5" fill="none" strokeWidth="4" strokeDasharray="197.92033717615698" strokeDashoffset="0" strokeLinecap="round" stroke="#fff" data-v-49af6a0a="" style={{transition: 'strokeDashoffset 400ms ease 0s'}}></circle><filter id="shd2_oitjabj90ols" width="500%" height="500%" x="-250%" y="-250%" data-v-49af6a0a=""><feOffset dx="-3" dy="0" data-v-49af6a0a=""></feOffset><feGaussianBlur stdDeviation="3" data-v-49af6a0a=""></feGaussianBlur><feComposite operator="out" in="SourceGraphic" result="inverse" data-v-49af6a0a=""></feComposite><feFlood floodColor="#000000" floodOpacity="0.4" result="color" data-v-49af6a0a=""></feFlood><feComposite operator="in" in="color" in2="inverse" result="shadow" data-v-49af6a0a=""></feComposite><feComposite operator="over" in="shadow" in2="SourceGraphic" data-v-49af6a0a=""></feComposite></filter></svg>
                            <span className="current-counter" data-v-49af6a0a="">100</span>
                        </div>
                        <div>
                            <p style={{marginBottom: '10px', fontSize: '20px'}}> 7,000,000 UNIV </p>
                            <p style={{color: "white", fontSize: '20px'}}>Outgoing Transfers Remaining</p>
                        </div>
                    </div>
                </div>
                <p style={{marginTop: '30px'}}>The limits will reset in 1 day.</p>
                <p>You are holding 0 out of 137,741,387 UNIV allowed per wallet (1% total supply).</p>
            </div>
            <h1>My Planets</h1>
            <p style={{marginTop: '20px', marginBottom: '20px'}}>Here you can view, manage, transfer, and mint Planets. You can see how many rewards have been allocated to you and claim or compound them.</p>
            <p style={{marginTop: '20px', marginBottom: '20px'}}>When you mint a planet, 100% of the UNIV are burned and then added to your Planet.
                There are no fees when compounding or claiming. What you see is what you get.</p>
            <p style={{marginTop: '20px', marginBottom: '20px'}}>Create your first planet by using the button below.</p>
            <button className='mint-btn'>
                <img src={IMG4} /> Mint Planet
            </button>
        </section>
    );
}