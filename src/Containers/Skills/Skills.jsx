import React from 'react'
import PageHeaderContent from '../../Component/PageHeaderContent/PageHeaderContent'
import {BsInfoCircleFill} from "react-icons/bs"

const Skills = () => {
  return (
    <section className='skills' id='skills' style={{marginTop: "80px", zIndex: 200, position: "relative"}}>
        <PageHeaderContent
        headerText="My Skills"
        icon={<BsInfoCircleFill size={40}/>}
        />
    </section>
  )
}

export default Skills
