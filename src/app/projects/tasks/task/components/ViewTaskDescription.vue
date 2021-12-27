<template>
  <div class="view-task-description">
    <base-title text="Task Description" />
    <div class="view-task-description__content">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, non!
    </div>
  </div>
</template>

<script>
import BaseTitle from "@/app/common/BaseTitle";
export default {
  name: 'view-task-description',
  components: {BaseTitle},
}
</script>

<style lang="scss" scoped>
.view-task-description {
  display: flex;
  height: 100%;
  flex-direction: column;
  &__content {
    flex: 1 1 auto;
    padding: 16px 20px;
    background-color: #FBFBFB;
    border-radius: 4px;
    @media (max-width: 767.98px) {
      padding: 15px;
    }
  }
  @media (max-width: 1400px) {
    min-height: 250px;
  }
}
</style>