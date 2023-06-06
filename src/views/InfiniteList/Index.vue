<template>
  <div class="box_L">
    <!-- <div @click="handleClicks('About')">跳转about</div>
    <div @click="handleClicks('AboutCopy')">跳转AboutCopy</div> -->
    <InfiniteList2 :arr="arr">
      <template #content="{ itemData }">
        <div class="test_con">
          <div>{{ itemData.title }}</div>
          <div>{{ itemData.content }}</div>
        </div>
      </template>
    </InfiniteList2>
  </div>
</template>

<script setup>
import router from "@/router";
import InfiniteList from "./InfiniteList";
import InfiniteList2 from "./InfiniteList";
import { reactive } from "vue";
let arr = reactive([]);
for (let index = 0; index < 100000; index++) {
  arr.push({ id: index, title: "坤坤", content: `坤坤吃了 ${index} /碗` });
}

const handleClicks = (path) => {
  console.log(path);
  router.push(`/about/${path}`);
};
</script>
<style lang="scss">
.box_L {
  height: 100%;
  .test_con {
    display: flex;
    justify-content: space-around;
    > div {
      text-align: center;
    }
  }
}
</style>