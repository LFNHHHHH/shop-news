<template>
  <div class="mui-numbox" data-numbox-min="1" style="height: 25px">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input
      id="test"
      class="mui-input-numbox"
      type="number"
      :value="initcount"
      @change="countChanged"
      ref="numbox"
      readonly
    />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";

export default {
  methods: {
    countChanged() {
      console.log(this.goodsId + "======" + this.$refs.numbox.value);
      this.$store.commit("updateGoodsInfo", {
        id: this.goodsId,
        count: this.$refs.numbox.value
      });
    }
  },
  mounted() {
    mui(".mui-numbox").numbox();
  },
  props: ["initcount", "goodsId"]
};
</script>

<style lang="scss" scoped>
</style>