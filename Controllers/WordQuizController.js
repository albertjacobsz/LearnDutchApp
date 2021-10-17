exports.createStack = (arr) => {
  let stack = [];
  arr.forEach((element) => {
    stack.push(element);
  });
  return stack;
};
