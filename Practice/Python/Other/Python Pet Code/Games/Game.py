import tkinter as tk
import random

class Game(tk.Frame):
    def __init__(self):
        tk.Frame.__init__(self)
        self.grid()
        self.master.title("2048")
        self.main_grid = tk.Frame(self, bg = "92877D", bd = 5, width=800, height = 800) 
        self.main_grid.grid(padY=(110,0))

        self.make_GUI()

        self.master.bind("<Left>", self.left)
        self.master.bind("<Right>", self.right)
        self.master.bind("<Up>", self.up)
        self.master.bind("<Down>", self.down)

        self.mainloop()
    def make_GUI(self):
        self.cells = []
        for i in range(4):
            row = []
            for j in range(4):
                cell_frame = tk.Frame(
                    self.main_grid,
                    bg = self.Color_EmptyCell,
                    width=150,
                    height=150
                )
                cell_frame.grid(row=i, column=j, padX=5, padY=5)
                cell_number = tk.Label(self.main_grid, bg=self.Color_EmptyCell)
                cell_number.grid(row=i, column=j)
                cell_data = {"Frame": cell_frame, "Number": cell_number}
                row.append(cell_data)
            self.cells.append(row)
        score_frame = tk.Frame(self)
        score_frame.place(relx=0.5, y=45, anchor="center")
        tk.Label(score_frame, text="Score", font=self.Font_ScoreLabel).grid(row=0)
        self.score_label = tk.Label(score_frame, text="0", font=self.Font_Score)
        self.score_label.grid(row=1)
    def start_game(self):
        self.matrix = [[0] * 4 for _ in range(4)]
        row = random.randint(0, 3)
        col = random.randint(0, 3)
        self.matrix[row][col] = 2
        self.cells[row][col]["Frame"].configure(bg=self.Color_Cells)
        self.cells[row][col]["Number"].configure(
            bg=self.Color_Cells[2],
            fg=self.Color_Number[2],
            font=self.Font_Number[2],
            text="2"
        )
        while(self.matrix[row][col] != 0):
            row = random.randint(0, 3)
            col = random.randint(0, 3)
            self.matrix[row][col] = 2
            self.cells[row][col]["Frame"].configure(bg=self.Color_Cells)
            self.cells[row][col]["Number"].configure(
            bg=self.Color_Cells[2],
            fg=self.Color_Number[2],
            font=self.Font_Number[2],
            text="2"
            )
        self.score = 0
    def stack(self):
        new_matrix = [[0] * 4 for _ in range(4)]
        for i in range(4):
            fill_position = 0
            for j in range(4):
                if self.matrix[i][j] != 0:
                    new_matrix[i][fill_position] = self.matrix[i][j]
                    fill_position += 1
        self.matrix = new_matrix
    def combine(self):
        for i in range(4):
            for j in range(3):
                if self.matrix[i][j] != 0 and self.matrix[i][j] == self.matrix[i][j+1]:
                    self.matrix[i][j] *= 2
                    self.matrix[i][j+1] = 0
                    self.score += self.matrix[i][j]
    def reverse(self):
        new_matrix = []
        for i in range(4):
            new_matrix.append([])
            for j in range(4):
                new_matrix[i].append(self.matrix[i][3-j])
        self.matrix = new_matrix
    def transpose(self):
        new_matrix = [[0] * 4 for _ in range(4)]
        for i in range(4):
            for j in range(4):
                new_matrix[i][j] = self.matrix[j][i]
        self.matrix = new_matrix
    def add_new_tile(self):
        row = random.randint(0, 3)
        col = random.randint(0, 3)
        while(self.matrix[row][col] != 0):
            row = random.randint(0, 3)
            col = random.randint(0, 3)
        self.matrix[row][col] = random.choice([2,4])
    def update_GUI(self):
        for i in range(4):
            for j in range(4):
                cell_value = self.matrix[i][j]
                if cell_value == 0:
                    self.cells[i][j]["Frame"].configure(bg=self.Color_EmptyCell)
                    self.cells[i][j]["Number"].configure(bg=self.Color_EmptyCell, text="")
                else:
                    self.cells[i][j]["Frame"].configure(bg=self.Color_Cells[cell_value])
                    self.cells[i][j]["Number"].configure(
                        bg=self.Color_Cells[cell_value],
                        fg=self.Color_Number[cell_value],
                        font=self.Font_Number[cell_value],
                        text=str(cell_value)
                    )
        self.score_label.configure(text=self.score)
        self.update_idletasks()

    def left(self, event):
        self.stack()
        self.combine()
        self.stack()
        self.add_new_tile()
        self.update_GUI()
    def right(self, event):
        self.reverse()
        self.stack()
        self.combine()
        self.stack()
        self.reverse()
        self.add_new_tile()
        self.update_GUI()
    def up(self, event):
        self.transpose()
        self.stack()
        self.combine()
        self.stack()
        self.transpose()
        self.add_new_tile()
        self.update_GUI()
    def down(self, event):
        self.transpose()
        self.reverse()
        self.stack()
        self.combine()
        self.stack()
        self.reverse()
        self.transpose()
        self.add_new_tile()
        self.update_GUI()
def main():
    print()
if  __name__ == "__main__":
    main()