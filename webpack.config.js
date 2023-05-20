// module.exports = {
//     // ...
//     module: {
//       rules: [
//         {
//           test: /\.mp4$/,
//           include: path.resolve(__dirname, 'src/assets'),
//           use: [
//             {
//               loader: 'file-loader',
//               options: {
//                 name: '[name].[ext]',
//                 outputPath: 'assets/videos/'
//               }
//             },
//             {
//               loader: 'url-loader',
//               options: {
//                 limit: 10000,
//                 mimetype: 'video/mp4',
//                 fallback: 'file-loader',
//                 outputPath: 'assets/videos/'
//               }
//             }
//           ]
//         }
//       ]
//     }
//     // ...
//   };

module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // 其他的loader配置
    ]
  }