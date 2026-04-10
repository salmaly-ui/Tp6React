import { useState } from 'react';
import useFetch from './useFetch';

const s = {
  wrap: {},
  loader: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: '#7b82a8',
    fontSize: '13px',
    fontFamily: "'Fira Code', monospace",
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#4f8ef7',
    animation: 'pulse 1s infinite',
  },
  error: {
    color: '#ff6b6b',
    fontSize: '13px',
    fontFamily: "'Fira Code', monospace",
    background: 'rgba(255,107,107,0.08)',
    border: '1px solid rgba(255,107,107,0.2)',
    borderRadius: '8px',
    padding: '10px 14px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    maxHeight: '220px',
    overflowY: 'auto',
  },
  item: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    padding: '8px 10px',
    borderRadius: '8px',
    background: '#0f1117',
    border: '1px solid #2a2f45',
    fontSize: '13px',
    lineHeight: '1.5',
    color: '#e8eaf6',
  },
  id: {
    fontFamily: "'Fira Code', monospace",
    fontSize: '11px',
    color: '#4f8ef7',
    minWidth: '24px',
    paddingTop: '1px',
    flexShrink: 0,
  },
  showMore: {
    marginTop: '10px',
    padding: '7px 14px',
    background: 'transparent',
    border: '1px solid #2a2f45',
    borderRadius: '8px',
    color: '#7b82a8',
    fontSize: '12px',
    fontFamily: "'Fira Code', monospace",
    cursor: 'pointer',
    transition: 'all 0.15s',
  },
};

function ListeArticles() {
  const { data, chargement, erreur } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );
  const [limite, setLimite] = useState(5);

  if (chargement) {
    return (
      <div style={s.loader}>
        <div style={s.dot} />
        fetching data...
      </div>
    );
  }

  if (erreur) {
    return <p style={s.error}>⚠ {erreur.message}</p>;
  }

  if (!Array.isArray(data)) {
    return <p style={{ color: '#7b82a8', fontSize: '13px' }}>Aucune donnée.</p>;
  }

  const articles = data.slice(0, limite);

  return (
    <div style={s.wrap}>
      <ul style={s.list}>
        {articles.map((article) => (
          <li key={article.id} style={s.item}>
            <span style={s.id}>#{article.id}</span>
            <span>{article.title}</span>
          </li>
        ))}
      </ul>
      {limite < data.length && (
        <button
          style={s.showMore}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#4f8ef7')}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#2a2f45')}
          onClick={() => setLimite((l) => l + 5)}
        >
          + charger 5 de plus ({data.length - limite} restants)
        </button>
      )}
    </div>
  );
}

export default ListeArticles;