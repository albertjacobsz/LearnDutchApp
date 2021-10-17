const getRandomLetter = () => {
  const min = 97;
  const max = 122;
  return String.fromCharCode(Math.random() * (max - min + 1) + min);
};
const createWordMatrix = (n) => {
  const arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(n);
    for (let j = 0; j < n; j++) {
      arr[i][j] = getRandomLetter();
    }
  }
  return arr;
};
const insertWord = (value, arr) => {
  const length = arr.length;
  const word = Array.from(value);

  let horizontal = Math.floor(Math.random() * length);
  let vertical = Math.floor(Math.random() * length);

  // console.log(horizontal);
  // console.log(vertical);
  console.log('Before First letter added');
  consoleLogArray(arr);
  arr[horizontal][vertical] = word[0];
  console.log('After First letter added');
  consoleLogArray(arr);
  console.log('\n\n');
  for (let x = 1; x < word.length; x++) {
    let possibleHorizontal = getPossibilities(horizontal, length);
    let possibleVertical = getPossibilities(vertical, length);
    let index = getRandomIndex(
      possibleHorizontal,
      possibleVertical,
      horizontal,
      vertical
    );
    horizontal = index[0];
    vertical = index[1];
    ///    console.log('Index: ');
    // console.log(index);
    arr[index[0]][index[1]] = word[x];
    consoleLogArray(arr);
    console.log('\n\n');
    //console.log(arr);
  }
  return arr;
};
const getPossibilities = (i, n) => {
  let check1 = false;
  let check2 = false;
  const temp = Array();
  if (i + 1 > n) {
    check1 = true;
  }
  if (i - 1 < 0) {
    check2 = true;
  }
  if (check2 && check1) {
    return Array();
  } else if (check2) {
    temp.push(i + 1);
  } else if (check1) {
    temp.push(i - 1);
  } else {
    temp.push(i + 1);
    temp.push(i - 1);
  }
  return temp;
};
const getRandomIndex = (
  possibleHorizontal,
  possibleVertical,
  horizontal,
  vertical
) => {
  const coordinates = new Array(2);
  var allCoordinates = new Array();
  let other = 0;
  /* console.log('possibleHorizontal');
  console.log(possibleHorizontal);
  console.log('possible vert');
  console.log(possibleVertical);
  console.log('vert is');
  console.log(vertical);
  console.log('horizontal is');
  console.log(horizontal);
  */
  for (let i = 0; i < possibleHorizontal.length; i++) {
    allCoordinates[i] = new Array();
    allCoordinates[i].push(possibleHorizontal[i]);
    for (let j = 0; j < 1; j++) {
      allCoordinates[i].push(vertical);
    }
    other++;
  }
  for (let j = 0; j < possibleVertical.length; j++) {
    allCoordinates[j + other] = new Array();
    allCoordinates[j + other].push(possibleVertical[j]);
    for (let x = 0; x < 1; x++) {
      allCoordinates[j + other].push(horizontal);
    }
  }
  const int = Math.floor(Math.random() * allCoordinates.length);

  coordinates[0] = allCoordinates[int][0];
  coordinates[1] = allCoordinates[int][1];
  /*
  console.log('coords are ');
  console.log(coordinates);
  */
  return coordinates;
};
exports.mainQuizMatrix = (value) => {
  const arr = createWordMatrix(value.length);
  insertWord(value, arr);
};
const consoleLogArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let str = '';
    for (let j = 0; j < arr[i].length; j++) {
      str += arr[i][j] + ' ';
    }
    console.log(str);
  }
};
