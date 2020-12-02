import Vue from 'vue'

const name = {
  type: String,
  required: true
}

const type = {
  type: String,
  default: 'submit'
}

export default Vue.extend({
  name: 'RaButton',
  props: {
    name,
    type
  }
})
