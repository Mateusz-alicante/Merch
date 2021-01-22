import React, {useState} from 'react'
import styles from './Login.module.css'

import SignUpButton from '../SignUpButton/SignUpButton'
import SimpleTextInput from '../../../../Components/Forms/Input/SimpleTextInput/SimpleTextInput'
import SimpleButton from '../../../../Components/Forms/Button/SimpleButton/SimpleButton'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";


const Login = () => {

    const [email, setEmail] = useState(undefined)
    const [password, setpassword] = useState(undefined)
    return (
        <div>
            <SignUpButton linkTo={'/auth/signup'} text={"If you still dont have an account, create one now!"} />
            <form className={styles.LoginForm}>
                <SimpleTextInput value={email} onChange={setEmail} placeholder={"email"} label={"E-mail:"}/>
                <SimpleTextInput value={password} onChange={setpassword} placeholder={"password"} label={"Password:"}/>
                <SimpleButton>Log in   <FontAwesomeIcon icon={faSignInAlt} /></SimpleButton>
            </form>
        </div>
    )
}

export default Login