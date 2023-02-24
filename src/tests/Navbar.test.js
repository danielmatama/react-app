/** @format */
import React from 'react';
import renderer from 'react-test-renderer';
import { HashRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

it('matches navbar snapshot', () => {
  const tree = renderer
    .create(
      <HashRouter>
        {' '}
        <Navbar />
      </HashRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
