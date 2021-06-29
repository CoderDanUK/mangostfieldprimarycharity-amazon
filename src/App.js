import River from './components/River/River';
import StatsContainer from './components/StatsContainer/StatsContainer';
import Jungle from './components/Jungle/Jungle';

const completed = () =>  (state.walked / state.amazonRiverLength) * 100;

const state = {
  amazonRiverLength: 4000, 
  walked: 4000,
};

const App = () => {
  return (
    <div className="App">
      <River complete={completed()} />
      <Jungle />
      <StatsContainer state={state} completed={completed().toFixed(2)} />
    </div>
  );
}

export default App;
