import React from 'react'
import PageHeaderContent from '../../Component/PageHeaderContent/PageHeaderContent'
import {BsInfoCircleFill} from "react-icons/bs"

const Portfulio = () => {
    return (
    <section className='portfulio' id='portfulio' style={{marginTop: "80px", zIndex: 200, position: "relative"}}>
        <PageHeaderContent
        headerText="My Portfulio"
        icon={<BsInfoCircleFill size={40}/>}
        />
    </section>
)
}

export default Portfulio
