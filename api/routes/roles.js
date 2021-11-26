const express = require("express")
const Router = express.Router();
const { RoleController } = require("../controllers");
const { checkAuthAndAdmin, checkAuth, isCoordinator } = require("../middlewares/auth");

Router.get("/", /* checkAuthAndAdmin, */ RoleController.getRoles)

Router.post("/", /* checkAuthAndAdmin, */ RoleController.crearRoles)

Router.delete("/borrar/:id", /* checkAuthAndAdmin, */ RoleController.borrarRole)

Router.get("/:id/usuarios", /* isCoordinator, */ RoleController.getUsuarios)

module.exports = Router;