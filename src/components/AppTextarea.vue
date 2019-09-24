<template>
  <div>
      <textarea
        :class="{ isFilled }"
        :value="value"
        @input="inputHandler"
      ></textarea>
      <p>
          {{ value }}
      </p>
  </div>
</template>

<script>
import { useInputHandler, useIsFilled } from '../utils/input'

export default {
  props: {
    value: {
      type: [String, Number],
      default: null
    }
  },
  setup (props, context) {
    return {
      inputHandler: useInputHandler(context),
      ...useIsFilled(props)
    }
  }
}
</script>

<style scoped>
.isFilled {
  border-color: green;
}
</style>
