import React, { useEffect, useMemo, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

function runFactorial(n) {
    console.log("run factorial");
    return factorial(n);
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(10);
    const [otherState, setOtherState] = useState(false);

    const colorButton = otherState ? "primary" : "secondary";
    useEffect(() => {
        console.log("render");
    });
    // useMemo(func , deps) -> 2 параметра: 1) функция(callback) 2) зависимости(в области видимости данной функции)

    const fac = useMemo(() => runFactorial(value), [value]);
    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>Result fact:{fac}</p>
                <p>Value:{value}</p>
                <button
                    className="btn btn-primary mx-2"
                    onClick={() => setValue((prev) => prev + 1)}
                >
                    Increment
                </button>
                <button
                    className="btn btn-primary mx-2"
                    onClick={() => setValue((prev) => prev - 1)}
                >
                    Decrement
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    className={"btn  ms-md-2 btn-" + colorButton}
                    onClick={() => setOtherState((prev) => !prev)}
                >
                    Change color
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
