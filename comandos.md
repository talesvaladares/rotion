npm create @quick-start/electron
npm install
npm run dev

configurar as fontes no index.html "meta"

npm install -D tailwindcss postcss autoprefixer
cd src/renderer
npx tailwindcss init -p

fazer a configuração do tailwind no electron.vite.config

apagar o tsconfig web e node e deixar apenas o tsconfig como está

no packaje.json remover todas as dev dependencies do prettier e eslint, deixando apenas o esling
rodar npm install
npm i -D @rocketseat/eslint-config
criar um arquivo .eslintrc.json e colocar o que está abaixo
    {
    "extends": "@rocketseat/eslint-config/react",
    "rules": {
      "semi": [2, "always"],
      "prettier/prettier": [
          "error",
          {
            "semi": true
          }
      ]
    }
  }

configurar icone para mac no main
configurar caminho no electron.vite.config

configurar os icones junto a figma, os icones foram pegos no figma

configurar as cores que foram pegas no link da rockeseat, configurar dentro do renderer tailwind.config.js
configurar o background dentro do main

npm i clsx
npm i phosphor-react
npm i cmdk

configurar o define dentro do electron.vite.config


configurar dentro do main tudo que está abaixo
   
   backgroundColor: "#17141f", // configurar o background dentro do main
    titleBarStyle: "hiddenInset", // configurar isso tambem
    trafficLightPosition: {
      // configurar isso tambem
      x: 20,
      y: 20,
    },

configurar o plugin de drag e no-drag no tailwind.config.js

npm i electron-router-dom
npm i react-router-dom
npm install @tiptap/react @tiptap/starter-kit @tiptap/extension-document @tiptap/extension-placeholder @tiptap/extension-typography @tiptap/extension-highlight
npm i -D @tailwindcss/typography
npm i @radix-ui/react-collapsible
