<template>
  <layout :transparent="true">
    <breadcrumb-area title="商品詳情" subtitle="商品詳情" />
    <shop-details-area :product="product!" />
  </layout>
</template>

<script setup lang="ts">
import Layout from '../../layout/Layout.vue';
import BreadcrumbArea from '../../components/common/breadcrumb/BreadcrumbArea.vue';
import ShopDetailsArea from '../../components/shop-details/ShopDetailsArea.vue';
import { getProductAPI } from '../../api';
import type { ProductType } from '../../types/productType';

const route = useRoute();
const productId = route.params.id;
const product = ref<ProductType>({
  ID: 0,
  CategoryID: 0,
  Name: '',
  Description: '',
  Price: 0,
  StockQuantity: 0,
  ImageURL: '',
  CreatedAt: '',
  UpdatedAt: '',
  Category: {
    ID: 0,
    Name: '',
    Description: '',
    CreatedAt: '',
    UpdatedAt: '',
  },
});

onBeforeMount(async () => {
  product.value = await getProductAPI(Number(productId));
  console.log('🚀 ~ product.value:', product.value);
});

useHead({
  title: '商品詳情',
});
</script>
