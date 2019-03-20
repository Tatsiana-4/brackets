module.exports = function check(str, bracketsConfig) {}

let string ='((()))()';
let arr = [['(', ')']];

function check(str, bracketsConfig) {
  let arrayChars = str.split('');
  let stack = [];
  let charsOpen=[];
  let charsClose=[];
    for (let j = 0; j < bracketsConfig.length; index++) {
     charsOpen.push(bracketsConfig[j][0]);
     charsClose.push(bracketsConfig[j][1]); 
 }
    for (let i = 0; i < arrayChars.length; i++) {
      let open = charsOpen.indexOf(arrayChars[i]);
        if (open !==-1) {
          stack.push(open);
          continue;
    }
      let close= charsClose.indexOf(arrayChars[i]); 
        if (close !==-1) {
          open=stack.pop();
            if (close !== open) {
              return false;
            }
        }
  }       
    if(stack.length==0){
      return true;
    }else {
      return false;
    }
  }  
 console.log(check(string,arr)); 