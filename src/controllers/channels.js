const axios = require('axios')
const https = require('https')
const token_utils = require('../config/token')
const endpoints = require('../config/endpoints.json')
const { GenerateChannel } = require('../utils/channel')
const { GenerateChannelData } = require('../utils/mirth')
require('dotenv').config();

//disable ssl
const agent = new https.Agent({
    rejectUnauthorized: false,
})

const auth_token = token_utils.GenerateToken()
const endpoint = process.env.MIRTH_ENDPOINT
const mysql_endpoint = process.env.MYSQL_SERVICE_ENDPOINT


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
    console.log(axios_response.data)
    let mirth_data = []
    if (axios_response.data.map !== null) {
        mirth_data = Array.isArray(axios_response.data.map.entry) ? axios_response.data.map.entry : [axios_response.data.map.entry]
    }

    let final_channel_info = []
    if (mirth_data.length > 0) {
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

    if (axios_response.data.list !== null) {
        let responseData = axios_response.data.list['com.mirth.connect.donkey.model.channel.Ports'];

        if (!Array.isArray(responseData)) {
            responseData = [responseData]; // Convert single object to an array
        }

        return res.send(responseData);
    } else {
        return res.send([]);
    }
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
    const { channel_name, channel_description, channel_port, mappings, model_name, preprocessor } = req.body

    // Creating the Channel in Mirth
    const headers = {
        'X-Requested-With': 'OpenAPI',
        'Accept': 'application/json',
        "Authorization": auth_token,
        'Content-Type': 'application/json'
    };


    // Generating the Channel
    const data = GenerateChannel(channel_name, channel_description, channel_port, mappings, model_name, preprocessor)

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

const CreateGeneralChannel = async (req, res) => {
    const { channel_type, channel_name, channel_description, channel_port } = req.body

    // Creating the Channel in Mirth
    const headers = {
        'X-Requested-With': 'OpenAPI',
        'Accept': 'application/json',
        "Authorization": auth_token,
        'Content-Type': 'application/json'
    };


    // Generating the Channel
    const data = await GenerateChannelData(channel_type, channel_name, channel_description, channel_port)
    const channel_id = JSON.parse(data).channel.id

    const config = {
        method: 'post',
        url: `${endpoint}/api/channels`,
        headers: headers,
        httpsAgent: agent,
        data: data
    }

    const config_mysql = {
        method: 'post',
        url: `${mysql_endpoint}/api/mirth-channels`,
        headers: headers,
        httpsAgent: agent,
        data: {
            channel_name: channel_type,
            channel_id
        }
    }

    try {
        const axios_response = await axios(config)
        const axios_response_mysql = await axios(config_mysql)
        return res.send({
            mirth_response: axios_response.data,
            mysql_response: axios_response_mysql.data
        })
    } catch (error) {
        return res.send({
            status: '500',
            message: 'There was an error',
            error
        })
    }
}

const GetChannelInfo = async (req, res) => {
    const channel_id = req.params.channel_id

    const config = {
        method: 'get',
        url: `${endpoint}/api/channels/${channel_id}/`,
        headers: {
            'X-Requested-With': 'OpenAPI',
            'Accept': 'application/json',
            'Authorization': auth_token,
        },
        httpsAgent: agent,
    };

    try {
        const axios_response = await axios(config)
        const mirth_response = axios_response.data
        if (!mirth_response) return res.status(404).send({ message: 'Channel not found' })
        const ChannelInfo = ExtractInfo(mirth_response.channel)
        return res.send(ChannelInfo)
    } catch (error) {
        return res.send({
            status: '500',
            message: 'There was an error',
            error
        })
    }

}

const ExtractInfo = (channel) => {
    return {
        channel_id: channel.id,
        channel_name: channel.name,
        channel_description: channel.description,
        revision: channel.revision,
        version: channel.sourceConnector['@version'],
        port: channel.sourceConnector.properties.listenerConnectorProperties.port
    }
}

const GetChannel = async (req, res) => {
    const channel_id = req.params.channel_id

    const config = {
        method: 'get',
        url: `${endpoint}/api/channels/${channel_id}/`,
        headers: {
            'X-Requested-With': 'OpenAPI',
            'Accept': 'application/json',
            'Authorization': auth_token,
        },
        httpsAgent: agent,
    };

    try {
        const axios_response = await axios(config)
        const mirth_response = axios_response.data
        if (!mirth_response) return res.status(404).send({ message: 'Channel not found' })
        return res.send(mirth_response.channel)
    } catch (error) {
        return res.send({
            status: '500',
            message: 'There was an error',
            error
        })
    }

}

const GetChannelPort = async (req, res) => {
    const channel_id = req.params.channel_id

    const config = {
        method: 'get',
        url: `${endpoint}/api/channels/${channel_id}/`,
        headers: {
            'X-Requested-With': 'OpenAPI',
            'Accept': 'application/json',
            'Authorization': auth_token,
        },
        httpsAgent: agent,
    };

    try {
        const axios_response = await axios(config)
        const mirth_response = axios_response.data
        if (!mirth_response) return res.status(404).send({ message: 'Channel not found' })
        return res.send({
            channel_port: mirth_response.channel.sourceConnector.properties.listenerConnectorProperties.port
        })
    } catch (error) {
        return res.send({
            status: '500',
            message: 'There was an error',
            error
        })
    }

}

const AboutSystem = async (req, res) => {
    // Creating the Channel in Mirth
    const headers = {
        'X-Requested-With': 'OpenAPI',
        'Accept': 'application/json',
        "Authorization": auth_token,
    };

    const config = {
        method: 'get',
        url: `${endpoint}/api/system/info`,
        headers,
        httpsAgent: agent
    };

    const config_stats = {
        method: 'get',
        url: `${endpoint}/api/system/stats`,
        headers,
        httpsAgent: agent
    };

    const axios_response = await axios(config)
    const system_info = axios_response.data

    const axios_response_stats = await axios(config_stats)
    const system_stats = axios_response_stats.data

    return res.send({
        system_info,
        system_stats
    })
}

module.exports = {
    GetAllChannels: GetAllChannels,
    GetAllUsedPorts: GetAllUsedPorts,
    DeployChannel: DeployChannel,
    UndeployChannel: UndeployChannel,
    DeleteChannel: DeleteChannel,
    CreateChannel: CreateChannel,
    GetAllDeployedChannels: GetAllDeployedChannels,
    CreateGeneralChannel: CreateGeneralChannel,
    GetChannelInfo: GetChannelInfo,
    GetChannel: GetChannel,
    GetChannelPort: GetChannelPort,
    AboutSystem: AboutSystem
}