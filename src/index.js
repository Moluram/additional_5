module.exports = function check(str, bracketsConfig) {
  let levels = []; 
    
  for (br of str) {
    let brackets = bracketsConfig.find(bs => bs.some(b => b === br))
    
    if (brackets[0] === brackets[1] && levels.some(l => l === bracketsConfig.indexOf(brackets))) {
      let level = levels.pop();
      if (level != bracketsConfig.indexOf(brackets) || typeof level == 'undefined') {
        return false;
      } 

    } else if (br === brackets[0]) {

      levels.push(bracketsConfig.indexOf(brackets));

    } else {

      let level = levels.pop();

      if (typeof level == 'undefined' || bracketsConfig[level][1] !== brackets[1]) {
        return false;
      }
    }
  }

  return levels.length === 0;
}