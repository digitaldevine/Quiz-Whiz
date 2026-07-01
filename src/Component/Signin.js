import React, { useState } from "react";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  // Login
  const handleLogin = async () => {
    try {
      const response = await fetch(
        "https://backend-7aq8.onrender.com/api/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(loginData)
        }
      );

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        alert("Login Successful");

        navigate("/profile");
      }

      else {
        alert(data.message);
      }
    } catch (err) {
      console.log(err);
      alert("Unable to connect to server.");
    }
  };

  // Signup
  const handleSignup = async () => {
    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(
        "https://backend-7aq8.onrender.com/api/auth/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: signupData.username,
            email: signupData.email,
            password: signupData.password
          })
        }
      );

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        alert("Account Created Successfully");

        navigate("/profile");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.log(err);
      alert("Unable to connect to server.");
    }
  };

  return (
    <section className="signin">
      <div className="signin-card">

        <div className="tabs">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>

          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        {isLogin ? (
          <div className="form-content">

            <h2>Welcome Back 👋</h2>

            <input
              type="email"
              placeholder="Email Address"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({
                  ...loginData,
                  email: e.target.value
                })
              }
            />

            <input
              type="password"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({
                  ...loginData,
                  password: e.target.value
                })
              }
            />

            <p className="forgot">
              Forgot Password?
            </p>

            <button
              className="submit-btn"
              onClick={handleLogin}
            >
              Login
            </button>

          </div>
        ) : (
          <div className="form-content">

            <h2>Create Account 🚀</h2>

            <input
              type="text"
              placeholder="Full Name"
              value={signupData.username}
              onChange={(e) =>
                setSignupData({
                  ...signupData,
                  username: e.target.value
                })
              }
            />

            <input
              type="email"
              placeholder="Email Address"
              value={signupData.email}
              onChange={(e) =>
                setSignupData({
                  ...signupData,
                  email: e.target.value
                })
              }
            />

            <input
              type="password"
              placeholder="Password"
              value={signupData.password}
              onChange={(e) =>
                setSignupData({
                  ...signupData,
                  password: e.target.value
                })
              }
            />

            <input
              type="password"
              placeholder="Confirm Password"
              value={signupData.confirmPassword}
              onChange={(e) =>
                setSignupData({
                  ...signupData,
                  confirmPassword: e.target.value
                })
              }
            />

            <button
              className="submit-btn"
              onClick={handleSignup}
            >
              Sign Up
            </button>

          </div>
        )}
      </div>
    </section>
  );
}

export default SignIn;