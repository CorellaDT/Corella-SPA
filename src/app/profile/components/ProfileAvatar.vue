<template>
  <div class="info-profile__avatar">
    <div class="profile-avatar">
      <div class="profile-avatar__image">
        <img 
          :src="avatarLink || require('@/assets/images/profile/default-avatar.jpg')" 
          alt="User Avatar"
        >
      </div>
      <button @click="onButtonClick" type="button" class="profile-avatar__btn-edit">
        <svg-icon
            :icon="require('@/assets/images/icons/profile/icon-edit.svg')"
            :width="20"
            :height="20"
        />
      </button>
      <input
          type="file"
          @change="changeAvatar"
          style="display: none"
          ref="input"
          accept=".jpg,.jpeg,.png"
      />
    </div>
  </div>
</template>

<script>

export default {
  name: 'profile-avatar',
  data() {
    return {
      avatarLink: "",
      $avatar: ""
    }
  },
  methods: {
    onButtonClick() {
      this.$refs.input.click()
    },
    changeAvatar(e) {
      const file = e.target.files[0]

      this.avatarLink = URL.createObjectURL(file)
      this.$avatar = file

      e.target.value = null
    }
  },
}
</script>

<style lang="scss">
.profile-avatar {
  position: relative;
 
  &__image {
    width: 90px;
    height: 90px;
    display: block;
    border-radius: 50%;
    object-fit: cover;
    position: relative;
    overflow: hidden;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 4px solid #20C560;
    }
  }

  &__btn-edit {
    position: absolute;
    bottom: -10px;
    right: -15px;
    background-color: #7280FF;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    min-height: 42px;
    min-width: 42px;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    align-items: center;
    transition: all 0.3s ease;
    border: 1px solid transparent;
    svg {
      fill: #fff;
    }
    &:hover {
      border-color: #7280FF;
      background-color: #fff;
      svg {
        fill: #7280FF;
      }

    }
  }
}


</style>