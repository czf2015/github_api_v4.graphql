APP=$1
PROJECTS=$(pwd)
ROOT=$PROJECTS/$APP
# echo $ROOT

. $(dirname $0)/set_npm_registry.sh

echo "正在初始化项目。。。"
npx create-react-app $APP --template typescript
cd $ROOT && mkdirp bin tools docs test src/common src/config src/hooks src/layouts src/pages src/utils src/services public/icons public/images public/styles public/vendors
echo "开始安装依赖包。。。"
npm i -S react-router react-router-dom axios 
npm i -D less less-loader @types/react-router-dom
