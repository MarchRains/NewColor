<template>
<div id="app" style="overflow: hidden;">
    <!-- <p class="pde" style="height:0.2rem;width: 100%;background:linear-gradient(90deg, #fa3956, #ff6b52);position: fixed;
    z-index:99999;top: 0;" v-if="isid"></p> -->
    <div style="position:absolute;top:0;background:#fff;height:100%;width:100%;">
        <headertop title="签到规则" :leftType="2" />
        <div id="guize"  refs="mainBody" style="overflow-y:scroll;height:100%;background: rgb(255, 255, 255);">
            <img :src="baseurl+result.logo.fileurl" style="width:100%;" alt="">
            <div class="content" v-html="result.details" style=" font-size: 0.14rem !important;text-align: left;width: 96%;margin: 0 auto!important;"></div>
        </div>
    </div>
</div>
</template>

<script>
import headertop from '../../header/header' 
  export default{
    components: {
        headertop,
    },
  data() {
    return {
        result:"",
        baseurl:base.domain,
    }
  },
    destroyed() {
        $(".top").css("z-index","999")
    },
 mounted(){
     this.getapi();
     $(".top").css("z-index","0")
    
 },
 methods:{
     getapi(){
        var activeId=localStorage.getItem('activeId') ;
        
        //console.log(typeof(activeId))
        base.getApi().activityDetail1(activeId).then((res)=>{
            if(res.code == 200) {
                var result = res.data.activity;
            } else {
                $.tips(res.message, 1000);
            };
            this.result = result
            this.$nextTick(()=>{
                if (this.$store.state.isApp) {
                        $(".content").css({"padding-bottom":"0.1rem"})
                    } else {
                        $(".content").css({"padding-bottom":"0rem"})
                }
                document.getElementsByTagName("table")[0].style.width="96%"
            })
            
        })
    //    this.result=base.getApi().activityDetail(activeId);
     }
 },

}
</script>

<style scoped lang='less'>
#guize {
    position: absolute;
    top: 0;
    bottom: 0;
}
table{
    width: 346px !important;
    margin: 0 auto !important;
}

</style>
