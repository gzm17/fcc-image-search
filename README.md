fcc: image-search
============================

Objective: Build a full stack JavaScript app that allows ysearch for images like this: https://fcc-img-search.glitch.me/imagesearch/query=funny%20dogs&offset=20
and browse recent search queries like this: ttps://fcc-img-search.glitch.me/searchhistory. Then deploy it to Glitch.

User Story: I can get the image URLs, alt text and page urls for a set of images relating to a given search string.

User Story: I can paginate through the responses by adding a offset=2 parameter to the URL.

User Story: I can get a list of the most recently submitted search strings.

offset parameter needs to be <= 10 (limited by google - free account?)

API used: google-search npm by 
https://github.com/aykutyaman/google-search

Google custome search api spec and examples: https://developers.google.com/apis-explorer/#p/customsearch/v1/search.cse.list?q=cats&cx=insertCX&fileType=jpg&filter=1&imgColorType=color&imgDominantColor=blue&imgSize=small&imgType=clipart&lr=lang_en&num=5&safe=high&searchType=image&siteSearchFilter=e&_h=5&

Google custome search introduction: 
https://developers.google.com/custom-search/json-api/v1/using_rest

Google custom search api for javascript client side (not used here) is:
https://www.googleapis.com/customsearch/v1?key=InsertKey&cx=insertCX&q=lectures"

Similar Microsoft bing search Azure api (not used here): 
https://docs.microsoft.com/en-us/azure/cognitive-services/bing-web-search/quickstarts/nodejs
