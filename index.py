from threading import Thread
import os


no_of_threads = 2


def exec_command():
    os.popen("node youtubeViewer.js")



threads = []

for i in range(no_of_threads):
    t = Thread(name="thread".format(i), target=exec_command)
    t.start()
    threads.append(t)


print("came here")
for thread in threads:
    thread.join()
