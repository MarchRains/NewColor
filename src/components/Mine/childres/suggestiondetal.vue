<template>
    <div style="top: 0;width: 100%;height:100%;background: #f5f5f5;">
        <!-- 顶部 -->
        <headertop :title="title" > </headertop>
        <!-- 主内容区 -->
		<div class="content-wrap" :style="{'margin-top': isid ? '.85rem' : '.55rem'}">
            <div class="que-list">
                 <a   class="que block">
                    <img style="width: 17px;position: absolute;top: .13rem;" src="../../../assets/source/imgs/tousu.png" alt="">
                    <h3 class="que-tit">&nbsp;&nbsp;&nbsp;&nbsp;{{complainAll.typename}}</h3>
                    <p class="que-con">{{complainAll.details}}</p>
                    <p class="que-time">{{complainAll.addTime|dateFmt('YYYY-MM-DD HH:mm:ss')}}</p>
                    <img class="que-state" :src='complainAll.src'>
                </a>
                 <a  class="que block" v-for="(item,index) in complainAll.feedBackReplyList" :key="index" >
                    <h3 class="que-tit">系统回复</h3>
                    <p class="que-con">{{item.details}}</p>
                    <p class="que-time">{{item.addTime |dateFmt('YYYY-MM-DD HH:mm:ss')}}</p>
                </a> 
            </div>
        </div>
    </div>
</template>

<script>
import headertop from '../../header/header'
  export default{
    components: {
        headertop,
    },
        data(){
            return{
                title:"意见反馈",
                complainAll:""
               
            }
        },
		computed: {
			isid() {
				console.log(12313);
				 return this.$store.state.isid;
			},
		},
         mounted() {
            this.getapi()
            
        },
        methods:{
            getapi(){
                var feedbackId= myStorage.getItem("feedbackId");
                 var userId=JSON.parse(localStorage.getItem('currentUser')).id;
               var complainAll= base.getApi().feedbackDetail(userId, feedbackId) ;
               //console.log(complainAll)
                // complainAll.addTime= new Date(complainAll.addTime).toLocaleString()
                                if(complainAll.type==0||complainAll.type==1){
                                    complainAll.typename="建议"
                                }else if(complainAll.type==2){
                                    complainAll.typename="错误报告"
                                }else if(complainAll.type==3){
                                    complainAll.typename="投诉"
                                }
                                if(complainAll.status==1){
                                    complainAll.src=require('../../../assets/source/css/common/images/state2.png')
                                }else{
                                    complainAll.src=require('../../../assets/source/css/common/images/state1.png')
                                }
                                
                                // console.log(this.complainAll.feedBackReplyList)
                                // for(var j=0;j<complainAll.feedBackReplyList;j++){
                                //    var time= complainAll.feedBackReplyList[j].addTime;
                                //    time.addTime= new Date(time).toLocaleString()
                                // }
                                this.complainAll=complainAll;
                                // console.log(complainAll)
            },
            goBack() {
                this.$router.go(-1)
            },
        
        },
        watch: { 
        },
   
        beforeCreate() {
        },
        created(){
        }
    }
</script>

<style scoped>
    .mint-loadmore-bottom {
    height: 0.5rem;
    background: white;
    margin-bottom: 50px !important;
}
.mint-loadmore-text {
    margin-bottom: 0 !important;
}

.mint-loadmore-top {
    margin-top: 0px;
}
    /*主内容区*/
    /*content*/
    .content-wrap{
        /* margin-top: 0.45rem; */
    }
    .que-list{
        padding-top: .01rem;
        padding-bottom: 0.45rem;
        /* margin-top:0.45rem; */
    }
    .que-list .que{
        width: 93%;
        display: block;
        margin: .084rem auto;
        border-radius: .03rem;
        border:none;
        font-size: .14rem;
        text-align: left;
        box-sizing: border-box;
    }
    .que{
        position: relative;
        padding: .1rem;
        background: #fff;
    }
    .que-tit{
        font-size: .16rem;
    }
    .que-con{
        color: #666;
    }
    .que-time{
        font-size: .12rem;
        color: #999;
    }
    .que-state{
        width: .36rem;
        height: .36rem; 
        position: absolute;
        right: 0;
        top: 0;
    }
    .addque{ 
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .addquebtn{
        background: linear-gradient(90deg, #fa3956, #ff6b52);
        color: #fff;
        line-height: .5rem;
        text-align: center;
        font-size: .16rem;
    }
    a.block{
        display: block;
    }
</style>
