echo starting
docker build -t moressoft .
cp ./wwwroot ./../docker/wwwroot
mkdir -p ./../docker/wwwroot/uploads 
chmod -R 777 ./../docker/wwwroot/uploads 
docker compose down
docker compose up -d
echo done