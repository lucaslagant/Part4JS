let stringLength;

const string = 'Salut comment ça va ?'

let getStringLength = (string) => {
  let stringLength;
  if (string.length === 1) {
    stringLength = `La chaîne contient qu'un seul caractère`;
  } else {
    stringLength = `La chaîne contient ${string.length} caractères`;
  }
  return stringLength;
}
getStringLength(string);