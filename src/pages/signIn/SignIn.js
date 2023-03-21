import { useDispatch } from 'react-redux';
import { signIn } from 'redux/auth/authThunk';

export const SignIn = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(signIn({ email: email, password: password }));
  };

  return (
    <main>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <label>E-mail</label>
            <input type="email" name="email" autoComplete="off" required />
            <label>Password</label>
            <input
              type="password"
              name="password"
              autoComplete="off"
              required
            />
            <button type="submit">Sign in</button>
          </form>
        </div>
      </div>
    </main>
  );
};
