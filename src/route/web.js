import  express  from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initwebRoutes = (app) => {
    router.get('/', homeController.getHomePage);

    router.get('/about', homeController.getAboutpage);

    return app.use("/", router);
}

module.exports = initwebRoutes;