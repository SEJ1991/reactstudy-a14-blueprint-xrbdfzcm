import { useParams, Outlet, Link } from 'react-router-dom';
import { AUTHORS } from '../data';

export function Book() {
  const { name, book } = useParams();
  const { chapters, characters } = AUTHORS[name].books.find(item => item.title === book);
  return (
    <div>
      <h1>{book}</h1>
      <Link to={`/authors/${name}/${book}/chapters`} state={{ chapters }}>
        chapters
      </Link>
      <br />
      <Link to={`/authors/${name}/${book}/characters`} state={{ characters }}>
        characters
      </Link>
      <Outlet />
    </div>
  );
}
