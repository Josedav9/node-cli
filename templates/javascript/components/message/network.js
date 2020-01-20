const express = require("express");
const router = express.Router();
const response = require("../../network/response");
const controller = require("./controller");

router.get("/", async(req, res) => {
    try {
      const success = await controller.getMessages()
      response.success(req, res, success, 200);
    } catch (error) {
      response.error(req, res, error, 400, "Error en el controlador");
    }
});

router.post("/", async(req, res) => {
  const { body } = req;

  try {
    const success = await controller.addMessage(body.user, body.message);
    response.success(req, res, success, 200);
  } catch (error) {
    response.error(req, res, "Algo salio mal", 400, "Error en el controlador");
  }

});

module.exports = router;
