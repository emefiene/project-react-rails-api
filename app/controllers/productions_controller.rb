class ProductionsController < ApplicationController

        before_action :authorized_user, only: [:create]

        def index
          render json: Production.all,  status: :ok

        end
    
        def show
            p = Production.find(params[:id])
            render json: p, includes: [:reviews, :users], status: :ok
        end
    
        def create
           p = Production.create!(params_production)
           render json: p, status: :created
        end
       
    
        def update
           p = Production.find(params[:id])
           p.update!(params_production)
           render json: p, status: :accepted
        end
    
        def destroy
            p = Production.find(params[:id])
            p.destroy
            head :no_content
        end
    
        
    
        private
    
        def params_production
           params.permit(:description, :image, :price, :rating, :quantity)
        end
    
end
