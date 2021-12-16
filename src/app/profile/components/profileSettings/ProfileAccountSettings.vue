<template>
  <form class="profile-account-settings">
    <div class="profile-account-settings__input">
      <base-input
          :disabled="!isEditMode"
          :label="'Username'"
          :model-value="userData.name"
          :placeholder="'Your name'"
      />
    </div>
    <div class="profile-account-settings__input">
      <base-input
          :disabled="!isEditMode"
          :label="'E-mail'"
          :model-value="userData.email"
          :placeholder="'Your email'"
      />
    </div>
  </form>
</template>

<script>
import BaseInput from "@/app/common/components/BaseInput";
export default {
  name: "profile-account-settings",
  components: {BaseInput},
  props: {
    userData: { type: Object },
    isEditMode: { type: Boolean },
    settingsName: { type: String }
  }
}
</script>