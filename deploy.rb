require 'sinatra'

post '/deploy' do
  # todo - check secret
  `./deploy.sh`
end
