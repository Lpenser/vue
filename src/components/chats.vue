

<template>
  <div style=" height: calc(100vh - 60px);">
      chats
      <p>{{$store.state.chats.num}}</p>
      <button @click="add">增加</button>
  </div>
</template>

<script>
// import { mapState } from "vuex";
export default {
  name: "chats",
  data() {
    return {};
  },
  components: {},
  methods: {
    add(){
      this.$store.commit('chats/test');
    }
    
  },
  mounted() {
  },
  computed: {
  }
};
</script>

<style lang="less" scoped>
div {
  padding: 5px 10px;
  text-align: center;
  box-sizing: border-box;
  width: 100%;
}

</style>
