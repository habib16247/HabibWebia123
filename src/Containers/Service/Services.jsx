import React from 'react'
import PageHeaderContent from '../../Component/PageHeaderContent/PageHeaderContent'
import {BsInfoCircleFill} from "react-icons/bs"

const Services = () => {
    return (
    <section className='services' id='services' style={{marginTop: "80px", zIndex: 200, position: "relative"}}>
        <PageHeaderContent
        headerText="My Services"
        icon={<BsInfoCircleFill size={40}/>}
        />
    </section>
    )
}

export default Services
