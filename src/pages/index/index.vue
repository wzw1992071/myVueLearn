<template>
  <div class="indexPage">
    <div>{{info}}</div>
    <lists :child-msg="msg"></lists>
  </div>
</template>

<script>
import Get from 'src/components/get'
export default {
  name: 'indexPage',
  data () {
    return {
        info:"这是首页",
        msg:[1,2,3]

    }
  },
  props: {
      childMsg: ['childMsg'] //这样可以指定传入的类型，如果类型不对，会警告
  },
  components:{
    'lists': Get
  }
  
  
  
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>