import { Swipe, SwipeItem , Button , Lazyload} from 'vant'
import Vue from 'vue'
//导入vue，不然会报错not defined

//放入一个数组中，循环拿到元素，用函数传参
let plugins = [
    Swipe,
    SwipeItem,
    Button,
    Lazyload
]

//导出一个数组，循环导出组件
export default function getVant(app){
    plugins.forEach((item) => {
        return Vue.use(item)
    })
}