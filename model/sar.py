import sys
# currently hardcoding path to Recommenders GitHub
sys.path.append(r"C:\Users\karlc\Documents\projects\Recommenders")

"""
Imports as specified in Recommenders/notebooks/00_quick_start/sar_movielens.ipynb
"""
import logging
import numpy as np
import pandas as pd
import papermill as pm

from reco_utils.common.timer import Timer
from reco_utils.dataset import movielens
from reco_utils.dataset.python_splitters import python_stratified_split
from reco_utils.evaluation.python_evaluation import map_at_k, ndcg_at_k, precision_at_k, recall_at_k
from reco_utils.recommender.sar import SAR


"""
This is very similar to the Jupyter notebook
"""


# top k items to recommend
TOP_K = 10

# load dataframe containing users and recipes they like or dislike
data_path = r'C:\Users\karlc\Documents\projects\recipe-box\data\recipes.pkl'
data = pd.read_pickle(data_path)

train, test = python_stratified_split(data, ratio=0.75, col_user='userID', col_item='recipeID', seed=42)

print("""
Train:
Total Ratings: {train_total}
Unique Users: {train_users}
Unique Items: {train_items}

Test:
Total Ratings: {test_total}
Unique Users: {test_users}
Unique Items: {test_items}
""".format(
    train_total=len(train),
    train_users=len(train['userID'].unique()),
    train_items=len(train['recipeID'].unique()),
    test_total=len(test),
    test_users=len(test['userID'].unique()),
    test_items=len(test['recipeID'].unique()),
))

logging.basicConfig(level=logging.DEBUG,
                    format='%(asctime)s %(levelname)-8s %(message)s')

model = SAR(
    col_user="userID",
    col_item="recipeID",
    col_rating="rating",
    col_timestamp="timestamp",
    similarity_type="jaccard",
    time_decay_coefficient=30,
    timedecay_formula=True
)

with Timer() as train_time:
    model.fit(train)

print("Took {} seconds for training.".format(train_time.interval))

with Timer() as test_time:
    top_k = model.recommend_k_items(test, remove_seen=True)

print("Took {} seconds for prediction.".format(test_time.interval))

print(top_k.head(10))
