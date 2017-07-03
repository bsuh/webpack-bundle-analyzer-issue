const glob = require('glob');
const path = require('path');

module.exports = {
    entry: {
        main: [...glob.sync('./src/**/*.js')],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    }
};
