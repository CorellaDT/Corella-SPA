<template>
  <label class="base-input">
    <span v-if="label">{{ label }}</span>
    <div class="base-input__item">
      <input
        :disabled="disabled"
        :type="type || 'text'"
        :value="modelValue"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)">
      <button v-show="type === 'password'" @click="visible = !visible" class="base-input__eye" type="button">
        <svg-icon
          :icon="require('@/assets/images/icons/common/icon-visible-eye.svg')"
          :width="24"
          :height="24"
        />
    </button>
    
    </div>

  </label>
</template>

<script>
export default {
  name: 'base-input',
  model: { prop: 'modelValue', event: 'input' },

  props: {
    modelValue: { type: String },
    label: { type: String },
    type: { type: String },
    disabled: { type: Boolean },
    placeholder: { type: String, default: 'Please input' }
  },
  data() {
    visible: false
  }
}
</script>

<style scoped lang="scss">
.base-input {
  margin-top: 12px;
  margin-bottom: 12px;
  position: relative;
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
    max-width: 100%;
    flex: 1 1 auto;
    height: 56px;
    border: none;
    box-sizing: border-box;
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;

    color: #3D3D3D;

    &::placeholder {
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 24px;

      color: #BDBCC8;
    }
  }
  &__item {
    display: flex;
    border: 1px solid #E7E7E7;
    border-radius: 4px;
  }
  &__eye {
    cursor: pointer;
    flex: 0 0 57px;
    background-color: transparent;
    padding: 0;
    line-height: 1;
    border: none;
  }
}
</style>
