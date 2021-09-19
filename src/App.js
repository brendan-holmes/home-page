import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

// extended bootstrap components
import NavBarExt from './components/NavBarExt';
import ContentArea from './views/ContentArea';

function App() {
  const [page, setPage] = useState('default');
  return (
    <>
      <NavBarExt setPage={setPage}/>
      <ContentArea page={page}/>
    </>
  )
}

export default App;
