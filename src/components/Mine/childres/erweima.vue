<template>
  <div class="erweima" style="position:absolute;top:0;width:100%;height:100%;background: white;z-index:99999;">
    <headertop :title="headername" > </headertop>
    <div class="my-scroll" :style="{'padding-top':isLiuHai?'0.8rem':'0.5rem'}">
      <ul class="weixinerweima">
        <li>充值金额: <span> {{chamount}}元</span></li>
        <li><img  :src="(!!result.logo)?(domain+result.logo.fileurl):''" alt=""></li>
      </ul>
      <div class="buttonn" style="font-size:0.14rem;" @click="goto">已支付,我要提单</div>
      <div class="buzhou">
        <p>扫码步骤</p>
        <p>1:您可以在本页面手动截屏保存到相册,或者用另一部手机扫码</p>
        <p>2:在扫码或截屏手机上打开微信</p>
        <p>3:在扫一扫中点击右上角，选择"从相册选取二维码",选取截屏的图片。</p>
        <p>4:输入您欲充值的金额并进行转账。如充值未到账，请及时联系客服。</p>
      </div>
    </div>
	<!--<transition name="slide">-->
           <router-view></router-view>
		   <!--</transition>-->
  </div>
</template>

<script>
import headertop from '../../header/header'
export default {
    components: {
        headertop,
    },
  data() {
    return {
        result:"",
        chamount:"",
        domain:base.domain
    }
  },
   computed:{
     headername(){
          return this.$store.state.headername;
     },
     isid(){
          return this.$store.state.isid;
        },
        isLiuHai(){
          return this.$store.state.isLiuhai;
        }
 },
 mounted(){
       this.getapi();
       this.$nextTick(()=> {
        var u = navigator.userAgent, app = navigator.appVersion;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
        var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        if (isAndroid) {
          $('.my-scroll').css({
            'height':$(window).height()-$('.pde').height()-40
          })
        }
        if (isIOS) {
          $('.my-scroll').css({
            'height':$(window).height()-$('.pde').height()-40
          })
        }
       })
 },
 methods:{
        getapi(){
           var flash=localStorage.getItem("flash");
            //console.log(flash)
            if(flash==1){
                 var bankid=this.$store.state.bankid;
              var userid=this.$store.state.userid;
              var resultJson = base.getApi().rechargeBankList(userid, bankid);
              if(resultJson.code == 200){
                this.result = resultJson.data.listB;
              }
              if(!!this.result){
                var a= this.result.logo.fileurl;
                this.chamount=this.$store.state.chamount;
                console.log(this.chamount);
                
              }else{
                $.tips("该支付方式存在错误,请选择其他支付方式");
              }
               
            }else{
              this.$router.push({path:"/recharge"})
            }
       
        },
        goto(){
           this.$store.state.goNum+=1;
           this.$router.push({ path: `/eweima/${this.result.id}` })
        }
 }
}
</script>

<style scoped lang='less'>
.my-scroll{
  height: 95%;
  overflow: scroll;
  -webkit-overflow-scrolling:auto;
}
.buzhou{
  padding: 0 0.2rem;
  margin-bottom: 0.5rem;
  p{
    color:red;
    font-size: 0.12rem;
    line-height: 0.2rem;
    text-align: left;
  }
  p:nth-child(1){
    color:black;
    font-size:0.16rem;
    line-height: 0.4rem;
  }
}
   .buttonn{
        margin:0.4rem auto;
        font-size:0.12rem;
        color:white;
        line-height: 0.48rem;
        // padding: 0 0.63rem;
        border-radius: 8px;
        width: 1.5rem;
        background:  linear-gradient(90deg, #fa3956, #ff6b52)
    }
.erweima{
  height:100%;
}
.weixinerweima{
  font-size: 0.16rem;
  text-align: center;
  margin: 0.1rem  0.2rem  0;
  background: white;
 li:nth-child(1){
    line-height: 0.62rem;
    border-bottom: 1px solid #f5f5f5;
    >span{
      color:red;
    }
  }
  li:nth-child(2){
    margin-top:0.2rem;
    padding-bottom: 0.2rem;
    img{
      width: 2.16rem;
    }
    
  }
}
</style>
