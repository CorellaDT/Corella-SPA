<template>
  <div class="base-wrapper"
       :style="styles"
       @dragover.prevent="dragOver"
       @drop.prevent="dropFile"
       @mouseleave="dragLeave">
    <div class="base-wrapper__sidebar"
         :class="sidebarClasses"
         :style="sidebarStyles">
      <transition name="el-fade-in-linear" mode="out-in">
        <div v-if="isDrawer"
             class="base-wrapper__drawer-overlay"
             @click="closeDrawer"/>
      </transition>
      <base-sidebar/>
    </div>
    <div class="base-wrapper__content"
         :style="contentStyles">
      <div class="base-wrapper__header">
        <base-header/>
      </div>
      <div class="base-wrapper__view">

        <transition name="el-fade-in-linear" mode="out-in">
          <div v-show="drag"
               class="base-wrapper__drag-and-drop">
            <div class="base-wrapper__drag-and-drop--content">
              <img src="@/assets/images/icons/common/icon-file.svg" alt="">
              <span>Drag and drop the file here</span>
            </div>
          </div>
        </transition>

        <router-view v-slot="{ Component }">
          <transition name="el-fade-in-linear" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import BaseHeader from "@/app/common/baseWrapper/baseHeader/BaseHeader";
import BaseSidebar from "@/app/common/baseWrapper/baseSidebar/BaseSidebar";
import sidebarCollapse from "@/app/common/baseWrapper/baseSidebar/sidebar-mixin";
import {baseWrapperConfig} from "@/app/common/baseWrapper/base-wrapper.config";
import {baseWrapperState} from "@/app/common/baseWrapper/base-wrapper.state";
import {appState} from "@/app/app.state";
import {baseSidebarState} from "@/app/common/baseWrapper/baseSidebar/base-sidebar.state";

export default {
  name: 'base-wrapper',
  components: {
    BaseHeader,
    BaseSidebar
  },
  mixins: [sidebarCollapse],
  computed: {
    sidebarStyles() {
      if (this.windowWidth <= 980) {
        return this.isDrawer ? null : 'pointer-events: none'
      } else {
        return null
      }
    },
    sidebarClasses() {
      if (this.windowWidth <= 980) {
        return 'base-wrapper__sidebar--collapsed'
      } else {
        return { 'base-wrapper__sidebar--collapsed' : this.isCollapse }
      }
    },
    windowWidth() {
      return appState.windowWidth
    },
    contentStyles() {
      if (this.windowWidth <= 980) {
        return { minWidth: '100%' }
      } else {
        return { minWidth : this.isCollapse ? 'calc(100% - 300px)' : 'calc(100% - 80px)' }
      }
    },
    styles() {
      const configForRoute = baseWrapperConfig.get(this.$route.name)
      if (configForRoute) {
        return configForRoute.styles
      } else {
        return baseWrapperConfig.get('default').styles
      }
    }
  },
  data() {
    return {
      drag: false
    }
  },
  methods: {
    closeDrawer() {
      baseSidebarState.isDrawer = false
    },
    dragOver() {
      if (document.querySelector('.upload-files')) {
        this.drag = true
      }
    },
    dragLeave() {
      this.drag = false
    },
    dropFile(event) {
      this.drag = false
      baseWrapperState.dragFiles = event.dataTransfer.files
    }
  }
}
</script>

<style scoped lang="scss">
.base-wrapper {
  display: flex;

  &__sidebar {
    transition: all 350ms linear;
    min-width: 80px;
    height: 100vh;

    @media screen and (max-width: 980px) {
      position: fixed;
      top: 70px;

      height: calc(100vh - 70px);

      z-index: 2;
    }

    &--collapsed {
      min-width: 300px;
    }
  }

  &__drawer-overlay {
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    background: rgba(60, 75, 97, 0.6);
    backdrop-filter: blur(5px);
  }

  &__content {
    transition: all 350ms linear;
    min-height: calc(100vh - 70px);
  }

  &__view {
    position: relative;

    padding: 20px;
    box-sizing: border-box;
    min-height: calc(100vh - 70px);
    @media (max-width: 767.98px) {
      padding: 20px 0px;
    }
  }

  &__drag-and-drop {
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    z-index: 2;

    background: rgba(60, 75, 97, 0.6);
    backdrop-filter: blur(5px);

    display: flex;
    align-items: center;

    &--content {
      width: max-content;
      margin: 0 auto;

      > img {
        margin:  20px auto;
      }

      > span {
        font-family: Rubik, sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 42px;

        display: flex;
        align-items: center;
        text-align: center;

        color: #FFFFFF;
      }

    }

  }

  &__header {
    height: 70px;
  }

}
</style>
