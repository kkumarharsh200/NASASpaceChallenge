#!/usr/bin/env python
# coding: utf-8

# In[41]:


import pandas as pd
import numpy as np

import re
import string

import spacy

import gensim
from gensim import corpora


# In[42]:


review_data= pd.read_csv(r"C:\Users\piyus\OneDrive\Desktop\\databa.csv")
print(review_data.head(2))
print(len(review_data))


# In[43]:


def clean_text(text ): 
    delete_dict = {sp_character: '' for sp_character in string.punctuation} 
    delete_dict[' '] = ' ' 
    table = str.maketrans(delete_dict)
    text1 = text.translate(table)
    #print('cleaned:'+text1)
    textArr= text1.split()
    text2 = ' '.join([w for w in textArr if ( not w.isdigit() and  ( not w.isdigit() and len(w)>3))]) 
    
    return text2.lower()


# In[44]:


import nltk
nltk.download('stopwords') # run this one time


# In[53]:


review_data.dropna(axis = 0, how ='any',inplace=True) 






review_data['text'] = review_data['text'].apply(clean_text)
review_data['Num_words_text'] = review_data['text'].apply(lambda x:len(str(x).split())) 



max_review_data_sentence_length  = review_data['Num_words_text'].max()

mask = (review_data['Num_words_text'] <1000) & (review_data['Num_words_text'] >=20)
df_short_reviews = review_data[mask]

print('No of Short reviews')
print(len(df_short_reviews))
print(df_short_reviews)


# In[54]:


nlp= spacy.load(r'C:\Users\piyus\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.10_qbz5n2kfra8p0\LocalCache\local-packages\Python310\site-packages\en_core_web_sm\en_core_web_sm-3.4.0',disable=['parser', 'ner'])

def lemmatization(texts,allowed_postags=['NOUN', 'ADJ']): 
       output = []
       for sent in texts:
             doc = nlp(sent) 
             output.append([token.lemma_ for token in doc if token.pos_ in allowed_postags ])
       return output


# In[ ]:


text_list=df_sampled['Text'].tolist()
print(text_list[1])
tokenized_reviews = lemmatization(text_list)
print(tokenized_reviews[1])


# dictionary = corpora.Dictionary(tokenized_reviews)
# doc_term_matrix = [dictionary.doc2bow(rev) for rev in tokenized_reviews]
# print(doc_term_matrix)

# In[ ]:


LDA = gensim.models.ldamodel.LdaModel

# Build LDA model
lda_model = LDA(corpus=doc_term_matrix, id2word=dictionary, num_topics=5, random_state=100,
                chunksize=1000, passes=50,iterations=100)


# In[ ]:


lda_model.print_topics()

