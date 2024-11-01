#!/bin/bash

function cleanup () {
  [ -n "$(docker ps -aq -f status=running)" ] && \
	  docker container kill test
  ZOMBIES="$(docker ps -aq -f status=exited)"
  [ -n "$ZOMBIES" ] && docker rm "$ZOMBIES"
}

trap "cleanup" EXIT

cd $(dirname $0)
if [ $(docker image ls themecreator | wc -l) -ne 2 ]; then
  echo "Building new image"
  docker build -t themecreator:test .
fi

docker run --network=host -it \
       -u $UID:$GID -v $(pwd)/app.core:/usr/src/app \
       --name test themecreator:test
