<div align="center">
	<img src="/src/assets/imagenes/home/banner.png" alt="TECHO Banner"/>
</div>

---

# TECHO-Teams

This project was made using ReactJs, Redux, MaterialUI, Express, Sequelize and MySQL.

## Objective

To have a platform in which TECHO administrators can manage activities, events, teams and volunteers easily at the same time as volunteers can consult information about next projects and activities.

## Specifications
The web app is being deployed in a cloud server by the company TECHO Argentina. The database connection is still pending but you can run this project locally. This will use a DB in a cluster to ensure that the funcionalities are not affected.

This web app must conform to the brand manual available *[here](https://techo.org/wp-content/uploads/2021/11/Manual-de-Marca-TECHO.pdf)*.

### `npm start`

Runs the app in the development mode (**Back-End and Front-End**).

### `npm run client`

Launches a client-only instance of the app (**Front-End**).

### `npm run server`

Launches a server-side-only instance of the app (**Back-End**).

### `npm run seed`

Seeds the database with a set of mock data for testing purposes.

## To have in mind

This project's database settings include the use of a cluster to perform CRUD operations in real time.
This can be changed to a local based work modifying the **/api/config/database.js** file.

---

[TECHO's main site](techo.org) \
[TECHO's GitHub account](https://github.com/techo)
