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
            @tap="getPhotoListByCateId(item.id)"
          >{{ item.title }}</a>
        </div>
      </div>
    </div>

    <!-- 图片列表区域 -->
    <ul>
      <li v-for="item in list" :key="item.id">
        <img v-lazy="item.img_url" />
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import mui from "../../lib/mui/js/mui.js";

export default {
  data() {
    return {
      cates: [],
      list: []
    };
  },
  created() {
    this.getAllCatgory();
    this.getPhotoListByCateId(0);
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      // 初始化 MUI 滑动控件
      deceleration: 0.0005
    });
  },
  methods: {
    getAllCatgory() {
      // 获取所有图片 分类数据
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
    },
    getPhotoListByCateId(cateId) {
      // 根据分类 ID 获取图片数据
      this.$http.get("api/getimages/" + cateId).then(result => {
        if (result.body.status === 0) {
          this.list = result.body.message;
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
img[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>