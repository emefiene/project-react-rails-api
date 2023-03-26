class ReviewsController < ApplicationController
 
    def index
        review = Review.all
        render json: review, status: :ok

      end
  
      def show
          review = Review.find(params[:id])
          render json: review, includes: :users, status: :ok
      end
  
      # def welcome
      #     render json: {hi: 'welcome'}
      # end
      
      # def welcome_name
      #     render json: {hi: "welcome #{params[:name]}"}
      # end
  
      def create
         review = Review.create!(params_review)
         render json: review, status: :created
      end
  
      def update
         review = Review.find(params[:id])
         review.update!(params_review)
         render json: review, status: :accepted
      end
  
      def destroy
          review = Review.find(params[:id])
          head :no_content
      end
    

  
  
      private
  
      def params_review
         params.permit(:name, :comments, :production_id, :user_id)
      end
  
end

