import React from 'react';
import Map from './map';

const App = ({ children }) => (
  <div id="main">
    <section id="main-section">
      <Map />
    </section>
    {children}
  </div>
);

export default App;
