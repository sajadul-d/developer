import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import {FaGithub } from 'react-icons/fa'
import {FaFacebookSquare } from 'react-icons/fa'
function HeaderSocials() {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="#" target="_blank"><FaGithub/></a>
        <a href="#" target="_blank"><FaFacebookSquare/></a>
    </div>
  )
}

export default HeaderSocials