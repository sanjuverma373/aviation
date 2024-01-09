
import './App.css';
import Backtotop from './components/Backtop';
import Bookingsection from './components/Bookingsection';
import Emailsection from './components/Emailsection';
import Featursection from './components/Featursection';
import Footersection from './components/Footersection';
import Headersection from './components/Headersection';
import Memoriesection from './components/Memoriesection';
import Preloader from './components/Preloader';
import Sliderfeed from './components/Sliderfeed';
import Tabsection from './components/Tabsection';
import Ticketsection from './components/Ticketsection';
import Travelsection from './components/Travelsection';


function App() {
  return (
    <div>
      <Headersection />
      <Tabsection />
      <Featursection />
      <Bookingsection />
      <Ticketsection />
      <Travelsection />
      <Sliderfeed />
      <Memoriesection />
      <Emailsection />
      <Footersection />
      <Backtotop/>
      <Preloader/>
    </div>
  );
}

export default App;
