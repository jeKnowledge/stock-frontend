module Api::V1
  class SessionsController < ApplicationController
    skip_before_action :authenticate_user, only: :create

    def create
      if current_user
        current_user.refresh_access_token!
        render json: { access_token: @user.access_token }, status: :ok
      else
        render json: 'Bad credentials', status: :unauthorized
      end
    end

    def destroy
      current_user.expire_access_token!
      render json: 'Logged out', status: :ok
    end
  end
end
