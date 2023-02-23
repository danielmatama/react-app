import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Output = (props) => {
  Output.propTypes = {
    total: PropTypes.string.isRequired,
    next: PropTypes.string.isRequired,
    operation: PropTypes.string.isRequired,
  };
  const { total, next, operation } = props;
  return (
    // <div className="output">
    <div className={styles.output}>
      {/* <div className="operand"> */}
      <div className={styles.operad}>
        <p>
          { total }
          { operation }
          { next }
        </p>
      </div>
    </div>
  );
};

export default Output;
