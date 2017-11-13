<template>
  <div class="get">
    <div>这是get组件</div>
    <ul>
     <li v-for="msg in childMsg">
        {{ msg }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Get',
  data () {
    return {
     
    }
  },
  props: ['childMsg']
  
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
