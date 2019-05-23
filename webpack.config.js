module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(esm|svg|png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    }
                ]
            }
        ]
    },
    watch: true
};