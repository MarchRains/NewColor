<template>
  <div  style="position:absolute;top:0;width:100%;;background: white;height:100%;z-index:99;overflow:scroll;">
       <soucang> </soucang>
  </div>
</template>

<script>
import soucang from '../Mycollect/Mycollect'
export default {
  data() {
    return {

    }
  },
 mounted(){
   this.eventRegister();
 },
  methods:{
    eventRegister() {
      var $this = this;
      $('.listtt').on('click', 'li', function(event) {
        var el = $(event.currentTarget);
        var imgUrl = el.find('.lotteryimg img').attr('src');
        $this.$store.state.urlgoucai = imgUrl;
      });
    }
  },
  components: {
      soucang
  }
}
</script>

<style scoped lang='less'>
</style>
