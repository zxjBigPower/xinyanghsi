<template>
  <div id="app">
    <div class="nav ">
      <div class="w clearfix">
          <ul> 
            <li><a href="#">登录 </a>/<a href="#"> 注册</a></li>
            <li><a href="#">个人中心</a></li>
          </ul>
      </div>
    </div>
     <div class="head">
      <div class="w">
        <a href="#"><img src="./assets/czy_logos1.png"  alt=""></a>
        <div class="searchBox"><i></i><input type="text" placeholder="请输入类别名称或关键字"><span>搜服务</span></div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@import url(./components/libs/common.css);
.nav .w{
  border-bottom: 1px solid #e6e9ea;
}
.nav {
  background: #fff;
  height: 38px;
  border-bottom: 1px solid #e6e9ea;
  z-index: 2;
  position: relative;
}
.nav ul {
  font-size: 14px;
  line-height: 38px;
  float: right;
}
.nav ul li {
  float: left;
  margin-left: 30px;
}
.nav ul li a {
  color: #666;
}
.head {
  z-index: 2;
  position: relative;
  background-color: #fff;
  padding-top: 40px;
  height: 100px;
}
.head a {
  display: inline-block;
  float: left;
}
.head a img {
  display: block;
  height: 60px;
  width: 173px;
}
.head .searchBox {
  float: right;
  width: 600px;
  height: 44px;
  background-color: #ff552e;
  position: relative;
}
.head .searchBox i {
  position: absolute;
  top: 12px;
  left: 10px;
  width: 20px;
  height: 20px;
  background: url(./assets/imgs/search.png) no-repeat center/contain;
}
.head .searchBox input {
  width: 500px;
  box-sizing: border-box;
  border: 0;
  padding: 0 0 0 35px;
  margin-top: 2px;
  margin-left: 2px;
  height: 40px;
  float: left;
}
.head .searchBox span {
  line-height: 44px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body{
  background: #e6e9ea;
}
</style>
