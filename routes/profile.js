const express = require("express");
const routes = require("express").Router();
const controller = require("../controllers/profileController");
const { requiresAuth } = require("express-openid-connect");

// routes.get('/', /*requiresAuth(),*/ controller.getProfile);

routes.get("/", controller.getAll);
routes.get("/:username", controller.getProfile);
routes.post("/", controller.createProfile);

module.exports = routes;
