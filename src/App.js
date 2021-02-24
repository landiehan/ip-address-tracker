import { useEffect, useState } from 'react';
import './App.scss';
import Details from './components/Details';
import SearchBar from './components/SearchBar';

const apiUrl = 'https://geo.ipify.org/api/v1';
const apiKey = 'at_vFz4B2vedFlAmLevKwmyxgLZePLfq';

function App() {
  const [ipDetails, setIpDetails] = useState(undefined);
  const [ip, setIp] = useState('');

  useEffect(() => {
    getIpDetails(ip);
  }, [ip]);

  async function getIpDetails(ip) {
    let endpoint = `${apiUrl}?apiKey=${apiKey}`;
    if (ip) {
      endpoint += `&ipAddress${ip}`;
    }

    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const jsonResponse = await response.json();
        setIpDetails(jsonResponse);
      }
      throw new Error('Request failed!');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='App'>
      <h1 className='App__heading'>IP Address Tracker</h1>
      <SearchBar />
      <Details details={ipDetails} />
    </div>
  );
}

export default App;
