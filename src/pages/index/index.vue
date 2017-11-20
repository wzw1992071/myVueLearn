<template>
  <div class="indexPage" >
      <div class="header"></div>
     <div id="mapContainer"></div>
     
  </div>
</template>

<script>
export default {
  name: 'indexPage',
  components:{
      
  },
  data () {
    return {
    
    }
  },
  props: {
    
  },
  
  methods: {
     
  },
  mounted(){
    var options={
          center:new beyond.geometry.MapPoint(121, 30.8),
          zoom:10
      }
    var cmap=new beyond.maps.Map("mapContainer",options,function(){});
  }
  
  
  
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.indexPage{
  height: 100%;
  .header{
    height:12%; 
  }
  #mapContainer{
   width:100%; 
   height:88%; 
   position:relative;
 }
}
 
</style>