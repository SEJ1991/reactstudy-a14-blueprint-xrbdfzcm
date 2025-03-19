import { Link } from 'react-router-dom';
import { AUTHORS } from '../data';

export function Home() {
  const names = Object.keys(AUTHORS);
  return (
    <div>
      {names.map(name => (
        <div key={name}>
          <Link to={`/authors/${name}`}>{name}</Link>
        </div>
      ))}
    </div>
  );
}
