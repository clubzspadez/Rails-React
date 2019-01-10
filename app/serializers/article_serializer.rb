class ArticleSerializer < ActiveModel::ArticleSerializer
    attributes :id, :title, :description, :author, :tags, :created, :updated
end