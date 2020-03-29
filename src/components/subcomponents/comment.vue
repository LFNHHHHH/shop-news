<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr />
    <textarea placeholder="请输入要BB的内容（做多吐槽120字）" maxlength="120"></textarea>

    <mt-button type="primary" size="large">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">第31楼&nbsp;&nbsp;用户：放大&nbsp;&nbsp;发表时间：4314321432</div>
        <div class="cmt-body">范德萨放大范德萨防守打法阿萨德发的发送到萨发送</div>
      </div>
      <div class="cmt-item">
        <div class="cmt-title">第31楼&nbsp;&nbsp;用户：放大&nbsp;&nbsp;发表时间：4314321432</div>
        <div class="cmt-body">范德萨放大范德萨防守打法阿萨德发的发送到萨发送</div>
      </div>
      <div class="cmt-item">
        <div class="cmt-title">第31楼&nbsp;&nbsp;用户：放大&nbsp;&nbsp;发表时间：4314321432</div>
        <div class="cmt-body">范德萨放大范德萨防守打法阿萨德发的发送到萨发送</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }

  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>