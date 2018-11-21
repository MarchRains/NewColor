<template>
<div id="app" style="overflow: hidden;">
    <p class="pde" style="height:0.2rem;width: 100%;background:linear-gradient(90deg, #fa3956, #ff6b52);position: fixed;
    z-index:99999;" v-if="isid"></p>
    <div>
        <headertop title="免费试玩" :leftType="2" > </headertop>
        <div class="ocontent-wrap" :style="{'margin-top':isLiuHai?'0.8rem':'0.5rem'}">
			<div class="ocontent">
				<form action="#">
					<div class="text">
						试玩账号<input type="text" :value="trialAll" disabled="disabled" id="userName" name="userName" ref="input1">
                        <!-- 试玩账号<input type="text" value="guest316747" disabled="disabled" id="userName" name="userName" ref="input1"> -->
                        
					</div>
					<div class="text">
						登录密码<input type="password" value="123456" disabled="disabled" id="password" name="password" ref="input2">
					</div>
					<div class="formbottom">
						<div class="service fl">
							<span id="customServiceOnlineA"><a style="color: rgb(102, 102, 102);" @click="onserver">在线客服</a></span>
						</div>
						<div class="register fr">
                            <router-link to="/login" style="color:#000;">
                                    <span>已有账号</span>
							        <span>直接登录</span>
                            </router-link>
							
						</div>
					</div>
					<div class="btn">
						<input type="button" name="" id="reg" value="登录" @click="rechange()">
					</div>
				</form>
				<!--底部文字提示-->
				<div class="foottext">
					<div class="otext">
						<span>1:</span>
						<p>试玩账号初始金额为200RMB,不允许充值</p>
					</div>
					<div class="otext">
						<span>2:</span>
						<p>每个IP每天仅允许有3个试玩账号</p>
					</div>
					<div class="otext">
						<span>3:</span>
						<p>每个试玩账号从注册开始，有效时间为72小时，超过时间系统自动回收</p>
					</div>
					<div class="otext">
						<span>4:</span>
						<p>试玩账号仅供玩家熟悉游戏，不允许充值和提款</p>
					</div>
					<div class="otext">
						<span>5:</span>
						<p>试玩账号不享有参加优惠活动的权利</p>
					</div>
					<div class="otext">
						<span>6:</span>
						<p>试玩账号的赔率仅供参考，可能与正式账号赔率不相符</p>
					</div><div class="otext">
						<span>7:</span>
						<p>其它未说明事项以本公司解释为准</p>
					</div>
				</div>
			</div>
		</div>
    </div>
</div>
</template>
   
<style scoped>
    html{
        font-size: 625%;
    }
    body{
        width: 100%;
        height: 100%;
        overflow: auto;
        background:white !important;
    }
    input[type=checkbox],input[type=text],input[type=password]{
        -webkit-appearance:none;
        appearance:none;
        outline:none;
    }
    #layout{
        width: 100%;
        height: 100%;
    }
    .header_wrap{
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 200;
    }
    .header{
        height: 0.45rem;
        position: relative;
    }
    .header h2{
        margin: 0 auto;
        height: 0.45rem;
        line-height: 0.45rem;
        text-align: center;
        color: #fff;
        font-weight: 600;
        font-size: .18rem;
    }
    .header .set{
        position: absolute;
        left: .18rem;
        transform: translateY(-50%);
        color: #fff;
    }
    .header .set i{
        font-size: .24rem;
    }
    /* 主内容区 */
    .ocontent-wrap{
        margin-top: 0.1rem;
    }
    .ocontent {
        width: 92%;
        margin: 0 auto;
        overflow: hidden;
    }
    .ocontent form {
        margin-top: .06rem;
        overflow: hidden;
        font-size: .14rem;
    }
    .ocontent .text {
        margin-top: .06rem;
        height: .45rem;
        background: #fff;
        line-height: .45rem;
        border: .01rem solid whitesmoke;
        border-radius: .06rem;
        text-indent: .15rem;
        color: #272525;
        text-align: left;
    }
    .ocontent .text input {
        height: .3.5rem;
        border: 0;
        background: #fff;
        margin-left: .12rem;
        font-size: .14rem;
    }
    .formbottom {
        margin-top: .15rem;
        height: .24rem;
        line-height: .24rem;
        color: #000;
    }
    .register span:last-child {
        margin-left: .08rem;
    }
    .btn {
        margin-top: .23rem;
    }
    .btn input {
        display: block;
        height: .48rem;
        width: 69%;
        margin: 0 auto;
        line-height: .48rem;
    
        text-align: center;
        color: #fff;
        border-radius: .05rem;
        font-size: .16rem;
        outline: none;
        border: none;
    }
    .foottext {
        margin-top: .25rem;
    }
    .otext {
        line-height: .24rem;
        display: flex;
        font-size: .12rem;
        color: #272525;
        text-align: left;
    }
    .otext span {
        display: block;
        width: .14rem;
    }
    .otext p {
        flex: 1;
    }
    .fl{
        float: left;
    }
    .fr{
        float: right;
    }
</style>
<script>
  import headertop from '../header/header'
  import { JumpOpen } from '../../assets/api/app.js'
    export default {
        data() {
            return {
                trialAll:'',
                username:'',
                password:'',
            }
        },
        components:{
            headertop
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
       onserver(){
                if(this.$store.state.isid){
                     JumpOpen(onlineURL)
                }else{
                    window.open(onlineURL) 
                }
               
            },
            goBack() {
                this.$router.go(-1);    //底层等同于 history.back()back() 方法可加载历史列表中的前一个 URL（如果存在）。
                // 调用该方法的效果等价于点击后退按钮或调用 history.go(-1)。
            },
            rechange() {
                this.username = this.$refs.input1.value;
                this.password = this.$refs.input2.value;
                var dict = base.getApi().freeTrial(this.username, this.password);
                if(dict && dict.code == 200){
                    this.$router.push({ path: 'home' })
                }
            }
        },
        mounted(){
            this.trialAll = base.getApi().getFreeTrialAccount();
        },
        watch: {

        },
        beforeCreate: function() {
            document.getElementsByTagName("body")[0].style.backgroundColor='white !important';
        },
        created() {

        }
    }
</script>