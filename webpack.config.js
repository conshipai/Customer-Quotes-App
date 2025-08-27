const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  
  return {
    entry: './src/index.js',
    mode: isProduction ? 'production' : 'development',
    
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      publicPath: isProduction ? 'https://quotes.gcc.conship.ai/' : 'http://localhost:3001/',
      clean: true
    },

    devServer: {
      port: 3001,
      historyApiFallback: true,
      hot: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
      }
    },

    resolve: {
      extensions: ['.js', '.jsx', '.json'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@services': path.resolve(__dirname, 'src/services'),
        '@contexts': path.resolve(__dirname, 'src/contexts'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@utils': path.resolve(__dirname, 'src/utils')
      }
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    require('tailwindcss'),
                    require('autoprefixer'),
                  ],
                },
              },
            },
          ]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource'
        }
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html'
      }),
      
      new ModuleFederationPlugin({
        name: 'customerQuotePortal',
        filename: 'remoteEntry.js',
        exposes: {
          './App': './src/App',
        },
        shared: {
          react: { 
            singleton: true, 
            requiredVersion: '^18.2.0'
          },
          'react-dom': { 
            singleton: true,
            requiredVersion: '^18.2.0'
          },
          'react-router-dom': {
            singleton: true,
            requiredVersion: '^6.20.0'
          }
        },
      }),

      new Dotenv({
        systemvars: true,
        safe: true
      })
    ],

    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
  };
};
