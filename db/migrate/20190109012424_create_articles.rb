class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles , { id: false } do |t|
      t.integer :id
      t.string :title
      t.string :description
      t.string :author  
      t.string :tags, array: true, default: []
      t.string :created_at
      t.string :updated_at

      t.timestamps
    end
  end
end
