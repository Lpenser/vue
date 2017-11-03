

<template>
  <div>
      chats
      <!-- <p>{{num}}</p> -->
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "chats",
  data() {
    return {};
  },
  components:{},
  methods: {
      
  },
  mounted(){
    console.log(this.$store.state.chats.num)
  },
  computed:{
      // ...mapState('chats')
  }
};
</script>



<style lang="less" scoped>

</style>
