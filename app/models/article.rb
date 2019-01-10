class Article < ApplicationRecord
    validates :id,    uniqueness: true
    validates :title, uniqueness: true
    validates :description, uniqueness: true
    validates :author, uniqueness: true
    validates :tags, uniqueness: true
    
end
