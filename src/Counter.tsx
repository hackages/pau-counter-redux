import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { decAction, incAction } from "./store/actions";

type TButtonProps = {
  fn: () => void;
  text: string;
};
function Button(props: TButtonProps) {
  return <button onClick={props.fn}>{props.text}</button>;
}

// type TDisplayProps = {
//   counter: number;
// };
function DisplayCounter() {
  const counter = useSelector((state: RootState) => state.counter);
  return <h1>Counter: {counter}</h1>;
}

const step = 10;
export function Counter() {
  const dispatch = useDispatch();

  function inc() {
    dispatch(incAction(step));
  }
  function dec() {
    dispatch(decAction(step));
  }
  return (
    <>
      <DisplayCounter></DisplayCounter>
      <Button fn={inc} text="+"></Button>
      <Button fn={dec} text="-"></Button>
    </>
  );
}
