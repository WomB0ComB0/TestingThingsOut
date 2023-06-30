# def getFinalString(s):
#     str = "AWS"
#     while str in s:
#         s = s.replace(str, "")
#     return -1 if s == "" else s
# print(getFinalString("AAWSWS"))

import math
def military_to_standard(hours, mins):
    if hours > 12:
        hours -= 12
        return str(hours) + ":" + str(mins).zfill(2) + " PM"
    elif hours == 12:
        return str(hours) + ":" + str(mins).zfill(2) + " PM"
    elif hours == 0:
        hours += 12
        return str(hours) + ":" + str(mins).zfill(2) + " AM"
    else:
        return str(hours) + ":" + str(mins).zfill(2) + " AM"
print(military_to_standard(0, 0))