import { isString } from 'lodash-es';

export const get = (key) => {
  if (isString(key)) {
    return {
      success: true,
      data: JSON.parse(localStorage.getItem(key)),
    };
  } else {
    return {
      success: false,
      message: 'Key should be a string.',
    };
  }
};

export const set = (key, value) => {
  if (isString(key)) {
    localStorage.setItem(key, JSON.stringify(value));
    return {
      success: true,
    };
  } else {
    return {
      success: false,
      message: 'Key should be a string.',
    };
  }
};

export const remove = (key) => {
  if (isString(key)) {
    localStorage.removeItem(key);
    return {
      success: true,
    };
  } else {
    return {
      success: false,
      message: 'Key should be a string.',
    };
  }
};

export const clear = () => {
  localStorage.clear();
  return {
    success: true,
  };
};
