<template>
  <div style="overflow: hidden;position:absolute;top:0;width:100%;height:100%;background: #f5f5f5;z-index:1000;    overflow: hidden;">
       <img class="filtrate" src="../../../../assets/images/filtrate.png" alt="" :style="{'top':isLiuHai?'0.55rem':'0.15rem'}">
     <Header id="hearf" title="账变记录" datal="筛选" :goDetal="gorouter">
     </Header>
     <div class="jiis" style="position: fixed; bottom: 0; left: 0; right: 0; height: auto;" :style="{ height: activeheight},{'top':isLiuHai?'.8rem':'.5rem'}">
             <!-- 无数据样式 -->
            <div class="nodata" style="display:blcok">
                <div class="nodata-top">
                    <img src="../../../../assets/images/empty.gif" alt="">
                    <h4>暂无帐变记录~</h4>
                </div>
            </div>
            <v-scroll v-if="has" :on-refresh="onRefresh" :on-infinite="onInfinite">
         <div class="Guanlitop" style="margin-top:.05rem">
               <!-- <div v-if="litop.length>1" class="pedss" style="width:100%;margin-top:0.1rem;padding:0 0.2rem;box-sizing:border-box;">
                    <p style="margin-bottom:0.05rem;">当前用户层级</p> 
                   <p style="line-height:0.5rem;width:100%;overflow-x:scroll; margin:3px 0px;"><span  class="soadf colef"  v-for="(item,index) in litop" :key="index" :ked="index" style="    margin-right: 0.1rem;
    padding: 0.05rem 0.1rem;
    
   " @click="choode" :id="item.id" >{{item.name}}</span></p>
                </div> -->
             <div class="peddivo">
                 <ul style="background:#eaeaea;">
                        <li style="  background: #e8f0fa;height:0.44rem;line-height:0.44rem; border-right:1px solid #e8f0fa !important;">用户名</li>
                        <li  v-for="(item,index) in list" :key="index" :ked="index" style="height:0.44rem;line-height:0.44rem;" :agentNum="item.memberNum"  :class="{'bgcc':(index%2==0),'gre':(item.agentNum)}" :id="item.id" :name="item.account">{{item.account}}</li>
                    </ul>
             </div>
             
             <div class="peddivt">
                  <ul class="ibhjd" style="  background: #e8f0fa;position: relative;z-index: 999;">
                    <li>金流类型</li> 
                    <li>操作前金额</li> 
                    <li>交易金额</li> 
                    <li>操作后余额</li> 
                    <li>备注</li>  
                    <li>操作时间</li>  
                </ul>
                <ul class="ul2" v-for="(item,index) in list" :key="index">
                    <li :class="{'bgcc' : index%2==0}">{{item.searchText}}</li>
                    <li  :class="{'bgcc' :(index%2==0) }" >{{item.beforeOperateAmount}}</li>
                    <li :class="{'bgcc' : index%2==0}">{{item.operateAmount>=0?("+"+item.operateAmount):(item.operateAmount) |toFloor}}</li>
                    <li :class="{'bgcc' : index%2==0}">{{item.afterOperateAmount}}</li>
                    <li :class="{'bgcc' : index%2==0}">{{item.remark}}</li>
                    <li :class="{'bgcc' : index%2==0}">{{item.dateTime | dateFmt('YYYY-MM-DD HH:mm:ss')}}</li>
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
        startDate:new Date().YMD(0),
        endDate:new Date().YMD(0),
        list:[],
        pageNumber:1,
        pageSize:50,
        activeheight:'100%',
        litop:[],
        ifData:false,
        ifclick:true,
        firstPageSize:20,
        secondPageSize:50,
        thirdPageSize:100,
        fourthPageSize:300,
        userName:'',
        color:'',
        has:''
    }
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
    //   pageSize(val, oldVal){
    //       this.getapiedd(val);
    //   }
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
     if(this.$store.state.bChangeName){
         //console.log(this.$store.state.bChangeName);
         this.name = this.$store.state.bChangeName;
         this.getapi();
     }
     if(this.$store.state.billuserName){
         this.getapi();
     }
     this.$nextTick(() => {
      this.activeheight =
        document.getElementsByTagName("body")[0].offsetHeight -
        document.getElementById("hearf").offsetHeight +
        "px";
        if(this.list ==''){
              this.has = false
          document.getElementsByClassName("nodata")[0].style.display = "block";
        }else{
            this.has = true
          document.getElementsByClassName("nodata")[0].style.display = "none";
        }
        });
     //查询传值
     //console.log(this.$store.state.billuserName)
    //  if(this.userName){
    //      this.$store.state.billSearch = false;
    //     this.getapi();
    //     this.$nextTick(()=>{
    //     this.activeheight=  document.getElementsByTagName("body")[0].offsetHeight-document.getElementById("hearf").offsetHeight+"px";
    //     // console.log(document.getElementsByTagName("body")[0].offsetHeight-document.getElementById("hearf").offsetHeight-10+"px")
    //     })
    //  }
 },
 methods:{
    //  choode(){
    //     //  if()
    //     this.pageNumber = 1;
    //     this.ifData=false;
    //     console.log(99999999999)
    //      var spans=document.getElementsByClassName("soadf");
    //      for(var i=0;i<spans.length;i++){
    //          spans[i].classList.remove("cole")
    //      }
    //       spans[ spans.length-1].classList.add("cole")
    //      console.log(this.litop)
    //        var ide= event.currentTarget.id;
    //        this.ide=ide;
    //        console.log(ide)
    //       this.startDate=this.$store.state.startDate;
    //                 this.endDate=this.$store.state.endDate;
    //                 let localUserId = JSON.parse(myStorage.getItem("currentUser")).id;
    //                 var key= Number(event.currentTarget.getAttribute("ked"))
    //                 var data=base.getApi().subUserAccountDetails(localUserId,this.ide,this.startDate,this.endDate,'','',this.pageNumber,this.pageSize).data;
    //                  this.list=data.userList  ;
    //                  var num= this.litop.length-1-key
    //                    console.log( key+1)
    //                    console.log(this.litop.length-1-key)
    //                   this.litop.splice(key+1, this.litop.length-1-key)
                    
    //                if(!this.litop.length){
    //                     let localUserId = JSON.parse(myStorage.getItem("currentUser")).id;
    //                 var named=JSON.parse(myStorage.getItem("currentUser")).account
    //                  this.litop.push(
    //                     {
    //                         name:named,
    //                         id:localUserId
    //                     }
    //                 )
    //                }
    //                console.log(this.litop)
    //  },
    //  dEtal(){
    //     //  alert(event.currentTarget.getAttribute("agentNum"))
    //     if(this.ifclick){
    //         this.ifclick=false;
    //         this.ifData=false;
    //      if(Number(event.currentTarget.getAttribute("agentNum")) ){
    //                  var ide= event.currentTarget.id;
    //                 this.ide=ide;
    //                 var named= event.currentTarget.getAttribute("name")
    //                 this.litop.push(
    //                     {
    //                         name:named,
    //                         id:ide
    //                     }
    //                 )
    //                 this.startDate=this.$store.state.startDate;
    //                 this.endDate=this.$store.state.endDate;
    //                 let localUserId = JSON.parse(myStorage.getItem("currentUser")).id;
    //                 var data=base.getApi().subUserAccountDetails(localUserId,this.ide,this.startDate,this.endDate,'','',this.pageNumber,this.pageSize).data;
    //                  this.list=data.userList  ;
    //                 if(!data.userList.length){
    //                     $.tips("没有下级用户")
    //                 }else{

    //                 }
    //         }
    //     }

    //     setTimeout(() => {
    //          this.ifclick=true;
    //     }, 1000);
        
                    
                    
    //  },
               onRefresh(done) {
                   if(this.$store.state.bChangeName){
                    this.pageNumber=1;
                    this.pageSize=50;
                      let localUserId = JSON.parse(myStorage.getItem("currentUser")).id;
                      //console.log(localUserId)
                      //console.log(this.ide)
                     this.getapi();
                        $.tips("已经刷新当前数据")
                   }
                    done();
                },
                onInfinite(done) {
                      let more = this.$el.querySelector(".load-more");
                      more.style.display='block'
                     this.getapied()
                        if(this.list){
                            more.style.display='none';
                            }
                    done();
                   
                },
                getapi(){
                    if(this.$store.state.billstartDate){
                        this.startDate=this.$store.state.billstartDate;
                    }
                    if(this.$store.state.billendtDate){
                        this.billendtDate=this.$store.state.billendtDate;
                    }
                    if(this.$store.state.billuserName){
                        this.userName=this.$store.state.billuserName;
                    }
                    if(this.$store.state.billColor){
                        this.color=this.$store.state.billColor;
                    }
                    if(this.$store.state.billColor=='全部'){
                        this.color = "";
                    }
                     if(this.$store.state.bChangeName){
                         //console.log(this.$store.state.bChangeName);
                        this.userName = this.$store.state.bChangeName;
                    }
                    
                    let localUserId = JSON.parse(myStorage.getItem("currentUser")).id;
                    //console.log(localUserId);
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
                     //console.log(this.startDate);
                     //console.log(this.endDate);
                     //console.log(this.userName);
                    //  //console.log(this.color);
                    // //  //console.log(this.localUserId);
                     //console.log(this.ide);
                     
                    //  console.log(this.pageSize);
                    var data=base.getApi().subUserAccountDetails(localUserId,this.ide,this.startDate,this.endDate,this.userName,this.color,this.pageNumber,this.pageSize).data
                     //console.log(this.userName);
                     
                    this.list = data.list;
                    //console.log(this.list);
                    // if(data.List.length){
                    //     this.list=data.userList;
                        
                    // }else{
                    //     $.tips("暂时没有详情报表")
                    // }
                },
                getapied(){
                    if(this.$store.state.ZhudanuserName){
                        this.startDate=this.$store.state.billstartDate;
                        this.billendtDate=this.$store.state.billendtDate;
                        this.pageNumber++;
                        let localUserId = JSON.parse(myStorage.getItem("currentUser")).id;
                        let list=base.getApi().subUserAccountDetails(localUserId,this.ide,this.startDate,this.endDate,this.userName,this.color,this.pageNumber,this.pageSize).data.list;
                        
                        if(list.length){
                        this.list = this.list.concat(list);
                        }else{
                            this.pageNumber--;
                            this.ifData=true;
                            $.tips("已经加载全部数据")
                        }
                    }else{
                         $.tips("请先选择筛选条件");
                    }
                },
                // getapiedd(val){
                //      this.startDate=this.$store.state.startDate;
                //     this.endDate=this.$store.state.endDate;
                //     this.pageNumber = 1;
                //     let localUserId = JSON.parse(myStorage.getItem("currentUser")).id;
                //     var list=  base.getApi().subUserAccountDetails(localUserId,this.ide,this.startDate,this.endDate,'','',this.pageNumber,this.pageSize).data.userList;
                //     this.list = list;
                //     this.ifData=false;
                //     $.tips(`每次加载${val}条数据`);
                // },
      gorouter() {
      this.$router.push({ path: "/daili/billFiltrate" });
    },

 },
computed:{
       isid(){
          return this.$store.state.isid;
        },
      isLiuHai(){
        return this.$store.state.isLiuhai;
      }
    },
  components: {
      Header,
       "v-scroll": Scroll,
  },
}
</script>

<style scoped lang='less'>
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
    border-radius: 6px !important;
}
.pedss{
    // padding-left: 0.2rem;
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
 height: 100%;
 background-color:#FFF;
//  height: 100% !important;
 overflow-y: scroll;
 position: relative;
//  max-height:5.9rem;
//  background: red;
// border-bottom:2px solid #ddd;
}
.Guanlitop{
    overflow: hidden;
    font-size: 0.14rem;
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
        width:24%;
        line-height: 0.7rem;
    //    height: 80px;
    }
    .peddivt{
        width: 76%;
        overflow-x:scroll;
       ul{
           overflow: hidden;
           width: 6.6rem;
         font-size: 0.14rem;
           >li{
               width: 0.95rem;
               float: left;
               line-height: 0.44rem;
               height: 0.44rem;
               text-align: center;
           }
           li:nth-child(5){
               width: 1.4rem;
           }
           li:last-child{
               width: 1.4rem;
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
    height:36px;
    line-height: 36px;
    font-size:0.32rem;
    display: flex;
    align-items: center;
}
.pageBottom div {
    flex:1;
    box-sizing: border-box;
    border-right:1px solid #ddd;
    background-color: #f5f5f5;
    z-index:2222;;
}
.pageBottom div:last-child {
    border-right:none;
}
.filtrate{
  position:absolute;
  z-index:1998;
  right:0.5rem;
  top:0.12rem;
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
