//引入html-webpack-plugin插件，用于生成html，且自动引入资源
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); // 注意要解构赋值！！！
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
//引入path模块，专门用于解决路径相关的问题
const {resolve} = require('path');
/* 
	1.module.exports暴露的是一个对象
	2.该对象是webpack重要的配置对象 
	3.webpack的入口、输出位置、工作模式、loader、plugins均要在该对象里指定好。
*/
module.exports = {
	entry: ['./src/js/app.js','./src/index.html'],//配置入口
  output: { //配置输出位置
    filename: 'js/app.js', //输出文件的名字
		path: resolve(__dirname, '../dist'),//输出文件的路径
		publicPath:'/'
	},
	mode:'production', //工作模式
	//module是一个配置对象，对象里有一个rules属性
	module: {
		//rules属性值为一个数组，数组里放的是一个一个的loader
		rules: [
			//使用：less-loader,css-loader,style-loader编译less为style标签
			{
				test: /\.less$/, //匹配所有的less文件
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: () => [
								require('postcss-flexbugs-fixes'),
								require('postcss-preset-env')({
									autoprefixer: {
										flexbox: 'no-2009',
									},
									stage: 3,
								}),
								require('postcss-normalize')(),
							],
							sourceMap: true,
						},
					},
					'less-loader',
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
			},
			//使用url-loader处理less文件中的图片
			{
        test: /\.(png|jpg|gif|jpeg|bmp)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
							outputPath:'imgs',//输出路径，注意这里不要加'/'
							name:'[hash:5].[ext]',//文件命名格式
							publicPath:'../imgs',//加载图片时候的路径
							limit: 8192, //图片小于8KB，就做base64转换
							esModule:false//避免img标签中src属性变为[object Module]
						}
          }
        ]
			},
			//使用html-loader，处理html文件中img标签
			{
				test: /\.(html)$/,
				loader: 'html-loader'
			},
			//使用file-loader，处理其他资源
			{
				test: /\.(eot|svg|woff|woff2|ttf|mp3|mp4|avi)$/,  // 处理其他资源
				loader: 'file-loader',
				options: {
					outputPath: 'font',
					name: '[hash:5].[ext]'
				}
		}
		]
	},
	//plugins里配置所有需要的插件，插件使用之前要new
	plugins: [
		//new一个HtmlWebpackPlugin实例
		new HtmlWebpackPlugin({
      template: './src/index.html', // 以当前文件为模板创建新的HtML(1. 结构和原来一样 2. 会自动引入打包的资源)
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true,
			}
		}),
		//清空打包目录里
		new CleanWebpackPlugin(),
		//提取css为单独文件
		new MiniCssExtractPlugin({
			filename: "css/[name].css",
		}),
		//压缩css
		new OptimizeCssAssetsPlugin({
			cssProcessorPluginOptions: {
				preset: ['default', { discardComments: { removeAll: true } }],
			},
			cssProcessorOptions: { // 解决没有source map问题
				map: {
					inline: false,
					annotation: true,
				}
			}
		})
	],
	devServer: {
    open: true, // 自动打开浏览器
    compress: true, //启动gzip压缩
		port: 4000, // 端口号
		hot: true
	},
	devtool:'cheap-module-eval-source-map'
};
