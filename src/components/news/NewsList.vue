<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media">
        <a>
          <img
            class="mui-media-object mui-pull-left"
            src="https://www.baidu.com/img/bd_logo1.png?where=super"
          />
          <div class="mui-media-body">
            <h1>标题</h1>
            <p class="mui-ellipsis">
              <span>发表时间：2020：01、01</span>
              <span>点击：0次</span>
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scope>
.mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>