<template>
  <div class="hello">
    <div class="echartDemo" id="myEchart"></div>
    
  </div>
</template>

<script>
import echarts  from  "echarts"
export default {
  name: 'hello',
  data () {
    return {
     
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // // 基于准备好的dom，初始化echarts实例
        // let myChart = echarts.init(document.getElementById('myChart'))
        // // 绘制图表
        // myChart.setOption({
        //     title: { text: '在Vue中使用echarts' },
        //     tooltip: {},
        //     xAxis: {
        //         data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        //     },
        //     yAxis: {},
        //     series: [{
        //         name: '销量',
        //         type: 'bar',
        //         data: [5, 20, 36, 10, 10, 20]
        //     }]
        // });\
        console.log(1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#myEchart{
  width: 500px;
  height: 360px
}
</style>
