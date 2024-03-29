import  { useState } from 'react';
import '../assets/Login.css';
import { useNavigate } from 'react-router-dom';

const LoginBox = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Invalid email format');
      return;
    }

    // Add your login logic here
    if (email === 'admin@example.com' && password === 'password' && role === 'admin') {
      // Successful login
      setError('');
      alert('Admin login successful!');
      navigate('/HomePage')
      
      // Redirect or perform necessary action
    } else if (email === 'user@example.com' && password === 'password' && role === 'user') {
      // Successful login
      setError('');
      alert('User login successful!');
      navigate('/HomePage')
      // Redirect or perform necessary action
    } else {
      // Invalid credentials
      setError('Invalid email, password, or role');
    }
  };

  const navigateToSignUp = () => {
    window.location.href = '/SignUp';
  };
  return (
    <div className="dell">
    <img src="https://cdn4.sharechat.com/575d05d_1668298190076_sc.gif?tenant=sc&referrer=pwa-sharechat-service&f=076_sc.gif" className="logo"/>
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>Password</label>
        </div>
        <div className="user-box">
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        <button type="submit">Submit</button><br></br><br></br>
        <div style={{ textAlign: 'center' }}>
                  Don't have an account?{' '}
                  <a href="#" className="jet" onClick={navigateToSignUp}>
                    Sign Up
                  </a>
                </div>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
    </div>
    
    
  );
};

export default LoginBox;
