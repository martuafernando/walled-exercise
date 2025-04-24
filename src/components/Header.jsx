export default function Header() {
  return (
    <header>
      <nav>
        <img src="https://placehold.co/600x400" height={64} alt="" />
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