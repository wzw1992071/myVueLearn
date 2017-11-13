

<template>
  <div class="hello">
    <h1>{{count}}</h1>
    <h2></h2>
    <div>
        <button @click="addCount">+</button>
        <button @click="reduceCount">-</button>
        <button @click="getData">请求</button>
    </div>
    
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex';
export default {
  name: 'Hello',
  data () {
    return{}
    
  },
  computed:{
    ...mapState('index', {
        count: state => state.count,
     
    })
  },
  methods:{
    ...mapMutations('index',[
        'addCount',
        'reduceCount'
    ]),
    getData(){
      this.$axios({
        methods:"post",
        url:"/index/dswdwf",
        params:{
          id:"dgdgdsg"
        }
      })
      .then(function(res){
        console.log(1)
        console.log(res);
      })
      .catch(function(err){
        console.log(2)
        console.log(err);
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
