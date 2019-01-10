require 'csv'
namespace :import do
    desc "Import Articles from csv"
    task articles: :environment do



        csv_text = Rails.root.join('lib', 'seeds', 'import.csv')
        CSV.foreach(csv_text, headers: true) do |row|
            
            Article.create(id: row['id'], title: row['title'], description: row['description'], author: row['author'], tags: row['tags'])
        end
    end
end

