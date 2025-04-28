import { useAuth } from "../context/AuthContext";
import logo from '../assets/walled-logo.png'
import './Header.css'

export default function Header() {  
  const { currentUser, logout } = useAuth();

  return (
    <header className='.header'>
      <nav>
        <img src={logo} height={36} alt="" />
        <ul>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/transfer">Transfer</a></li>
          <li><a href="/top-up">Topup</a></li>
          <li><button type="button" onClick={logout}>Sign Out</button></li>
        </ul>
      </nav>
    </header>
  )
}