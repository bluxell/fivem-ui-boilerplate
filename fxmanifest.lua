fx_version "cerulean"

description "Advanced React + Vite + Tailwind NUI Boilerplate"
author "Bluxell Resources | Vidarr"
version '1.0.0'
repository 'https://github.com/bluxell/fivem-ui-boilerplate'

extended_from "Project Error's React Boilerplate"
extended_repo "https://github.com/project-error/fivem-react-boilerplate-lua"
lua54 'yes'

games {
  "gta5",
  "rdr3"
}

ui_page 'web/build/index.html'

client_script "client/**/*"
server_script "server/**/*"

files {
  'web/build/index.html',
  'web/build/**/*',
}
