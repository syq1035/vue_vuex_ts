<template>
  <el-row class="tac">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      text-color="black"
      active-text-color="#ffd04b">
      <el-menu-item index="1" @click.native="navTo('home')">
        <i class="el-icon-menu"></i>
        <span class="" slot="title">
          首页
        </span>
      </el-menu-item>
      <el-menu-item index="2" @click.native="navTo('shoppingcart')">
        <i class="el-icon-menu"></i>
        <span class="" slot="title">
          购物车
        </span>
      </el-menu-item>
      <el-menu-item index="3"  @click.native="navTo('store')">
        <i class="el-icon-menu"></i>
        <span class="" slot="title" >
          仓库
        </span>
      </el-menu-item>
    </el-menu>
  </el-row>
</template>
<script lang="ts">
import entry from './entry'
export default entry
</script>