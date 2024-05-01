export default function Validate(values) {
  const errors = {};
  if(!values.username) {
    errors.username = "Username cannot be empty";
  }else if (!values.password) {
      errors.password = "Password cannot be empty"
  }
  return errors;
}