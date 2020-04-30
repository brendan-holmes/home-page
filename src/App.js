import React from 'react';
import 'holderjs';

// Import Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

// extended bootstrap components
import ComponentNavBar from './ComponentNavBar';
import ComponentCardColumns from './ComponentCardColumns';

function App() {
  return (
    <>
      <ComponentNavBar/>
      <ComponentCardColumns/>
    </>
  )
}

export default App;
