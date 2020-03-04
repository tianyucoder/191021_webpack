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
			//使用：less-loader,css-loader,style-loader编译less为style标签
			{
				test: /\.less$/, //匹配所有的less文件
				use: [
					{loader: "style-loader"}, //把CommonJS中的css模块翻译成style标签
					{loader: "css-loader" }, //将内存中的css翻译为CommonJS的一个模块(内存)
					{loader: "less-loader" } //将less翻译成css(内存)
				]
			},
			//使用eslint-loader进行js的语法检查
			{
        test: /\.js$/,//匹配所有js文件
        exclude: /node_modules/,//排除node_modules文件
        loader: 'eslint-loader',
			},
			//使用babel-loader配合core-js和polyfill，进行语法转换及兼容性处理
			{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
						presets: [
							[
								'@babel/preset-env',
								{
									useBuiltIns: 'usage',  // 按需引入(需要使用polyfill)
									corejs: { version: 3 }, // 解决warning警告
									targets: { // 指定兼容性处理哪些浏览器
										"chrome": "58",
										"ie": "9",
									}
								}
							]
						],
						cacheDirectory: true, // 开启babel缓存
					}
        }
			}
		]
	}
};
