# etshows-api
Cinema and Movies REST API

use admin
db.createUser(
  {
    user: "user",
    pwd: "password",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)

use etshows
db.createUser(
  {
    user: "etshows",
    pwd: "etshows",
    roles: [ { role: "readWrite", db: "etshows" }]
  }
)


#Sample API Data
{
  "title": "Movie 2",
  "genre": "Comedy",
  "synopsis": "Csynopsis Csynopsis Csynopsis",
  "tag": ["Tag1", "Tag2"],
  "trailerUrl": "https://www.youtube.com/watch?v=OizY63b1jaE",
  "cinemas": [
    {
    	"name": "Mati Multiplex",
    	"showDayTime": ["Sun 8:00", "Sat 9:00", "Wed 10:00", "Thu 10:00"]
    }
  ]
}

#How to Run
##Terminal Tab 1
mongod --dbpath /Users/biniam.asnake/data/db/
##Terminal Tab 2
mongo
##Terminal Tab 3
etshows-api (master)$ nodemon