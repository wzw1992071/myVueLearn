
import axios from 'src/api/http'
export default {
    changeStatus(context,poo){
        axios({
            methods:"get",
            url:"/login",
            params:{
                id:poo
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