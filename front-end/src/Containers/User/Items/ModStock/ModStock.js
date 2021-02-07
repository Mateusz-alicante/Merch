import styles from './ModStock.module.css'
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router";
import StockMatrix from '../../../../Components/Forms/StockMatrix/StockMatrix'
import Loader from '../../../../Components/Loaders/Circle/Circle'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'

import Button from '../../../../Components/Forms/Button/SimpleButton/SimpleButton'

const ModStock = (props) => {

    const history = useHistory()
    const { id } = useParams()
    const [data, setData] = useState({})
    const [stock, setStock] = useState({})
    const [status, setStatus] = useState('loading')
    const [actionStatus, setActionStatus] = useState(undefined)

    useEffect(() => {
        fetchItem()
    }, [])

    const fetchItem = async () => {
        const response = await axios.get(`/api/items/fetchItem?id=${id}`)
        if (response && response.status === 200) {
            setData({ thumb: response.data.thumbnail, title: response.data.title, id: response.data._id, colors: response.data.colors, sizes: response.data.sizes })
            setStock(response.data.stock)
            setStatus('OK')
        }
    }

    const SaveItem = async () => {
        setActionStatus('loading')
        const response = await axios.post('/api/items/updateStock', {
            id: data.id,
            stock,
        }, {
            headers: {
                authorization: props.redux.auth.token
            }
        }).catch(e => {
            setActionStatus(undefined)
            toast.error('Save unsuccessful, check the inputs and try again')
            console.log(e)
        })
        if (response && response.status === 200) {
            setActionStatus(undefined)
            toast.success('Saved successfuly', {
                position: toast.POSITION.BOTTOM_RIGHT,
            })
            history.push('/user')
        }
    }

    const Content = () => (
        <div>
            <h1>Modify the stock of this item:</h1>
            <div>
                <h1>{data.title}</h1>
                <img src={data.thumb} />
            </div>
            <StockMatrix load={stock} sizes={data.sizes} colors={data.colors} stock={stock} setStock={setStock} />
            <div className={styles.buttonContainer}>
                <Button disabled={actionStatus == "loading"} submit={SaveItem}>Save   <FontAwesomeIcon icon={faSave} /></Button>
            </div>
        </div>
    )

    return status != "loading" ? <Content /> : <Loader />
}

const mapStateToProps = (state) => {
    return {
        redux: state
    }
}

export default connect(mapStateToProps)(ModStock)