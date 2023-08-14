import React from 'react'
import {createRoot} from 'react-dom/client';

const App = ()=>{
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);