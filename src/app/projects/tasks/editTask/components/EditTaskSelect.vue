<template>
  <div class="edit-task-select">
    <base-title text="Members" />
    <el-select
        @remove-tag="updateSelectedMembers"
        @change="updateSelectedMembers"
        v-model="selectedMembers"
        multiple
        placeholder="Select members"
    >
      <el-option
          v-for="member in dataMembers"
          :key="member.id"
          :label="member.name"
          :value="member.name"
      >

        <div class="edit-task-select__name">{{ member.name }}</div>
        <div class="edit-task-select__decor"></div>
        <div class="edit-task-select__speciality">{{ member.speciality }}</div>
        <div class="edit-task-select__check">
          <svg-icon :icon="require('@/assets/images/icons/tasks/check.svg')" />
        </div>
      </el-option>
    </el-select>
  </div>
</template>

<script>
import BaseTitle from "@/app/common/BaseTitle"
import { tasksController } from '../../tasks.controller'

export default {
  name: "edit-task-select",
  components: {BaseTitle},

  data() {
    return {
      selectedMembers: [],
      dataMembers: []
    }
  },
  created() {
    this.getMembers()
  },
  methods: {
    updateSelectedMembers() {
      // console.log(Array.isArray(this.selectedMembers))
      tasksController.updateSelectedMembers(this.selectedMembers)
    },
    getMembers() {
      tasksController.getMembers()
      .then(members => {
        this.dataMembers = members
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.edit-task-select {
  &__decor {
    width: 4px;
    height: 4px;
    margin: 0px 8px;
    background-color: #212121;
    border-radius: 50%;
  }
  &__check {
    margin: 0px 0px 0px auto;
    display: none;
  }
}
</style>

<style lang="scss">
.el-select {
  width: 100%;
  @media (max-width: 1330px) {
    max-width: 600px;
  }
  &__popper {

  }
  &__tags {
    border: none;
    ~ span {
      width: 100%;
    }
  }
  &__tags-text {
    font-size: 16px;
    color: #212121;
  }
}
.el-input {

  &__inner {
    min-height: 56px;
    padding: 0px 20px;
    border-radius: 4px;
    border: 1px solid #E7E7E7;
  }
}
.el-select .el-select__tags .el-tag {
  background-color: #F6F6F6;
  border-radius: 4px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  margin: 8px 0px 8px 8px;
}
.el-select .el-select__tags > span {
  display: block;
}
.el-select-dropdown {

  &__item {
    display: flex;
    align-items: center;
    height: 58px;
    line-height: 58px;
    padding: 0px 22.5px 0px 15px;
    font-weight: 400;
    font-family: "Rubik";
    font-size: 16px;
    color: #212121;
    &.hover {
      background-color: #fff;
    }
    &:hover {
      background-color: #FAFAFA;
    }
  }
  &__wrap {
    max-height: 290px;
    overflow: auto;
  }
  &__list {
    margin: 0 !important;
  }
}
.el-select-dropdown.is-multiple .el-select-dropdown__item.selected.hover {
  background-color: #FAFAFA;
}
.el-select-dropdown.is-multiple .el-select-dropdown__item.selected {
  background-color: #FAFAFA;
  color: inherit;
  font-weight: 400;
  color: #212121;
  .edit-task-select__check {
    display: block;
  }
}
.el-tag {
  &__close {
    height: 16px;
    width: 16px;
    margin: 0px 0px 0px 8px;

    svg {
      height: 16px;
      width: 16px;
    }
  }
  .el-icon svg {
    margin: 0;
  }
  &--small {
    padding: 2px 15px 2px 8px;
  }
}
.el-tag .el-icon {
  right: 0;
  top: 0;
}
.el-popper {
  &__arrow {
    display: none;
  }
}

.el-select__popper.el-popper[role=tooltip] {
  box-shadow: 0px 0px 0px transparent;
  border: 1px solid #E7E7E7;
}

</style>