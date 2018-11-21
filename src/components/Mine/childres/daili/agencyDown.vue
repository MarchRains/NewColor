<template>
  <div  class="root" style="overflow: hidden;position:absolute;top:0;width:100%;height:100%;background: #f5f5f5;z-index:1000;">
     <div class="">
			 <!-- <div @click="goBack" style="position: absolute;transform: translateY(-50%);color: #fff;">
                      <i class="iconfont icon-mjiantou-copy" style="    font-size: .24rem;position: absolute;line-height: 45px;margin-left: 12px;"></i>
             </div>
			<h3 style="margin-left: 82px;">用户管理</h3>
			<div class="mycollect" @click="gorouter" >
				+添加用户
			</div> -->
      <img class="filtrate" src="../../../../assets/images/filtrate.png" alt="" :style="{'top':isLiuHai?'0.55rem':'0.15rem'}">
      <Header title="团队管理"  datal="筛选" :goDetal="gorouter"></Header>

		</div>
    <!-- <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite"> -->
    <!-- main -->
    <div class="main" :style="{'margin-top':isLiuHai?'0.8rem':'0.5rem'}">
      <div style="background:#fff;padding:0.05rem 0">
      <div class="users">
        <p>当前用户层级</p>
        <p><span v-for="(item,index) in user" :key="index" @click="xunran" :id='item.id' :name="item.name" class="xunran" >{{item.name}}</span></p>
      </div>
      </div>
      <!-- :style="{'overflow-x':has?'scroll':'hidden'}" -->
    <div class="tabb1" > 
      <div class="tabb">
          <!-- 无数据样式 -->
            <div v-if="!has" class="nodata" style="text-align:center;">
                <div class="nodata-top">
                    <img src="../../../../assets/images/empty.gif" alt="">
                    <h4>暂无团队数据~</h4>
                </div>
            </div>
          <!-- 改样式测试,代替下面 -->
          <div class="tabb2">
            <ul style="font-size:.13rem; height:auto;">
              <li class="lisin headerTitle " style=" width:100%; ">  
                  <p >
                      <span style="border-bottom: 1px solid #f5f5f5;background: white">用户名</span>
                      <span style="margin-left: -5px;border-bottom: 1px solid #f5f5f5;background: white">类型</span>
                      <span style="margin-left: -5px;border-bottom: 1px solid #f5f5f5;background: white">返点</span>
                      <span style="margin-left: -5px;border-bottom: 1px solid #f5f5f5;background: white">下级人数</span>
                      <span style="margin-left: -5px;border-bottom: 1px solid #f5f5f5;background: white">个人投注</span>
                      <span style="margin-left: -5px;border-bottom: 1px solid #f5f5f5;background: white">个人充值</span>
                      <span style="margin-left: -5px;border-bottom: 1px solid #f5f5f5;background: white">个人提款</span>
                      <span style="margin-left: -5px;border-bottom: 1px solid #f5f5f5;background: white">在线状态</span>
                  </p>
              </li>
            </ul>
          </div>
          <!--  -->
          <div class="tabb3">
            <ul v-if="has" ref="tabb" class="gun"  style="font-size:.13rem;" >
              <!-- <li class="lisin headerTitle " style=" width:100%; ">  
                  <p >
                      <span style="border-bottom: 1px solid #f5f5f5;background: white">用户名</span>
                      <span style="margin-left: -5px;border-bottom: 1px solid #f5f5f5;background: white">类型</span>
                      <span style="margin-left: -5px;border-bottom: 1px solid #f5f5f5;background: white">返点</span>
                      <span style="margin-left: -5px;border-bottom: 1px solid #f5f5f5;background: white">下级人数</span>
                      <span style="margin-left: -5px;border-bottom: 1px solid #f5f5f5;background: white">个人投注</span>
                      <span style="margin-left: -5px;border-bottom: 1px solid #f5f5f5;background: white">个人充值</span>
                      <span style="margin-left: -5px;border-bottom: 1px solid #f5f5f5;background: white">个人提款</span>
                      <span style="margin-left: -5px;border-bottom: 1px solid #f5f5f5;background: white">在线状态</span>
                  </p>
              </li> -->
              <!-- padding-bottom: 0.62rem; -->
              <li style="width: 100%;display:flex; flex-direction:column;margin-bottom:40px;overflow-x:scoll;" id="lis">
                <ul  class="lisin" v-for="(item,index) in result" :key="index" >
                  <li  :id="item.id"> 
                    <p  @click="showwed(index);PushValue(item.account)" class="pin"  ref="nextt"  :id="item.id" >
                      <span class="jkhk" style="height: 0.49rem;border-bottom: 1px solid #f5f5f5;">{{item.account}}</span>
                      <span  class="jkhk" style="margin-left: -5px; height: 0.49rem;border-bottom: 1px solid #f5f5f5;">{{item.status}}</span>
                      <span  class="jkhk" style="margin-left: -5px;height: 0.49rem;border-bottom: 1px solid #f5f5f5;">{{item.brokerage}}</span>
                      <span  class="jkhk" style="margin-left: -5px;height: 0.49rem;border-bottom: 1px solid #f5f5f5;">{{item.registerCount}}</span>
                      <span  class="jkhk" style="margin-left: -5px;height: 0.49rem;border-bottom: 1px solid #f5f5f5;">{{item.bettingAmount | toFloor}}</span>
                      <span  class="jkhk" style="margin-left: -5px;height: 0.49rem;border-bottom: 1px solid #f5f5f5;">{{item.rechargeAmount |toFloor}}</span>
                      <span class="jkhk" style="margin-left: -5px;height: 0.49rem;border-bottom: 1px solid #f5f5f5;">{{item.drawAmount |toFloor}}</span>
                      <span class="jkhk" style="margin-left: -5px;border-bottom: 1px solid #f5f5f5;height: 0.49rem;">{{item.onlineStatus==2?'离线':'在线'}}</span>
                    </p>
                    <p class="nextji div2" ref="nextji" :id="item.id" :name="item.account" flag='true'>
                      <span @click="modefly" >
                        <span style="top:0.05rem;">
                          <img  v-if="ifred" style="width:0.22rem;position:absolute;left:2px;" src="../../../../assets/images/iconn1.png" alt="">
                          <img v-if="ifyellow"  style="width:0.25rem;" src="../../../../assets/images/yiconn1.png" alt="">
                          <img v-if="ifblue"  style="width:0.25rem;" src="../../../../assets/images/biconn1.png" alt="">
                          <img v-if="ifgreen"  style="width:0.25rem;" src="../../../../assets/images/giconn1.png" alt="">
                          <img v-if="ifpurple"  style="width:0.25rem;" src="../../../../assets/images/ziconn1.png" alt="">
                        </span> <br>
                        <span style="top:.33rem;" class="colorcss">下级</span>
                      </span><span @click="robate " :id="item.id"  :brokerage="item.brokerage">
                        <span style="top:0.05rem;">
                          <img  v-if="ifred" style="width:0.22rem;position:absolute;left:3px;" src="../../../../assets/images/iconn2.png" alt="">
                          <img v-if="ifyellow"  style="width:0.25rem;" src="../../../../assets/images/yiconn2.png" alt="">
                          <img v-if="ifblue"  style="width:0.25rem;" src="../../../../assets/images/biconn2.png" alt="">
                          <img v-if="ifgreen"  style="width:0.25rem;" src="../../../../assets/images/giconn2.png" alt="">
                          <img v-if="ifpurple"  style="width:0.25rem;" src="../../../../assets/images/ziconn2.png" alt="">
                        </span> <br>
                        <span style="top:.33rem;" class="colorcss">修改</span>
                      </span><span @click="zhuanZhang" >
                        <span style="top:0.05rem;">
                          <img  v-if="ifred" style="width:0.2rem;position:absolute;left:0.02rem;top:-0.02rem;" src="../../../../assets/images/iconn3.png" alt="">
                          <img v-if="ifyellow"  style="width:0.25rem;" src="../../../../assets/images/yiconn3.png" alt="">
                          <img v-if="ifblue"  style="width:0.25rem;" src="../../../../assets/images/biconn3.png" alt="">
                          <img v-if="ifgreen"  style="width:0.25rem;" src="../../../../assets/images/giconn3.png" alt="">
                          <img v-if="ifpurple"  style="width:0.25rem;" src="../../../../assets/images/ziconn3.png" alt="">
                        </span> <br>
                        <span style="top:.33rem;" class="colorcss">注单</span>
                      </span><span @click="baoBiao" >
                        <span style="top:0.05rem;">
                          <img  v-if="ifred" style="width:0.22rem;position:absolute;left:2px;" src="../../../../assets/images/iconn4.png" alt="">
                          <img v-if="ifyellow"  style="width:0.25rem;" src="../../../../assets/images/yiconn4.png" alt="">
                          <img v-if="ifblue"  style="width:0.25rem;" src="../../../../assets/images/biconn4.png" alt="">
                          <img v-if="ifgreen"  style="width:0.25rem;" src="../../../../assets/images/giconn4.png" alt="">
                          <img v-if="ifpurple"  style="width:0.25rem;" src="../../../../assets/images/ziconn4.png" alt="">
                        </span> <br>
                        <span style="top:.33rem;" class="colorcss">账变</span>
                      </span>
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
      </div>
    </div>
      
     <div class="ttixingg">
                <ul >
                    <li><span>用户名</span> <span>{{itemcode}}</span></li>
                    <li>
                        <!-- <span>用户状态</span><span>{{status}}</span> -->
                        <span>用户类型</span><span>{{status}}</span>
                      </li>
                      <li> 
                          <span>彩票返点</span>
                          <span style="padding-left:0;background: transparent;text-align: left;wid" class="jinn aaa">{{localRebate}}</span>
                          <!-- <input type="button" :value="localRebate" style="padding-left:0;background: transparent;text-align: left;" class="jinn"> -->
                          <span class="jinn" ><span></span > </span>
                          <div class="robatee"> 
                            <ul>
                                <li class="liings" style="text-align:center;" :id="index" :name="item.rebateValue" @click="slect" v-for="(item,index) in resultt" :key="index">
                                    {{item.rebateText}}
                                </li>
                            </ul>
                        </div>
                      </li>
                    <li><div class="button" @click="sureing" >确定</div></li>

                </ul>
                <div @click="xiaoshi"></div>
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
              v-model="pickerValue">
      </mt-datetime-picker>
             <!-- <p style="text-align: center;
    line-height: 0.4rem;
    font-size: 0.14rem;   color: #999; margin:8.5px 0px; " v-if="ifData">没有更多数据...</p>
          </v-scroll> -->
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
      startDate:new Date().YMD(-1352),
      endDate:new Date().YMD(0),
      pickerValue:"",
      choosetype:1,
      userName:'',
      teamStatus:1,
      ifData: false,
      has:true,
      startX:0,
      startY:0,
    };
  },
  created() {
    this.getapifirst();
  },
    computed:{
       isid(){
          return this.$store.state.isid;
        },
      isLiuHai(){
        return this.$store.state.isLiuhai;
      },
        has(){
          return this.has;
        }
    },
  mounted() {
    // this.startDate = new Date().YMD(0);
      // this.endDate = new Date().YMD(0);
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
      // document.getElementById("lis").style.height=document.getElementsByTagName("body")[0].offsetHeight-45-162-40-
      // document.getElementsByClassName("pde")[0].offsetHeight
      // +"px"
    });
  },
  methods: {

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
    PushValue(item){
      this.userName = item;
      //console.log(this.userName)
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
      this.endDate = new Date().YMD(0);
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
      //  // // console.log("11111111111111111")
      this.choosede = false;
    },
    cledat(){
      this.choosede=!this.choosede
    },
    choosedays(){
      this.choosede=!this.choosede;
    },
    showwed(index){
      // // console.log(index);
      // // console.log(this.firdtcli)
      // // console.log(event.currentTarget.id)
      if( this.firdtcli==event.currentTarget.id){
        var flag= event.currentTarget.parentNode.children[1].getAttribute("flag");
        // // console.log(flag)
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
       this.result = base.getApi().ploxyList(1, this.num, this.userid,ided,  "",this.startDate,this.endDate,'').data;
       var arr=[]
       for(var i=0;i<this.user.length;i++){
         if(this.user[i].id!=event.currentTarget.id){
            arr.push(this.user[i])
         }
         if(this.user[i].id==event.currentTarget.id){
            arr.push(this.user[i]);
              this.user=arr;
              return;
         }
       }
 
    },
    xunran(){
      // // .log(event.currentTarget.id)
      var ide=
       this.result = base.getApi().ploxyList(1, this.num, this.userid,event.currentTarget.id,  "",this.startDate,this.endDate,'').data;
       // console.log( this.result);
       var arr=[]
       for(var i=0;i<this.user.length;i++){
         if(this.user[i].id!=event.currentTarget.id){
            arr.push(this.user[i])
         }
         if(this.user[i].id==event.currentTarget.id){
            arr.push(this.user[i]);
              this.user=arr;
             // console.log(this.user)
              return;
         }
       }
 
    },
    getHeight() {
      
      // this.$refs.tabb.style.height =
      //   document.getElementsByTagName("body")[0].offsetHeight -
      //   45 -
      //   62 -
      //   // 40 -
      //   30 -
      //   50 +
      //   "px";
        
        
    },
    zhuanZhang() {
       localStorage.setItem(
        "agencyDown 2 agencyReport uid",
        event.currentTarget.parentNode.id
      );
      this.$store.state.reportQueryType = 2;
      this.$store.state.Zhusername = this.userName;
      //console.log(this.$store.state.Zhusername);
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
       this.$store.state.bChangeName = this.userName;
      this.$router.push({ path: "/daili/billChange" });
    },
    search() {
      if (this.seraching) {
        var result = base
          .getApi()
          .ploxyList(1, this.num, this.userid, "", this.seraching,this.startDate,this.endDate,'').data;
         this.result = result;
          // // console.log(this.result);
        if (result.length) {
         
        } else {
          $.tips("没有此用户");
        }
      } else {
        // $.tips("请填写要查询的账户");
        // ``;
      }
      if(!this.seraching){
           this.xunran1();
      }
    },
    getapz() {
      this.result = base
        .getApi()
        .ploxyList(1, this.num, this.userid, "", "",this.startDate,this.endDate,'').data;
      // // console.log(this.result.code);
    },
    getapi() {
      if(this.$store.state.teamstartDate){
        this.startDate=this.$store.state.teamstartDate;
      }
      if(this.$store.state.teamendDate){
        this.endDate = this.$store.state.teamendDate;
      }
      // // console.log(this.startDate);
      // // console.log(this.endDate);
      // 当前用户层级数组增加一个
      this.user.push({name:this.user.account,id:this.objid});
      this.result = base
        .getApi()
        .ploxyList(1, this.num, this.userid, "", "",this.startDate,this.endDate,'').data;
    },
    getapised() {
      if ((this.num == this.result, length)) {
        this.num += 10;
        base.getApi().ploxyList1(1, this.num, this.userid, "", "",this.startDate,this.endDate,'').then(()=>{
          this.result = res.data
        });
      } else {
        $.tips("已经加载全部数据");
      }
      //  // console.log(this.startDate);
      // // console.log(this.endDate);
    },
    getapifirst() {
      this.num = 10000;
      if(this.$store.state.teamstartDate){
        this.startDate=this.$store.state.teamstartDate;
      }
      if(this.$store.state.teamendDate){
        this.endDate = this.$store.state.teamendDate;
      }
      if( this.$store.state.teamUserName){
        this.userName = this.$store.state.teamUserName;
      }
      this.teamStatus = this.$store.state.teamStatus;
      // console.log("--------------"+this.teamStatus);
      var user = JSON.parse(localStorage.getItem("currentUser"));
      this.userid = user.id;
      this.token=localStorage.getItem("token");
      this.money=user.balance
      this.objid=this.userid
      this.user.push({name:user.account,id:this.objid});
      // if(this.$store.state.agencydown){
      //  this.result=this.$store.state.agencydown
      // }else{
        if(!this.userName){
          this.userName = "";
        }
        // console.log(this.userid);
        // console.log(this.token);
       base.getApi().ploxyList1(1,this.num,this.userid, "", this.userName,this.startDate,this.endDate,this.teamStatus).then((res)=>{
            this.result = res.data
            // console.log(this.result);
            if(this.result.length!=0){
              this.has = true;
              // $(".tabb").css("width","3.6rem")
            }else{
              this.has = false;
              console.log(111111111);
              
            }
        });
       
        
      //  =this.$store.state.agencydown
      // }
    },
    goBack() {
      this.$router.push({ path: "/components/Mine/Mine" });
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
          // this.getapi();
        this.result = base
        .getApi()
        .ploxyList(1, this.num, this.userid, "", this.$store.state.teamUserName,this.startDate,this.endDate,'').data;
        }
        document.getElementsByClassName("ttixingg")[0].style.display = "none";
      } else {
        $.tips("请填写彩票返点");
      }
    },
    closeing() {
      var nextjis = document.getElementsByClassName("nextji");

      for (var i = 0; i < nextjis.length; i++) {
        // // console.log(i);
        nextjis[i].style.display = "none";
      }
    },
    modefly() {
      this.objid=event.currentTarget.parentNode.id
      var result = base.getApi().ploxyList( 1,this.num,this.userid,event.currentTarget.parentNode.id,"",this.startDate,this.endDate,'').data;
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
            // // console.log(brokerage);
            for (var i = 0; i < liings.length; i++) {
              // // console.log(brokerage > liings[i].getAttribute("name"));
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
    }
  },
  components: {
    Header,
    "v-scroll": Scroll
  }
};
</script>

<style scoped lang='less'>
.choosede{
  font-size: .26rem;
  width:100%;
  position: absolute;
  bottom: 0rem;
  
  ul{
    background: #fff;
    margin-bottom: 0.1rem;
    position: relative;
    z-index: 999;
     li{
       line-height: .8rem;
       border-bottom: 1px solid #f5f5f5;
       box-sizing: border-box;
     }
  }
  >div:nth-child(2){
    position: relative;
    z-index: 999;
    background: #fff;
    line-height: .8rem;
  }
  >div:nth-child(3){
    background: #000;
    opacity: 0.4;
    position: fixed;
    top: 0;
    width:100%;
    height: 100%;
  }
}
.chooseDay{
  font-size: .28rem;
  line-height: .8rem;
  border-bottom: 1px solid #f5f5f5;
  background: #fff;
  margin-bottom: 0.1rem;
  overflow: hidden;
  span{
    float: left;
      
  }
  span:nth-child(1){
    width:31%;
  }
  span:nth-child(2){
    width:8%;
  }
   span:nth-child(3){
    width:31%;
  }
   span:nth-child(4){
    width:30%;
  }
}
#lis{
  // padding-bottom:40px;
  // padding-top: 0.5rem;
  ul{
    
    li{
      >p:nth-child(1){
        span:nth-child(1){
            // width: 30%;
            width: 1rem;//替换上面
            white-space: normal;
            word-break: break-all;
            vertical-align: middle;
        }
        span{
            // width: 23%;
            width: 0.8rem;//替换上面
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
           margin-left: 7%;
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
  height: 0.5rem;
  // position: fixed;
  background: white;
}
.button {
  margin: 0.5rem auto;
  font-size: .18rem;
  color: white;
  line-height: 0.48rem;
  padding: 0 0.23rem;
  border-radius: 10px;
  width: 2.22rem;
  // background: -webkit-gradient(linear, left top, right top, from(#fa3956), to(#ff6b52));
  background: linear-gradient(90deg, #fa3956, #ff6b52);
  text-align: center;
  margin-right: 15%;
}
.robatee {
 width: 100%;
    margin: 0 auto;
    overflow: scroll;
    background: #f5f5f5;
    position: absolute;
    z-index: 10;
    left: 0;
    top: 1.38rem;
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
  font-size: .14rem;
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
      // overflow: hidden;
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
  font-size: .13rem;
  background: #f5f5f5;
  // padding-top: 0.1rem;
  text-align: left;
  .search {
    width: 90%;
    margin: 0 auto;
    overflow: hidden;
    > input {
      float: left;
      outline: none;
    }
    > input:nth-child(1) {
      width: 76%;
      height: 40px;
      // padding: 0.1rem 0;
      // box-sizing: border-box;
      border: 1px solid #f5f5f5;
      text-indent: 2em;
      border-radius: 4px;
    }
    > input:nth-child(2) {
      width: 20%;
      height: .82rem;
      // background: linear-gradient(90deg, #fa3956, #ff6b52);
      border: none;
      outline: none;
      border-radius: 10px;
      color: #fff;
      margin-left: 2%;
    }
  }
  .users {
    width: 90%;
    margin: 0.1rem auto;
    line-height: .3rem;
    > p:nth-child(1) {
      // padding-top: 0.1rem;
    }
    > p:nth-child(2) {
      > span {
        padding: 0.1rem 0.1rem;
        background: #f5f5f5;
        margin-left: 0.1rem;
      }
      > span:nth-child(1) {
        margin-left: 0;
      }
    }
    > p >span:last-child{
      border: 1px solid red;
      border-radius: 10px;
      // display: none;
    }
  }
  .tabb1{
    overflow-x: scroll;
    position: relative;
    height: 100%;
    width: 100%;
    margin-top: 0.05rem;
  }
  .tabb3 {
    height: 92%;
    overflow-y: scroll;
  }
  .gun{
    overflow: hidden;
    padding-bottom: 1.5rem;
  }
  .tabb2{
    height: 8%;
    margin-top: 0rem;
    background: #fff;
    >ul {
      white-space: nowrap;
      white-space: nowrap;
      li {
        line-height: 0.49rem;
        > p {
		  > span:nth-child(1) {
            display: inline-block;
            // width: 30%;
            width: 1rem;//替换上面
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          > span {
            display: inline-block;
            // width: 23%;
            width: 0.8rem;//替换上面
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        > p:nth-child(2) {
          background: #f5f5f5;
          line-height: 0.5rem;
          height: .45rem;
          display: none;
          width: 189%;
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
  .tabb {
    // overflow: scroll;
    background: #fff;
    // width: 100%;
    width: 6.4rem;
    overflow: hidden;
    height:100%;
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
    >div{
    >ul {
      white-space: nowrap;
      white-space: nowrap;
      li {
        line-height: 0.49rem;
        > p {
		  > span:nth-child(1) {
            display: inline-block;
            // width: 30%;
            width: 1rem;//替换上面
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          > span {
            display: inline-block;
            // width: 23%;
            width: 0.8rem;//替换上面
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        > p:nth-child(2) {
          background: #f5f5f5;
          line-height: 0.5rem;
          height: .45rem;
          display: none;
          width: 189%;
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
  font-size:0.12rem;
  color:#5C5C5C !important;
}
.filtrate{
  position:absolute;
  z-index:1998;
  right:0.5rem;
  top:0.32rem;
  width:0.22rem;
}
.gun::-webkit-scrollbar {display:none}

.nodata{
    position: absolute;
    width: 3rem;
    text-align: center;
    left: 50%;
    margin-left: -1.5rem;
    margin-top: 1rem;
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
