import { type menuType } from '../types/menuType';

export default {
  data() {
    return {
      menuData: [
        {
          link: '/',
          title: '主頁',
          hasDropdown: true,
          megamenu: true,
        },
        {
          link: '/shop-4-col',
          title: '商品',
          hasDropdown: true,
          megamenu: true,
        },
        {
          link: '/account',
          title: '我的帳戶',
          hasDropdown: true,
          megamenu: true,
        },
      ] as menuType[],
    };
  },
};
