import PropTypes from 'prop-types';

function Output(props) {
  const { total, next, operation } = props;
  return (
    <div className="output">
      <div className="operand">
        <p>
          {total}
          {operation}
          {next}
        </p>
      </div>
    </div>
  );
}

Output.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};

Output.defaultProps = {
  total: '',
  next: '',
  operation: '',
};

export default Output;
