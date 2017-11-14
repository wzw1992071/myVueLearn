<template>
  <div class="indexPage">
    <div id="mapContainerDemo"></div>
  </div>
</template>

<script>
import Get from 'src/components/get'
export default {
  name: 'indexPage',
  data () {
    return {
     

    }
  },
  props: {
    
  },
  components:{
   
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
<style scoped>
 #mapContainerDemo{
   width: 100%; 
   height: 100%; 
   position: relative;
 }
</style>