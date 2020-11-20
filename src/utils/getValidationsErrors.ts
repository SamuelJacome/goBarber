import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}
export default function getValidationsErrors(err: ValidationError) {
  const validationError: Errors = {};

  err.inner.forEach((error) => {
    validationError[error.path] = error.message;
  });
  return validationError;
}
