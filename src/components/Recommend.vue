<template>
<div>
    <div class="title">热销推荐</div>
    <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
            <div class="item-img-wrapper">
                <img class="item-img" :src="item.imgUrl" alt="含往返飞机票+4晚住宿">
            </div>
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
                <button class="item-btn">查看详情</button>
            </div>

        </li>
    </ul>
</div>
</template>
<script>
    export default{
        name: 'HomeRecommend',
        data(){
            return{
                recommendList:[
                    {
                        id:'0001',
                        imgUrl:'//imgs.qunarzz.com/p/p67/1512/a2/0ebfcd965b9391f7.jpg_256x160_04d5813d.jpg',
                        title: '南浔古镇',
                        desc: '游览江南富户的巨宅庄园'
                    },
                    {
                        id:'0002',
                        imgUrl:'//img1.qunarzz.com/sight/p0/1607/21/2142167d4b1bfa84b4.water.jpg_256x160_ea65b4f7.jpg',
                        title: '西塘古镇',
                        desc: '阿汤哥《碟中谍》取景地'
                    },
                    {
                        id:'0003',
                        imgUrl:'//imgs.qunarzz.com/p/p67/1512/a2/0ebfcd965b9391f7.jpg_256x160_04d5813d.jpg',
                        title: '临安大明山滑雪场',
                        desc: '冰雪运动，品牌十年'
                    }
                ]
            }
        }

    }
</script>
<style lang="stylus" scoped>
@import '../../public/css/styles/mixins.styl';

 .title
     margin-top: .2rem
     line-height: .8rem
     background: #ccc
     text-indent: .2rem
.item
    overflow: hidden
    display: flex
    height : 1.9rem
    // background: red
    .item-img
        width: 1.7rem
        height: 1.7rem
        padding: .1rem
    .item-info
        flex: 1
        padding: .1rem
        text-align: left
        min-width: 0
        .item-title
            line-height: .54rem
            font-size: .32rem
            ellipsis()

        .item-desc
            line-height: .4rem
            color: #aaa
            ellipsis()

        .item-btn
            background: #ff9300
            padding: 0 .1rem
            border-radius: .6rem
            margin-top: .16rem
            line-height: .44rem
            color:#fff
            
</style>