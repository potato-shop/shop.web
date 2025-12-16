<template>
  <layout :transparent="true">
    <breadcrumb-area title="Register" subtitle="Register" />
    <section class="login-area pt-100 pb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <div class="basic-login">
              <h3 class="text-center mb-60">註冊</h3>
              <register-form />
            </div>
          </div>
        </div>
      </div>
    </section>
  </layout>
</template>

<script setup lang="ts">
import Layout from '../layout/Layout.vue';
import BreadcrumbArea from '../components/common/breadcrumb/BreadcrumbArea.vue';
import RegisterForm from '../components/forms/RegisterForm.vue';

useHead({
  title: '註冊',
});
</script>
