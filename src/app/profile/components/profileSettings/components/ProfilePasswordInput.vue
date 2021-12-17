<template>
  <div class="profile-password-input">
    <base-input
        @update:modelValue="$emit('update:modelValue', $event)"
        :type="type"
        :label="label"
        :disabled="disabled"
        :placeholder="placeholder"
        :model-value="modelValue"
    />
    <button
        @click="visible = !visible"
        :class="['profile-password-input__btn', { 'profile-password-input__btn--visible': visible }]"
        type="button"
    >
      <svg-icon
          :icon="require('@/assets/images/icons/common/icon-eye.svg')"
          :width="24"
          :height="24"
      />
    </button>
  </div>

</template>

<script>
import BaseInput from "@/app/common/components/BaseInput";
export default {
  name: "profile-password-input",
  components: {BaseInput},
  props: {
    modelValue: {type: String},
    label: {type: String},
    disabled: {type: Boolean},
    placeholder: {type: String, default: 'Please input'}
  },
  data() {
    return {
      visible: false
    }
  },

  computed: {
    type() {
      return this.visible ? "text" : "password"
    },
  }
}
</script>

<style lang="scss">
.profile-password-input {
  display: flex;
  align-items: flex-end;
  &__btn {
    cursor: pointer;
    flex: 0 0 57px;
    height: 56px;
    background-color: transparent;
    padding: 0;
    line-height: 1;
    border: 1px solid #E7E7E7;
    border-left: none;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    svg {
      transition: fill 0.3s ease;
      fill: #BDBCC8;
    }
    &--visible {
      svg {
        fill: #0AB258;
      }
    }
  }
  .base-input {
    margin: 0;
    flex: 1 1 auto;
    input {
      border-bottom-right-radius: 0px;
      border-top-right-radius: 0px;
      border-right: none;
    }
  }
}
</style>