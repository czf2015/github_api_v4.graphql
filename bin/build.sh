npm run build
DST=$(dirname $0)/../tmp
mkdirp $DST
tar -cvf $DST/dist.tar build