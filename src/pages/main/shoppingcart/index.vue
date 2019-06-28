<template>
  <div>
    <div class="shoppingcart-main">
        <div class="goods-item" v-for="(goods, index) in commodity" :key="index">
          <!-- <div class="goods-content" v-bind="goods"> -->
            <p>{{goods.name}}</p>
            <p>单价：{{goods.price}}</p>
            <p>
              数量：
              <button v-if="goods.buyNum" @click="add(goods.id)"> - </button>
              <button v-else @click="add(goods.id)" disabled> - </button>
              {{goods.buyNum}}
              <button v-if="goods.count-goods.buyNum" @click="reduce(goods.id)"> + </button>
              <button v-else @click="reduce(goods.id)" disabled> + </button>
            </p>
          <!-- </div> -->
        </div>       
    </div>
    <div class="shoppingcart">
      <button class="cart"><i class="el-icon-shopping-cart-full"></i></button>
    </div>
  </div> 
</template>
<script lang="ts">
import shoppingcart from './entry'
export default shoppingcart
</script>