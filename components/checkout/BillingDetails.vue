<template>
  <div class="row">
    <div class="col-md-12">
      <div class="checkout-form-list">
        <label>收件人姓名 <span class="required">*</span></label>
        <Field name="city" type="text" placeholder="收件人姓名" />
        <ErrorMessage name="city" class="error" />
      </div>
    </div>
    <div class="col-md-12">
      <div class="checkout-form-list">
        <label>地址 <span class="required">*</span></label>
        <Field name="city" type="text" placeholder="地址" />
        <ErrorMessage name="city" class="error" />
      </div>
    </div>
    <div class="col-md-6">
      <div class="checkout-form-list">
        <label>信箱 <span class="required">*</span></label>
        <Field name="email" type="email" placeholder="信箱" />
        <ErrorMessage name="email" class="error" />
      </div>
    </div>
    <div class="col-md-6">
      <div class="checkout-form-list">
        <label>電話 <span class="required">*</span></label>
        <Field name="phone" type="text" placeholder="電話" />
        <ErrorMessage name="phone" class="error" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Field, ErrorMessage } from 'vee-validate';
</script>
