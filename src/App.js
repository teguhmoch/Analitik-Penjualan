import logo from './logo.svg';
import './App.css';
import SalesMain from './pages/dashboard/SalesMainPage.js';

function App() {
  return (
    <div>
      <div className='w-full mx-4 p-8'>
        {/* <ChartComponent/> */}
        <SalesMain/>
      </div>
    </div>
  );
}

export default App;
