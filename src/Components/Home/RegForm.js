import React, { useState } from "react";
import FormSuccess from "./FormSuccess";
import Registerform from "./Registerform";

const RegForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div>
        {!isSubmitted ? (
          <Registerform submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default RegForm;
