
<template>
  <div>
      <h1>set</h1>
      <p>{{obj}}</p>
      <button @click="change">改变</button> 
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "set",
  data() {
    return {};
  },
  mounted() {},
  components: {
  },
  methods: {
    change(){
      this.$store.commit('addObj',{test:100})
    }
  },
  computed:mapState(['obj'])
};
</script>
<style>
div{
  text-align: center;
}
</style>