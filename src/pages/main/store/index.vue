<template>
<div class="store-main">
  <div class="goods-item" v-for="(goods, index) in commodity" :key="index">
    <div class="goods_content" v-bind="goods">
      <p>{{goods.name}}</p>
      <p>单价：{{goods.price}}</p>
      <p>剩余数量：{{goods.count - goods.buyNum}}</p>
      <el-button v-if="goods.count - goods.buyNum" type="info" @click="addToShoppingcart(goods.id)">加入购物车</el-button>
      <el-button v-else type="info" @click="addToShoppingcart(goods.id)" disabled>加入购物车</el-button>
    </div>
  </div>
</div>
  
</template>
<script lang="ts">
import store from './entry'
export default store
</script>