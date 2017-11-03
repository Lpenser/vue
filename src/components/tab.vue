<template>
  <div class="tab">
      <ul>
          <li><router-link to="/home">Go to home</router-link></li>
          <li><router-link to="/list">Go to list</router-link></li>
          <li><router-link to="/set">Go to set</router-link></li>
          <li><router-link to="/chats">Go to chats</router-link></li>
      </ul>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "tab",
  data() {
    return {};
  },
  mounted() {},
  components: {
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.tab{ 
  ul{
  margin: 0;
  padding: 0;

  list-style: none;
  display: flex;
  li{
    flex-grow: 1;
    line-height: 60px;
    text-align: center;
  }
}
}

</style>