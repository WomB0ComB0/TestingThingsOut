from tkinter import *

window = Tk()

window.title("Welcome to LikeGeeks app")
window.geometry("350x200")

## Create a label widget ##
lbl = Label(window, text="Hello", font=("Arial Bold", 50))

lbl.grid(column=0, row=0)

txt = Entry(window, width=10)

txt.grid(column=1, row=0)
txt.focus()


def clicked() -> None:
    res = "Welcome to " + txt.get()
    lbl.configure(text=res)


btn = Button(window, text="Click Me", command=clicked)

btn.grid(column=2, row=0)

window.mainloop()

# ________________________________________________

from tkinter import *
from tkinter.ttk import *

window = Tk()
window.title("Welcome to LikeGeeks app")
window.geometry("350x200")
combo = Combobox(window)
combo["values"] = (1, 2, 3, 4, 5, "Text")
combo.current(1)  # set the selected item
combo.grid(column=0, row=0)
window.mainloop()

# Blob
from tkinter import *

window = Tk()
window.title("Welcome to LikeGeeks app")
window.geometry("350x200")

lbl = Label(window, text="Hello")
lbl.grid(column=0, row=0)

txt = Entry(window, width=10, state="disabled")
txt.grid(column=1, row=0)
txt.focus()


def clicked():
    res = "Welcome to " + txt.get()
    lbl.configure(text=res)


btn = Button(window, text="Click Me", command=clicked)
btn.grid(column=2, row=0)
window.mainloop()

# ___
from tkinter import *
from tkinter.ttk import *

window = Tk()
window.title("Welcome to LikeGeeks app")
window.geometry("350x200")
combo = Combobox(window)
combo["values"] = (1, 2, 3, 4, 5, "Text")
combo.current(1)  # set the selected item
combo.grid(column=0, row=0)
combo.get()

window.mainloop()
# ______
from tkinter import *
from tkinter.ttk import *

window = Tk()
window.title("Welcome to LikeGeeks app")
window.geometry("350x200")
# chk_state = BooleanVar()
# chk_state.set(True) #set check state
chk_state = IntVar()
chk_state.set(0)  # uncheck
chk_state.set(1)  # check
chk = Checkbutton(window, text="Choose", var=chk_state)
chk.grid(column=0, row=0)
window.mainloop()

# ______
from tkinter import *
from tkinter.ttk import *

window = Tk()
window.title("Welcome to LikeGeeks app")
window.geometry("350x200")


def clicked() -> None:
    return


rad1 = Radiobutton(window, text="First", value=1, command=clicked)
rad2 = Radiobutton(window, text="Second", value=2)
rad3 = Radiobutton(window, text="Third", value=3)
rad1.grid(column=0, row=0)
rad2.grid(column=1, row=0)
rad3.grid(column=2, row=0)
window.mainloop()

# _____
from tkinter import *
from tkinter.ttk import *

window = Tk()
window.title("Welcome to LikeGeeks app")
selected = IntVar()
rad1 = Radiobutton(window, text="First", value=1, variable=selected)
rad2 = Radiobutton(window, text="Second", value=2, variable=selected)
rad3 = Radiobutton(window, text="Third", value=3, variable=selected)


def clicked():
    print(selected.get())


btn = Button(window, text="Click Me", command=clicked)
rad1.grid(column=0, row=0)
rad2.grid(column=1, row=0)
rad3.grid(column=2, row=0)
btn.grid(column=3, row=0)
window.mainloop()

# _____
from tkinter import *
from tkinter import scrolledtext

window = Tk()
window.title("Welcome to LikeGeeks app")
window.geometry("350x200")
txt = scrolledtext.ScrolledText(window, width=40, height=10)
txt.insert(INSERT, "Your text goes here")
txt.delete(1.0, END)
txt.grid(column=0, row=0)
window.mainloop()

# _____
from tkinter import *
from tkinter import messagebox

window = Tk()
window.title("Welcome to LikeGeeks app")
window.geometry("350x200")


def clicked():
    messagebox.showinfo("Message title", "Message content")


btn = Button(window, text="Click here", command=clicked)
btn.grid(column=0, row=0)
window.mainloop()

# ________
from tkinter import messagebox

res = messagebox.askquestion("Message title", "Message content")
res = messagebox.askyesno("Message title", "Message content")
res = messagebox.askyesnocancel("Message title", "Message content")
res = messagebox.askokcancel("Message title", "Message content")
res = messagebox.askretrycancel("Message title", "Message content")

# _____
from tkinter import *

window = Tk()
window.title("Welcome to LikeGeeks app")
window.geometry("350x200")
spin = Spinbox(window, values=(3, 8, 11), width=5)
spin.grid(column=0, row=0)
window.mainloop()

# ____
from tkinter import *
from tkinter.ttk import Progressbar
from tkinter import ttk

window = Tk()
window.title("Welcome to LikeGeeks app")
window.geometry("350x200")
style = ttk.Style()
style.theme_use("default")
style.configure("black.Horizontal.TProgressbar", background="black")
bar = Progressbar(window, length=200, style="black.Horizontal.TProgressbar")
bar["value"] = 70
bar.grid(column=0, row=0)
window.mainloop()

# _____
from tkinter import filedialog
from os import path

file = filedialog.askopenfilename(
    filetypes=(("Text files", "*.txt"), ("all files", "*.*")),
    initialdir=path.dirname(__file__),
)
files = filedialog.askopenfilenames()
dir = filedialog.askdirectory()

# _____
from tkinter import *
from tkinter import Menu

window = Tk()
window.title("Welcome to LikeGeeks app")
menu = Menu(window)
new_item = Menu(menu)
new_item.add_command(label="New")
new_item.add_separator()
new_item.add_command(label="Edit")
menu.add_cascade(label="File", menu=new_item)
window.config(menu=menu)
window.mainloop()

# ____
from tkinter import *
from tkinter import ttk

window = Tk()
window.title("Welcome to LikeGeeks app")
tab_control = ttk.Notebook(window)
tab1 = ttk.Frame(tab_control)
tab_control.add(tab1, text="First")
tab_control.pack(expand=1, fill="both")
window.mainloop()

# _____
from tkinter import *
from tkinter import ttk

window = Tk()
window.title("Welcome to LikeGeeks app")
tab_control = ttk.Notebook(window)
tab1 = ttk.Frame(tab_control)
tab2 = ttk.Frame(tab_control)
tab_control.add(tab1, text="First")
tab_control.add(tab2, text="Second")
lbl1 = Label(tab1, text="label1")
lbl1.grid(column=0, row=0)
lbl2 = Label(tab2, text="label2")
lbl2.grid(column=0, row=0)
tab_control.pack(expand=1, fill="both")
window.mainloop()
