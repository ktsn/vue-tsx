import './jsx'

import _Vue = require('vue')

// add generic type for props to handle its type from jsx
export declare class Vue<P> extends _Vue {
  _propsBrand: P
}
