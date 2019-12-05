# README

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|username|string|null: false|

###Association
- has_many :groups
- has_many :users_comments
- has_many :comments, through: :users_comments


## groupsテーブル
Column|Type|Options|
|------|----|-------|
|groupname|null: false|
|user_id|integer|null: ture|

###Association
- belongs_to :user


## commentsテーブル
Column|Type|Options|
|------|----|-------|
|text|string|null: false|

###Association
- has_many :users_comments
- has_many :users, through: :users_comments


## users_commentsテーブル
Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: ture|
|comment_id|integer|null: false, foreign_key: ture|

###Association
- belongs_to :user
- belongs_to :comment
