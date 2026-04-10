import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error('Action non reconnue : ' + action.type);
  }
}

const s = {
  wrap: { display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' },
  display: {
    fontFamily: "'Fira Code', monospace",
    fontSize: '42px',
    fontWeight: '700',
    color: '#4f8ef7',
    minWidth: '80px',
    textAlign: 'center',
    letterSpacing: '-1px',
  },
  controls: { display: 'flex', gap: '10px', alignItems: 'center' },
  btn: {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    border: '1px solid #2a2f45',
    background: '#1a1d27',
    color: '#e8eaf6',
    fontSize: '20px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.15s',
  },
  btnReset: {
    padding: '8px 16px',
    width: 'auto',
    borderRadius: '8px',
    fontSize: '13px',
    fontFamily: "'Fira Code', monospace",
    color: '#7b82a8',
  },
};

function Compteur() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const hoverStyle = (e) => (e.currentTarget.style.background = '#2a2f45');
  const leaveStyle = (e) => (e.currentTarget.style.background = '#1a1d27');

  return (
    <div style={s.wrap}>
      <div style={s.display}>{String(state.count).padStart(2, '0')}</div>
      <div style={s.controls}>
        <button
          style={s.btn}
          onMouseEnter={hoverStyle}
          onMouseLeave={leaveStyle}
          onClick={() => dispatch({ type: 'decrement' })}
        >
          −
        </button>
        <button
          style={{ ...s.btn, background: 'rgba(79,142,247,0.15)', borderColor: 'rgba(79,142,247,0.4)', color: '#4f8ef7' }}
          onClick={() => dispatch({ type: 'increment' })}
        >
          +
        </button>
        <button
          style={{ ...s.btn, ...s.btnReset }}
          onMouseEnter={hoverStyle}
          onMouseLeave={leaveStyle}
          onClick={() => dispatch({ type: 'reset' })}
        >
          reset
        </button>
      </div>
    </div>
  );
}

export default Compteur;