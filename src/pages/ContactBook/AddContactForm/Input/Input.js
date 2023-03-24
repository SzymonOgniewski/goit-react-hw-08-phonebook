import React from 'react';
import PropTypes from 'prop-types';
import { FormLabel, Input, Flex } from '@chakra-ui/react';

export const AddContactInput = ({
  placeholder,
  type,
  pattern,
  title,
  inputName,
  label,
  maxLength,
}) => {
  return (
    <Flex flexDir="column" justifyContent="center" alignItems="center">
      <FormLabel>{label}</FormLabel>
      <Input
        autoComplete="off"
        placeholder={placeholder}
        type={type}
        name={inputName}
        pattern={pattern}
        title={title}
        maxLength={maxLength}
        required
        w="250px"
        focusBorderColor="teal.500"
      />
    </Flex>
  );
};
Input.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  pattern: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.string,
  maxLength: PropTypes.number,
};
