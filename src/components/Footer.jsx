import { FacebookAuthProvider } from 'firebase/auth/web-extension';
import logo from '../assets/images/logo.png'
import { FaFacebookF, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-slate-300 t p-10 mb-12 rounded-lg">
        <aside>
         <img className='w-24 ' src={logo} alt="" />
          <p>
            SCHOLARO
            <br />
            Supporting education since 2000
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4 items-center ">
          <FaXTwitter className='text-2xl'></FaXTwitter>
          <FaYoutube className='text-red-500 text-3xl'></FaYoutube>
          <FaFacebookF className='text-blue-600 text-2xl'></FaFacebookF>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
