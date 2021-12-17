<template>
  <form @submit.prevent="submitForm" class="profile-account-settings">
    <div class="profile-account-settings__input">
      <base-input
          :disabled="!isEditMode"
          :label="'Username'"
          :model-value="name"
          :placeholder="'Your name'"
          @update:modelValue="updateName"
      />
    </div>
    <div class="profile-account-settings__input">
      <base-input
          :disabled="!isEditMode"
          :label="'E-mail'"
          :model-value="email"
          :placeholder="'Your email'"
          @update:modelValue="updateEmail"
      />
    </div>
    <div v-show="isEditMode" class="profile-account-settings__btn">
      <base-button :width="306" :text="'Save'" :disabled="!wasChanged" />
    </div>
  </form>
</template>

<script>
import BaseInput from "@/app/common/components/BaseInput";
import BaseButton from "@/app/common/components/BaseButton";
import {notificationsHelper} from "@/helpers/notifications.helper";

export default {
  name: "profile-account-settings",
  components: {BaseButton, BaseInput},
  emits: ["deactivate-edit-mode"],
  props: {
    userData: { type: Object },
    isEditMode: { type: Boolean },
    settingsName: { type: String },
  },
  data() {
    return {
      wasChanged: false,
      email: "",
      name: ""
    }
  },
  created() {
    this.email = this.userData.email
    this.name = this.userData.name
  },
  methods: {
    updateEmail(value) {
      if (!this.wasChanged) this.wasChanged = true
      this.email = value
    },
    updateName(value) {
      if (!this.wasChanged) this.wasChanged = true
      this.name = value
    },
    submitForm() {
      const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (!this.email.toLowerCase().match(emailRegExp)) {
        notificationsHelper.error({ message: 'Email is not valid' })
        return
      }
      if (!this.name) {
        notificationsHelper.error({ message: 'You should define your name'})
        return
      }
      notificationsHelper.success({ message: 'Your account settings were successfully updated' })
      this.wasChanged = false
      this.$emit('deactivate-edit-mode', this.settingsName)
    }
  },

}
</script>

<style lang="scss">
.profile-account-settings {
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