import React from 'react';

// components
import Header from './components/header/Header';
import ImageContent from './components/imageContent/ImageContent';

//for global styles and variables see index.css

export default function App() {
  return (
    <div className="fullPage">
      <Header>{/* Header only contains logo svg */}</Header>
      <ImageContent/>
    </div>
  );
}
