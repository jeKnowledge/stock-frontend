Rails.application.routes.draw do
  #constraints subdomain: 'api' do
    scope module: 'api' do
      namespace :v1 do
        # Users
        post :users, to: 'users#create'
        put :users, to: 'users#update'
        delete :users, to: 'users#destroy'

        # Sessions
        post :sessions, to: 'sessions#create'
        delete :sessions, to: 'sessions#destroy'

        # Items
        resources :items

        # Bookings
        resources :bookings, except: [:index]

        # Categories
        resources :categories

        # Slack Bot
        namespace :slack do
          get :list, to: 'slack#list'
          get :show, to: 'slack#show'
          post :book, to: 'slack#book'
          post :return, to: 'slack#return'
        end
      end
    end
  #end
end
