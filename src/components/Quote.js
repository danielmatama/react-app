/* eslint-disable max-len */
import React from 'react';
import styles from './styles.module.css';

function Quote() {
  return (
    // <figure className="quote">
    <figure className={styles.quote}>
      <blockquote>
        Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.
      </blockquote>
      <figcaption>
        &mdash; William Paul Thurston,
        {' '}
        <cite>Mental models</cite>
        {' '}

      </figcaption>
    </figure>
  );
}

export default Quote;
