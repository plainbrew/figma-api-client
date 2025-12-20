# @plainbrew/figma-api-client

Figma REST API の TypeScript クライアントライブラリです。[openapi-fetch](https://openapi-ts.dev/openapi-fetch/) ベースで型安全な API クライアントを提供します。

## インストール

```bash
npm install @plainbrew/figma-api-client
```

または

```bash
pnpm add @plainbrew/figma-api-client
```

## 使い方

### 基本的な使い方

```typescript
import { createClient } from "@plainbrew/figma-api-client";

// クライアントを作成
const client = createClient({
  baseUrl: "https://api.figma.com",
});

// 認証トークンを設定してAPIを呼び出す
const { data, error } = await client.GET("/v1/me", {
  headers: {
    "X-Figma-Token": "your-figma-personal-access-token",
  },
});

if (error) {
  console.error("Error:", error);
} else {
  console.log("User info:", data);
}
```

### ファイル情報を取得する例

```typescript
const { data, error } = await client.GET("/v1/files/{key}", {
  params: {
    path: {
      key: "your-file-key",
    },
  },
  headers: {
    "X-Figma-Token": "your-figma-personal-access-token",
  },
});

if (error) {
  console.error("Error:", error);
} else {
  console.log("File info:", data);
}
```

### 型定義の使用

```typescript
import type { components } from "@plainbrew/figma-api-client";

// Figma API のレスポンス型を使用
type User = components["schemas"]["User"];
type File = components["schemas"]["FILE"];
```

## 開発

### スキーマの生成

```bash
pnpm run generate:schema
```

### ビルド

```bash
pnpm run build
```

## リリース

このプロジェクトは GitHub Actions による自動化されたリリースフローを使用しています。

### リリース手順

1. **リリース PR の作成**
   - GitHub の Actions タブから「Create Release PR」ワークフローを手動実行
   - リリースするバージョンタイプを選択:
     - `major`: メジャーバージョンアップ (例: 1.0.0 → 2.0.0)
     - `minor`: マイナーバージョンアップ (例: 1.0.0 → 1.1.0)
     - `patch`: パッチバージョンアップ (例: 1.0.0 → 1.0.1)
     - `premajor`, `preminor`, `prepatch`, `prerelease`: プレリリース版
   - ワークフローが自動的にバージョンを更新し、`release-vX.X.X` ブランチと PR を作成

2. **リリースの実行**
   - 作成されたリリース PR をレビュー
   - PR をマージすると、自動的に以下が実行されます:
     - Git タグの作成 (`vX.X.X`)
     - GitHub Release の作成
     - パッケージのビルドと npm への公開
       - 通常バージョン: `latest` タグで公開
       - プレリリース版 (バージョンに `-` を含む): `next` タグで公開

### プレリリース版のインストール

```bash
npm install @plainbrew/figma-api-client@next
```
