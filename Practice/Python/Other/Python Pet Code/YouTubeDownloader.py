from pytube import YouTube

myVideo = YouTube("https://www.youtube.com/watch?v=oS8lASbvlpI")

yt = YouTube("https://www.youtube.com/watch?v=oS8lASbvlpI")

myVideoStreams = yt.streams

print(myVideoStreams)
