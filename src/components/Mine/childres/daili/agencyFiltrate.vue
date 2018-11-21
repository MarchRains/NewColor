<template>
  <div  class="root" style="overflow: hidden;position:absolute;top:0;width:100%;height:100%;background: #fff;z-index:1000;">
     <div class="">
			 <!-- <div @click="goBack" style="position: absolute;transform: translateY(-50%);color: #fff;">
                      <i class="iconfont icon-mjiantou-copy" style="    font-size: .24rem;position: absolute;line-height: 45px;margin-left: 12px;"></i>
             </div>
			<h3 style="margin-left: 82px;">用户管理</h3>
			<div class="mycollect" @click="gorouter" >
				+添加用户
			</div> -->
      <img class="filtrate" src="../../../../assets/images/filtrate.png" alt="">
      <Header title="条件筛选" :goDetal="gorouter"></Header>
      

      <div class="chooseDay" :style="{'margin-top':isLiuHai?'0.8rem':'0.5rem'}">
        <span>注册时间</span>
        <span  @click="openPicker1">{{startDate}}</span>
        <span>至</span>
        <span  @click="openPicker2">{{endDate}} </span>
        <span @click="choosedays">选择日期 <i 
        style="    display: inline-block;
    width: 0.08rem;
    height: 0.08rem;
    border: 1px solid #666;
    border-right: none;
    border-bottom: none;
    transform: rotate(135deg);
    position:absolute;
    top:0.18rem;
    right:0.2rem;
    "
        ></i></span> 
      </div>

		</div>

    <!-- main -->
    <div class="main"  >
      <div style="background:#fff;padding:0.1rem 0">
        <!-- @blur="checkUserName" -->
        <p class="searchr">
          <span style="font-size:0.14rem;margin-right:-0.2rem;">用户名</span>
        <input type="text"  placeholder="请输入用户名" style="font-size:.14rem;" v-model="teamUserName">
        <!-- <input type="button" value="搜索" @click="search"  style="font-size:.28rem;"> -->
      </p>
      <div class="users">
        <p>状态
               <span class="status" @click="all">
                  <img class="imgs" v-if="isAll" src="../../../../assets/images/confirm.png" :style="styleObject" alt="">
                  <img class="imgs" v-if="!isAll" src="../../../../assets/images/238270335586544409.png" alt="">
                  全部
               </span>
               <span class="status" @click="onLine">
                  <img class="imgs" v-if="isOnline" src="../../../../assets/images/confirm.png" :style="styleObject" alt="">
                  <img class="imgs" v-if="!isOnline" src="../../../../assets/images/238270335586544409.png" alt="">
                  在线
               </span>
               <span class="status" @click="offLine">
                  <img class="imgs" v-if="ifOffline" src="../../../../assets/images/confirm.png" :style="styleObject" alt="">
                  <img class="imgs" v-if="!ifOffline" src="../../../../assets/images/238270335586544409.png" alt="">
                  离线
               </span>
               
        </p>
        <p class="search">
          <input type="button" value="查询" @click="search">
        </p>
      </div>
      </div>
    </div>

      <div class="choosede" v-if="choosede">
        <ul>
          <li @click="chooseToday">今天</li>
          <li @click="chooseYestoday">昨天</li>
          <li @click="chooseWeek">一周</li>
          <li @click="halfMound">半月</li>
        </ul>
        <div @click="cancel">取消</div>
        <div @click="cledat"></div>
      </div>
    
      <mt-datetime-picker
              ref="picker"
              type="date"
              @confirm="handleConfirm" 
              :startDate="minDate"
              :endDate="maxDate"
              v-model="pickerValue">
      </mt-datetime-picker>
  </div>
</template>

<script>
import Header from "../../../header/header";
import Scroll from "../../../flash/flased";
import { MessageBox } from 'mint-ui';
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
       styleObject:{
             borderRadius: '50%',
            background:window.bgmapcolor,
           
        },
        maxDate:new Date(),
        minDate:new Date("2018/1/1"),
      ifred:window.ifred,
      ifyellow:window.ifyellow ,
      ifblue:window.ifblue ,
      ifgreen:window.ifgreen,
      ifpurple:window.ifpurple ,
      userid: "",
      num: 100,
      result: "",
      flag: 0,
      user: [],
      resultt: "",
      localRebate: "",
      itemcode: "",
      i: 0,
      itemcode: "",
      status: "",
      robateid: "",
      seraching: "",
      objid:"",
      firdtcli:"",
      secedcli:"",
      token:"",
      money:"",
      choosede:false,
      startDate:"2018-01-01",
      endDate:new Date().YMD(0),
      pickerValue:"",
      choosetype:1,
      isAll:1,
      isOnline:0,
      ifOffline:0,
      isStatus:'',
      teamUserName:''
    };
  },
  created() {
    // this.getapifirst();
  },
  computed:{
       isid(){
          return this.$store.state.isid;
        },
      isLiuHai(){
        return this.$store.state.isLiuhai;
      }
    },
  mounted() {
      if(this.$store.state.teamstartDate){
        this.startDate=this.$store.state.teamstartDate;
      }
      if(this.$store.state.teamendDate){
        this.endDate = this.$store.state.teamendDate;
      }
      if(this.$store.state.teamUserName){
        this.teamUserName = this.$store.state.teamUserName;
      }
      this.isStatus = this.$store.state.teamStatus;
     
      if(this.isStatus == 1){
        this.isAll = 0;
        this.isOnline = 1;
        this.ifOffline=0;
      }else if(this.isStatus == 2){
        this.isAll = 0;
        this.isOnline = 0;
        this.ifOffline=1;
      }else{
        this.isAll = 1;
        this.isOnline = 0;
        this.ifOffline=0;
        
      }
     
        
    var self = this;
    $(".jinn").click(function() {
      self.i++;
      var div = $(".robatee");
      if (self.i % 2 == 1) {
        div.animate({ height: "120px" }, "slow");
      } else {
        div.animate({ height: "0" }, "slow");
      }
    });
    // 给每个li标签绑定点击事件
    this.$nextTick(() => {
      this.getHeight();
      
      document.getElementById("lis").style.height=document.getElementsByTagName("body")[0].offsetHeight-45-162-40-
      document.getElementsByClassName("pde")[0].offsetHeight
      +"px"
    });
  },
  methods: {
    onLine(){
      this.isOnline = 1;
      this.isAll = 0;
      this.ifOffline = 0;
      this.isStatus = 1;
      //在线
    },
    offLine(){
     this.ifOffline = 1;
      this.isOnline = 0;
      this.isAll = 0;
      this.isStatus = 2;
      //离线
      
    },
    all(){
      this.isAll = 1;
      this.isOnline = 0;
      this.ifOffline = 0;
      this.isStatus = '';
      //全部
    },
    openPicker1() {
      
    this.choosetype=1
    this.pickerValue=this.startDate;
    this.$refs.picker.open();
    
  },
    openPicker2() {
      this.choosetype=2
      this.pickerValue=this.endDate ;
      this.$refs.picker.open();
  },
  formatDate(date) {
      const y = date.getFullYear()
      let m = date.getMonth() + 1
      m = m < 10 ? '0' + m : m
      let d = date.getDate()
      d = d < 10 ? ('0' + d) : d
      return y + '-' + m + '-' + d
    },
     handleConfirm(){
      if(this.choosetype==1){
        
        var firtime=new Date(this.formatDate(this.$refs.picker.value)).getTime();
      var now=new Date().getTime();
      var endtime=new Date(this.endDate).getTime();
      if(firtime<=now){
        // alert("ww")
        if(firtime<=endtime){
          this.startDate=this.formatDate(this.$refs.picker.value)
          this.xunran1()
        }else{
          $.tips("开始日期不可大于结束日期")
          return;
        }
        
      }else{
        $.tips("选择日期不可大于当前日期")
        
         return;
      }
      
        this.startDate=this.formatDate(this.$refs.picker.value);
      }else{
         var firtime=new Date(this.startDate).getTime();
        var now=new Date().getTime();
        var endtime=new Date(this.formatDate(this.$refs.picker.value)).getTime();
        if(firtime<=now){
          if(firtime<=endtime){
             this.endDate=this.formatDate(this.$refs.picker.value)
            this.xunran1()
          }else{
            $.tips("结束日期不可小于开始日期")
            return;
          }
          
        }else{
          $.tips("选择日期不可大于当前日期")
          return;
        }
         this.endDate=this.formatDate(this.$refs.picker.value);
      }

      
    },
     chooseToday() {
      this.startDate = new Date().YMD(0);
      this.endDate = new Date().YMD(0);
      this.choosede = false;
      //  请求数据
      this.xunran1();
    },
    chooseYestoday() {
      this.startDate = new Date().YMD(-1);
      this.endDate = new Date().YMD(-1);
      this.choosede = false;
      this.xunran1();
    },
    chooseWeek() {
      this.startDate = new Date().YMD(-6);
      this.endDate = new Date().YMD(0);
      this.choosede = false;
      this.xunran1();
    },
    halfMound() {
      this.startDate = new Date().YMD(-14);
      this.endDate = new Date().YMD(0);
      this.choosede = false;
      this.xunran1();
    },
    //取消函数
    cancel() {
      //  console.log("11111111111111111")
      this.choosede = false;
    },
    cledat(){
      this.choosede=!this.choosede
    },
    choosedays(){
      this.choosede=!this.choosede;
    },
    showwed(){
      //console.log(this.firdtcli)
      //console.log(event.currentTarget.id)
      if( this.firdtcli==event.currentTarget.id){
        var flag= event.currentTarget.parentNode.children[1].getAttribute("flag");
        //console.log(flag)
        if(flag=='true'){
           event.currentTarget.parentNode.children[1].style.display="none";
           event.currentTarget.parentNode.children[1].setAttribute("flag","false")
        }else{
           $(".div2").hide()
           event.currentTarget.parentNode.children[1].style.display="block";
            event.currentTarget.parentNode.children[1].setAttribute("flag","true")
        }
         this.firdtcli=event.currentTarget.id
      }else{
         $(".div2").hide()
           event.currentTarget.parentNode.children[1].style.display="block";
            event.currentTarget.parentNode.children[1].setAttribute("flag","true")
      }
       this.firdtcli=event.currentTarget.id;
    },
    xunran1(){
      var xunran=document.getElementsByClassName("xunran");
     var ided= xunran[xunran.length-1].id
       this.result = base.getApi().ploxyList(1, this.num, this.userid,ided,  "",this.startDate,this.endDate).data;
       //console.log( this.result);
       var arr=[]
       for(var i=0;i<this.user.length;i++){
         if(this.user[i].id!=event.currentTarget.id){
            arr.push(this.user[i])
         }
         if(this.user[i].id==event.currentTarget.id){
            arr.push(this.user[i]);
              this.user=arr;
             //console.log(this.user)
              return;
         }
       }
 
    },
    xunran(){
      // console.log(event.currentTarget.id)
      var ide=
       this.result = base.getApi().ploxyList(1, this.num, this.userid,event.currentTarget.id,  "",this.startDate,this.endDate).data;
       //console.log( this.result);
       var arr=[]
       for(var i=0;i<this.user.length;i++){
         if(this.user[i].id!=event.currentTarget.id){
            arr.push(this.user[i])
         }
         if(this.user[i].id==event.currentTarget.id){
            arr.push(this.user[i]);
              this.user=arr;
             //console.log(this.user)
              return;
         }
       }
 
    },
    getHeight() {
      
      this.$refs.tabb.style.height =
        document.getElementsByTagName("body")[0].offsetHeight -
        45 -
        62 -
        // 40 -
        30 -
        50 +
        "px";
        
        
    },
    zhuanZhang() {
       localStorage.setItem(
        "agencyDown 2 agencyReport uid",
        event.currentTarget.parentNode.id
      );
      this.$store.state.reportQueryType = 2;
      this.$router.push({ path: "/daili/ZhudanLog" });
      // 原转账功能注释
    //  var  uid=event.currentTarget.parentNode.id;
    //  MessageBox.prompt('请输入转账金额').then(({ value, action }) => {
    //       var reg=/^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/;
    //       if( reg.test(value)){
    //          if(value<this.money){
    //               var rul=base.getApi().zhuanZhang(this.userid,uid , value, this.token);
    //               if(rul.code==200){
    //                   this.$store.state.money= base.getApi().getBalace(this.userid).user.balance.toFixed(2);
    //               }
                  
    //           }else{
    //               Toast({
    //                 message: '金额输入不正确或超出',
    //                 duration: 1000
    //               });
    //           }
    //       }else{
    //          Toast({
    //                 message: "金额输入不正确",
    //                 duration: 1000
    //               });
    //       }
         
      
         
    //   })
    //   setTimeout(function(){
    //     $('.mint-msgbox-input input').attr('type',"tel")
    //      $('.mint-msgbox-input input').attr('maxlength',6)
    //       $('.mint-msgbox-input input').attr('pattern',"\d")
    //     //  pattern="\d"
    //     // $('.mint-msgbox-input input').attr('onblur',"value=value.replace(/[^\d\.]/g,'')")
    //   },200)
      
    },
    baoBiao() {
      localStorage.setItem(
        "agencyDown 2 agencyReport uid",
        event.currentTarget.parentNode.id
      );
      this.$store.state.reportQueryType = 2;
      this.$router.push({ path: "/daili/billChange" });
    },
    search() {
       if(/^[a-zA-Z0-9]{4,16}$/.test(this.teamUserName)||this.teamUserName==""){  
      this.$store.state.teamUserName = this.teamUserName;
      this.$store.state.teamstartDate= this.startDate;
      this.$store.state.teamendDate= this.endDate;
      this.$store.state.teamStatus = this.isStatus;
      //console.log("---------------------"+this.$store.state.teamStatus);
      return window.vm.$router.go(-1);
        }else{ 
          $.tips('请输入正确的用户名格式');
          this.teamUserName=null;
          return
        }
    

      // if (this.seraching) {
      //   var result = base
      //     .getApi()
      //     .ploxyList(1, this.num, this.userid, "", this.seraching,this.startDate,this.endDate).data;
      //    this.result = result;
      //     console.log(this.result);
      //   if (result.length) {
         
      //   } else {
      //     $.tips("没有此用户");
      //   }
      // } else {
      //   // $.tips("请填写要查询的账户");
      //   // ``;
      // }
      // if(!this.seraching){
      //      this.xunran1();
      // }
    },
    goBack() {
      this.$router.go(-1);
    },
    gorouter() {
      this.$router.push({ path: "/daili/agencyFiltrate" });
    },
    xiaoshi() {
      document.getElementsByClassName("ttixingg")[0].style.display = "none";
    },
    slect() {
      this.localRebate = event.currentTarget.getAttribute("name");
      this.i++;
      $(".robatee").animate({ height: "0" }, "slow");
    },
    sureing() {
      if (this.localRebate) {
        var datas = base
          .getApi()
          .modifyProxy(
            this.$store.state.userid,
            this.robateid,
            1,
            this.localRebate
          );
        if (datas.code == 200) {
          this.getapi();
        }
        document.getElementsByClassName("ttixingg")[0].style.display = "none";
      } else {
        $.tips("请填写彩票返点");
      }
    },
    closeing() {
      var nextjis = document.getElementsByClassName("nextji");

      for (var i = 0; i < nextjis.length; i++) {
        //console.log(i);
        nextjis[i].style.display = "none";
      }
    },
    modefly() {
      this.objid=event.currentTarget.parentNode.id
      var result = base.getApi().ploxyList( 1,this.num,this.userid,event.currentTarget.parentNode.id,"",this.startDate,this.endDate).data;
      if (result.length) {
        this.result = result;
        var name = event.currentTarget.parentNode.getAttribute("name");
        this.user.push({name:name,id:event.currentTarget.parentNode.id});

           $(".div2").hide()

      } else {
        $.tips("此用户没有下级");
      }
    },
    robate() {
      if(this.user.length==1){
          this.itemcode = event.currentTarget.parentNode.getAttribute("name");
          // this.status=event.currentTarget.parentNode.id;
          var getArr = event.currentTarget.parentNode.parentNode.innerText.split(
            " "
          );
          this.status = getArr[1];
          this.localRebate = getArr[2];
          var brokerage = event.currentTarget.getAttribute("brokerage");
          document.getElementsByClassName("ttixingg")[0].style.display = "block";

          this.resultt = base.getApi().rebateList(this.userid).data;
          this.$nextTick(() => {
            var liings = document.getElementsByClassName("liings");
            //console.log(brokerage);
            for (var i = 0; i < liings.length; i++) {
              //console.log(brokerage > liings[i].getAttribute("name"));
              if (brokerage > liings[i].getAttribute("name")) {
                liings[i].style.display = "none";
              } else {
                liings[i].style.display = "block";
              }
            }
          });

          this.robateid = event.currentTarget.id;
      }else{
        $.tips("不能跨代理操作")
      }
    },
    // checkUserName(){
    //    if(!/^[a-zA-Z0-9]{4,16}$/.test(this.teamUserName)){
    //       $.tips('请输入正确的账户名');
    //       this.teamUserName=null;
    //     }
    // }
  },
  components: {
    Header,
    "v-scroll": Scroll
  }
};
</script>

<style scoped lang='less'>
.jkhk{
  
}
.choosede{
  font-size: .15rem;
  width:100%;
  position: absolute;
  bottom: 0rem;
  // margin-bottom: 0.2rem;
  
  ul{
    background: #fff;
    margin-bottom: 0.05rem;
    position: relative;
    z-index: 10001;
     li{
       line-height: .4rem;
       border-bottom: 1px solid #f5f5f5;
       box-sizing: border-box;
     }
  }
  >div:nth-child(2){
    position: relative;
    z-index: 10001;
    background: #fff;
    line-height: .4rem;
  }
  >div:nth-child(3){
    background: #000;
    opacity: 0.4;
    position: fixed;
    top: 0;
    width: 110%;
    height: 75%;
    z-index: 10000;
  }
}
.chooseDay{
  font-size: .14rem;
  line-height: .44rem;
  // border-bottom: 1px solid #f5f5f5;
  background: #fff;
  overflow: hidden;
  height: 0.44rem;
  position: relative;

  span{
    float: left; 
  }
  span:nth-child(1){
    width: 24%;
  }
  span:nth-child(2){
    width:22%;
    color: #606266;
  }
   span:nth-child(3){
    width:4%;
    color: #606266;
  }
   span:nth-child(4){
    width:22%;
    color: #606266;
  }
    span:nth-child(5){
    float: right;
    margin-right: 0.4rem;
    color: #606266;
  }
}
#lis{
 
  ul{
    li{
      >p:nth-child(1){
        span{
             width: 14.3%;
    white-space: normal;
    word-break: break-all;
    vertical-align: middle;
          }
      }
      >p:nth-child(2){
        span{
         width: 12%;
         height: 40px;
            
          }
        >span:nth-child(1){
           margin-left: 4%;
        }
      }
    }
  }
}
.root {
  background: #ccc;
}
.jinn {
  span {
    border-top: 1px solid #3c3232;
    border-left: 1px solid#3c3232;
    height: 0.1rem;
    display: inline-block;
    transform: rotate(-135deg);
    width: 0.1rem;
  }
}
.headerTitle{
  height: 0.8rem;
  border-bottom: 1px solid rgb(245, 245, 245);
}
.button {
  margin: 1rem auto;
  font-size: .28rem;
  color: white;
  line-height: 0.48rem;
  padding: 0 0.23rem;
  border-radius: 10px;
  width: 2.22rem;
  // background: -webkit-gradient(linear, left top, right top, from(#fa3956), to(#ff6b52));
  background: linear-gradient(90deg, #fa3956, #ff6b52);
  text-align: center;
}
.robatee {
 width: 100%;
    margin: 0 auto;
    overflow: scroll;
    // background: #f5f5f5;
    position: absolute;
    z-index: 10;
    left: 0;
    top: 140px;
    height: 0;
  li {
    line-height: 0.45rem;
    text-align-last: center;
  }
}
.ttixingg {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  display: none;
  font-size: .26rem;
  z-index: 999;
  > div:nth-child(2) {
    width: 100%;
    height: 100%;
    position: absolute;
    background: #000;
    opacity: 0.3;
    top: 0;
  }
  > ul:nth-child(1) {
    position: absolute;
    z-index: 1;
    bottom: 0;
    height: 340px;
    width: 100%;
    background: #fff;

    > li {
      line-height: 0.45rem;
      text-align: left;
      margin-left: 5%;
      border-bottom: 1px solid #f5f5f5;
      overflow: hidden;
      > span:nth-child(1) {
        width: 26%;
        float: left;
      }
      > p {
        float: left;
      }
      .aaa {
        float: left;
        width: 60%;
        height: .6rem;
        // margin-top: 0.05rem;
        border: none;
        outline: none;
      }
    }
  }
}
.main {
  width: 100%;
  height: 100%;
  font-size: .15rem;
  // background: #f5f5f5;
  // padding-top: 0.1rem;
  text-align: left;
  .search{
    margin-top: 0.38rem;
    text-align: center;
    > input{
      width: 100%;
      height: 0.4rem;
      background-color: #fa3956;
      outline: none;
      border:none;
      border-radius: .08rem;
      color: #fff;
      font-size: .16rem;

    }
  }
  .searchr {
    // margin: 0 auto;
    overflow: hidden;
    display: flex;
    justify-content:space-around;
    align-items: center;
    // display: inline-block;
    > input {
      float: right;
      outline: none;
      width: 74%;
      height: 0.4rem;
      // padding: 0.1rem 0;
      // box-sizing: border-box;
      border: 1px solid #f5f5f5;
      text-indent: 0.1rem;
      border-radius: 4px;
    }
    // > input:nth-child(2) {
    //   width: 20%;
    //   height: .82rem;
    //   // background: linear-gradient(90deg, #fa3956, #ff6b52);
    //   border: none;
    //   outline: none;
    //   border-radius: 10px;
    //   color: #fff;
    //   margin-left: 2%;
    // }
  }
  .users {
    width: 90%;
    margin: 0 auto;
    line-height: .6rem;
    > p:nth-child(1) {
      padding-top: 0.09rem;
    }
    > p:nth-child(2) {
      > span {
        padding: 0.2rem 0.2rem;
        background: #f5f5f5;
        margin-left: 0.1rem;
      }
      > span:nth-child(1) {
        margin-left: 0;
      }
    }
  }
  .tabb {
    margin-top: 0.1rem;
    overflow: scroll;
    background: #fff;
    // width: 100%;
    > p {
      white-space: nowrap;
      line-height: .8rem;
      position: relative;
      background: #e8e8e8;
      z-index: 10;
      > span {
        display: inline-block;
        width: 20%;
        text-align: center;
      }
    }
    >ul {
      white-space: nowrap;
      white-space: nowrap;
      li {
        line-height: 0.8rem;
        > p {
          > span {
            display: inline-block;
            width: 20%;
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        > p:nth-child(2) {
          background: #f5f5f5;
          line-height: 0.45rem;
          height: .8rem;
          display: none;
          width: 148%;
          > span {
            width: 17%;
            position: relative;
            > span {
              position: absolute;
              left: 0;
              line-height: 0;
              width: 100%;
            }
          }
        }
      }
    }
  }
}
.wrap_header {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 200;
}
.index_header {
  width: 100%;
  height: 0.45rem;
  display: flex;
  color: #fff;
  margin: 0 auto;
}
.index_header h3 {
  height: 0.45rem;
  line-height: 0.45rem;
  flex: 1;
  text-align: center;
  font-size: .28rem;
}
.index_header .mycollect {
  height: 0.45rem;
  line-height: 0.45rem;
  width: 0.72rem;
  text-align: center;
  font-size: .26rem;
  padding-right: 0.1rem;
}


.colorcss{
  font-size:0.25rem;
}
.filtrate{
  position:absolute;
  // z-index:1998;
  right:40px;
  top:12px;
  width:0.38rem;
}
.status{
        margin-left:0.2rem; 
        color:#666;
        font-size:0.14rem;
        height: 0.8rem;
         img{
            width: 0.28rem;
            vertical-align: middle !important;
            // margin-top: 0.6rem;
            
        }
    }
  .picker.mint-datetime-picker{
    .picker-items {
      height:2rem!important;
      .picker-center-highlight {
        margin-top: 6px;
      }
    }
  }
</style>
