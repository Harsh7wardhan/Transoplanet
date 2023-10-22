import React, { useState } from 'react';
import './App.css'

function App() {
  const [searchResults, setSearchResults] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [audioText, setAudioText] = useState('');
  const cx = '1628dbc96412d4740';

  const handleSearch = async () => {
    try {
      const apiKey = 'AIzaSyB8He2LdjCLJMkmNk5kJYF0b2phRk0vmnU';
      const apiUrl = `https://www.googleapis.com/customsearch/v1?q=${searchQuery}&key=${apiKey}&cx=${cx}`;

      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.items && data.items.length > 0) {
        const firstResult = data.items[0];
        setSearchResults({
          title: firstResult.title,
          snippet: firstResult.snippet,
          link: firstResult.link,
          image: firstResult.pagemap.cse_image[0].src,
        });

        setAudioText(`The search result is: ${firstResult.title}`);
      } else {
        setSearchResults(null);
        setAudioText('No results found for the keyword.');

        setSearchResults({
          title: 'No shopping ads found',
          snippet: `No shopping ads found for "${searchQuery}"`,
          link: '',
          image: '', 
        });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const speakText = () => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(audioText);
    synth.speak(utterance);
  };

  return (
    <div className="container">
      <h1>Google Search Results</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a keyword..."
          value={searchQuery}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>

      {searchResults ? (
        <div className="result-container">
          <h2>{searchResults.title}</h2>
          <img src={searchResults.image} alt={searchResults.title} className="img" />
          <p>{searchResults.snippet}</p>
          <a href={searchResults.link} target="_blank" rel="noopener noreferrer">
            Go to Result
          </a>
        </div>
      ) : null}


      <button onClick={speakText} className="speak-button">Speak Results</button>
    </div>
  );
}

export default App;
