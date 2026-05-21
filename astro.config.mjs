import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

// GitHub Pages 公開設定。
// 公開URL: https://kongouji-kamakura.github.io/kongouji-site/
// ※ 将来 独自ドメイン（例: kongouji.jp）にする場合は
//    site を 'https://kongouji.jp'、base を '/' に変更し、public/CNAME を追加する。
export default defineConfig({
  site: 'https://kongouji-kamakura.github.io',
  base: '/kongouji-site',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    icon({ include: { lucide: ['*'] } }),
  ],
  build: {
    assets: 'assets',
  },
});
