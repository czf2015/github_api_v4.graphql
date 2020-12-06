# 杀死进程
pids=$(ps aux | grep node | awk '{print $1}')
for pid in $pids; do
    kill $pid
done

sleep 1
