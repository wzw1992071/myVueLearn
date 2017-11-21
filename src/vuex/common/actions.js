

export default {
    changeStatus(context){
       this.$axios({
        methods:"post",
        url:"",
        params:{
          id:"dgdgdsg"
        }
      })
      .then(function(res){
        console.log(res);
      })
      .catch(function(err){
        console.log(2)
        console.log(err);
      });
        context.commit("addCount")
    }
}