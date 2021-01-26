import React, { useEffect, useState } from 'react'
import styles from './Item.module.css'

import ImageGallery from 'react-image-gallery';

const Metadata = ({ data }) => {

    return (
        <div>
            <div className={styles.imageContainer}>
                <ImageGallery showFullscreenButton={false} autoPlay={true} additionalClass={styles.galery} showThumbnails={false} items={data.images.map(image => ({original: image}))} />
            </div>
        </div>
    )
}

export default Metadata