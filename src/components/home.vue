
<template>
  <div>
    <h2>home</h2>
    <p>{{count}}</p>
    <button @click="add">增加</button>
    <button @click="less">减少</button>
    <button @click="activeAdd">active增加</button>
    <button @click="activeAsyncAdd">activeAsync增加</button>
    <p>{{test}}</p>
  </div>
</template>

<script>
// 使用 mapState 辅助函数
import { mapState, mapActions } from "vuex";
export default {
  name: "home",
  data() {
    return {
        test:5555
    };
  },
  mounted() {
    //   this.testComputed()
  },
  components: {},
  methods: {
    add() {
      // this.$store.state.count++;
      this.$store.commit("add");
    },
    less() {
      this.$store.commit("less");
      // this.$store.state.count--;
    },
    activeAdd(){
        setTimeout(_=>{
            this.increment();
        },1000)
    },
    activeAsyncAdd(){
        this.actionA()
        .then(data =>{
            console.log(this.count)
        })
    },
    ...mapActions(['increment','actionA'])
  },
  // 映射 this.count 为 store.state.count
  computed: {
    ...mapState(["count"]),
    testComputed(){
        this.test *=10;
    }
  }
};
</script>
<style lang="less" scoped>
div {
  padding: 5px 10px;
  text-align: center;
}
</style>
