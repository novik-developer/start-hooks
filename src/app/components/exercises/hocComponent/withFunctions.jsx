import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import React from "react";
import CardWrapper from "../../common/Card";

const withFunctions = (Component) => (props) => {
    const history = useHistory();
    const isAuth = localStorage.getItem("auth");

    const handleLogin = () => {
        localStorage.setItem("auth", "token");
        console.log("dataLogIn", isAuth);
        history.replace("/hoc");
    };
    const handleLogOut = () => {
        console.log("dataLogOut", isAuth);

        localStorage.removeItem("auth", "token");
        history.replace("/hoc");
    };

    return (
        <CardWrapper>
            <div className="mb-2">
                Пользователь
                {isAuth ? " " : " НЕ "}
                авторизован
            </div>
            <Component
                {...props}
                isAuth={isAuth}
                onLogin={handleLogin}
                onLogout={handleLogOut}
            />
        </CardWrapper>
    );
};

export default withFunctions;
