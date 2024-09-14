const path = require('path');

module.exports = {
    entry: './src/index.js', // Điểm đầu vào của ứng dụng
    output: {
        path: path.resolve(__dirname, 'dist'), // Thư mục đầu ra
        filename: 'bundle.js', // Tên file đầu ra
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // Định dạng file cần xử lý
                exclude: /node_modules/, // Loại trừ thư mục node_modules
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'], // Sử dụng preset của Babel
                    },
                },
            },
            {
                test: /\.css$/, // Định dạng file CSS
                use: ['style-loader', 'css-loader'], // Sử dụng loader để xử lý CSS
            },
            {
                test: /\.(png|jpg|gif)$/, // Định dạng file hình ảnh
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/', // Thư mục đầu ra cho hình ảnh
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Các phần mở rộng file cần xử lý
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'), // Thư mục chứa file tĩnh
        compress: true, // Bật nén gzip
        port: 9000, // Cổng chạy server
    },
};
