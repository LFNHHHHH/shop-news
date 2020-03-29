<template>
  <div>
    <h3>新闻详情----{{ this.id }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  }
};
</script>

<style lang="scss" scoped>
</style>