export const clear = () => {
  localStorage.clear();
};

const keyTodoList = 'todoList';

/**
 * @return {{ title: string; timestamp: number; }[]}
 */
export const getTodoList = () => JSON.parse(localStorage.getItem(keyTodoList)) || [];

/**
 * @param {{ title: string; timestamp: number; }[]} todoList
 */
export const setTodoList = (todoList = []) => {
  localStorage.setItem(keyTodoList, JSON.stringify(todoList));
};

const keyDoneList = 'doneList';

/**
 * @return {{ title: string; timestamp: number; }[]}
 */
export const getDoneList = () => JSON.parse(localStorage.getItem(keyDoneList)) || [];

/**
 * @param {{ title: string; timestamp: number; }[]} doneList
 */
export const setDoneList = (doneList = []) => {
  localStorage.setItem(keyDoneList, JSON.stringify(doneList));
};

export const clearDoneList = () => {
  localStorage.removeItem(keyDoneList);
};

const keyTheme = 'theme';

/**
 * @return {'light'|'dark'}
 */
export const getTheme = () => localStorage.getItem(keyDoneList) || 'light';

/**
 * @param {'light'|'dark'} theme
 */
export const setTheme = (theme) => {
  localStorage.setItem(keyTheme, theme);
};

export const clearTheme = () => {
  localStorage.removeItem(keyTheme);
};
