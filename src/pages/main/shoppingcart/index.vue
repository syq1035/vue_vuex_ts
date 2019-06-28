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
      <button class="cart" @click="dialogVisible = true"><i class="el-icon-shopping-cart-full"></i></button>
    </div>
    <el-dialog class="dialog"
      title="订单详情"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <!-- <el-table :data="commodity">
        <el-table-column v-if="buyNum" property="name" label="日期" width="150"></el-table-column>
        <el-table-column v-if="buyNum" property="price" label="日期" width="150"></el-table-column>
        <el-table-column v-if="buyNum" property="buyNum" label="日期" width="150"></el-table-column> 
      </el-table>
      -->
      <table>
        <tr>
          <td>商品名</td>
          <td>数量</td>
          <td>总价</td>
        </tr>
        <tr v-for="(goods, index) in commodity" :key="index">
          <td v-if="goods.buyNum">{{goods.name}}</td>
          <td v-if="goods.buyNum">{{goods.buyNum}}</td>
          <td v-if="goods.buyNum">{{goods.price * goods.buyNum}}</td>
        </tr>
      </table>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">结算</el-button>
      </span>
    </el-dialog>
  </div> 
</template>
<script lang="ts">
import shoppingcart from './entry'
export default shoppingcart
</script>