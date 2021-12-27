<template>
  <div class="view-task-collapse">
    <h4 class="view-task-collapse__title">
      <span class="view-task-collapse__title--text">Issues</span>
      <span class="view-task-collapse__title--count">{{ issuesCount }}</span>
    </h4>
    <div class="view-task-collapse__content">
      <el-collapse>
        <el-collapse-item :name="index" :key="index" v-for="(issue,index) in issues" :title="issue.title">
          {{ issue.description }}
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>


<script>
import { tasksController } from '../../tasks.controller'

export default {
  name: "ViewTaskCollapse",
  data() {
    return {
      issues: []
    }
  },
  created() {
    this.getIssues()
  },
  computed: {
    issuesCount() {
      return this.issues.length
    }
  },
  methods: {
    getIssues() {
      tasksController.getIssues()
      .then(issues => {
        this.issues = issues
      })
    }
  }
}
</script>
<style lang="scss">
.view-task-collapse {
  &__title {
    margin: 0px 0px 16px 0px;
    position: relative;
    display: inline-block;
    &--text {
      font-family: "Rubik";
      font-size: 18px;
    }
    &--count {
      position: absolute;
      top: -3px;
      right: -30px;
      border-radius: 50%;
      background-color: #F2301A;
      color: #fff;
      padding: 2px;
      min-height: 24px;
      min-width: 24px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-family: Open Sans, sans-serif;
      font-weight: 600;
    }
  }
}
.el-collapse {
  border: none;
}
.el-collapse-item {
  margin: 0px 0px 16px 0px;
  background-color: #FBFBFB;

  &:last-child {
    margin: 0;
  }
  &__wrap {
    border: none;
    background-color: #FBFBFB;

  }
  &__header {
    border: none;
    background-color: #FBFBFB;
    padding: 16px 20px;
    font-weight: 400;
    font-family: "Rubik";
    font-size: 16px;
    min-height: 48px;
    height: auto;
    line-height: 18px;
    @media (max-width: 767.98px) {
      padding: 15px;
    }
  }
  &__content {
    padding: 0px 20px 16px 20px;
    font-family: "Rubik";
    font-size: 14px;
    line-height: 16px;
  }
  &__arrow {
    svg {
      margin: 0px 0px 0px 10px;
    }

  }
}

</style>

