

export default {
   addCount:function(states,rootState){
       states.count+=1
   } ,
   reduceCount:function(states,rootState){
       states.count-=1
   } 
}