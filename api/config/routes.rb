Rails.application.routes.draw do
  #constraints subdomain: 'api' do
    scope module: 'api' do
      namespace :v1 do
        resources :users
        resources :items
        resources :bookings
      end
    end
  #end
end
