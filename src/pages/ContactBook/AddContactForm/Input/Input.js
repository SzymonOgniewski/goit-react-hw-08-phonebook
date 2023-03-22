import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({
  placeholder,
  type,
  pattern,
  title,
  inputName,
  label,
  htmlFor,
}) => {
  return (
    <>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        autoComplete="off"
        placeholder={placeholder}
        type={type}
        name={inputName}
        pattern={pattern}
        title={title}
        required
      />
    </>
  );
};
Input.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  pattern: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.string,
  htmlFor: PropTypes.string,
};
