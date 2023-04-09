import turtle
s = turtle.Screen()
t = turtle.Turtle()
s.bgcolor('black')
t.pencolor('purple')
t.speed(100)
col = ('green', 'blue', 'purple')
for i in range(10):
    for x in range(8):
        t.speed(x+10)
        for n in range(2):
            t.pensize(2)
            t.circle(80+i*20, 90)
            t.lt(90)
        t.lt(45)
    t.pencolor(col[i % 3])
s.exitonclick()
