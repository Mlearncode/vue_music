<template>
    <div id="swiperTop">
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
import axios from 'axios'
import {onMounted} from 'vue'

export default {
  data() {
    return {
      images: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg',
      ]
    }
  },
  methods:{
      Mounted(){(res)=>{
          axios.get('http://localhost:3000/banner?type=2').then((res)=>{
              console.log(res)
              images = res.data.banners
          })
        }}
    }
  
}
</script>

<style >
    .van-swipe{
        width: 100%;
        padding: 10px;

    }

     .van-swipe-item{
        padding: 0 0.2rem;
    }
    
    .van-swipe-item img{
        width: 100%;
        height: 3rem;
        border-radius: 0.2rem;
    }

    .van-swipe__indicator--active{
        background-color: rgb(7, 70, 207);
    }
</style>
