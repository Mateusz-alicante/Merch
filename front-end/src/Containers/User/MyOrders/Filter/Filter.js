import React, { useState } from 'react'
import styles from './Filter.module.css'

import Button from '../../../../Components/Forms/Button/SimpleButton/SimpleButton'
import SimpleTextInput from '../../../../Components/Forms/Input/SimpleTextInput/SimpleTextInput'
import SimpleSelect from '../../../../Components/Forms/Input/SelectInput/SelectInput'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import FilterOptions from './FilterOptions'


const Filters = (props) => {

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [year, setYear] = useState(FilterOptions.year[0])
    const [section, setSection] = useState(FilterOptions.section[0])
    const [open, setOpen] = useState(false)

    const submit = () => {
        const options = {}

        if (email != "") {options.email = email}
        if (name != "") {options.name = name}
        if (year.value != "all") {options.year = year.value}
        if (section.value != "all") {options.section = section.value}
        
        props.submit(options)
    }

    return (
        <div className={styles.Container}>
            <h2 onClick={() => setOpen(!open)}><FontAwesomeIcon icon={open ? faChevronDown : faChevronRight} /> Filter Orders:</h2>
            <div className={styles.innerContainer} style={{maxHeight: open ? "50em" : "0", marginBottom: open ? "5em" : "0"}}>
                <SimpleTextInput type={'Name'} value={email} onChange={setEmail} placeholder={"Search by email"} label={"E-mail:"}/>
                <SimpleTextInput value={name} onChange={setName} placeholder={"Search by name"} label={"Full name:"}/>
                <SimpleSelect label={"Year:"} value={year} onChange={value => setYear(value)} options={FilterOptions.year} />
                <SimpleSelect label={"Section:"} value={section} onChange={value => setSection(value)} options={FilterOptions.section} />
                <div className={styles.buttonContainer}><div className={styles.innerContainer}><Button submit={submit}>Search <FontAwesomeIcon icon={faSearch} /></Button></div></div>
            </div>
        </div>
    )
}

export default Filters