import React from 'react';
import { createRoot } from 'react-dom/client';
import CounterApp from './CounterApp';

const root = createRoot(document.getElementById('root'));
root.render(<CounterApp />);