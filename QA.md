# 検証記録 — 2026-10-27

対象： https://onebe-inc.github.io/vaizo-blue-preview/ 。GitHub Pages、main。

|項目|結果・証拠|
|---|---|
|HTML/CSS/JS・主要画像の公開取得|PASS：HTTP 200、noindexあり。主要ロゴ・FV写真・事業写真を読み戻し|
|1440×900のFVと横はみ出し|PASS：ローカルChromeのDOM計測。FV高さ900px、CTA下端668.08px、横はみ出しなし。qa/desktop-fv.png|
|1800×1125のFV|PASS：ローカルChrome。FV高さ1125px、CTA下端811.45px、横はみ出しなし|
|390×844相当のFV|PASS：ローカルChrome。CTA下端558.99px、横はみ出しなし|
|312×675の公開FV|PASS：公開Chrome。CTA下端460.21px、横はみ出しなし|
|スマホの角丸メニュー開閉|PASS：公開Chrome。aria-expanded=true、navのdisplay:flexと画面表示を確認。閉じた公開FVをqa/published-mobile.pngに保存|
|取り組みカード開閉|PASS：公開Chrome。「現場から考える」の開閉ボタン、aria-expanded=true、詳細の表示を確認|
|紹介モーダル|PARTIAL：公開Chromeでdialogの表示=trueを確認。閉じる操作の再確認はブラウザー接続タイムアウトのため未完。実動画は未設定|
|正式VAIZOロゴ|PASS：既存管理素材から余白をトリミング、ヘッダーに配置。READMEに出典を記録|
|320〜768の全幅、低い横長画面、タブレット、キーボード全導線|NOT_TESTED：対応CSSは実装、すべての組み合わせの実測は未完|
|画像原稿との完全なピクセル比較|NOT_TESTED：同一写真・配置・コピーを基にHTML実装。画面高への調整とレスポンシブによる変更あり。100%一致とは未判定|
|コールド3回のLCP/CLS/TBT、転送量、再訪性能|NOT_TESTED：Chromeの接続と画面取得が不安定。未計測を合格扱いしない|
|実ユーザーINP/LCP/CLS|NOT_TESTED：実ユーザー計測なし|
|動画・3D・常時アニメーションの停止・解放|N/A：実装していない|

配信画像24件合計約446KiB、JS約1.4KiB、CSS約20KiB（ファイルサイズ、通信量ではない）。外部フォントの実転送は未計測。本文・CTAは初回HTML、下部画像lazy、FV写真は即時取得。トラッキング・フォーム送信なし。

デモとして公開。写真は生成したイメージで、ニュースやメッセージも確認用原稿を含む。問い合わせ等の外部リンクはVAIZO公式ページへ接続。公式サイトは更新していない。
