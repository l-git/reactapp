var config={

    entry:'./main1.jsx',
    //entry:'./app/main.jsx',
    output:{
        //filename:'index.js'
        filename:'./app/bundle.js'
    },
    module: {
        loaders: [
           {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query: {
                 presets: ['es2015', 'react','stage-0']
              }
           },
           { 
               test: /\.css$/, 
               loader: "style-loader!css-loader?module" //?module
            }
        ]
     },
     resolve: {
        extensions: ['.js', '.jsx'],
      }

}




module.exports=config;

