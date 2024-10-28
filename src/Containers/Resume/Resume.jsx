import React from 'react'
import PageHeaderContent from '../../Component/PageHeaderContent/PageHeaderContent'
import {BsInfoCircleFill} from "react-icons/bs"

const Resume = () => {
    return (
    <section className='resume' id='resume' style={{marginTop: "80px", zIndex: 200, position: "relative"}}>
        <PageHeaderContent
        headerText="My Resume"
        icon={<BsInfoCircleFill size={40}/>}
        />
    </section>
    )
}

export default Resume
