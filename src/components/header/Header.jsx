import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me.png'
import TypeWriterEffect from 'react-typewriter-effect';
import './header.css'
import HeaderSocials from './HeaderSocials'

export default function Header() {
 
  return (
    <header>
      <div className="container header_container">
        <h3>Hello, I'm</h3>
        <h1>Sajadul Islam</h1>
        
        <TypeWriterEffect
        textStyle={{
          fontFamily: 'Red Hat Display',
          color: '#ffff',
          textAlign:'center',
          fontWeight: 500,
          fontSize: '1.5em',
        }}
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[
          'Full-Stack Developer',
          'MERN-Stack Developer',
          'Problem-Solving Mindset',
          'A polyglot programmer',
          'Spesialized at React JS',
          'Full-Stack Developer',
        ]}
        multiTextDelay={1000}
        typeSpeed={30}
      />
        
        
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}
