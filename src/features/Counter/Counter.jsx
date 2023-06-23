import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dec, Inc, Ost, Res } from "./Counterslice";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dipatch = useDispatch();
  return (
    <>
      <h1>{count}</h1>
      <hr />
      <button onClick={() => dipatch(Inc())}>+++</button>
      <button onClick={() => dipatch(Dec())}>---</button>
      <button onClick={() => dipatch(Res())}>Reset</button>
      <button onClick={() => dipatch(Ost(500))}>ostir</button>
    </>
  );
};

export default Counter;
