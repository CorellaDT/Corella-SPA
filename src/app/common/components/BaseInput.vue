<template>
  <label class="base-input">
    <span v-if="label">{{ label }}</span>

    <input
        :disabled="disabled"
        :type="type || 'text'"
        :value="modelValue"
        :placeholder="placeholder"
        autocomplete="off"
        @input="$emit('update:modelValue', $event.target.value)">
  </label>
</template>

<script>
export default {
  name: 'base-input',
  model: {prop: 'modelValue', event: 'input'},

  props: {
    modelValue: {type: String},
    label: {type: String},
    type: {type: String},
    disabled: {type: Boolean},
    placeholder: {type: String, default: 'Please input'}
  }
}
</script>

<style scoped lang="scss">
.base-input {
  margin-top: 12px;
  margin-bottom: 12px;

  > span {
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;

    color: #7B7B7B;
  }

  input {
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
    flex: 1 1 auto;
    height: 56px;
    border: 1px solid #E7E7E7;
    box-sizing: border-box;
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    border-radius: 4px;
    color: #3D3D3D;

    &::placeholder {
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 24px;

      color: #BDBCC8;
    }
    &[disabled] {
      background-color: transparent;
      //background-color: #F8F8F8;
    }
  }


}
</style>
