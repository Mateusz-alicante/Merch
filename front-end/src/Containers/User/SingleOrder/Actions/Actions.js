import React, {useEffect} from 'react'
import styles from './Actions.module.css'
import { connect } from 'react-redux'
import Button from '../../../../Components/Forms/Button/SimpleButton/SimpleButton'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Actions = (props) => {
    useEffect(() => {
        console.log(props.admin)
    }, [])
 

    return (
        <div className={styles.grid}>
            {props.admin && <Button width={"70%"} submit={props.fulfill}><span style={{ color: "green" }}>Fulfill Order <FontAwesomeIcon icon={faCheckCircle} /></span></Button>}
            <Button width={"70%"} submit={props.cancel}><span style={{ color: "red" }}>Cancel Order <FontAwesomeIcon icon={faTimesCircle} /></span></Button>
        </div>
    )
}


export default Actions
