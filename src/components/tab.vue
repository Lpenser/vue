<template>
  <div class="tab">
      <ul>
          <li><router-link to="/home">Go to home</router-link></li>
          <li><router-link to="/list/test">Go to list</router-link></li>
          <li><router-link to="/set">Go to set</router-link></li>
          <li><router-link to="/chats">Go to chats</router-link></li>
      </ul>
      <transition :name="animateType">
          <router-view></router-view>
      </transition>
  </div>
</template>

<script>
export default {
  name: "tab",
  data() {
    return {
      animateType:'none',
      isShow:true
    };
  },
  mounted() {},
  components: {
  },
  methods: {},
  watch:{
      // 监听路由变化，执行回调函数
      // para1：新路由对象
      // para2：旧路由对象
      $route:function(to,from){
        var toLevel = to.path.split('/').length
        var fromLevel = from.path.split('/').length
        // 平级
        if(toLevel == fromLevel){
          this.animateType = 'none'
        }else if(toLevel > fromLevel){
            this.animateType = 'in'
        }else{
           this.animateType = 'out'
        }
      }
    }
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

.in-enter-active,.in-leave-active{
  transition: all 1s;
  position: absolute;
}
.in-enter{
  transform: translateX(100%);
}
.in-leave-active{
  transform: translateX(-100%);
}

/*退出的动画*/
.out-enter-active,.out-leave-active{
  transition: all 1s;
  position: absolute;
}
.out-enter{
  transform: translateX(-100%);
}
.out-leave-active{
  transform: translateX(100%);
}

</style>