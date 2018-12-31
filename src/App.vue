 <template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
        <!--<a href="#/goods">商品</a>-->
      </div>
      <div class="tab-item">
        <router-link to="/rating">评论</router-link>
        <!--<a href="#/rating">评论</a>-->
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
        <!--<a href="#/seller">商家</a>-->
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header/header.vue'
export default {
  name: 'App',
  components: {
    'v-header': header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app
  .tab
    display:flex //布局写在前面
    width:100% //宽高其次
    height:40px
    line-height:40px
    .tab-item //最后才是可继承的
      flex:1
      text-align:center
      &>a
        display:block
        font-size 14px
        color rgb(77,85,93)
        &.active //这里要缩进，active是a的属性
          color red
</style>
