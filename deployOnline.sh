tar -zcvf ./nodejs.tar --exclude=.git ../node_yizhen_website/
scp nodejs.tar root@116.62.31.226:/root/
rm -rf nodejs.tar
