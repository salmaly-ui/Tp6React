import { useRef } from 'react';

const s = {
  wrap: { display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' },
  input: {
    background: '#0f1117',
    border: '1px solid #2a2f45',
    borderRadius: '8px',
    padding: '9px 14px',
    color: '#e8eaf6',
    fontSize: '14px',
    fontFamily: "'Fira Code', monospace",
    outline: 'none',
    width: '220px',
    transition: 'border-color 0.2s',
  },
  btn: {
    padding: '9px 18px',
    borderRadius: '8px',
    border: '1px solid rgba(79,142,247,0.4)',
    background: 'rgba(79,142,247,0.12)',
    color: '#7aaeff',
    fontSize: '13px',
    fontFamily: "'Fira Code', monospace",
    cursor: 'pointer',
    transition: 'all 0.15s',
  },
};

function FocusInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
    inputRef.current.style.borderColor = '#4f8ef7';
  };

  const handleBlur = () => {
    inputRef.current.style.borderColor = '#2a2f45';
  };

  return (
    <div style={s.wrap}>
      <input
        ref={inputRef}
        style={s.input}
        placeholder="Clique sur le bouton →"
        onBlur={handleBlur}
      />
      <button
        style={s.btn}
        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(79,142,247,0.25)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(79,142,247,0.12)')}
        onClick={handleClick}
      >
        focus()
      </button>
    </div>
  );
}

export default FocusInput;