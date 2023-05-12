import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './style.css'

export default function Footer(props) {
  return (
    <div className='footer'> 
    <a className='linka' href={`mailto:${props.email}`}><i class="fa fa-envelope" aria-hidden="true"></i> GMail</a>
    <a className='linka' href={`${props.github}`}> <i class="fa fa-github" aria-hidden="true"></i>Github</a>
    <a className='linka' href={`${props.linkedin}`}><i class="fa fa-linkedin" style={{color:"blue",backgroundColor:'white', paddingLeft:'4px', paddingRight:'4px', borderRadius:'4px'}}></i>Linkedin</a>
    </div>
    
  )
}
