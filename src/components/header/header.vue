<template lang="html">
  <div class="top app_bg app_bgg" :style="{'height': isApp ? '.7rem' : '.5rem'}">
    <div class="index_header" :style="{'padding-top': isApp ? '.2rem' : 0}">
      <div class="backed" @click="goLeftDetal">
        <span v-if="leftType == 1" style="float: left; margin-left: .1rem;" >{{ leftText }}</span>
        <i v-if="leftType == 2" class="iconfont icon-mjiantou-copy" ></i>
        <i v-if="leftType == 3">
          <img v-if="leftImg == 'user'" style='' src='../../assets/source/imgs/images/logo_03.png'/>
        </i>
      </div>
      <div class="center" @click="goConterDetal">
        <div v-if="centerType == 1">
          <span>{{title}}</span>
          <i v-if="isCenterDetal" class="iconfont"></i>
        </div>
        <div v-if="centerType == 2"><slot name="centerContent"></slot></div>
      </div>

      <div class="rightt" @click="goRightDetal">	
        <span v-if="rightType == 1" style="float: right;">{{ rightText }}</span>
        <div v-if="rightType == 2"><slot name="rightContent"></slot></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    //标题
    title: { type: String, default: "" },
    //左侧类型
    leftType: { type: String, default: "1" },
    //中间类型
    centerType: { type: String, default: "1" },
    //右侧类型
    rightType: { type: String, default: "1" },
    //左侧文本
    leftText: { type: String, default: "" },
    //左侧图片
    leftImg: { type: String, default: "" },
    //中间是否有明细
    isCenterDetal:{ type: Boolean, default: false },
   
    rightText: { type: String, default: "" },
    enableRefresh: { type: String, default: "" },
    goLeftDetal: {
      type: Function,
      default: function() {
        return window.vm.$router.go(-1);
      }
    },
    goConterDetal: {
      type: Function,
      default: function() {
        return "";
      }
    },
    goRightDetal: {
      type: Function,
      default: function() {
        return "";
      }
    }
  },
  mounted() {},
  methods: {},
  components: {},
  computed: {
    isApp() {
      return this.$store.state.isApp;
    }
  }
};
</script>

<style scoped lang='less'>
.top {
  width: 100%;
  position: relative;
}
.iconfont {
  font-size: 0.24rem;
}
.index_header {
  width: 100%;
  font-size: .16rem;
  height: .5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  top: 0;
  background: linear-gradient(90deg, #fa3956, #ff6b52);
  > .backed {
    color: #fff;
    width: 20%;
    text-align: left;
    position: absolute;
    z-index: 1;
    left: 0;
    bottom: 0;
    height: .5rem;
    line-height: .5rem;
    vertical-align: middle;
    > i {
      margin-left: .1rem;
      float: left;  
      >img {
        width: .18rem;
        vertical-align: middle !important;
        position: relative;
        top: -.02rem;
      }
    }
  }
  > .center {
    width: 60%;
    line-height: .5rem;
    > span {
      font-size: .18rem;
      color: #fff;
    }
  }
  > .rightt {
    color: #fff;
    width: 20%;
    text-align: right;
    padding-right: .1rem;
    position: absolute;
    z-index: 1;
    right: 0;
    bottom: 0;
    height: .5rem;
    line-height: .5rem;
    vertical-align: middle;
  }
}
 

</style>
