import Compteur from './Compteur';
import FocusInput from './FocusInput';
import CompteurRendu from './CompteurRendu';
import ListeArticles from './ListeArticles';
import Timer from './Timer';

const theme = {
  bg: '#0f1117',
  surface: '#1a1d27',
  card: '#1e2130',
  border: '#2a2f45',
  accent: '#4f8ef7',
  accentLight: '#7aaeff',
  text: '#e8eaf6',
  textMuted: '#7b82a8',
  success: '#43e97b',
  fontMono: "'Fira Code', 'Courier New', monospace",
};

const styles = {
  app: {
    minHeight: '100vh',
    backgroundColor: theme.bg,
    color: theme.text,
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    padding: '0 0 60px',
  },
  header: {
    background: `linear-gradient(135deg, ${theme.surface} 0%, #151829 100%)`,
    borderBottom: `1px solid ${theme.border}`,
    padding: '28px 40px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  logo: {
    width: '38px',
    height: '38px',
    borderRadius: '10px',
    background: theme.accent,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    fontWeight: '700',
    color: '#fff',
    flexShrink: 0,
  },
  appTitle: {
    fontSize: '22px',
    fontWeight: '700',
    color: theme.text,
    margin: 0,
    letterSpacing: '-0.3px',
  },
  appSubtitle: {
    fontSize: '13px',
    color: theme.textMuted,
    margin: '2px 0 0',
    fontFamily: theme.fontMono,
  },
  main: {
    maxWidth: '820px',
    margin: '0 auto',
    padding: '40px 24px 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  section: {
    background: theme.card,
    border: `1px solid ${theme.border}`,
    borderRadius: '12px',
    overflow: 'hidden',
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '14px 20px',
    borderBottom: `1px solid ${theme.border}`,
    background: theme.surface,
  },
  hookBadge: {
    fontSize: '11px',
    fontFamily: theme.fontMono,
    background: 'rgba(79,142,247,0.15)',
    color: theme.accentLight,
    border: `1px solid rgba(79,142,247,0.3)`,
    borderRadius: '6px',
    padding: '2px 8px',
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: theme.text,
    margin: 0,
  },
  sectionBody: {
    padding: '20px',
  },
};

function Section({ hook, title, children }) {
  return (
    <div style={styles.section}>
      <div style={styles.sectionHeader}>
        <span style={styles.hookBadge}>{hook}</span>
        <p style={styles.sectionTitle}>{title}</p>
      </div>
      <div style={styles.sectionBody}>{children}</div>
    </div>
  );
}

function App() {
  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <div style={styles.logo}>⚛</div>
        <div>
          <h1 style={styles.appTitle}>React Hooks Lab</h1>
          <p style={styles.appSubtitle}>useReducer · useRef · useEffect · custom hooks</p>
        </div>
      </header>

      <main style={styles.main}>
        <Section hook="useReducer" title="Compteur interactif">
          <Compteur />
        </Section>

        <Section hook="useRef" title="Focus automatique sur un champ">
          <FocusInput />
        </Section>

        <Section hook="useRef + useEffect" title="Compteur de rendus">
          <CompteurRendu />
        </Section>

        <Section hook="custom hook · useFetch" title="Liste d'articles depuis une API">
          <ListeArticles />
        </Section>

        <Section hook="useEffect · cleanup" title="Timer avec pause et reset">
          <Timer />
        </Section>
      </main>
    </div>
  );
}

export default App;