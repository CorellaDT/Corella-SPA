<template>
  <task-page-wrapper
      title="Task #242"
      :show-edit-button="true"
      :show-delete-button="false"
      @edit="$router.push('/project/1/create-task')"
      @delete="$router.push('/project/1/board')">
    <div class="view-task">
      <div class="view-task__row">
        <div class="view-task__column">
          <div class="view-task__main">
            <div class="view-task__item">
              <div class="view-task-item__text">As a user, I want to be able to create new versions for projects and
                link them to issues or hotfixes
              </div>
            </div>
            <div class="view-task__members">
              <view-task-members/>
            </div>
            <div class="view-task__files">
              <upload-files :is-view-mode="true"/>
            </div>
            <div class="view-task__collapse">
              <view-task-collapse/>
            </div>
          </div>
        </div>
        <div class="view-task__column">
          <view-task-description/>
        </div>
      </div>
    </div>
  </task-page-wrapper>
</template>

<script>
import TaskPageWrapper from "@/app/common/BasePageWrapper";
import ViewTaskDescription from "@/app/projects/tasks/task/components/ViewTaskDescription";
import ViewTaskCollapse from "@/app/projects/tasks/task/components/ViewTaskCollapse";
import UploadFiles from "@/app/common/uploadFiles/UploadFiles";
import ViewTaskMembers from "@/app/projects/tasks/task/components/ViewTaskMembers";

export default {
  name: 'task',
  components: {ViewTaskMembers, UploadFiles, ViewTaskCollapse, ViewTaskDescription, TaskPageWrapper}
}
</script>

<style scoped lang="scss">
.view-task {
  &__row {
    margin: 24px 0px 0px 0px;
    @media(min-width: 1400px) {
      display: flex;
      margin: 24px -12px 0px -12px;
    }
  }

  &__item {
    margin: 0px 0px 27px 0px;
  }

  &__column {
    @media(min-width: 1400px) {
      flex: 0 1 50%;
      padding: 0px 12px;
    }

    &:not(:last-child) {
      margin: 0px 0px 40px 0px;
    }
  }

  &__members {
    margin: 0px 0px 44px 0px;
    @media (max-width: 767.98px) {
      margin: 0px 0px 30px 0px;
    }
  }

  &__collapse {
    margin: 50px 0px 0px 0px;
    @media (max-width: 767.98px) {
      margin: 30px 0px 0px 0px;
    }
    @media (min-width: 1400px) {
      &:not(:last-child) {
        border-bottom: 1px solid #EEEEEE;
        padding-bottom: 24px;
      }
      &:not(:first-child) {
        padding-top: 24px;
        border-top: 1px solid #EEEEEE;
      }
    }
  }
}

.view-task-item {
  &__text {
    padding: 15px 20px;
    background-color: #FBFBFB;
    font-family: "Rubik";
    @media (max-width: 767.98px) {
      padding: 15px;
    }
  }
}
</style>
