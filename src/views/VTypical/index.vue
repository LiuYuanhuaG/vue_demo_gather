<template>
  <v-typical
    class="blink"
    :steps="['Hello', 1000, 'Hello World !', 500, 'Hello World ! 👋', 1000]"
    :loop="Infinity"
    :wrapper="'h2'"
  ></v-typical>

  <a-form
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @finish="onFinish"
  >
    <a-select
      v-model:value="formState.group"
      placeholder="请选择国"
      allow-clear
      :options="countrylist"
      @select="areaSelect"
    />
  </a-form>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import VTypical from "vue-typical";

const onFinish = (e: any) => {
  console.log(e);
};
const formState = reactive({
  group: 2,
});
const pr = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(1);
    }, 3000);
  });
};

const areaSelect = (e) => {
  pr().then((res) => {
    console.log(e, res, 111111111111111);
  });
};
const countrylist = ref([{ value: 2, label: "xxx" }]);
</script>

<style>
.blink::after {
  content: "|";
  animation: blink 1s infinite step-start;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
