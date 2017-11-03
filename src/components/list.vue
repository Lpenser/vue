
<template>
  <div>
    <h2>list</h2>
    <p>{{count}}</p>
    <button @click="add">增加</button>
    <button @click="less">减少</button>
  </div>
</template>

<script>
export default {
  name: "list",
  data() {
    return {};
  },
  mounted() {},
  components: {
  },
  methods: {
    add(){
        // this.$store.state.count++;
        this.$store.commit('add');
      },
      less(){
        // this.$store.state.count--;
        this.$store.commit('less');
      }
  },
  computed: {
      count () {
        return this.$store.state.count
      }
    }
};
</script>
<style lang="less" scoped>
div{
  padding: 5px 10px;
}
</style>