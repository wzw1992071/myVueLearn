<template>
  <div class="indexPage" >
      <newComponent>
         <div slot="content">
              <p>{{msg1.text2}}</p>
              <p>{{msg1.text3}}</p>
          </div>    
         <h1 slot="header">{{msg1.text1}}</h1>
         
        <h1 slot="footer">{{msg1.text4}}</h1>
      </newComponent>
      <newInput>
         <h1 slot="header">{{msg2.text1}}</h1>
          <div slot="content">
              <p>{{msg2.text2}}</p>
              <p>{{msg2.text3}}</p>
          </div>    
        <h1 slot="footer">{{msg2.text4}}</h1>
      </newInput>
  </div>
</template>

<script>
import Get from 'src/components/Get'
import NewInput from 'src/components/NewInput'
export default {
  name: 'indexPage',
  data () {
    return {
     msg1:{
       text1:"这里第一个页面标题",
       text2:"这是第一个内容1",
       text3:"这是第一个内容2",
       text4:"这里第一个页面底部"
     },
     msg2:{
       text1:"这里第二个页面标题",
       text2:"这是第二个内容1",
       text3:"这是第二个内容2",
       text4:"这里第二个页面底部"
     }

    }
  },
  props: {
    
  },
  components:{
      newComponent:Get,
      newInput:NewInput
  },
  methods: {
     
  },
  mounted(){
    
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