<template>
  <div class="profile-settings">
    <div class="profile-settings__info">
      <div class="profile-settings-info">
        <div class="profile-settings-info__avatar">
          <profile-avatar/>
        </div>
        <div class="profile-settings-info__name">{{ userData.name }}</div>
      </div>
    </div>
    <profile-settings-edit :user-data="userData" />
  </div>
</template>

<script>
import ProfileAvatar from "@/app/profile/components/ProfileAvatar";
import ProfileSettingsEdit from "@/app/profile/components/profileSettings/components/ProfileSettingsEdit";

export default {
  name: "profile-settings",
  data() {
    return {
      userData: {
        id: 1,
        name: "Robert Cordona",
        email: "robertCordona2023@gmail.com",
        password: "passwordforcorella",
      },

    }
  },

  components: {
    ProfileSettingsEdit,
    ProfileAvatar,
  }
}
</script>

<style lang="scss">
.profile-settings {
  &__info {
    margin: 0px 0px 58px 0px;
  }
}
.profile-settings-info {
  display: flex;

  &__name {
    font-family: "Rubik";
    padding: 20px 0px 0px 28px;
    font-size: 18px;
    font-weight: 500;
    flex: 1 1 auto;
  }
}


</style>