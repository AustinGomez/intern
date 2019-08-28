import React, { useState, useEffect } from "react";
import LoginForm from "_components/LoginForm";
import RegisterForm from "_components/RegisterForm";
import "./LoginModal.css";

const LoginModal = props => {
  const [isLogin, setIsLogin] = useState(true);
  const handleClose = () => {
    props.onClose();
    setIsLogin(true);
  };

  return (
    <div className={`modal ${props.isActive ? "is-active" : ""}`}>
      <div className="modal-background" onClick={props.onClose}></div>
      <div className="modal-content">
        <div className="box modal-box">
          <div className="modal-content-container">
            {isLogin ? (
              <>
                <LoginForm onClose={props.onClose} />
                <div className="has-text-centered">
                  Need an account?{" "}
                  <a onClick={() => setIsLogin(false)}>Register</a>
                </div>
              </>
            ) : (
              <>
                <RegisterForm onClose={props.onClose} />
                <div className="has-text-centered">
                  <a onClick={() => setIsLogin(true)}>
                    Already have an account? Log In
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={handleClose}
      ></button>
    </div>
  );
};

export default LoginModal;
