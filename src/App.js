import Welcome from './components/Welcome';
import Hello from './components/Hello';


function App() {
  return(
    <div>
      <Welcome name="Septiano" prodi="TI" />
      <Welcome name="Fitriani" prodi={2} gender="Female" />

      <Hello name="Jordan" prodi="SI" year={2021} />
    </div>
  );
}

export default App;
