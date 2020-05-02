import React from 'react';
import 'holderjs';

// Import Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

// extended bootstrap components
import ComponentNavBar from './ComponentNavBar';
import ComponentCardArea from './ComponentCardArea';

function App() {
  return (
    <>
      <ComponentNavBar/>
      <ComponentCardArea/>
    </>
  )
}

export default App;
