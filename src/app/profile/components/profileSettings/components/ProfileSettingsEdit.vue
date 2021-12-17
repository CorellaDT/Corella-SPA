<template>
  <div class="profile-settings__edit">
    <div class="profile-settings-edit">
      <div class="profile-settings-edit__row">
        <div class="profile-settings-edit__column">
          <div class="profile-settings-edit__title">
            <profile-edit-title
                :isEditMode="editAccountSettings"
                @toggle-edit-mode="toggleEditMode"
                :title="'Account settings'"
                :settingsName="'account-settings'"
                :disabledEditButton="disabledEditButton"
            />
          </div>

          <profile-account-settings
              :isEditMode="editAccountSettings"
              :userData="userData"
              :settingsName="'account-settings'"
              @deactivate-edit-mode="toggleEditMode"
          />
        </div>
        <div class="profile-settings-edit__column">
          <div class="profile-settings-edit__title">
            <profile-edit-title
                :isEditMode="editSecurity"
                @toggle-edit-mode="toggleEditMode"
                :title="'Security'"
                :settingsName="'security'"
                :disabledEditButton="disabledEditButton"
            />
          </div>
          <profile-security
              :isEditMode="editSecurity"
              :userData="userData"
              :settingsName="'security'"
              @deactivate-edit-mode="toggleEditMode"
          />

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileEditTitle from "@/app/profile/components/profileSettings/components/ProfileEditTitle";
import ProfileSecurity from "@/app/profile/components/profileSettings/components/ProfileSecurity";
import ProfileAccountSettings from "@/app/profile/components/profileSettings/components/ProfileAccountSettings";
export default {
  name: "profile-settings-edit",
  components: {ProfileAccountSettings, ProfileSecurity, ProfileEditTitle},
  props: {
    userData: { type: Object }
  },
  data() {
    return {
      editAccountSettings: false,
      editSecurity: false,
      disabledEditButton: false
    }
  },
  methods: {
    toggleEditMode(settingsName) {
      this.disabledEditButton = true
      console.log(settingsName)
      switch (settingsName) {
        case 'account-settings':
          this.editAccountSettings = !this.editAccountSettings
          break
        case 'security':
          this.editSecurity = !this.editSecurity
          break
      }
      setTimeout(() => {
        this.disabledEditButton = false
      }, 300)
    }
  },
}
</script>

<style lang="scss">
.profile-settings-edit {


  &__row {
    display: flex;
    margin: 0px -16px;
  }

  &__column {
    flex: 0 1 50%;
    padding: 0px 16px;
  }

  &__input {
    margin: 0px 0px 24px 0px;
  }
  &__title {
    margin: 0px 0px 18px 0px;
  }
}

</style>