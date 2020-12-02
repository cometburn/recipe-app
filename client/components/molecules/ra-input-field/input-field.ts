import Vue from 'vue'
import RaInput from '~/components/atoms/ra-input/index.vue'

const id = {
  type: String,
  required: true
}

const type = {
  type: String,
  required: true
}

const name = {
  type: String,
  required: true
}

const placeholder = {
  type: String
}

const disabled = {
  type: Boolean,
  default: false
}

const required = {
  type: Boolean,
  default: false
}

export default Vue.extend({
  name: 'RaInputField',
  components: {
    RaInput
  },
  props: {
    id,
    type,
    name,
    placeholder,
    disabled,
    required
  }
})
