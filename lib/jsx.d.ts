import { VNode } from 'vue'
import { Vue } from './index'

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass extends Vue<any> {}
    interface ElementAttributesProperty {
      _propsBrand: {}
    }

    interface IntrinsicElements {
      div: any
    }
  }
}
