module Api::V1
  class SessionsController < ApplicationController
    skip_before_action :authenticate_user, only: :create

    def create
      user = User.where(email: params[:email],
                        password: params[:password]).first

      if user 
        user.refresh_access_token!
        render json: user, status: :ok
      else
        render json: { message: 'Bad credentials' }, status: :unauthorized
      end
    end

    def destroy
      current_user.expire_access_token!
      render json: { message: 'Logged out' }, status: :ok
    end
  end
end
