<template>
  <div style="position:absolute;width:100%;height:100%;background: white !important;z-index:1000;">
	     <headertop title="法律声明" :leftType="2"> </headertop>
        <div class="aboutusin" v-html="entity.content" :style="{'margin-top':isLiuHai?'1rem':'0.5rem'}">

        </div>
  </div>
</template>

<script>
import headertop from '../header/header'
  export default{
    components: {
        headertop,
    },
  data() {
    return {
        entity:""
    }
  },
 mounted(){
     this.getapi();
     this.getID();
        
 },
 computed: {
    isid(){
          return this.$store.state.isid;
        },
      isLiuHai(){
        return this.$store.state.isLiuhai;
      }
  },
 methods:{
     getapi(){
         var type=myStorage.getItem("type");
         this.entity =base.getApi().getSystemContent(type).aboutUs;
        
     },
     getID(){
        
     },
	 goBack(){
		 this.$router.go(-1)
	 }
 },
}
</script>

<style scoped lang='less'>
h3{
    font-size: 0.16rem !important;
    line-height: 0.3rem !important;
}
.aboutusin{
    font-size:0.14rem;
    // margin-top: 0.45rem !important;
    width: 90%;
    margin: 0.7rem auto;
    text-align: left;
    line-height: 0.3rem;
    overflow: scroll;
    margin-bottom: 0.4rem;
    background-color: #fff;
    padding:0 5%;
}

</style>
