class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles  do |t|
      t.integer :article_id
      t.string :title
      t.string :description
      t.string :author
      t.string :tags
      t.string :created_at
      t.string :updated_at

    end
  end
end
