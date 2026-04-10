import { useState, useEffect, useRef } from 'react';

const s = {
  wrap: { display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' },
  display: {
    fontFamily: "'Fira Code', monospace",
    fontSize: '38px',
    fontWeight: '700',
    color: '#e8eaf6',
    letterSpacing: '2px',
    minWidth: '120px',
  },
  unit: {
    fontSize: '14px',
    color: '#7b82a8',
    fontWeight: '400',
    marginLeft: '4px',
  },
  controls: { display: 'flex', gap: '8px' },
  btn: {
    padding: '8px 16px',
    borderRadius: '8px',
    border: '1px solid #2a2f45',
    background: '#1a1d27',
    color: '#e8eaf6',
    fontSize: '12px',
    fontFamily: "'Fira Code', monospace",
    cursor: 'pointer',
    transition: 'all 0.15s',
  },
  btnPause: {
    borderColor: 'rgba(79,142,247,0.4)',
    background: 'rgba(79,142,247,0.12)',
    color: '#7aaeff',
  },
  indicator: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    flexShrink: 0,
  },
};

function formatTime(s) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

function Timer() {
  const [secondes, setSecondes] = useState(0);
  const [actif, setActif] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (actif) {
      intervalRef.current = setInterval(() => {
        setSecondes((s) => s + 1);
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [actif]);

  const handleReset = () => {
    setActif(false);
    setSecondes(0);
    setTimeout(() => setActif(true), 50);
  };

  return (
    <div style={s.wrap}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div
          style={{
            ...s.indicator,
            background: actif ? '#43e97b' : '#7b82a8',
            boxShadow: actif ? '0 0 6px #43e97b88' : 'none',
          }}
        />
        <span style={s.display}>
          {formatTime(secondes)}
          <span style={s.unit}>s</span>
        </span>
      </div>
      <div style={s.controls}>
        <button
          style={{ ...s.btn, ...s.btnPause }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(79,142,247,0.25)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(79,142,247,0.12)')}
          onClick={() => setActif((a) => !a)}
        >
          {actif ? 'pause()' : 'resume()'}
        </button>
        <button
          style={s.btn}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#2a2f45')}
          onMouseLeave={(e) => (e.currentTarget.style.background = '#1a1d27')}
          onClick={handleReset}
        >
          reset()
        </button>
      </div>
    </div>
  );
}

export default Timer;