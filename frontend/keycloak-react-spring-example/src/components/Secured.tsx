import React, {useEffect, useState} from 'react';
import UserService from "../service/UserService";


const Secured = () => {
    const [message, setMessage] = useState<string>()

    useEffect(() => {
        fetch('http://localhost:8080/api/secured', {
            headers: {
                "Authorization": `Bearer ${UserService.getToken()}`
            }
        })
            .then(resp => resp.text())
            .then(resp => setMessage(resp))
    }, [])

    return (
        <div>
            <h1 className="text-black text-4xl">Welcome to the Protected Page.</h1>
            <h2>{message}</h2>
        </div>
    );
};

export default Secured;