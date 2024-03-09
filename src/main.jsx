import '@/index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from '@/App.jsx';
import About from '@/pages/About/About';
import Contact from '@/pages/Contact/Contact';
import Home from '@/pages/Home/Home';
import NotFound from '@/pages/NotFound/NotFound';
import Projects from '@/pages/Projects/Projects';
import Skills from '@/pages/Skills/Skills';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
