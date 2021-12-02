const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
    text:{
        type: String,
        trim: true,
        required: [true, 'Por favor, escreva algo']
    },
    amount:{
        type: Number,
        required: [true, 'Por favor, adicione o sinal positivo ou negativo na frente do número']
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Transactions', TransactionSchema)