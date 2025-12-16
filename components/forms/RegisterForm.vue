<template>
  <Form :validation-schema="schema" @submit="onSubmit">
    <div class="mb-20">
      <label for="name">姓名 <span>**</span></label>
      <Field name="name" id="name" type="text" placeholder="輸入姓名..." />
      <ErrorMessage name="name" class="text-danger" />
    </div>

    <div class="mb-20">
      <label for="email-id">信箱 <span>**</span></label>
      <Field name="email" id="email-id" type="text" placeholder="輸入信箱..." />
      <ErrorMessage name="email" class="text-danger" />
    </div>

    <div class="mb-20">
      <label for="pass">密碼 <span>**</span></label>
      <Field name="password" id="pass" type="password" placeholder="輸入密碼..." />
      <ErrorMessage name="password" class="text-danger" />
    </div>

    <div class="mt-10"></div>
    <button type="submit" class="os-btn w-100">Register Now</button>
    <div class="or-divide"><span>or</span></div>
    <nuxt-link href="/login" class="os-btn os-btn-black w-100">login Now</nuxt-link>
  </Form>
</template>

<script setup lang="ts">
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required('請輸入姓名').label('Name'),
  email: yup.string().required('請輸入信箱').email().label('Email'),
  password: yup.string().required('請輸入密碼').min(6).label('Password'),
});

function onSubmit(values: object, { resetForm }: { resetForm: () => void }) {
  console.log('🚀 ~ onSubmit ~ values:', values);
  alert(JSON.stringify(values, null, 2));
  resetForm();
}
</script>
