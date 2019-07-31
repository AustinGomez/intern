import React from "react";
import LoginForm from "_components/LoginForm";
import RegisterForm from "_components/RegisterForm";

const LoginModal = props => {
  return (
    <div className={`modal ${props.isActive ? "is-active" : ""}`}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="modal-card">
          <div className="modal-card-body">
            {props.login ? <LoginForm /> : <RegisterForm />}
          </div>
        </div>
      </div>
      <button className="modal-close is-large" aria-label="close"></button>
    </div>
  );
};

export default LoginModal;
