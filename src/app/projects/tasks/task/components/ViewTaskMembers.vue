<template>
  <div class="view-task-members">
    <div class="view-task-members__count">{{ membersCount }}</div>
    <ul class="view-task-members__list">
      <li class="view-task-members__item" :key="index" v-for="(member, index) in selectedMember">
        {{ member }}
      </li>
    </ul>
  </div>
</template>

<script>
import { tasksController } from '../../tasks.controller'

export default {
  name: "view-task-members",
  data() {
    return {
      selectedMember: []
    }
  },
  created() {
    this.getSelectedMembers()
  },
  methods: {
    getSelectedMembers() {
      tasksController.getSelectedMembers()
      .then(selectedMembers => {
        this.selectedMember = selectedMembers
        console.log(this.$data)
      })
    }
  },
  computed: {
    membersCount() {
      return this.selectedMember.length
    }
  }
}
</script>

<style lang="scss" scoped>
.view-task-members {
  min-height: 56px;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background-color: #FBFBFB;
  @media (max-width: 767.98px) {
    padding: 10px 15px;
  }
  &__count {
    display: inline-flex;
    align-self: flex-start;
    height: 40px;
    min-width: 40px;
    padding: 4px;
    justify-content: center;
    align-items: center;
    font-family: Open Sans, sans-serif;
    font-size: 16px;
    background-color: #F4F4F4;
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    padding: 0px 0px 0px 16px;
  }
  &__item {
    font-family: "Rubik";
    &:not(:last-child) {
      padding: 0px 16px 0px 0px;
      margin: 0px 12px 0px 0px;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #212121;
        transform: translate(0, -50%);
        right: 0;
      }
    }
  }
}
</style>

