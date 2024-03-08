install.packages("ggplot2")
install.packages("reshape2")
install.packages("readr")

library(ggplot2)
library(reshape2)
library(readr)

wheat <- read_csv("C:\\Users\\Mike Odnis\\documents\\github\\testingthingsout\\practice\\class\\csc 466\\assignment\\wheat.csv")

head(wheat)

wheat_long <- reshape2::melt(wheat[,1:7], id.vars = NULL)

ggplot(wheat_long, aes(x = value, fill = variable)) +
  geom_density(alpha = 0.5) +
  facet_wrap(~variable, scales = "free") +
  labs(title = "Feature Distributions",
      x = "Feature Value",
      y = "Density") +
  theme_minimal()

cor_matrix <- cor(wheat[,1:7])

# Check for highly correlated features (threshold can be adjusted)
highly_correlated <- abs(cor_matrix) > 0.8
colnames(highly_correlated) <- rownames(highly_correlated)

# Print pairs of features with high correlation
if (any(highly_correlated, na.rm = TRUE)) {
  print("Potentially highly correlated features:")
  print(which(highly_correlated, arr.ind = TRUE))
} else {
  print("No highly correlated features found (threshold: 0.8).")
}

# https://rpubs.com/WomB0ComB0/1159100