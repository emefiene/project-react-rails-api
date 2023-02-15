class MembersController < ApplicationController
    def index
        member = Member.all
        render json: member, status: :ok

      end
  
      def show
          member = Member.find(params[:id])
          render json: member, status: :ok
      end
  
      # def welcome
      #     render json: {hi: 'welcome'}
      # end
      
      # def welcome_name
      #     render json: {hi: "welcome #{params[:name]}"}
      # end
  
      def create
         member = Member.create!(params_member)
         render json: member, status: :ok
      end
  
      def update
         member = Member.find(params[:id])
         member.update!(params_member)
         render json: member, status: :accepted
      end
  
      def destroy
          member = Member.find(params[:id])
          member.destroy
          head :no_content
      end
  
  
  
      private
  
      def params_member
         params.permit(:name, :email, :password, :owner_id)
      end
end
