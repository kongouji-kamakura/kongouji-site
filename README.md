# 金剛寺 公式サイト

浄土真宗本願寺派 大船山 金剛寺（神奈川県鎌倉市玉縄）の公式サイト初期版。

## 技術構成

- **フレームワーク**: [Astro 4](https://astro.build/) （静的サイト生成）
- **スタイリング**: [Tailwind CSS 3](https://tailwindcss.com/)
- **アイコン**: [Lucide](https://lucide.dev/) via `astro-icon` + `@iconify-json/lucide`
- **フォント**: Google Fonts `Noto Serif JP` / `Noto Sans JP`
- **デプロイ**: GitHub Pages（GitHub Actions ワークフロー同梱）

## 必要環境

- Node.js 20.x 以上推奨
- npm 10.x 以上

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動（http://localhost:4321）
npm run dev

# 本番ビルド
npm run build

# ビルド結果をローカルで確認
npm run preview
```

## ディレクトリ構成

```
src/
├── assets/
│   ├── placeholders/   # 仮画像（後から本物の写真に差し替え）
│   └── styles/global.css
├── components/         # 共通UIコンポーネント
├── data/site.ts        # 寺院情報の単一ソース（住所・電話・宗派など）
├── layouts/BaseLayout.astro
└── pages/              # 各ページ（index.astro, about.astro, ...）
public/
├── favicon.svg
└── og-image.svg        # 公開時はPNG化推奨
.github/workflows/deploy.yml
```

## 文章・画像の差し替え方

### 寺院の基本情報（住所・電話・宗派など）

`src/data/site.ts` を編集すると、サイト全体に反映されます。

### 各ページの仮文章

各ページ（`src/pages/*.astro`）内に `{/* TODO[content]: ... */}` のコメントが付いた箇所が、後から差し替える仮文章です。差し替え後はコメントを削除してください。

### 画像

`src/assets/placeholders/` の SVG を、本物の写真（JPG / WebP）に差し替えてください。
ファイル名を同じにすればコード変更不要で反映されます。

| 差し替え対象 | ファイル | 推奨サイズ |
| --- | --- | --- |
| トップヒーロー | `src/assets/placeholders/hero.svg` | 1920×1200 |
| 金剛寺について | `src/assets/placeholders/about.svg` | 1200×1500 |
| 法話会 | `src/assets/placeholders/houwakai.svg` | 1600×1200 |
| 合葬墓 | `src/assets/placeholders/gassobo.svg` | 1600×1200 |
| お骨預かり | `src/assets/placeholders/okotsu.svg` | 1600×1200 |
| アクセス | `src/assets/placeholders/access.svg` | 1600×1200 |
| OGP画像 | `public/og-image.svg` | 1200×630（PNG推奨） |

## GitHub Pages 公開手順

### 1. GitHub にリポジトリを作成

GitHub で `kongouji-site` などの名前で空のリポジトリを作成します（Public）。

### 2. `astro.config.mjs` を編集

```js
export default defineConfig({
  site: 'https://<your-github-username>.github.io',
  base: '/<your-repo-name>',  // 例: '/kongouji-site'
  ...
});
```

独自ドメイン（例: `kongouji.jp`）を使う場合は：

```js
site: 'https://kongouji.jp',
base: '/',
```

…とし、`public/CNAME` ファイルを作成して `kongouji.jp` の1行のみ記載します。

### 3. リポジトリへ push

```bash
git init
git add .
git commit -m "Initial commit: Astro site scaffold"
git branch -M main
git remote add origin https://github.com/<username>/<repo-name>.git
git push -u origin main
```

### 4. GitHub Pages を有効化

リポジトリの **Settings → Pages → Build and deployment → Source** を **GitHub Actions** に設定します。

main ブランチへの push 後、`.github/workflows/deploy.yml` が自動で実行され、数分でサイトが公開されます。

## アクセシビリティ・パフォーマンス

- すべてのアニメーションは `prefers-reduced-motion: reduce` を尊重
- キーボード操作で全ナビ・全リンクが操作可能
- 構造化データ（JSON-LD `BuddhistTemple`）を `BaseLayout.astro` に埋め込み
- 画像は Astro の `<Image />` で自動最適化（WebP化・遅延読み込み）

## 重要な方針

- このサイトは予約システムではなく、電話相談への導線サイトです
- 合葬墓・お骨預かり・ご法事・ご葬儀の費用・条件は推測で記載しない
- 詳しくは [AGENTS.md](./AGENTS.md) を参照

## ライセンス

サイトのコードは本リポジトリ管理下、コンテンツ（文章・写真）は金剛寺に帰属します。
