
module.exports = function check(str, bracketsConfig) {

	let arrayChars = str.split('');
	

	for (let i = 0; i < arrayChars.length; i++) {
		let firstSimbol = arrayChars[i];
		let secondSimbol = arrayChars[i+1];

		for (let j = 0; j < bracketsConfig.length; j++) {
			let opening = bracketsConfig[j][0];
			let closening = bracketsConfig[j][1];

			if (firstSimbol == opening && secondSimbol == closening) {
				arrayChars.splice(i,2);
				let result = check(arrayChars.join(''), bracketsConfig);
				return result;
			}
		}
	}
	if (arrayChars.length == 0) {
		return true;
	} else {
		return false;
	}
}

		// don't pass 12 and 15 tests!!

		// let stack = [];
		// let lastElemStack = 0;

		// 	if (opening == closening) {
		// 		lastElemStack = stack[stack.length - 1];
		// 		if (lastElemStack == opening) {
		// 			stack.pop();
        //   break;
          
		// 		} else {
		// 			stack.push(arrayChars[i]);
		// 			break;
		// 		}
		// 	} else {
		// 		if (arrayChars[i] == opening) {
		// 			stack.push(arrayChars[i]);
		// 			break;

		// 		} else if (arrayChars[i] == closening) {
		// 			lastElemStack = stack[stack.length - 1];
        //     if (lastElemStack == opening) {
        //       stack.pop();
        //       break;
        //     } 
		// 		}
			// }

	// if (stack.length == 0) {
	// 	return true;
	// } else {
	// 	return false;
	// }
