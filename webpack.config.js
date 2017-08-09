module.exports = {
	 entry: {
    'publisher': publisherEntries,
    'manager': managerEntries,
    'client': "webpack-dev-server/client?http://0.0.0.0:4200"
  },
	module: {
		rules: [
			{
				test: /\.pug$/,
				use: [
					"pug-loader?self",
				]
			},
			{
				test: /\.css$/,
				use: [
					"style-loader",
					"css-loader"
				],
			}
		]
	}
};
