# WikiDB-Rest

A RESTful API server that do CRUD operations on a Mongo Database to retrieve/modify/upload data.


### 1. Create
To create a new entry use the POST request for the route `/articles` , assigning values for "title" and "content" keys.
`http://localhost:3000/articles`

### 2. Read
To read ALL entries use the GET request for the route `/articles`
`http://localhost:3000/articles`

To read one article, GET request for the route `/articles/articleTitle`
`http://localhost:3000/articles/articleTitle`

### 3. Update
To update one entry by overwriting all properties use the PUT request for the route `/articles/articleTitle`, assigning values for "title" and "content" keys (Optional).
`http://localhost:3000/articles/articleTitle`

To update one entry without overwriting all properties use the PATCH request for the route `/articles/articleTitle`, assigning values for "title" and "content" keys (Optional).
`http://localhost:3000/articles/articleTitle`

### 4. Delete
To delete ALL entries, use DELETE request for the route `/articles` 
`http://localhost:3000/articles`

To delete one entry, use DELETE request for the route `/articles/articleTitle` 
`http://localhost:3000/articles/articleTitle`


