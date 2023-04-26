import turtle

s = turtle.Screen()
t = turtle.Turtle()
s.bgcolor('black')
t.width(2)
t.speed(100)

col = ('green', 'blue', 'purple')
for i in range(300):
    t.pencolor(col[i % 3])
    t.forward(i * 4)
    t.left(121)
s.exitonclick()