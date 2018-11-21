<template>
  <div style="overflow: hidden;position:absolute;top:0;width:100%;height:100%;background: #fff;z-index:1000;overflow: hidden;">
      <div class="arrow1" @click="hide" :style="{'top':isLiuHai?'0.55rem':'0.1rem'}">
          <span>{{pageSize}}条/页</span>
          <img v-if="hide1"  class="arrow" src='../../../../assets/images/arrow-up.png' alt="">
          <img v-if="!hide1" class="arrow"  src='../../../../assets/images/arrow.png' alt="">
      </div>
     <Header id="hearf" title="详情报表"></Header>
        <ul v-if="hide1" class="Pager" :style="{'top':isLiuHai?'0.8rem':'0.5rem'}">
             <li @click="pageSize = firstPageSize;hide();rePage();" >{{firstPageSize}}条/页</li>
             <li @click="pageSize = threePageSize;hide();rePage()">{{threePageSize}}条/页</li>
             <li @click="pageSize = secondPageSize;hide();rePage();">{{secondPageSize}}条/页</li>
             <li @click="pageSize = thirdPageSize;hide();rePage();">{{thirdPageSize}}条/页</li>
             <li @click="pageSize = fourthPageSize;hide();rePage();">{{fourthPageSize}}条/页</li>
         </ul>
     <div class="jiis" :style="{'margin-top':isLiuHai?'0.8rem':'0.5rem',height: activeheight}"> 
            <!-- <v-scroll :on-refresh="onRefresh" :on-onInfinite ="onInfinite" ></v-scroll> -->
            <!-- <div v-if="hide1" @click="hide" class="zhe"></div> -->
         <div class="Guanlitop" @click="forHide">
               <div v-if="litop.length>1" class="pedss" style="width:100%;padding:0 0.2rem;padding-top:0.1rem;box-sizing:border-box;">
                    <p style="color:#606060;text-align:left;">当前用户层级</p> 
                   <p class="cover" style="line-height:0.5rem;width:100%;overflow-x:scroll;text-align:left;"><span  class="soadf colef"  v-for="(item,index) in litop" :key="index" :ked="index" style="margin-right: 0.1rem;
    padding: 0.05rem 0.1rem;
   " @click="choode(index)" :id="item.id" >{{item.name}}</span></p>
    <!-- <div v-if="hide1" @click="hide1=false" class="zhe"></div> -->
                </div>
             <div class="peddivo">
                 <ul style="background:#eaeaea;">
                        <li style="  background: #e8f0fa;height:0.44rem;line-height:0.44rem; border-right:1px solid #e8f0fa !important;">账户</li>
                        <li style="height:0.44rem;">{{self.account}}</li>
                        <li @click="dEtal" v-for="(item,index) in list" :key="index" :ked="index" style="height:0.44rem;" :agentNum="item.memberNum"  :class="{'bgcc':(index%2==0),'gre':(item.memberNum)}" :id="item.id" :name="item.account">{{item.account}}</li>
                    </ul>
             </div>
             <div class="peddivt">
                  <ul class="ibhjd" style="  background: #e8f0fa;position: relative;">
                    <li>真实姓名</li> 
                    <li>总充值</li> 
                    <li>总提现</li> 
                    <li>团队余额</li>  
                    <li>总下注</li> 
                    <li>首充人数</li>
                    <li>充值次数</li>  
                    <li>提现次数</li>   
                    <li>总投注笔数</li>  
                    <li>投注返利</li>  
                    <li>中奖金额</li>  
                    <li>代理佣金</li>   
                    <li>团队返点</li>   
                    <li>团队盈亏</li> 
                    <li>会员数</li>   
                    <li>代理数</li>  
                    <li>注册时间</li>  
                    <li >最后登录时间</li> 
                </ul>
                <ul class="ul2">
                     <li  :class="{'bgcc' :(index%2==0) }" >{{self.name}}</li>
                    <li :class="{'bgcc' : index%2==0}">{{self.totalRecharge | toFixed}}</li>
                    <li :class="{'bgcc' : index%2==0}">{{self.totalWithdrawals | toFixed}}</li>
                    <li :class="{'bgcc' : index%2==0}">{{self.teamBalance | toFixed}}</li>
                    <li :class="{'bgcc' : index%2==0}">{{self.totalAmountBet | toFixed}}</li>
                    <li :class="{'bgcc' : index%2==0}">{{self.firstRechargeNum}}</li>
                   <li :class="{'bgcc' : index%2==0}">{{self.totalRechargeCount}}</li>
                   <li :class="{'bgcc' : index%2==0}">{{self.totalDrawCount}}</li>
                   <li :class="{'bgcc' : index%2==0}">{{self.totalNumberOfTimes}}</li>
                    <li :class="{'bgcc' : index%2==0}">{{self.saleRebate | toFixed }}</li>
                    <li :class="{'bgcc' : index%2==0}">{{self.winningAmount | toFixed}}</li>
                   <li :class="{'bgcc' : index%2==0}">{{self.agentRebate | toFixed}}</li>
                   <li :class="{'bgcc' : index%2==0}">{{self.teamRebate | toFixed}}</li>
                    <li :class="{'bgcc' : index%2==0}">{{self.teamPAL | toFixed}}</li>
                    <li :class="{'bgcc' : index%2==0}">{{self.memberNum}}</li>
                    <li :class="{'bgcc' : index%2==0}">{{self.agentNum}}</li>
                   <li :class="{'bgcc' : index%2==0}">{{self.addTime| dateFmt('YYYY-MM-DD HH:mm:ss')}}</li>
                    <li :class="{'bgcc' : index%2==0}">{{self.lastTime| dateFmt('YYYY-MM-DD HH:mm:ss')}}</li>
                </ul>
                <ul class="ul2" v-for="(item,index) in list" :key="index">
                    <li  :class="{'bgcc' :(index%2==0) }" >{{item.name}}</li>
                    <li :class="{'bgcc' : index%2==0}">{{item.totalRecharge | toFixed}}</li>
                    <li :class="{'bgcc' : index%2==0}">{{item.totalWithdrawals | toFixed}}</li>
                    <li :class="{'bgcc' : index%2==0}">{{item.teamBalance | toFixed}}</li>
                    <li :class="{'bgcc' : index%2==0}">{{item.totalAmountBet | toFixed}}</li>
                    <li :class="{'bgcc' : index%2==0}">{{item.firstRechargeNum}}</li>
                   <li :class="{'bgcc' : index%2==0}">{{item.totalRechargeCount}}</li>
                   <li :class="{'bgcc' : index%2==0}">{{item.totalDrawCount}}</li>
                   <li :class="{'bgcc' : index%2==0}">{{item.totalNumberOfTimes}}</li>
                    <li :class="{'bgcc' : index%2==0}">{{item.saleRebate | toFixed }}</li>
                    <li :class="{'bgcc' : index%2==0}">{{item.winningAmount | toFixed}}</li>
                   <li :class="{'bgcc' : index%2==0}">{{item.agentRebate | toFixed}}</li>
                   <li :class="{'bgcc' : index%2==0}">{{item.teamRebate | toFixed}}</li>
                    <li :class="{'bgcc' : index%2==0}">{{item.teamPAL | toFixed}}</li>
                    <li :class="{'bgcc' : index%2==0}">{{item.memberNum}}</li>
                    <li :class="{'bgcc' : index%2==0}">{{item.agentNum}}</li>
                   <li :class="{'bgcc' : index%2==0}">{{item.addTime| dateFmt('YYYY-MM-DD HH:mm:ss')}}</li>
                    <li :class="{'bgcc' : index%2==0}">{{item.lastTime| dateFmt('YYYY-MM-DD HH:mm:ss')}}</li>
                </ul>

             </div>
              <!-- <p style="text-align:center">没有更多数据...</p> -->
         </div>
          <p style="text-align: center;
    line-height: 0.4rem;
    font-size: 0.14rem;   color: #999; margin:8.5px 0px; " v-if="ifData">没有更多数据...</p>
          <!-- </v-scroll> -->
        
     </div>
     <div class="pageBottom">
          <div class="page"  v-show="show"> 
            <div class="pagelist"> 
              <span class="arrowOn arrowLeft" @click="pageMinus">
                    <img :class="current_page==1?'arrowLeftImg':''" src="../../../../assets/images/icon_left.png" alt="">  
                </span> 
              <!-- <span v-show="current_page>5" class="jump" @click="jumpPage(1)">1</span>  -->
              <span></span>
              <span class="jump" style="color:#fa3956;font-size:0.14rem;font-weight:600;" v-for="num in pages" :class="{bgprimary:current_page==num}" @click="jumpPage(num)">{{num}}</span> 
              <span class="arrowOn arrowRight" @click="pagePlus">
                  <img :class="current_page>=pages?'arrowLeftImg':''" src="../../../../assets/images/icon_right.png" alt="">
                </span> 
              <span class="jumppoint">跳至 </span> 
              <span class="jumpinp"><input type="tel" pattern="d*" v-model="changePage"> 页</span> 
              <span class="jump gobtn" @click="jumpPage(changePage);">确认</span> 
            </div> 
          </div>
     </div>
          <div v-if="zhe" @click="zhezhao" style="width: 100%;height: 100%;position: absolute;top: 0;left: 0;z-index: 7;display:block;background:  rgba(0,0,0,.3);top:0" id="bpp">
        <div v-show="gai" class="loading" ></div>
</div>
  </div>
</template>

<script> 
import Header from "./../../../header/header";
import Scroll from "../../../flash/flash1";
import { Indicator } from 'mint-ui';
// import { Loading } from 'vux';

export default {
  data() {
    return {
        startDate:"",
        endDate:"",
        list:[],
        pageSize:20,
        activeheight:'100%',
        litop:[],
        ifData:false,
        ifclick:true,
        firstPageSize:20,
        threePageSize:30,
        secondPageSize:50,
        thirdPageSize:100,
        fourthPageSize:300,
        hide1:false,
        changePage:'',//跳转页
        current_page:1, //当前页
        totalPage:1,
        pages:3,
        condition:false,
        self:[],
        zhe:false,
        gai:false
    }
  },
  computed:{ 
      isid(){
          return this.$store.state.isid;
        },
      isLiuHai(){
        return this.$store.state.isLiuhai;
      },
     show:function(){ 
        //  this.totalPage = this.list.total;
        //  this.pages = this.totalPage/this.pageSize;
         return this.pages
     }, 
     indexs() { 
         var left = 1, 
         right = this.pages, 
         ar = []; 
       if (this.pages >= 4) { 
         if (this.current_page > 3 && this.current_page < this.pages - 1) { 
           left = Number(this.current_page) - 1; 
           right = Number(this.current_page) + 1; 
         } else { 
           if (this.current_page <= 3) { 
             left = 1; 
             right = 3; 
           } else { 
             right = this.pages; 
             left = this.pages - 2; 
           } 
         } 
       } 
       while (left <= right) { 
         ar.push(left); 
         left++; 
       } 
       return ar; 
     }, 
   }, 
  watch: {
      litop(val, oldVal){
          this.$nextTick(()=>{
               var spans=document.getElementsByClassName("soadf");

                for(var i=0;i<spans.length;i++){
                spans[i].classList.remove("cole")
                }
                if (spans.length>0){
                    spans[ spans.length-1].classList.add("cole")
                }
          })
          
      },
      pageSize(val, oldVal){
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
 mounted(){
    this.getapi();
    this.$nextTick(()=>{
     this.activeheight=  document.getElementsByTagName("body")[0].offsetHeight-document.getElementById("hearf").offsetHeight-10+"px";
     //console.log(document.getElementsByTagName("body")[0].offsetHeight-document.getElementById("hearf").offsetHeight-10+"px")
    })
    
 },
 methods:{
     zhezhao(){
         this.hide1 = false;
         this.zhe = false;
     },
     choode(key){
        //  if()
        this.current_page = 1;
        this.ifData = false;
        // console.log(99999999999)
        // console.log(document.querySelector('.soadf'));
        var spans = document.getElementsByClassName('soadf');
        // var sapns = document.querySelector('.soadf')
        //console.log(spans);
         for(var i=0;i<spans.length;i++){
             spans[i].classList.remove("cole")
         }
        //   spans.classList.add("cole")
        //  console.log(this.litop)
           var ide= event.currentTarget.id;
           this.ide=ide;
        //    console.log(ide)
                    this.startDate=this.$store.state.startDate;
                    this.startDate=this.$store.state.startDate;
                    this.endDate=this.$store.state.endDate;
                    this.current_page;
                    let localUserId = JSON.parse(myStorage.getItem("currentUser")).id;
                    var data=base.getApi().reportQuerylist(localUserId,this.ide,this.startDate,this.endDate,this.current_page,this.pageSize);
                    //console.log(data);
                    this.self = data.data.self;
                    if(data.code == 200){
                        this.totalPage = data.data.total;
                        this.list=data.data.list;
                        //  console.log(list.total)
                        this.pages = (this.totalPage==0)?1:(Math.ceil(this.totalPage/this.pageSize));
                    }else{
                        $.tips(data.message)
                        return null;
                    }
                     
                     //console.log(this.list);
                     
                     var num= this.litop.length-1-key
                    //    console.log( key+1)
                    //    console.log(this.litop.length-1-key)
                      this.litop.splice(key+1, this.litop.length-1-key)
                    
                   if(!this.litop.length){
                        let localUserId = JSON.parse(myStorage.getItem("currentUser")).id;
                    var named=JSON.parse(myStorage.getItem("currentUser")).account
                     this.litop.push(
                        {
                            name:named,
                            id:localUserId
                        }
                    )
                   }
                //    console.log(this.litop)
     },

     //点击一下
     dEtal(){
        //  alert(event.currentTarget.getAttribute("agentNum");
        this.changePage = '';
        if(this.ifclick){
            this.ifclick=false;
            // this.ifData=false;
         if(Number(event.currentTarget.getAttribute("agentNum")) ){
                     var ide= event.currentTarget.id;
                    this.ide=ide;
                    var named= event.currentTarget.getAttribute("name")
                    this.litop.push(
                        {
                            name:named,
                            id:ide
                        }
                    )
                    this.startDate=this.$store.state.startDate;
                    this.endDate=this.$store.state.endDate;
                    this.current_page;
                    let localUserId = JSON.parse(myStorage.getItem("currentUser")).id;
                    var data=base.getApi().reportQuerylist( localUserId,this.ide,this.startDate,this.endDate,this.current_page,this.pageSize);
                    //console.log(data.data);
                    this.self = data.data.self;
                     if(data.code == 200){
                        this.totalPage = data.data.total;
                        this.pages = (this.totalPage==0)?1:(Math.ceil(this.totalPage/this.pageSize));
                        this.list=data.data.list;
                    }else{
                        $.tips(data.message)
                        return null;
                    }
                    
                    // if(!this.list.length){
                    //     $.tips("没有下级用户")
                    // }else{

                    // }
                     setTimeout(() => {
                          $(".cover").scrollLeft(500);
                     }, 50);
            }
        }
        setTimeout(() => {
             this.ifclick=true;
        }, 1000);     
     },
            //    onRefresh(done) {
            //         this.current_page=1;
            //         this.pageSize=20;
            //           let localUserId = JSON.parse(myStorage.getItem("currentUser")).id;
            //         //   console.log(localUserId)
            //         //   console.log(this.ide)
            //          var data=base.getApi().reportQuerylist( localUserId,this.ide,this.startDate,this.endDate,this.current_page,this.pageSize).data;
            //             if(this.list){
            //                 $.tips("已经刷新当前数据")
            //              }
            //         done(); 
            //     },
            //     onInfinite(done) {
            //           let more = this.$el.querySelector(".load-more");
            //           more.style.display='block'
            //          this.getapied()
                    
            //                 if(this.list){
            //                 more.style.display='none';
            //                  }
            //         done();
            //     },
                getapi(){
                     this.startDate=this.$store.state.startDate;
                    this.endDate=this.$store.state.endDate;
                    let localUserId = JSON.parse(myStorage.getItem("currentUser")).id;
                    if(this.$store.state.agencyDownid){
                        this.ide=this.$store.state.agencyDownid
                    }else{
                         this.ide=localUserId;
                    }
                    if(this.$store.state.agencyDownname){
                         var named=this.$store.state.agencyDownname
                    }else{
                         var named=JSON.parse(myStorage.getItem("currentUser")).account
                    }
                  
                     this.litop.push(
                        {
                            name:named,
                            id:this.ide
                        }
                    )
                    var data=base.getApi().reportQuerylist( localUserId,this.ide,this.startDate,this.endDate,this.current_page,this.pageSize).data
                    this.self = data.self;
                    // console.log(this.self)
                     this.list=data.list;
                     this.totalPage = data.total;
                     this.pages = (this.totalPage==0)?1:(Math.ceil(this.totalPage/this.pageSize));
                    // console.log(this.pages);
                    // if(data.list.length){
                    //     this.list=data.list;
                    // }else{
                    //     $.tips("暂时没有详情报表")
                    // }
                    
                },
                locaData(){
                    this.startDate=this.$store.state.startDate;
                    this.endDate=this.$store.state.endDate;
                    this.current_page;
                    let localUserId = JSON.parse(myStorage.getItem("currentUser")).id;
                    var data=base.getApi().reportQuerylist(localUserId,this.ide,this.startDate,this.endDate,this.current_page,this.pageSize);
                    //console.log(data);
                    if(data.code == 200){
                        this.totalPage = data.data.total;
                        this.pages = (this.totalPage==0)?1:(Math.ceil(this.totalPage/this.pageSize));
                        return data.data.list;
                    }else{
                        $.tips(data.message)
                        return null;
                    }
                },
                getapied(){
                    
                    var list = this.locaData();
                    if(list.length){
                       this.list = list
                    //    console.log(this.list)
                    }else{
                        this.current_page--;
                        this.ifData=true;
                          $.tips("已经加载全部数据")
                    }
                },
                getapiedd(val){
                    // Indicator.open('加载中...');
                     var list =  this.locaData();
                     if(list.length>0){
                         this.gai=false;
                     }
                    this.list = list;
                    this.ifData=false;
                    $.tips(`每次加载${val}条数据`);
                   
                },
                hide(){
                    this.zhe= !this.zhe;
                    this.hide1 = !this.hide1;
                    this.pages = (this.totalPage==0)?1:(Math.ceil(this.totalPage/this.pageSize));
                    
                    // let scroll1 = document.querySelector('.Guanlitop');
                    //console.log(scroll1)
                    // if(this.hide1){
                    //    scroll1.classList.add("zhe");
                    // }else{
                    //     scroll1.classList.remove('zhe');
                    // }
                },
                rePage(){
                    this.current_page=1; 
                    this.gai = true;

                      
                },
                forHide(){
                    this.hide1 = false;
                },
    jumpPage(id) { 
        var re = /^[1-9]*$/;
         if(!id||id==0||!re.test(id)){
          $.tips(`页码输入有误请重新输入`);
          return;
      }
        var that = this.current_page;
        this.current_page = id;
        //console.log(id);
      if(id>this.pages){
          $.tips(`数字输入过大,为您跳转至最后一页`);
          this.current_page=this.pages;return;
      }
    //   if(id<1||id!='d*'){
    //       $.tips(`输入不正确,请重新输入`);
    //       this.current_page=that;return;
    //   }
     
      $.tips(`已为您跳至${this.current_page}页`);
      this.getapied();
    }, 
    pageMinus(){
        this.current_page--;
      if(this.current_page<1){
          this.current_page=1;
      }else{
           this.getapied();
      }
      //console.log(this.current_page);
    },
    pagePlus(){
         this.current_page++;
      if(this.current_page>this.pages){
          this.current_page=this.pages;
           $.tips("已经加载全部数据")
      }else{
           this.getapied();
      }
       //console.log(this.current_page)
    },         
 },
  components: {
      Header,
       "v-scroll": Scroll,
  }
}
</script>

<style scoped lang='less'>
// .shelter{
//     // display: none;
//     // z-index: 500;
//     position: absolute;
//     top: 0.8rem;
//     background:#000;
//     width: 100%;
//     height: 100%;
//     opacity: .2;
// }
.gre{
    color:#26a2ff;
    text-decoration:underline;
}
.colef{
        color: #9E9E9E;
        background: #F7F7F7;
    border: none;
    border-radius: 6px;
}
.cole{
        color: rgb(207, 31, 47) !important;
    border: 1px solid #CF1F2F !important;
     background:transparent !important;
    border-radius: 4px !important;
}
.pedss{
    background-color: #fff;
    >span{
        padding: 0.1rem;
        float: left;
    }
    >span:nth-child(1){
        width: 100%;
    }
}
.ul2{
    background: #eaeaea;
}
.bgcc{
    background: #fff !important;
}

.jiis{
 overflow-y: scroll;
 position: relative;
 background-color:#f5f5f5;
}
.Guanlitop{
    overflow: hidden;
    font-size: 0.14rem;
    padding-bottom: 1rem;
    >div{
        float: left;
        li{
            border-right: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            box-sizing: border-box;
            text-align: center;
        }
    }
    .peddivo{
        width:35%;
        line-height: 0.44rem;
    //    height: 80px;
    }
    .peddivt{
        width: 65%;
        overflow-x:scroll;
       ul{
           overflow: hidden;
           width: 17.1rem;
         font-size: 0.14rem;
           >li{
               width: 0.95rem;
               float: left;
               line-height: 0.44rem;
               height: 0.44rem;
               text-align: center;
           }
       }
    }
}
.ibhjd{
    >li{
        height: 0.44rem !important;
        line-height: 0.44rem !important;
        border-right:1px solid #e8f0fa !important;
    }
}

.pageBottom {
    position: absolute;
    bottom:0;
    left:0;
    right:0;
    height:0.5rem;
    line-height: 0.5rem;
    font-size:0.32rem;
    display: flex;
    align-items: center;
}
.arrow{
  z-index:9999;
  width:0.1rem;
  position: absolute;
  right: -0.2rem;
  top: .08rem;
}
.arrow1{
    position: fixed;
    z-index: 99999;
    font-size: .15rem;
    right: 38px;
    top:12px;
    color: #fff;
}
.Pager{
    z-index: 9999;
    width: 1rem;
    border:1px solid #ccc;
    height: 2.29rem;
    font-size: 0.14rem;
    position: fixed;
    right: 0px;
    margin-right:0.13rem;

}
.Pager li{
    height: 0.45rem;
    background-color: #fff;  
    border-bottom: 0.01rem solid #E7EBEA; 
    line-height: 0.45rem;
    // z-index: 9999;
}
.Pager li:last-child{
    border:none;
}
.hide{
    display: none;
}
// .zhe{
//     background:rgba(255,255,255,0.5);
//     height: 100%;
//     z-index: 100005;
// }

      .page { 
  font-weight: 900; 
//   height: 40px; 
  text-align: center; 
  color: #888; 
//   margin: 20px auto 0; 
  background: #f2f2f2; 
  height: 100%;
  width: 100%;
} 
 
.pagelist { 
  font-size: 0; 
  background: #E4E4E4; 
//   line-height: 50px; 
} 
 
.pagelist span { 
  font-size: 12px; 
  font-family: "微软雅黑";
  color: #111111;
  font-weight: 500;

} 
 
.pagelist .jump { 
  border: 1px solid #ccc; 
  -webkit-border-radius: 4px; 
  -moz-border-radius: 4px; 
  border-radius: 4px; 
  cursor: pointer; 
  margin-left: 5px; 
  background-color:#fff;
  padding: 0.04rem 0.08rem;
  
} 
 
.pagelist .bgprimary { 
  cursor: default; 
  color: #fff !important; 
  background: #FA3956; 
  border:none;
} 
 
.jumpinp input { 
  width: 55px; 
  height: 26px; 
  font-size: 13px; 
  border: 1px solid #ccc; 
  -webkit-border-radius: 4px; 
  -moz-border-radius: 4px; 
  border-radius: 4px; 
  text-align: center; 
} 
 
.ellipsis { 
  padding: 0px 8px; 
} 
 
.jumppoint { 
  margin-left: 30px; 
} 
 
.bgprimary { 
  cursor: default; 
  color: #fff; 
  background: #FA3956; 
}

.arrowOn img{
    width: 0.09rem;
    vertical-align: middle !important;
}
.arrowLeft{
    margin-right: 0.1rem;
}
.arrowRight{
    margin-left: 0.15rem;
}
.gobtn{
    background-color: #fa3956 !important;
    color: #fff !important;
    border:none !important;
}
.numPg{
    color:#fa3956 !important;
}
.arrowLeftImg{
    opacity: 0.5;
}
#hearf{
    z-index: 99998;
}
</style>
