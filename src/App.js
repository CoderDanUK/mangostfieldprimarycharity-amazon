import River from './components/River/River';
import StatsContainer from './components/StatsContainer/StatsContainer';


const completed = () =>  (state.walked / state.amazonRiverLength) * 100;

const state = {
  amazonRiverLength: 6400, 
  walked: 200,
};

const App = () => {
  return (
    <div className="App">
      <River complete={completed()} />
      <StatsContainer state={state} completed={completed()} />
    </div>
  );
}

export default App;
