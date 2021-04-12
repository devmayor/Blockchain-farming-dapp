import React, { useState } from 'react';
import './Zap.css'

export const Zap = (props) => {
    const [activeTab, setActiveTab] = useState('deposit')

    return <div className="zap">
        <div className="card">
            <div className="switch">
                {['deposit', 'withdraw'].map(tab => {
                    return (
                        <button onClick={() => setActiveTab(tab)} className={activeTab === tab ? "active-switch" : null}>{tab}</button>
                    )
                })}
            </div>
            <div className="list-info">
                <span>
                    Farm APY:
                </span>
                <b>
                    19%
                </b>
            </div>
            <div className="list-info">
                <span>
                    Deposit:
                </span>
                <b>
                    BUSD 1000
                </b>

            </div>
            <div className="list-info">
                <span>
                    Claimable:
                </span>
                <b>
                    BNB 0
                </b>
            </div>
            <div className="input-group">
                <input placeholder={`Enter Amount in ${activeTab === 'deposit' ? 'BUSD' : 'BNB'}`} />
                <button> Max </button>
            </div>
            <span className="available-balance">
                Available balance: 100.43 {activeTab === 'deposit' ? 'BUSD' : 'BNB'}
            </span>
            <button className="connect-btn">
                {activeTab === 'deposit' ? 'Deposit' : 'Claim & Withdraw'}
            </button>
        </div>
    </div >
}