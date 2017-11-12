<template>
  <div class="echart">
      <!--<div class="echart" id="echartDemo"></div>-->
      <div>{{msg}}</div>
  </div>
</template>

<script>
    import echarts from 'echarts'
    export default{
        name:"Demo",
        data(){
            return {
                msg:"这是页面1"
            }
        }
        // mounted (){
        //     var myChart = echarts.init(document.getElementById('echartDemo'));
        //     myChart.setOption({
        //         title: { text: 'ECharts 入门示例' },
        //         tooltip: {},
        //         xAxis: {
        //             data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        //         },
        //         yAxis: {},
        //         series: [{
        //             name: '销量',
        //             type: 'bar',
        //             data: [5, 20, 36, 10, 10, 20]
        //         }]
        //     });
        // }
    }    
</script>


<style lang="less" scoped>
    #echartDemo{
        width: 600px;
        height: 400px
    }
</style>