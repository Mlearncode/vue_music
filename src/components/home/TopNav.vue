<template>
    <div class="topNav">
        <div class="topLeft">
        <svg class="icon" aria-hidden="true">
             <use xlink:href="#icon-31liebiao"></use>
        </svg>

        </div>
        <div class="topContent"> 
            <span>我的</span>
            <span class="active">发现</span>
            <span>云村</span>
            <span>视频</span>
        </div>

        <div class="topRight">
        <svg class="icon" aria-hidden="true">
             <use xlink:href="#icon-sousuo1"></use>
        </svg>
        </div>
    </div>
</template>

<style scoped>
    .topNav{
        width: 100%;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        
    }
    .topContent{
            width: 65%;
            height: 100%;
            padding: .2rem;
            display: flex;
            justify-content: space-around;
            align-items: center;
            font-size: 16px;
        }
    .active{
        font-weight: 900;
    }
</style>