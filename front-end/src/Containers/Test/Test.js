import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Test = () => {
    const [message, setMessage] = useState(undefined)

    useEffect(async () => {
        try {
            const resp = await axios.get('/api/test');
            console.log(resp)
            setMessage(resp.data)
        } catch (err) {
            console.error(err);
        }
    })

    return (
        <div className="App">
            <header className="App-header">
                <p>{message ? message : "message has not yet arrived"}</p>
            </header>
        </div>
    );
}

export default Test