<template>
  <section class="page__title p-relative d-flex align-items-center" :style="{ backgroundImage: `url(${bg})` }">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="page__title-inner text-center">
            <h1>{{ title }}</h1>
            <div class="page__title-breadcrumb">
              <nav aria-label="breadcrumb"></nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import bg from '~/assets/img/page-title/page-title-1.jpg';

defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
});
</script>
