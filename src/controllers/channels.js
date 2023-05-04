const axios = require('axios')
const https = require('https')
const token_utils = require('../config/token')
const endpoints = require('../config/endpoints.json')
const { GenerateChannel } = require('../utils/channel')
require('dotenv').config();

//disable ssl
const agent = new https.Agent({
    rejectUnauthorized: false,
})

const auth_token = token_utils.GenerateToken()
const endpoint = endpoints['mirth'][process.env.ENV]


const GetAllChannels = async (req, res) => {
    let config = {
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
    const mirth_data = Array.isArray(axios_response.data.map.entry) ? axios_response.data.map.entry : [axios_response.data.map.entry]

    let final_channel_info = []
    for (let i = 0; i < mirth_data.length; i++) {
        const channel_id = mirth_data[i]['string'][0];

        config = {
            method: 'get',
            url: `${endpoint}/api/channels/${channel_id}`,
            headers: {
                'X-Requested-With': 'OpenAPI',
                'Accept': 'application/json',
                'Authorization': auth_token,
            },
            httpsAgent: agent
        };

        const axios_channel_response = await axios(config)
        const channel_info = axios_channel_response.data.channel

        const port = channel_info['sourceConnector']['properties']['listenerConnectorProperties'] ? channel_info['sourceConnector']['properties']['listenerConnectorProperties']['port'] : '-'

        final_channel_info.push({
            version: channel_info['@version'],
            id: channel_id,
            name: channel_info['name'],
            description: channel_info['description'],
            channel_mode: channel_info['properties']['messageStorageMode'],
            revision: channel_info['revision'],
            type: channel_info['sourceConnector']['transportName'],
            port: port

        })
    }



    return res.send(final_channel_info)
}

const GetAllDeployedChannels = async (req, res) => {
    const config = {
        method: 'get',
        url: `${endpoint}/api/channels/statuses`,
        headers: {
            'X-Requested-With': 'OpenAPI',
            'Accept': 'application/json',
            'Authorization': auth_token,
        },
        httpsAgent: agent
    };

    const axios_response = await axios(config)

    let final_deployed_response = []
    if (axios_response.data.list !== null) {
        if (!Array.isArray(axios_response.data.list.dashboardStatus)) {
            const deployed_channel = axios_response.data.list.dashboardStatus
            final_deployed_response.push({
                key: deployed_channel['channelId'],
                channel_name: deployed_channel['name'],
                state: deployed_channel['state'],
                deployed_revision: deployed_channel['deployedRevisionDelta']
            })
        } else {
            for (let i = 0; i < axios_response.data.list.dashboardStatus.length; i++) {
                const deployed_channel = axios_response.data.list.dashboardStatus[i];
                final_deployed_response.push({
                    key: deployed_channel['channelId'],
                    channel_name: deployed_channel['name'],
                    state: deployed_channel['state'],
                    deployed_revision: deployed_channel['deployedRevisionDelta']
                })

            }
        }
    }

    return res.send(final_deployed_response)

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

const CreateChannel = async (req, res) => {
    const { channel_name, channel_port, mappings, model_name } = req.body

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
        data: data
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
    CreateChannel: CreateChannel,
    GetAllDeployedChannels: GetAllDeployedChannels
}