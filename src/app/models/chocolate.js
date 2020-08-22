const mongoose = require('../../config/db');

const ChocolateSchema = mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    marca: {
      type: String,
    },
    valor: {
      type: Number,
    },
    imagem: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const chocolate = mongoose.model('Chocolate', ChocolateSchema);
module.exports = chocolate;
