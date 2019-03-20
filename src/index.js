
module.exports = function check(str, bracketsConfig) {

	let arrayChars = str.split('');
	let stack = [];
	let lastElemStack = 0;

	for (let i = 0; i < arrayChars.length; i++) {

		for (let j = 0; j < bracketsConfig.length; j++) {

			let opening = bracketsConfig[j][0];
			let closening = bracketsConfig[j][1];

			if (opening == closening) {
				lastElemStack = stack[stack.length - 1];
				if (lastElemStack == opening) {
					stack.pop();
          break;
          
				} else {
					stack.push(arrayChars[i]);
					break;
				}
			} else {
				if (arrayChars[i] == opening) {
					stack.push(arrayChars[i]);
					break;

				} else if (arrayChars[i] == closening) {
					lastElemStack = stack[stack.length - 1];
            if (lastElemStack == opening) {
              stack.pop();
              break;
            } 
				}
			}
		}
	}

	if (stack.length == 0) {
		return true;
	} else {
		return false;
	}
}
