import { useReducer, useState } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};
const inputStateReducer = (state, action) => {
  //initialState
  if (action === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action === "BLUR") {
    return { isTouched: true, value: state.value };
  }
  if (action === "RESET") {
    return { isTouched: false , value=''};
  }
  return inputStateReducer;
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );
  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsvalid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = (event) => {
    dispatch({ type: "BLUR", value: event.target.value });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};
export default useInput
