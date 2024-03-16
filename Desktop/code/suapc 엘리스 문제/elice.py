import sys     

# 학생 수  
studentNum = int(sys.stdin.readline())
# 헬로빗의 친구들이 지원하는 엘리스 트랙
friends_track = list(sys.stdin.readline().rstrip())
# 헬로빗이 지원하는 엘리스 트랙
helloBit_track = sys.stdin.readline()

same_track = 0
for friend_track in friends_track:
    if (friend_track == helloBit_track):
        same_track += 1

print(same_track)
