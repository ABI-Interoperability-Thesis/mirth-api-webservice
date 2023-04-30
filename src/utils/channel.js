const { v4: uuidv4 } = require('uuid');
const {GenerateDeployScript} = require('./scripts')
const {GenerateDestinationHL7Extraction, GenerateDestinationBatchValidation, GenerateDestinationSendDataDB, GenerateDestinationSendDataMQ, GenerateDestinationSendResponse, GenerateDestinationRequestPreparation, GenerateDestinationPreprocessor} = require('./destinations')


const GenerateChannel = (channel_name, channel_port, mappings, model_name) => {
    const uniqueId = uuidv4();

    const table_name = model_name
    model_name = `${model_name}_global`
    const HL7Destination = GenerateDestinationHL7Extraction(mappings, model_name)
    const BatchValidationDestination = GenerateDestinationBatchValidation(mappings, model_name)
    const SendDataDBDestination = GenerateDestinationSendDataDB(mappings, model_name, table_name)
    const SendDataMQDestination = GenerateDestinationSendDataMQ(model_name)
    const SendResponseDestination = GenerateDestinationSendResponse(model_name)
    const RequestPreparationDestination = GenerateDestinationRequestPreparation(table_name, model_name)
    const PreprocessorDestination = GenerateDestinationPreprocessor(table_name)
    const channel_data = JSON.stringify(
        {
            "channel": {
                "@version": "4.3.0",
                "id": uniqueId,
                "nextMetaDataId": 7,
                "name": channel_name,
                "description": null,
                "revision": 87,
                "sourceConnector": {
                    "@version": "4.3.0",
                    "metaDataId": 0,
                    "name": "sourceConnector",
                    "properties": {
                        "@class": "com.mirth.connect.connectors.http.HttpReceiverProperties",
                        "@version": "4.3.0",
                        "pluginProperties": {
                            "com.mirth.connect.plugins.httpauth.NoneHttpAuthProperties": {
                                "@version": "4.3.0",
                                "authType": "NONE"
                            }
                        },
                        "listenerConnectorProperties": {
                            "@version": "4.3.0",
                            "host": "0.0.0.0",
                            "port": channel_port
                        },
                        "sourceConnectorProperties": {
                            "@version": "4.3.0",
                            "responseVariable": "d7",
                            "respondAfterProcessing": true,
                            "processBatch": true,
                            "firstResponse": false,
                            "processingThreads": 1,
                            "resourceIds": {
                                "@class": "linked-hash-map",
                                "entry": {
                                    "string": [
                                        "Default Resource",
                                        "[Default Resource]"
                                    ]
                                }
                            },
                            "queueBufferSize": 1000
                        },
                        "xmlBody": false,
                        "parseMultipart": true,
                        "includeMetadata": true,
                        "binaryMimeTypes": "application/.*(?<!json|xml)$|image/.*|video/.*|audio/.*",
                        "binaryMimeTypesRegex": true,
                        "responseContentType": "apllication/json",
                        "responseDataTypeBinary": false,
                        "responseStatusCode": null,
                        "responseHeaders": {
                            "@class": "linked-hash-map"
                        },
                        "responseHeadersVariable": null,
                        "useResponseHeadersVariable": false,
                        "charset": "UTF-8",
                        "contextPath": null,
                        "timeout": 30000,
                        "staticResources": null
                    },
                    "transformer": {
                        "@version": "4.3.0",
                        "elements": null,
                        "inboundTemplate": {
                            "@encoding": "base64"
                        },
                        "outboundTemplate": {
                            "@encoding": "base64"
                        },
                        "inboundDataType": "HL7V2",
                        "outboundDataType": "HL7V2",
                        "inboundProperties": {
                            "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties",
                            "@version": "4.3.0",
                            "serializationProperties": {
                                "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties",
                                "@version": "4.3.0",
                                "handleRepetitions": true,
                                "handleSubcomponents": true,
                                "useStrictParser": false,
                                "useStrictValidation": false,
                                "stripNamespaces": false,
                                "segmentDelimiter": "\\r",
                                "convertLineBreaks": true
                            },
                            "deserializationProperties": {
                                "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties",
                                "@version": "4.3.0",
                                "useStrictParser": false,
                                "useStrictValidation": false,
                                "segmentDelimiter": "\\r"
                            },
                            "batchProperties": {
                                "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties",
                                "@version": "4.3.0",
                                "splitType": "MSH_Segment",
                                "batchScript": null
                            },
                            "responseGenerationProperties": {
                                "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties",
                                "@version": "4.3.0",
                                "segmentDelimiter": "\\r",
                                "successfulACKCode": "AA",
                                "successfulACKMessage": null,
                                "errorACKCode": "AE",
                                "errorACKMessage": "An Error Occurred Processing Message.",
                                "rejectedACKCode": "AR",
                                "rejectedACKMessage": "Message Rejected.",
                                "msh15ACKAccept": false,
                                "dateFormat": "yyyyMMddHHmmss.SSS"
                            },
                            "responseValidationProperties": {
                                "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties",
                                "@version": "4.3.0",
                                "successfulACKCode": "AA,CA",
                                "errorACKCode": "AE,CE",
                                "rejectedACKCode": "AR,CR",
                                "validateMessageControlId": true,
                                "originalMessageControlId": "Destination_Encoded",
                                "originalIdMapVariable": null
                            }
                        },
                        "outboundProperties": {
                            "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties",
                            "@version": "4.3.0",
                            "serializationProperties": {
                                "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties",
                                "@version": "4.3.0",
                                "handleRepetitions": true,
                                "handleSubcomponents": true,
                                "useStrictParser": false,
                                "useStrictValidation": false,
                                "stripNamespaces": false,
                                "segmentDelimiter": "\\r",
                                "convertLineBreaks": true
                            },
                            "deserializationProperties": {
                                "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties",
                                "@version": "4.3.0",
                                "useStrictParser": false,
                                "useStrictValidation": false,
                                "segmentDelimiter": "\\r"
                            },
                            "batchProperties": {
                                "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties",
                                "@version": "4.3.0",
                                "splitType": "MSH_Segment",
                                "batchScript": null
                            },
                            "responseGenerationProperties": {
                                "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties",
                                "@version": "4.3.0",
                                "segmentDelimiter": "\\r",
                                "successfulACKCode": "AA",
                                "successfulACKMessage": null,
                                "errorACKCode": "AE",
                                "errorACKMessage": "An Error Occurred Processing Message.",
                                "rejectedACKCode": "AR",
                                "rejectedACKMessage": "Message Rejected.",
                                "msh15ACKAccept": false,
                                "dateFormat": "yyyyMMddHHmmss.SSS"
                            },
                            "responseValidationProperties": {
                                "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties",
                                "@version": "4.3.0",
                                "successfulACKCode": "AA,CA",
                                "errorACKCode": "AE,CE",
                                "rejectedACKCode": "AR,CR",
                                "validateMessageControlId": true,
                                "originalMessageControlId": "Destination_Encoded",
                                "originalIdMapVariable": null
                            }
                        }
                    },
                    "filter": {
                        "@version": "4.3.0",
                        "elements": null
                    },
                    "transportName": "HTTP Listener",
                    "mode": "SOURCE",
                    "enabled": true,
                    "waitForPrevious": true
                },
                "destinationConnectors": {
                    "connector": [
                        HL7Destination,
                        BatchValidationDestination,
                        PreprocessorDestination,
                        RequestPreparationDestination,
                        SendDataDBDestination,
                        SendDataMQDestination,
                        SendResponseDestination
                        
                    ]
                },
                "preprocessingScript": "return message;",
                "postprocessingScript": "// This script executes once after a message has been processed\n// Responses returned from here will be stored as \"Postprocessor\" in the response map\nreturn;",
                "deployScript": GenerateDeployScript(model_name),
                "undeployScript": "// This script executes once when the channel is undeployed\n// You only have access to the globalMap and globalChannelMap here to persist data\nreturn;",
                "properties": {
                    "@version": "4.3.0",
                    "clearGlobalChannelMap": true,
                    "messageStorageMode": "DEVELOPMENT",
                    "encryptData": false,
                    "encryptAttachments": false,
                    "encryptCustomMetaData": false,
                    "removeContentOnCompletion": false,
                    "removeOnlyFilteredOnCompletion": false,
                    "removeAttachmentsOnCompletion": false,
                    "initialState": "STARTED",
                    "storeAttachments": true,
                    "metaDataColumns": {
                        "metaDataColumn": [
                            {
                                "name": "SOURCE",
                                "type": "STRING",
                                "mappingName": "mirth_source"
                            },
                            {
                                "name": "TYPE",
                                "type": "STRING",
                                "mappingName": "mirth_type"
                            }
                        ]
                    },
                    "attachmentProperties": {
                        "@version": "4.3.0",
                        "type": "None",
                        "properties": null
                    },
                    "resourceIds": {
                        "@class": "linked-hash-map",
                        "entry": {
                            "string": [
                                "Default Resource",
                                "[Default Resource]"
                            ]
                        }
                    }
                },
                "exportData": {
                    "metadata": {
                        "enabled": true,
                        "lastModified": {
                            "time": 1681858373304,
                            "timezone": "Europe/London"
                        },
                        "pruningSettings": {
                            "archiveEnabled": true,
                            "pruneErroredMessages": false
                        },
                        "userId": 1
                    },
                    "dependentIds": null,
                    "dependencyIds": null,
                    "channelTags": null
                }
            }
        }
    )

    return channel_data
}

module.exports = {
    GenerateChannel: GenerateChannel
}