import { Link } from 'react-router-dom'
import './header.css';

function Header() {
  return (
    <header>
      <Link to='/'>
        BLOG APP
      </Link>
    </header>
  );
}

export default Header;
