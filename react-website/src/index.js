import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';

const container = document.getElementById("root");
const root = createRoot(container)
root.render(
  <div>
    <Home/>
  </div>
);

