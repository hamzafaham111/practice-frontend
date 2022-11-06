import React, { useState } from 'react'
import Register from './Register'
import Login from './Login'
import LOGO from './Assets/ADCL-LOGO (2).png'
const Index = (Props) => {
    const [state, setState] = useState(true)

    return (
        <div >
            <div style={{
                display: "flex", justifyContent: "center",

            }}>
                <img src={LOGO} style={{ filter: "drop-shadow(5px 5px 5px #666666)", marginTop: "10px", marginBottom: "20px", objectFit: "cover", }} alt="ADCL Logo" />
            </div>
            {
                state ? <><Login cb={setState} p={Props.cb} /></> : <><Register cb={setState} /></>
            }
        </div>
    )
}

export default Index