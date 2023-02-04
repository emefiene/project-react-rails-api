class ProductionsController < ApplicationController
        def index
          render json: Production.all,  status: :ok

        end
    
        def show
            p = Production.find(params[:id])
            render json: p, include:[:members, :reviews, :users], status: :ok
        end
    
        # def welcome
        #     render json: {hi: 'welcome'}
        # end
        
        # def welcome_name
        #     render json: {hi: "welcome #{params[:name]}"}
        # end
    
        def create
           p = Production.create(params_owners)
           render json: p, status: :created
        end
    
        def update
           p = Production.find(params[:id])
           p.update(params_owners)
           render json: p, status: :accepted
        end
    
        def destroy
            p = Production.find(params[:id])
            p.destroy
            head :no_content
        end
    
    
    
        private
    
        def params_production
           params.permit(:name, :image, :price, :rating, :quantity)
        end
    
end
