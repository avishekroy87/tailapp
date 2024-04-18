import axios from 'axios';
import { useEffect, useState } from "react";

const Consumerlist = () => {
    const [tranversedata, setTranversedata] = useState([]);
    useEffect(() => {
        const getConsumerList = () => {

            axios.get('https://reqres.in/api/users?page=2')
                .then((response) => {
                    const showVal = response.data;
                    setTranversedata(showVal.data)
                })
                .catch(error => console.error(`Error: ${error}`))
        }
        getConsumerList()
    }, [])


    return (

        <>
            <ul>
                {tranversedata && tranversedata.map((name) => {
                    return (<li key={name.id}>{name.email}</li>)
                })}
            </ul>
        </>
    )
}

export default Consumerlist