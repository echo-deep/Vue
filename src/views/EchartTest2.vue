<template>
  <div>
  <!--为echarts准备一个具备大小的容器dom-->
  <div id="main" style="width: 600px;height: 400px;"></div>
  </div>
</template>

<script>
  import * as echarts from 'echarts'
  //import API from '@/plugins/axiosInstance';
  import axios from 'axios';
  export default {
      name: 'echartsTest2',
      data() {
          return {
            charts: '',
            /* opinionData: ["3", "2", "4", "4", "5"]*/
            opinionData: []
          }
      },
      methods: {
          getData() {
              axios({
                url:'http://localhost:8081/test',
                method:'get'
              }).then(response => {
                  console.log(response.data);
                    this.opinionData =response.data.dataList;
                      this.drawLine('main')
              });
          },
          drawLine(id) {
              this.charts = echarts.init(document.getElementById(id))
              this.charts.setOption({
                  tooltip: {
                      trigger: 'axis'
                  },
                  legend: {
                      data: ['近七日收益']
                  },
                  grid: {
                      left: '3%',
                      right: '4%',
                      bottom: '3%',
                      containLabel: true
                  },

                  toolbox: {
                      feature: {
                          saveAsImage: {}
                      }
                  },
                  xAxis: {
                      type: 'category',
                      boundaryGap: false,
                  data: ["1","2","3","4","5"]

                  },
                  yAxis: {
                      type: 'value'
                  },

                  series: [{
                      name: '近七日收益',
                      type: 'line',
                      stack: '总量',
                      data: this.opinionData
                  }]
              })
          },

      },
      //调用
      mounted() {
          this.getData();
      }
  }
</script>
