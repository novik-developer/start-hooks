import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <button
            className="btn btn-primary"
            onClick={isAuth ? onLogOut : onLogin}
        >
            {" "}
            {isAuth ? "Выйти из системы" : "Войти"}
        </button>
    );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.string
};
export default SimpleComponent;
