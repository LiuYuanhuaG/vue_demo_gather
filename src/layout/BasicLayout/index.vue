<template>
  <a-layout class="basicLayout-wrap">
    <Header />
    <a-layout class="cc_on">
      <SideMenu v-bind="layoutConf" />
      <a-layout class="basicLayout-content">
        <!-- breadcrumb -->
        <Breadcrumb
          v-if="routeMeta.breadcrumb"
          @handleClick="handleBreadcrumb"
        />

        <!-- content -->
        <a-layout-content class="layout-content">
          <!-- divider -->
          <a-divider v-if="routeMeta.breadcrumb" class="line" />
          <!-- router-view -->
          <template v-if="routeMeta.hiddenWrap">
            <!-- <router-view /> -->
            <router-view v-slot="{ Component, route }">
              <transition name="fade-slide" mode="out-in" appear>
                <!-- https://www.jianshu.com/p/399667ec9ef8 -->
                <div :key="route.name">
                  <component :is="Component" />
                </div>
              </transition>
            </router-view>
          </template>
          <a-card class="layout-content-a-card" v-else>
            <!-- <router-view /> -->
            <router-view v-slot="{ Component, route }">
              <transition name="fade-slide" mode="out-in" appear>
                <div :key="route.name">
                  <component :is="Component" />
                </div>
              </transition>
            </router-view>
          </a-card>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script setup lang="ts">
import { Route } from "ant-design-vue/es/breadcrumb/Breadcrumb";
import Header from "./components/Header.vue";
import SideMenu from "./components/SideMenu";
import { clearMenuItem, filterRoutes } from "./utils";
import router from "@/router";
import { reactive, computed } from "vue";

const menuData = filterRoutes(
  clearMenuItem(router.getRoutes()).filter((n) => n.path.startsWith("/"))
);

const layoutConf = reactive({
  theme: "light",
  menuWidth: 208,
  menuData,
});

const routeMeta = computed(() => router.currentRoute.value.meta);

const breadcrumb = computed(
  () =>
    router.currentRoute.value.matched
      .filter((n) => !["/", "/app"].includes(n.path))
      .map((item) => {
        return {
          path: item.path,
          breadcrumbName: item.meta.title || "",
        };
      }) as Route[]
);
const handleBreadcrumb = () => {
  const path = breadcrumb.value?.[breadcrumb.value.length - 2]?.path;
  path && router.push(path);
};
</script>
<style lang="less" scoped>
.cc_on {
  flex-direction: row !important;
}
.basicLayout-wrap {
  overflow: hidden;
  height: 100vh;

  .basicLayout-content {
    overflow-y: auto;
    margin: 0;
    padding: 24px;
    height: calc(100vh - 80px);
    background: "#F0F1F4";

    .layout-content {
      flex: 1;
      // display: flex;
    }

    .layout-content-a-card {
      height: 100%;

      > div {
        height: 100%;
        position: relative;
      }
    }
  }
}
</style>
