import Vue from 'vue'

export default Vue.extend({
  props: {
    name: String
  },

  render (h: Function) {
    return (
      <div id="hello" title={this.name}>Hello {this.name}!</div>
    )
  }
})
