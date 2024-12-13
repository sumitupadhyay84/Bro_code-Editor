import './Navbar.css';
import { useNavigate } from 'react-router-dom'
import logo from '@/assets/WhatsApI-removebg-preview.png'

const Navbar = () => {
  const navigate = useNavigate()
const homee=()=>{
    navigate('/')
}
const aboutt =()=>{
    navigate('/about-us')
}
  return (
    <nav className="sticky-navbar bg-[#403b40c2]">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <button onClick={homee} className="navbar-button">
            Home
          </button>
        </li>
        <li className="navbar-item">
          <button onClick={aboutt} className="navbar-button">
            About
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
