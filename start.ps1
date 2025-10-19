#start.ps1
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
git push origin --delete gh-pages
npm run build
npm run deploy