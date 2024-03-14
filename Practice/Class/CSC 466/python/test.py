import math

P_apple = 10 / 20
P_orange = 10 / 20

mean_apple = 150
std_dev_apple = 10
mean_orange = 200
std_dev_orange = 15

def gaussian_probability(x, mean, std_dev):
    return (1 / (std_dev * math.sqrt(2 * math.pi))) * math.exp(
        -((x - mean) ** 2) / (2 * std_dev**2)
    )

P_weight_given_apple = gaussian_probability(180, mean_apple, std_dev_apple)
P_weight_given_orange = gaussian_probability(180, mean_orange, std_dev_orange)

P_red_given_apple = 0.8
P_red_given_orange = 0.1 

P_apple_given_weight_red = P_apple * P_weight_given_apple * P_red_given_apple
P_orange_given_weight_red = P_orange * P_weight_given_orange * P_red_given_orange

# if P_apple_given_weight_red > P_orange_given_weight_red:
print("Probability that the fruit is an apple:", P_apple_given_weight_red)
# else:
print("Probability that the fruit is an orange:", P_orange_given_weight_red)
