import logo from '../assets/walled-logo.png'
import './Header.css'

export default function Header() {
  return (
    <header>
      <nav>
        <img src={logo} height={36} alt="" />
        <ul>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/transfer">Transfer</a></li>
          <li><a href="/top-up">Topup</a></li>
          <li><a href="/sign-out">Sign Out</a></li>
        </ul>
      </nav>
    </header>
  )
}