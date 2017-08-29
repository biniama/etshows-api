# mezmur-api
Songs REST API

use admin
db.createUser(
  {
    user: "user",
    pwd: "password",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)

use mezmur
db.createUser(
  {
    user: "mezmur",
    pwd: "mezmur",
    roles: [ { role: "readWrite", db: "mezmur" }]
  }
)
