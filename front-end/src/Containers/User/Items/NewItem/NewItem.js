import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import styles from './NewItem.module.css'

import SimpleTextInput from '../../../../Components/Forms/Input/SimpleTextInput/SimpleTextInput'
import SimpleButton from '../../../../Components/Forms/Button/SimpleButton/SimpleButton'
import TextArea from '../../../../Components/Forms/Input/TextArea/TextArea'

import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";


const NewItem = (props) => {

    const [title, setTitle] = useState("")
    const [thumb, setThumb] = useState("")
    const [desc, setDesc] = useState("")
    const [sizes, setSizes] = useState("")
    const [images, setImages] = useState("")
    const [price, setPrice] = useState("")
    const [status, setStatus] = useState(undefined)

    const history = useHistory()

    const RequestSave = async () => {
        setStatus('loading')
        const response = await axios.post('/api/items/saveItem', {
            title,
            thumb,
            desc,
            price,
            sizes: sizes.split(','),
            images: images.split(',')
        }, {
            headers: {
                authorization: props.redux.auth.token
            }
        })
        if (response && response.status === 200 && response.data.token) {
            setStatus(undefined)
            history.push('/user')
            toast.success('Saved successfuly', {
                position: toast.POSITION.BOTTOM_RIGHT,
            })
        } else {
            setStatus(undefined)
            toast.error('Save unsuccessful, check the inputs and try again', {
                position: toast.POSITION.BOTTOM_RIGHT,
            })
        }
    }


    return (
        <div>
            <form className={styles.NewForm}>
                <SimpleTextInput value={title} onChange={setTitle} placeholder={"title"} label={"Title:"} />
                <TextArea value={desc} onChange={setDesc} placeholder={"description"} label={"Description:"} />
                <SimpleTextInput value={thumb} onChange={setThumb} placeholder={"url of the image of the thumbnail"} label={"Thumbnail:"} />
                <SimpleTextInput value={price} onChange={setPrice} placeholder={"The price of the item"} label={"Price:"} />
                <TextArea value={sizes} onChange={setSizes} placeholder={"Enter the sizes, separated by a comma ','"} label={"Sizes:"} />
                <TextArea value={images} onChange={setImages} placeholder={"Enter the url's of the images, separated by a comma ','"} label={"Images:"} />
                <SimpleButton disabled={status == "loading"} submit={RequestSave} >Save   <FontAwesomeIcon icon={faCloudUploadAlt} /></SimpleButton>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        redux: state
    }
}

export default connect(mapStateToProps)(NewItem)