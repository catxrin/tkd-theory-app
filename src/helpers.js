export const randomizeArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    let randomIndex = Math.floor(Math.random() * (array.length - 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    return array;
  }
};
