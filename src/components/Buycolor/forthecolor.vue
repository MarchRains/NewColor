<template>
    <div id="dddd" style="height:100%;">
		<div class="models">
			<div class="modelsmin">
				<div class="top">提示</div>
				<div class="maidden">余额不足，下单失败，是否是充值？</div>
				<div class="footera">
					<span class="confirmqx">取消</span>
					<span class="enfirmqd">确定</span>
				</div>
			</div>
		</div>
        <div class="playing-hint-state">
			<div class="main-all">
				<div>玩法提示</div>
				<div>
					<h5>玩法提示</h5>
					<p class="p1">任选一个位置</p>
				</div>
				<div>
					<h5>中奖说明</h5>
					<p class="p2">所有号码卡号和加送OA附近送发</p>
				</div>
				<div>
					<h5>范例</h5>
					<p class="p3">高科技；精神电流计揭开了世界顶盖脊髓束及大概时间哦</p> 
				</div>
			</div>
			
		</div>
<!-- style="overflow: hidden;" -->
      <div id="layout" >
			<!--头部-->
			<div class="header_wrap host">
				<div class="header" :style="{'height':isLiuHai?'0.8rem':'0.5rem'}">
					<div class="set" id="backHeader" :style="{'padding-top':isLiuHai?'.35rem':'0rem'}">
						<i class="iconfont" ></i>
					</div>
					<h2 :style="{'padding-top':isLiuHai?'.3rem':'0rem'}"><span :style="{'padding-top':isLiuHai?'.27rem':'0rem'}" style="display: inline-block;width: .16rem;font-size: .12rem;overflow: hidden;position: absolute;line-height: .18rem;left:25%;top: 13%;">玩法</span><span class="isplayAlla" id="lotteryTitleFont">{{lotteryPlayMapmin[yi].name}}-{{playPlayMapmin[er].name}}<i class="iconfont"></i></span></h2>
					<div class="golist" id="show-confirm">
						<div class="gocolorlist" :style="{'padding-top':isLiuHai?'.3rem':'0rem'}">
							<img style="width: .2rem;" src="../../assets/source/imgs/gc.png" alt="">
							<span style="background: rgb(252, 0, 38);" :style="{'top':isLiuHai?'.3rem':'0rem'}"></span>
						</div>
					</div>
					<div class="longin longins" :style="{'padding-top':isLiuHai?'.3rem':'0rem'}">
						<span>助手</span>
					</div>
				</div>
			</div>
			<!--助手弹窗-->
			<div class="help" style="display: none;">
				<ul>
					<li id="bettingListA"><i class="iconfont"></i>投注记录</li>
					<li id="openListA">最近开奖</li>
					<li id="playwf">玩法说明</li>
					<li id="cllectLotteryA">收藏彩票</li>
					<li id="cancelCellectA" style="display:none;">取消收藏</li>
					<li id="cancelCellectAfenxiang" style="display:none;">分享赚钱</li>
				</ul>
			</div>
			<!--选择玩法-->
			<div class="selectrule" style="overflow-y: scroll; height: 80%">
				<h3>{{lotteryPlayMapmin[yi].name}}</h3>
				<ul id="firstPlayDiv">
					<li v-if="index==0" v-for="(item1,index) in lotteryPlayMapmin" @click="initSecondPlay(item1.id,index)" name="firstDivs" class="isclick">{{item1.name}}</li>
					<li v-else  @click="initSecondPlay(item1.id,index)" name="firstDivs" class="">{{item1.name}}</li>
				</ul>
				<h3>{{playPlayMapmin[er].name}}</h3>
				<ul id="secondPlayDiv">
					<li v-if="index1==0" v-for="(item2,index1) in playPlayMapmin" @click="showNums(item2.id,index1)" name="secondDivs" :id="item2.id"   class="isclick erjiplay">{{item2.name}}</li>
					<li v-else @click="showNums(item2.id,index1)" name="secondDivs"  :id="item2.id" class="erjiplay">{{item2.name}}</li>
				</ul>
			</div>
			<!--主内容区-->
			<div class="ocontent" id="ocontent" style="margin-top: 0rem;
    position: relative;
    overflow-y: scroll;
    ">
				<!--期数-->
				<div class="periods" :style="{'margin-top':isLiuHai?'0.8rem':'0.5rem'}" >
           
					<div class="periods-left" style="position: relative;">
           <div class="fgx examineAll" style="position:absolute;right: 40px;
    margin-top: 0.01rem;height:0.3rem;width:30px;background: transparent;"> 
            <img src="../../assets/source/imgs/xjt.png" alt="">
          </div>
						<h4 style="font-size: 13px;color:gray;margin-bottom: .05rem;"><span style="color:#111;font-size: 13px;">{{namemin}}</span>-第<span style="font-size: 13px;color:gray;" id="lotteryNoFont1">{{thisdatalist.lotteryDraw.shortNo | addZero}}</span>期</h4>
						<!-- 香港六合彩 -->
						<div v-if="thisdatalist.showType==1 && thisdatalist.lotteryDraw.closeTime > 0 && !!thisdatalist.lotteryDraw.result" id="lotteryResultFont" style="width: 100%;">
							<div style="display:flex" class="sxAlla">
								<div style="margin-right: .1rem;" v-if="index==5" v-for="(itemlhc,index) in thisdatalist.lotteryDraw.result.split(',')">
									<span v-if="red.indexOf(itemlhc) != '-1'" class="kaijsx hong"  style="    background: linear-gradient(90deg, rgb(237, 56, 72), rgb(251, 86, 90));"><span style="margin-left: .05rem;font-size: .13rem;">{{itemlhc}}</span><span style="color:#111;margin-left: 0.07rem;">+</span></span>
									<span v-else-if="bulr.indexOf(itemlhc) != '-1'" class="kaijsx lan" style="background: linear-gradient(90deg, rgb(53, 133, 242), rgb(52, 195, 242));"><span style="margin-left: .05rem;font-size: .13rem;">{{itemlhc}}</span><span style="color:#111;margin-left: 0.07rem;">+</span></span>
									<span v-else-if="green.indexOf(itemlhc) != '-1'" class="kaijsx lv"  style="    background: linear-gradient(90deg, rgb(43, 199, 146), rgb(134, 227, 109));"><span style="margin-left: .05rem;font-size: .13rem;">{{itemlhc}}</span><span style="color:#111;margin-left: 0.07rem;">+</span></span>
									<span style="color:#111" class="dongwu">{{zoo[itemlhc]}}</span>
								</div>
								<div v-else>
									<span v-if="red.indexOf(itemlhc) != '-1'" class="kaijsx hong" style="background: linear-gradient(90deg, rgb(237, 56, 72), rgb(251, 86, 90));">{{itemlhc}}</span>
									<span v-else-if="bulr.indexOf(itemlhc) != '-1'" class="kaijsx lan" style="background: linear-gradient(90deg, rgb(53, 133, 242), rgb(52, 195, 242));">{{itemlhc}}</span>
									<span v-else-if="green.indexOf(itemlhc) != '-1'" class="kaijsx lv" style="    background: linear-gradient(90deg, rgb(43, 199, 146), rgb(134, 227, 109));">{{itemlhc}}</span>
									<span style="color:#111;" class="dongwu" >{{zoo[itemlhc]}}</span>
								</div>
							</div>
						</div>
						<div v-else-if="thisdatalist.showType==1 && thisdatalist.lotteryDraw.result == ''" style="color:red;" id="lotteryResultFont">正在开奖...</div>
						<!-- thisdatalist 双色球 -->
						<div v-else-if="thisdatalist.showType==15 && thisdatalist.lotteryDraw.closeTime > 0 && !!thisdatalist.lotteryDraw.result" id="lotteryResultFont" style="">
							<span  id="shuangspansAll" v-if="index!=thisdatalist.lotteryDraw.result.split(',').length-1" v-for="(itemlhc,index) in thisdatalist.lotteryDraw.result.split(',')" class="spansAll">{{itemlhc}}</span>
							<span v-else class="spansAll " id="shuangspansAll" style="background:none;    background: linear-gradient(90deg, #34bdf2, #358af2)">{{itemlhc}}</span>
						</div>
						<div v-else-if="thisdatalist.showType==15 && thisdatalist.lotteryDraw.result == ''" style="color:red;" id="lotteryResultFont">正在开奖...</div>
						<!-- 分分二八 -->
						<div v-else-if="thisdatalist.showType==4 && thisdatalist.lotteryDraw.closeTime > 0 && !!thisdatalist.lotteryDraw.result" style=" " id="lotteryResultFont"><span class="spaneb">{{thisdatalist.lotteryDraw.result|ffeb('ge')}}</span>&nbsp;&nbsp;+&nbsp;&nbsp;<span class="spaneb">{{thisdatalist.lotteryDraw.result|ffeb('shi')}}</span>&nbsp;&nbsp;+&nbsp;&nbsp; <span class="spaneb">{{thisdatalist.lotteryDraw.result|ffeb('bai')}}</span>&nbsp;&nbsp; =&nbsp;&nbsp;
							<!-- <span>{{thisdatalist.lotteryDraw.result|ffeb('he')}}</span> -->
							<span class="spaneb" v-if="rednew.indexOf((+thisdatalist.lotteryDraw.result.split(',')[0])+(+thisdatalist.lotteryDraw.result.split(',')[1])+(+thisdatalist.lotteryDraw.result.split(',')[2])) != '-1'" style="background: none;background: linear-gradient(90deg, #fa3956, #ff6b52);">{{thisdatalist.lotteryDraw.result|ffeb('he')}}</span>
							<span class="spaneb" v-else-if="bulrnew.indexOf((+thisdatalist.lotteryDraw.result.split(',')[0])+(+thisdatalist.lotteryDraw.result.split(',')[1])+(+thisdatalist.lotteryDraw.result.split(',')[2])) != '-1'" style="background: none;    background: linear-gradient(90deg, #34bdf2, #358af2)">{{thisdatalist.lotteryDraw.result|ffeb('he')}}</span>
							<span class="spaneb" v-else-if="greennew.indexOf((+thisdatalist.lotteryDraw.result.split(',')[0])+(+thisdatalist.lotteryDraw.result.split(',')[1])+(+thisdatalist.lotteryDraw.result.split(',')[2])) != '-1'" style="background: none;    background: linear-gradient(90deg, #a9bc08, #2ab012)">{{thisdatalist.lotteryDraw.result|ffeb('he')}}</span>
							<span class="spaneb" v-else style="background: none;background-color:gray">{{thisdatalist.lotteryDraw.result|ffeb('he')}}</span>
						</div>
						<div v-else-if="thisdatalist.showType==4 && thisdatalist.lotteryDraw.result == ''" style="color:red;" id="lotteryResultFont">正在开奖...</div>
						<!-- 重亲时时彩 -->
						<div v-else-if="(thisdatalist.showType==5||thisdatalist.code == 'fc3d'||thisdatalist.code == 'gdklsf'||thisdatalist.code == 'cqklsf'||thisdatalist.code == 'js3d'||thisdatalist.code == 'pl3'||thisdatalist.code=='shssl' || thisdatalist.showType==2) && thisdatalist.lotteryDraw.closeTime > 0 && !!thisdatalist.lotteryDraw.result" id="lotteryResultFont" style="">
							<span style="margin-top: .02rem;width: .24rem;height: .24rem;line-height: .24rem;text-align: center;border-radius: 50%;font-size: .16rem;" v-for="itemqc in thisdatalist.lotteryDraw.result.split(',')" class="spansAll">{{itemqc}}</span>
						</div>
						<div v-else-if="(thisdatalist.showType==5||thisdatalist.code == 'fc3d'||thisdatalist.code == 'gdklsf'||thisdatalist.code == 'cqklsf'||thisdatalist.code == 'pl3'||thisdatalist.code=='shssl' || thisdatalist.showType==2) && thisdatalist.lotteryDraw.result == ''" id="lotteryResultFont" style="color:red;">
							正在开奖...
						</div>
							<!-- 急速快三 -->
						<div v-else-if="thisdatalist.showType==6 && thisdatalist.lotteryDraw.closeTime > 0 &&!!thisdatalist.lotteryDraw.result" style="" id="lotteryResultFont">
							<img v-for="itemks in thisdatalist.lotteryDraw.result.split(',')" style="width: .25rem;" alt=""  :src="uerAll+kaisan[itemks-1].logo.fileurl">
						</div>
						<div v-else-if="thisdatalist.showType==6 && thisdatalist.lotteryDraw.result == ''" style="color:red;" id="lotteryResultFont">
							正在开奖...
						</div>
            <!-- 四个带渐变色的彩种 -->
            <div v-else-if="thisdatalist.showType==3 && thisdatalist.lotteryDraw.closeTime > 0 && !!thisdatalist.lotteryDraw.result && (thisdatalist.code=='jspks' || thisdatalist.code=='bjpks' || thisdatalist.code=='xyft' || thisdatalist.code=='xysm')" style="font-size: 14px;color: red;" id="lotteryResultFont" v-html="msg(thisdatalist.lotteryDraw.result.split(','))"></div>
						<div v-else-if="thisdatalist.showType==3 && thisdatalist.lotteryDraw.result==''" style="font-size: 14px;color: red;" id="lotteryResultFont">正在开奖...</div>
							<!-- 急速pk十 -->
						<div v-else-if="thisdatalist.showType==3 && thisdatalist.lotteryDraw.closeTime > 0 && !!thisdatalist.lotteryDraw.result && (thisdatalist.code=='jspks' || thisdatalist.code=='bjpks' || thisdatalist.code=='xyft' || thisdatalist.code=='xysm')" style="width:62%;font-size: 14px;color: red;" id="lotteryResultFont">11{{thisdatalist.lotteryDraw.result.replace(/,/g,' ')}}</div>
						<div v-else-if="thisdatalist.showType==3 && thisdatalist.lotteryDraw.result==''" style="font-size: 14px;color: red;" id="lotteryResultFont">正在开奖...</div>
							<!-- 幸运扑克 -->
						<div v-else-if="thisdatalist.showType==11 && thisdatalist.lotteryDraw.closeTime > 0 && !!thisdatalist.lotteryDraw.result" style="" id="lotteryResultFont">
							<img style="display: inline-block;width: 25px;" :src="uerAll+puke[(+thisdatalist.lotteryDraw.result.split(',')[0].split('-')[0])-1][(+thisdatalist.lotteryDraw.result.split(',')[0].split('-')[1])-1].logo.fileurl"  class="first_img">
							<img style="display: inline-block;width: 25px;" :src="uerAll+puke[(+thisdatalist.lotteryDraw.result.split(',')[1].split('-')[0])-1][(+thisdatalist.lotteryDraw.result.split(',')[1].split('-')[1])-1].logo.fileurl"  class="first_img">
							<img style="display: inline-block;width: 25px;" :src="uerAll+puke[(+thisdatalist.lotteryDraw.result.split(',')[2].split('-')[0])-1][(+thisdatalist.lotteryDraw.result.split(',')[2].split('-')[1])-1].logo.fileurl"  class="first_img">
						</div>
						<div v-else-if="thisdatalist.showType==11 && thisdatalist.lotteryDraw.result == ''" style="" id="lotteryResultFont">
							<img style="display: inline-block;width: 25px;" src="../../statics/images/assets/texiao.png">
							<img style="display: inline-block;width: 25px;" src="../../statics/images/assets/texiao.png">
							<img style="display: inline-block;width: 25px;" src="../../statics/images/assets/texiao.png">
						</div>
					</div>
					<div class="periods-right">
						<div class="righttext">
							<h4 sytle="">距<span  sytle="" v-model="thisdatalist.lotteryDraw.shortNextNo" id="lotteryNoFont2">{{thisdatalist.lotteryDraw.shortNextNo | addZero}}</span>期截止
              
              </h4>
							<p >
                <span v-if="thisdatalist.code == 'ff11x5'||thisdatalist.code == 'jsssq'||thisdatalist.code == 'fflhc'||thisdatalist.code == 'js3d'" style="font-size: .25rem;" id="lotteryRemainTimeLabel"><p class="spans" style="font-family:QuartzEF;font-size: .25rem;">{{thisdatalist| mytimeAlljs('shi1')}}</p><p class="spans" style="font-family:QuartzEF;font-size: .25rem;">{{thisdatalist| mytimeAlljs('shi2')}}</p>:<p class="spans" style="font-family:QuartzEF;font-size: .25rem;">{{thisdatalist| mytimeAlljs('fen1')}}</p><p class="spans" style="font-family:QuartzEF;font-size: .25rem;">{{thisdatalist| mytimeAlljs('fen2')}}</p>:<p class="spans" style="font-family:QuartzEF;font-size: .25rem;">{{thisdatalist| mytimeAlljs('miao1')}}</p><p class="spans" style="font-family:QuartzEF;font-size: .25rem;">{{thisdatalist| mytimeAlljs('miao2')}}</p></span>
                <span v-else style="font-size: .25rem;" id="lotteryRemainTimeLabel"><p class="spans" style="font-family:QuartzEF;font-size: .25rem;">{{thisdatalist| mytimeAll('shi1')}}</p><p class="spans" style="font-family:QuartzEF;font-size: .25rem;">{{thisdatalist| mytimeAll('shi2')}}</p>:<p class="spans" style="font-family:QuartzEF;font-size: .25rem;">{{thisdatalist| mytimeAll('fen1')}}</p><p class="spans" style="font-family:QuartzEF;font-size: .25rem;">{{thisdatalist| mytimeAll('fen2')}}</p>:<p class="spans" style="font-family:QuartzEF;font-size: .25rem;">{{thisdatalist| mytimeAll('miao1')}}</p><p class="spans" style="font-family:QuartzEF;font-size: .25rem;">{{thisdatalist| mytimeAll('miao2')}}</p></span>
              </p>
						</div>
					</div>
				</div>
				<div class="heater" style="display: none; line-height: .38rem; overflow: hidden;">
					<div style="display: flex;" :style="[isguan ? {width: '6.5rem'} : null]">
						<span>期数</span>
						<span>开奖号码</span>
						<span v-if="isguan" style="padding: 0 .12rem;">冠亚和值</span>
						<span v-if="isguan" style="padding: 0 .12rem;">大小</span>
						<span v-if="isguan" style="padding: 0 .12rem;">单双</span>
					</div>
				</div>
				<div class="periodsmax" style="display: none;" @scroll="historyListScrollByHorizontal">
					<ul v-if="thisdatalist.showType==4" class="lisAll xglhc">
						<!-- 二八 -->
						<li v-if="index<=9" v-for="(itemlotter,index) in lottershi">
							<span>第{{itemlotter.shortNo | addZero}}期</span>
							<span class="afterAll">
								<div>{{itemlotter.result.split(',')[0]}}</div>+<div>{{itemlotter.result.split(',')[1]}}</div>+<div>{{itemlotter.result.split(',')[2]}}</div>=
								<div v-if="rednew.indexOf((+itemlotter.result.split(',')[0])+(+itemlotter.result.split(',')[1])+(+itemlotter.result.split(',')[2])) != -1" style="background: none;background: linear-gradient(90deg, #fa3956, #ff6b52);">{{itemlotter.result.split(',')|capitalize}}</div>
								<div v-else-if="bulrnew.indexOf((+itemlotter.result.split(',')[0])+(+itemlotter.result.split(',')[1])+(+itemlotter.result.split(',')[2])) != -1" style="background: none;    background: linear-gradient(90deg, #34bdf2, #358af2)">{{itemlotter.result.split(',')|capitalize}}</div>
								<div v-else-if="greennew.indexOf((+itemlotter.result.split(',')[0])+(+itemlotter.result.split(',')[1])+(+itemlotter.result.split(',')[2])) != -1" style="background: none;    background: linear-gradient(90deg, #a9bc08, #2ab012)">{{itemlotter.result.split(',')|capitalize}}</div>
								<div v-else style="background: none;   background-color:gray">{{itemlotter.result.split(',')|capitalize}}</div>


                <!-- <span class="spaneb" v-if="rednew.indexOf((+thisdatalist.lotteryDraw.result.split(',')[0])+(+thisdatalist.lotteryDraw.result.split(',')[1])+(+thisdatalist.lotteryDraw.result.split(',')[2])) != '-1'" style="background: none;background: linear-gradient(90deg, #fa3956, #ff6b52);">{{thisdatalist.lotteryDraw.result|ffeb('he')}}</span>
                <span class="spaneb" v-else-if="bulrnew.indexOf((+thisdatalist.lotteryDraw.result.split(',')[0])+(+thisdatalist.lotteryDraw.result.split(',')[1])+(+thisdatalist.lotteryDraw.result.split(',')[2])) != '-1'" style="background: none;    background: linear-gradient(90deg, #34bdf2, #358af2)">{{thisdatalist.lotteryDraw.result|ffeb('he')}}</span>
                <span class="spaneb" v-else-if="greennew.indexOf((+thisdatalist.lotteryDraw.result.split(',')[0])+(+thisdatalist.lotteryDraw.result.split(',')[1])+(+thisdatalist.lotteryDraw.result.split(',')[2])) != '-1'" style="background: none;    background: linear-gradient(90deg, #a9bc08, #2ab012)">{{thisdatalist.lotteryDraw.result|ffeb('he')}}</span>
                <span class="spaneb" v-else style="background: none;background-color:gray">{{thisdatalist.lotteryDraw.result|ffeb('he')}}</span> -->


								<section v-if="((+itemlotter.result.split(',')[0])+(+itemlotter.result.split(',')[1])+(+itemlotter.result.split(',')[2]))<=5">极小</section>
								<section v-else-if="((+itemlotter.result.split(',')[0])+(+itemlotter.result.split(',')[1])+(+itemlotter.result.split(',')[2]))>=22">极大</section>
								<section v-else-if="((+itemlotter.result.split(',')[0])+(+itemlotter.result.split(',')[1])+(+itemlotter.result.split(',')[2]))%2==0&&((+itemlotter.result.split(',')[0])+(+itemlotter.result.split(',')[1])+(+itemlotter.result.split(',')[2]))<=13">小双</section>
								<section v-else-if="((+itemlotter.result.split(',')[0])+(+itemlotter.result.split(',')[1])+(+itemlotter.result.split(',')[2]))%2!=0&&((+itemlotter.result.split(',')[0])+(+itemlotter.result.split(',')[1])+(+itemlotter.result.split(',')[2]))<=13">小单</section>
								<section v-else-if="((+itemlotter.result.split(',')[0])+(+itemlotter.result.split(',')[1])+(+itemlotter.result.split(',')[2]))%2==0&&((+itemlotter.result.split(',')[0])+(+itemlotter.result.split(',')[1])+(+itemlotter.result.split(',')[2]))>=14">大双</section>
								<section v-else>大单</section>
							</span>
						</li>
					</ul>
					<!-- 双色球 -->
					<ul v-else-if="thisdatalist.code=='ssq'||thisdatalist.code=='jsssq'">
						<li v-if="indexa<=9" v-for="(itemlotter,indexa) in lottershi">
							<span>第{{itemlotter.shortNo | addZero}}期</span>
							<span class="afterAll">
								<div v-if="index==itemlotter.result.split(',').length-1" v-for="(itemks,index) in itemlotter.result.split(',')" style=" background: linear-gradient(90deg, #34bdf2, #358af2);">{{itemks}}</div>
								<div v-else>{{itemks}}</div>
							</span>
						</li>
					</ul>
					<ul v-else-if="thisdatalist.code=='fc3d'">
						<!-- 福彩3D -->
						<li v-if="indexa<=9" v-for="(itemlotter,indexa) in lottershi">
							<span>第{{itemlotter.shortNo | addZero}}期</span>
							<span class="afterAll">
								<div v-for="(itemks,index) in itemlotter.result.split(',')" style="background: linear-gradient(90deg, #fa3956, #ff6b52);">{{itemks}}</div>
							</span>
						</li>
					</ul>
					
					
					<ul v-else-if="thisdatalist.showType==5||thisdatalist.code=='cqklsf'||thisdatalist.code=='gdklsf'||thisdatalist.code=='pl3'" class="lisAll xglhc">
						<!-- 快乐十分 -->
						<li v-if="indexa<=9" v-for="(itemlotter,indexa) in lottershi">
							<span>第{{itemlotter.shortNo | addZero}}期</span>
							<span class="afterAll">
								<div v-for="itemks in itemlotter.result.split(',')">{{itemks}}</div>
							</span>
						</li>
					</ul>
					<ul v-else-if="thisdatalist.showType==2" class="lisAll xglhc">	
						<!-- 时时彩 -->
						<li v-if="indexa<=9" v-for="(itemlotter,indexa) in lottershi">
							<span>第{{itemlotter.shortNo | addZero}}期</span>
							<span class="afterAll">
								<div v-for="itemlottermin in itemlotter.result.split(',')">{{itemlottermin}}</div>
								<section v-if="itemlotter.result.split(',')[itemlotter.result.split(',').length-2]%2=='0'&&itemlotter.result.split(',')[itemlotter.result.split(',').length-2]<=4">小双</section>
								<section v-else-if="itemlotter.result.split(',')[itemlotter.result.split(',').length-2]%2!='0'&&itemlotter.result.split(',')[itemlotter.result.split(',').length-2]<=4">小单</section>
								<section v-else-if="itemlotter.result.split(',')[itemlotter.result.split(',').length-2]%2!='0'&&itemlotter.result.split(',')[itemlotter.result.split(',').length-2]>4">大单</section>
								<section v-else="itemlotter.result.split(',')[itemlotter.result.split(',').length-2]%2=='0'&&itemlotter.result.split(',')[itemlotter.result.split(',').length-2]>4">大双</section>
								<!-- &nbsp;|&nbsp; -->
								<section v-if="itemlotter.result.split(',')[itemlotter.result.split(',').length-1]%2=='0'&&itemlotter.result.split(',')[itemlotter.result.split(',').length-1]<=4">小双</section>
								<section v-else-if="itemlotter.result.split(',')[itemlotter.result.split(',').length-1]%2!='0'&&itemlotter.result.split(',')[itemlotter.result.split(',').length-1]<=4">小单</section>
								<section v-else-if="itemlotter.result.split(',')[itemlotter.result.split(',').length-1]%2!='0'&&itemlotter.result.split(',')[itemlotter.result.split(',').length-1]>4">大单</section>
								<section v-else="itemlotter.result.split(',')[itemlotter.result.split(',').length-1]%2=='0'&&itemlotter.result.split(',')[itemlotter.result.split(',').length-1]>4">大双</section>
							</span>
						</li>
					</ul>	
					<ul v-else-if="thisdatalist.showType==1" class="lisAll xglhc">
						<!-- 香港六合彩 -->
						<li v-if="index<=9" v-for="(itemlotter,index) in lottershi" style="height: .5rem;">
							<span>第{{itemlotter.shortNo | addZero}}期</span>
							<span style="    margin-bottom: 15px;" class="lhchm afterAll">
								<div v-if="index==5" v-for="(itemlhc,index) in itemlotter.result.split(',')">
									<span v-if="red.indexOf(itemlhc) != '-1'" class="sxAll hong isjia"  style="position: relative;    background: linear-gradient(90deg, rgb(237, 56, 72), rgb(251, 86, 90));">{{itemlhc}}</span>
									<span v-else-if="bulr.indexOf(itemlhc) != '-1'" class="sxAll lan isjia" style=" position: relative;   background: linear-gradient(90deg, rgb(53, 133, 242), rgb(52, 195, 242));">{{itemlhc}}</span>
									<span v-else-if="green.indexOf(itemlhc) != '-1'" class="sxAll lv isjia"  style="position: relative;background: linear-gradient(90deg, rgb(43, 199, 146), rgb(134, 227, 109));">{{itemlhc}}</span>
									<span style="color:#111;font-size: .12rem;margin-right:0.1rem" class="dongwu">{{zoo[itemlhc]}}</span>
								</div>
								<div v-else>
									<span v-if="red.indexOf(itemlhc) != '-1'" class="sxAll hong" style="    background: linear-gradient(90deg, rgb(237, 56, 72), rgb(251, 86, 90));">{{itemlhc}}</span>
									<span v-else-if="bulr.indexOf(itemlhc) != '-1'" class="sxAll lan" style="    background: linear-gradient(90deg, rgb(53, 133, 242), rgb(52, 195, 242));">{{itemlhc}}</span>
									<span v-else-if="green.indexOf(itemlhc) != '-1'" class="sxAll lv" style="background: linear-gradient(90deg, rgb(43, 199, 146), rgb(134, 227, 109));">{{itemlhc}}</span>
									<span class="dwsxAll" style="margin-right:0.1rem;">{{zoo[itemlhc]}}</span>
								</div>
							</span>
						</li>
					</ul>
					<ul v-else-if="thisdatalist.showType==6" class="lisAll xglhc">
						<!-- 快三 -->
					<li v-if="indexa<=9" v-for="(itemlotter,indexa) in lottershi">
							<span>第{{itemlotter.shortNo | addZero}}期</span>
							<span class="szs afterAll">
								<img v-for="itemks in itemlotter.result.split(',')" alt="" :src="uerAll+kaisan[itemks-1].logo.fileurl">
								<section style='width: .8rem;'>和值：{{itemlotter.result.split(',')|capitalizenew}}</section>
							</span>
						</li>
					</ul>	
					<ul v-else-if="thisdatalist.showType==3 && (thisdatalist.code=='jspks' || thisdatalist.code=='bjpks' || thisdatalist.code=='xyft' || thisdatalist.code=='xysm')" class="lisAll xglhc" :style="[isguan ? {width: '6.5rem'} : null]">
						<!-- pk十 -->
						<li v-if="indexa<=9" v-for="(itemlotter,indexa) in lottershi">
							<span>第{{itemlotter.shortNo | addZero}}期</span>
							<span class="afterAll">
								<div  v-for="itemks in itemlotter.result.split(',')" :style="'border-radius:15%;text-shadow:0 1px #000, 1px 0 #000, -1px 0 #000, 0 -1px #000;background:none;background: linear-gradient(90deg, '+colorAll[itemks]+', '+colorAll[itemks+'1']+')'">{{Number(itemks)}}</div>
                <div v-if="isguan" style="margin: 0 .24rem;">{{Number(itemlotter.result.split(",")[0])+Number(itemlotter.result.split(",")[1])}}</div>
                <div v-if="isguan" style="margin: 0 .12rem;">{{(Number(itemlotter.result.split(",")[0])+Number(itemlotter.result.split(",")[1]))>11?"大":"小"}}</div>
                <div v-if="isguan" style="margin: 0 .12rem;">{{(Number(itemlotter.result.split(",")[0])+Number(itemlotter.result.split(",")[1]))%2!=0?"单":"双"}}</div>
							</span>

						</li>
					</ul>

					<ul v-else-if="thisdatalist.showType==3 && thisdatalist.code!='jspks' && thisdatalist.code!='pjpks'" class="lisAll xglhc">
						<!-- 上海时时乐 -->
						<li v-if="indexa<=9" v-for="(itemlotter,indexa) in lottershi">
							<span>第{{itemlotter.shortNo | addZero}}期</span>
							<span class="afterAll">
								<div v-for="itemks in itemlotter.result.split(',')">{{itemks}}</div>
							</span>
						</li>
					</ul>	
						
					<ul v-else-if="thisdatalist.showType==11" class="lisAll xglhc">
						<!-- 幸运扑克 -->
						<li v-if="indexa<=9" v-for="(itemlotter,indexa) in lottershi">
							<span>第{{itemlotter.shortNo | addZero}}期</span>
							<span class="szs puke afterAll">
								<i class="pukebj" style="display: block;width: 1.2rem;height: .25rem;padding-top: .05rem;background-color: #fa3955;border-radius: .16rem;">
									<img style="width: .25rem;height: .2rem;"  :src="uerAll+pokermin[(+itemlotter.result.split(',')[0].split('-')[0])-1][(+itemlotter.result.split(',')[0].split('-')[1])-1].logo.fileurl"  class="first_img">
									<img style="width: .25rem;height: .2rem;"  :src="uerAll+pokermin[(+itemlotter.result.split(',')[1].split('-')[0])-1][(+itemlotter.result.split(',')[1].split('-')[1])-1].logo.fileurl" class="first_img">
									<img style="width: .25rem;height: .2rem;"  :src="uerAll+pokermin[(+itemlotter.result.split(',')[2].split('-')[0])-1][(+itemlotter.result.split(',')[2].split('-')[1])-1].logo.fileurl" class="first_img">
								</i>
							</span>
						</li>
					</ul>	
				</div>
				<div class="fgx history" style="display: none;">
					点击查看更多历史开奖
				</div>
				
				<!--摇一摇-->
				<div class="shark">
					<div class="randow">
						摇一摇机选
					</div>
					<div class="balance" id="balanceP">
						余额：<span id="userBalanceSpan">{{moeyye.toFixed(2)}}</span>元
					</div>
					<div class="playing-hint">
						<img src="../../assets/source/imgs/wfts.png">
						玩法提示
					</div>
				</div>
				<!--选号-->
				<div class="selectnumber" id="bettingNumDiv">
					
					<ul v-if="xuanhaoAll[0].valueType==1&&xuanhaoAll[0].play.isShowOdds==1&&xuanhaoAll.length==1&&namemin!='极速六合彩'&&namemin!='香港⑥合彩'&&namemin!='分分六合彩'">
						<!-- 带赔率样式 -->
						<li v-for="(xuanhaomin,indexmax) in xuanhaoAll" class="levelclick" :dataId="xuanhaomin.id" :dataname="indexmax">
							<div class="lileft lileft-heng" style="display: none;">
								<span class="">特码</span>
								<span class="">赔率</span>
							</div>
							<div class="liright">
								<div v-show="daxiao" class="textselect">
									<span class="all">全</span>
									<span class="big">大</span>
									<span class="small">小</span>
									<span class="single">单</span>
									<span class="double">双</span>
									<span class="clear">清</span>
								</div>
								<div class="ball">
									<div v-for="(xuanhaominmin,index) in xuanhaomin.playValueList" class="ballspan" style="width:16.6%" :name="xuanhaominmin.playDetailId" :id="indexmax+'_'+index">
										<span class="">{{xuanhaominmin.value}}</span>
										<span class="lo-conright-odds">{{xuanhaominmin.odds*(1-(1960-((localUser!=null)?(+localUser.rebate):1960))/2000)|dateFmttime}}</span>
										<div class="zoology"></div>
									</div>
							    </div>
							</div>	
						</li>
					</ul>
          <!-- 六合彩专用带赔率选号模块 -->
          <ul v-else-if="xuanhaoAll[0].play.name=='特码B'||xuanhaoAll[0].play.name=='特码A'||xuanhaoAll[0].play.name=='正码-选号'">
						<!-- 带赔率样式 -->
						<li v-for="(xuanhaomin,indexmax) in xuanhaoAll" class="levelclick" :dataId="xuanhaomin.id" :dataname="indexmax">
							<div class="lileft lileft-heng" style="display: none;">
								<span class="">特码</span>
								<span class="">赔率</span>
							</div>
							<div class="liright">
								<div v-show="daxiao" class="textselect">
									<span class="all">全</span>
									<span class="big">大</span>
									<span class="small">小</span>
									<span class="single">单</span>
									<span class="double">双</span>
									<span class="clear">清</span>
								</div>
                  	<div class="ball">
									<div v-for="(xuanhaominmin,index) in xuanhaomin.playValueList" class="ballspan" style="width:16.6%" :name="xuanhaominmin.playDetailId" :id="indexmax+'_'+index">
										<span v-if="red.indexOf(xuanhaominmin.value)!='-1'" id="Red9" class="">{{xuanhaominmin.value}}</span>
                    <span v-else-if="bulr.indexOf(xuanhaominmin.value)!='-1'" id="Blue9" class="">{{xuanhaominmin.value}}</span>
                    <span v-else-if="green.indexOf(xuanhaominmin.value)!='-1'" id="Green9" class="">{{xuanhaominmin.value}}</span>
                    <!-- <span v-else class="">{{xuanhaominmin.value}}</span> -->
										<span class="lo-conright-odds">{{xuanhaominmin.odds*(1-(1960-((localUser!=null)?(+localUser.rebate):1960))/2000)|dateFmttime}}</span>
										<div class="zoology"></div>
									</div>
							    </div>
							</div>	
						</li>
					</ul>
          <!-- 三同号单选 -->
          <ul v-else-if="xuanhaoAll[0].play.name.indexOf('三同号单选')!=-1">
						<!-- 方框样式 -->
						<li v-for="(xuanhaomin,indexmax) in xuanhaoAll" class="levelclick" :dataId="xuanhaomin.id" :dataname="indexmax">
							<div class="lileft lileft-heng" style="display: none;">
								<span class="">混合</span>
								<span class="">赔率</span>
							</div>
							<div class="liright">
								<div v-show="daxiao" class="textselect">
									<span class="all">全</span>
									<span class="big">大</span>
									<span class="small">小</span>
									<span class="single">单</span>
									<span class="double">双</span>
									<span class="clear">清</span>
								</div>
								<div class="ball">
									<div v-for="(xuanhaominmin,index) in xuanhaomin.playValueList" class="ballspan" style="width:33.333333333333336%" :name="xuanhaominmin.playDetailId" :id="indexmax+'_'+index">
										<span v-if="xuanhaomin.play.isShowOdds==1"  class="ballspan-square" style="color: rgb(17, 17, 17); width: 1rem; height: .7rem; line-height: .3rem; padding-top: .1rem; box-sizing: border-box;">{{xuanhaominmin.value}}</span>
                    <span v-else  class="ballspan-square" style="color: rgb(17, 17, 17); width: 0.8rem; height: .4rem; line-height: .4rem; box-sizing: border-box;">{{xuanhaominmin.value}}</span>
										<span v-if="xuanhaomin.play.isShowOdds==1" class="lo-conright-odds" style=" width: .6rem; height: .2rem; line-height: .2rem; position: absolute; top: .43rem; left: 25%;">赔率:{{xuanhaominmin.odds*(1-(1960-((localUser!=null)?(+localUser.rebate):1960))/2000)|dateFmttime}}</span>
										<!-- <span class="lo-consaright-odds" style="">{{xuanhaominmin}}</span> -->
										<div class="zoology"></div>
									</div>
								</div>
							</div>
						</li>
					</ul>
          <!-- 不带赔率的样式 -->
					<ul v-else-if="xuanhaoAll[0].valueType==1&&xuanhaoAll[0].play.isShowOdds==0&&xuanhaoAll.length==1&&namemin!='极速六合彩'&&namemin!='香港⑥合彩'&&namemin!='分分六合彩'">
						<li v-for="(xuanhaomin,indexmax) in xuanhaoAll" class="levelclick" :dataId="xuanhaomin.id" :dataname="indexmax">
							<div class="lileft" style="display: none;">
								<span class="">包三</span>
							</div>
							<div class="liright">
								<div v-show="daxiao" class="textselect">
									<span class="all">全</span>
									<span class="big">大</span>
									<span class="small">小</span>
									<span class="single">单</span>
									<span class="double">双</span>
									<span class="clear">清</span>
								</div>
								<div class="ball">
									<div v-for="(xuanhaominmin,index) in xuanhaomin.playValueList" class="ballspan" style="width:16.666666666666668%" :name="xuanhaominmin.playDetailId" :id="indexmax+'_'+index">
										<span class="">{{xuanhaominmin.value}}</span>
										<span class="lo-conright-odds" style="display: none;">{{xuanhaominmin.odds*(1-(1960-((localUser!=null)?(+localUser.rebate):1960))/2000)|dateFmttime}}</span>
										<div class="zoology"></div>
									</div>
								</div>
							</div>	
						</li>		
					</ul>
           <!-- 六合彩专用不带赔率选号模块 -->
           	<ul v-else-if="xuanhaoAll[0].name=='四全中选码'||xuanhaoAll[0].name=='三全中选码'||xuanhaoAll[0].name=='三中二选码'||xuanhaoAll[0].name=='二全中选码'||xuanhaoAll[0].name=='二中特选码'||xuanhaoAll[0].name=='特串选码'||xuanhaoAll[0].name=='五中一选码'||xuanhaoAll[0].name=='六中一选码'||xuanhaoAll[0].name=='七中一选码'||xuanhaoAll[0].name=='八中一选码'||xuanhaoAll[0].name=='九中一选码'||xuanhaoAll[0].name=='十中一选码'
             ||xuanhaoAll[0].name.indexOf('不中选码')>-1
             ">
           <!--      -->
          <!-- <ul v-if="xuanhaoAll[0].valueType==1&&xuanhaoAll[0].play.isShowOdds==0&&xuanhaoAll.length==1&&xuanhaoAll[0].play.cid==4"> -->
						<li v-for="(xuanhaomin,indexmax) in xuanhaoAll" class="levelclick" :dataId="xuanhaomin.id" :dataname="indexmax">
							<div class="lileft" style="display: none;">
								<span class="">包三</span>
							</div>
							<div class="liright">
								<div v-show="daxiao" class="textselect">
									<span class="all">全</span>
									<span class="big">大</span>
									<span class="small">小</span>
									<span class="single">单</span>
									<span class="double">双</span>
									<span class="clear">清</span>
								</div>
								<div class="ball">
									<div v-for="(xuanhaominmin,index) in xuanhaomin.playValueList" class="ballspan" style="width:16.666666666666668%" :name="xuanhaominmin.playDetailId" :id="indexmax+'_'+index">
										<span v-if="red.indexOf(xuanhaominmin.value)!='-1'" id="Red9">{{xuanhaominmin.value}}</span>
                    <span v-else-if="bulr.indexOf(xuanhaominmin.value)!='-1'" id="Blue9">{{xuanhaominmin.value}}</span>
                    <span v-else-if="green.indexOf(xuanhaominmin.value)!='-1'" id="Green9">{{xuanhaominmin.value}}</span>
										<span class="lo-conright-odds" style="display: none;">{{xuanhaominmin.odds*(1-(1960-((localUser!=null)?(+localUser.rebate):1960))/2000)|dateFmttime}}</span>
										<div class="zoology"></div>
									</div>
								</div>
							</div>	
						</li>		
					</ul>
          <!-- 双色球 -->
          <ul v-else-if="namemin=='双色球'||namemin=='极速双色球'">
						<!-- 带位不带赔率圆形 -->
						<li v-for="(xuanhaomin,indexmax) in xuanhaoAll" class="levelclick" :dataId="xuanhaomin.id" :dataname="indexmax">
							<div class="lileft">
								<span class="">{{xuanhaomin.name}}</span>
							</div>
							<div class="liright">
								<div v-show="daxiao" class="textselect">
									<span class="all">全</span>
									<span class="big">大</span>
									<span class="small">小</span>
									<span class="single">单</span>
									<span class="double">双</span>
									<span class="clear">清</span>
								</div>
								<div v-if="indexmax==1" class="ball" id="blueball">
									<div v-for="(xuanhaominmin,index) in xuanhaomin.playValueList" class="ballspan" style="width:16.666666666666668%" :name="xuanhaominmin.playDetailId" :id="indexmax+'_'+index">
										<span style="color:blue"  class="">{{xuanhaominmin.value}}</span>
										<div class="zoology"></div>
									</div>
								</div>
                <div v-else class="ball" id="redball">
									<div v-for="(xuanhaominmin,index) in xuanhaomin.playValueList" class="ballspan" style="width:16.666666666666668%" :name="xuanhaominmin.playDetailId" :id="indexmax+'_'+index">
										<span  class="">{{xuanhaominmin.value}}</span>
										<div class="zoology"></div>
									</div>
								</div>
							</div>
						</li>
					</ul>
					<ul v-else-if="xuanhaoAll[0].valueType==1&&xuanhaoAll[0].play.isShowOdds==0&&xuanhaoAll.length>1">
						<!-- 带位不带赔率圆形 -->
						<li v-for="(xuanhaomin,indexmax) in xuanhaoAll" class="levelclick" :dataId="xuanhaomin.id" :dataname="indexmax">
							<div class="lileft">
								<span class="">{{xuanhaomin.name}}</span>
							</div>
							<div class="liright">
								<div v-show="daxiao" class="textselect">
									<span class="all">全</span>
									<span class="big">大</span>
									<span class="small">小</span>
									<span class="single">单</span>
									<span class="double">双</span>
									<span class="clear">清</span>
								</div>
								<div class="ball">
									<div v-for="(xuanhaominmin,index) in xuanhaomin.playValueList" class="ballspan" style="width:16.666666666666668%" :name="xuanhaominmin.playDetailId" :id="indexmax+'_'+index">
										<span  class="">{{xuanhaominmin.value}}</span>
										<div class="zoology"></div>
									</div>
								</div>
							</div>
						</li>
					</ul>
          
					<!-- <ul v-else-if="xuanhaoAll[0].valueType==2&&xuanhaoAll[0].play.cid==11&&xuanhaoAll[0].play.name=='包选'"> -->
					<ul v-else-if="xuanhaoAll[0].valueType==2&&xuanhaoAll[0].play.cid==11&&xuanhaoAll[0].play.isShowOdds==1">
						<!-- 幸运扑克 -->
						<li v-for="(xuanhaomin,indexmax) in xuanhaoAll" class="levelclick" :dataId="xuanhaomin.id" :dataname="indexmax">
							<div style="display:none" class="lileft lileft-heng">
								<span style="display:none" class=""></span>
							</div>
							<div class="liright">
								<div v-show="daxiao" class="textselect">
									<span class="all">全</span>
									<span class="big">大</span>
									<span class="small">小</span>
									<span class="single">单</span>
									<span class="double">双</span>
									<span class="clear">清</span>
								</div>
								<div class="ball" style=" box-sizing: border-box;">
									<!-- <div v-for="(xuanhaominmin,index) in xuanhaomin.playValueList" class="ballspan" style="width: .72rem; height: .88rem; margin: 0.12rem 0.05rem 0 0.05rem;" :name="xuanhaominmin.playDetailId" :id="indexmax+'_'+index">
										<span class="ballspan-square" style="display: inline-block; border: none; width: .72rem; height: .88rem; font-size: .16rem;">
											<img style="display: inline-block; width: .72rem; height: .88rem;" :data="xuanhaominmin.value" :src="phAll[index]">
										</span>
										<span style="background:none;line-height: .15rem;position: absolute;top: .7rem;left: 25%;" class="lo-conright-odds">{{xuanhaominmin.odds*(1-(1960-((localUser!=null)?(+localUser.rebate):1960))/2000)|dateFmttime}}</span>
									</div> -->
									<!-- <div v-for="(xuanhaominmin,index) in xuanhaomin.playValueList" class="ballspan" style="width:29%; height: 1.3rem; margin: 0.12rem 0.06rem 0 0.08rem;float:left" :name="xuanhaominmin.playDetailId" :id="indexmax+'_'+index"> -->
									<div v-for="(xuanhaominmin,index) in xuanhaomin.playValueList" class="ballspan vshowPic" style="width:33.33%;float:left" :name="xuanhaominmin.playDetailId" :id="indexmax+'_'+index">
										<!-- <span class="ballspan-square" style="display: inline-block; border: none; width:100%; height:100%; font-size: .16rem;"> -->
										<span class="ballspan-square vshowBD" style="display: inline-block; border: none;width:calc(100% - 0.1rem); height:calc(100% - 0.1rem); font-size: .16rem;">
											<img style="display: inline-block; width:100%; height:100%; " :data="xuanhaominmin.value" :src="uerAll+baoxuan[index].logo.fileurl">
										</span>
										<!-- <span style="background:none;position: absolute;top: 0.96rem;left: 35%;" class="lo-conright-odds">{{xuanhaominmin.odds*(1-(1960-((localUser!=null)?(+localUser.rebate):1960))/2000)|dateFmttime}}</span> -->
										<span style="background:none;position: absolute;bottom: 0.06rem;left: 35%;" class="lo-conright-odds">{{xuanhaominmin.odds*(1-(1960-((localUser!=null)?(+localUser.rebate):1960))/2000)|dateFmttime}}</span>
									</div>
								</div>	
							</div>
						</li>
					</ul>
          
					<ul v-else-if="xuanhaoAll[0].valueType==2&&xuanhaoAll[0].play.cid==11">
						<li v-for="(xuanhaomin,indexmax) in xuanhaoAll" class="levelclick" :dataId="xuanhaomin.id" :dataname="indexmax">
							<div style="display:none" class="lileft">
								<span style="display:none" class=""></span>
							</div>
							<div class="liright">
								<div v-show="daxiao" class="textselect">
									<span class="all">全</span>
									<span class="big">大</span>
									<span class="small">小</span>
									<span class="single">单</span>
									<span class="double">双</span>
									<span class="clear">清</span>
								</div>
								<div v-if="xuanhaomin.play.name=='同花单选'" class="ball" style="display: flex; justify-content: flex-start; box-sizing: border-box;">
									<!-- <div v-for="(xuanhaominmin,index) in xuanhaomin.playValueList" class="ballspan" style="width: .72rem; height: .88rem; margin: 0.12rem 0.05rem 0 0.05rem;" :name="xuanhaominmin.playDetailId" :id="indexmax+'_'+index"> -->
									<div v-for="(xuanhaominmin,index) in xuanhaomin.playValueList" class="ballspan htdanxuan" style="width: 25%;height:0.9rem;" :name="xuanhaominmin.playDetailId" :id="indexmax+'_'+index">
										<span class="ballspan-square" style="display: inline-block; border: none; width:calc(100% - 0.2rem); height:0.9rem; font-size: .16rem;">
											<img style="display: inline-block; width:100%; height:100%;" :data="xuanhaominmin.value" :src="uerAll+tonghuabaoxuan[index].logo.fileurl">
										</span>
									</div>
								</div>
								<div v-else-if="xuanhaomin.play.name=='顺子单选'" class="ball" style="display: flex; justify-content: space-around;  box-sizing: border-box;">
									<!-- <div v-for="(xuanhaominmin,index) in xuanhaomin.playValueList" class="ballspan" style="width:28%; height: .7rem; margin: 0.12rem 0.05rem 0 0.05rem;" :name="xuanhaominmin.playDetailId" :id="indexmax+'_'+index"> -->
									<div v-for="(xuanhaominmin,index) in xuanhaomin.playValueList" class="ballspan szShowPic" style="width:33.33%;height: .8rem" :name="xuanhaominmin.playDetailId" :id="indexmax+'_'+index">
										<span class="ballspan-square" style="display: inline-block; border: none; width:calc(100% - 0.1rem); height:calc(100% - 0.1rem); font-size: .16rem;">
											<img style="display: inline-block; width:100%; height:100%; " :data="xuanhaominmin.value" :src="uerAll+szdx[index].logo.fileurl">
										</span>
									</div>
								</div>
								<div v-else-if="xuanhaomin.play.name=='豹子单选'" class="ball" style="width:100%">
									<div v-for="(xuanhaominmin,index) in xuanhaomin.playValueList" class="ballspan" style="float:left;width:25%; height: .7rem;" :name="xuanhaominmin.playDetailId" :id="indexmax+'_'+index">
										<div class="ballspan-square BZDX" style="display: block;  padding:0 5px;  font-size: .16rem;border: none;">
											<span style="display:inline-block;width:100%;height: 100%;border:none" >
                        <img style="display:inline-block;width:100%;height: 100%;" :data="xuanhaominmin.value" :src="uerAll+thsdx[index].logo.fileurl">
                      </span>
                      
										</div>
									</div>
								</div>
								<div v-else-if="xuanhaomin.play.name=='对子单选'" class="ball" style="display: flex; justify-content: flex-start;  box-sizing: border-box;">
									<!-- <div v-for="(xuanhaominmin,index) in xuanhaomin.playValueList" class="ballspan" style="width: .72rem; height: .5rem; margin: 0.12rem 0.05rem 0 0.05rem;" :name="xuanhaominmin.playDetailId" :id="indexmax+'_'+index"> -->
									<div v-for="(xuanhaominmin,index) in xuanhaomin.playValueList" class="ballspan" style="width: 20%; height: .7rem;" :name="xuanhaominmin.playDetailId" :id="indexmax+'_'+index">
										<span class="ballspan-square" style="display: inline-block; border: none; width: calc(100% - 0.1rem); height: calc(100% - 0.1rem); font-size: .16rem;">
											<img style="display: inline-block; width: 100%; height: 100%;" :data="xuanhaominmin.value"  :src="uerAll+duizidanx[index].logo.fileurl">
										</span>
									</div>
								</div>
								<div v-else-if="xuanhaomin.play.name=='同花顺单选'" class="ball" style="display: flex; justify-content: flex-start;  box-sizing: border-box;">
									<!-- <div v-for="(xuanhaominmin,index) in xuanhaomin.playValueList" class="ballspan" style="width: .72rem; height: .88rem; margin: 0.12rem 0.05rem 0 0.05rem;" :name="xuanhaominmin.playDetailId" :id="indexmax+'_'+index"> -->
									<div v-for="(xuanhaominmin,index) in xuanhaomin.playValueList" class="ballspan" style="width: 25%; height: .98rem; " :name="xuanhaominmin.playDetailId" :id="indexmax+'_'+index">
										<span class="ballspan-square" style="display: inline-block; border: none; width: calc(100%-0.rem); height: calc(100%-0.rem); font-size: .16rem;">
											<img style="display: inline-block; width: .72rem; height: .88rem;" :data="xuanhaominmin.value"  :src="uerAll+tonghuashun[index].logo.fileurl">
										</span>
									</div>
								</div>
								<div v-else class="ball" style="display: flex; justify-content: flex-start;  box-sizing: border-box;">
									<div v-for="(xuanhaominmin,index) in xuanhaomin.playValueList" class="ballspan" style="  width: 20%; height: .76rem" :name="xuanhaominmin.playDetailId" :id="indexmax+'_'+index">
										<span class="ballspan-square" style="display: inline-block; border: none; width: .5rem; height: .66rem; font-size: .16rem;">
											<img style="display: inline-block; width: .5rem; " :data="xuanhaominmin.value"  :src="uerAll+renxuan[index].logo.fileurl">
										</span>
									</div>
								</div>
							</div>
						</li>			
					</ul>
          <!-- 文字模式 -->
          <ul v-else-if="xuanhaoAll[0].valueType==2&&xuanhaoAll[0].playValueList[0].value.split('').length==1&&xuanhaoAll[0].play.isShowOdds!=1">
						<li v-for="(xuanhaomin,indexmax) in xuanhaoAll" class="levelclick" :dataId="xuanhaomin.id" :dataname="indexmax">
							<div v-if="xuanhaoAll.length>=2" class="lileft" style="">
								<span class="">{{xuanhaomin.name}}</span>
							</div>
              <div v-else class="lileft" style="display: none;">
								<span class="">{{xuanhaomin.name}}</span>
							</div>
							<div class="liright">
								<div v-show="daxiao" class="textselect">
									<span class="all">全</span>
									<span class="big">大</span>
									<span class="small">小</span>
									<span class="single">单</span>
									<span class="double">双</span>
									<span class="clear">清</span>
								</div>
								<div class="ball">
									<div  v-for="(xuanhaominmin,index) in xuanhaomin.playValueList" class="ballspan" style="width:16.666666666666668%" :name="xuanhaominmin.playDetailId" :id="indexmax+'_'+index">
										<span class="">{{xuanhaominmin.value}}</span>
										<div class="zoology"></div>
									</div>
								</div>
							</div>
						</li>
					</ul>
					<ul v-else-if="xuanhaoAll[0].valueType==2&&xuanhaoAll.length>1&&xuanhaoAll[0].play.name.indexOf('第')!=-1||xuanhaoAll[0].play.name.indexOf('大小')!=-1">
						<!-- 圆形大小单双 -->
						<li v-for="(xuanhaomin,indexmax) in xuanhaoAll" class="bor levelclick" :dataId="xuanhaomin.id" :dataname="indexmax">
							<div class="lileft">
								<span class="">{{xuanhaomin.name}}</span>
							</div>
							<div class="liright">
								<div v-show="daxiao" class="textselect">
									<span class="all">全</span>
									<span class="big">大</span>
									<span class="small">小</span>
									<span class="single">单</span>
									<span class="double">双</span>
									<span class="clear">清</span>
								</div>
								<div class="ball">
									<div  v-for="(xuanhaominmin,index) in xuanhaomin.playValueList" class="ballspan" style="width:16.666666666666668%" :name="xuanhaominmin.playDetailId" :id="indexmax+'_'+index">
										<span class="">{{xuanhaominmin.value}}</span>
										<div class="zoology"></div>
									</div>
								</div>
							</div>
						</li>

					</ul>
					<ul v-else-if="xuanhaoAll[0].valueType==2&&xuanhaoAll.length==1&&xuanhaoAll[0].play.name.indexOf('第')!=-1||xuanhaoAll[0].play.name.indexOf('大小')!=-1||xuanhaoAll[0].play.name.indexOf('军')!=-1">
						<li v-for="(xuanhaomin,indexmax) in xuanhaoAll" class="levelclick" :dataId="xuanhaomin.id" :dataname="indexmax">
							<div class="lileft" style="display: none;">
								<span class="">{{xuanhaomin.name}}</span>
							</div>
							<div class="liright">
								<div v-show="daxiao" class="textselect">
									<span class="all">全</span>
									<span class="big">大</span>
									<span class="small">小</span>
									<span class="single">单</span>
									<span class="double">双</span>
									<span class="clear">清</span>
								</div>
								<div class="ball">
									<div  v-for="(xuanhaominmin,index) in xuanhaomin.playValueList" class="ballspan" style="width:16.666666666666668%" :name="xuanhaominmin.playDetailId" :id="indexmax+'_'+index">
										<span class="">{{xuanhaominmin.value}}</span>
										<div class="zoology"></div>
									</div>
								</div>
							</div>
						</li>
					</ul>
          
					<!-- <ul v-else-if="xuanhaoAll[0].valueType!=1&&xuanhaoAll[0].playValueList[0].value!='鼠'"> -->
					<ul v-else-if="xuanhaoAll[0].valueType!=1&&xuanhaoAll[0].play.name!='特肖-生肖'&&xuanhaoAll[0].play.name!='正肖-生肖'&&xuanhaoAll[0].play.name!='平特一肖'">
						<!-- 方框样式 -->
						<li v-for="(xuanhaomin,indexmax) in xuanhaoAll" class="levelclick" :dataId="xuanhaomin.id" :dataname="indexmax">
							<div class="lileft lileft-heng" style="display: none;">
								<span class="">混合</span>
								<span class="">赔率</span>
							</div>
							<div class="liright">
								<div v-show="daxiao" class="textselect">
									<span class="all">全</span>
									<span class="big">大</span>
									<span class="small">小</span>
									<span class="single">单</span>
									<span class="double">双</span>
									<span class="clear">清</span>
								</div>
								<div class="ball">
									<div v-for="(xuanhaominmin,index) in xuanhaomin.playValueList" class="ballspan" style="width:33.333333333333336%" :name="xuanhaominmin.playDetailId" :id="indexmax+'_'+index">
										<span v-if="xuanhaomin.play.isShowOdds==1"  class="ballspan-square" style="color: rgb(17, 17, 17); width: 1rem; height: .7rem; line-height: .3rem; padding-top: .1rem; box-sizing: border-box;">{{xuanhaominmin.value}}</span>
                    <span v-else  class="ballspan-square" style="color: rgb(17, 17, 17); width: 1rem; box-sizing: border-box;">{{xuanhaominmin.value}}</span>
										<span v-if="xuanhaomin.play.isShowOdds==1" class="lo-conright-odds" style=" width: .6rem; height: .2rem; line-height: .2rem; position: absolute; top: .43rem; left: 25%;color:red;">赔率:{{xuanhaominmin.odds*(1-(1960-((localUser!=null)?(+localUser.rebate):1960))/2000)|dateFmttime}}</span>
										<!-- <span class="lo-consaright-odds" style="">{{xuanhaominmin}}</span> -->
										<div class="zoology"></div>
									</div>
								</div>
							</div>
						</li>
					</ul>
					<ul v-else-if="xuanhaoAll[0].valueType!=1&&xuanhaoAll[0].play.name=='特肖-生肖'||xuanhaoAll[0].play.name=='正肖-生肖'||xuanhaoAll[0].play.name=='平特一肖'">
						<!-- 方框样式带号码 -->
						<li v-for="(xuanhaomin,indexmax) in xuanhaoAll" class="levelclick" :dataId="xuanhaomin.id" :dataname="indexmax">
							<div class="lileft lileft-heng" style="display: none;">
								<span class="">种类</span>
								<span class="">赔率</span>
							</div>
							<div class="liright">
								<div v-show="daxiao" class="textselect">
									<span class="all">全</span>
									<span class="big">大</span>
									<span class="small">小</span>
									<span class="single">单</span>
									<span class="double">双</span>
									<span class="clear">清</span>
								</div>
								<div class="ball">
									<div v-for="(xuanhaominmin,index) in xuanhaomin.playValueList" class="ballspan" style="width:33.333333333333336%" :name="xuanhaominmin.playDetailId" :id="indexmax+'_'+index">
										<span class="ballspan-square" style="color: rgb(17, 17, 17); width: 1rem; height: .7rem; line-height: .3rem; padding-top: 0rem; box-sizing: border-box;">{{xuanhaominmin.value}}</span>
										<span class="lo-conright-odds" style=" width: .6rem; height: .2rem; line-height: .2rem; position: absolute; top: .3rem; left: 25%;color:#fa3956;">赔率:{{xuanhaominmin.odds*(1-(1960-((localUser!=null)?(+localUser.rebate):1960))/2000)|dateFmttime}}</span><!-- parseFloat(xuanhaominmin.odds).toFixed(2) -->
										<div class="zoology" v-if="animalsCollections.data[index].val.split(',').length==5" style="left: 15%;">
											<em style="font-style:normal" v-for="dw in animalsCollections.data[index].val.split(',')">{{dw}}&nbsp;</em>
											<!-- <em>23</em>&nbsp;
											<em>35</em>&nbsp;
											<em>47</em>&nbsp; -->
										</div>
                    <div class="zoology" v-else>
											<em style="font-style:normal" v-for="dw in animalsCollections.data[index].val.split(',')">{{dw}}&nbsp;</em>
											<!-- <em>23</em>&nbsp;
											<em>35</em>&nbsp;
											<em>47</em>&nbsp; -->
										</div>
									</div>
								</div>	
							</div>	
						</li>	
					</ul>
				</div>

				<!--六合彩底部固定注单金额-->
				<div class="flextext-wrap" style="display: none;">
					<div class="flextext">
						<span></span><span></span>
					</div>
				</div>
			</div>
			<!--选择位数列表-->
			<div class="numlength" v-show="isShowBack" style=" position: absolute;">
				<ul id='seletdifit'>
					<!-- <li v-for="(weishumina,index) in weishuAll">
						<span class="" name="foot_a" :id="weishumina"></span><ruby>{{index|wei}}</ruby>
					</li> -->
					<li>
						<section><span class="" name="foot_a" id="W"></span><ruby>万位</ruby></section>
					</li>
					<li>
						<section><span class="" name="foot_a" id="Q"></span><ruby>千位</ruby></section>
					</li>
					<li>
						<section><span class="" name="foot_a" id="B"></span><ruby>百位</ruby></section>
					</li>
					<li>
						<section><span class="" name="foot_a" id="S"></span><ruby>十位</ruby></section>
					</li>
					<li>
						<section><span class="" name="foot_a" id="G"></span><ruby>个位</ruby></section>
					</li>
				</ul>
			</div>
			<!--底部-->
			<div  class="footer" id="footed">
				<div class="footer-left isclick">机选</div>
				<!-- <div class="footer-content" id="payInfo_hl">
					<div class="pspan">
						<span></span>
						<p><span></span> <span></span></p>
					</div>
					<div class="txt" id="lhcInput" style="display: block;">
						预设金额<input type="number" pattern="[0-9]*" value="2" placeholder="2" id="presetAmount">元
					</div>
				</div> -->
				<!-- seleceAllarray|jointAlls(xuanhaoAll.length) -->
				<div v-show="tz" class="footer-content" id="payInfo_hl">
					<div class="pspan"><span>{{bettingValue.replace(/-/g, " ")}}</span><p>共<span>{{Math.floor(bettingNum)}}</span>注&nbsp;&nbsp;<span>{{(bettingNum*2)|toFixeda}}</span>元</p></div>
					<div class="txt" id="lhcInput" style="display: none;">
						预设金额<input type="number" pattern="[0-9]*" value="2" placeholder="2" id="presetAmount">元
					</div>
				</div>
				<!-- <div v-else v-show="tz" class="footer-content" id="payInfo_hl">
					<div class="pspan"><span>{{seleceAllarray|jointAll}}</span><p>共<span>{{seleceAllarray|jointAllmaxw}}</span>注&nbsp;&nbsp;<span>{{seleceAllarray|jointAllmax}}</span>元</p></div>
					<div class="txt" id="lhcInput" style="display: none;">
						预设金额<input type="number" pattern="[0-9]*" value="2" placeholder="2" id="presetAmount1">元
					</div>
				</div> -->
				<div class="footer-right">
					投注
				</div>
			</div>
			<!--弹出赔率窗口-->
			<div class="loss" style="">
				<h3>注单设定</h3>
				<div class="losstext">
					<p v-show="faska" class="bb-num">
						<span>赔率：<font id="oddsFont">{{loss_peilv|dateFmttime}}</font></span>
						<span style="color: #999;">返利：<font id="rebatSpan">0.0</font>%</span>
					</p>
					<div v-show="faska" class="losscontent">
						<div class="text">
							<div class="sort"></div>
							<div class="yellow"></div>
						</div>

					</div>
					<div class="moneytext">
						<div class="alltext">
							<span>单注金额</span>
							<input style=" border: none;border-bottom: 1px solid gainsboro;outline: none;    width: 37%;border-bottom: 0.01rem solid gainsboro;text-align: center;font-size: .16rem;line-height: .24rem;border-radius: 0;" pattern="[0-9]*" :dataId="index" maxlength="6" class="gl-txt" id="amountInput" type="tel" value="2.00" placeholder=""  onkeyup="value=value.replace(/[\W]/g,'')">
							<div class="unit">
								<span class="isclick ishuise">元</span>
								<span class="ishuise">角</span>
								<span class="ishuise">分</span>
							</div>
						</div>
						<ul class="moneylist">
							<li name="10">10元</li>
							<li name="100">100元</li>
							<li name="1000">1000元</li>
							<li name="5000">5000元</li>
							<li name="10000">10000元</li>
							<li name="50000">50000元</li>
						</ul>
						<p>注数：<span id="bettingNumSpan">{{bettingNum}}</span>注</p>
						<p>总额：<span id="totalAmountFont">{{danzuze|dateFmttime}}</span>元</p>
						<p>若中奖,单注最高中：<span id="bettingAmountSpan">{{maxwin | toFloor}}</span>元</p>
					</div>
				</div>
				<div class="btn">
					<div class="butt default">取消</div>
					<div class="butt primary">确定</div>
				</div>
			</div>
		</div>
        <div class="shade" style="display: none;"></div>
        <div class="oshade" style="display:none"></div>
		<div class="ostouzu" style="display:none;width: 100%;height: 100%;background: rgba(0, 0, 0, 0.6);position: fixed;top: 0;z-index: 300;"></div>
		<div class="modelAll">
			<div class="modelmin">
				<div class="modeltop">玩法规则</div>
				<div class="wfgz" style="overflow: scroll; height: 2.5rem;">
					<wfplay :playAll="playPlayMapmin" :indexxb="er"></wfplay>	
				</div>
			</div>
		</div>
    
    <div class="tixied">
          <div>
              <p >复制链接分享:</p>
              <p ref="nuimin" style="margin-bottom: 0.2rem;">{{url}}</p>
              <p @click="copyArticleed"> 复制</p>
          </div>
          <div></div>
    </div>

    
		<!-- <transition name="slide"> -->
        <router-view></router-view>
    <!-- </transition> -->
    </div>
</template>
<script>
import wfplay from "./commonality.vue";
// import FastClick from 'fastclick'
export default {
  data() {
    return {
      isguan:false,
      falss: true,
      // 一及玩法
      lotteryPlayMap: {},
      lotteryPlayMapmin: [],
      // 二级玩法
      playPlayMap: {},
      playPlayMapmin: [],
      yi: 0,
      er: 0,
      thisdatalist: {},
      red: [],
      bulr: [],
      green: [],
      colorAll: {},
      zoo: {},
      animalsCollections: [],
      flowers: [],
      flowersnew: [],
      flowersnewAll: [],
      lottershi: [],
      rednew: [],
      bulrnew: [],
      greennew: [],
      dsweis: 0,
      dshaoma: 0,
      duoshao: {},
      // xiangxi:{}
      xuanhaoAll: [],
      phAll: [],
      phAllth: [],
      straight: [],
      leopard: [],
      pair: [],
      sequence: [],
      potional: [],
      isShowBack: false,
      // 显示选中哪些号码
      seleceAll: {},
      seleceAll1: {},
      seleceAll2: {},
      seleceAll3: {},
      seleceAll4: {},
      seleceAll5: {},
      seleceAlllength: 0,
      tz: false,
      seleceAllarray: {},
      daxiao: true,
      weishuAll: [],
      arrayxhsz: [],
      bettingNum: 0,
      checkNum: 0,
      localChooseQueue: [],
      randomChooseIndexs: "",
      playDetailIds: "",
      localUser: {},
      bettingOdds: "",
      bettingValue: "",
      bettingRebate: 0.0,
      bettingAmount: 0,
      loss_peilv: 0,
      maxwin: 0,
      danzuze: 0,
      fanlvs: 0.0,
      moeyye: 0.00,
      faska: false,
      istc: true,
      isfeng: 100,
      isfengatty: [],
      //二级玩法Id
      playIdM: 0,
      ff: {},
      pathnew:'/buycolorConfirm',
      pathnewtouzu:'/bettingRecordtouzuyi',
      pathkjls:'',
      pathrule:'',
      pathshare:'',
      n:[],
      namemin:'',
      url:'',
      uerAll:base.domain,
      puke:[],
      kaisan:[],
      pokermin:[],
      baoxuan:[],
      tonghuabaoxuan:[],
      shunzidanxuan:[],
      toungshunzidanxuanmin:[],
      shunzhimin:[],
      tonghuadanxuan:[],
      shunzidanxuan:[],
      szdx:[],
      thsdx:[],
      tonghuashun:[],
      duizidanx:[],
      renxuan:[],
      zaiti:{},
      // startX:0,
      // startY:0,
	heater: null,
	periodsmax: null
    };
  },

  created() {
    if(!!this.$store.state.isphtuAll){
      this.puke = this.$store.state.isphtuAll.result
      this.kaisan = this.$store.state.isphtuAll.k3
      this.pokermin = this.$store.state.isphtuAll.poker
      this.baoxuan = this.$store.state.isphtuAll.value[3]
      // this.baoxuan.push();this.baoxuan.push();this.baoxuan.push();this.baoxuan.push();this.baoxuan.push();
      // this.tonghuabaoxuan = this.$store.state.isphtuAll.value[5]
      this.tonghuabaoxuan.push(this.$store.state.isphtuAll.value[5][0]);this.tonghuabaoxuan.push(this.$store.state.isphtuAll.value[5][1]);this.tonghuabaoxuan.push(this.$store.state.isphtuAll.value[5][2]);this.tonghuabaoxuan.push(this.$store.state.isphtuAll.value[5][3]);
      // this.shunzidanxuan = this.$store.state.isphtuAll.value[2]
    }else{
      this.$store.state.isphtuAll = base.getApi().phtupian().data
      this.puke = this.$store.state.isphtuAll.result
      this.kaisan = this.$store.state.isphtuAll.k3
      this.pokermin = this.$store.state.isphtuAll.poker
      this.baoxuan = this.$store.state.isphtuAll.value[3]
      this.tonghuabaoxuan.push(this.$store.state.isphtuAll.value[5][0]);this.tonghuabaoxuan.push(this.$store.state.isphtuAll.value[5][1]);this.tonghuabaoxuan.push(this.$store.state.isphtuAll.value[5][2]);this.tonghuabaoxuan.push(this.$store.state.isphtuAll.value[5][3]);
      // this.shunzidanxuan = this.$store.state.isphtuAll.value[2]
    }

    this.renxuan = this.$store.state.isphtuAll.value[0]
    // this.renxuan.splice(0, 0, this.$store.state.isphtuAll.value[0][9])
    // this.zaiti = this.renxuan[2]
    // this.renxuan[2] = this.renxuan[9]
    // this.renxuan[9] = this.zaiti
    this.tonghuashun = this.$store.state.isphtuAll.value[4]
    //对子单选
    this.duizidanx = this.$store.state.isphtuAll.value[1]
    
    // var tmp = this.$store.state.isphtuAll.value[1][0];
    // this.duizidanx[0] = this.$store.state.isphtuAll.value[1][9]
    // this.duizidanx.splice(0, 0, this.$store.state.isphtuAll.value[1][9])
    // this.duizidanx[9] = tmp
    //同花单选
    this.szdx = [];
    this.thsdx = [];

    for(var g = 0;g<this.$store.state.isphtuAll.value[2].length;g++){
      if(g<=12){
        this.thsdx.push(this.$store.state.isphtuAll.value[2][g])
      }else{
        this.szdx.push(this.$store.state.isphtuAll.value[2][g])
      }
    }

   
    // if(this.$store.state.islodershow=='yes'){
    //     $('.model').show();
    //     // $('#spanimg').find('img').attr('src','./static/timg.gif')
    //     this.$store.state.islodershow='no'
    // }
    
    // setTimeout(function(){
    //   $('.model').hide();
    // },100)
    // FastClick.attach(document.getElementById("dddd"));
    // var isimg = require('../../assets/images/dohua.gif')
    // $('body').append('<div style="width: 100%;height: 100%;background-color: rgba(0,0,0,.5);position: absolute;top: 0;left: 0;z-index: 9999;" class="model"><img style="" src="'+isimg+'"></div>')
    var $this = this;
    // changeLocal();
    var yhuserId = JSON.parse(myStorage.getItem("currentUser"));
    // if(!!yhuserId){
    //   base.getApi().getBalace(yhuserId.id)
    // }
    
    // setTimeout(function(){
      
 
          window.localStorage.removeItem("songshuj");
          if (
            window.localStorage.getItem("currentUser") != "null" &&
            window.localStorage.getItem("currentUser") != null
          ) {
            // window.changeLocal();
            // if(!!yhuserId){
            //   base.getApi().getBalace(yhuserId.id)
            // }
            $this.localUser = JSON.parse(window.localStorage.getItem("currentUser"));
            // $this.moeyye = $this.localUser.balance.toFixed(2);
            $this.moeyye = base.getApi().getBalace(yhuserId.id).user.balance
          } else {
            $this.localUser = null;
            $this.moeyye = 0.00;
          }
          // if(this.$store.state.iserji){
          // 	this.yi = this.$store.state.iserji.yi;
          // 	this.er = this.$store.state.iserji.er;
          // }


          
 
          var $thisnwea = $this;
          // $this.lotteryPlayMap = JSON.parse(myStorage.getItem("lotteryPlayMap"));
          // $this.playPlayMap = JSON.parse(myStorage.getItem("playPlayMap"));

          var adds = $this.change("forthecolor").id;
          var lotteryw=this.$store.state.lotteryCollctions[adds];
 
          $this.namemin = $this.change("forthecolor").lotteryName
          
   
          //console.log($this.change("forthecolor").lotteryName);
          // $this.lotteryPlayMapmin = $this.lotteryPlayMap[adds];
          $this.lotteryPlayMapmin = lotteryw.yijiwanfaAll;
          // $this.playPlayMapmin = $this.playPlayMap[$this.lotteryPlayMapmin[$this.yi].id];
          $this.playPlayMapmin = $this.lotteryPlayMapmin[$this.yi].erjiwanfa


          // this.thisdatalist = this.change('thisdatalist');
          for (var f = 0;f < $this.$store.getters.getcolorsj.data.lotteryList.length;f++) {
            if ($this.$store.getters.getcolorsj.data.lotteryList[f].id ==window.localStorage.getItem("thisdatalist")) {
              $this.thisdatalist = $this.$store.getters.getcolorsj.data.lotteryList[f];
              //console.log($this.thisdatalist)
              break;
            }
          }
          // this.thisdatalist = this.$store.getters.getcolorsj.data.lotteryList[window.localStorage.getItem('thisdatalist')]

          // this.istotpoc =
          // 	this.cache_timeout_id_ = setInterval(function(){
          // 		$thisnwea.zzz(baseSokectQueue);
          //   },1000);

 //判断颜色
          const b = ["01","02","07","08","12","13","18","19","23","24","29","30","34","35","40","45","46"]; //hong
          const c = ["03","04","09","10","14","15","20","25","26","31","36","37","41","42","47","48"]; //lan
          const d = [
            "05",
            "06",
            "11",
            "16",
            "17",
            "21",
            "22",
            "27",
            "28",
            "32",
            "33",
            "38",
            "39",
            "43",
            "44",
            "49"
          ]; //lv
          $this.red = b;
          $this.bulr = c;
          $this.green = d;
          $this.weishuAll = [""];

          if (!!$this.$store.state.animalsCollections) {
            $this.animalsCollections = $this.$store.state.animalsCollections;
          } else {
            // var result = base.getApi().getAnimalsCollections();
            //  window.localStorage.setItem('isdonwu',JSON.stringify(animalsCollections))
            var result = JSON.parse(window.localStorage.getItem('isdonwu')) 
            if (result.code == 200) {
              $this.$store.state.animalsCollections = result;
              $this.animalsCollections = result;
            }
          }
          //this.animalsCollections=base.getApi().getAnimalsCollections()
          const zoonew = {};
          $this.animalsCollections.data.forEach(function(item) {
            item.val.split(",").forEach(function(itemmin) {
              zoonew[itemmin] = item.name;
            });
          });
          $this.zoo = zoonew;

          // 颜色渲染
          $this.colorAll["01"] = "#ffc411";
          $this.colorAll["011"] = "#ffdd11";
          $this.colorAll["02"] = "#3585f2";
          $this.colorAll["021"] = "#34c3f2";
          $this.colorAll["03"] = "#808080";
          $this.colorAll["031"] = "#a3a3a3";
          $this.colorAll["04"] = "#ff8a00";
          $this.colorAll["041"] = "#ffa200";
          $this.colorAll["05"] = "#17d6df";
          $this.colorAll["051"] = "#17dfd8";
          $this.colorAll["06"] = "#5203fd";
          $this.colorAll["061"] = "#5379e1";
          $this.colorAll["07"] = "#bbbbbb";
          $this.colorAll["071"] = "#d7d7d7";
          $this.colorAll["08"] = "#ed3848";
          $this.colorAll["081"] = "#fb565a";
          $this.colorAll["09"] = "#7f471d";
          $this.colorAll["091"] = "#a95f2e";
          $this.colorAll["10"] = "#2bc792";
          $this.colorAll["101"] = "#86e36d";
          // setTimeout(function(){
          //   if($this.thisdatalist.code.indexOf('xypk')>-1){
              $this.getFlower();
          //   }
          // },10)
          


          //十期
          // this.lottershi = base.getApi().getLotteryDraw(adds).data.lotteryDrawList.slice(0, 10);
  
          if(!!$this.$store.state.ishistorydraw[adds]){
              $this.lottershi = $this.$store.state.ishistorydraw[adds];
          }else{
            if(adds==33){
               $this.lottershi = [{lottery:{addTime:1505396664000,beginTime:0,cid:null,code:"ffssc",color:"#000000",cycleType:1,endTime:10,hotDescribe:"",id:27,isHot:1,isPrivate:1,level:1,logo:null,logoId:505,lotteryDraw:null,name:"分分时时彩",noType:1,orderId:3,pid:0,remark:"1分钟一期",showType:2,status:1,type:1},lotteryId:27,lotteryNo:"201807050604",nextNo:"201807050605",nextTime:1530756240000,queryHistory:false,remainTime:-3752,result:"2-2,4-12,3-5",shortNextNo:"0605",shortNo:"0604",status:1,tempResult:"",type:1 }];
            }else{
               $this.lottershi = [{lottery:{addTime:1505396664000,beginTime:0,cid:null,code:"ffssc",color:"#000000",cycleType:1,endTime:10,hotDescribe:"",id:27,isHot:1,isPrivate:1,level:1,logo:null,logoId:505,lotteryDraw:null,name:"分分时时彩",noType:1,orderId:3,pid:0,remark:"1分钟一期",showType:2,status:1,type:1},lotteryId:27,lotteryNo:"201807050604",nextNo:"201807050605",nextTime:1530756240000,queryHistory:false,remainTime:-3752,result:"1,1,1,1,1",shortNextNo:"0605",shortNo:"0604",status:1,tempResult:"",type:1 }];
            }
           
            $('.model').show();
                if(this.$store.state.islodershow=='yes'){
                    $('.model').show();
                    this.$store.state.islodershow='no'
                }
                
                setTimeout(function(){
                    $('.model').hide();
                },100)
            // setTimeout(function(){
                 base.getApi().getLotteryDraw1(adds).then((res)=>{
                  //  alert("ddd")
                          $this.$store.state.ishistorydraw[adds] = res.data.lotteryDrawList;
                            $this.lottershi = $this.$store.state.ishistorydraw[adds];
                 
                })
              
    
            // },100);
             
          }
 
          

          const lv = [1, 4, 7, 10, 16, 19, 22, 25];
          const lan = [2, 5, 8, 11, 17, 20, 23, 26];
          const hong = [3, 6, 9, 12, 15, 18, 21, 24];
          $this.rednew = hong;
          $this.bulrnew = lan;
          $this.greennew = lv;
          // 选号渲染
          // $this.duoshao = JSON.parse(myStorage.getItem("playDetailMap"));
          // this.xiangxi = JSON.parse(myStorage.getItem("playDetailValueMap"));
          // dsweis:0,
          // dshaoma:0,

          // 初始化列表

          // $this.xuanhaoAll = $this.duoshao[$this.playPlayMapmin[$this.er].id];
          $this.xuanhaoAll = $this.playPlayMapmin[$this.er].sanjiwanfa
  
          // this.isfeng = this.xuanhaoAll[0]
          if ($this.xuanhaoAll[0].play.noSplit != undefined) {
            $this.isfeng = $this.xuanhaoAll[0].play.noSplit;
          }
 
          if ($this.xuanhaoAll[0].play.isBase == 1) {
            $this.checkNum = $this.xuanhaoAll[0].play.baseAttr.split(",").length;
          }

          $this.xuanhaoxi($this.xuanhaoAll);

          var reg = new RegExp("^[0-9]*$");
           // $this.xuanhaoAll = $this.duoshao[$this.playPlayMapmin[$this.er].id];
          // $this.xuanhaoAll = $this.playPlayMapmin[$this.er].sanjiwanfa
          if ($this.xuanhaoAll[0].play.isBase == 1) {
            $this.isShowBack = true;
          } else {
            $this.isShowBack = false;
          }
          // 判断大小单双清是否显示
          // else if(this.duoshao[this.playPlayMapmin[0].id][0].play.isShowOdds == 1){
          // 	this.daxiao = false;
          // }
          if ($this.xuanhaoAll[0].play.isOnly == 1) {
            $this.daxiao = false;
          } else if ($this.xuanhaoAll[0].maxNum) {
            $this.daxiao = false;
          } else if (
            $this.xuanhaoAll[0].valueType == 2
          ) {
            $this.daxiao = false;
          } else if (
           $this.xuanhaoAll[0].valueType == 1 &&
            !reg.test(
              $this.xuanhaoAll[0].playValueList[0].value
            ) 
          ) {
            $this.daxiao = false;
          } else {
            $this.daxiao = true;
          }
          // $this.xuanhaoAll = $this.duoshao[$this.playPlayMapmin[$this.er].id];
          $this.xuanhaoAll = $this.playPlayMapmin[$this.er].sanjiwanfa
          // if(){}

          if($this.thisdatalist.code=='xypk'){
              $('.ball span').css('border','none')
            // $this.phAll.push(require("../../assets/source/assets/DuiZiBaoXuan.png"));
            // $this.phAll.push(require("../../assets/source/assets/BaoZiBaoXuan.png"));
            // $this.phAll.push(require("../../assets/source/assets/TongHuaBaoXuan.png"));
            // $this.phAll.push(require("../../assets/source/assets/ShunZiBaoXuan.png"));
            // $this.phAll.push(
            //   require("../../assets/source/assets/TongHuaShunBaoXuan.png")
            // );

            // $this.phAllth.push(require("../../assets/source/assets/HeiTao.png"));
            // $this.phAllth.push(require("../../assets/source/assets/HongTao.png"));
            // $this.phAllth.push(require("../../assets/source/assets/MeiHua.png"));
            // $this.phAllth.push(require("../../assets/source/assets/FangKuai.png"));

            // $this.sequence.push(require("../../assets/source/assets/HeiTaoShunZi.png"));
            // $this.sequence.push(require("../../assets/source/assets/HongTaoShunZi.png"));
            // $this.sequence.push(require("../../assets/source/assets/MeiHuaShunZi.png"));
            // $this.sequence.push(
            //   require("../../assets/source/assets/FangKuaiShunZi.png")
            // );
            // for (var i = 0; i < 12; i++) {
            //   $this.straight.push(require("../../assets/source/assets/sz" + i + ".png"));
            // }

            // for (var t = 0; t < 13; t++) {
            //   $this.leopard.push(require("../../assets/source/assets/bz" + t + ".png"));
            // }

            // for (var y = 0; y < 13; y++) {
            //   $this.pair.push(require("../../assets/source/assets/dz" + y + ".png"));
            // }
            // for (var z = 0; z < 13; z++) {
            //   $this.potional.push(require("../../assets/source/assets/rx" + z + ".png"));
            // }
          }
          
          // if($this.thisdatalist.code.indexOf("ks")>-1){
            
          // }
          $this.weishuAll = ["W", "Q", "B", "S", "G"];
          $this.playIdM = $this.playPlayMapmin[0].id;
          $this.$store.state.playIdMa = $this.playIdM;
    // },100)
    // setTimeout(function(){
      if(!!window.localStorage.getItem('lujin')){
        $this.pathnew = window.localStorage.getItem('lujin');
        window.localStorage.removeItem('lujin');
      }
      if(!!window.localStorage.getItem('istouzu')){
        $this.pathnewtouzu = window.localStorage.getItem('istouzu');
        window.localStorage.removeItem('istouzu');
      }
      //历史开奖
      if(!!window.localStorage.getItem('islskj')){
        $this.pathkjls = window.localStorage.getItem('islskj');
      }
      3
      //玩法说明
      if(!!window.localStorage.getItem('iswfsm')){
        $this.pathrule = window.localStorage.getItem('iswfsm');
      }
      //分享赚钱
      if(!!window.localStorage.getItem('isfxzq')){
        $this.pathshare = window.localStorage.getItem('isfxzq');
      }
      //购彩查看更多
      if(!!window.localStorage.getItem('isclickgoucai')){
       $this.pathgoucai = window.localStorage.getItem('isclickgoucai')
      }
    // },100)

    
    
  },
  // beforeDestroy() {
  // 	clearInterval(this.cache_timeout_id_);
  // },
  updated() {},
   computed:{
       isid(){
          return this.$store.state.isid;
        },
      isLiuHai(){
        return this.$store.state.isLiuhai;
      }
    },
	mounted: function() {
		this.selectrule = $('.selectrule');

	this.heater = $('.heater');
  this.periodsmax = $('.periodsmax');
  //判断是内嵌和H5分别写样式
    if (this.$store.state.isid) {
      $(".footer").css("bottom","0rem")
      $(".help").css("top","")
    } else {
       $(".footer").css("bottom","0")
        $(".help").css("top","0.62rem")
    }

    var $this = this;
    // setTimeout(function(){
        $this.excelfile();
        $this.firstPlayDiv();
        $this.footerheid();
        //动态获取宽度
        var baoxuanPIC = $('.vshowPic').width();
        $('.vshowPic').height(baoxuanPIC*1.2);
        //同花单选
        var htdanxuanPIC = $('.htdanxuan').width();
        $('.htdanxuan').html(htdanxuanPIC*1.1)
    // },101)
    
    // this.footerwei();
    if ($this.xuanhaoAll[0].play.isBase == 1) {
      $this.footerwei();
    }
    
    // setTimeout(function() {
      $this.isclickplay();
    // }, 101);
 
  var $this = this;
  // setTimeout(function(){
     $this.$nextTick(()=>{
        FastClick.attach(document.getElementById("dddd"));
        var erjiplay= document.getElementsByClassName("erjiplay");
    var erjilotid=localStorage.getItem("erjilotidd")
    //补充二级玩法选中样式
    if (this.playPlayMapmin.length != 1) {//如果二级玩法不止一个
      for (var i = 0; i < $("#secondPlayDiv li").length; i++) {
        $($("#secondPlayDiv li")[i]).removeClass("isclick");
      }
      $($("#secondPlayDiv li")).each(function(){
        if($(this).attr("id") == erjilotid){
          $(this).addClass("isclick");
        }
      });
    }
        // if(erjilotid){
        //   for(var i=0;i<erjiplay.length;i++){
        //      erjiplay[i].classList.remove('isclick')
        //   }
        //   for(var i=0;i<erjiplay.length;i++){

        //     if(erjilotid==erjiplay[i].id){
            
        //       erjiplay[i].classList.add('isclick')

        //       return
        //     }
        //   }
        // }
        // 内容的高度 = body高度-兼容抬高的高度-头部的高度-底部的高度-10px；
        document.getElementsByClassName("ocontent")[0].style.height=document.getElementsByTagName("body")[0].offsetHeight
        -document.getElementsByClassName("header_wrap host")[0].offsetHeight-document.getElementById("footed").offsetHeight+"px";
        
      //9.28修改替换上面的内容中间样式bug
      // var u = navigator.userAgent, app = navigator.appVersion;
			// var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
			// var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
			// if (isAndroid) {
			// 	$('#ocontent').css({
			// 		'height':$(window).height()-$('.header_wrap').height()-$('.pde').height()
			// 	})
			// }
			// if (isIOS) {
			// 	$('#ocontent').css({
			// 		'height':$(window).height()-$('.header_wrap').height()-$('.pde').height()
			// 	})
			// }
        //console.log(document.getElementsByClassName("ocontent")[0].style.height);
        //console.log(document.getElementsByTagName("body")[0].offsetHeight);  
      })
  // },200)
     this.isonlystyle()
    window.localStorage.setItem("nowShortNo",this.thisdatalist.lotteryDraw.nextNo)
    window.localStorage.setItem("caipiaoName",this.thisdatalist.name)

    
    
    
	},
	
  
		methods: {
			isonlystyle(){
			},
			historyListScrollByHorizontal(event) {
				this.heater.scrollLeft(this.periodsmax.scrollLeft());
			},

			// 显示二级彩种菜单
			showSelectrule() {
        //动态获取header的高度
        // let topH = $(".header").eq(1).outerHeight(true);
        // this.selectrule.css("top",topH)
        this.selectrule.css({top: this.$store.state.isLiuHai ? '.9rem' : '.4rem'});
			},
			// 隐藏二级彩种菜单
			hideSelectrule() {
				this.selectrule.css({top: '-6rem'});
			},

    copyArticleed(){
      var range = document.createRange();
      var nuimin = this.$refs.nuimin;
      range.selectNode(nuimin);

      var selection = window.getSelection();
      if (selection.rangeCount > 0) selection.removeAllRanges();
      selection.addRange(range);

      document.execCommand("copy");
      $.tips("复制成功");
      $('.tixied').hide();
    },
    isdxds(){
      var reg = new RegExp("^[0-9]*$");
      // $this.xuanhaoAll = $this.playPlayMapmin[$this.er].sanjiwanfa
      if (this.xuanhaoAll[0].play.isOnly == 1) {
        this.daxiao = false;
      } else if (this.xuanhaoAll[0].maxNum) {
        this.daxiao = false;
      } else if (
        this.xuanhaoAll[0].valueType == 2
      ) {
        this.daxiao = false;
      } else if (
        this.xuanhaoAll[0].valueType == 1 &&
        !reg.test(
          this.xuanhaoAll[0].playValueList[0].value
        )
      ) {
        this.daxiao = false;
      } else {
        this.daxiao = true;
      }
    },
    footerheid() {
      var $this = this;
      $(".foottab").css("display", "none");
    },
    getFlower() {
      // for (var i = 1; i < 7; i++) {
      //   this.flowers.push(
      //     require("../../assets/source/assets/saizi_0" + i + ".png")
      //   );
      // }
      // var ss = [];
      // for (var y = 1; y < 5; y++) {
      //   for (var v = 1; v < 14; v++) {
      //     ss.push(
      //       require("../../assets/source/assets/" + y + "-" + v + ".png")
      //     );
      //   }
      //   this.flowersnew.push(ss);
      //   ss = [];
      // }
      // var zz = [];
      // for (var h = 1; h < 5; h++) {
      //   for (var l = 1; l < 14; l++) {
      //     zz.push(
      //       require("../../statics/images/dice/poker_" + h + "_" + l + ".png")
      //     );
      //   }
      //   this.flowersnewAll.push(zz);
      //   zz = [];
      // }
    },
    excelfile() {
      if (window.localStorage.getItem("buycolorAll")) {
        if (
          JSON.parse(window.localStorage.getItem("buycolorAll"))[0] != undefined
        ) {
          $("#show-confirm").show();
          this.istc = true;
          window.localStorage.setItem('istrue','yes')
        } else {
          $("#show-confirm").hide();
          this.istc = false;
          window.localStorage.setItem('istrue','no')
        }
      }

      var $this = this;
      var fals = true;
      $(".examineAll").click(function() {
        $(".history").toggle();
        $(".periodsmax").toggle();
        //		$('.heater').toggle();
        if (fals) {
          fals = false;
          $(".heater").show();
          $(this)
            .find("img")
            .attr("src", require("../../assets/source/imgs/sjt.png"));
        } else {
          fals = true;
          $(".heater").hide();
          $(this)
            .find("img")
            .attr("src", require("../../assets/source/imgs/xjt.png"));
        }
      });
      $(".shade").click(function() {
        $('.longin').addClass('longins')
        $this.falss = true;
		  $this.hideSelectrule();
        $(this).css("display", "none");
        $('#lotteryTitleFont .iconfont').css('transform','rotate(0deg)')
        // $(".longin").on("click", function() {
        //   // $('.oshade').toggle();
        //   // $('.help').toggle();
        //   $this.assistant();
        // });
        // setTimeout(function(){
        //   if(!!window.localStorage.getItem('isyiji')){
        //     var yi =  window.localStorage.getItem('isyiji');
        //     var er =  window.localStorage.getItem('iserji');
        //     $this.initSecondPlay(yi.split('-')[0],yi.split('-')[1]);//一级点击
        //     $this.showNums(er.split('-')[0],er.split('-')[1])//二级点击
        //  }
        // },10)
        //  $this.showNums($this.lotteryPlayMapmin[$this.yi].id,0)//二级点击
        $('#secondPlayDiv li').eq(0).click();
      });
      
      $("#backHeader .iconfont").click(function() {

        
        setTimeout(function(){
         $('.title').click();
        },200)
        if(!!$this.$store.state.istankuang){
          if($this.$store.state.istankuang){
              // if( window.localStorage.getItem('istrue')=='yes'){
              $(".maidden").html("退出页面会清空已选注单，是否退出？");
              $(".models").show();
              $("html,body").addClass("ovf");
              $(".confirmqx").click(function() {
                $(".models").hide();
                $("html,body").removeClass();
              });
              $(".enfirmqd").click(function() {
                window.localStorage.removeItem("isyiji");
                window.localStorage.removeItem("iserji");
                window.localStorage.removeItem("isyiji");
                window.localStorage.removeItem("iserji");
                window.localStorage.removeItem("buycolorAll");
                window.localStorage.removeItem("iswfsm");
                $this.$store.state.followupsj = '';
                $this.$store.state.followupsjon = '';  
                $this.$store.state.istankuang = false;
                $("html,body").removeClass();
                window.localStorage.removeItem("buycolorAll");
                if ($this.$store.state.homegocolor) {
                  $this.$router.go(-3);
                  $this.$store.state.homegocolor = false;
                } else {
                  $this.$router.go(-1);
                }
              });
          }else{
              window.localStorage.removeItem("isyiji");
              window.localStorage.removeItem("iserji");
              window.localStorage.removeItem("buycolorAll");
              window.localStorage.removeItem("iswfsm");
              $this.$store.state.followupsj = '';
              $this.$store.state.followupsjon = '';  
              if ($this.$store.state.homegocolor) {
                $this.$router.go(-3);
                $this.$store.state.homegocolor = false;
              } else {
                $this.$router.go(-1);
              }
          }
        }else{
              window.localStorage.removeItem("isyiji");
              window.localStorage.removeItem("iserji");
              window.localStorage.removeItem("buycolorAll");
              window.localStorage.removeItem("iswfsm");
              $this.$store.state.followupsj = '';
              $this.$store.state.followupsjon = '';  
              if ($this.$store.state.homegocolor) {
                $this.$router.go(-3);
                $this.$store.state.homegocolor = false;
              } else {
                $this.$router.go(-1);
              }
        }
        // if ($this.istc) {
        
        // } else {
          
        // }
      });

      // 一注两元
      var czId = $this.change("forthecolor").id;
      $("#bettingNumDiv").on("click", ".ballspan", function() {//号码点击事件
      console.log(czId);
        if (czId == 33) {
          var str = 0;
          if (!$(this).find("span:first-child img").hasClass("isclickimg")) {
            if($(this).hasClass('vshowPic')){
              $(this).find("span:first-child").removeClass("vshowBD");
            }
            $(this).find("span:first-child img").addClass("isclickimg");
            if ($this.seleceAllarray[$(this).parents(".levelclick").attr("dataId")] != undefined) {
              $this.seleceAllarray[$(this).parents(".levelclick").attr("dataId")][$(this).index()] = $(this).find("span:first-child img").attr("data");
            } else {
              $this.seleceAllarray[$(this).parents(".levelclick").attr("dataId")] = {};
              $this.seleceAllarray[$(this).parents(".levelclick").attr("dataId")][$(this).index()] = $(this).find("span:first-child img").attr("data");
            }
            $this.arrayxhsz[
              $(this).attr("id").split("_")[0]][$(this).attr("id").split("_")[1]] = $(this).find("span:first-child img").attr("data");
            $this.arithmetic();
            if ($this.isfeng == 0) {
              var strAll = {};
              // strAll.peilv = ($this.xuanhaoAll[(+$(this).attr('id').split('_')[0])].playValueList[(+$(this).attr('id').split('_')[1])].odds*(1-(1960-((this.localUser!=null)?(+this.localUser.rebate):1960))/2000)).toFixed(2);
              if ($(this).find(".lo-conright-odds").html().indexOf("赔率") > -1) {
                strAll.peilv = (+$(this).find(".lo-conright-odds").html().split(":")[1]).toFixed(2);
              } else {
                strAll.peilv = (+$(this).find(".lo-conright-odds").html()).toFixed(2);
              }
              strAll.fanlv = $this.bettingRebate;
              strAll.zushu = $this.bettingNum / ($this.isfengatty.length + 1);
              strAll.zonge = $this.danzuze / $this.bettingNum;
              strAll.danmax = $this.maxwin;
              strAll.xzhm = $(this).find("span:first-child").children("img").attr("data");
              strAll.wanfa = $this.lotteryPlayMapmin[$this.yi].name +"-" + $this.playPlayMapmin[$this.er].name;
              strAll.isdanzu = "";
              strAll.isdanzuval = ($this.danzuze / $this.bettingNum).toFixed(2);
              // strAll.islotterId = $this.playDetailIds;
              strAll.islotterId =
                $this.playDetailIds.split("-")[
                  $this.playDetailIds.split("-").length - 2
                ] + " ";
              strAll.isplayerId = $this.playIdM;
              $this.isfengatty.push(strAll);
            }
            
          } else {
            delete $this.seleceAllarray[
              $(this).parents(".levelclick").attr("dataId")][$(this).index()];
            // $this.arrayxhsz[$(this).attr('id').split('_')[0]].splice([$(this).attr('id').split('_')[1]],1)
            $this.arrayxhsz[$(this).attr("id").split("_")[0]][$(this).attr("id").split("_")[1]] = "";
            if(
                $(this).hasClass('vshowPic')
            ){
                 $(this).find("span:first-child").addClass("vshowBD");
              }
            $(this).find("span:first-child img").removeClass("isclickimg");
            $this.arithmetic();
            for (var t = 0; t < $this.isfengatty.length; t++) {
              if (
                $this.isfengatty[t].xzhm ==
                $this.xuanhaoAll[
                  +$(this)
                    .attr("id")
                    .split("_")[0]
                ].playValueList[
                  +$(this)
                    .attr("id")
                    .split("_")[1]
                ].value
              ) {
                $this.isfengatty.splice(t, 1);
                break;
              }
            }
          }
          $this.tz = true;
          // $this.seleceAllarray = a;
          // $this.seleceAlllength = Object.keys($this.seleceAll).length;

          for (var key in $this.seleceAllarray) {
            str += Object.keys($this.seleceAllarray[key]).length;

          }
          $this.seleceAlllength = str;
          // $this.arithmetic();
  
        }else {
          var str = 0;
          if (!$(this).find("span:first-child").hasClass("isclick")) {//是否选中当前号码
            // TODO 在前面加上了禁止超过 maxNum 的逻辑，理论上这段逻辑废弃
            var m = 0;
            for(var a = 0; a < $this.arrayxhsz[0].length; a++) {
              if($this.arrayxhsz[0][a] != '') {
                m++;
              }
            }
            if(m >= $this.xuanhaoAll[0].maxNum) { // 集合大于最大选号
              console.warn('超了');
              $.tips('最多只能选择 ' + $this.xuanhaoAll[0].maxNum + ' 个号码');
              return;
            }
            // seleceAll
            // a[$(this).index()] = $(this).find("span:first-child").html()
            // $this.seleceAll[$(this).index()] = $(this).find("span:first-child").html()
            $(this).find(".zoology em").css('color','white');
            if ($this.xuanhaoAll[0].valueType == 2) {
              $(this).find("span").addClass("isclick");
            } else {
              $(this).find("span:first-child").addClass("isclick");
            }
            if(czId == 37||czId == 41){
              if($(this).attr('id').split('_')[0]==1){
                 $(this).find("span:first-child").addClass("isclickblue");
              }
            }
            // if($(this).find("span:first-child").hasClass("isclick"))
            // console.log($(this).find("span:first-child").attr("id")=="Red9");
            if($(this).find("span:first-child").attr("id")=="Red9"){
              $(this).find("span:first-child").addClass("isclickred");
            }
            if($(this).find("span:first-child").attr("id")=="Blue9"){
              $(this).find("span:first-child").addClass("isclickblue");
            }
            if($(this).find("span:first-child").attr("id")=="Green9"){
              $(this).find("span:first-child").addClass("isclickgreen");
            }
            
            $this.arrayxhsz[$(this).attr("id").split("_")[0]][$(this).attr("id").split("_")[1]] = $(this).find("span:first-child").html();
            if ($this.seleceAllarray[$(this).parents(".levelclick").attr("dataId")] != undefined) {
              $this.seleceAllarray[$(this).parents(".levelclick").attr("dataId")][$(this).index()] = $(this).find("span:first-child").html();
            } else {
              $this.seleceAllarray[$(this).parents(".levelclick").attr("dataId")] = {};
              $this.seleceAllarray[$(this).parents(".levelclick").attr("dataId")][$(this).index()] = $(this).find("span:first-child").html();
            }
            $this.arithmetic();
            if ($this.isfeng == 0) {//是否拆分，进入代表拆分
              var strAll = {};
    
              if (
                $(this)
                  .find(".lo-conright-odds")
                  .html()
                  .indexOf("赔率") > -1
              ) {
                strAll.peilv = (+$(this)
                  .find(".lo-conright-odds")
                  .html()
                  .split(":")[1]).toFixed(2);
              } else {
                strAll.peilv = (+$(this)
                  .find(".lo-conright-odds")
                  .html()).toFixed(2);
              }
              strAll.fanlv = $this.bettingRebate;
              strAll.zushu = $this.bettingNum / ($this.isfengatty.length + 1);
              strAll.zonge = $this.danzuze / $this.bettingNum;
              strAll.danmax = $this.maxwin;
              strAll.xzhm = $(this)
                .find("span:first-child")
                .html();
              strAll.wanfa =
                $this.lotteryPlayMapmin[$this.yi].name +
                "-" +
                $this.playPlayMapmin[$this.er].name;
              strAll.isdanzu = "";
              strAll.isdanzuval = ($this.danzuze / $this.bettingNum).toFixed(2);
              // strAll.islotterId = $this.playDetailIds;
              strAll.islotterId =
                $this.playDetailIds.split("-")[
                  $this.playDetailIds.split("-").length - 2
                ] + " ";
              strAll.isplayerId = $this.playIdM;
              $this.isfengatty.push(strAll);
            }
          } else {
            $(this).find(".zoology em").css('color','gray');
            // delete $this.seleceAll[$(this).index()]
            delete $this.seleceAllarray[
              $(this)
                .parents(".levelclick")
                .attr("dataId")
            ][$(this).index()];
            // $this.arrayxhsz[$(this).attr('id').split('_')[0]].splice([$(this).attr('id').split('_')[1]],1)
            $this.arrayxhsz[
              $(this)
                .attr("id")
                .split("_")[0]
            ][
              $(this)
                .attr("id")
                .split("_")[1]
            ] =
              "";
            $(this)
              .find("span")
              .removeClass("isclick isclickred isclickgreen isclickblue");
              
            $this.arithmetic();
            for (var t = 0; t < $this.isfengatty.length; t++) {
              if (
                $this.isfengatty[t].xzhm ==
                $this.xuanhaoAll[
                  +$(this)
                    .attr("id")
                    .split("_")[0]
                ].playValueList[
                  +$(this)
                    .attr("id")
                    .split("_")[1]
                ].value
              ) {
                $this.isfengatty.splice(t, 1);
                break;
              }
            }
          }
          // $this.seleceAllarray[$(this).parents('.levelclick').attr('dataId')]=a;

          $this.tz = true;
          // $this.seleceAllarray = a;
          // $this.seleceAlllength = Object.keys($this.seleceAll).length;

          for (var key in $this.seleceAllarray) {
            str += Object.keys($this.seleceAllarray[key]).length;
          }
          $this.seleceAlllength = str;


          if($this.xuanhaoAll[0].play.isOnly==1){
          //   for(var a = 0;a<$('#bettingNumDiv .ballspan').length;a++){
          //       if($('#bettingNumDiv .ballspan').eq(a).find("span:first-child").html()==$(this).find("span:first-child").html()){
          //         if($(this).index()!=a){
          //           if($('#bettingNumDiv .ballspan').eq(a).find("span:first-child").hasClass('isclick')){
          //             $('#bettingNumDiv .ballspan').eq(a).find("span:first-child").css('border','1px solid green')
          //           }
                    
          //         }
                   
          //       }

          //   // $(this).find("span:first-child")
          // }
          var id = $(this).attr("id");
          var countNum = $this.arrayxhsz.length;
          for(var s=0;s<countNum;s++){
            if($("#"+s+"_"+id.split("_")[1]).find("span:first-child").hasClass("isclick") && s+"_"+id.split("_")[1] != id && $(this).find("span:first-child").hasClass('isclick')){
              $("#"+s+"_"+id.split("_")[1]).find("span:first-child").click();
            }
          }
          




          if($this.xuanhaoAll[0].maxNum){
            
            if($(this).attr('id').split('_')[0]==0){
              $this.n.push($(this).index())
              var l = 0;
              for(var a = 0;a<$this.arrayxhsz[0].length;a++){
                if($this.arrayxhsz[0][a]!=''){
                  l++
                }
              }
              
              if(l>$this.xuanhaoAll[0].maxNum){
                 $('#0_'+ $this.n[0]).click();
              }else{
                $this.n = [];
                for(var t = 0;t<$this.arrayxhsz[0].length;t++){
                  if($this.arrayxhsz[0][t]!=''){
                    $this.n.push(t)
                  }
                }
              }



              // for(var t = 0;t<$(this).siblings().length;t++){
              //   if(){}
              //   // $(this).siblings('.ballspan').eq(2).css('border','1px solid green')
              //   if($(this).siblings().eq(t).find("span:first-child").hasClass('isclick') && $(this).find("span:first-child").hasClass('isclick')){
              //     $(this).siblings().eq(t).click();
              //   }
              // }
            }
          }
          $this.isqk();
          return;
        }





         if($this.xuanhaoAll[0].maxNum){
           if(!$(this).find("span:first-child").hasClass('isclick')){
             if($this.n && $this.n.length>0){
               for(var i=0;i<$this.n.length;i++){
                 if($this.n[i]==$(this).attr('id').split('_')[1]){
                  //  $this.n[i] = '';
                   $this.n.splice(i,i+1);
                    }
                  }
                }
           }else{
             //向集合中加入选中的号码下标
              $this.n.push($(this).attr('id').split('_')[1])
              
              var m = 0;
                for(var a = 0;a<$this.arrayxhsz[0].length;a++){
                  if($this.arrayxhsz[0][a]!=''){
                    m++
                  }
                }
              if(m>$this.xuanhaoAll[0].maxNum){//集合大于最大选号，则去掉最后一个选择的号码
                  $this.arrayxhsz[0][$this.n[0]] = '';
                  // $('#0_'+$this.n[0]).find("span:first-child").removeClass('isclick isclickred isclickgreen isclickblue');
                  $('#0_'+$this.n[0]).find("span").next().addBack().removeClass('isclick isclickred isclickgreen isclickblue');
                  $this.n.splice(0,1);
              }
           }
           
           $this.arithmetic();
          }
        }
        // xuanhaomin.playValueList.odds
        $this.isqk();
        return false;
      });

      //全
      $("#bettingNumDiv").on("click", ".all", function() {
        $(this)
          .parent()
          .parent()
          .find("div.ballspan :first-child")
          .not(".isclick")
          .click();
      });
      //大
      $("#bettingNumDiv").on("click", ".big", function() {
        $(this)
          .parent()
          .parent()
          .find("div.ballspan :first-child.isclick")
          .click();
        var nums = $(this)
          .parent()
          .parent()
          .find("div.ballspan").length;
        $(this)
          .parent()
          .parent()
          .find(
            "div.ballspan:gt(" + parseInt(nums / 2 - 1) + ") span:first-child"
          )
          .click();
      });
      //小
      $("#bettingNumDiv").on("click", ".small", function() {
        $(this)
          .parent()
          .parent()
          .find("div.ballspan :first-child.isclick")
          .click();
        var nums = $(this)
          .parent()
          .parent()
          .find("div.ballspan").length;
        $(this)
          .parent()
          .parent()
          .find("div.ballspan:lt(" + parseInt(nums / 2) + ") span:first-child")
          .click();
      });
      //单
      $("#bettingNumDiv").on("click", ".single", function() {
        $(this)
          .parent()
          .parent()
          .find("div.ballspan :first-child.isclick")
          .click();
        var isSingle = true;
        $(this)
          .parent()
          .parent()
          .find("div.ballspan:odd")
          .each(function() {
            if (
              parseInt(
                $(this)
                  .find("span")
                  .eq(0)
                  .html()
              ) %
                2 ==
              0
            ) {
              isSingle = false;
            }
          });
        if (isSingle) {
          $(this)
            .parent()
            .parent()
            .find("div.ballspan:odd span:first-child")
            .click();
        } else {
          $(this)
            .parent()
            .parent()
            .find("div.ballspan:even span:first-child")
            .click();
        }
      });
      //双
      $("#bettingNumDiv").on("click", ".double", function() {
        $(this)
          .parent()
          .parent()
          .find("div.ballspan :first-child.isclick")
          .click();
        var isDouble = true;
        $(this)
          .parent()
          .parent()
          .find("div.ballspan:odd")
          .each(function() {
            if (
              parseInt(
                $(this)
                  .find("span")
                  .eq(0)
                  .html()
              ) %
                2 ==
              1
            ) {
              isDouble = false;
            }
          });
        if (isDouble) {
          $(this)
            .parent()
            .parent()
            .find("div.ballspan:odd span:first-child")
            .click();
        } else {
          $(this)
            .parent()
            .parent()
            .find("div.ballspan:even span:first-child")
            .click();
        }
      });
      //清
      $("#bettingNumDiv").on("click", ".clear", function() {
        $(this)
          .parent()
          .parent()
          .find("div.ballspan :first-child.isclick")
          .click();
      });
      //玩法规则隐藏
      $(".modelAll").click(function() {
        $(this).hide();
      });
      $(".playing-hint").click(function() {
        $(".modelAll").show();
      });
      //投注按钮
      var that = this;
      $(".footer-right").click(function() {
        // 		return;
        window.localStorage.setItem('ispeilnshow',$this.xuanhaoAll[0].play.maxRebate)
        if ($this.xuanhaoAll[0].play.maxRebate == 0) {
          $this.faska = false;
        } else {
          $this.faska = true;
        }
        if ($this.bettingNum == 0) {
          $.tips("选择号码有误");
          return;
        }
        if ($this.localUser != null) {
          if (
            $this.xuanhaoAll[0].play.isShowOdds &&
            $this.thisdatalist.showType == 1
          ) {
            var stringa = {};
            stringa.yi = $this.yi;
            stringa.er = $this.er;
            $this.$store.state.iserji = stringa;
            if ($this.isfeng == 0) {
              var strAll = {};
              strAll.wanfa =
                $this.lotteryPlayMapmin[$this.yi].name +
                "-" +
                $this.playPlayMapmin[$this.er].name;
              window.localStorage.setItem(
                "songshuj",
                JSON.stringify($this.isfengatty)
              );
              window.localStorage.setItem(
                "xuanhaoAll",
                JSON.stringify($this.xuanhaoAll)
              );            
              $("html,body").removeClass();
              window.localStorage.setItem("lotteryPlayMapmin", strAll.wanfa);

              that.$store.state.buyNum = 1;
              // $this.$router.push({ path: "/buycolorConfirm" });
              $this.$router.push({path:$this.pathnew})
              if($this.playPlayMapmin[$this.er].isShowOdds==0){
                $this.loss_peilv = $this.playPlayMapmin[$this.er].odds
                $this.loss_peilv = $this.bettingOdds
              }
              return;
            } else {
              var strAll = {};
              strAll.peilv = $this.loss_peilv;
              strAll.fanlv = $this.bettingRebate;
              strAll.zushu = $this.bettingNum;
              strAll.zonge = $this.danzuze;
              strAll.danmax = $this.maxwin;
              strAll.xzhm = $this.bettingValue;
              strAll.wanfa =
                $this.lotteryPlayMapmin[$this.yi].name +
                "-" +
                $this.playPlayMapmin[$this.er].name;
              strAll.isdanzu = "";
              strAll.islotterId = $this.playDetailIds;
              strAll.isplayerId = $this.playIdM;
              if ($this.xuanhaoAll[0].play.isBase == 1) {
                strAll.isweishu = [];
                for (var z = 0; z < $("span[name='foot_a']").length; z++) {
                  if ($($("span[name='foot_a']")[z]).hasClass("spanbg")) {
                    strAll.isweishu.push(
                      $($("span[name='foot_a']")[z]).attr("id")
                    );
                  }
                }
              }
              strAll.isdanzuval = ($this.danzuze / $this.bettingNum).toFixed(2);
              $this.isfengatty.push(strAll);
              window.localStorage.setItem(
                "songshuj",
                JSON.stringify($this.isfengatty)
              );
              window.localStorage.setItem(
                "xuanhaoAll",
                JSON.stringify($this.xuanhaoAll)
              );
              $("html,body").removeClass();
              window.localStorage.setItem("lotteryPlayMapmin", strAll.wanfa);

              that.$store.state.buyNum = 1;

              // $this.$router.push({ path: "/buycolorConfirm" });
              $this.$router.push({path:$this.pathnew})
              if($this.playPlayMapmin[$this.er].isShowOdds==0){
                $this.loss_peilv = $this.playPlayMapmin[$this.er].odds
                $this.loss_peilv = $this.bettingOdds
              }
              return;
            }
          } else {
            if ($this.isfeng == 0) {
              var a = [];
              for (var k = 0; k < $this.isfengatty.length; k++) {
                a.push(+$this.isfengatty[k].peilv);
              }
              $this.loss_peilv = Math.max.apply(null, a);
              if($this.playPlayMapmin[$this.er].isShowOdds==0){
                $this.loss_peilv = $this.playPlayMapmin[$this.er].odds
                $this.loss_peilv = $this.bettingOdds
              }
            }
          }
        } else {
          $this.$store.state.isjixuan = "yes";
          $this.$router.push({ path: "/login" });
          return;
        }
        if($this.playPlayMapmin[$this.er].isShowOdds==0){
          $this.loss_peilv = $this.playPlayMapmin[$this.er].odds
          $this.loss_peilv = $this.bettingOdds
        }
        $(".ostouzu").show();
        $(".loss").show();
        //阻止滚动条
        $("html,body").addClass("ovf");
        $(".ocontent").css("overflow","hidden")//触发弹窗取消滚动
      });
      // 底部位数
      var $this = this;
      $("#seletdifit").on("click", "li", function() {
        if (
          $(this)
            .find("span")
            .hasClass("spanbg")
        ) {
          $(this)
            .find("span")
            .removeClass("spanbg");
        } else {
          $(this)
            .find("span")
            .addClass("spanbg");
        }
        $this.footerweigeshu();
        setTimeout(function() {
          $this.arithmetic();
        }, 100);
      });
      /*投注弹框-取消按钮*/
      $(".default").click(function() {
        //恢复滚动条
        $(".sort").css("left", "0px");
        $(".yellow").css("width", "0px");
        $("#amountInput").val("2");
        $("#rebatSpan").html("0.0");
        for (var a = 0; a < $(".moneylist li").length; a++) {
          if ($($(".moneylist li")[a]).hasClass("isclick")) {
            $($(".moneylist li")[a]).removeClass("isclick");
          }
        }
        for (var b = 0; b < $(".unit span").length; b++) {
          if (b == 0) {
            $($(".unit span")[b]).addClass("isclick");
          } else {
            $($(".unit span")[b]).removeClass();
          }
        }
        $this.arithmetic();
        $(".loss").hide();
        $(".ostouzu").hide();
        $(".ocontent").css("overflow-y","scroll")//取消弹窗恢复滚动
        $("html,body").removeClass();
        
      });
      //随机一注
      $(".randow").click(function() {
        $this.randomChoose();
      });
      // 改变input金额
      $("#amountInput").keyup(function() {
        $this.showBettingDetails();
      });
      $("#amountInput").blur(function() {
        if(!$(this).val()){
          $(this).val('2')
        }
      });
      /*投注弹框-选择金额*/
      $(".loss .moneylist")
        .children()
        .click(function() {
          $(this)
            .addClass("isclick")
            .siblings(".loss li")
            .removeClass("isclick");
          $("#amountInput").val(parseInt($(this).html()));
          $(".unit")
            .children()
            .removeClass("isclick");
          $(".unit")
            .children()
            .eq(0)
            .addClass("isclick");
          $this.showBettingDetails();
        });
      /*投注弹框-选择圆角分*/
      $(".unit span").click(function() {
        $(this)
          .addClass("isclick")
          .siblings(".unit span")
          .removeClass("isclick");
        $this.showBettingDetails();
      });
      //确定跳转
      $(".primary").click(function() {
         if($this.danzuze<=0){
           $.tips("投注金额不能为0");
           return;
         }
        if ($this.xuanhaoAll[0].play.isBase == 1) {
          var isweishu = [];
          for (var z = 0; z < $("span[name='foot_a']").length; z++) {
            if ($($("span[name='foot_a']")[z]).hasClass("spanbg")) {
              isweishu.push($($("span[name='foot_a']")[z]).attr("id"));
            }
          }
        }
        
        var stringa = {};
        stringa.yi = $this.yi;
        stringa.er = $this.er;
        $this.$store.state.iserji = stringa;
        // var strAll = {};
        // strAll.peilv = $this.loss_peilv;
        // strAll.fanlv = $this.bettingRebate;
        // strAll.zushu = $this.bettingNum;
        // strAll.zonge = $this.danzuze;
        // strAll.danmax = $this.maxwin;
        // strAll.xzhm = $this.bettingValue;
        // strAll.wanfa = $this.lotteryPlayMapmin[$this.yi].name+'-'+$this.playPlayMapmin[$this.er].name;
        // strAll.isdanzu = '';
        // strAll.isdanzuval = ($this.danzuze/$this.bettingNum).toFixed(2);
        // window.localStorage.setItem('songshuj',JSON.stringify(strAll))
        // window.localStorage.setItem('xuanhaoAll',JSON.stringify($this.xuanhaoAll))
        // $('html,body').removeClass();
        // window.localStorage.setItem('lotteryPlayMapmin',strAll.wanfa)

        // $this.$router.push({path:'/buycolorConfirm'});
        if ($this.isfeng == 0) {
          var strAll = {};
          strAll.wanfa =
            $this.lotteryPlayMapmin[$this.yi].name +
            "-" +
            $this.playPlayMapmin[$this.er].name;
          // strAll.isdanzuval  strAll.zonge;
          // $('#amountInput').val()
          for (var a = 0; a < $this.isfengatty.length; a++) {
            $this.isfengatty[a].isdanzuval = (
              $this.danzuze / $this.bettingNum
            ).toFixed(2);
            // $this.isfengatty[a].isdanzuval.toFixed(2)
            $this.isfengatty[a].zonge = (
              $this.danzuze / $this.bettingNum
            ).toFixed(2);
            $this.isfengatty[a].fanlv = $("#rebatSpan").html();
            
            
            $this.isfengatty[a].peilv = (
              +$this.isfengatty[a].peilv *
              (1 - +$("#rebatSpan").html() / 100)
            ).toFixed(2);
            // bettingNum  danzuze
          }

          window.localStorage.setItem(
            "songshuj",
            JSON.stringify($this.isfengatty)
          );
          window.localStorage.setItem(
            "xuanhaoAll",
            JSON.stringify($this.xuanhaoAll)
          );
          $("html,body").removeClass();
          window.localStorage.setItem("lotteryPlayMapmin", strAll.wanfa);
          that.$store.state.buyNum = 1;
          // $this.$router.push({ path: "/buycolorConfirm" });
        
          $this.$router.push({path:$this.pathnew})
          $this.isfengatty=[]
          return;
        } else {
          var strAll = {};
          strAll.peilv = $this.loss_peilv;
          strAll.fanlv = $("#rebatSpan").html();
          strAll.zushu = $this.bettingNum;
          strAll.zonge = $this.danzuze;
          strAll.danmax = $this.maxwin;
          strAll.xzhm = $this.bettingValue;
          strAll.wanfa =
            $this.lotteryPlayMapmin[$this.yi].name +
            "-" +
            $this.playPlayMapmin[$this.er].name;
          strAll.isdanzu = "";
          strAll.islotterId = $this.playDetailIds;
          strAll.isplayerId = $this.playIdM;
          if ($this.xuanhaoAll[0].play.isBase == 1) {
            strAll.isweishu = [];
            for (var z = 0; z < $("span[name='foot_a']").length; z++) {
              if ($($("span[name='foot_a']")[z]).hasClass("spanbg")) {
                strAll.isweishu.push($($("span[name='foot_a']")[z]).attr("id"));
              }
            }
          }
          strAll.isdanzuval = ($this.danzuze / $this.bettingNum).toFixed(2);
          $this.isfengatty.push(strAll);
          window.localStorage.setItem(
            "songshuj",
            JSON.stringify($this.isfengatty)
          );
          window.localStorage.setItem(
            "xuanhaoAll",
            JSON.stringify($this.xuanhaoAll)
          );
          $("html,body").removeClass();
          window.localStorage.setItem("lotteryPlayMapmin", strAll.wanfa);
          that.$store.state.buyNum = 1;
          // $this.$router.push({ path: "/buycolorConfirm" });
        
        
        setTimeout(() => {
          $(".footer-left").click();
        }, 500);
          $this.$router.push({path:$this.pathnew})
          $this.isfengatty=[]
          return;
        }
      });
      //投注记录
      $("#bettingListA").click(function() {
        // return
        // if ($this.localUser != null) {
        // //   $this.$store.state.isgoucai = "yes";
        // //   window.localStorage.setItem("istzjl", "yes");
        //   $this.$router.push({ path: "/bettingRecord" });
        // } else {
        //   $this.$router.push({ path: "/login" });
        //   return;
        // }
        // return
        if ($this.localUser != null) {
        //   $this.$store.state.isgoucai = "yes";
        //   window.localStorage.setItem("istzjl", "yes");
          // $this.$router.push({ path: "/bettingRecord" });
          $this.$router.push({path:$this.pathnewtouzu})
        } else {
          $this.$router.push({ path: "/login" });
          return;
        }
      }); 
      //最近开奖
      $("#openListA").click(function() {
        // if(window.localStorage.getItem('iskjjl')=='yes'){
        //    window.localStorage.setItem('iskjjl','no');
        //    $this.$router.go(-1) 
        //    return
        // }
        $this.$store.state.isgoucai = "yes";
        $this.$router.push({
          path: "/lotteryResultList/" + $this.thisdatalist.id + ""
          // path:$this.pathkjls+$this.thisdatalist.id
        }); 
      });
      //玩法说明
      var thin=this
      $("#playwf").click(function() {
          window.localStorage.setItem("iswfsm", "yes");
          thin.$store.state.iswanfa=true;
          $this.$router.push({ path: "/rule/" + $this.thisdatalist.id + "" });
        // alert($this.pathrule)
        // alert($this.thisdatalist.id)
        // $this.$router.push({ path: $this.pathrule + $this.thisdatalist.id});
      });
      //购物车按钮
      // $(' .footer-left').on('click','.gocolorlist',function(){
      // 	alert('a');
      // 	window.localStorage.setItem('isgwc','yes')
      // 	$this.$router.push({path:'/buycolorConfirm'});
      // })
      $(".gocolorlist").click(function() {
        // window.localStorage.setItem('isgwc','yes');
        that.$store.state.buyNum = 1;
        // $this.$router.push({ path: "/buycolorConfirm" });
        $this.$router.push({path:$this.pathnew})
      });
      //机选按钮
      $(".footer-left").click(function() {
        if ($(this).html() == "机选") {
           console.log("--------------------");
          if ( window.localStorage.getItem("currentUser") == "null" || window.localStorage.getItem("currentUser") == null) {
            $this.$store.state.isjixuan = "yes";
            // this.$store.state
            $this.$router.push({ path: "/login" });
            return;
          } else {
            window.localStorage.setItem(
              "lotteryPlayMapmin",
              $this.lotteryPlayMapmin[$this.yi].name +
                "-" +
                $this.playPlayMapmin[$this.er].name
            );
            window.localStorage.setItem(
              "xuanhaoAll",
              JSON.stringify($this.xuanhaoAll)
            );
            console.log($this.xuanhaoAll)
            window.localStorage.setItem("issuiji", "yes");
            that.$store.state.buyNum = 1;
            // $this.$router.push({ path: "/buycolorConfirm" });
             window.localStorage.setItem('ispeilnshow',$this.xuanhaoAll[0].play.maxRebate)
            $this.$router.push({path:$this.pathnew})
            return;
          }
        } else {
          for (var a = 0; a < $("#bettingNumDiv .ballspan").length; a++) {
            if (
              $($("#bettingNumDiv .ballspan")[a])
                .find("span")
                .hasClass("isclick")
                ||
                $($("#bettingNumDiv .ballspan")[a]).find("span").find("img").hasClass("isclickimg")
            ) {
              $($("#bettingNumDiv .ballspan")[a]).click();
            }
          }
          $this.bettingNum = 0;
        }
      });
      //点击助手
      $(".longins").click(function() {
        if(!$(this).hasClass('longins')){
          return;
        }
        $this.assistant();
      });
      //点击玩法
      $("#lotteryTitleFont").click(function() {
        
        if($($("#secondPlayDiv li")).hasClass("isclick")==false){
          $($("#secondPlayDiv li")[0]).addClass("isclick");
        }
        for (var a = 0; a < $("#bettingNumDiv .ballspan").length; a++) {
            if (
              $($("#bettingNumDiv .ballspan")[a])
                .find("span")
                .hasClass("isclick")
            ) {
              $($("#bettingNumDiv .ballspan")[a]).click();
            }
          }
          $this.bettingNum = 0;
        if(!$(this).hasClass('isplayAlla')){
          return;
        }
        $this.lotteryTitleFontclick();
      });
      $(".oshade").click(function() {
        $("#lotteryTitleFont").addClass('isplayAlla')
        // $('.oshade').toggle();
        // $('.help').toggle();
        $(this).hide();
        $(".help").hide();
        $(".longins").removeClass("isshow");
        $this.falss = true;
        // $("#lotteryTitleFont").on("click", function() {
        //   $this.lotteryTitleFontclick();
        // });
      });
      //点击收藏按钮
      $("#cllectLotteryA").click(function() {
        if(JSON.parse(window.localStorage.getItem("currentUser")).type == 2){
          $.tips('对不起，试玩账号不能收藏')
          return;
        }
        if ($(this).html() == "取消收藏") {
          $(this).html("收藏彩票");
          base
            .getApi()
            .collectCancel(
              JSON.parse(window.localStorage.getItem("currentUser")).id,
              $this.thisdatalist.id
            );
        } else {
          $(this).html("取消收藏");
          base
            .getApi()
            .userCollect(
              JSON.parse(window.localStorage.getItem("currentUser")).id,
              $this.thisdatalist.id
            );
        }
        $this.$store.state.iscollect[JSON.parse(window.localStorage.getItem("currentUser")).id+''] = base.getApi().collectList(JSON.parse(window.localStorage.getItem("currentUser")).id)
      });
      // 更多开奖记录
      $(".history").click(function() {
            if(!!window.localStorage.getItem('isgoucxq')){
              // window.localStorage.setItem('isgoucxq','no')
              window.localStorage.removeItem('isgoucxq')
              $this.$router.go(-1)
              return;
            }
            $this.$store.state.isgoucaixq = "yes";
            $this.$store.state.islsjl = $this.thisdatalist.id;
            
            $this.$router.push({
            // path: "/lotteryResultList/" + $this.thisdatalist.id
            // window.localStorage.setItem('isclickgoucai','/lotteryResultListyinew/')
            path:$this.pathgoucai+$this.thisdatalist.id
        });
      });
      //分享赚钱
      $("#cancelCellectAfenxiang").click(function() {
        if(JSON.parse(window.localStorage.getItem("currentUser")).type == 2){
          $.tips('非代理账号不能分享赚钱')
          return;
        }
        // $this.$router.push({ path: "/share" });
        if($(this).html()=='邀请好友'){
          $('.oshade').click();
          $('.tixied').show();
          return;
        }
        $this.$router.push({ path: $this.pathshare });
      });
      /*投注的返利滑动条*/
      $(document).on("touchstart", ".sort", function(event) {
        //获取初始位置
        //var touchPros = event.touches[0];
        var startX = $(".losscontent").offset().left;
        //手指滑动改变位置
        $(document).on("touchmove", ".losscontent", function(event) {
          event.preventDefault();
          //var touchPros = event.touches[0];
          var left =
            event.originalEvent.targetTouches[0].clientX -
            startX -
            $(".sort").width() / 2;

          //判断left的值
          if (left <= 0) {
            left = 0;
          }
          if (left >= $(".text").width() - $(".sort").width()) {
            left = $(".text").width() - $(".sort").width();
          }
          var per = returnFloat(
            left / ($(".text").width() - $(".sort").width())
          );
          $("#rebatSpan").html(parseFloat(per * 10).toFixed(1));
          $this.showBettingDetails();
          $(".sort").css("left", parseInt(left));
          $(".yellow").css("width", parseInt(left));
        });
        $(document).on("touchend", ".losscontent", function() {
          // $(".losscontent").off("touchmove");
          // $(".losscontent").off("touchend");
        });
      });
    },
    //是否显示清空
    isqk() {
      var fals = true;
      for (var a = 0; a < $("#bettingNumDiv .ballspan").length; a++) {
        if (
          $($("#bettingNumDiv .ballspan")[a])
            .find("span")
            .hasClass("isclick")
            ||
            $($("#bettingNumDiv .ballspan")[a])
            .find("span").find("img")
            .hasClass("isclickimg")
        ) {
          fals = false;
          break;
        } else {
          fals = true;
        }
      }
      if (fals) {
        $(".footer-left").css({
          background:window.bgmapcolor,
          color: "white"
        });
        $(".footer-left").html("机选");
      } else {
        $(".footer-left").css({
          background: "none",
          background: "#eee",
          color: "#111"
        });
        $(".footer-left").html("清空");
      }
    },
    /**
     * 装载投注设定
     */
    showBettingDetails() {
      var bettingOddsNum = 0;

      var tmpsss =
        this.bettingOdds.indexOf("-") > -1
          ? this.bettingOdds.substring(0, this.bettingOdds.length - 1)
          : this.bettingOdds;
      for (var i = 0; i < tmpsss.split("-").length; i++) {
        if (bettingOddsNum < parseFloat(tmpsss.split("-")[i])) {
          bettingOddsNum = this.round2(parseFloat(tmpsss.split("-")[i]), 2);
        }
      }
      this.bettingRebate = 0;
      var amount = parseFloat($("#amountInput").val());
      if (!$("#amountInput").val()) {
        amount = 2;
      }
      $(".unit")
        .children()
        .each(function() {
          if ($(this).hasClass("isclick")) {
            if ($(this).html() == "角") {
              amount = amount / 10;
            } else if ($(this).html() == "分") {
              amount = amount / 100;
            }
          }
          $(".moneylist")
            .find("li")
            .removeClass("isclick");
          $(".moneylist")
            .find("li")
            .each(function() {
              if ($(this).attr("name") == parseInt(amount)) {
                $(this).addClass("isclick");
              }
            });
        });
      this.bettingAmount = amount;
      this.bettingRebate = $("#rebatSpan").html();

      var rebate = 1 - parseFloat($("#rebatSpan").html() / 100);
      //bettingOddsNum = (bettingOddsNum*rebate).toFixed(2);
      bettingOddsNum = window.returnFloat(bettingOddsNum * rebate);
      // $("#oddsFont").html(bettingOddsNum);

      // $("#totalAmountFont").html((amount * this.bettingNum).toFixed(2));
      // $("#bettingAmountSpan").html((bettingOddsNum * amount).toFixed(2));
      this.loss_peilv = bettingOddsNum;
      this.maxwin = (bettingOddsNum * amount).toFixed(2);

      this.danzuze = (amount * this.bettingNum).toFixed(2);

    },

    //随机选一注

    randomChoose() {
      this.localChooseQueue = []; //胆拖用到的选择队列,不是胆拖此参数为空
      this.randomChooseIndexs = ""; //随机的下标
      this.xuanhaoxi(this.xuanhaoAll);
      //清空选中
      if (this.thisdatalist.code == "xypk") {
        $(".ballspan").each(function() {
          if (
            $(this)
              .find("span")
              .eq(0)
              .children("img")
              .hasClass("isclickimg")
          )
            $(this)
              .find("span")
              .eq(0)
              .children("img")
              .click();
        });
      } else {
        $(".ballspan").each(function() {
          if (
            $(this)
              .find("span")
              .eq(0)
              .hasClass("isclick")
          )
            $(this)
              .find("span")
              .eq(0)
              .click();
        });
      }

      //随机规则	5-5|1-1  即5个集合里面选5个,1个小集合里面选1个
      if(!this.xuanhaoAll[0] || !this.xuanhaoAll[0].play || !this.xuanhaoAll[0].play.rules){
        $.tips("版本已更新，正在为您刷新页面");
						setTimeout(()=>{
							window.location.reload();
						},800)
      }
      var rules = this.xuanhaoAll[0].play.rules; //5-5|1-1-1-1-1 2-2|1-1 2-2|1-7
      var chooseArrNum = parseInt(rules.split("|")[0].split("-")[0]); //多少个集合中选择
      var forNum = parseInt(rules.split("|")[0].split("-")[1]); //多少个循环

      var tmpJIndex = ""; //二维数组下标
      var tmpIIndex = ""; //一维数组下标
  
      for (var i = 0; i < forNum; i++) {
        var randomNum = parseInt(rules.split("|")[1].split("-")[i]); //随机区间
        var iIndex = this.randomNumF(chooseArrNum);
        if (
          (rules.split("|")[1].split("-").length > 1 &&
            rules.split("|")[1].split("-")[0] <
              rules.split("|")[1].split("-")[1]) ||
          (rules.split("|")[1].split("-").length >= 2 &&
            rules.split("|")[1].split("-")[0] !=
              rules.split("|")[1].split("-")[1])
        ) {
          iIndex = i; //符合该条件的下标直接按照循环来获取
        }
        while (tmpIIndex && tmpIIndex.indexOf(iIndex) > -1) {
          //判断一维数组下标是否存在,如果存在重新随机
          iIndex = this.randomNumF(chooseArrNum);
        }
        tmpIIndex += iIndex + ",";

        for (var j = 0; j < randomNum; j++) {
          if (forNum == 1) {
            iIndex = this.randomNumF(chooseArrNum);
          }
          var jIndex = this.randomNumF(this.arrayxhsz[iIndex].length);
          while (
            this.randomChooseIndexs.indexOf(iIndex + "_" + jIndex) > -1 ||
            tmpJIndex.indexOf(jIndex) > -1
          ) {
            //判断二维数组下标是否存在,如果存在重新随机
            jIndex = this.randomNumF(this.arrayxhsz[iIndex].length);
          }
          tmpJIndex += jIndex + ",";

          $("#" + iIndex + "_" + jIndex)
            .find("span")
            .eq(0)
            .click();
          this.randomChooseIndexs += iIndex + "_" + jIndex + ",";
        }
      }
      this.isqk()
    },
    //随机方法
    randomNumF(n) {
      var num = Math.random() * n;
      return parseInt(num, 10);
    },
    // 底部选中位数个数
    footerweigeshu() {
      var a = 0;
      for (var y = 0; y < $("span[name='foot_a']").length; y++) {
        if ($($("span[name='foot_a']")[y]).hasClass("spanbg")) {
          a++;
        } 
      }

      this.checkNum = a;

    },
    // 底部位数
    footerwei() {
      for (var y = 0; y < $("span[name='foot_a']").length; y++) {
        for (
          var i = 0;
          i < this.xuanhaoAll[0].play.baseAttr.split(",").length;
          i++
        ) {
          if (
            $($("span[name='foot_a']")[y]).attr("id") ==
            this.xuanhaoAll[0].play.baseAttr.split(",")[i]
          ) {
            $($("span[name='foot_a']")[y]).attr("class", "spanbg");
          }
        }
      }
    },
    lotteryTitleFontclickmin() {},
    lotteryTitleFontclick() {
      var $this = this;
      if (this.falss) {
        this.falss = false;
        $(".longin").removeClass('longins');
        if(this.$store.state.isid){
			this.showSelectrule();
        }else{
			this.showSelectrule();
        }
        $(".shade").css("display", "block");
        $('#lotteryTitleFont .iconfont').css('transform','rotate(180deg)')
      } else {
        this.falss = true;
         $(".longin").addClass('longins');
        // $('.longin').unbind();
        // $(".longin").on("click", function() {
        //   // $('.oshade').toggle();
        //   // $('.help').toggle();
        //   $this.assistant();
        // });
		  this.hideSelectrule();
        $(".shade").css("display", "none");
        $('#lotteryTitleFont .iconfont').css('transform','rotate(0deg)')
      }
    },
    change(a) {
      return JSON.parse(window.localStorage.getItem(a));
    },
    //二级点击
    showNums(id,index) { 
      
      this.bettingValue = "";
      $('.longin').addClass('longins')
      // alert('aaa')
	   	this.isfengatty.splice(0,this.isfengatty.length)
        //二及玩法id，下标
        var z = id+'-'+index
        window.localStorage.setItem('iserji',z)
      $('#secondPlayDiv li').eq(index).addClass('isclick').siblings("li").removeClass("isclick");
      this.er = index;

      // this.xuanhaoAll = this.duoshao[id];

          // $this.xuanhaoAll = $this.duoshao[$this.playPlayMapmin[$this.er].id];
          // $this.xuanhaoAll = $this.playPlayMapmin[$this.er].sanjiwanfa
      this.xuanhaoAll = this.playPlayMapmin[this.er].sanjiwanfa

      if(this.playPlayMapmin[this.er].isShowOdds==0){
        this.loss_peilv = this.playPlayMapmin[this.er].odds
      }
      this.erjilotid = this.playPlayMapmin[this.er].id;

      this.xuanhaoxi(this.xuanhaoAll);


      this.falss = true;


      if (this.xuanhaoAll[0].play.isBase == 1) {
        this.isShowBack = true;
      } else {
        this.isShowBack = false;
      }

      this.seleceAllarray = {};
      this.seleceAll = {};
      this.seleceAlllength = Object.keys(this.seleceAll).length;
      var reg = new RegExp("^[0-9]*$");
      if (this.xuanhaoAll[0].play.isOnly == 1) {
        this.daxiao = false;
      } else if (this.xuanhaoAll[0].maxNum) {
        this.daxiao = false;
      } else if (this.xuanhaoAll[0].valueType == 2) {
        this.daxiao = false;
      } else if (
        this.xuanhaoAll[0].valueType == 1 &&
        !reg.test(+this.xuanhaoAll[0].playValueList[0].value)
      ) {
        this.daxiao = false;
      } else {
        this.daxiao = true;
      }
      var $this = this;
      this.bettingNum = 0;
      setTimeout(function() {
        if ($this.xuanhaoAll[0].play.isBase == 1) {
          $this.footerwei();
        }
      }, 10);
      if (this.xuanhaoAll[0].play.isBase == 1) {
        this.checkNum = this.xuanhaoAll[0].play.baseAttr.split(",").length;
      }
      $(".ballspan")
        .find("span")
        .removeClass("isclick");
      $(".ballspan")
        .find("span img")
        .removeClass("isclickimg");
		this.hideSelectrule();
      $(".shade").css("display", "none");
      this.playIdM = this.playPlayMapmin[this.er].id;
      this.isqk();
      // $(".longin").on("click", function() {
      //   // $('.oshade').toggle();
      //   // $('.help').toggle();
      //   // setTimeout(function(){
      //   $this.assistant();
      //   // },100)
      // });
      if (this.xuanhaoAll[0].play.noSplit != undefined) {
        this.isfeng = this.xuanhaoAll[0].play.noSplit;
      }
      this.$store.state.playIdMa = this.playIdM;
      $('#lotteryTitleFont .iconfont').css('transform','rotate(0deg)')
      localStorage.setItem("erjilotid",event.currentTarget.id)
      
    },
    initSecondPlay(ids, index) {
      // for(var a = 0;a<$('.ballspan').length;a++){
      //   $('.ballspan').find('img').attr('src','')
      // }
      console.log(ids);
      this.bettingValue = "";
      this.bettingNum = 0;
      //一及玩法id，下标
        var z = ids+'-'+index
        window.localStorage.setItem('isyiji',z);
        ids==1349?this.isguan=true:this.isguan=false;
        $('#firstPlayDiv li').eq(index).addClass('isclick').siblings("li").removeClass("isclick");
        // this.playPlayMapmin = this.playPlayMap[this.lotteryPlayMapmin[index].id];

        // $this.playPlayMapmin = $this.playPlayMap[$this.lotteryPlayMapmin[$this.yi].id];
      this.playPlayMapmin = this.lotteryPlayMapmin[index].erjiwanfa


      if (this.playPlayMapmin.length != 1) {//多个二级玩法
        $('.longin').addClass('longins')
		    this.isfengatty.splice(0,this.isfengatty.length)
        for (var i = 0; i < $("#secondPlayDiv li").length; i++) {
          $($("#secondPlayDiv li")[i]).removeClass("isclick");
        }
        $($("#secondPlayDiv li")[0]).addClass("isclick");
        this.er = 0;
  
        // $this.playPlayMapmin[$this.er].sanjiwanfa
        // this.xuanhaoAll = this.duoshao[this.playPlayMapmin[0].id];
        this.xuanhaoAll = this.playPlayMapmin[this.er].sanjiwanfa
        this.isfeng = this.playPlayMapmin[this.er].noSplit;//赋值给是否拆分订单判断
        if(this.playPlayMapmin[this.er].isShowOdds==0){
          this.loss_peilv = this.playPlayMapmin[this.er].odds
        }

        //点击助手
        // $this= this;
        // $('.longin').click(function(){
        // 	$this.assistant()
        // });
        // this.$store.state.playIdMa = this.playIdM;
        // 		this.lotteryPlayMap = JSON.parse(myStorage.getItem("lotteryPlayMap"));
        // this.playPlayMap = JSON.parse(myStorage.getItem("playPlayMap"));
        this.$store.state.playIdMa = this.playPlayMapmin[0].id;
        this.playIdM = this.playPlayMapmin[0].id;
        this.isdxds()
        this.xuanhaoxi(this.xuanhaoAll);
      } else {
        $('.longin').addClass('longins')
		    this.isfengatty.splice(0,this.isfengatty.length)
        $('#lotteryTitleFont .iconfont').css('transform','rotate(0deg)')
        $($("#secondPlayDiv li")[0]).addClass("isclick");
        this.er = 0;
 
        // this.xuanhaoAll = this.duoshao[this.playPlayMapmin[0].id];

        this.xuanhaoAll = this.playPlayMapmin[this.er].sanjiwanfa
        if(this.playPlayMapmin[this.er].isShowOdds==0){
          this.loss_peilv = this.playPlayMapmin[this.er].odds
        }
        this.xuanhaoxi(this.xuanhaoAll);
        this.falss = true;
        if (this.xuanhaoAll[0].play.isBase == 1) {
          this.isShowBack = true;
        } else {
          this.isShowBack = false;
        }
        this.seleceAll = {};
        this.seleceAllarray = {};
        this.seleceAlllength = Object.keys(this.seleceAll).length;

        // else if(this.xuanhaoAll[0].play.isShowOdds==1){
        // this.daxiao = false;
        // }
        var reg = new RegExp("^[0-9]*$");
        if (this.xuanhaoAll[0].play.isOnly == 1) {
          this.daxiao = false;
        } else if (this.xuanhaoAll[0].maxNum) {
          this.daxiao = false;
        } else if (this.xuanhaoAll[0].valueType == 2) {
          this.daxiao = false;
        } else if (
          this.xuanhaoAll[0].valueType == 1 &&
          !reg.test(+this.xuanhaoAll[0].playValueList[0].value)
        ) {
          this.daxiao = false;
        } else {
          this.daxiao = true;
        }
        var $this = this;
        this.bettingNum = 0;
        setTimeout(function() {
          if ($this.xuanhaoAll[0].play.isBase == 1) {
            $this.footerwei();
          }
        }, 10);
        if (this.xuanhaoAll[0].play.isBase == 1) {
          this.checkNum = this.xuanhaoAll[0].play.baseAttr.split(",").length;
        }
        $(".ballspan")
          .find("span")
          .removeClass("isclick");
        $(".ballspan")
          .find("span img")
          .removeClass("isclickimg");
		  this.hideSelectrule();
        $(".shade").css("display", "none");

        if (this.xuanhaoAll[0].play.noSplit != undefined) {
          this.isfeng = this.xuanhaoAll[0].play.noSplit;
        }
        this.playIdM = this.playPlayMapmin[this.er].id;

        // setTimeout(function(){
          //  $($('#secondPlayDiv li')[0]).click()
        // },10);
        this.isdxds()
       
        this.showNums(this.playIdM,0)
      }
      this.yi = index;

      this.isqk();
      // $('.longin').unbind();
    },
    firstPlayDiv() {
      // var $this = this;
      // $("#firstPlayDiv").on("click", "li", function() {
      //   $(this)
      //     .siblings("li")
      //     .removeClass("isclick");
      //   $(this).addClass("isclick");
      // });
      // $("#secondPlayDiv").on("click", "li", function() {
      //   $(this)
      //     .siblings("li")
      //     .removeClass("isclick");
      //   $(this).addClass("isclick");
      // });
    },
    // zzz(baseSokectQueue){

    // 	var lotteryDraw = baseSokectQueue.shift();
    // 	this.thisdatalist.lotteryDraw.closeTime -= 1000;
    // 	if(lotteryDraw!=undefined){
    // 		if(this.thisdatalist.id==lotteryDraw.lotteryId){
    // 			this.thisdatalist.lotteryDraw.closeTime = lotteryDraw.remainTime;
    // 			this.thisdatalist.lotteryDraw.lotteryNo = lotteryDraw.lotteryNo;
    // 			this.thisdatalist.lotteryDraw.result = lotteryDraw.result;
    // 			this.thisdatalist.lotteryDraw.nextNo = lotteryDraw.nextNo;
    // 		}
    // 	}
    // },
    //点击助手事件
    assistant() {
      var $this = this;

      if (!!JSON.parse(window.localStorage.getItem("currentUser"))
      ) {
        var sccz = base.getApi().collectList(JSON.parse(window.localStorage.getItem("currentUser")).id);
        for (var i = 0; i < sccz.data.length; i++) {
          if (sccz.data[i].lottery.code == this.thisdatalist.code) {
            $("#cllectLotteryA").html("取消收藏");
            break;
          }
        }
        if(JSON.parse(window.localStorage.getItem("currentUser")).type == 1){
          $this.url = JSON.parse(localStorage.getItem("sysConfigMap")).userLink.cvalue
          $('#cancelCellectAfenxiang').html('邀请好友')
        }
        $("#cancelCellectAfenxiang").show();
      } else {
        $("#cllectLotteryA").hide();
        $("#cancelCellectAfenxiang").hide();
      }
      if (this.falss) {
        this.falss = false;
        // $("#lotteryTitleFont").unbind();
        $("#lotteryTitleFont").removeClass('isplayAlla')
        $(".longins").addClass("isshow");
        $(".oshade").show();
        $(".help").show();
      } else {
        this.falss = true;
        $(".longins").removeClass("isshow");
        $(".oshade").hide();
        $(".help").hide();
        $("#lotteryTitleFont").addClass('isplayAlla')
        // $("#lotteryTitleFont").on("click", function() {
        //   $this.lotteryTitleFontclick();
        // });
      }
    },
    //注数
    arithmetic() {
      this.bettingOdds = "";
      this.bettingNum = 0;
      var localNums = this.arrayxhsz;
      var secondPlay = this.xuanhaoAll[0].play;
      var formula = secondPlay.formula;
      this.playDetailIds = "";
      this.xuanhaoAll;
      if (secondPlay.isBase == 1) {
        // var checkNum = this.checkNum
        var checkNum = secondPlay.baseAttr.split(",").length;
      }

      if (secondPlay.calType == 1) {
        //直接结算
        var headNum = 0;
        if (secondPlay.isBase == 1) {
          //有底部
          var localCheckNum = 0;
          // $("span[name='foot_a']").each(function() {
          // 	if($(this).hasClass("spanbg"))
          // 		localCheckNum++;
          // });
          for (var z = 0; z < $("span[name='foot_a']").length; z++) {
            if ($($("span[name='foot_a']")[z]).hasClass("spanbg")) {
              localCheckNum++;
            }
          }
  
          if (localCheckNum > checkNum) {
            var up = localCheckNum;
            var down = checkNum;
            for (var i = 0; i < checkNum - 1; i++) {
              up = up * (localCheckNum - (i + 1));
              down = down * (checkNum - (i + 1));
            }
            headNum = up / down;
          } else if (localCheckNum == checkNum) {
            headNum = 1;
          }
        } else headNum = 1; //没有底部默认1
        for (var i = 0; i < localNums.length; i++) {
          var nums = 0;
          for (var j = 0; j < localNums[i].length; j++) {
            if (localNums[i][j] || localNums[i][j] == "0") nums++;
          }
          var nNums = "n" + (localNums.length - i);
          formula = formula.replace(new RegExp("(" + nNums + ")", "g"), nums);
        }
        this.bettingNum = eval(formula);
        this.bettingNum = this.bettingNum * headNum;

      } else if (secondPlay.calType == 2) {
        //公式
        var headStr = "this.bettingNum = calNum(";
        if (secondPlay.isBase == 1) {
          //有底部
          var xStr = "[";
          $("span[name='foot_a']").each(function() {
            if ($(this).hasClass("spanbg")) xStr += "1,";
          });
          // for(var z = 0;z<$("span[name='foot_a']").length;z++){
          // 	if($($("span[name='foot_a']")[z]).hasClass("spanbg")){
          // 		xStr += "1,";
          // 	}
          // }
          if (xStr.length > 0) xStr = xStr.substring(0, xStr.length - 1);
          xStr += "]";
          headStr += xStr + ",";
        }
        for (var i = 0; i < localNums.length; i++) {
          var yStr = "[";
          for (j = 0; j < localNums[i].length; j++) {
            if (localNums[i][j] || localNums[i][j] == "0")
              yStr += "'" + localNums[i][j] + "',";
          }
          if (yStr.length > 1) yStr = yStr.substring(0, yStr.length - 1);
          yStr += "]";
          if (i == localNums.length - 1) headStr += yStr + ");";
          else headStr += yStr + ",";
        }

        // window.eval(headStr + secondPlay.formula);

        this.bettingNum = window.eval(headStr + secondPlay.formula);
      } else if (secondPlay.calType == 3) {
        //map checkNum
        var headNum = 1;
        if (secondPlay.isBase == 1) {
          //有底部
          var localCheckNum = 0;
          // $("span[name='foot_a']").each(function() {
          // 	if($(this).hasClass("spanbg"))
          // 		localCheckNum++;
          // });
          for (var z = 0; z < $("span[name='foot_a']").length; z++) {
            if ($($("span[name='foot_a']")[z]).hasClass("spanbg")) {
              localCheckNum++;
            }
          }
          if (localCheckNum > checkNum) {
            var up = localCheckNum;
            var down = checkNum;
            for (var i = 0; i < checkNum - 1; i++) {
              up = up * (localCheckNum - (i + 1));
              down = down * (checkNum - (i + 1));
            }
            headNum = up / down;
          } else if (localCheckNum == checkNum) {
            headNum = 1;
          } else {
            headNum = 0;
          }
        }

        eval(
          "this.ff = {" +
            secondPlay.formula.substring(1, secondPlay.formula.length - 1) +
            "}"
        );
        for (j = 0; j < localNums[0].length; j++) {
          if (localNums[0][j] || localNums[0][j] == "0")
            this.bettingNum += this.ff[localNums[0][j]];
        }

        this.bettingNum = this.bettingNum * headNum;

      }

      //2018520开发
      this.bettingValue = "";
      var tmpStr = " ";
      if (secondPlay.noSplit != undefined && secondPlay.noSplit == 0) {
        tmpStr = "-";
      }
      for (var i = 0; i < localNums.length; i++) {
        for (j = 0; j < localNums[i].length; j++) {
          if (localNums[i][j] || localNums[i][j] == "0") {
            if (secondPlay.noSplit != undefined && secondPlay.noSplit == 0) {
              this.playDetailIds += $("#" + i + "_" + j).attr("name") + "-";
            } else {
              if (
                this.playDetailIds.indexOf($("#" + i + "_" + j).attr("name")) ==
                -1
              ) {
                this.playDetailIds += $("#" + i + "_" + j).attr("name") + " ";
              }
            }

            if (secondPlay.isShowOdds == 1) {
              //显示赔率的在之间拼接html时就已经计算了登陆人返点的权重,此处只要直接获取即可
              if (
                $("#" + i + "_" + j)
                  .find("span")
                  .eq(1)
                  .html()
                  .indexOf("赔率") == -1
              ) {
                this.bettingOdds +=
                  parseFloat(
                    $("#" + i + "_" + j)
                      .find("span")
                      .eq(1)
                      .html()
                  ).toFixed(2) + "-";
              } else {
                this.bettingOdds +=
                  parseFloat(
                    $("#" + i + "_" + j)
                      .find("span")
                      .eq(1)
                      .html()
                      .split(":")[1]
                  ).toFixed(2) + "-";
              }
            } else {
              var userRebate =
                this.localUser != null ? 1960 - this.localUser.rebate : 0;
    
              this.bettingOdds =
                this.round2((1 - userRebate / 2000) * secondPlay.odds, 2) + "-";
            }

            if (this.thisdatalist.id == 33 && localNums[i][j]) {
              this.bettingValue +=
                $("#" + i + "_" + j)
                  .find("span img")
                  .attr("data") + tmpStr;
            } else {
              this.bettingValue += localNums[i][j] + tmpStr;
            }

          }
        }
        if (
          this.bettingValue.length > 0 &&
          this.bettingValue.substring(this.bettingValue.length - 1) != "|"
        )
          this.bettingValue = this.bettingValue.substring(
            0,
            this.bettingValue.length - 1
          );
        if (i != localNums.length - 1) this.bettingValue += "|";
      }
      var tmpsss =
        this.bettingOdds.indexOf("-") > -1
          ? this.bettingOdds.substring(0, this.bettingOdds.length - 1)
          : this.bettingOdds;

      this.loss_peilv = this.bettingOdds;

      var a = [];
      for (var k = 0; k < tmpsss.split("-").length; k++) {
        a.push(+tmpsss.split("-")[k]);
      }


      this.maxwin = Math.max.apply(null, a) * 2;
      this.danzuze = this.bettingNum * 2;
    },

    //重写的四舍五入方法

    round2(number, fractionDigits) {
      // with(Math) {
      var num = number * Math.pow(10, fractionDigits);
      num = Math.round(parseFloat(num.toFixed(2)));
      var value = Math.round(num) / Math.pow(10, fractionDigits);
      value = Math.round(parseFloat(value) * 100) / 100;
      var xsd = value.toString().split(".");
      if (xsd.length == 1) {
        value = value.toString() + ".00";
        return value;
      }
      if (xsd.length > 1) {
        if (xsd[1].length < 2) {
          value = value.toString() + "0";
        }
        return value;
      }
      // }
    },

    xuanhaoxi(data) {
      this.arrayxhsz = [];
      var arraymin = [];
      for (var i = 0; i < data.length; i++) {
        for (var y = 0; y < data[i].playValueList.length; y++) {
          arraymin.push("");
        }
        this.arrayxhsz.push(arraymin);
        arraymin = [];
      }
    },
    isclickplay() {
      if(!!window.localStorage.getItem('isyiji')){
          var yi =  window.localStorage.getItem('isyiji');
          var er =  window.localStorage.getItem('iserji');
          this.initSecondPlay(yi.split('-')[0],yi.split('-')[1]);//一级点击
          var erjilotid=localStorage.getItem("erjilotid");
          localStorage.setItem("erjilotidd" ,erjilotid)
          this.showNums(er.split('-')[0],er.split('-')[1])//二级点击
      }
       
    }
  },
  watch: {
    thisdatalist: {
      handler(newValue, oldValue) {
 
        if (Math.floor(this.thisdatalist.lotteryDraw.closeTime / 1000) == 0) {
           window.localStorage.setItem("nowShortNo",newValue.lotteryDraw.nextNo)
           this.$store.state.newValueNum = newValue.lotteryDraw.shortNextNo;
          setTimeout(() => {
            $.tips(
              "期号已经切换到" + newValue.lotteryDraw.shortNextNo + "期"
            );
          }, 1300);
        }
  
      },
      deep: true
    }
  },
  beforeCreate: function() {},
  beforeRouteLeave(to, from, next){

    next()
  },
  destroyed() {
    if(!this.$store.state.isid){
      this.$store.state.xiazaishow=true;
    }
  },
  components: {
    wfplay
  }
};
</script>
<style scoped src='../../assets/source/css/common/lotterydetails.css'></style> 
<style scoped>
.periods-right:before{
  content: "";
  width:1px;
  border-left: 1px solid #e7e7e7;
  float: left;
  height:54px;
  margin-top: 6px;
}
* {
  font-size: 0.15rem;
}
body{
  overflow: visible !important;
}
/* @font-face {
  font-family: myFirstFont;
  src: url("../../assets/source/font/QuartzEF.ttf"); */
  /* ,url('../../assets/source/font/QuartzEF.eot');  */
  /* IE9+ */
/* } */
.alltext input {
  border: none;
  border-bottom: 1px solid gainsboro;
  outline: none;
}
body,
html {
  width: 100%;
  height: 100%;
  /*overflow: scroll;*/
}
.spans {
  display: inline-block;
  width: 0.11rem;
  height: 100%;
  text-align: center;
  /* font-family: myFirstFont; */
}
#lotteryRemainTimeLabel {
  display: inline-block;
  /* width: 1.74rem; */
}
.gocolorlist span {
  background-color: red;
}
.playing-hint {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0.15rem;
  bottom: 0;
  font-size: 0.14rem;
}
.playing-hint img {
  width: 0.2rem;
  vertical-align: middle;
}
.playing-hint-state {
  display: none;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}
.main-all {
  margin: 50% auto;
  width: 81%;
  /*height: 33%;*/
  background-color: white;
  border-radius: 0.05rem;
  position: relative;
  padding-bottom: 0.1px;
  box-sizing: border-box;
}
.main-all h5 {
  display: inline-block;
}
.main-all h5:before {
  content: "";
  display: block;
  width: 0.05rem;
  height: 0.05rem;
  background-color: green;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  margin: 0 0.04rem 0 0.04rem;
}
.main-all p {
  margin-left: 0.12rem;
}
.main-all div {
  margin-top: 0.1rem;
}
.ocontent{
  padding-bottom:0;
  height: 100%;
  -webkit-overflow-scrolling:touch; 
}
.main-all div:nth-of-type(1) {
  line-height: 0.4rem;
  text-align: center;
  height: 0.4rem;
  background-color: green;
  border-radius: 0.05rem 0.05rem 0 0;
  color: white;
}
.ballspan-square {
  /*font-size: 1.8rem!important;*/
}
.header {
  /* padding-bottom: 0.1rem; */
}
.header h2 {
  line-height: 0.27rem;
  text-align: center;
  color: #fff;
  font-weight: 400;
  font-size: 0.16rem;
  margin-right: 0.7rem;
}
#lotteryTitleFont {
  display: inline-block;
  width: 1.47rem;
  height: 0.31rem;
  margin-top: 0.1rem;
  margin-left: 25%;
  background: rgba(255, 255, 255, 0.1);
  font-size: 0.14rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.footer-content .txt {
  display: none !important;
}
.flextext-wrap .flextext span {
  color: #fa3855;
}
.footer-content .pspan p span {
  color: #fa3855;
}
.righttext {
  /* right: -.45rem!important; */
  /* right: -0.55rem !important; */
}
.periods-left h4 {
  /* text-align: left; */
}
.periods-right h4 {
  color: #111 !important;
  text-align: left;
}
.fgx {
  background-color: ghostwhite;
  height: 0.3rem;
}
.history {
  background-color: #f5f5f5;
  font-size: 0.12rem;
  text-align: center;
  line-height: 0.3rem;
}
.periodsmax,
.history,
.heater {
  display: none;
}
.textselect span {
  color: #111;
}
.spansAll {
  display: inline-block;
  width: 0.23rem;
  height: 0.23rem;
  text-align: center;
  line-height: 0.23rem;
  border-radius: 50%;
  margin-right: 0.02rem;
  color: white;
  font-size: 0.13rem;
}
.periods-left p {
  width: 60%;
}
#lotteryResultFont img {
  margin-right: 0.05rem !important;
}
.liright .ball {
  padding: 0 0.05rem 0.1rem 0.05rem;
  /*justify-content: start;*/
  /*display: flex;
||||||| .r13188
            .main-all{
            	margin: 50% auto;
			    width: 81%;
			    /*height: 33%;*/
			    background-color: white;
			    border-radius: 0.05rem;
			    position: relative;
			    padding-bottom: .1px;
			    box-sizing: border-box;
            }
            .main-all h5{
            	display: inline-block;
            }
            .main-all h5:before{
            	content: '';
            	display: block;
            	width: 0.05rem;
            	height: 0.05rem;
            	background-color: green;
            	border-radius: 50%;
                display: inline-block;
            	vertical-align:middle;
        	    margin: 0 0.04rem 0 0.04rem;
            }
			.main-all p{
				margin-left: .12rem;
			}
			.main-all div{
				margin-top: .1rem;
			}
			.main-all div:nth-of-type(1){
			    line-height: .4rem;
			    text-align: center;
			    height: .4rem;
			    background-color: green;
			    border-radius: 0.05rem 0.05rem 0 0;
			    color: white;
			}
			.ballspan-square{
				/*font-size: 1.8rem!important;*/
			}
			.footer-content .txt{
				display: none!important;
			}
			.flextext-wrap .flextext span{
				color: #FA3855;
			}
			.footer-content .pspan p span{
				color: #FA3855;
			}
			.righttext{
                /* right: -.45rem!important; */
				/* right: -0.55rem!important; */
			}
			.periods-left h4{
			    /* text-align: left; */
			}
			.periods-right h4{
                color: #111!important;
                text-align: left;
			}
			.fgx{
				background-color: ghostwhite;
				height: .3rem;
			}
			.history{
				background-color: #f5f5f5;
				font-size: .12rem;
			    text-align: center;
    			line-height: .3rem;
			}
			.periodsmax,.history,.heater{
				display: none;
			}
			.textselect span{
				color: #111;
			}
			.spansAll{
				display: inline-block;
			    width: .23rem;
			    height: .23rem;
			    text-align: center;
			    line-height: .23rem;
			    border-radius: 50%;
			    margin-right: .02rem;
			    color: white;
				font-size: .13rem;
			}
			.periods-left p{
				width: 60%;
			}
			#lotteryResultFont img{
				margin-right: .05rem!important;
       
			}
			.liright .ball{
				padding: 0 0.05rem 0.1rem 0.05rem;
				/*justify-content: start;*/
			    /*display: flex;
=======
            .main-all{
            	margin: 50% auto;
			    width: 81%;
			    /*height: 33%;*/
			    background-color: white;
			    border-radius: 0.05rem;
			    position: relative;
			    padding-bottom: .1px;
			    box-sizing: border-box;
            }
            .main-all h5{
            	display: inline-block;
            }
            .main-all h5:before{
            	content: '';
            	display: block;
            	width: 0.05rem;
            	height: 0.05rem;
            	background-color: green;
            	border-radius: 50%;
                display: inline-block;
            	vertical-align:middle;
        	    margin: 0 0.04rem 0 0.04rem;
            }
			.main-all p{
				margin-left: .12rem;
			}
			.main-all div{
				margin-top: .1rem;
			}
			.main-all div:nth-of-type(1){
			    line-height: .4rem;
			    text-align: center;
			    height: .4rem;
			    background-color: green;
			    border-radius: 0.05rem 0.05rem 0 0;
			    color: white;
			}
			.ballspan-square{
				/*font-size: 1.8rem!important;*/
			}
			.footer-content .txt{
				display: none!important;
			}
			.flextext-wrap .flextext span{
				color: #FA3855;
			}
			.footer-content .pspan p span{
				color: #FA3855;
			}
			.righttext{
                /* right: -.45rem!important; */
				/* right: 0.05rem!important; */
			}
			.periods-left h4{
			    /* text-align: left; */
			}
			.periods-right h4{
                /* color: #111!important; */
                text-align: center;
                font-size: 13px;
			}
			.fgx{
				background-color: ghostwhite;
				height: .3rem;
			}
			.history{
				background-color: #f5f5f5;
				font-size: .12rem;
			    text-align: center;
    			line-height: .3rem;
			}
			.periodsmax,.history,.heater{
				display: none;
			}
			.textselect span{
				color: #111;
			}
			.spansAll{
				display: inline-block;
			    width: .23rem;
			    height: .23rem;
			    text-align: center;
			    line-height: .23rem;
			    border-radius: 50%;
			    margin-right: .02rem;
			    color: white;
				font-size: .13rem;
			}
			.periods-left p{
				width: 60%;
			}
			#lotteryResultFont img{
				margin-right: .05rem!important;
			}
			.liright .ball{
        padding: 0 0.05rem 0.05rem 0.05rem;
				/*justify-content: start;*/
			    /*display: flex;
>>>>>>> .r13198
    			justify-content: space-between;
			    padding-bottom: 1rem;*/
  /* padding-bottom: .1rem; */
  /* padding-left: .05rem; */
}
.periodsmax .xglhc li .lhchm div {
  width: 0.2rem;
  height: 0.2rem;
  color: #111;
  line-height: 0.2rem;
  text-align: center;
  border-radius: 50%;
}
.plus-sign {
  display: inline-block;
  height: 0.36rem;
  line-height: 0.36rem;
}
.periodsmax .xglhc li .lhchm div .sxAll {
  display: inline-block;
  width: 0.23rem;
  height: 0.23rem;
  text-align: center;
  line-height: 0.24rem;
  background-color: red;
  border-radius: 50%;
  color: white;
  font-size: 0.12rem;
}
.kaijsx {
  display: inline-block;
  width: 0.23rem;
  height: 0.23rem;
  background-color: red;
  border-radius: 50%;
  text-align: center;
  line-height: 0.24rem;
  font-size: 0.12rem;
  color: white;
}
.dongwu {
  font-size: 0.12rem;
}
.selectnumber li .lileft.lileft-heng {
  position: relative;
  top: 0 !important;
  left: 0 !important;
}
.liright .ball .ballspan {
  /*margin: 17px 7px!important;*/
}

.ball span.isclick {
  color: white !important;
}
.ball span.isclickmin {
  color: white !important;
  background: none;
}
.ball span.isnoclickmin {
  color: #111 !important;
  background: none;
}
.ball span.ballspan-square {
  /* box-shadow: 0px 0.02rem 0.07rem #888888; */
}
#bettingNumDiv .zoology {
  position: absolute;
  top: 0.5rem;
  left: 24%;
}
#bettingNumDiv .zoology em {
  font-size: 0.12rem;
  color: gray;
}

.periodsmax ul li .afterAll {
  font-size: 0.12rem;
  height: 0.38rem;
  /*border-left: 1px solid gainsboro;*/
}
.periodsmax ul li .afterAll:before {
  content: "";
  display: block;
  width: 0.12rem;
  height: 0.38rem;
  background-color: gainsboro;
  background: url("../../assets/source/imgs/afer.png") no-repeat;
  margin-top: -.1rem;
      position: absolute;
    left: -0.15rem;
}
.periodsmax ul li .lhchm:before {
  content: "";
  display: block;
  width: 0.12rem;
  height: 0.5rem;
  background-color: gainsboro;
  background: url("../../assets/source/imgs/afer.png") no-repeat;
  margin-top: .15rem;
}
.periods-left p {
  margin-top: 0;
}
.periodsmax ul li,
.heater {
  height: 0.38rem;
}
#layout {
  /*overflow: scroll!important;*/
}
.selectrule {
	top: -6rem;
  transition: all 0.2s;
}
.isclickimg {
  border: 2px solid red;
  box-sizing: border-box;
  border-radius: 0.05rem;
}
.moneytext p {
  text-align: left;
}
.modelAll {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99999;
  display: none;
}
.modelmin {
  width: 83%;
  margin: 42% auto;
}
.modeltop {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  /* background: linear-gradient(90deg, #fa3956, #ff6b52); */
  border-radius: 0.065rem 0.065rem 0 0;
  color: white;
}

.models {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  display: none;
}
.modelsmin {
  width: 78%;
  height: 25%;
  background: white;
  margin: 60% auto;
  border-radius: 0.02rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 0.1rem 0 0 0;
  box-sizing: border-box;
  font-size: 0.13rem;
}
.modelsmin .top {
  font-size: 0.2rem;
}
.maidden {
  color: gray;
  padding-bottom: 0.1rem;
}
.footera {
  display: flex;
  width: 100%;
  height: 0.4rem;
  border-top: 1px solid gainsboro;
}
.footera span {
  flex: 1;
  text-align: center;
  line-height: 0.4rem;
  font-size: 0.17rem;
}
.confirmqx {
  color: gray;
  border-right: 1px solid gainsboro;
}
.enfirmqd {
  color: red;
}
#lotteryResultFont .spaneb {
  display: inline-block;
  width: 0.25rem;
  height: 0.25rem;
  background: linear-gradient(-30deg, #fa3956, #ff6b52);
  color: white;
  line-height: 0.25rem;
  text-align: center;
  border-radius: 50%;
}
.BZDX{
  width:calc(100%-0.1rem) !important; 
  height: calc(100%-0.1rem) !important;
}
.vshowBD{
  /* border:1px dashed #333 !important; */
}
.ball span.isclickblue{
  background: linear-gradient(90deg, #34bdf2, #358af2)!important;
  color:white !important;
  border:none !important;
}
.isclickred{
  background:linear-gradient(-30deg, rgb(237, 56, 72), rgb(251, 86, 90)) !important;
  color:white !important;
  border:none !important;
}
.ball span.isclickgreen{
  background: linear-gradient(-30deg, rgb(43, 199, 146), rgb(134, 227, 109)) !important;
  color:white !important;
  border:none !important;
}
#lotteryResultFont{
  margin-bottom: .05rem;
}
.ishuise{
  background-color: #ddd;
}

.help ul li:nth-of-type(3){
  border:none;
}
.isjia::before{
  content: '+';
  display: inline-block;
  width: 10px;
  height: 10px;
  position: absolute;
  color: #111;
  left: 25px;
}
</style>
<style scoped  lang="less">
    /* 分享好友 */
.tixied {
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  // display: none;
  font-size: 0.14rem;
  z-index: 9999;
  > div:nth-child(2) {
    width: 100%;
    height: 100%;
    position: absolute;
    background: #000;
    opacity: 0.3;
    top: 0;
  }
  > div:nth-child(1) {
    position: absolute;
    border-radius: 6px;
    z-index: 1;
    // width: 80%;
    // height: 300px;
    top: 300px;
    left: 50%;
    margin-left: -150px;
    // height: 150px;
    width: 300px;
    background: #fff;
    > p:nth-child(1) {
      line-height: 0.5rem;
      font-size: 0.16rem;
      font-weight: 600;
    }
    > p:last-child {
      border-top: 1px solid whitesmoke;
      overflow: hidden;
      line-height: 0.4rem;
      // line-height:0.5rem;
    }
  }
}
#Red9{
  border:0.01rem solid red;
}
#Blue9{
  border:0.01rem solid #378bee;
  color: #378bee;
}
#Green9{
  border:0.01rem solid #28c58a;
  color: #28c58a;
}
</style>
