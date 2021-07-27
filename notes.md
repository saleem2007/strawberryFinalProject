# Code Review

** add me to your github repo @danceoval ** 


## Roses

* Rewatching lectures were helpful (Michael + Ayman)
* CSS is fun! (Saleem)
* Enjoying back-end, Tasks (Saleem)
* Team is supportive and good to work with, feels very practical (Ayman)

## Thorns

* Getting Update (Tier IV) to work (Michael + Saleem)
* Still feel shaky on some concepts, feel like a student more than a pro (Ayman)


## Task Board

* Focus on one Tier/User Story at a time
* Don't move on to Tier II, until Tier I is complete etc.
* "Vertical Slicing" aka User Story
* e.g, "As a User, I want to see all items, when I click on 'all items' in Nav Bar"
	* Item Model
	* GET all-items route
	* all-items handlebars component
* "Kanban" Board: 3 lanes (Todo, In progress, Done)
* Each card, is a User Story with subtasks

* Semantic Git Commit Messages
* 2 parts:
	* Kind of commit (add, feature, doc, debug, test)
	* Description of what commit does


## API

* Great job with models and associations
	* Price as a Double is very smart
* No need to wrap associations in a method.
* Any model imported from `index.js` where associations are made, will have those associations! :)
* I like that we redirect after our Delete, maybe we can res.render the all-items handlebars instead?
* Consider adding default value for item image property in sequelize to avoid broken images


## Product Roadmap

* As a User, I want to update an item, by clicking "update" and navigating to a form. 
	* Update form in handlebars
	* PUT Route in express

```javascript

app.put('/items/:id', async(req, res)=>{
	let item = await Item.findByPk(req.params.id)
	await item.update(req.body)
	let updatedItem = await Item.findByPk(req.params.id)
	//res.render: renders the handlebar template (string), with the supplied data (object)
	res.render('item', {item: updatedItem})
})

```

```html
<form method="PUT">
	<input name="name" placeholder={{item.name}} />
</form>

```

* Another approach to delete
```
<form method="Delete">
	<button>X</button>
</form>

```



