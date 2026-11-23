# Sobrevivente — projeto Android (Capacitor)

O jogo (`src/index.html`) é empacotado numa WebView nativa com three.js embutido (funciona offline).
O app roda em paisagem, tela cheia imersiva e mantém a tela ligada.

## Opção A — sem instalar nada (recomendado)
1. Crie um repositório no GitHub e envie esta pasta.
2. Aba **Actions** → "Build APK" (roda sozinho a cada push).
3. Baixe o artefato **sobrevivente-apk** → `app-debug.apk` → instale no celular (permita "fontes desconhecidas").

## Opção B — local
Requisitos: Node 18+, JDK 17, Android SDK (Android Studio).
```
npm run setup   # só na primeira vez
npm run apk     # gera android/app/build/outputs/apk/debug/app-debug.apk
```
Depois de editar `src/index.html`, rode apenas `npm run apk`.

## Publicar na Play Store
O APK gerado é de debug. Para publicar, gere um AAB assinado no Android Studio (Build > Generate Signed Bundle).
