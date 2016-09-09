class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :access_token
end
