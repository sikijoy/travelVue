<template>
    <div class="icons">
        <!-- <swiper :options="swiperOption"> -->
        <swiper>
        <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for = "item of page" :key= "item.id">
            <div class ="icon-img">
            <img class ="icon-img-content" :src="item.imgUrl">
            </div>
            <p class="icon-desc">{{item.desc}}</p>
        </div>
        </swiper-slide>
        </swiper> 
    </div>    
</template>
<script>
    export default{
        name: 'HomeIcons',
        data(){
                return {
                    iconList:[
                        {
                        id: '0001',
                        imgUrl:'//s.qunarzz.com/homenode/images/touchheader/piao.png',
                        desc:'景点门票'
                        },
                        {
                            id: '0002',
                            imgUrl:'//s.qunarzz.com/homenode/images/touchheader/package.png',
                            desc:'度假'
                        },
                        {
                            id: '0003',
                            imgUrl:'//s.qunarzz.com/homenode/images/touchheader/train.png',
                            desc:'火车票'
                        },
                        {
                            id: '0004',
                            imgUrl:'//s.qunarzz.com/homenode/images/touchheader/flight.png',
                            desc:'机票'
                        },
                        {
                            id: '0005',
                            imgUrl:'//s.qunarzz.com/homenode/images/touchheader/hotel.png',
                            desc:'酒店'
                        },
                        {
                            id: '0006',
                            imgUrl:'https://picbed.qunarzz.com/377db8cb2143aebf01869c9baad3d325.png',
                            desc:'汽车票船票'
                        },
                        {
                            id: '0007',
                            imgUrl:'https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png',
                            desc:'自由行'
                        },
                        {
                            id: '0008',
                            imgUrl:'https://picbed.qunarzz.com/c65b3bb7571a6bd62df669213e44b84d.png',
                            desc:'一日游'
                        },
                        {
                            id: '0009',
                            imgUrl:'https://picbed.qunarzz.com/25e3b9f17a21a6e0113c57a23ffccde4.png',
                            desc:'周末游'
                        }
                    ]
                }    
            },
        methods: {

        },
        computed:{
            pages() 
            {
                const pages = [];
                this.iconList.forEach( (item, index) => {
                    const page = Math.floor(index / 8);
                    if(!pages[page])
                    {
                        pages[page] = [];
                    } 
                    pages[page].push(item);
                });
                return pages;
            }
        }
    }
</script>
<style lang = "stylus" scoped>
@import '../../public/css/styles/varibles.styl';
@import '../../public/css/styles/mixins.styl';

.icons
    overflow: hidden
    height: 0
    padding-bottom: 50%
    /* background-color: green  */
    .icon
        position relative
        overflow: hidden
        height: 0
        float: left
        width: 25%
        padding-bottom: 25%
        /* background: red */
        .icon-img
            position: absolute
            top: 0
            left: 0
            right: 0
            bottom: .44rem
            /* background: blue */
            box-sizing: border-box
            padding: .1rem
            .icon-img-content
                display: block
                height: 100%
                margin: 0 auto
        .icon-desc
            position: absolute
            left: 0
            right: 0
            bottom: 0
            height: .44rem
            line-height: .44rem
            color: $darkTextColor
            text-align: center
            /* 通过css实现超出文本... */
            /* overflow: hidden
            white-space: nowrap
            text-overflow:  ellipsis */
            ellipsis()
</style>