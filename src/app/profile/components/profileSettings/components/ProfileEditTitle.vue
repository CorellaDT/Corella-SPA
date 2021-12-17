<template>
  <div class="profile-actions-title">
    <h3 class="profile-actions-title__item">{{ title }}</h3>
    <button
        @click="$emit('toggle-edit-mode', settingsName)"
        type="button"
        :disabled="disabledEditButton"
        :class="['profile-actions-title__btn', { 'profile-actions-title__btn--edit': isEditMode }]">
      <svg-icon
          :icon="require('@/assets/images/icons/profile/icon-edit.svg')"
          :width="18"
          :height="18"
      />
    </button>
  </div>
</template>

<script>
export default {
  name: "profile-edit-title",
  emits: ['toggle-edit-mode'],
  props: {
    title: {type: String},
    isEditMode: {type: Boolean},
    settingsName: {type: String},
    disabledEditButton: {type: Boolean}
  },

}
</script>

<style lang="scss">
.profile-actions-title {
  display: flex;
  align-items: flex-end;
  &__item {
    font-family: "Rubik";
    font-size: 18px;
    font-weight: 500;
    color: #212121;
  }
  &__btn {
    cursor: pointer;
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0px 0px 0px 16px;
    outline: none;
    line-height: 1;
    svg {
      fill: #333;
      transition: all 0.3s ease;
    }
    &--edit {
      svg {
        fill: #20C561;
      }
    }
  }
}
</style>