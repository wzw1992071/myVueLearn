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
    console.log($)
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