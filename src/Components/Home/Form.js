import React, { useState } from "react";
// import "../..Styles/LoginForm.css";
import FormSuccess from "./FormSuccess";
import LoginForm from "./LoginForm";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div>
        {!isSubmitted ? <LoginForm submitForm={submitForm} /> : <FormSuccess />}
      </div>
    </>
  );
};

export default Form;
