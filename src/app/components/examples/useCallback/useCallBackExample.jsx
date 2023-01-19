import React, { useCallback, useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withOutCallback = useRef(0);
    const withCallback = useRef(0);
    const handleCHange = ({ target }) => {
        setData((prev) => ({ ...prev, [target.name]: target.value }));
    };
    // Render with out callback
    const validateWithOutCallback = (data) => {
        console.log(data);
    };
    useEffect(() => {
        withOutCallback.current++;
    }, [validateWithOutCallback]);

    // Render with callback
    const validateWithCallback = useCallback((data) => {
        console.log(data);
    }, []);
    useEffect(() => {
        withCallback.current++;
    }, [validateWithCallback]);

    useEffect(() => {
        validateWithOutCallback(data);
        validateWithCallback(data);
    }, [data]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render with out callback:{withOutCallback.current}</p>
            <p>Render with callback:{withCallback.current}</p>
            <label htmlFor="email" className="form-label">
                email
            </label>
            <input
                onChange={handleCHange}
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={data.email || ""}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
