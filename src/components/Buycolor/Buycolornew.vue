<template>
  <div style="overflow: hidden; position:fixed;top:0;height:100%;background:#fff;z-index:1000;width:100%;">
  <div class="maxonly" style="position: relative;height:100%">
    <!-- 顶部栏 -->
    <headertop title="购彩大厅" :rightType="2">
      <template slot="rightContent">
        <router-link :to="{path:'/buycolor'}">
            <a class="header-oper">
              <i class="icon style-icon" id="showTypeI"></i>
            </a>
        </router-link>
      </template>
    </headertop>
    <!-- 购彩分类 -->
    <div class="wrap-trend">
			<div class="trend">
				<div class="trend-ul">
          <ul id="trend">
            <li @click="showAll()" datatype="all">全部</li>
            <li @click="showType(lottery1.split('-')[0])" v-for="(lottery1,i) in lotteryType" :datatype="lottery1.split('-')[0]" :key="i" class="">{{lottery1.split('-')[1]}}</li>
          </ul>
        </div>
			</div>
		</div>
    <!-- 彩种 -->
    <div class="wrapper" :style="{top: wrapperTop}">
			<div class="content content-trend content-tabbar">
            <div class="lottery" style="display: none;">
            <div :id="item.id" :name="item.showType" :lname="item.name" :status="item.status"  v-if="item.status!=8" :index="index" v-for="(item,index) in datalist" class = 'colornewAll'>
            <!-- 彩种名称 -->
            <a class="weui-media-box weui-media-box_appmsg bgf">
              <div class="weui-media-box__hd">
                <img :src="uerAll + item.logo.fileurl">
              </div>
              <div class="weui-media-box__bd">
                <div class="weui-media-box__title lo-name">
                  {{item.name}}
                  <!-- <span id="lotteryNoSpan_2">{{'第' + item.lotteryDraw.lotteryNo + '期'}}</span> -->
                </div>
                  <span class="spanmax" :id="'timeDown'+item.id">
                    <section class="spanAll">{{item| mytime('shi')}}</section>:<section class="spanAll">{{item| mytime('fen')}}</section>:<section class="spanAll">{{item| mytime('miao')}}</section>
                  </span>
                <!-- </div> -->
              </div>
            </a>
          </div>
      
				</div>
      </div>
    </div>
    <!-- 底部tab切换 -->
    <!-- <transition name="slide"> -->
      <router-view></router-view>
    <!-- </transition> -->
  </div>
  </div>
</template>

<style scoped src="../../assets/source/css/common/buy.css"></style>
<style scoped src="../../assets/source/css/common/base.css"></style>

<style scoped>
   .wrap-header .header .header-oper{
    right: 1.5rem;
  }
  i.icon{
    background: url('../../assets/source/imgs/images/xuanzhong.png') no-repeat 0 0;
    background-size: contain;
  }
  .header-oper{
    right: .18rem;
  }
  .hong{
    text-align: center;
    font-size: .15rem;
    background: white;
    display: flex;
    float: left;
	}
  .hong:nth-child(6){
    margin: 0 .05rem;
  }
.wrapper {
  background-color: #fff;
  position: absolute;
  z-index: 1;
  width: 100%;
  bottom: .46rem;
  overflow: auto;
}
  /* 购彩大厅第二套样式 */
  .lottery{
      
  }
  .lottery .colornewAll{
      display: inline-block;
      width: 33.33%;
      border-bottom: 1px solid whitesmoke;
      font-size: .1rem;
  }
  .lottery .colornewAll a{
      flex-direction: column;
      padding:.1rem;
      align-items: center;
      padding-bottom: .2rem;
  }
  .lottery .colornewAll a .weui-media-box__bd{
      /* font-size: 14px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }
.lottery .colornewAll a .weui-media-box__bd .spanmax{
    width: 100%;
    color: #000;
    font-size: .1rem;
}
.lottery .colornewAll a .lo-name{
    font-size: 14px;
}

.lottery{
  display: flex;
  flex-wrap: wrap;
}
#trend::-webkit-scrollbar {display:none}
.trend-ul::-webkit-scrollbar {display:none}
</style>
<script>
// import '../../assets/source/css/common/jquery-weui.min.css';
import headertop from '../header/header';
  export default {
    components: {
      headertop
    },
    data() {
			return {
        index:'',
        datalistAll:[],
        datalist:[],
        // flowersnew:[],
        lotteryType:[],
        hour:[],
        minute:[],
        second:[],
        uerAll:base.domain,
        shujuAlls:{},
      }
    },
     created(){
      this.getFlower();
      var dict = JSON.parse(myStorage.getItem("dictList"));
      this.lotteryType = dict['lottery-type'];
       // 渲染基础数据
      // if(this.$store.getters.getcolorsj.length!=0){
      //     this.shujuAlls = this.$store.getters.getcolorsj;
      // }else{
      //     this.shujuAlls = base.getApi().lottery();
      //     this.$store.commit('getplaycolor', this.shujuAlls);
      // }

      //加载缓存
      // if(!!this.$store.state.lotteryList){
      //   this.datalistAll = this.$store.state.lotteryList.data;
      // }else{
      //   var result = base.getApi().lottery();
      //   if(result.code == 200){
      //     this.$store.state.lotteryList = result;
      //     this.datalistAll = this.$store.state.lotteryList.data;
      //   }
      // }
      this.datalistAll = this.$store.getters.getcolorsj.data;
      this.datalist = this.datalistAll.lotteryList
      var $thisnwea = this;
			// if(!this.$store.state.isLoadBuyTimer){
      //   this.$store.state.isLoadBuyTimer = true;
      //   this.cache_timeout_id_ = setInterval(function(){
      //     $thisnwea.zzz(baseSokectQueue);
      //   },1000);
      // }
      
    },
    methods:{
      getFlower() {
        // var ss = [];
        // for(var y  = 1;y<5;y++){
        //   for(var v = 1;v<14;v++){
        //     ss.push(require('../../assets/source/assets/'+y+'-'+v+'.png'));
        //   }
        //   this.flowersnew.push(ss);
        //   ss = [];
        // }
      },
       showType(a){
        var k = [];
        this.datalist = this.datalistAll.lotteryList;
        for(var j = 0;j<this.datalist.length;j++){
          if(a==this.datalist[j].type){
            k.push(this.datalist[j])
          }
        }
        this.datalist = k;
        k = [];
      },
      showAll(){
        this.datalist = this.datalistAll.lotteryList;
      },
    //    zzz(baseSokectQueue){
		// 	    // for(var y = 0;y<this.itmeAll.length;y++){		
		// 		// }
    //     var lotteryDraw = baseSokectQueue.shift();
		// 		for(var a = 0;a<this.datalistAll.lotteryList.length;a++){
    //       // if(this.datalistAll.lotteryList[a].lotteryDraw.closeTime){}
    //       if(this.datalistAll.lotteryList[a].status!=8){
    //         this.datalistAll.lotteryList[a].lotteryDraw.closeTime -= 1000;
    //       }
          
		// 			if(lotteryDraw!=undefined){
		// 				if(this.datalistAll.lotteryList[a].id==lotteryDraw.lotteryId){
		// 					 this.datalistAll.lotteryList[a].lotteryDraw.closeTime = lotteryDraw.remainTime;
    //            this.datalistAll.lotteryList[a].lotteryDraw.lotteryNo = lotteryDraw.lotteryNo;
		// 					 this.datalistAll.lotteryList[a].lotteryDraw.result = lotteryDraw.result;
		// 				}
		// 			}
    //     }	
    // },
    tap(){
      var $this = this;
      $('#trend').on('click','li',function(event) {
        $(this).addClass("on").siblings().removeClass("on");
		// 购彩大厅 菜单当前选择项datatype值
		window._buycolor_selected_datatype = $(event.currentTarget).attr('datatype');
      });
      $('.lottery').on('click','.colornewAll',function(){
          if($(this).attr('status')!=1){
            $.tips("该彩种正在维护,请稍后再投注");return;
            }
            if($(this).attr('name') == 0) {
                setArgument("shouye 2 buyColor type", 3);
                window.location.href = "/view/buy/buycolor.html";
            } else {
                // return;
                // window.location.href = base.skip+'&&id='+$(this).attr('id')+'&&showType='+$(this).attr('name')+'&&lotteryName='+$(this).attr('lname');
                var str = {
                  'id':$(this).attr('id'),
                  'showType':$(this).attr('name'),
                  'lotteryName':$(this).attr('lname')
                }
                window.localStorage.setItem('forthecolor',JSON.stringify(str));
                window.localStorage.setItem('thisdatalist',$(this).attr('id'));
                $this.$store.state.islodershow='yes'
                // $this.$router.push({path:'/forthecolor'});
                $this.$router.push({path:'/furcolornew'});
            }
      });
    },
    colornew(){

      // $('.foottab ul li:nth-of-type(3) dl dd').css('color','red')
     
    },
		focusCurrMenu() {
			if (!window._buycolor_selected_datatype) window._buycolor_selected_datatype = 'all'
			var target = $(`#trend li[datatype="${ window._buycolor_selected_datatype }"]`);
			var $this = this;
			setTimeout(() => {
				if (window._buycolor_selected_datatype === 'all') {
					target.addClass('on');
				} else {
					target.click();
				}
				$this.lottery.fadeIn(200);
			}, 30);
		}
    },
	mounted:function() {
		var $this = this;
		this.trend = $('#trend');
		this.lottery = $('.lottery');
		this.trend
			.scrollLeft(window._trend_scrollLeft || 0)
			.on('scroll', function(event) {
				window._trend_scrollLeft = $this.trend.scrollLeft();
			});

      // 彩种table切换
       this.colornew();
       setTimeout(function(){
         $this.tap();
       },20)
      this.$nextTick(()=>{
          
      })
		
		// 页面加载时 购彩大厅 菜单 根据之前选择项的datatype值，选中该项菜单
		this.focusCurrMenu();
   
    },
    beforeCreate: function() {
      document.getElementsByTagName("body")[0].style.backgroundColor='#f5f5f5';
      
    },
    computed: {
      wrapperTop() {
        return (this.$store.state.headerHeight + 48) / 100 + 'rem';
      }
    },
    // beforeDestroy() {
    //    clearInterval(this.cache_timeout_id_);
    // },





  }
</script>
