<template>
 <div id="app" style="overflow: hidden;">
    <!-- <p class="pde" style="height:0.2rem;width: 100%;background:linear-gradient(90deg, #fa3956, #ff6b52);position: fixed;
    z-index:99999;top:0" v-if="isid"></p>  -->
    <!-- 去除fixed滚动 但是会跟随滚动 -->
    <!-- -webkit-transform: translateZ(0); -->
  <div class="tixian"  style="width:100%;height:100%;background:#f5f5f5; position: fixed;top: 0;overflow:scroll;">
       <div id="layout">
       <headertop title="账户提现" :leftType="2" />
       <div class="top">
         <ul class="chode">
           <li> <span style="padding-left:0.1rem;font-size:0.16rem;color:#666;float: left;">提款类型:</span> </li>
          <li @click="typecli" id=1>
            <div>
              <span :class="{speadd:!iftype}" class="spaned"></span>
            </div>
            <p>账户提现</p>
          </li>
           <li @click="typecli" id=2>
            <div>
              <span class="spaned" :class="{speadd:iftype}"></span>
            </div>
            <p>佣金提现</p>
          </li> 
         </ul>
        <div id="drawing_content">
            <div class="bankcard">
                <ul>
                    <li  @click="routergo">
                        <p id="bankNameP">{{bankitem.bankNametype}}</p>
                        <a></a>
                    </li>
                    <li>
                        <p id="bankAccountP">卡号：<span id="bankAccountPin">{{bankitem.bankAccount}}</span></p>
                    </li>
                    <li v-if="iftype">
                        <p id="userBalance">可提取余额：<span>{{balance}}</span><span>元</span>
                        <!-- <span v-if="!iflent" style="padding-left:0.1rem;color:#32bb83;font-size:0.14rem">(含可提取佣金{{commission| tofixed}}元)</span>  -->
                        </p>
                     </li>
                     <!-- v-if="iflent" -->
                     <li v-if="type==1">
                        <p> <span style="color:#32bb83;font-size:0.14rem;">(可提取佣金{{Math.floor(commission * 100) / 100}}元)</span> </p>
                     </li>
                      <li v-if="!iftype">
                        <p id="userBalance">可提取佣金：<span>{{Math.floor(commission * 100) / 100}}</span><span>元</span> </p>
                     </li>
                </ul>
            </div>
            <div class="consume">
              <p class="mala" id="mala" v-if="iftype"><img style="    width: 18px;
    margin-top: 0.05rem;" src="../../assets/images/mm.png" alt=""> <span> 可提取余额减可提现佣金所得金额，提现时有打码量要求;</span></p>
                <h3 v-if="iftype">当前消费</h3>
                <div class="detail touzhubiili" v-if="iftype">
                    <ul>
                        <li>
                            <p id="drawAmountP"><span> 提现需达投注量:</span><span>{{drawAmountP}}</span></p>
                            <p id="bettingAmountP"> <span> 已达投注量:</span><span>{{bettingAmountP}}</span></p>
                        </li>
                        <li>
                            <p><span> 是否可以提款：</span><span id="canDrawSpan">{{canDrawSpan}}</span></p>
                            <p><span> 手续费：</span><span style="color:red;" id="feeSpan">{{localFee}}</span></p>
                        </li>
                    </ul>
                </div>
                <div class="extractmoney">
                    <ul>
                        <li>
                            <p>￥&nbsp;&nbsp;<input  class="fsd" maxlength="10" type="tel" v-model="fsdvalue" pattern="[0-9]*" placeholder="请输入提取金额" id="drawAmountInput" @keyup="judgeNum" style="outline: none;"></p>
                        </li>
                        <li>
                            <p id="tradePwdDiv">交易密码
                            	<input @keyup="jiaodian" class="inpie"   type="tel" placeholder="—" maxlength="1" name="passInput" style="-webkit-text-security:disc">
                            	<input @keyup="jiaodian"  class="inpie"   type="tel" placeholder="—" maxlength="1" name="passInput" style="-webkit-text-security:disc">
                            	<input @keyup="jiaodian"  class="inpie"   type="tel" placeholder="—" maxlength="1" name="passInput" style="-webkit-text-security:disc">
                            	<input @keyup="jiaodian"   class="inpie"  type="tel" placeholder="—" maxlength="1" name="passInput" style="-webkit-text-security:disc">
                            </p>
                        </li>
                        
                    </ul>
                </div>
              <li><p style="text-align:center">忘记交易密码？<span style="color:#6598fd" @click="chonf">马上去重置</span></p></li>
            </div>
        </div>
            <div class="affirm">
                <input type="button" :id="bankitem.id" value="确认转出" @click="clickAffirm">
            </div>
        </div>
    </div>
      <!-- <transition name="slide">
           <router-view></router-view>
        </transition> -->
  </div>
</div>
</template>

<script>
import headertop from "../header/header";
export default {
  components: {
    headertop
  },
  data() {
    return {
      // balance: "",
      drawAmountP: "",
      bettingAmountP: "",
      drawCounterFee: "",
      localFee: 0.00,
      canDrawSpan: "是",
      localCardId: "",
      commission:"",
      type:1,
      iftype:true,
      fsdvalue:"",
      iflent:false,
      bankName:''
    };
  },
  created(){
       this.currentnew();
        var a=0;
        this.localFee = a.toFixed(2);
        if(this.balance.length>8){
          this.iflent=true
        }  
  },
  mounted() {

    if(myStorage.getItem("iftype")=="false"){
      this.iftype=false;
    }else{
      this.iftype=true;
    }
    this.initData();
    
    this.$nextTick(()=>{
      // alert(parseInt(this.bettingAmountP) <parseInt(this.drawAmountP))
       if(parseInt(this.bettingAmountP) < parseInt(this.drawAmountP) || this.balance <=0 ){
               $(".affirm").children("input:first-child").attr("disabled", "disabled");
               $(".inpie").attr("disabled", "disabled");
               $(".fsd").attr("disabled", "disabled");
               $(".affirm").children("input:first-child").css({background: "grey"});
               this.canDrawSpan = "否";
              //  $.tips("所达投注量需要大于需达投注量才能体现");
               return
          }
    })
    this.$store.state.showBank = true;
    this.showBank = this.$store.state.showBank;
    // console.log(this.$store.state.item);
    
  },
  computed: {
    bankitem() {
      //console.log(this.$store.state.item);
      this.$nextTick(()=>{
        var result=this.$store.state.item;
        //console.log(this.$store.state.item.bankAccount)
        var resultt=result.bankAccount.split("")
        for(var i=0;i<resultt.length-4;i++){
            resultt[i]="*";
        }
        resultt=resultt.join("");
        result.bankAccount=resultt;
        if(!this.$store.state.item.bankNametype){
          //console.log(111111111111);
          result.bankNametype = this.bankName;
        }
      })
      
      return this.$store.state.item;
      
    },
    balance(){
      return this.$store.state.money;
    }
  },
  methods: {
    chonf(){
      this.$router.push("/jiaoyimima")
    },
    typecli(){
      // console.log( event.currentTarget.children[0])
      $(".inpie").val("");
      this.fsdvalue=""
      var spaned=document.getElementsByClassName("spaned");
      for(var i=0;i<spaned.length;i++){
        spaned[i].style.display="none"
      }
      this.type= event.currentTarget.id
      event.currentTarget.children[0].children[0].style.display="block";
      if(this.type==2){
        this.title="佣金提现"
          this.iftype=false;
            // if($("#drawAmountInput").val()>this.commission){
            //   $.tips("提款金额不可大于佣金");
            //    $(".affirm").children("input:first-child").attr("disabled", "disabled");
            //    $(".affirm").children("input:first-child").css({background: "grey"});
            //   // this.canDrawSpan = "否";
            //   return;
            // }else{
            //    $(".affirm").children("input:first-child").removeAttr("disabled");
            //   $(".affirm").children("input:first-child").css({background: window.bgmapcolor});
            //   // this.canDrawSpan = "是";
            // }
            if(this.commission<=0.01){
               $(".affirm").children("input:first-child").attr("disabled", "disabled");
               $(".inpie").attr("disabled", "disabled");
               $(".fsd").attr("disabled", "disabled");
               $(".affirm").children("input:first-child").css({background: "grey"});
            }else{
               $(".affirm").children("input:first-child").removeAttr("disabled");
             $(".inpie").removeAttr("disabled");
               $(".fsd").removeAttr("disabled");
              $(".affirm").children("input:first-child").css({background: window.bgmapcolor})
            }
  
      }
      if(this.type==1){
        this.title="账户提现"
        this.iftype=true;
        
            if($("#drawAmountInput").val()>(this.$store.state.money-this.commission)){
              $.tips("当前提现不包含佣金");
               $(".affirm").children("input:first-child").attr("disabled", "disabled");
               $(".affirm").children("input:first-child").css({background: "grey"});
              this.canDrawSpan = "否";
              return;
            }else{
               $(".affirm").children("input:first-child").removeAttr("disabled");
              $(".affirm").children("input:first-child").css({background: window.bgmapcolor});
              this.canDrawSpan = "是";
            }
             if(parseInt(this.bettingAmountP) <parseInt(this.drawAmountP)||(this.balance==0) ){
               $(".affirm").children("input:first-child").attr("disabled", "disabled");
               $(".inpie").attr("disabled", "disabled");
               $(".fsd").attr("disabled", "disabled");
               $(".affirm").children("input:first-child").css({background: "grey"});
               this.canDrawSpan = "否";
              //  $.tips("所达投注量需要大于需达投注量才能体现");
               return
          }
      }

     
    },
    currentnew() {
      var localUser = JSON.parse(myStorage.getItem("currentUser"));
      var currentUser1 = base.getApi().userInfo(localUser.id).data.user;
      myStorage.setItem("currentUser", JSON.stringify(currentUser1));
      var userCardList = currentUser1.userCardList;
      // console.log(userCardList);
      
      
      var banklist = JSON.parse(myStorage.getItem("dictList"))[
        "userCard-bankName"
      ];
      for (var i = 0; i < userCardList.length; i++) {
        for (var j = 0; j < banklist.length; j++) {
          var banknameid = banklist[j].split("-")[0];
          if (userCardList[i].bankName == banknameid) {
            userCardList[i].bankNametype = banklist[j].split("-")[1];
          }
        }
      }
      this.$store.state.currentUser1 = currentUser1;
      //console.log(this.$store.state.currentUser1);
      this.$store.state.money= this.$store.state.currentUser1.balance.toFixed(2);
      var carlist = this.$store.state.currentUser1.userCardList;
      var n = carlist.length;
      if(!this.$store.state.item){        
        this.$store.state.item = carlist[n-1];
      }
     
      this.bankName = carlist[0].bankNametype
       //console.log(this.bankName);
    },

    jiaodian() {
      for (var i = 0; i < $("#tradePwdDiv input").length; i++) {
        if (event.currentTarget.value) {
          if ($("#tradePwdDiv input")[i] == event.currentTarget && i < 3) {
            $("#tradePwdDiv input")[i + 1].focus();
            //console.log("ssss");
          }
        } else {
          if ($("#tradePwdDiv input")[i] == event.currentTarget && i > 0) {
            $("#tradePwdDiv input")[i - 1].focus();
            //console.log("ssss");
          }
        }
      }
    },

    dealBankAccount(account) {
      var localAccount = account;
      if (account.length > 4) {
        account = "";
        for (var i = 0; i < localAccount.length - 4; i++) {
          account += "*";
        }
        account += localAccount.substring(localAccount.length - 4);
        return account;
      } else return account;
    },
    initData() {
      
     



      var localUser = JSON.parse(myStorage.getItem("currentUser"));
      var result = base.getApi().consumption(localUser.id);
      console.log(result);
      if (result) {
        this.drawAmountP = result.drawAmount.toFixed(2);
        this.commission=result.commission
        this.bettingAmountP = result.bettingAmount.toFixed(2);
        this.drawCounterFee = result.drawCounterFee;
        //console.log(this.bettingAmountP)
        //console.log(this.drawAmountP)
        //console.log(parseInt(this.bettingAmountP) <parseInt(this.drawAmountP) )
      }


    },
    judgeNum() {
      // console.log($("#drawAmountInput").val())
      if(this.type==2){
            // if($("#drawAmountInput").val()>this.commission){
            //   $.tips("提款金额不可大于佣金");
            //    $(".affirm").children("input:first-child").attr("disabled", "disabled");
            //    $(".affirm").children("input:first-child").css({background: "grey"});
            //   return;
            // }else{
            //      $(".affirm").children("input:first-child").removeAttr("disabled");
            //   $(".affirm").children("input:first-child").css({background: window.bgmapcolor});
            // }
      }else{
          if(parseInt(this.bettingAmountP) <parseInt(this.drawAmountP) ){
               $(".affirm").children("input:first-child").attr("disabled", "disabled");
               $(".affirm").children("input:first-child").css({background: "grey"});
               this.canDrawSpan = "否";
               $.tips("所达投注量需要大于需达投注量才能体现");
               return
          }
       if($("#drawAmountInput").val()>100000){
          $.tips("最高提款金额10万");
          return
       }
      if ($("#drawAmountInput").val()) {
        var bettingAmount = parseFloat(
          $("#bettingAmountP")
            .children("span:last-child")
            .html()
        );
        var drawAmount = parseFloat(
          $("#drawAmountP")
            .children("span:last-child")
            .html()
        );
        if (
          bettingAmount - drawAmount >
          parseFloat($("#drawAmountInput").val())
        ) {
          var a=0;
          this.localFee = a.toFixed(2);
          //console.log(this.localFee);
        } else if (drawAmount > bettingAmount) {
          //console.log("11111111111111");
          //console.log(this.localFee);
          this.localFee = (
            parseFloat($("#drawAmountInput").val()) *
            this.drawCounterFee /
            100
          ).toFixed(2);
          // this.localFee = 111;
        } else {
          //console.log(bettingAmount);
          //console.log(drawAmount);
          //  this.localFee = 222;
          this.localFee = (
            (parseFloat($("#drawAmountInput").val()) -
              (bettingAmount - drawAmount)) *
            this.drawCounterFee /
            100
          ).toFixed(2);
        }
        if ( parseFloat($("#drawAmountInput").val()) > (this.$store.state.money-this.commission)   ) {
          //parseFloat($("#drawAmountInput").val())<10 ||
          $(".affirm")
            .children("input:first-child")
            .attr("disabled", "disabled");
          $(".affirm")
            .children("input:first-child")
            .css({
              background: "grey"
            });
            if(parseFloat($("#drawAmountInput").val()) > this.$store.state.money){
               //console.log(1111111);
              $.tips("余额不足");
            }else{
              $.tips("余额不足-可提取金额不包含佣金");
            }
            
          this.canDrawSpan = "否";
        } else {
          $(".affirm").children("input:first-child").removeAttr("disabled");
          $(".affirm").children("input:first-child").css({background: window.bgmapcolor});
          this.canDrawSpan = "是";
        }
      } else {
        this.canDrawSpan = "否";
        this.localFee = "0.00";
      }
      }


    },
    clickAffirm() {
      //console.log(this.commission);
      var localUser = JSON.parse(myStorage.getItem("currentUser"));
      if (!$("#drawAmountInput").val()) {
        $.tips("请填写提款金额", 1000);
        return;
      } else if (parseFloat($("#drawAmountInput").val()) < 10) {
        $.tips("提现金额至少10元", 1000);
        return;
      }else if(parseFloat($("#drawAmountInput").val()) >this.balance){        
         $.tips("余额不足", 1000);
           return;
      }
      if(parseInt($("#drawAmountInput").val())>100000){
          $.tips("最高提款金额10万");
          return
       }
      var hasPass = true;
      var passStr = "";

      $("input[name='passInput']").each(function(index, obj) {
        if (!$(this).val()) {
          hasPass = false;
        } else passStr += $(this).val();
      });
      if (!hasPass) {
        $.tips("请输入四位交易密码", 1000);
        return;
      }
      if(this.type==1){
        if(parseFloat(this.bettingAmountP)<parseFloat(this.drawAmountP)){
        $.tips("已达投注量要大于需达投注量才能提现")
        return;
      }
      }
      
      for (var i = 0; i < localUser.userCardList.length; i++) {
        //console.log(this.bankAccountP);
        if (localUser.userCardList[i].bankAccount == this.bankAccountP) {
          this.localCardId = localUser.userCardList[i].id;
        }
      }
      //console.log(event.currentTarget.id);
      if(this.type==2){
            if($("#drawAmountInput").val()>this.commission.toFixed(2)){
              $.tips("提款金额不可大于佣金");
              return;
            }
             if(parseFloat(this.fsdvalue) > parseFloat(this.balance)){
               //console.log(this.fsdvalue);
               //console.log(this.balance,'上面大于这进入');
              $.tips("可提取佣金余额不足")
              return
            }
             if(this.fsdvalue<10){
              $.tips("最低提款金额不能少于10元")
               return
            }
            if(this.fsdvalue>100000){
              $.tips("最高提款金额10万元")
               return
            }
      }
      var result = base.getApi().draw(localUser.id,$("#drawAmountInput").val(),1,this.type,event.currentTarget.id,passStr,parseFloat($("#drawAmountInput").val()) + parseFloat(this.localFee), this.localFee);
      // console.log(result);
      if (result && result.code == 200) {
         this.$store.state.money = base.getApi().getBalace(localUser.id).user.balance.toFixed(2);
         //console.log(this.$store.state.money)
        this.$router.push({ path: "/mine" });
        
      }
    },
    routergo() {
      this.$router.push({ path: `/choosebank` });
    }
  },
  beforeDestroy() {
    myStorage.setItem("iftype",this.iftype);
    //console.log(this.commission);
  },
};
</script>

<style scoped lang='less'>
#layout {
  height: 0;
  
}
.speadd{
  display:none;
}
#mala{
  text-indent:0rem !important;
}
.mala{
  overflow: hidden;
  padding-top:0.1rem;
  color: gray;
  line-height: 0.28rem;
      padding-right: 0.1rem;
    padding-left: 0.1rem;

}
.chode{
  width: 100%;
    overflow: hidden;
    background: #fff;
    border-bottom: 1px solid #f5f5f5;
  >li{
    float: left;
    width:30%;
    line-height: 0.5rem;
    >div:nth-child(1){
      float: left;
      width:20px;
      border: 1px solid #b3acac;
      height: 20px;
      border-radius: 50%;
      margin-top:0.12rem;
      position: relative;
      >span{
        position: absolute;
        width:12px;
        height:12px;
        background:#32bb83;
        top:4px;
        left: 4px;
        border-radius: 50%;
      }
    }
    >p{
       float: left;
      }
  }
  
}
.touzhubiili {
  background: #fff;
  width: 100%;
  > ul {
    width: 100%;
    > li {
      width: 100%;
      overflow: hidden;
      > p {
        float: left;
        width: 50%;
        > span:nth-child(1) {
          color: #666;
          line-height: 0.5rem;
        }
      }
    }
  }
}
.top {
  -webkit-overflow-scrolling:auto;
  overflow-y: scroll;
}
.tixian {
  font-size: 0.14rem !important;
  p {
    text-align: left;
    text-indent: 0.1rem !important;
  }
}

/*银行卡信息*/
.drawing_content {
  width: 100%;
  margin-top: 0.45rem;
}

.bankcard ul {
}
.bankcard ul li {
  height: 0.52rem;
  background: #fff;
  position: relative;
  border-bottom: 1px solid #eee;
  // margin-bottom: 0 !important;
}
.bankcard ul li:last-child {
  border: none;
}
.bankcard ul li p {
  line-height: 0.52rem;
  text-indent: 0.45rem;
  font-size: 0.16rem;
  color: #666;
}
.bankcard ul li p span {
  color: #000;
}
.bankcard ul li a {
  display: block;
  width: 0.12rem;
  height: 0.2rem;
  background: url("../../assets/images/right_1_05.png") no-repeat;
  background-size: 100%;
  position: absolute;
  right: 0.2rem;
  top: 50%;
  transform: translateY(-50%);
}
/*消费详情*/
.consume {
  text-indent: 0.45rem;
}
.consume h3 {
  height: 0.4rem;
  line-height: 0.4rem;
  // font-size: 1.6rem;
  color: #111;
  font-weight: 400;
  text-align: left;
  margin-left: -0.4rem;
  background: #f5f5f5;
}

.consume .extractmoney {
  margin-top: 0.16rem;
}
.extractmoney ul {
}
.extractmoney ul li {
  height: 0.52rem;
  background: #fff;
  line-height: 0.52rem;
}
.extractmoney ul li:first-child {
  border-bottom: 1px solid #eee;
}

.extractmoney ul li p {
  // font-size: 1.6rem;
  color: #666;
}
.extractmoney ul li:first-child p {
  color: #000;
}
.extractmoney ul li input {
  border: 0;
  height: 0.3rem;
  color: #000;
  width: 80%;
  font-size:0.16rem;
  background: transparent;
}
.extractmoney ul li:last-child input {
  width: 14%;
  border: 1px solid #ccc;
  border-radius: 3px;
  text-align: center;
  background: #f5f5f5;
}

.affirm {
  width: 70%;
  height: 0.45rem;
  margin: 0.2rem auto;
  margin-bottom: 0.6rem;//测试
}

.affirm input {
  width: 100%;
  height: 100%;
  // background: linear-gradient90deg, #fa3956, #ff6b52;
  line-height: 100%;
  text-align: center;
  border: 0;
  border-radius: 5px;
  color: #fff;
  font-size:0.16rem;
}

/*适配屏幕小于380终端*/

#drawAmountP span {
  /*padding-left:2rem;*/
  box-sizing: border-box;
}
#canDrawSpan {
  /*padding-left:10px;*/
  box-sizing: border-box;
}

</style>
