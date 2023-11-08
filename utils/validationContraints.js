import { validate } from "validate.js";

export const validateString = (id, value) => {
  const contraints = {
    presence: { allowEmpty: false },
  };

  if (value !== "") {
    contraints.format = {
      pattern: "[a-z]+",
      flags: "i",
      message: "can only contain letts",
    };
  }

  const result = validate({ [id]: value }, { [id]: contraints });

  return result && result[id];
};

export const validateEmail = (id, value) => {
  const contraints = {
    presence: { allowEmpty: false },
    email: {},
  };

  if (value !== "") {
    contraints.email = true;
  }

  const result = validate({ [id]: value }, { [id]: contraints });

  return result && result[id];
};

export const validatePassword = (id, value) => {
  const contraints = {
    presence: { allowEmpty: false },
  };

  if (value !== "") {
    contraints.length = {
      minimum: 6,
      message: "must be atleast 6 characters long",
    };
  }

  const result = validate({ [id]: value }, { [id]: contraints });

  return result && result[id];
};
