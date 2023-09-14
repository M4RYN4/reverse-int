module.exports = function reverse (n) {
//num to str, str to arr, reverse arr, arr back to str, str to num
//convert num to array
  let str = Math.abs(n).toString();//as the n have negative values
  let arr = str.split('');
  let reversedArr = arr.reverse();
  //& back
  let str2 = reversedArr.join('');
  let num = parseInt(str2);
  return num;
}
