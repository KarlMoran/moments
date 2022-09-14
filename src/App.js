// import Button from 'react-bootstrap/Button';
import NavBar from './components/NavBar';
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      {/* <Button variant="primary">Primary</Button> */}
      <NavBar />
    </div>
  );
}

export default App;