<template>
  <form 
    @submit.prevent="submitForm" 
    class="change-password-profile"
  >
    <div class="change-password-profile__input">
      <profile-password-input
          disabled
          :type="'password'"
          :label="'Current password'"
          :model-value="userData.password"
          :placeholder="'Your password'"
      />
    </div>
    <div v-show="isEditMode" class="change-password-profile__input">
      <profile-password-input
          :disabled="!isEditMode"
          :type="'password'"
          :label="'New password'"
          :model-value="newPassword"
          :placeholder="'New password'"
          @update:modelValue="updateNewPassword"
      />
    </div>
    <div v-show="isEditMode" class="change-password-profile__input">
      <profile-password-input
          :disabled="!isEditMode"
          :type="'password'"
          :label="'Confirm password'"
          :placeholder="'Confirmed password'"
          :model-value="confirmedPassword"
          @update:modelValue="updateConfirmedPassword"
      />
    </div>
    <div v-show="isEditMode" class="change-password-profile__btn">
      <base-button :disabled="!wasChanged" :width="306" :text="'Save'"></base-button>
    </div>
  </form>
</template>

<script>
import BaseButton from "@/app/common/components/BaseButton"
import ProfilePasswordInput from "@/app/profile/components/profileSettings/components/ProfilePasswordInput"
import {notificationsHelper} from "@/helpers/notifications.helper"

export default {
  name: "profile-security",
  components: {ProfilePasswordInput, BaseButton},
  props: {
    userData: { type: Object },
    isEditMode: { type: Boolean },
    settingsName: { type: String }
  },
  emits: ['deactivate-edit-mode'],
  data() {
    return {
      newPassword: "",
      confirmedPassword: "",
      wasChanged: false
    }
  },
  methods: {
    submitForm() {
      if (!this.newPassword && !this.confirmedPassword) {
        notificationsHelper.error({ message: 'New password is not defined' })
        return
      }
      if (this.newPassword !== this.confirmedPassword) {
        notificationsHelper.error({ message: 'Confirmed password is not equal to new password' })
        return
      }

      notificationsHelper.success({ message: 'Your password was successfully updated' })
      
      this.newPassword = ""
      this.confirmedPassword = ""
      this.wasChanged = false
      this.$emit('deactivate-edit-mode', this.settingsName)
    },
    updateConfirmedPassword(value) {
      if (!this.wasChanged) this.wasChanged = true
      this.confirmedPassword = value

    },
    updateNewPassword(value) {
      if (!this.wasChanged) this.wasChanged = true
      this.newPassword = value

    }
  },
  computed: {
    isConfirmPasswordValid() {
      return this.confirmedPassword === this.newPassword
    },
  },
}
</script>

<style lang="scss">
.change-password-profile {
  &__input {
    margin: 0px 0px 24px 0px;
    &:last-child {
      margin: 0;
    }
  }
  &__btn {
    margin: 44px 0px 0px 0px;
  }
}
</style>