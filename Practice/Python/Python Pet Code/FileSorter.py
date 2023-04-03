import os
from pathlib import Path

AUDIO_EXT = ['.mp3']
VIDEO_EXT = ['.mp4', '.mkv', '.avi']
DOCUMENT_EXT = ['.pdf', '.docx', '.pptx', '.xls', '.doc', '.ppt', '.txt']
IMAGE_EXT = ['.jpg', '.jpeg', '.png']

def get_file_extension(file_path: str) -> str:
    return Path(file_path).suffix.lower()

def organize_files(path: str) -> None:
    document_path = os.path.join(path, 'documents')
    images_path = os.path.join(path, 'images')
    audios_path = os.path.join(path, 'audio')
    videos_path = os.path.join(path, 'videos')
    others_path = os.path.join(path, 'others')

    for dir_path in [document_path, images_path, audios_path, videos_path, others_path]:
        if not os.path.isdir(dir_path):
            os.mkdir(dir_path)

    files = os.listdir(path)

    for file_name in files:
        extension = get_file_extension(file_name)
        print(extension)
        
        if not extension:
            continue

        if extension in IMAGE_EXT:
            new_path = os.path.join(images_path, file_name)
        elif extension in DOCUMENT_EXT:
            new_path = os.path.join(document_path, file_name)
        elif extension in VIDEO_EXT:
            new_path = os.path.join(videos_path, file_name)
        elif extension in AUDIO_EXT:
            new_path = os.path.join(audios_path, file_name)
        else:
            new_path = os.path.join(others_path, file_name)

        os.rename(os.path.join(path, file_name), new_path)
    
path = r'C:\Users\user\Downloads'
organize_files(path)
# or
path = input('Enter the path: ')
if os.path.isdir(path):
    for file_name in os.listdir(path):
        dir_path = os.path.join(path, file_name)
        if os.path.isfile(dir_path):
            organize_files(path)
            break
else:
    print('Invalid path')