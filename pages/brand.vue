<template>
  <layout :transparent="true">
    <breadcrumb-area title="品牌介紹" subtitle="品牌介紹" />
    <login-area />
  </layout>
</template>

<script setup lang="ts">
import Layout from '../layout/Layout.vue';
import BreadcrumbArea from '../components/common/breadcrumb/BreadcrumbArea.vue';
import LoginArea from '../components/login-register/LoginArea.vue';

useHead({
  title: '登入 - 復仇土豆',
});
</script>
