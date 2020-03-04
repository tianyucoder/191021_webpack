//该文件是webpack的入口文件，不仅仅用于汇总所有的js文件，该文件里还可以引入：json文件、less文件等等。
/* 
	ES6模块化：
		暴露：分别暴露、统一暴露、默认暴露
		引入：如何引入一个模块，取决于该模块是如何暴露的。
*/

//引入模块
import '@babel/polyfill';
import {sum} from './module1'
import {sub} from './module2'
import m3 from './module3'
import '../css/index.less'//新的写法：在入口js中引入less文件

console.log(sum(1,2));
console.log(sub(3,2));
console.log(m3.mul(3,3));
console.log(m3.div(6,3));

setTimeout(()=>{
	console.log('定时器的回调执行了');
})

let p = new Promise((resolve)=>{
	setTimeout(()=>{
		resolve('atguigu')
	},1000)
})
p.then(
	value => {console.log('成功',value);},
	reason => {console.log('失败',reason);}
)