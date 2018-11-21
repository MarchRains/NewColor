<template>
  <div  style="overflow: hidden;position:absolute;top:0;width:100%;height:100%;background: #f5f5f5;z-index:1000;">
      <Header title="代理说明"></Header>
        <div class="dailione" style="height:100%;overflow:scroll;">
           <div v-if="zhe" style="width: 100%;height: 100%;position: absolute;top: 0;left: 0;z-index: 999999;display:block;background:  rgba(0,0,0,.3);top:0" id="bpp">
        <div class="loading" ></div>
    </div>
            <img style="width: 100%;" :src="url" alt="" :style="{'margin-top':isLiuHai?'0.8rem':'0.5rem'}">
            <div v-html="result" style="font-size:0.156rem;text-align:left;margin:0 0.2rem;line-height:0.32rem;padding-bottom:0.45rem;"></div>
        </div>
  </div>
</template>

<script>
import Header from './../../../header/header'
export default {
  data() {
    return {
        result:"",
        url:"",
        zhe:false
    }
  },
 mounted(){
     var data=base.getApi().ploxyContent(this.$store.state.userid).data
     this.result=data.activityDesc;
     this.url=base.domain+data.logo.fileurl
 },
  computed:{
       isid(){
          return this.$store.state.isid;
        },
      isLiuHai(){
        return this.$store.state.isLiuhai;
      }
    },
 methods:{
    
 },
  components: {
      Header,
  }
}
</script>

<style scoped lang='less'>
 .dailione {
   -webkit-overflow-scrolling:auto;
 }
</style>
