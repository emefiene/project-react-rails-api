class UsersController < ApplicationController
    def index
        user = User.all
        render json: user, status: :ok

      end
  
      def show
          user = User.find(params[:id])
          render json: user, status: :ok
      end
  
      # def welcome
      #     render json: {hi: 'welcome'}
      # end
      
      # def welcome_name
      #     render json: {hi: "welcome #{params[:name]}"}
      # end
  
      def create
         user = User.create!(params_user)
         render json: user, status: :ok
      end
  
      def update
         user = User.find(params[:id])
         user.update!(params_user)
         render json: user, status: :accepted
      end
  
      def destroy
          user = User.find(params[:id])
          user.destroy
          head :no_content
      end
  
  
  
      private
  
      def params_user
         params.permit(:name, :email, :password)
      end
end
