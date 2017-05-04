# Back End Quiz

Create an express/node/mongoose/mongo server for simple image list management

## Rules

* You must complete this work on your own within the alotted time
  * Do not copy/paste any code from outside the project (you may retype). 
  This will result in a score of 0 for the entire quiz
  * Keep a good commit history to show progression of work.
* You may use normal resources that a software developer wold use on the job (docs, google, your prior work)
* You may install npm packages of your choosing
* Use general best practices and common sense
  * Highly recommended to implement what is needed, no more no less
  * Blind boilerplate may not be helpful and will likely create more work
  * Focus effort on requirements
* You may ignore the presense or absense of `__v` mongoose property on 
any data format requirements
* There are very specific testing requirements listed (after the API section)
  * You are not required to do any more than this
* You have 100 minutes to complete
* Total possible points are 70. You will be graded out of 50 points
* There is more work here than can probably be finished in alotted time. Submit what you have. 
* Don't get bogged-down tracking down weird bugs if they show up. You are better off making sure
you demonstrating what you know.

## API Requirements

### Accepts post of image url to add to collection

POST to `/images`: DONE

```
{
    title: <title>,
    description: <description>,
    category: <animals|food|places>,
    url: <url> 
}
```

* `title`, `category`, and `url` are required CHECK
* `category` should be limited to one of specified values ("animals", "food", or "places") CHECK

If any of those conditions are not met, return a 400 status code. CHECK

POST should return the same format as GET to `/images/:id`: DONE

### Retrieve list of images

GET to `/images`:

```
[
    { _id: "123abc", title: "titleOne", category: "animals" },
    { _id: "456def", title: "titleTwo", category: "animals" },
    { _id: "789ghi", title: "titleThree", category: "food" }
]
```

* Replicate exact fieldset being returned DONE
* Return empty array if no images DONE

### Retreive image detail

GET to `/images/:id`: DONE

```
{ 
    _id: "123abc", 
    title: "cute kitten at table", 
    category: "animals",
    description: "adorable kitten doing lunch",
    url: "http://image.png" 
}
```

* Replicate exact fieldset being returned DONE
* Return 404 if image of that id doesn't exist DONE

### Retrieve list of images in one category

GET to `/images?category=animals`: TODO

```
[
    { _id: "123abc", title: "titleOne", category: "animals" },
    { _id: "456def", title: "titleTwo", category: "animals" }
]
```

* Same fieldset as normal GET of images
* Return empty array if no images
* If category not one of three defined categories, return 400

## Testing

You only need to include the following e2e test scenario:

* Connect to a test databse and drop database before test DONE
* Test this workflow:
  * POST an image DONE
  * use the returned id from the POST request to GET same image DONE
* assert that `title`, `description`, `category`, and `url` are equal
to orignally supplied data. DONE
