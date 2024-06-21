import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SignupScreen from './component/SignupScreen';
import LoginScreen from './component/LoginScreen';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <Route path="/signup" component={SignupScreen} />
        <Route path="/login" component={LoginScreen} />

        <div style={{ margin: '20px' }}>
          <h2>About Enlytai</h2>
          <p>Enlytai is a leading software development company based in New York, USA. We specialize in creating innovative solutions that empower businesses worldwide.</p>
          <img src="company-logo.png" alt="Enlytai Logo" />
        </div>
      </div>
    </Router>
  );
};

export default App;
