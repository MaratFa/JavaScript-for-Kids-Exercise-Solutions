var areArraysSame = function (a, b) {
  if (a.length !== b.length) {
    return false;
  }

  for (i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
};
alert(areArraysSame([1, 2, 3], [1, 2, 3, 4]));
