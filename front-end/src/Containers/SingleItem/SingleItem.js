import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import axios from 'axios'
import styles from './SingleItem.module.css'
import Item from './Item/Item'

const SinglePost = () => {

    const { id } = useParams()
    const [data, setData] = useState({})
    const [status, setStatus] = useState('loading')

    const fetchArticle = async () => {
        const response = await axios.get(`/api/items/fetchItem?id=${id}`)
        if (response && response.status === 200) {
            setData(response.data)
            setStatus('OK')
        }
    }

    useEffect(() => {
        fetchArticle()
    }, [])
    
        return (
            <div>
                {status == 'OK' ? <Item data={data} /> : <h1>Loading...</h1>}
            </div>
        )
}

export default SinglePost