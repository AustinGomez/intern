import json
reviews = [ ]
with open("job.json") as file:
    for review in json.load(file):
        formatted_review = {}
        formatted_review['id'] = review['id']
        del review['id']
        formatted_review['fields'] = review 
        formatted_review['model'] = "reviews.review"
        reviews.append(formatted_review)

with open('job_data.json', 'w') as outfile:
    json.dump(reviews, outfile)
