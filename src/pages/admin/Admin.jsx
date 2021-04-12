import React, { useState } from 'react';
import './Admin.css'

export const Admin = (props) => {

    return (
        <div className="admin">
            <div className="card">
                <div className="analytic">
                    <h5>Total Pool Balance (BUSD)</h5>
                    <h1>12,000,222</h1>
                </div>

                <div className="analytic">
                    <h5>Total Pool Users</h5>
                    <h1>12,000</h1>
                </div>

                <div className="analytic">
                    <h5>Remaining Tokens</h5>
                    <h1>12,000</h1>
                </div>
            </div>
        </div >
    )
}