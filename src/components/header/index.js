import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style";

const Header = () => (
  <header class="navbar w-100 bg-dark">
    <h1 className="navbar-brand">Preact App</h1>
    <nav className='nav'>
      <Link className='nav-link text-white' activeClassName={style.active} href="/">
        Home
      </Link>
      <Link className='nav-link text-white' activeClassName={style.active} href="/profile">
        Me
      </Link>
      <Link className='nav-link text-white' activeClassName={style.active} href="/what">
        What's Preact
      </Link>
    </nav>
  </header>
);

export default Header;
