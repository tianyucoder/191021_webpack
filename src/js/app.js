//该文件是用于汇总所有js模块的文件。
/* 
	ES6模块化：
		暴露：分别暴露、统一暴露、默认暴露
		引入：如何引入一个模块，取决于该模块是如何暴露的。
*/

//引入模块
import {sum} from './module1'
import {sub} from './module2'
import m3 from './module3'

console.log(sum(1,2));
console.log(sub(3,2));
console.log(m3.mul(3,3));
console.log(m3.div(6,3));

setTimeout(()=>{
	console.log('定时器的回调执行了');
})