import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faInstagram, faFacebook, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FormattedMessage  as T} from 'react-intl';
import QRCode from "react-qr-code";
import './Footer.scss'



const Footer = () => {
    return (
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            Upgrade<span>Store</span>
          </h3>
        </div>
        <div className="footer-rrss">
          <p>
          <a href="www.instagram.com"><FontAwesomeIcon className='icon' icon={faInstagram} /></a>
          <a href="www.facebook.com"><FontAwesomeIcon className='icon' icon={faFacebook} /></a>
          <a href="www.tiktok.com"><FontAwesomeIcon className='icon' icon={faTiktok}  /></a>
          <a href="www.twitter.com"><FontAwesomeIcon  className='icon' icon={faTwitter} /></a>
          </p>
        </div>
        <div className='footer-help'>
          <p><T id='footer.help'/>   |</p>
          <p><T id='footer.sends'/>   |</p>
          <p><T id='footer.rights'/></p>
        </div>
        <div>
          <p> <T id='footer.getApp'/></p>
          <QRCode value="https://www.apple.com/es/store" size={120} bgColor="#282c34" fgColor="#fff" level="H" />
        </div>
          <p className="footer-year"> 2022</p>
      </footer>
    )
}

export default Footer