class OwnersController < ApplicationController
        def index
          owner = Owner.all
          render json: owner, include:[:reviews],  status: :ok

        end
    
        def show
            owner = Owner.find(params[:id])
            render json: owner, include:[:reviews], status: :ok
        end
    
        # def welcome
        #     render json: {hi: 'welcome'}
        # end
        
        # def welcome_name
        #     render json: {hi: "welcome #{params[:name]}"}
        # end
    
        def create
           owner = Owner.create(params_owners)
           render json: owner, status: :created
        end
    
        def update
           owner = Owner.find(params[:id])
           owner.update(params_owners)
           render json: owner, status: :accepted
        end
    
        def destroy
            owner = Owner.find(params[:id])
            owner.destroy
            head :no_content
        end
    
    
    
        private
    
        def params_owners
           params.permit(:name, :image, :price, :rating, :quantity)
        end
    
end
