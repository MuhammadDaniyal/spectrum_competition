const router = require('express').Router()
const controller = require('../controllers/index')

/** POST METHOD */
router.route('/post-car').post(controller.postCar) // register new car

/** GET METHOD */
router.route('/get-car').get(controller.getCar) // get the with car

/** PUT METHOD */
router.route('/update-car').put(controller.updateCar)  // use to update the  car


module.exports = router