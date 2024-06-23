import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'; // Make sure to import the CSS file

function App() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="container">
      <h2 className="title">Login</h2>
      <form className="form">
        <div className="inputGroup">
          <label className="label" htmlFor="username">Username</label>
          <input className="input" type="text" id="username" name="username" required />
        </div>
        <div className="inputGroup">
          <label className="label" htmlFor="password">Password</label>
          <div className="passwordContainer">
            <input
              className="input"
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <span className="eyeIcon" onClick={togglePasswordVisibility}>
              <i className={showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'}></i>
            </span>
          </div>
        </div>
        <button className="button" type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;