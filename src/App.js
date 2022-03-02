import logo from './logo.svg';
import './App.css';
import AppHeader from './component/AppHeader';
import HomePage from './component/HomePage';
import StoreCar from './component/StoreCar';

function App() {
  return (
    <div className='app' id='home'>
      <AppHeader />
      <div className='Home'>
      <HomePage />
      </div>
      <div className='store' id='store'>
      <StoreCar />
      </div>
    </div>
  );
}

export default App;
