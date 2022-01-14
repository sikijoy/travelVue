<template>
<!-- template 只能向外部暴露一个根标签 -->
    <div>
        <!-- <div class="home">home</div>
        <router-link to="/list" class="home">列表页</router-link> -->
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <!-- <div>test</div> -->

    </div>

</template>
<script>
import HomeHeader from './Head.vue'
import HomeSwiper from './Swiper.vue'
import HomeIcons from './Icons.vue'

    export default
    {
        name:'Home',
        components:{
            //注册组件
            HomeHeader,
            HomeSwiper,
            HomeIcons
        }
    }
</script>
<style>
.home{
    font-size: 50px;
    
}
</style>