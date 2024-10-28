import React from 'react'
import PageHeaderContent from '../../Component/PageHeaderContent/PageHeaderContent'
import {BsInfoCircleFill} from "react-icons/bs"

const About = () => {
  return (
    <section className='about' id='about' style={{marginTop: "80px", zIndex: 200, position: "relative"}}>
        <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40}/>}
        />
    </section>
  )
}

export default About
