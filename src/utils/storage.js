export const clear = () => {
  localStorage.clear();
};

const listKey = 'list';

/** @return {{ timestamp: number; status: 1 | 2; title: string; }[]} */
export const getList = () => JSON.parse(localStorage.getItem(listKey)) || [];

/** @param {{ timestamp: number; status: 1 | 2; title: string; }[]} list */
export const setList = (list) => {
  localStorage.setItem(listKey, JSON.stringify(list));
};

const themeKey = 'theme';

/** @return {'light'|'dark'} */
export const getTheme = () => localStorage.getItem(themeKey) || 'light';

/** @param {'light'|'dark'} theme */
export const setTheme = (theme) => {
  localStorage.setItem(themeKey, theme);
};

const languageKey = 'language';

/** @return {'en'|'zh-Hans'} */
export const getLanguage = () => localStorage.getItem(languageKey) || 'en';

/** @param {'en'|'zh-Hans'} language */
export const setLanguage = (language) => {
  localStorage.setItem(languageKey, language);
};
