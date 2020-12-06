APP=$1
PROJECTS=$(pwd)
ROOT=$PROJECTS/$APP
# echo $ROOT

. ./set_npm_registry.sh

echo "正在初始化项目。。。"
npx create-react-app $APP --template typescript
cd $ROOT && mkdirp bin tools docs test src/common src/config src/hooks src/layouts src/pages src/utils
echo "开始安装依赖包。。。"
npm i -D less less-loader
npm i -S react-router
