admin = db.getSiblingDB("admin")

admin.grantRolesToUser( "nikhil_hetal", [ "root" , { role: "root", db: "admin" } ] )
