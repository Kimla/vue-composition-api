<template>
  <div id="app">
    <AppInput v-model="inputValue" />
    <br>
    <br>
    <AppTextarea v-model="textareaValue" />
  </div>
</template>

<script>
import AppInput from './components/AppInput.vue'
import AppTextarea from './components/AppTextarea.vue'

export default {
  name: 'app',
  components: {
    AppInput,
    AppTextarea
  },
  data: () => ({
    inputValue: null,
    textareaValue: null
  })
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
