import { merge } from 'webpack-merge';
import common from './webpack.common.js';

export default merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    usedExports: true,
    concatenateModules: true
  },
});
