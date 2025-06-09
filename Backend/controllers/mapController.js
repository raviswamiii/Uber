const {validationResult} = require("express-validator");
const getAddressCoordinate = require("../services/mapServices");

const getCoordinates = async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(404).json({message: errors.array()});
    }

    const {address} = req.query;

    try {
        const coordinates = await getAddressCoordinate(address);
        res.status(200).json(coordinates);
    } catch (error) {
        console.log(error)
    }
}

module.exports = getCoordinates;