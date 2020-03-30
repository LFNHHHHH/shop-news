<template>
  <div>
    <!-- 顶部滑动区域 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']"
            v-for="item in cates"
            :key="item.id"
          >{{ item.title }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import mui from "../../lib/mui/js/mui.js";

export default {
  data() {
    return {
      cates: []
    };
  },
  created() {
    this.getAllCatgory();
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      // 初始化 MUI 滑动控件
      deceleration: 0.0005
    });
  },
  methods: {
    getAllCatgory() {
      this.$http.get("api/getimgcategory").then(result => {
        if (result.body.status === 0) {
          result.body.message.unshift({
            title: "全部",
            id: 0
          });
          this.cates = result.body.message;
        } else {
          Toast("获取数据失败...");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  touch-action: pan-y;
}
</style>