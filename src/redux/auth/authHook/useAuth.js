const { useSelector } = require('react-redux');
const { selectIsLoggedIn } = require('../authSelector');

export const useAuth = () => useSelector(selectIsLoggedIn);
