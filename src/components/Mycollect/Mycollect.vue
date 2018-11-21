<template>
    <div style="overflow: hidden;position:absolute;top:0;width:100%;height:100%;z-index:1000;" :style="{'background':nodata?'#fff':'#f5f5f5'}">
        <!-- <div class="wrap_header" style="position:fixed;top:0;z-index:1001;"> -->
            <div class="index_header" :style="{'height':isLiuHai?'0.8rem':'0.5rem'}">
                <div :style="{'margin-top':isLiuHai?'0.4rem':'0rem'}" @click="goBack" style="position: absolute;transform: translateY(-50%);color: #fff;width:20%;float:left;">
                    <i class="iconfont icon-mjiantou-copy" style="position: absolute;line-height: .5rem;margin-left: 12px;left:0"></i>
                </div>
                <h3 :style="{'margin-top':isLiuHai?'0.4rem':'0rem'}">我的收藏</h3>
                <div class="mycollect" @click="cancel" style="width:20%;float:left;text-align:center;" :style="{'margin-top':isLiuHai?'0.4rem':'0rem'}">
                    清空收藏
                </div>
                <!-- <Header  title="我的收藏" datal="清空收藏" :goDetal="cancel" :goBack="goBack"></Header> -->
            </div>
        <!-- </div> -->
            
        <div class="contentlist">
            <!-- 默认样式 -->
            <div class="nodata" style="position: absolute;left: 50%;top: 50%;transform: translate(-50%,-50%);">
                <div class="nodata-top">
                    <img src="../../assets/images/empty.gif" alt="">
                    <h4>暂无收藏记录</h4>
                    <p>快去收藏喜欢的彩票吧~</p>
                </div>
            </div>
            <!-- 有收藏样式 -->
            <ul class="listtt" >
                <li v-for="(collect,index) in collectAll" :key="index" class="liss">
                    <div class="liall">
                        <div class="lileft" @click="goindetal" :id="collect.lottery.id"  :showType="collect.lottery.showType" :name="collect.lottery.name">
                            <div class="lotteryimg">
                                <img :src="userAll + collect.lottery.logo.fileurl" alt="">
                            </div>
                            <div class="lotterytext">
                                <h3>{{collect.lottery.name}}</h3>
                                <p>{{collect.lottery.remark}}</p>
                            </div>
                        </div>
                        <div class="liright" :id="collect.lotteryId" @click="cancelCellect">
                            <span>取消收藏</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    #layout{
        width: 100%;
        height: 100%;
    }
    /* 头部 */
    .wrap_header{
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 200;
    }
    .index_header{
        width: 100%;
        height: 0.5rem;
        display: flex;
        color: #fff;
        margin: 0 auto;
    }
    
    .returnAll{
        line-height: 0.45rem;
    }
    .returnAll i {
        font-size: 26px !important;
        position: absolute;
    }
    /*主内容区*/
    .contentlist{
        width: 100%;
        margin-top: .1rem;
        overflow: scroll;
    }
    /* 默认无收藏样式 */
    .nodata{
        display: none;
        overflow: hidden;
    }
    .nodata-top img{
        width: 1.4rem;
    }
    .nodata-top h4{
        height: .312rem;
        line-height: .312rem;
        text-align: center;
        color: #111;
        font-size: .16rem;
        font-weight: 400;
    }
    .nodata-top p{
        height: .312rem;
        line-height: .312rem;
        text-align: center;
        font-size: .12rem;
        color: #999 !important;
    }
    /* 有收藏时的样式 */
    .listtt{
        /* margin-top: 19%; */
        display: none;
        margin-bottom: 0.2rem;
    }
    .listtt li{
        height: .84rem;
        background-color: white;
        border-radius: .1rem;
        width: 90%;
        margin: .08rem auto;
        list-style: none;
    }
    .listtt li .liall{
        width: 92%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    .lileft{
        display: flex;
        width:75%;
    }
    .lotteryimg{
        line-height: .84rem;
    }
    .lotteryimg img{
        display: block;
        width: .6rem;
        height: .6rem;
        margin-top: .12rem;
    }
    .lotterytext{
        margin-left: .12rem;
    }
    .lotterytext h3{
        line-height: .24rem;
        height: .24rem;
        margin-top: .13rem;
        color: #111;
        font-size: .16rem;
        font-weight: 400;
        text-align: left;
    }
    .lotterytext p{
        margin-top: .11rem;
        color: #999 !important;
        font-size: .14rem;
        text-align: left;
    }
    .liright{
        height: .84rem;
        line-height: .84rem;
        font-size: .12rem;
        width: 26%;
    }
    .liright span{
        font-size: .16rem;
    }
    .index_header .mycollect {
        height: .5rem;
        line-height: .5rem;
        /* margin-right: 1.1rem; */
        width: 6rem;
        text-align: right;
        font-size: .16rem;
    }
    .index_header h3 {
        height: .5rem;
        line-height: .5rem;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        text-align: center;
        font-weight: 100;
        margin-left: .9rem;
    }
</style>
<script>
import Header from './../header/header';
    export default {
        data() {
            return {
                collectAll:[],
                cancelAll:[],
                userAll:base.domain,
                dictAll:"",
                nodata:false
            }
        },
        // components:{Header},
        components: {
    Header
  },
       
         computed:{
       isid(){
          return this.$store.state.isid;
        },
      isLiuHai(){
        return this.$store.state.isLiuhai;
      },
         //计算属性 实时计算当前页面nodata的值
    nodata(){
        return this.nodata;
    }        
    },
     updated() {  
        },
        methods: {
            contentlistheight(){
                var bodyheight=document.getElementsByTagName("body")[0].offsetHeight;
		 		var headerheight=document.getElementsByClassName("index_header")[0].offsetHeight;
                var contentlist=document.getElementsByClassName("contentlist")[0];
                contentlist.style.height=(bodyheight-headerheight)+'px'

            },
            goBack() {
                setTimeout(function(){
                    $('.hint-wrap').hide();
                },100)
               this.$store.state.xiazaishow=true
                this.$router.go(-1);    
            },
            cancel(){
                // 清空收藏
                var lirights=document.getElementsByClassName("liright");
                var listtt=document.getElementsByClassName("listtt")[0];
                if(listtt){
                    for(var i=0;i<lirights.length;i++){
                        var lottlyidd= lirights[i].id;
                        var arr2 =this.dictAll['id'];
                        var cancelAll = base.getApi().collectCancel(arr2,lottlyidd);
                    }
                    //console.log(listtt.parentNode)
                    var lisparent=listtt.parentNode;
                    lisparent.removeChild(listtt);
                    //console.log( document.getElementsByClassName("nodata")[0])
                    // setTimeout(() => {
                             document.getElementsByClassName("nodata")[0].style.display="block"
                             this.nodata = true;
                    // }, 200);
                    var yhuserId = JSON.parse(myStorage.getItem("currentUser"));
                    var idq = yhuserId.id+''
                    this.$store.state.iscollect[idq] = base.getApi().collectList(yhuserId.id)
                }
            },
            cancelCellect() {
                // 渲染基础数据
                var arr2 =this.dictAll['id'];
                var lottlyid= event.currentTarget.id;
                // 取消收藏接口
                this.cancelAll = base.getApi().collectCancel(arr2,lottlyid);
                if(this.cancelAll.code==200){
                    var ull=event.currentTarget.parentNode.parentNode.parentNode;
                    var licurrent=event.currentTarget.parentNode.parentNode;
                    ull.removeChild(licurrent);
                }
                var liss=document.getElementsByClassName("liss");
                //console.log(liss)
                if(liss.length==0){
                     document.getElementsByClassName("nodata")[0].style.display="block"
                     this.nodata = true;
                }
                var yhuserId = JSON.parse(myStorage.getItem("currentUser"));
                var idq = yhuserId.id+''
                this.$store.state.iscollect[idq] = base.getApi().collectList(yhuserId.id)
            },
            goindetal(){
                var $this = this;
               var  str = {
                          'id':event.currentTarget.id,
                          'showType':event.currentTarget.getAttribute("showType"),
                          'lotteryName':event.currentTarget.getAttribute("name")
                        }
                        $this.$store.state.urlgoucai=$(event.currentTarget).find('.lotteryimg img').attr('src')
                        // console.log(event.currentTarget.getAttribute("lname"))
                        window.localStorage.setItem('forthecolor',JSON.stringify(str));
                         window.localStorage.setItem('thisdatalist',event.currentTarget.id);
                         //为了修改309条bug,将homecolor状态修改为no
                        $this.$store.state.homecolor = 'no';
                        $this.$router.push({path:'/forthecolor'});
            }
          
        },
        mounted:function(){
            // 渲染基础数据
            var dictAll = JSON.parse(myStorage.getItem("currentUser"));
            this.dictAll=dictAll;
            var arr2 = dictAll['id'];

            if(myStorage.getItem("currentUser")){
                // 收藏接口
                this.collectAll = base.getApi().collectList(arr2,'').data;
                //console.log(this.collectAll)
                // 判断是否为空
                if(this.collectAll.length){
                          $('.nodata').hide();
                          this.nodata = false;
                          $('.listtt').show();
                }else{
                    $('.nodata').show();
                    this.nodata = true;
                    $('.listtt').hide();
                };
                var yhuserId = JSON.parse(myStorage.getItem("currentUser"));
                var idq = yhuserId.id+''
                this.$store.state.iscollect[idq] = base.getApi().collectList(yhuserId.id)
            }
            this.$nextTick(()=>{
                this.contentlistheight()
            })
         
        },
        watch: {

        },
        beforeCreate: function() {
            document.getElementsByTagName("body")[0].style.backgroundColor='#f5f5f5';
        },
        created() {
             this.$store.state.xiazaishow=true
        }
    }
</script>