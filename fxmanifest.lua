fx_version "cerulean"
lua54 'yes'
games { "gta5","rdr3" }
rdr3_warning "I acknowledge that this is a prerelease build of RedM, and I am aware my resources *will* become incompatible once RedM ships."

author "Bluxell Resources | Vidarr"
version '1.0.0'

shared_script "shared/**/*"
server_script "server/**/*"
client_script "client/**/*"



ui_page 'web/build/index.html'
files {
  'web/build/**/*',
}
