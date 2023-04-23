const axios = require('axios')
const endpoints = require('../config/endpoints.json')
require('dotenv').config();

const endpoint = endpoints['mysql_ws'][process.env.ENV]
const CreateTable = async (model_name, mappings) => {
    const data = JSON.stringify({
        model_name,
        mappings
    })

    const config = {
        method: 'post',
        url: `${endpoint}/api/create-table`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    }

    await axios(config)
}

module.exports = {
    CreateTable: CreateTable
}