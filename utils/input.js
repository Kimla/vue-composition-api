import { watch, ref } from '@vue/composition-api'

export function useInputHandler (context) {
  return event => context.emit('input', event.target.value)
}

export function useIsFilled (props) {
  const isFilled = ref(false)

  watch(() => {
    isFilled.value = props.value && props.value.length > 0
  })

  return {
    isFilled
  }
}
