import { useState, useEffect } from "react";

const ReguseForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [Regerrors, setRegErrors] = useState({});
  const [isRegSubmitting, setIsRegSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegErrors(validate(values));
    setIsRegSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(Regerrors).length === 0 && isRegSubmitting) {
      callback();
    }
  }, [Regerrors]);

  return { handleChange, handleSubmit, values, Regerrors };
};

export default ReguseForm;
