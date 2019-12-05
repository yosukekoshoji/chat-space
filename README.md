# README

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|username|string|null: false|

###Association
- has_many :groups
- has_many :coments


## groupsテーブル
Column|Type|Options|
|------|----|-------|
|name|null: false|
|user_id|integer|null: ture|

###Association
- belongs_to :user


## commentsテーブル
Column|Type|Options|
|------|----|-------|
|text|string|null: false|

###Association
- belongs_to :user


