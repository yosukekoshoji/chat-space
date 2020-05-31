## 📗 アプリ名
Chat Space


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


