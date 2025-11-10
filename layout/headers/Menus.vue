<template>
  <ul>
    <li
      v-for="(item, index) in menuData"
      :key="index"
      :class="`${
        item.hasDropdown && !item.megamenu ? 'active' : item.megamenu && 'mega-menu'
      }`"
    >
      <nuxt-link :href="`${item.link}`">{{ item.title }}</nuxt-link>
    </li>
  </ul>
</template>

<script lang="ts">
import bg from '~/assets/img/bg/mega-menu-bg.jpg';

import { defineComponent } from 'vue';
import menuData from '../../mixins/menuData';

export default defineComponent({
  mixins: [menuData],
  data() {
    return {
      bg,
    };
  },
  setup() {},
});
</script>
