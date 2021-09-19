import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// extended bootstrap components
import ComponentNavBar from './ComponentNavBar';
import ContentArea from './ContentArea';

function App() {
  const [page, setPage] = useState('default');
  return (
    <>
      <ComponentNavBar setPage={setPage}/>
      <ContentArea page={page}/>
    </>
  )
}

export default App;
