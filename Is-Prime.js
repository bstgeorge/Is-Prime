let prime = (value) => {
  if (value <= 1) {
    return false;
  }
  if ((value === 2) || (value === 3) || (value === 5)) {
    return true;
  }
  if ((value % 2 === 0) || (value % 3 === 0) || (value % 5 === 0)) {
    return false;
  }
  let end = Math.floor(Math.sqrt(value));
  current = 6;
  while (current < end) {
    let div1 = current + 1;
    let div2 = current + 5;
    if ((value % div1 === 0) || (value % div2 === 0)) {
      return false;
    }
    current += 6;
  }
  return true;
}
console.log(prime(119));
