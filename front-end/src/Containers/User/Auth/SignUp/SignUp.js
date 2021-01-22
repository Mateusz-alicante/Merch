import React, {useState} from 'react'
import styles from './SignUp.module.css'


import SignUpButton from '../SignUpButton/SignUpButton'
import SimpleTextInput from '../../../../Components/Forms/Input/SimpleTextInput/SimpleTextInput'
import SimpleButton from '../../../../Components/Forms/Button/SimpleButton/SimpleButton'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";


const SignUp = () => {

    const [email, setEmail] = useState(undefined)
    const [password, setPassword] = useState(undefined)
    const [repeatPassword, setRepeatPassword] = useState(undefined)
    const [name, setName] = useState(undefined)
    return (
        <div>
            <SignUpButton linkTo={'/auth/login'} text={"If you already have an account, log in now!"} />
            <form className={styles.SignUpForm}>
                <SimpleTextInput value={email} onChange={setEmail} placeholder={"email"} label={"E-mail:"}/>
                <SimpleTextInput value={name} onChange={setName} placeholder={"name"} label={"Full name:"}/>
                <SimpleTextInput value={password} onChange={setPassword} placeholder={"password"} label={"Password:"}/>
                <SimpleTextInput value={repeatPassword} onChange={setRepeatPassword} placeholder={"confirm password"} label={"Confirm password:"}/>
                <SimpleButton>Sign Up   <FontAwesomeIcon icon={faSignInAlt} /></SimpleButton>
            </form>
        </div>
    )
}

export default SignUp