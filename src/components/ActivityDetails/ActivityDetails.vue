<template>
    <div  style="position:absolute;top:0;width:100%;height:100%;background: white;z-index:9999;">
        <!-- <div class="header_wrap">
            <div class="header">
               <div @click="goBack" style="position: absolute;transform: translateY(-50%);color: #fff;">
                    <i class="iconfont icon-mjiantou-copy" style="    font-size: .24rem;position: absolute;line-height: 45px;margin-left: 12px;"></i>
               </div>
                <h2>活动详情</h2>
            </div>
        </div> -->
        <!--  -->
           <headertop title="活动详情" > </headertop>
        <div class="ocontent" style="overflow:scroll;" :style="{'margin-top':isLiuHai?'0.8rem':'0.5rem'}">
            <div class="banner" >
                <img :src="userAll+activityAll.logo.fileurl">
            </div>
            <div class="title" v-html="activityAll.details">
                {{activityAll.details}}
            </div>
        </div>
    </div>
</template>

<style scoped>
html {
  font-size: 625%;
}
body {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  overflow-x: hidden;
}
#layout {
  width: 100%;
  height: 100%;
}
.header_wrap {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 200;
}
.header {
  height: 0.45rem;
  position: relative;
}
.header h2 {
  margin: 0 auto;
  height: 0.45rem;
  line-height: 0.45rem;
  text-align: center;
  color: #fff;
  font-weight: 600;
  font-size: 0.18rem;
}
.header .set {
  position: absolute;
  left: 0.18rem;
  transform: translateY(-50%);
  color: #fff;
}
.header .set i {
  font-size: 0.24rem;
}
/* 内容 */
.ocontent {
  width: 100%;
  margin-top: 0.44rem;
}
.cocntent {
  
  text-align: left;
  height: 100%;
  overflow: scroll;
}
.banner {
  width: 100%;
  height: 1.6rem;
  margin: 0 auto;
}
.banner img {
  width: 100%;
}
.banner img {
  height: 1.6rem;
}
.title {
  width: calc(100% - 0.2rem);
  margin: 0.1rem auto;
  background: #fff;
  font-size: 0.12rem;
  text-align: left;
}

.MsoNormalTable {
  width: 50% !important;
}
.title p{
    width: 100%;
}
.title p img {
  width: 100%;
  display: block;
}
</style>
<script>
import headertop from '../header/header'
export default {
  data() {
    return {
      activityAll: [],
      userAll: base.domain,
      isid:false
    };
  },
  updated() {},
  computed:{
       isid(){
          return this.$store.state.isid;
        },
      isLiuHai(){
        return this.$store.state.isLiuhai;
      }
    },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  components:{
    headertop
  },
  watch: {},
  mounted: function() {
    if(this.$store.state.isid){
      this.isid=true;
      console.log(this.isid);
      
    }
   
    if (document.getElementsByClassName("MsoNormalTable")[1]) {
      document.getElementsByClassName("MsoNormalTable")[1].style.width = "96%";
    }
    document.getElementsByClassName("ocontent")[0].style.height =
      document.getElementsByTagName("body")[0].offsetHeight -
      document.getElementsByClassName("headerwrap")[0].offsetHeight +
      "px";
  },
  beforeCreate: function() {},
  created() {
    this.activityAll = base
      .getApi()
      .activityDetail(this.$route.params.activityDetailsId);
  }
};
</script>
