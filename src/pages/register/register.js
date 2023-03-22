import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authThunk';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelector';
export const Register = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    console.log(name, email, password);
    console.log(isLoggedIn);
    dispatch(register({ name: name, email: email, password: password }));
    form.reset();
  };
  return (
    <main>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" autoComplete="off" required></input>
            <label>E-mail</label>
            <input type="email" name="email" autoComplete="off" required />
            <label>Password</label>
            <input
              type="password"
              name="password"
              autoComplete="off"
              required
            />
            <button type="submit">Sign up</button>
          </form>
        </div>
      </div>
    </main>
  );
};
