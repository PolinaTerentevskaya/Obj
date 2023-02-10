let obj = {1: 'Monday', 2: 'Tuesday', 3: 'Wednsday', 4: 'Thursday', 5: 'Friday', 6: 'Satursday', 7: 'Sunday'};
console.log(obj);

let obj1 = {1: 'January', 2: 'Webruary', 3: 'March', 4: 'April', 5: 'May', 6: 'june', 7: 'July', 8: 'Augast', 9: 'September', 10: 'October', 11: 'November', 12: 'December'};
console.log(obj1);

let user = {Name: 'Polina', Surname: 'Terentievskaya', Patronymic: 'Pavlovna'};
console.log(user['Name']+' '+user['Surname']+' '+user['Patronymic']);

let date = {year: 2023, month: 2, day: 10};
console.log(date.year+'-'+date.month+'-'+date.day);

let obj2 = {
	'a1': 1,
	'b2': 2,
	'c3': 3,
	'd4': 4,
	'e5': 5
};

console.log(obj2.a1);
console.log(obj2.b2);
console.log(obj2.c3);
console.log(obj2.d4);
console.log(obj2.e5);

let obj3 = {x: 1, y: 2, z: 3};
obj3.x = obj3.x**2;
obj3.y = obj3.y**2;
obj3.z = obj3.z**2;
console.log(obj3);

let obj4 = {};
obj4.a = 1;
obj4.b = 2;
obj4.c = 3;
console.log(obj4);

let obj5 = {3: 'c', 1: 'a', 2: 'b'};

console.log(obj5[1]); // выведет 'a'
console.log(obj5[2]); // выведет 'b'
console.log(obj5[3]); // выведет 'c'

let obj6 = {x: 1, y: 2, z: 3};
let keys = Object.keys(obj6);
console.log(keys);

let obj7 = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj7).length);

let obj8 = {x: 1, y: 2, z: 3};
let key = 'x';
console.log(obj8[key]);

let obj9 = {x: 1, y: 2, z: 3};
let key1 = 'x';
console.log(obj9[key1]);

let obj10 = {x: 1, y: 2, z: 3};
let key2 = 'x';
console.log(obj10[key2]);

let obj11 = {x: 1, y: 2, z: 3};

let prop = 'x';
console.log(obj11[prop]);

let obj12 = {x: 1, y: 2, z: 3};

let prop1 = 'x';
console.log(obj12[prop1]);

let key3 = 'x';

let obj13 = {
	[key3]: 1,
	y: 2,
	z: 3
};

let obj14 = {
	x: 1,
	y: 2,
	z: 3
};
let key11 = 'x';
let key21 = 'y';
let key31 = 'z';

let obj15 = {x: 1, y: 2, z: 3};

console.log('x' in obj15);
console.log('w' in obj15);

let obj16 = {x: 1, y: 2, z: 3};
delete obj16.x;

console.log('x' in obj16);

console.log( typeof {x: 1, y: 2, z: 3} );
console.log( typeof {} );
let obj17 = {x: 1, y: 2, z: 3};
console.log( typeof obj17 );
let obj18 = {x: 1, y: 2, z: 3};
console.log( typeof obj18['x'] );

console.log( typeof {x: 1, y: 2, z: 3} );
console.log( typeof [1, 2, 3] );
let arr = [1, 2, 3];
console.log( typeof arr );
let arr1 = [1, 2, 3];
console.log( typeof arr1[0] );
let arr2 = ['1', '2', '3'];
console.log( typeof arr2[0] );

console.log( Array.isArray([1, 2, 3]) );
console.log( Array.isArray({x: 1, y: 2, z: 3}) );

let test = {x: 1, y: 2, z: 3};
console.log(test);
let test1 = {x: 1, y: 2, z: 3};
console.log(test1.x);
let test2 = [1, 2, 3];
console.log(test2);
let test3 = [1, 2, 3];
console.log(test3[1]);
let test11 = [1, 2, 3];
let test21 = 1;
console.log(test11);
let test12 = [1, 2, 3];
let test22 = 1;
console.log(test12[test22]);
//примитивные - string, number, boolean, null, undefined, symbol, bigint
let arr11 = [1, 2, 3];
let arr21 = arr11;
arr11[0] = 'a';
console.log(arr21);

let arr12 = [1, 2, 3];
let arr22 = arr12;
arr12[0] = 'a';
arr22[1] = 'b';
console.log(arr12);

let arr13 = [1, 2, 3];
let arr23 = arr13;
arr13[0] = 'a';
arr23[0] = 'b';
console.log(arr23);

const arr4 = ['a', 'b', 'c'];
arr4[1] = '!';
console.log(arr4);

// const arr5 = ['a', 'b', 'c'];
// arr5 = [1, 2, 3];
// console.log(arr5);

// const arr5 = ['a', 'b', 'c'];
// arr5 = ['a', 'b', 'c'];
// console.log(arr5);

const arr5 = [1, 2, 3, 4, 5];
const res = arr5[1] + arr5[2];
console.log(res);

let obj19 = {x: 1, y: 2, z: 3};
let key4 = 'x';
console.log(obj19[key4]);

let obj20 = {x: 1, y: 2, z: 3};
let key5 = 'x';
console.log(obj20[key5]);

let obj21 = {x: 1, y: 2, z: 3};
console.log(obj21.x + obj21.y + obj21.z);

let obj22 = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj22).length);