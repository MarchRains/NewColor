<template>
  <div style="overflow: hidden;position:absolute;top:0;width:100%;height:100%;background: #fff;z-index:1000;    overflow: hidden;">
    <img class="filtrate" src="../../../../assets/images/filtrate.png" alt="" :style="{'top':isLiuHai?'0.55rem':'0.15rem'}">
     <Header id="hearf" title="注单记录" datal="筛选" :goDetal="gorouter">
     </Header>
     <div class="jiis" style="position: fixed; bottom: 0; left: 0; right: 0; height: auto;" :style="{ height: activeheight},{'top':isLiuHai?'.8rem':'.5rem'}">
           <!-- 无数据样式 -->
            <div class="nodata" style="display:blcok">
                <div class="nodata-top">
                    <img src="../../../../assets/images/empty.gif" alt="">
                    <h4>暂无注单记录~</h4>
                </div>
            </div>
       
            <v-scroll v-if="has" :on-refresh="onRefresh" :on-infinite="onInfinite">
         <div class="Guanlitop" style="margin-top:.05rem;z-index:999999">
               <!-- <div v-if="litop.length>1" class="pedss" style="width:100%;margin-top:0.1rem;padding:0 0.2rem;box-sizing:border-box;">
                    <p style="margin-bottom:0.05rem;">当前用户层级</p> 
                   <p style="line-height:0.5rem;width:100%;overflow-x:scroll; margin:3px 0px;"><span  class="soadf colef"  v-for="(item,index) in litop" :key="index" :ked="index" style="    margin-right: 0.1rem;
    padding: 0.05rem 0.1rem;
    
   " @click="choode" :id="item.id" >{{item.name}}</span></p>
                </div> -->
             <div class="peddivo">
                 <ul style="background:#eaeaea;">
                        <li style="  background: #e8f0fa;height:0.44rem;line-height:0.44rem; border-right:1px solid #e8f0fa !important;">用户名</li>
                        <li v-for="(item,index) in list" :key="index" :ked="index" style="height:0.44rem;line-height:0.44rem;" :agentNum="item.memberNum"  :class="{'bgcc':(index%2==0),'gre':(item.agentNum)}" :id="item.id" :name="item.lotteryPlayName">{{item.lotteryPlayName}}</li>
                    </ul>
             </div>
             
             <div class="peddivt">
                  <ul class="ibhjd" style="  background: #e8f0fa;position: relative;z-index: 999;">
                    <li>彩种</li> 
                    <li>玩法</li> 
                    <li>期号</li> 
                    <li>投注内容</li>  
                    <li>投注金额</li>  
                    <li>中奖金额</li>
                    <li>状态</li>   
                    <li>下注时间</li>  
                </ul>
                <ul class="ul2" v-for="(item,index) in list" :key="index">
                    <li  :class="{'bgcc' :(index%2==0) }" >{{item.lotteryLogo}}</li>
                    <li :class="{'bgcc' : index%2==0}">{{item.playDetailName}}</li>
                    <li :class="{'bgcc' : index%2==0}">{{item.lotteryNo}}</li>
                    <li :class="{'bgcc' : index%2==0}">{{item.bettingValue}}</li>
                    <li :class="{'bgcc' : index%2==0}">{{item.amount | toFloor}}</li>
                   <li :class="{'bgcc' : index%2==0}">{{item.winnerAmount |toFloor}}</li>
                    <li :class="{'bgcc' : index%2==0}">{{item.isWinning | getDictValue('userBetting',"is_winning")}}</li> 
                   <li :class="{'bgcc' : index%2==0}">{{item.addTime | dateFmt('YYYY-MM-DD HH:mm:ss')}}</li>
                </ul>
             </div>
              <!-- <p style="text-align:center">没有更多数据...</p> -->
         </div>
          <p style="text-align: center;
    line-height: 0.4rem;
    font-size: 0.14rem;   color: #999; margin:8.5px 0px; " v-if="ifData">没有更多数据...</p>
          </v-scroll>
     </div>
  </div>
</template>

<script>
import Header from "./../../../header/header";
import Scroll from "../../../flash/flash1";
export default {
  data() {
    return {
        //开始 结束时间
      startDate: new Date().YMD(0),
      endDate: new Date().YMD(0),
      list: [],
      pageNumber: 1,
      pageSize: 50,
      activeheight: "100%",
      litop: [],
      ifData: false,
      ifclick: true,
      firstPageSize: 20,
      secondPageSize: 50,
      thirdPageSize: 100,
      fourthPageSize: 300,
      //用户名，彩期，所选彩票号
      userName:"",
      LotteryNum:"",
      LotteryId:'',
      userId:"",
      has:''
    };
  },
  watch: {
    litop(val, oldVal) {
      this.$nextTick(() => {
        var spans = document.getElementsByClassName("soadf");
        for (var i = 0; i < spans.length; i++) {
          spans[i].classList.remove("cole");
        }
        if (spans.length > 0) {
          spans[spans.length - 1].classList.add("cole");
        }
      });
    },
    pageSize(val, oldVal) {
      this.getapiedd(val);
    }
    //    playGame: function (val, oldVal) {
    //   this.$nextTick(()=>{
    //        this.BuyLettery6playSha=document.getElementsByClassName("spanplayChoose");
    //        this.chooseOnespan=document.getElementsByClassName("chooseOnespan");
    //        this.numKai=[]
    //        this.gongYuan=0
    //        this.n1=""
    //        this.n2=""
    //        this.zhuNum=0
    //        this.kuaiSanshed()
    //   })
    // },
  },
  mounted() {
    if(this.$store.state.Zhusername){
      // console.log(111111111111);
      this.userName = this.$store.state.Zhusername;
      let userId = JSON.parse(myStorage.getItem("currentUser")).id;
      this.userId = userId;
      // console.log(userId)
      if (this.$store.state.agencyDownid) {
        this.ide = this.$store.state.agencyDownid;
      } else {
        this.ide = userId;
      }
      if (this.$store.state.agencyDownname) {
        var named = this.$store.state.agencyDownname;
      } else {
        var named = JSON.parse(myStorage.getItem("currentUser")).account;
      }
      this.litop.push({
        name: named,
        id: this.ide
      });
      //console.log(this.userId);
      // console.log(this.LotteryNum);
      // console.log(this.LotteryId);
      var data = base
        .getApi()
        .subUserBettingList(
          userId,
          userId,
          this.startDate,
          this.endDate, 
          this.userName,
          this.LotteryId,
          this.LotteryNum,
          // 'dasdas',
          // '',
          // '',
          this.pageNumber,
          this.pageSize
        ).data;
        console.log(data.list);
         this.list=data.list;
    }
    if(this.$store.state.ZhudanuserName){
      this.getapi();
      //this.$store.state.zhudanSearch = false;
    }
    this.$nextTick(() => {
      this.activeheight =
        document.getElementsByTagName("body")[0].offsetHeight -
        document.getElementById("hearf").offsetHeight +
        "px";
    //   // console.log(
    //     document.getElementsByTagName("body")[0].offsetHeight -
    //       document.getElementById("hearf").offsetHeight -
    //       10 +
    //       "px"
    //   );
     if(this.list ==''){
          this.has = false
          console.log(this.has);
          
          document.getElementsByClassName("nodata")[0].style.display = "block";
        }else{
          this.has = true
          console.log(this.has);
          document.getElementsByClassName("nodata")[0].style.display = "none";
        }
    });

  },
  methods: {
    choode() {
      //  if()
      this.pageNumber = 1;
      this.ifData = false;
      // console.log(99999999999);
      var spans = document.getElementsByClassName("soadf");
      for (var i = 0; i < spans.length; i++) {
        spans[i].classList.remove("cole");
      }
      spans[spans.length - 1].classList.add("cole");
      // console.log(this.litop);
      var ide = event.currentTarget.id;
      this.ide = ide;
      // console.log(ide);
      this.startDate = this.$store.state.startDate;
      this.endDate = this.$store.state.endDate;
      let localUserId = JSON.parse(myStorage.getItem("currentUser")).id;
      var key = Number(event.currentTarget.getAttribute("ked"));
      var data = base
        .getApi()
        .subUserBettingList(
          localUserId,
          "",
          this.startDate,
          this.endDate,
          '',
          '',
          null,
          this.pageNumber,
          this.pageSize
        ).data;
      this.list = data.userList;
    //   console.log(list);
      var num = this.litop.length - 1 - key;
      // console.log(key + 1);
      // console.log(this.litop.length - 1 - key);
      this.litop.splice(key + 1, this.litop.length - 1 - key);

      if (!this.litop.length) {
        let localUserId = JSON.parse(myStorage.getItem("currentUser")).id;
        var named = JSON.parse(myStorage.getItem("currentUser")).account;
        this.litop.push({
          name: named,
          id: localUserId
        });
      }
      // console.log(this.litop);
    },
    onRefresh(done) {
      this.pageNumber = 1;
      this.pageSize = 50;
      let localUserId = JSON.parse(myStorage.getItem("currentUser")).id;
      // console.log(localUserId);
      // console.log(this.ide);
      if(this.$store.state.ZhudanuserName){
        this.getapi();
          $.tips("已经刷新当前数据");
      }
      done();
    },
    onInfinite(done) {
      let more = this.$el.querySelector(".load-more");
      more.style.display = "block";
      this.getapied();
      if (this.list) {
        more.style.display = "none";
      }
      done();
    },
    getapi() {
      if(this.$store.state.ZhudanstartDate){
        this.startDate = this.$store.state.ZhudanstartDate;
      }
      if(this.$store.state.ZhudanendDate){
        this.endDate = this.$store.state.ZhudanendDate;
      }
      if(this.$store.state.ZhudanuserName){
        this.userName = this.$store.state.ZhudanuserName;
      }
      if(this.$store.state.ZhudanLotteryNum){
        this.LotteryNum = this.$store.state.ZhudanLotteryNum;
      }
      if(this.$store.state.ZhudanLotteryId){
        this.LotteryId = this.$store.state.ZhudanLotteryId;
        // console.log(this.LotteryId);
      }
      // console.log(JSON.parse(myStorage.getItem("currentUser")));
      let userId = JSON.parse(myStorage.getItem("currentUser")).id;
      this.userId = userId;
      // console.log(userId)
      if (this.$store.state.agencyDownid) {
        this.ide = this.$store.state.agencyDownid;
      } else {
        this.ide = userId;
      }
      if (this.$store.state.agencyDownname) {
        var named = this.$store.state.agencyDownname;
      } else {
        var named = JSON.parse(myStorage.getItem("currentUser")).account;
      }
      this.litop.push({
        name: named,
        id: this.ide
      });
      //console.log(this.userId);
      //console.log(this.userName);
      // console.log(this.LotteryNum);
      // console.log(this.LotteryId);
      var data = base
        .getApi()
        .subUserBettingList(
          userId,
          userId,
          this.startDate,
          this.endDate,
          this.userName,
          this.LotteryId,
          this.LotteryNum,
          // 'dasdas',
          // '',
          // '',
          this.pageNumber,
          this.pageSize
        ).data;
        // console.log(data.list);
         this.list=data.list;
        // console.log(data);
      // if(data.userList.length){
      //     this.list=data.userList  ;
      // }else{
      //     $.tips("暂时没有详情报表")
      // }
    },
    getapied() {
      if(this.$store.state.ZhudanuserName){
        this.startDate = this.$store.state.ZhudanstartDate;
        this.endDate = this.$store.state.ZhudanendDate;
        this.pageNumber++;
        let localUserId = JSON.parse(myStorage.getItem("currentUser")).id;
        let list = base
          .getApi()
          .subUserBettingList(
            this.userId,
            this.userId,
            this.startDate,
            this.endDate,
            this.userName,
            this.LotteryId,
            this.LotteryNum,
            this.pageNumber,
            this.pageSize
          ).data.list;
          // console.log(list)
        
        if (list.length) {
          // console.log(11111111111111111);
          this.list = this.list.concat(list);
          // console.log(this.list)
        }else {
          this.pageNumber--;
          this.ifData = true;
          $.tips("已经加载全部数据");
        }
      }else{
        $.tips("请先选择筛选条件");
      }
    },
    getapiedd(val) {
      this.startDate = this.$store.state.startDate;
      this.endDate = this.$store.state.endDate;
      this.pageNumber = 1;
      let localUserId = JSON.parse(myStorage.getItem("currentUser")).id;
      var list = base
        .getApi()
        .subUserBettingList(
          this.userId,
          this.userId,
          this.startDate,
          this.endDate,
          this.userName,
          this.LotteryId,
          this.LotteryNum,
          this.pageNumber,
          this.pageSize
        ).data.userList;
      this.list = list;
      this.ifData = false;
      $.tips(`每次加载${val}条数据`);
    },
    gorouter() {
      this.$router.push({ path: "/daili/ZhudanFiltrate" });
    }
  },
  computed:{
       isid(){
          return this.$store.state.isid;
        },
      isLiuHai(){
        return this.$store.state.isLiuhai;
      }
    },
  //清空获取的Vuex
  components: {
    Header,
    "v-scroll": Scroll
  },
};
</script>

<style scoped lang='less'>
.gre {
  color: #26a2ff;
  text-decoration: underline;
}
.colef {
  color: #9e9e9e;
  background: #f7f7f7;
  border: none;
  border-radius: 6px;
}
.cole {
  color: rgb(207, 31, 47) !important;
  border: 1px solid #cf1f2f !important;
  background: transparent !important;
  border-radius: 6px !important;
}
.pedss {
  // padding-left: 0.2rem;
  > span {
    padding: 0.1rem;
    float: left;
  }
  > span:nth-child(1) {
    width: 100%;
  }
}
.ul2 {
  background: #eaeaea;
  // >li:nth-of-type(odd){
  //     background: #fff;
  // }
  // >li:nth-of-type(even){
  //     background: #eaeaea;
  // }
}
.bgcc {
  background: #fff !important;
}

.jiis {
   height: 90%;
  overflow-y: scroll;
  position: relative;
  background-color:#FFF;
  // max-height: 590px;
  //  background: red;
  // border-bottom:2px solid #ddd;
}
.Guanlitop {
  overflow: hidden;
  font-size: 0.15rem;
  > div {
    float: left;
    li {
      border-right: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      box-sizing: border-box;
      text-align: center;
      height:0.88rem;
      line-height:0.88rem;
    }
    li:nth-of-type(odd){
        
    }
  }
  .peddivo {
    width: 35%;
    line-height: 0.7rem;
    //    height: 80px;
  }
  .peddivt {
    width: 65%;
    overflow-x: scroll;
    ul {
      overflow: hidden;
      width: 14.4rem;
      font-size: 0.15rem;

      > li {
        width: 1.5rem;
        float: left;
        line-height: 0.44rem;
        height: 0.44rem;
        text-align: center;
      }
      li:nth-child(2){
        width: 2rem;
      }
      li:nth-child(3){
        width: 1.2rem;
      }
      li:nth-child(4){
        width: 3.7rem;
      }
      li:nth-child(8){
        width: 1.5rem;
      }
      
    }
    ul:nth-of-type(even) {
      background: #fff;
    }
  }
}
.ibhjd {
  > li {
    height: 0.44rem !important;
    line-height: 0.44rem !important;
    border-right: 1px solid #e8f0fa !important;
  }
}

.pageBottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 36px;
  line-height: 36px;
  font-size: 0.32rem;
  display: flex;
  align-items: center;
}
.pageBottom div {
  flex: 1;
  box-sizing: border-box;
  border-right: 1px solid #ddd;
  background-color: #f5f5f5;
  z-index: 2222;
}
.pageBottom div:last-child {
  border-right: none;
}
.filtrate {
   position:absolute;
  z-index:1998;
  right:0.5rem;
  width:0.22rem;
}
.nodata {
  display: none;
}
.nodata-top {
  width: 48%;
  margin: 2rem auto;
}
.nodata-top img {
  width: 1.4rem;
}
.nodata-top h4 {
  height: 0.312rem;
  line-height: 0.312rem;
  text-align: center;
  color: #111;
  font-size: 0.16rem;
  font-weight: 400;
}
</style>
