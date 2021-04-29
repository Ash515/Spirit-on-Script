//ES6
//Array.from

const arraylike={ 0: 'Value 0',
 1: 'Value 1',
 length: 2
};
arrayLike.forEach(value => {/* Do something */}); // Errors
const realArray = Array.from(arrayLike);
realArray.forEach(value => {/* Do something */}); /Works

//for...of

var realArray = [];
for(const element of arrayLike) {
 realArray.append(element);
}
