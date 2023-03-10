import React from 'react';

function Quote() {
  return (
    <figure className="quote">
      <blockquote>
        Mathematics is not about numbers, equations, computations, or
        algorithms: it is about understanding.
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
