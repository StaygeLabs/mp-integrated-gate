branch=$(git symbolic-ref --short HEAD)
echo branch: $branch

if [ $branch = "main" ]; then
  branch=live
else
  branch=dev
fi

# # common
npx swagger-typescript-api --modular -o src/api/generated/youmeon -p https://s3.ap-northeast-2.amazonaws.com/new-stayge.swagger.repo/$branch/youmeon-api-front.oas.yaml || exit 1
sed -i '' $'s#\'\.\/http-client\'#\'..\/..\/http-client\'#g' src/api/generated/youmeon/Api.ts
rm -rf src/api/generated/youmeon/http-client.ts

npx swagger-typescript-api --modular -o src/api/generated/staygeid -p https://s3.ap-northeast-2.amazonaws.com/new-stayge.swagger.repo/$branch/fanid-api-front.oas.yaml || exit 1
sed -i '' $'s#\'\.\/http-client\'#\'..\/..\/http-client\'#g' src/api/generated/staygeid/Api.ts
rm -rf src/api/generated/staygeid/http-client.ts