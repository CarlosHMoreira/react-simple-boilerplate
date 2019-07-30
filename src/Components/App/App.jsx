import React, { Fragment } from 'react';
import { Reset } from 'styled-reset';
import { BrowserRouter, Route } from 'react-router-dom';
import { About, Home, AlbumPreview } from '../../Pages';
import Main from '../../Layouts';
import './GlobalStyle.css';

const App = () => (
  <Fragment>
    <Reset />
    <BrowserRouter>
      <Main>
        <Route path="/" exact component={Home} />
        <Route path="/sobre" component={About} />
        <Route path="/album-preview" component={AlbumPreview} />
      </Main>
    </BrowserRouter>
  </Fragment>
);

export default App;
