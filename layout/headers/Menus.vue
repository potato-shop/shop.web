<template>
  <ul>
    <li>
      <nuxt-link href="/product">商品</nuxt-link>
    </li>
    <li v-if="globalUserState.ID != 0">
      <nuxt-link href="/account">我的帳戶</nuxt-link>
    </li>
    <li v-if="globalUserState.ID == 0">
      <nuxt-link href="/login">登入</nuxt-link>
    </li>
    <li>
      <nuxt-link href="/brand">品牌介紹</nuxt-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { globalUserState } from '../../store/globalState';
</script>
