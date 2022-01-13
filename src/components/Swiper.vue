<template>
    <div class="wrapper">
        <!-- <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper"> -->
        <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide class="swiper-img">
            <img src="//imgs.qunarzz.com/vs_ceph_vcimg/5be2601d1f921f166646b817459a2727.jpeg" alt="想去哪儿 就去哪儿">
        </swiper-slide>
        <swiper-slide class="swiper-img">
            <img src="//imgs.qunarzz.com/vs_ceph_vcimg/280673be5655fc91ce24ba605c62fe07.jpeg" alt="">
        </swiper-slide>
        <!-- <swiper-slide>I'm Slide 3</swiper-slide>
        <swiper-slide>I'm Slide 4</swiper-slide>
        <swiper-slide>I'm Slide 5</swiper-slide>
        <swiper-slide>I'm Slide 6</swiper-slide>
        <swiper-slide>I'm Slide 7</swiper-slide> -->
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <!-- 左右箭头 -->
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div> -->
        <!-- 下面滚动条 -->
        <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
        </swiper>
    </div>

</template>
<script>
    export default{
        name: HomeSwiper,
        //子组件 里面定义data 必须是一个函数
        data()
        {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination'
                },

            }
        }
    }    
</script>
<style lang="stylus" scoped>
//swiper-pagination-bullet-active 在 swiper-slide 这个组件内 受scoped 影响 这个样式只能在该组件内生效  
// 需要>>>进行样式穿透  将子组件的样式也受影响
.wrapper >>> .swiper-pagination-bullet-active
.wrapper
    overflow: hidden
    width: 100%
    // height: 31.25% 这并不是 宽高比 而是父级元素31.25%
    // 自适应 宽高比
    padding-bottom: 31.25%
    height: 0
    .swiper-img 
        width : 100%

</style>