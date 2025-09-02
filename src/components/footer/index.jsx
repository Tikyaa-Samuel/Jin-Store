import './index.css';
import email from "./email.png";
import phone from "./phone.png";
import android from "./android.png";
import apple from "./apple.png";
import visa from "./visa.svg";
import visalogo from "./visalogo.svg";
import paypal from "./paypal.svg";
import skrill from "./skrill.svg";
import klarna from "./klarna.svg";
import facebook from "./facebook.png";
import x from "./x.png";
import instagram from "./instagram.png";
import linkedin from "./linkedin.png";
const Footer = () =>{
    return(
        <>
        <div className='footer'>
            <div className='footer-top'>
                <div>
                    <p  className='sletters'>Join our new sletters for £10 off</p>
                    <p className='coupons'>Register now to get latest updates on promotions &<br />coupons.Don’t worry, we not spam!</p>
                </div>
               <div className='email'>
                <div className='emailicon'>
                    <img className='email_icon' src={email} alt="" />
                </div>
                <div className='place-holder'>
                    <div>
                    <input className='emailbox' type="text" placeholder='Enter your Email Address' />
                    
                    <p className='subscribe'>By susbscribing you agree to our <span className='termsandcondition'>Terms & Conditions and Privacy & Cookies Policy </span></p>
                    </div>
                    <p className='send'>SEND</p>
                </div>
               </div>

            </div>
            <div className='footer-bottom'>
              <div>
                <p className='help'>Do you need help?</p>
                <p className='french'>Autoseligen syr. Nek diarask fröbomba. Nör<br />antipol kynoda nynat. Pressa fåmoska.</p>
                <div className='phone'>
                <img className='ph0ne' src={phone} alt="" />
                <div>
                    <p className='time_'>Monday-Friday: 08am-9pm</p>
                    <p className='no'>0 800 300-353</p>
                </div>
                </div>
                <div className='email-'>
                    <img className='ph0ne' src={email} alt="" />
                    <div>
                        <p className='helpwithorder'>Need help with your order?</p>
                        <p className='gmail'>info@gmail.com</p> 
                    </div>
                </div>
              </div>

              <div>
                <p className='help'>Make money with us</p>
                <p className='helpwithorder-'>Sell on Grogin</p>
                <p className='helpwithorder-'>Sell your services on Grogin</p>
                <p className='helpwithorder-'>Sell on grogin Business</p>
                <p className='helpwithorder-'>Sell your apps on Grogin</p>
                <p className='helpwithorder-'>Become an affilate</p>
                <p className='helpwithorder-'>Advertise your products</p>
                <p className='helpwithorder-'>Sell-poblish with us</p>
                <p className='helpwithorder-'>Become an Blowwe Vendor</p>
              </div>

              <div>
                <p className='help'>Get to know us</p>
                <p className='helpwithorder-'>Careers for Grogin</p>
                <p className='helpwithorder-'>About Grogin</p>
                <p className='helpwithorder-'>Investor Relations</p>
                <p className='helpwithorder-'>Grogin Devices</p>
                <p className='helpwithorder-'>Constomer reviews</p>
                <p className='helpwithorder-'>Social Resposibility</p>
                <p className='helpwithorder-'>Stores Location</p>
              </div>

              <div>
                <p className='help'>Downlaod our app</p>
                <div className='download'>
                <div className='download-platforms'>
                  <img src={android} alt="" />
                  <p>Download App get <br />-10% Discount </p>
                </div>
                <div className='download-platforms-'>
                  <img src={apple} alt="" />
                  <p>Download App get <br />-20% Discount </p>
                </div>
                </div>
                <div>
                <p className='follow'>Follow us on social Media</p>
                  <div className='socialmedia'>
                  <img  className='icon' src={facebook} alt="" />
                  <img className='icon' src={x} alt="" />
                  <img className='icon' src={instagram} alt="" />
                  <img className='icon' src={linkedin} alt="" />
                </div>
                </div>
              </div>
                
            </div>
            <div className='copyright'>
              <p>Copyright 2024 © Jinstore WooCommerce WordPress Theme. All right reserved. Powered by <span className='blackrise'>BlackRise Themes.</span></p>
              <p>Help Center</p>
              <div className='privacy'>
                <p>Terms and Conditions</p>
                <p>Privacy Policy</p>
                <p>Order Tracking</p>
              </div>
            </div>
            <div className="logos">
              <img src={visa} alt="" />
              <img src={visalogo} alt="" />
              <img src={paypal} alt="" />
              <img src={skrill} alt="" />
              <img src={klarna} alt="" />
            </div>
        </div>
        </>
    )
}
export default Footer;