<template>
 <div id="app" style="overflow: hidden;">
    <!-- <p class="pde" style="height:0.2rem;width: 100%;background:linear-gradient(90deg, #fa3956, #ff6b52);position: fixed;
    z-index:99999;top:0" v-if="isid"></p> -->
    <div style="position:absolute;top:0;width:100%;height:100%;background:#fff;">
        <!-- 顶部 -->
        <headertop title="领取红包" :leftType="2" />
        <div class="main">
            <ul v-if="!ifshow">
                <li v-for="(item,index) in result" :key="index" >
                    <div>
                        <p>{{item.remark}}</p>
                        <p><span>充值单号: </span><span>{{item.orderNo}}</span></p>
                        <p>{{item.addTime}} </p>
                    </div>
                    <div :id="item.id" @click="linqu">立即领取</div>
                </li>
                
            </ul>

            <div v-if="ifshow" class='no' >
                <img src="../../assets/images/empty.gif" alt="" class='lack1'>
                <h4>暂无红包记录</h4>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped lang="less">
.no {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  .lack1 {
    width: 1.4rem;
    display: inline-block;
  }
}
    .main{
        font-size:0.16rem;
        >ul{
            >li{
                overflow: hidden;
                height: 0.8rem;
                width:90%;
                background: #fff;
                margin: 0 auto;
                border-radius: 0.1rem;
                margin-top:0.1rem;
                >div{
                    float: left;
                     height: 1rem;
                }
                >div:nth-child(1){
                    text-align: left;
                    width:70%;
                    p{
                        padding-left:0.15rem;
                    }
                    p:nth-child(1){
                        margin-top: 0.1rem;
                    }
                    p:nth-child(2){
                        line-height: 0.3rem;
                        font-size:0.14rem;
                        color:gray;
                    }
                    p:nth-child(3){
                        // line-height: 0.3rem;
                        font-size:0.14rem;
                        color:gray;
                    }
                }
                >div:nth-child(2){
                    width:30%;
                    background: #ffa500;
                    line-height: 0.8rem;
                    color:#fff;
                    font-size: 0.14rem;

                }
            }
        }
    }
</style>
<script>
import headertop from '../header/header'
export default {
    components: {
        headertop,
    },
        data() {
            return {
                isShowBack: false,
                isHideTabBar: false,
                result:"",
                userid:"",
                ifshow:false
            }
        },
        mounted:function(){
	
            this.getapi()
        },
        computed:{
            isid(){
                return this.$store.state.isid;
            },
            isLiuHai(){
                return this.$store.state.isLiuhai;
            }
        },
        methods: {
            linqu(){
                var id=event.currentTarget.id;
               var redpackageHq= base.getApi().redpackageHq(id,this.userid);
               this.$router.push({path:"/rechargeRecord"})
            },
            getapi(){
               this.userid=JSON.parse(localStorage.getItem("currentUser")).id;
               this.result=  base.getApi().redpackage(this.userid,'1').data.page.list;
               if(this.result.length>0){
                   //console.log(this.result);
                    for(var i=0;i<this.result.length;i++){
                        this.result[i].addTime= new Date(this.result[i].addTime).toLocaleString();
                            //console.log( this.result[i].addTime)
                    }
               }else{
                   this.ifshow=true
                   $.tips("暂时没有红包")
               } 
            },
          
            isShowOrHide(path) {
                if (path != '/Home') {
                    this.isShowBack = true
                    this.isHideTabBar = true
                } else {//首页
                    this.isShowBack = false
                    this.isHideTabBar = false
                }
            },
        },
 
        created() {
            this.isShowOrHide(this.$route.path);
        }
    }
</script>