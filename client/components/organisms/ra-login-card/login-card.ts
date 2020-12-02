import Vue from 'vue'
import RaButton from '~/components/atoms/ra-button/index.vue'
import RaForm from '~/components/atoms/ra-form/index.vue'
import RaInputField from '~/components/molecules/ra-input-field/index.vue'

export default Vue.extend({
  name: 'RaLoginCard',
  components: {
    RaButton,
    RaForm,
    RaInputField
  },
  methods: {
    authenticate (): void {
      this.$emit('submit')
    }
  }
})
