import '../styles/App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

function App() {
  return (
    <>
      <Display result={calculate} />
      <ButtonPanel />
    </>
  );
}

export default App;
