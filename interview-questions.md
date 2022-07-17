# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a hash in Ruby?

Your answer: A hash is a collection of data with the data being stored as key: value pairs. 

faves = { cereal1: "Fruity Pebbles", cereal2: "Life", cereal3: "Grape Nuts"}

Researched answer: A hash in Ruby is an enumerable that means you can uses iterable methods on a hash. The default value of hashes is nil.

2. What is a gem?

Your answer:  Ruby gems are package managers that help tie everything together as in Ruby on Rails. Gems are like little programs of Ruby code that contribute to the functionality of Ruby. 

Researched answer: A gem is an open-source library of code. Gems contain code, documentation, and gemspec. A bundler and rails are examples of gems. 

3. What is Ruby on Rails?

Your answer: Ruby on Rails is a complex system that allows Ruby to interact with databases as sort of a translator. A full-stack frame-work for both front-end and back-end development.

Researched answer:

4. What is a relational database? Are there other kinds of databases?

Your answer: A relational database is a database that organizes data in the form of tables as it relates to other data within the database. 

This is just one kind of database of many. 

Researched answer: In relational databases, data structures remains separate from the physical storage structure. 

Other forms of databases include: Centralised database,Distributed database, Personal database, End-user database, Commercial database, NoSQL database, Operational database, Relational database, Cloud database, Object-oriented database, Graph database.

5. What are primary keys? Why are they important?

Your answer: Primary keys are the unique identifies in a data base that allow each instance created to be absolutely unique from one another despite whether or not the information contained in the unique instance is similar. Primary keys are incredibly important in data bases as it is very common to have for example, people with the same name and need a way to distinguish them from each other. 

Researched answer:

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: RESTful routes are an attempt to bring the operations that can be applied to an object into HTTP requests. This means that when your application receives an HTTP request, it introspects on that request and identifies the HTTP method and URL, connects that with a corresponding controller action that has that method and URL, executes the code in that action, and determines which response gets sent back to the client.

2. JSON: JavaScript Object Notation. JSON is a standard text-based format for representing structured data based on JavaScript object syntax. It is commonly used for transmitting data in web applications.

3. ERB:(Embedded Ruby) is a template engine that allows you to mix HTML & Ruby so you can generate web pages using data from your database. ERB is Rails default engine for rendering views.

4. Params: There are two kinds of parameters possible in a web application. The first are parameters that are sent as part of the URL, called query string parameters. The query string is everything after "?" in the URL. The second type of parameter is usually referred to as POST data. This information usually comes from an HTML form which has been filled in by the user. It's called POST data because it can only be sent as part of an HTTP POST request. Rails does not make any distinction between query string parameters and POST parameters.

https://guides.rubyonrails.org/action_controller_overview.html

5. API: API stands for Application Programming Interface; an intermediary software that allows 2 computers to talk to each other. When opening an application (in a matter of split seconds), the app is connected to the internet -> goes to a server to retrieve data -> data is interpretted and performs actions that are needed -> sends data back to phone, computer, etc. The API interprets and presents data in a readable way similar to waiter between patrons and the chef in a restaurant.

https://www.mulesoft.com/resources/api/what-is-an-api
