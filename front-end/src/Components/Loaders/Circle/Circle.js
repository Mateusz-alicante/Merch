import React from 'react'
import { jsx } from '@emotion/react'
import { css } from "@emotion/core";
import CircleLoader from "react-spinners/CircleLoader";

import styles from './Cricle.module.css'

const DataTable = props => (
    <div className={styles.loaderContainer}>
        <div className={styles.innerContainer}>
            <CircleLoader color={"blue"} loading={true} css={css} size={150} />
        </div>
    </div>
)


export default DataTable