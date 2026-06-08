import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <h2>Funngro</h2>
      </div>
      <ul style={styles.navLinks}>
        <li>
          <Link to="/" style={styles.link}>For Teens</Link>
        </li>
        <li>
          <Link to="/company" style={styles.link}>For Company</Link>
        </li>
      </ul>
    </nav>
  );
}


const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    backgroundColor: '#1E293B',
    color: 'white',
    alignItems: 'center'
  },
  logo: {
    fontWeight: 'bold',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '2rem',
    margin: 0,
    padding: 0
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.1rem'
  }
};

export default Navbar;