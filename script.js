function convertToRoman(num) {
  	const arr = [
      ['M', 1000],
	  ['CM', 900],
      ['D', 500], 
	  ['CD', 400],
      ['C', 100],
	  ['XC', 90],
      ['L', 50], 
	  ['XL', 40],
      ['X', 10],
	  ['IX', 9],
      ['V', 5], 
	  ['IV', 4],
      ['I', 1]
    ];

  //your code here
	let roman = '';
	for(let i = 0; i < arr.length; i++){
		let symbol = arr[i][0];
		let value = arr[i][1];

		while(num>=value){
			num = num - value;
			roman = roman + symbol;
		}
	}

	return roman;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));


// do not edit below this line
module.exports = convertToRoman
