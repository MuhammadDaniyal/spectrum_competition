async function postCar(req, res) {
    try {
        return res.status(200).json("result")
    } catch (error) {
        return res.status(500).json({ msg: "Internal Server Error: ", error })
    }
}
async function getCar(req, res) {
    try {
        return res.status(200).json("result")
    } catch (error) {
        return res.status(500).json({ msg: "Internal Server Error: ", error })
    }
}
async function updateCar(req, res) {
    try {
        return res.status(200).json("result")
    } catch (error) {
        return res.status(500).json({ msg: "Internal Server Error: ", error })
    }
}

module.exports = { postCar, getCar, updateCar }
