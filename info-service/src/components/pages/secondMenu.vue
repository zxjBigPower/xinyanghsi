<template>
  <div>
      <div class="wrap" v-if="!static">
          <div class="list">
              <div class="item" v-for="(item,index) in dataArr">
					<div>
						<img :src="item.pic_url"/>
					</div>
					<div>
						<router-link to="/thirdMenu" target="_blank">
                            <p>	{{item.creative_title}} <span class="jing">精</span></p>
						    <p>{{item.creative_describe}}}</p>
						    <p>{{item.title}}</p>
						    <p>
							<span>会员8年</span>
							<span>企业认证</span>
						    </p>
                        </router-link>
					</div>
					<div>
						<p>
							联系商家
						</p>
					</div>
				</div>
          </div>
      </div>  
      <div id="second" class="wrap" v-if="static">

			<div class="list">
				<router-link to="/thirdMenu" target="_blank">
				<div class="item">
					<div>
						<img src="http://t1.58cdn.com.cn/bidding/small/n_v1bl2lwtjpvvqfon5rkncq.jpg?w=160&h=120&ss=1"/>
					</div>

					<div>
						<p>	深圳专业培训保姆 月嫂 育婴师 13年品牌靠信誉 [8图] <span class="jing">精</span></p>
						<p>深圳有多家连锁店及加盟店。保姆，钟点工就近派遣，安全，方便</p>
						<p>深圳有邻家政有限公司</p>
						<p>
							<span>会员8年</span>
							<span>企业认证</span>
						</p>
					</div>

					<div>
						<p>
							联系商家
						</p>
					</div>
				</div>
				</router-link>
				<router-link to="/thirdMenu" target="_blank">
				<div class="item">
					<div>
						<img src="http://pic8.58cdn.com.cn/p1/small/n_v23a192e15cc2b476a91f7dd6a22a069af.jpg?w=160&h=120&ss=1"/>
					</div>

					<div>
						<p>	深圳专业培训保姆 月嫂 育婴师 13年品牌靠信誉 [8图] <span class="jing">精</span></p>
						<p>深圳有多家连锁店及加盟店。保姆，钟点工就近派遣，安全，方便</p>
						<p>深圳有邻家政有限公司</p>
						<p>
							<span>会员8年</span>
							<span>企业认证</span>
						</p>
					</div>

					<div>
						<p>
							联系商家
						</p>
					</div>
				</div>
                </router-link>
				<router-link to="/thirdMenu" target="_blank">
				<div class="item">
					<div>
						<img src="http://pic8.58cdn.com.cn/p1/small/n_v23db1dc9ee51a49fc94d7d5ed9b21d73a.jpg?w=160&h=120&ss=1"/>
					</div>

					<div>
						<p>	深圳专业培训保姆 月嫂 育婴师 13年品牌靠信誉 [8图] <span class="jing">精</span></p>
						<p>深圳有多家连锁店及加盟店。保姆，钟点工就近派遣，安全，方便</p>
						<p>深圳有邻家政有限公司</p>
						<p>
							<span>会员8年</span>
							<span>企业认证</span>
						</p>
					</div>

					<div>
						<p>
							联系商家
						</p>
					</div>
				</div>
                </router-link>
                <router-link to="/thirdMenu" target="_blank">
				<div class="item">
					<div>
						<img src="http://pic8.58cdn.com.cn/p1/small/n_v23a192e15cc2b476a91f7dd6a22a069af.jpg?w=160&h=120&ss=1"/>
					</div>

					<div>
						<p>	深圳专业培训保姆 月嫂 育婴师 13年品牌靠信誉 [8图] <span class="jing">精</span></p>
						<p>深圳有多家连锁店及加盟店。保姆，钟点工就近派遣，安全，方便</p>
						<p>深圳有邻家政有限公司</p>
						<p>
							<span>会员8年</span>
							<span>企业认证</span>
						</p>
					</div>

					<div>
						<p>
							联系商家
						</p>
					</div>
				</div>
                </router-link>
                <router-link to="/thirdMenu" target="_blank">
				<div class="item">
					<div>
						<img src="http://t1.58cdn.com.cn/bidding/small/n_v1bl2lwtjpvvqfon5rkncq.jpg?w=160&h=120&ss=1"/>
					</div>

					<div>
						<p>	深圳专业培训保姆 月嫂 育婴师 13年品牌靠信誉 [8图] <span class="jing">精</span></p>
						<p>深圳有多家连锁店及加盟店。保姆，钟点工就近派遣，安全，方便</p>
						<p>深圳有邻家政有限公司</p>
						<p>
							<span>会员8年</span>
							<span>企业认证</span>
						</p>
					</div>

					<div>
						<p>
							联系商家
						</p>
					</div>
				</div>
                </router-link>
			</div>
			
		</div>

  
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      static: true,
      dataArr:[]
    };
  },
  mounted() {
    //console.log(this.$route.params);

    axios.get("./static/static/"+this.$route.params.id+".json").then(res=> {
        this.static=false
        console.log(eval('(' + res.data + ')'));
        let str=eval('(' + res.data + ')')
        this.dataArr=str
    }).catch(err =>{
        this.static=true
        console.log(err)
    });
  }
};
</script>
<style lang="stylus" scoped>
.jing {
    margin-left: 5px;
    display: inline-block;
    height: 18px;
    line-height: 18px;
    width: 18px;
    color: #fff;
    text-align: center;
    background-color: #f5a520;
    font-size: 14px;
}

.wrap {
    width: 1200px;
    margin: 0 auto;
}

.list .item {
    display: flex;
    border-bottom: 1px solid #e6e9ea;
    background-color #fff
}

.list .item div:nth-child(1) {
    width: 162px;
    padding: 25px 20px 25px 0;
}

.list .item div:nth-child(1) img {
    width: 160px;
    height: 120px;
}

.list .item div:nth-child(2) {
    padding: 28px 6px 20px 0;
    color: #999;
    font-size: 14px;
    width: 803px;
}
div{
    background-color #fff
}
.list .item div:nth-child(2) p {
    margin: 0;
}

.list .item div:nth-child(2) p:nth-child(1) {
    font-size: 20px;
    line-height: 25px;
    color: #333;
}

.list .item div:nth-child(2) p:nth-child(2) {
    margin-top: 10px;
}

.list .item div:nth-child(2) p:nth-child(3) {
    margin-top: 5px;
    line-height: 20px;
    padding-bottom: 5px;
}

.list .item div:nth-child(2) p:nth-child(4) {
    margin-top: 7px;
}

.list .item div:nth-child(2) p:nth-child(4) span {
    padding: 3px 7px;
    border-radius: 2px;
    margin-right: 5px;
    vertical-align: top;
    color: #2e86b9;
    font-size: 12px;
    border: 1px solid #d6e3ea;
    display: inline-block;
}

.list .item div:nth-child(3) {
    width: 180px;
    padding-top: 25px;
    text-align: left;
    vertical-align: top;
    padding-right: 0;
    position: relative;
    float right
}

.list .item div:nth-child(3) p {
    width: 130px;
    height: 40px;
    margin: 35px 0 0 5px;
    line-height: 40px;
    background: url('./../../assets/imgs/btn-tel.png') no-repeat -10px -10px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    text-indent: 29px;
    cursor: pointer;
}
</style>
