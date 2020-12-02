import Vue from 'vue'

const id ={
  type: String,
  required: false
}

const name = {
  type: String,
  required: true
}

const action = {
  type: String,
  required: false
}

const method = {
  type: String,
  default: 'POST'
}

export default Vue.extend({
  name: 'RaForm',
  props: {
    id,
    name,
    action,
    method
  },
  methods: {
    submit (event: Event): void {
      this.$emit('submit', event)
    }
  }
})
