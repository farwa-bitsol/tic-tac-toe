import './App.css';
import GameContextProvider from './store/GameContextProvider';
import LoadGame from './components/LoadGame'

function App() {

  return (
    <GameContextProvider>
      <LoadGame />
    </GameContextProvider>
  );
}

export default App;
