const glob = require('glob');
const path = require('path');

module.exports = {
    entry: {
        main2: [...glob.sync('./src2/**/*.js')],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    }
};
