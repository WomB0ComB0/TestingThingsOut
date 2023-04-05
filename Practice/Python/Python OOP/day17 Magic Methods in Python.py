# Magic methods in Python are special methods that start and end with double underscores.
class Playlist:
    def __init__(self, songs):
        self.songs = songs
        self.index = 0
    def __len__(self): # len() function
        return len(self.songs)
    def __getitem__(self, index): # index operator
        return self.songs[index]
    def __next__(self): # next() function
        if self.index >= len(self.songs):
            raise StopIteration
        song = self.songs[self.index]
        self.index += 1
        return song
    def __iter__(self): # iter() function
        return self
    def __setitem__(self, index, song): # index operator
        self.songs[index] = song
    def __delitem__(self, index): # del operator
        del self.songs[index]
    def __str__(self): # str() function
        return f"Playlist: {self.songs}"
    
playlist = Playlist(["Huit octobre 1971", "Skinny Love", "So Low"])
print(len(playlist)) # Output: 3
print(playlist[0]) # Output: Huit octobre 1971
print(playlist) # Output: Playlist: ['Huit octobre 1971', 'Skinny Love', 'So Low']