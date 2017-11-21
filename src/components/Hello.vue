

<template>
  <div class="hello">
    <h1>{{count}}</h1>
    <h2></h2>
    <div>
        <!--<button @click="addCount">+</button>
        <button @click="reduceCount">-</button>-->
        <input type="text" v-model="number" >
        <button @click="changeStatus(number)">请求</button>
    </div>
    
  </div>
</template>

<script>
import { mapState,mapMutations,mapActions } from 'vuex';
export default {
  name: 'Hello',
  data () {
    return{
      number:0
    }
    
  },
  computed:{
    ...mapState('index', {
        count: state => state.count
    })
  },
  methods:{
    ...mapMutations('index',[
        'addCount',
        'reduceCount'
    ]),
    ...mapActions('index',[
       "changeStatus"
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
