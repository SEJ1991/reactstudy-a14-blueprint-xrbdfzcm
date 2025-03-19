import { useLocation } from 'react-router-dom';

export function Characters() {
  const location = useLocation();
  const characters = location.state.characters;

  if (!characters) return null;
  return (
    <div>
      <h1>Characters</h1>
      {characters.map(character => (
        <p key={character}>{character}</p>
      ))}
    </div>
  );
}
