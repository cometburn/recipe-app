import Vue from 'vue'

const name = {
  type: String,
  required: true
}

const type = {
  type: String,
  default: 'submit'
}

const color = {
  type: String,
  default: 'primary'
}

const block = {
  type: Boolean,
  default: true
}

export default Vue.extend({
  name: 'RaButton',
  props: {
    name,
    type,
    color,
    block
  }
})
