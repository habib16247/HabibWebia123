import React from 'react'
import PageHeaderContent from '../../Component/PageHeaderContent/PageHeaderContent'
import {BsInfoCircleFill} from "react-icons/bs"

const Contact = () => {
  return (
    <section className='contact' id='contact' style={{marginTop: "80px", zIndex: 200, position: "relative"}}>
    <PageHeaderContent
    headerText="Contact Me"
    icon={<BsInfoCircleFill size={40}/>}
    />
</section>
  )
}

export default Contact
