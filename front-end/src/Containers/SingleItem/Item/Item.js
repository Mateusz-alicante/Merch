import React, { useEffect, useState } from 'react'
import styles from './Item.module.css'

import ImageGallery from 'react-image-gallery';
import { toast } from 'react-toastify'

import SelectInput from '../../../Components/Forms/Input/SelectInput/SelectInput'
import Button from '../../../Components/Forms/Button/SimpleButton/SimpleButton'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

const Item = ({ data }) => {

    const [size, setSize] = useState('')
    const [status, setStatus] = useState(undefined)

    useEffect(() => console.log(data), [])

    const AddToCart = () => {
        toast.error("This option is yet under construction")
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
                    <h1>Order Now:</h1>
                    <div>
                        <SelectInput options={data.sizes.map(size => ({ value: size, label: size }))} onChange={setSize} value={size} label={"Select a size"} />
                        <Button submit={AddToCart} disabled={status == "loading"}>Add to cart   <FontAwesomeIcon icon={faShoppingBasket} /></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item