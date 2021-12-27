<template>
  <base-page-wrapper
      title="Create task"
      :loading="loading">
    <div class="edit-task">
      <div class="edit-task__content">
        <div class="edit-task__column">
          <div class="edit-task__input">
            <base-input label="Title"/>
          </div>
          <div class="edit-task__select">
            <edit-task-select />
          </div>
          <div class="edit-task__uploading">
            <upload-file />
          </div>
        </div>
        <div class="edit-task__column">
          <div class="edit-task__description">
            <edit-task-description/>
          </div>
        </div>
      </div>
      <div class="edit-task__submit-button">
        <button @click="submit">Create task</button>
      </div>
    </div>
  </base-page-wrapper>
</template>

<script>
import BasePageWrapper from "@/app/common/BasePageWrapper";
import UploadFile from "@/app/common/uploadFiles/UploadFiles";
import BaseInput from "@/app/common/BaseInput";

import EditTaskDescription from "@/app/projects/tasks/editTask/components/EditTaskDescription";
import EditTaskSelect from "@/app/projects/tasks/editTask/components/EditTaskSelect";

export default {
  name: 'edit-task',
  components: {EditTaskSelect, BasePageWrapper, BaseInput, EditTaskDescription, UploadFile },
  data() {
    return {
      loading: false
    }
  },
  methods: {
    submit() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 700)
    }
  },

}
</script>

<style scoped lang="scss">
.edit-task {

  &__content {
    display: flex;
    max-width: 1600px;

    @media screen and (max-width: 1400px) {
      flex-wrap: wrap;
    }
  }

  &__column {
    width: 50%;

    padding: 0 12px 12px 12px;
    box-sizing: border-box;

    @media screen and (max-width: 1800px) {
      &:first-child {
        width: 40%;
      }
      &:last-child {
        width: 60%;
      }
    }
    @media screen and (max-width: 1400px) {
      width: 100% !important;
    }
  }
  &__input {
    margin: 0px 0px 24px 0px;

    @media screen and (max-width: 1400px) {
      max-width: 600px;
    }
  }
  &__select {
    margin: 0px 0px 24px 0px;
  }
  &__description {

  }

  &__submit-button {
    padding: 12px;
    > button {
      width: 222px;
      height: 56px;

      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;

      color: #FFFFFF;

      background: #0AB258;
      border-radius: 4px;
      border: none;

      transition: 200ms;
      cursor: pointer;

      &:hover {
        background: #49d78b;
      }
    }
  }

}
</style>
