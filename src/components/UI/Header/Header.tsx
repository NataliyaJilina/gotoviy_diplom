

import { Link } from "react-router-dom";
import { SCHeader } from "./Header.styled";

export const Header = () => {
  const handleLogout = () => {
    console.log('Logging out...');
    localStorage.removeItem('user');
    localStorage.removeItem('username');
    localStorage.removeItem('userphone');
    localStorage.removeItem('Favorites');
    localStorage.removeItem('Jobs');
    localStorage.removeItem('favorites');
    window.location.href = '/'; 
  };

  return (
    <SCHeader>
      <Link to="/profile">
        <button className="profileBtn"></button>
      </Link>
      <nav id="navigation">
        <Link to="/main" className="navButton">
          Main
        </Link>
        <Link to="/favorites" className="navButton">
          Favorites
        </Link>
      </nav>
      <button className="navButton logoutButton" onClick={handleLogout}>
        LogOut
      </button>
    </SCHeader>
  );
};
