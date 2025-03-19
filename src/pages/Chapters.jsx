import { useLocation } from 'react-router-dom';

export function Chapters() {
  const location = useLocation();
  const chapters = location.state.chapters;

  if (!chapters) return null;
  return (
    <div>
      <h1>Chapters</h1>
      {chapters.map(chapter => (
        <p key={chapter}>{chapter}</p>
      ))}
    </div>
  );
}
