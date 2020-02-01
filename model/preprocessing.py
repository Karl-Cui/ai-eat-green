import json
import os
import time

import pandas as pd
import random as rand


# Read recipes file
json_file = r'C:\Users\karlc\Documents\projects\recipe-box\data\recipes_raw_nosource_ar.json'
with open(json_file, 'r') as f:
    recipes = json.load(f)

# Fake data--add users that like a certain ingredient
data = []
recipes = [recipes[key] for key in list(recipes.keys())[:3000]]  # Index recipes
ingredient_list = [
    'chicken', 'garlic', 'cucumber', 'black pepper', 'rice', 'sunflower',
    'shallot', 'onion', 'ginger', 'beef', 'egg', 'zucchini', 'vanilla',
    'potato', 'carrot', 'mushroom', 'brown sugar', 'flour', 'butter', 'bananas',
    'cinammon', 'oyster', 'beef', 'clove', 'unsalted', 'thyme', 'wine'
]

# Random users
for user_id in range(10000):
    for _ in range(20):
        random_recipe_id = rand.randint(0, 2999)
        rand_rating = rand.randint(1, 5)
        data.append([random_recipe_id, user_id, rand_rating, time.time()])

# There is one user likes the recipe and one user who hates the recipe
# if the ingredient appears to recipe
for user_id in range(len(ingredient_list)):

    ingredient = ingredient_list[user_id]
    for recipe_id in range(len(recipes)):

        for ingredient_listing in recipes[recipe_id]['ingredients']:
            if ingredient in ingredient_listing:

                # Add entries to data
                good_rating, good_timestamp = rand.randint(4, 5), time.time()
                bad_rating, bad_timestamp = rand.randint(1, 3), time.time()
                data.append([recipe_id, user_id + 100, good_rating, good_timestamp])
                data.append([recipe_id, user_id + 101, bad_rating, bad_timestamp])
                break

# Input data to dataframe and save as pickle
df = pd.DataFrame(data, columns=['recipeID', 'userID', 'rating', 'timestamp'])

path = os.path.dirname(json_file)
path = os.path.join(path, 'recipes.pkl')
df.to_pickle(path)
