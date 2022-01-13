<template>
<!-- template 只能向外部暴露一个根标签 -->
    <div>
        <!-- <div class="home">home</div>
        <router-link to="/list" class="home">列表页</router-link> -->
        <home-header></home-header>
    </div>

</template>
<script>
import HomeHeader from './Head.vue'
    export default
    {
        name:'Home',
        components:{
            HomeHeader
        }
    }
</script>
<style>
.home{
    font-size: 50px;
    
}
</style>