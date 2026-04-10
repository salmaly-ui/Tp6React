import { useRef, useEffect, useState } from 'react';

const s = {
  wrap: { display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' },
  stat: {
    background: '#0f1117',
    border: '1px solid #2a2f45',
    borderRadius: '10px',
    padding: '12px 20px',
    minWidth: '130px',
  },
  statLabel: {
    fontSize: '11px',
    color: '#7b82a8',
    fontFamily: "'Fira Code', monospace",
    marginBottom: '4px',
  },
  statValue: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#43e97b',
    fontFamily: "'Fira Code', monospace",
    lineHeight: 1,
  },
  hint: {
    fontSize: '12px',
    color: '#7b82a8',
    fontFamily: "'Fira Code', monospace",
    lineHeight: '1.6',
  },
};

function CompteurRendu() {
  const compteurRef = useRef(0);
  const [affichage, setAffichage] = useState(0);

  useEffect(() => {
    compteurRef.current += 1;
    setAffichage(compteurRef.current);
    console.log(`[CompteurRendu] rendu n°${compteurRef.current}`);
  });

  return (
    <div style={s.wrap}>
      <div style={s.stat}>
        <p style={s.statLabel}>render_count</p>
        <p style={s.statValue}>{String(affichage).padStart(2, '0')}</p>
      </div>
      <p style={s.hint}>
        La valeur est stockée dans un <code>useRef</code>.<br />
        Elle ne déclenche pas de re-render.<br />
        Consulte aussi la console du navigateur.
      </p>
    </div>
  );
}

export default CompteurRendu;