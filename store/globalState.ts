import type { User, CartItem } from '../types/productType';

export const globalUserState = ref<User>({
  ID: 0,
  Email: '',
  Name: '',
  Password: '',
  AvatarURL: '',
  Role: '',
  CreatedAt: '',
  UpdatedAt: '',
  CartItems: [],
});
