import Sidebar from './components/layout/Sidebar';
import Banner from './components/layout/Banner';
import React, { useState, useEffect } from 'react';
import './styles/App.css';
import catPics from './utils/catImages'

function App() {
  const [catImages, setCatImages] = useState([]);
  useEffect(() => {
    async function fetchCatImages() {
      try {
        const images = await catPics();
        setCatImages(images);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    }
    
    fetchCatImages();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
      <Banner images={catImages} interval={50000} />
        Jazz Cats boiiii
      </header>
      <Sidebar />
    </div>
  );
}

export default App;
