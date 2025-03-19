import { Link, Outlet, useParams } from 'react-router-dom';
import { AUTHORS } from '../data';

export function Author() {
  const { name } = useParams();
  const { books } = AUTHORS[name];

  return (
    <div>
      <h1>{name}</h1>
      {books.map(({ title }) => (
        <div key={title}>
          <Link to={`/authors/${name}/${title}`}>{title}</Link>
        </div>
      ))}
      <Outlet />
    </div>
  );
}
