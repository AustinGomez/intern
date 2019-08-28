import React, { useState } from "react";
import LoginForm from "_components/LoginForm";
import RegisterForm from "_components/RegisterForm";

const LoginModal = props => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className={`modal ${props.isActive ? "is-active" : ""}`}>
      <div className="modal-background" onClick={props.onClose}></div>
      <div className="modal-content">
        <div className="modal-card">
          <div className="modal-card-body">
            {isLogin ? (
              <LoginForm onClose={props.onClose} />
            ) : (
              <RegisterForm onClose={props.onClose} />
            )}
          </div>
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={props.onClose}
      ></button>
    </div>
  );
};

export default LoginModal;
