export default function Regvalidateinfo(values) {
  let Regerrors = {};

  if (values.username === "") {
    Regerrors.username = "Username required";
  } else if (!/^[A-Za-z]+/.test(values.name)) {
    Regerrors.name = "Enter a valid name";
  }

  if (!values.email) {
    Regerrors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    Regerrors.email = "Email address is invalid";
  }
  if (!values.password) {
    Regerrors.password = "Password is required";
  } else if (
    !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/.test(
      values.password
    )
  ) {
    Regerrors.password = "Password needs to be 8 characters or more";
  }

  if (!values.cpassword) {
    Regerrors.cpassword = "Password is required";
  } else if (values.cpassword !== values.password) {
    Regerrors.cpassword = "Passwords do not match";
  }
  return Regerrors;
}
