import React from 'react';

const LoginScreen = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const isFormEmpty = username === '' || password === '';

  return (
    <div style={{ margin: '20px' }}>
      <h2>Login</h2>
      <form>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" disabled={isFormEmpty}>Login</button>
        <p>
          Forgot your password? <a href="#">Click here</a>
        </p>
        <p>
          Don't have an account? <a href="#">Signup here</a>
        </p>
      </form>
    </div>
  );
};

export default LoginScreen;
