const axios = require('axios')
const https = require('https')
const token_utils = require('../config/token')
const endpoints = require('../config/endpoints.json')
const {GenerateChannel} = require('../utils/channel')
require('dotenv').config();
const {CreateTable} = require('../utils/mysql-ws')

//disable ssl
const agent = new https.Agent({
    rejectUnauthorized: false,
})

const auth_token = token_utils.GenerateToken()
const endpoint = endpoints['mirth'][process.env.ENV]


const GetAllChannels = async (req, res) => {
    const config = {
        method: 'get',
        url: `${endpoint}/api/channels/idsAndNames`,
        headers: {
            'X-Requested-With': 'OpenAPI',
            'Accept': 'application/json',
            'Authorization': auth_token,
        },
        httpsAgent: agent
    };

    const axios_response = await axios(config)
    const mirth_data = axios_response.data.map.entry
    return res.send(mirth_data)
}

const GetAllUsedPorts = async (req, res) => {
    const config = {
        method: 'get',
        url: `${endpoint}/api/channels/portsInUse`,
        headers: {
            'X-Requested-With': 'OpenAPI',
            'Accept': 'application/json',
            'Authorization': auth_token,
        },
        httpsAgent: agent
    };

    const axios_response = await axios(config)
    const mirth_data = axios_response.data.list['com.mirth.connect.donkey.model.channel.Ports']
    return res.send(mirth_data)
}

const DeployChannel = async (req, res) => {
    const channel_id = req.params.channel_id
    const config = {
        method: 'post',
        url: `${endpoint}/api/channels/${channel_id}/_deploy`,
        headers: {
            'X-Requested-With': 'OpenAPI',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': auth_token,
        },
        httpsAgent: agent
    };


    try {
        const axios_response = await axios(config)
        return res.send('Channel deployed successfully')
    } catch (error) {
        return res.send({
            status: '500',
            message: 'There was an error',
            error
        })
    }
}

const UndeployChannel = async (req, res) => {
    const channel_id = req.params.channel_id
    const config = {
        method: 'post',
        url: `${endpoint}/api/channels/${channel_id}/_undeploy`,
        headers: {
            'X-Requested-With': 'OpenAPI',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': auth_token,
        },
        httpsAgent: agent
    };


    try {
        const axios_response = await axios(config)
        return res.send('Channel undeployed successfully')
    } catch (error) {
        return res.send({
            status: '500',
            message: 'There was an error',
            error
        })
    }
}

const DeleteChannel = async (req, res) => {
    const channel_id = req.params.channel_id

    const config = {
        method: 'delete',
        url: `${endpoint}/api/channels/${channel_id}/`,
        headers: {
            'X-Requested-With': 'OpenAPI',
            'Accept': 'application/json',
            'Authorization': auth_token,
        },
        httpsAgent: agent
    };

    try {
        const axios_response = await axios(config)
        return res.send('Channel deleted successfully')
    } catch (error) {
        return res.send({
            status: '500',
            message: 'There was an error',
            error
        })
    }
}

const CreateChannel = async (req,res) => {
    const {channel_name, channel_port, mappings, model_name} = req.body

    // Creating the table in the DB

    await CreateTable(model_name, mappings)

    // Creating the Channel in Mirth
    const headers = {
        'X-Requested-With': 'OpenAPI',
        'Accept': 'application/json',
        "Authorization": auth_token,
        'Content-Type': 'application/json'
    };


    // Generating the Channel
    const data = GenerateChannel(channel_name, channel_port, mappings, model_name)

    const config = {
        method: 'post',
        url: `${endpoint}/api/channels`,
        headers: headers,
        httpsAgent: agent,
        data:data
    }

    try {
        const axios_response = await axios(config)
        return res.send(axios_response.data)
    } catch (error) {
        return res.send({
            status: '500',
            message: 'There was an error',
            error
        })
    }
}

module.exports = {
    GetAllChannels: GetAllChannels,
    GetAllUsedPorts: GetAllUsedPorts,
    DeployChannel: DeployChannel,
    UndeployChannel: UndeployChannel,
    DeleteChannel: DeleteChannel,
    CreateChannel: CreateChannel
}