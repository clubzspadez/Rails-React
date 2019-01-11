# Welltok Submission

This is my submission for the coding challenge. Built with Ruby  on Rails, React, Redux, React-Router, react-bootstrap, Postgres
This project is still unfinished, however, I wanted to send it in on time so it could be reviewed. Any feedback is appreciated.

## Installation

Use git to clone the repository [repo](git@github.com:clubzspadez/Rails-React.git)


## Usage

```
#navigate into the folder
cd Rails-React

#once on master
git fetch -all
git checkout jrchallenge

#installed the necessary gems
bundle install

#create the tables in the database
rake db:create

#create records in the database based on seed data
# to find csv check lib/seeds/import.csv
rake db:seed

#start rails server --> set to host on port 5000
rails s

#in a new terminal navigate to client folder
cd client

#install dependencies
npm install 

#start client server --> port 3000
npm start
```

## Common issues
- Seeding reports that rake has been aborted due to ActiveRecord not being unique
- Running 'rails console' > 'Article.all' shows that articles from the .csv are being imported to the ActiveRecord table

- ran into issues with 'class Article Serializer < ActiveModel::Article Serializer attributes :title, :description, :author, :tags'

- had to re-create my Serializer, after my data was showing up



## Acknowledgment
Shout out to Erica for giving me an opportunity to do this challenge. To be honest I was a bit rusty on my Ruby/Rails so this took me some time to complete and put together. You can check my commits on jrchallenge, and I'm more than happy to talk about my process.