<template>
  <form 
    @submit.prevent="submitForm" 
    class="change-password-profile"
  >
    <div class="change-password-profile__input">
      <base-input
          disabled
          :type="'password'"
          :label="'Current password'"
          :model-value="userData.password"
          :placeholder="'Your password'"
      />
    </div>
    <div v-show="isEditMode" class="change-password-profile__input">
      <base-input
          :disabled="!isEditMode"
          :type="'password'"
          :label="'New password'"
          :model-value="newPassword"
          :placeholder="'New password'"
          @update:modelValue="updateNewPassword"
      />
    </div>
    <div v-show="isEditMode" class="change-password-profile__input">
      <base-input
          :disabled="!isEditMode"
          :type="'password'"
          :label="'Confirm password'"
          :placeholder="'Confirmed password'"
          :model-value="confirmedPassword"
          @update:modelValue="updateConfirmedPassword"
      />
    </div>
    <div v-show="isEditMode" class="change-password-profile__button">
      <base-button :minWidth="306" :text="'Save'"></base-button>
    </div>
  </form>
</template>

<script>
import BaseInput from "@/app/common/components/BaseInput";
import BaseButton from "@/app/common/components/BaseButton";
export default {
  name: "profile-security",
  components: {BaseInput, BaseButton},
  props: {
    userData: { type: Object },
    isEditMode: { type: Boolean },
    settingsName: { type: String }
  },
  emits: ['deactivate-edit-mode'],
  data() {
    return {
      newPassword: "",
      confirmedPassword: ""
    }
  },
  methods: {
    submitForm() {
      if (!this.newPassword) return;
      if (this.newPassword !== this.confirmedPassword) return;

      console.log(`Now your password is ${this.newPassword}`)
      
      this.newPassword = ""
      this.confirmedPassword = ""
      
      this.$emit('deactivate-edit-mode', this.settingsName)
    },
    updateConfirmedPassword(value) {
      this.confirmedPassword = value;
    },
    updateNewPassword(value) {
      this.newPassword = value;
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
  &__button {
    margin: 44px 0px 0px 0px;
  }
}
</style>