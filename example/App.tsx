import Component from 'vue-class-component'
import { Vue } from '../lib/index'

@Component({
  props: {
    name: String
  }
})
export default class App extends Vue<{ name: string }> {
  name: string

  render (h: Function) {
    return (
      <div id="hello" title={this.name}>Hello {this.name}!</div>
    )
  }
}
