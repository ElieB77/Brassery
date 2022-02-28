const mongoose = require("mongoose");

const MaterialSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a material name"],
    },
    description: {
        type: String,
    },
    type: {
        type: String,
        enum: [
            //"Kits d'équipement",
            "Cuve de brassage et d'empatage",
            "Filtration et Rinçage",
            "Refroidisseurs",
            "Pompes de transfert",
            "Autres équipements du brasseur",
            "Matériel de mesure",
        ],
        required: [true, "Please add a material type"],
    },
    brand: {
        type: String,
    },
    link: {
        type: String,
    },
});

module.exports = mongoose.model("materials", MaterialSchema);
