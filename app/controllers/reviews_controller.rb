class ReviewsController < ApplicationController

      skip_before_action :authorized_user, only: [:index, :show]
 
    def index
        review = Review.all
        render json: review, status: :ok

      end
  
      def show
          review = Review.find(params[:id])
          render json: review, includes: :users, status: :ok
      end
  
      def create 
         @review = current_user.reviews.create!(params_review)
         render json: @review, status: :created   
            
      end

   
      private
  
      def params_review
         params.permit(:comments, :name, :production_id)
      end
  
end

