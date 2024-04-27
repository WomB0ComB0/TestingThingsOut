from karel.stanfordkarel import *


def main():
    for i in range(4):
        switch_column_top()
        switch_column_bottom()  # exception on last


def switch_column():
    for i in range(4):
        move()


def switch_column_top():
    switch_column()
    turn_right()


def switch_column_bottom():
    switch_column()
    turn_left()


def turn_right():
    turn_left()
    turn_left()
    turn_left()


def half_angle():
    turn_left()
    turn_left()


def get_moving():
    while front_is_clear():
        if no_beepers_present():
            put_beeper()
        put_beeper()
        move()


if __name__ == "__main__":
    main()
