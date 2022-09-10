<template>
  <div class="parent"></div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Ref",
  data() {
    return {};
  },
  created() {
    const val = ref(100);
    console.log(val.value);
    val.value++;
    console.log(val.value);
  },
};
</script>

<style lang="scss" scoped>
.parent {
  background-color: #2c3e50;
}
</style>
