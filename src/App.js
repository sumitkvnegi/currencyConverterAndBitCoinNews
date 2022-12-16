import NewsFeed from './components/NewsFeed.jsx'
import CurrencyConverter from './components/CurrencyConverter.jsx'

const App = () => {
  return (
    <div className='app'>
      <h1>Crypto Dashboard</h1>
      <div className='wrapper'>
    <CurrencyConverter/>
    <NewsFeed/>
      </div>
    </div>
  );
}

export default App;
