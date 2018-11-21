<template>

  <div id="app" style="overflow: hidden;">
    <!-- <p class="pde" style="height:0.2rem;width: 100%;background:linear-gradient(90deg, #fa3956, #ff6b52);position: fixed;
    z-index:99999;top:0" v-if="isid"></p>  -->
    <!-- <p class="pde" v-if="!isid"></p> -->
    <!-- <p class="pde" style="height:0.5rem;background:linear-gradient(90deg, #fa3956, #ff6b52);position: relative;
    z-index: 999;" v-if="isLiuHai"></p> -->
    <!-- <link rel="stylesheet" href="./assets/source/css/common/color.css"> -->
    <!-- <div class="isgaodu" style="background: linear-gradient(90deg, #fa3956, #ff6b52);height:.45rem"></div> -->
    <!-- <h1>sjdhf</h1> -->
    <!-- <transition name="slide"> -->
        <router-view></router-view>
    <!-- </transition> -->

  <fotter v-show='isShowBack'></fotter>
  </div>
</template>

<script>
import Fotter from "@/components/fotter/fotter";

export default {
  name: "App",
  components: {
    Fotter
  },
  data() {
    return {
      isShowBack: true
    };
  },
  computed:{
       isid(){
          return this.$store.state.isid;
        },
        isLiuHai(){
          return this.$store.state.isLiuhai;
        }
    },
  watch: {
    '$route':'isTab',
    $route: function(newValue, oldValue) {
      this.isShowOrHide(newValue.path);
    }
  },
  
  methods: {
    
    isShowOrHide(path) {
     
      if (
        path == "/home" ||
        path == "/buycolor" ||
        path == "/lottery" ||
        path == "/Buycolornew" ||
        path == "/gouzoushi" ||
        path == "/mine" ||
        path == "/Buycolor"
      ) {
        this.isShowBack = true;
      } else {
        this.isShowBack = false;
      }
    },
    isroutera() {
      
      if (
        this.$route.path == "/home" ||
        this.$route.path == "/buycolor" ||
        this.$route.path == "/lottery" ||
        this.$route.path == "/Buycolornew" ||
        this.$route.path == "/gouzoushi" ||
        this.$route.path == "/mine" ||
        this.$route.path == "/Buycolor"
      ) {
        this.isShowBack = true;
      } else {
        this.isShowBack = false;
      }
      if(this.$route.path == "/bet"){
        $('body').css('overflow','hidden')
      }else{
        // $('body').css('overflow','scroll')
      }
      
    },
    
  },
  mounted: function() {
    // var closeWebSite = JSON.parse(localStorage.getItem("sysConfigMap")).closeWebSite.cvalue;

		// 							if (closeWebSite==9){
									   
		// 							    document.getElementById("app").style.display='none';
    // 							}

        this.isroutera();
       
    
  }
};


  

</script>



<style>

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* background: gainsboro; */
  height: 100%;
  /* position: absolute; */
  /* top: 0; */
  /* z-index: 99; */
}
* {
  margin: 0;
  padding: 0;
}
html {
  font-size: 625%;
  height: 100%;
}
body {
  width: 100%;
  height: 90%;
  overflow-x: hidden;
  background-color: #f5f5f5 !important;
}
.mint-loadmore-top {
  position: relative !important;
}
img {
  vertical-align: top !important;
  
}
/* safara浏览器去掉阴影 */
input {
  -webkit-appearance: none;
}
.isgaodu{
  display: none;
}
.main::-webkit-scrollbar {
	display: none;
}
*::-webkit-scrollbar {
	display: none;
}

.screen {
	background-image: linear-gradient(-40deg,rgba(250,57,86,1) 0%,rgba(255,107,82,1) 100%);
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 999999;
}
.screen div {
	position: fixed;
	z-index: 999999;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
}
.screen span {
	width: 2.82rem;
	height: .26rem;
	background: url("./assets/images/screen.png");
	background-size: 2.82rem auto;
}
</style>
