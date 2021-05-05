import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import {Home} from './components/templates/Home';
import { CounterContextProvider } from './components/contexts/counterContext';

ReactDOM.render(
  <CounterContextProvider>
    <Home />
    </CounterContextProvider>,
  document.getElementById('root'),
);

