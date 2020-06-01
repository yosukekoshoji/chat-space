## 📗 アプリ名
Chat Space
====

## 📗 制作背景
プログラミング学習の一環で、チャット機能を持つアプリケーションを作る事になりました。
プログラミングにおいて必要な要素を詰め込んだものとなっております。

## 📗 ログイン情報
- URL: http://18.177.245.47/
- Email: hogehoge@gmail.com
- password: hogehoge

## 📗 開発環境
- Ruby 2.5.1
- Ruby on Rails 5.2.4.2
- Jquery 
- MySQL 5.6.43
- VSCode（Visual Studio Code）
- AWS(デプロイ)
- AWS S3

## 📗 アプリ機能
## 1.ユーザー登録/ログイン/ログアウト機能
<img width="600" alt="ログイン" src="https://user-images.githubusercontent.com/58423182/83343099-30763680-a331-11ea-8129-7bf628593211.png">
<img width="600" alt="サインイン" src="https://user-images.githubusercontent.com/58423182/83343102-31a76380-a331-11ea-8222-c214e9dfc646.png">

## 2.コメント投稿機能
![コメント投稿](https://user-images.githubusercontent.com/58423182/83369747-3daa2880-a3f8-11ea-8882-47378cbe66a3.gif)
コメント投稿と画像投稿が可能です。また連続投稿を禁止しておりボタンを２度押すとエラー文が出るようになっています。
## 3.グループ作成 機能
![グループ追加](https://user-images.githubusercontent.com/58423182/83375083-b618e580-a408-11ea-92bd-13394a903d6f.gif)

## 4.グループユーザーの追加/削除 機能
ユーザーの追加
![ユーザーの追加](https://user-images.githubusercontent.com/58423182/83374512-cc25a680-a406-11ea-846d-8ecd7568b5e9.gif)
![ユーザーの削除](https://user-images.githubusercontent.com/58423182/83374607-1a3aaa00-a407-11ea-9f7a-66a5aebbcc72.gif)
## 5.ユーザー情報の編集 機能
![ユーザー編集](https://user-images.githubusercontent.com/58423182/83374978-53bfe500-a408-11ea-8e02-168f679940af.gif)

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|name|string|null: false|

###Association
- has_many :comments
- has_many :users_groups
- has_many :groups, through: :users_groups

## groupsテーブル
Column|Type|Options|
|------|----|-------|
|name|string|null: false|


###Association
- has_many :comments
- has_many :users_groups
- has_many :users, through: :users_groups

## commentsテーブル
Column|Type|Options|
|------|----|-------|
|text|string|-------|
|photo|image|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

###Association
- belongs_to :user
- belongs_to :group

## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group


