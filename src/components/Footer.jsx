import React from 'react'
import { GiBearHead } from "react-icons/gi";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    
      <footer className="footer">

      <Link to={'/'}><GiBearHead />    Pichi-Gamez</Link>
      
      <div className="redes">
      <Link to={'/'}><i><FaInstagram /></i>  Instagram</Link>
        
      <Link to={'/'}><i><FaFacebook/></i> Facebook</Link>
      <Link to={'/'}><i> <FaTwitter /> </i>Twitter</Link>
      <Link to={'/'}><i > <FaWhatsapp /> </i>WhatsApp</Link>
      <Link to={'/'}><i className="fa-brands fa-discord"> <FaDiscord/> </i>Discord</Link>
      <Link to={'/'}><i className="fa-regular fa-envelope"> <IoIosMail/> </i>Pichi-Gamez@gmail.com</Link>
        

         
       
      </div>
    </footer>
    
  )
}

export default Footer