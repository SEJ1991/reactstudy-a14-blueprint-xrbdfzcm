import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            {NAVI.map(({ title, to }) => (
              <li key={title}>
                <Link to={to}>{title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

const NAVI = [
  { title: 'Home', to: '/' },
  { title: 'About', to: '/about' },
];
