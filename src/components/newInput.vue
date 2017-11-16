<template>
  <div >
    <header>
        <slot name="header"></slot>
    </header>
    <main>
        <slot name="content"></slot>
    </main>
    <footer>
        <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
    export default{
        name:"NewInput",
        data(){
           
        }
       
    }    
</script>


<style lang="less" scoped>
  
</style>