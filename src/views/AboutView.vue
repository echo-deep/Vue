<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input id="btn1" type="button" @click="add" value="增加"/>
    <input id="btn2" type="button" @click="cr" value="增加2"/>
    <h2>组件data中的数据：{{count}}</h2>
  </div>
</template>

<script>

  export default{
    data(){
      return{
        count:0,
        dataList:[]
      };
    },
    methods:{
      add(){
        this.count++;
      },
      cr(){
        this.dataList.push(1);
        console.log(this.dataList);
      }

    }
  };

</script>

