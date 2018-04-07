<template>
  <div>
      <div class="main w">
          <div class="main-l">
              <p>资讯服务</p>
              <ul>
                  <li v-for="(item,index) in levelType"
                   @mouseover="showThis(index)"
                   :class="index==nowIndex?'active':''">
                      <i :class="item.icon"></i>
                      <b>{{item.title0}}</b>
                      <template v-for="(chi,ind) in item.children">
                          <router-link :to="'/secondMenu/'+chi.url"><span>{{chi.title1}}</span></router-link>
                      </template>
                  </li>
              </ul>
          </div>
          <div class="main-r">
              <p>生活助手</p>
              <router-link to="/"><span>缴费</span></router-link>
              <router-link to="/"><span>维修</span></router-link>
          </div>
           <div class="dialog">
               <p>
                   <ul>
                       <li><router-link to="/secondMenu/">汽车服务</router-link></li>
                       <li><router-link to="/secondMenu/">家电维修</router-link></li>
                       <li><router-link to="/secondMenu/">保姆/月嫂</router-link></li>
                       <li><router-link to="/secondMenu/">保洁清洗</router-link></li>
                       <li><router-link to="/secondMenu/">二手回收</router-link></li>
                   </ul>
               </p>
               <div class="tlt">
                   <div v-for="(it,ind) in currentObj">
                       <h3><i :class="it.icon"></i>{{it.title1}}</h3>
                        <template v-for="(item,index) in it.chi">
                           <router-link :to="'/secondMenu/'+item.url"> <span>{{item.title1}}</span></router-link>
                        </template>
                   </div>
                  <img v-if="currentObj.imgUrl" :src="require('../../assets/imgs/'+currentObj.imgUrl)" alt="">
               </div>
              </div>
      </div>
      <div class="con">
          <div class="w">
              <div class="conBox">
                  <ul>
                      <li>
                        <div class="title">
                            <h3>便捷缴费<span>让您足不出户，享受便捷生活方式</span></h3>
                            
                        </div>
                        <div class="con-l">
                           <router-link to="/secondMenu/jiaowuyefei">
                                <img src="./../../assets/imgs/jiaowuyefei.png" alt="">
                            <p>缴物业费</p>
                           </router-link>
                        </div>
                        <div class="con-r">
                            <router-link to="/secondMenu/jiaotingchefei">
                                <img src="./../../assets/imgs/jiaotingchefei.png" alt="">
                            <p>缴停车费</p>
                            </router-link>
                        </div>
                      </li>
                      <li>
                        <div class="title" >
                            <h3>家庭维修<span>让您足不出户，享受便捷生活方式</span></h3>
                            
                        </div>
                        <div class="con-l">
                            <router-link to="/secondMenu/fangshuibulou">
                                <img src="./../../assets/imgs/fangshuibulou.png" alt="">
                            <p>防水补漏</p>
                            </router-link>
                        </div>
                        <div class="con-r">
                            <router-link to="/secondMenu/dianluweixiuanzhuan">
                                <img src="./../../assets/imgs/dianluweixiuanzhuan.png" alt="">
                            <p>电路维修/安装</p>
                            </router-link>
                        </div>
                      </li>
                      <li>
                        <div class="title">
                            <h3>清洗疏通<span>让您足不出户，享受便捷生活方式</span></h3>
                            
                        </div>
                        <div class="con-l">
                            <router-link to="/secondMenu/kongtiaoqingxi">
                                <img src="./../../assets/imgs/kongtiaoqingxi.png" alt="">
                            <p>空调清洗</p>
                            </router-link>
                        </div>
                        <div class="con-r">
                           <router-link to="/secondMenu/xiashuidaoshutong">
                                <img src="./../../assets/imgs/xiashuidaoshutong.png" alt="">
                            <p>下水道疏通</p>
                           </router-link>
                        </div>
                      </li>
                      <li>
                        <div class="title">
                            <h3>家政服务<span>只需一个电话，上门服务</span></h3>
                            
                        </div>
                        <div class="con-l">
                            <router-link to="/secondMenu/jiatingbaojie">
                                <img src="./../../assets/imgs/jiatingbaojie.png" alt="">
                            <p>家庭保洁</p>
                            </router-link>
                        </div>
                        <div class="con-r">
                           <router-link to="/secondMenu/baomuayi">
                                <img src="./../../assets/imgs/baomuayi.png" alt="">
                          
                            <p>保姆阿姨</p>
                           </router-link>
                        </div>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
import axios from "axios";
import level1 from "./../../../static/static/level1.json";
export default {
  data() {
    return {
      levelType: [],
      nowIndex: 0,
      currentObj: {}
    };
  },
  methods: {
    showThis(index) {
      //console.log(item.children)
      this.nowIndex = index;
      this.currentObj = this.levelType[index];
      this.currentObj = this.levelType[index].children1;
      //console.log(this.levelType[index])
      this.currentObj.imgUrl = this.levelType[index].imgUrl;
      console.log(this.levelType[index]);
    }
  },
  mounted() {
    //console.log(level1.level1)
    this.levelType = level1.level1;
    this.currentObj = this.levelType[this.nowIndex].children1;
    this.currentObj.imgUrl = this.levelType[this.nowIndex].imgUrl;
    //console.log(this.currentObj)
  }
};
</script>
<style lang="stylus" scoped>
redc = #ff552e;
bgc = #e6e9ea;

.main {
    .main-l {
        float: left;
        width: 280px;

        p {
            text-align: center;
            height: 40px;
            color: #fff;
            background-color: redc;
            line-height: 40px;
        }

        ul {
            li {
                height: 70px;
                background-color: bgc;
                line-height: 70px;
                position: relative;
                box-sizing: border-box;
                padding-left: 46px;

                &.active {
                    background-color: #fff;

                    &::after {
                        content: '';
                        background-color: redc;
                        width: 2px;
                        height: 70px;
                        position: absolute;
                        top: 0;
                        left: 0;
                    }
                }

                &:before {
                    content: '';
                    position: absolute;
                    bottom: 5px;
                    left: 18px;
                    width: 240px;
                    height: 1px;
                    background-color: #e6e9ea;
                }

                i {
                    width: 16px;
                    height: 16px;
                    position: absolute;
                    top: 26px;
                    left: 20px;
                    background-color: red;
                }

                i.jaifei {
                    background: url('./../../assets/imgs/jiaofei.png') no-repeat center;
                }

                i.jiating {
                    background: url('./../../assets/imgs/jiating.png') no-repeat center;
                }

                i.jiazheng {
                    background: url('./../../assets/imgs/jiazheng.png') no-repeat center;
                }

                i.qingxi {
                    background: url('./../../assets/imgs/qingxi.png') no-repeat center;
                }

                b {
                    font-size: 18px;
                    margin-right: 20px;
                }

                span {
                    font-size: 14px;
                    color: #333;
                    margin-right: 5px;
                }
            }
        }
    }

    .main-r {
        float: right;
        width: 128px;
        height: 318px;
        border: 1px solid bgc;
        background-color #fff
        p {
            padding-top 20px
            text-align: center;
            line-height: 30px;
            margin-bottom: 30px;
        }

        a {
            display: block;
            height: 100px;
            background: url('./../../assets/imgs/jiaofei3.png') no-repeat center 10px;
            position: relative;

            span {
                position: absolute;
                bottom: 20px;
                width: 100%;
                text-align: center;
                color: #333;
            }
        }
    }

    .dialog {
        height: 320px;
        margin-left: 280px;
        margin-right: 130px;
        background-color #fff
        box-shadow 0 0 10px #ddd
        >p {
            height: 40px;

            ul {
                margin-left: 10px;

                li {
                    float: left;
                    line-height: 40px;
                    padding: 0 5px;

                    a {
                        color: #333;
                        font-size: 18px;
                    }
                }
            }
        }

        .tlt {
            margin-left: 30px;
            height: 100%;
            >div{
                padding-right 20px
                margin-bottom 20px
            }
            h3 {
                text-align: left;
                margin-top: 1px;
                font-size: 16px;
                margin-bottom 8px
                a{
                    line-height 24px
                }
                i {
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    margin-right: 10px;
                }

                .fangwu {
                    background: url(http://img.58cdn.com.cn/ds/category/fwweixiu_icon.png) no-repeat center / contain;
                }

                .jiadian {
                    background: url(http://img.58cdn.com.cn/ds/category/jsweixiu_icon.png) no-repeat center / contain;
                }

                .baojie {
                    background: url(http://img.58cdn.com.cn/ds/category/baojie_icon.png) no-repeat center / contain;
                }

                .jiaofei {
                    background: url('./../../assets/imgs/jiaofei2.png') no-repeat center / contain;
                }
                 .guandao {
                    background: url('http://img.58cdn.com.cn/ds/category/shutong_icon.png') no-repeat center / contain;
                }
            }

            span {
                font-size: 14px;
                margin: 0 3px;
                color: #333;
            }

            img {
                display: block;
            }
        }
    }
}
.con{
    margin-top 20px
    .w{
        .conBox{
            ul{
                li{
                    float left
                    width 50%
                    padding 10px
                    box-sizing border-box
                    .con-l,.con-r{
                        width 50%
                        float left
                        padding-top 10px
                        text-align center
                        background-color #fff
                        img{
                            height 120px

                        }
                        p{
                            padding 5px 0
                        }
                    }
                    h3{
                        height 50px
                        font-size 18px 
                        line-height 50px
                        background-color #fef8f8
                        border 1px solid bgc
                        padding-left 30px
                        span{
                            font-size 14px
                            margin-left 20px
                        }
                    }
                }
            }
        }
    }
}
</style>