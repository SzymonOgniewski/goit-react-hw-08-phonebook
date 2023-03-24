import { useDispatch } from 'react-redux';
import { changeFilterAction } from 'redux/filter/filterSlice';
import { Flex, Input } from '@chakra-ui/react';
export const Filter = () => {
  const dispatch = useDispatch();
  const changeFilter = e => {
    dispatch(changeFilterAction(e.target.value));
  };
  return (
    <Flex justifyContent="center">
      <Input
        focusBorderColor="teal.500"
        onChange={changeFilter}
        autoComplete="off"
        type="text"
        name="filter"
        placeholder="Search..."
        m="10px 0"
        w="335px"
      />
    </Flex>
  );
};
