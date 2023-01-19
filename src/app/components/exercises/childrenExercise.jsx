import React from "react";
import PropTypes from "prop-types";

import CollapseWrapper from "../common/collapse";

const ChildrenIndex = ({ children }) => {
    return React.Children.map(children, (child, index) => {
        console.log(child, index);
        return (
            <div className="d-flex">
                <code>{index}</code>
                <div className="mx-1">{child}</div>
            </div>
        );
    });
};

ChildrenIndex.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ChildrenIndex>
                <Component />
                <Component />
                <Component />
            </ChildrenIndex>
        </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
