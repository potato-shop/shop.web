<template>
  <div class="your-order" style="padding-bottom: 30px;">
    <h3>你的訂單</h3>
    <div class="your-order-table table-responsive">
      <table>
        <thead>
          <tr>
            <th class="product-name">Product</th>
            <th class="product-total">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in state.cart_products" :key="i" class="cart_item">
            <td class="product-name">
              {{ item.title }} <strong class="product-quantity"> × {{ item.orderQuantity }}</strong>
            </td>
            <td class="product-total">
              <span class="amount">${{ item.price }}</span>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="cart-subtotal">
            <th>Cart Subtotal</th>
            <td>
              <span class="amount">${{ state.totalPriceQuantity.total.toFixed(2) }}</span>
            </td>
          </tr>
          <tr class="shipping">
            <th>Shipping</th>
            <td>
              <ul>
                <li>
                  <input v-model="ship_cost" :value="7.0" id="flat-rate" name="ship-cost" type="radio" />
                  <label for="flat-rate"> Flat Rate: <span class="amount">$7.00</span> </label>
                </li>
                <li>
                  <input v-model="ship_cost" id="free" value="free" name="ship-cost" type="radio" />
                  <label for="free">Free Shipping:</label>
                </li>
              </ul>
            </td>
          </tr>
          <tr class="order-total">
            <th>Order Total</th>
            <td>
              <strong>
                <span class="amount">
                  ${{
                    typeof ship_cost === 'number' && ship_cost > 0
                      ? (state.totalPriceQuantity.total + ship_cost).toFixed(2)
                      : state.totalPriceQuantity.total.toFixed(2)
                  }}
                </span>
              </strong>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>

    <div class="order-button-payment mt-20">
      <button type="submit" class="os-btn os-btn-black">送出訂單</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCartStore } from '../../store/useCart';

const ship_cost = ref(0);
const state = useCartStore();
</script>
