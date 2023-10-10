import pandas as pd

import nltk

from nltk.sentiment.vader import SentimentIntensityAnalyzer

from nltk.corpus import stopwords

from nltk.tokenize import word_tokenize

from nltk.stem import WordNetLemmatizer

# download nltk corpus (first time only)
import nltk

nltk.download('all')

# Load the amazon review dataset

df = pd.read_csv('https://raw.githubusercontent.com/pycaret/pycaret/master/datasets/amazon.csv')

def preprocess_text(text):

	# Tokenize the text

	tokens = word_tokenize(text.lower())


	# Remove stop words

	filtered_tokens = [token for token in tokens if token not in stopwords.words('english')]


	# Lemmatize the tokens

	lemmatizer = WordNetLemmatizer()

	lemmatized_tokens = [lemmatizer.lemmatize(token) for token in filtered_tokens]


	# Join the tokens back into a string

	processed_text = ' '.join(lemmatized_tokens)

	return processed_text

# apply the function df

df['reviewText'] = df['reviewText'].apply(preprocess_text)


df