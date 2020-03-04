//引入path模块，专门用于解决路径相关的问题
const {resolve} = require('path');
/* 
	1.module.exports暴露的是一个对象
	2.该对象是webpack重要的配置对象 
	3.webpack的入口、输出位置、工作模式、loader、plugins均要在该对象里指定好。
*/
module.exports = {
  entry: './src/js/app.js', //配置入口
  output: { //配置输出位置
    filename: 'app.js', //输出文件的名字
    path: resolve(__dirname, 'dist/js') //输出文件的路径
	},
	mode:'development', //工作模式
	//module是一个配置对象，对象里有一个rules属性
	module: {
		//rules属性值为一个数组，数组里放的是一个一个的loader
		rules: [
			{
				test: /\.less$/, //匹配所有的less文件
				use: [
					{loader: "style-loader"}, //把CommonJS中的css模块翻译成style标签
					{loader: "css-loader" }, //将内存中的css翻译为CommonJS的一个模块(内存)
					{loader: "less-loader" } //将less翻译成css(内存)
				]
			}
		]
	}
};
