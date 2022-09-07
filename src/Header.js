export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img className="image" src="https://reactjs.org/logo-og.png" alt='some value' />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}