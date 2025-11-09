<template>
  <section :class="`footer__area footer-bg ${box_style ? 'box-m-15' : ''}`">
    <div class="footer__bottom">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-7">
            <div class="footer__copyright">
              <p>
                Copyright {{ new Date().getFullYear() }} ©
                <nuxt-link href="/">Outstock</nuxt-link> all rights reserved. Powered by
                <nuxt-link href="/">Theme_pure</nuxt-link>
              </p>
            </div>
          </div>
          <div class="col-xl-6 col-lg-5">
            <div class="footer__social f-right">
              <ul>
                <social />
                <li>
                  <a href="#"><i class="fas fa-share-alt"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Social from '~~/components/social/Social.vue';

export default defineComponent({
  components: { Social },
  props: {
    box_style: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
