class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :author, :tags, :created_at, :updated_at
end
