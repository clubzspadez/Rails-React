module Api
    module V1
        class ArticleController < ApplicationController

            #GET /articles
            def index
                @articles = Article.all
                render json: @articles
                
            end

            def import
                Article.import(articles)
            end

            #POST /articles
            def create

            end
            
            #GET /
            def show
        
            end
            
            #Delete
            def destroy
        
            end
            
            # PATCH/PUT /articles/1
            def update
                @article = Article.find(params[:id])
            end
        end
    end
end