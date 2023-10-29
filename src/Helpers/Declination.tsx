
// функция, которая в зависимости от числа склоняет слово

export const  Declination = (number:number, words:[string,string,string]): string => {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return words[2];
  }
  n %= 10;
  if (n === 1) {
    return words[0];
  }
  if (n >= 2 && n <= 4) {
    return words[1];
  }
  return words[2];
}