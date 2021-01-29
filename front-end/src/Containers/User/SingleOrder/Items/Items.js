import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './Items.module.css'

import ImageGallery from 'react-image-gallery';
import { toast } from 'react-toastify'

import SelectInput from '../../../Components/Forms/Input/SelectInput/SelectInput'
import Button from '../../../Components/Forms/Button/SimpleButton/SimpleButton'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

import { AddItem } from '../../../Utils/Redux/Actions/Cart'
import { connect } from 'react-redux'

const Item = ({ data, redux, dispatch }) => {

    const [size, setSize] = useState('')
    const [status, setStatus] = useState(undefined)
    const history = useHistory()


    const AddToCart = () => {
        if (size == "") {
            toast.error("Please choose a size")
        } else if (!redux.auth.isLoggedIn) {
            toast.error("Please log in before adding items to cart")
            history.push('/auth/login')
        } else {
            dispatch(AddItem({ item: data._id, size: size.value, price: data.price }))
            toast.success("Item added to cart")
            history.push('/user/cart')
        }
    }

    return (
        <div>
            <div className={styles.imageContainer}>
                <ImageGallery showFullscreenButton={false} autoPlay={true} additionalClass={styles.galery} showThumbnails={false} items={data.images.map(image => ({ original: image }))} />
            </div>
            <div className={styles.outerContainer}>
                <div>
                    <div className={styles.infoContainer}>
                        <h3>Title:</h3>
                        <h2>{data.title}</h2>
                    </div>
                    <div className={styles.infoContainer}>
                        <h3>Description:</h3>
                        <h2>{data.description}</h2>
                    </div>
                    <div className={styles.infoContainer}>
                        <h3>Price:</h3>
                        <h2>{`${parseFloat(data.price / 100)} €`}</h2>
                    </div>
                </div>
                <div className={styles.formContainer}>
                    <h1 className={styles.orderButton}>Order Now:</h1>
                    <div>
                        <SelectInput options={data.sizes.map(size => ({ value: size, label: size }))} onChange={setSize} value={size} label={"Select a size"} />
                        <Button submit={AddToCart} disabled={status == "loading"}>Add to cart   <FontAwesomeIcon icon={faShoppingBasket} /></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        redux: state
    }
}

export default connect(mapStateToProps)(Item)