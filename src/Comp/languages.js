export const LANGUAGES = [
  'Java',
  'PHP',
  'Ruby',
  'JavaScript',
  'Python'
];


export const getLanguages = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(LANGUAGES);
    }, 1000)
  })
}