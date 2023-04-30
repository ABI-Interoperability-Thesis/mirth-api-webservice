const { CreateTransformers } = require('./transformer')

// HL7 Field Extraction Destination Generation
const GenerateDestinationHL7Extraction = (mappings, model_name) => {
    const new_destination = {
        "@version": "4.3.0",
        "metaDataId": 1,
        "name": "HL7 Field Extraction",
        "properties": {
            "@class": "com.mirth.connect.connectors.js.JavaScriptDispatcherProperties",
            "@version": "4.3.0",
            "pluginProperties": null,
            "destinationConnectorProperties": {
                "@version": "4.3.0",
                "queueEnabled": false,
                "sendFirst": false,
                "retryIntervalMillis": 10000,
                "regenerateTemplate": false,
                "retryCount": 0,
                "rotate": false,
                "includeFilterTransformer": false,
                "threadCount": 1,
                "threadAssignmentVariable": null,
                "validateResponse": false,
                "resourceIds": {
                    "@class": "linked-hash-map",
                    "entry": {
                        "string": [
                            "Default Resource",
                            "[Default Resource]"
                        ]
                    }
                },
                "queueBufferSize": 1000,
                "reattachAttachments": true
            },
            "script": GenerateScript(mappings, model_name)
        },
        "transformer": {
            "@version": "4.3.0",
            "elements": {
                "com.mirth.connect.plugins.javascriptstep.JavaScriptStep": CreateTransformers(mappings)
            },
            "inboundTemplate": {
                "@encoding": "base64",
                "$": "TVNIfF5+XCZ8SE9TUElUQUx8QURUfEhMN0xBQnxBRFR8MjAxOTA0MDIxMjAwfHxBRFReQTAxfDU2Nzg5fFB8Mi41CkVWTnx8MjAxOTA0MDIxMjAwfHx8ClBJRHx8fDk4NzY1NDMyMXx8U21pdGheQWxpY2V8fDE5NzUwMTAxfEZ8fHw0NTYgT2FrIFN0Xl5Mb3MgQW5nZWxlc15DQV45MDAwMV5eXl5icmdefEJyYWdhfDU1NS01Njc4fHx8U3x8OTg3NjU0MzJ8MTIzNDU2Nzh8fHx8fHx8fHx8fHx8fHx8fHx8fApQVjF8fE98Xl5eU1VSR0VSWXxVfHx8XlNtaXRoXkJvYnxkci5qb25hczJ8fHx8fHx8fHx8fDk4NzY1NDMyfDEyMzQ1Njc4fHx8Mnx8fHx8fHx8fHx8fHx8fHx8fHx8fGRhdGFfYWRtaXNzYW98ZGF0YV9kaXNjaGFyZ2V8fHwyMDE5MDQwMjEyMDB8ClBWMnx8fHx8fHx8fHwxMHx8fHx8fHx8fHx8fHx8fHx8fApERzF8fHxjb2RlXzF8fHx8fHx8fHx8fHx8fHx8fHw="
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
        "responseTransformer": {
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
        "transportName": "JavaScript Writer",
        "mode": "DESTINATION",
        "enabled": true,
        "waitForPrevious": true
    }

    return new_destination
}

const GenerateScript = (mappings, model_name) => {
    const generated_script = ` // Auto Generated Script
    // Loading global variable
    var global_obj_string = globalMap.get('${model_name}')
    var global_obj_json = JSON.parse(global_obj_string)

    // Populating Global Object with successful mappings
    ${GenerateFieldPopulation(mappings)}

    // Updating global variable
    globalMap.put('${model_name}', JSON.stringify(global_obj_json))
    `

    return generated_script
}

const GenerateFieldPopulation = (mappings) => {
    let generated_population_script = ''
    for (let i = 0; i < mappings.length; i++) {
        const mapping = mappings[i];
        const new_population = `// ${mapping.name} Field Population if extraction was successful
        if(channelMap.get('${mapping.name}')) {global_obj_json['${mapping.name}'] = channelMap.get('${mapping.name}')}
        `
        generated_population_script += new_population
    }

    return generated_population_script
}

// Batch Validation Destination Generation
const GenerateDestinationBatchValidation = (mappings, model_name) => {
    const new_destination = {
        "@version": "4.3.0",
        "metaDataId": 2,
        "name": "Batch Validation",
        "properties": {
            "@class": "com.mirth.connect.connectors.js.JavaScriptDispatcherProperties",
            "@version": "4.3.0",
            "pluginProperties": null,
            "destinationConnectorProperties": {
                "@version": "4.3.0",
                "queueEnabled": false,
                "sendFirst": false,
                "retryIntervalMillis": 10000,
                "regenerateTemplate": false,
                "retryCount": 0,
                "rotate": false,
                "includeFilterTransformer": false,
                "threadCount": 1,
                "threadAssignmentVariable": null,
                "validateResponse": false,
                "resourceIds": {
                    "@class": "linked-hash-map",
                    "entry": {
                        "string": [
                            "Default Resource",
                            "[Default Resource]"
                        ]
                    }
                },
                "queueBufferSize": 1000,
                "reattachAttachments": true
            },
            "script": GenerateBatchValidationScript(mappings, model_name)
        },
        "transformer": {
            "@version": "4.3.0",
            "elements": {
                "com.mirth.connect.plugins.mapper.MapperStep": {
                    "@version": "4.3.0",
                    "name": "req_obj_valid",
                    "sequenceNumber": 0,
                    "enabled": true,
                    "variable": "req_obj_valid",
                    "mapping": null,
                    "defaultValue": false,
                    "replacements": null,
                    "scope": "CHANNEL"
                }
            },
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
        "responseTransformer": {
            "@version": "4.3.0",
            "elements": null,
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
            "elements": {
                "com.mirth.connect.plugins.rulebuilder.RuleBuilderRule": {
                    "@version": "4.3.0",
                    "name": "Accept message if \"$('batchComplete')\" equals true",
                    "sequenceNumber": 0,
                    "enabled": true,
                    "field": "$('batchComplete')",
                    "condition": "EQUALS",
                    "values": {
                        "string": true
                    }
                }
            }
        },
        "transportName": "JavaScript Writer",
        "mode": "DESTINATION",
        "enabled": true,
        "waitForPrevious": true
    }

    return new_destination
}

const GenerateBatchValidationScript = (mappings, model_name) => {
    const generatedScript = `// Automatic Batch Validation
    logger.info('All messages Processed. Validating the request object')

    // Fetching the parsed data
    const global_obj = JSON.parse(globalMap.get('${model_name}'))
    var validated = true

    // Creating the response template
    var final_res = {
        request_features: {
            
            },
        status: 200,
        message: 'Request created successfully'
        }

        // Validations
        ${GenerateFieldValidation(mappings)}

    // Setting the flag for the rest of the channel to proceed
    channelMap.put('req_obj_valid', validated)


    if(!validated){
        final_res['status'] = 500
        final_res['message'] = 'Request was not created'
    }else{
        final_res['status'] = 200
        final_res['message'] = 'Request created successfully'
    }

    // Setting the final_res channel var
    channelMap.put('final_res', JSON.stringify(final_res))

    // Setting preprocessing object
    var pre_proc_obj = {
    	pred_obj: global_obj
    }
    channelMap.put('pre_proc_obj', JSON.stringify(pre_proc_obj))
    `

    return generatedScript
}

const GenerateFieldValidation = (mappings) => {
    let validations = ''

    for (let i = 0; i < mappings.length; i++) {
        const mapping = mappings[i];

        const new_validation = ` // Validation for ${mapping.name}
        if(global_obj['${mapping.name}']){
            final_res['request_features']['${mapping.name}'] = {status: 'ok', value: global_obj['${mapping.name}']}
        }else{
            final_res['request_features']['${mapping.name}'] = {status: 'fail', mapping: "${mapping.map_to}", trigger_events: "${mapping.hl7_triggers}"}; validated = false}
        `
        validations += new_validation
    }

    return validations
}

const GenerateDestinationSendDataDB = () => {
    const new_destination = {
        "@version": "4.3.0",
        "metaDataId": 5,
        "name": "Sending Data to DB",
        "properties": {
            "@class": "com.mirth.connect.connectors.http.HttpDispatcherProperties",
            "@version": "4.3.0",
            "pluginProperties": null,
            "destinationConnectorProperties": {
                "@version": "4.3.0",
                "queueEnabled": false,
                "sendFirst": false,
                "retryIntervalMillis": 10000,
                "regenerateTemplate": false,
                "retryCount": 0,
                "rotate": false,
                "includeFilterTransformer": false,
                "threadCount": 1,
                "threadAssignmentVariable": null,
                "validateResponse": false,
                "resourceIds": {
                    "@class": "linked-hash-map",
                    "entry": {
                        "string": [
                            "Default Resource",
                            "[Default Resource]"
                        ]
                    }
                },
                "queueBufferSize": 1000,
                "reattachAttachments": true
            },
            "host": "http://mysql-webservice:3000/api/create-request",
            "useProxyServer": false,
            "proxyAddress": null,
            "proxyPort": null,
            "method": "post",
            "headers": {
                "@class": "linked-hash-map"
            },
            "parameters": {
                "@class": "linked-hash-map"
            },
            "useHeadersVariable": false,
            "headersVariable": null,
            "useParametersVariable": false,
            "parametersVariable": null,
            "responseXmlBody": false,
            "responseParseMultipart": true,
            "responseIncludeMetadata": false,
            "responseBinaryMimeTypes": "application/.*(?<!json|xml)$|image/.*|video/.*|audio/.*",
            "responseBinaryMimeTypesRegex": true,
            "multipart": false,
            "useAuthentication": false,
            "authenticationType": "Basic",
            "usePreemptiveAuthentication": false,
            "username": null,
            "password": null,
            "content": "${db_req}",
            "contentType": "application/json",
            "dataTypeBinary": false,
            "charset": "UTF-8",
            "socketTimeout": 30000
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
        "responseTransformer": {
            "@version": "4.3.0",
            "elements": null,
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
            "elements": {
                "com.mirth.connect.plugins.rulebuilder.RuleBuilderRule": {
                    "@version": "4.3.0",
                    "name": "Accept message if \"$('req_obj_valid')\" equals true",
                    "sequenceNumber": 0,
                    "enabled": true,
                    "field": "$('req_obj_valid')",
                    "condition": "EQUALS",
                    "values": {
                        "string": true
                    }
                }
            }
        },
        "transportName": "HTTP Sender",
        "mode": "DESTINATION",
        "enabled": true,
        "waitForPrevious": true
    }
    return new_destination
}

const GenerateDestinationSendDataMQ = (model_name) => {
    const new_destination = {
        "@version": "4.3.0",
        "metaDataId": 6,
        "name": "Sending Data to MQ",
        "properties": {
            "@class": "com.mirth.connect.connectors.http.HttpDispatcherProperties",
            "@version": "4.3.0",
            "pluginProperties": null,
            "destinationConnectorProperties": {
                "@version": "4.3.0",
                "queueEnabled": false,
                "sendFirst": false,
                "retryIntervalMillis": 10000,
                "regenerateTemplate": false,
                "retryCount": 0,
                "rotate": false,
                "includeFilterTransformer": false,
                "threadCount": 1,
                "threadAssignmentVariable": null,
                "validateResponse": false,
                "resourceIds": {
                    "@class": "linked-hash-map",
                    "entry": {
                        "string": [
                            "Default Resource",
                            "[Default Resource]"
                        ]
                    }
                },
                "queueBufferSize": 1000,
                "reattachAttachments": true
            },
            "host": "http://message-queue-webservice:3000/api/rabbitmq/message",
            "useProxyServer": false,
            "proxyAddress": null,
            "proxyPort": null,
            "method": "post",
            "headers": {
                "@class": "linked-hash-map"
            },
            "parameters": {
                "@class": "linked-hash-map"
            },
            "useHeadersVariable": false,
            "headersVariable": null,
            "useParametersVariable": false,
            "parametersVariable": null,
            "responseXmlBody": false,
            "responseParseMultipart": true,
            "responseIncludeMetadata": false,
            "responseBinaryMimeTypes": "application/.*(?<!json|xml)$|image/.*|video/.*|audio/.*",
            "responseBinaryMimeTypesRegex": true,
            "multipart": false,
            "useAuthentication": false,
            "authenticationType": "Basic",
            "usePreemptiveAuthentication": false,
            "username": null,
            "password": null,
            "content": "${pre_proc_obj}",
            "contentType": "application/json",
            "dataTypeBinary": false,
            "charset": "UTF-8",
            "socketTimeout": 30000
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
        "responseTransformer": {
            "@version": "4.3.0",
            "elements": null,
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
            "elements": {
                "com.mirth.connect.plugins.rulebuilder.RuleBuilderRule": {
                    "@version": "4.3.0",
                    "name": "Accept message if \"$('req_obj_valid')\" equals true",
                    "sequenceNumber": 0,
                    "enabled": true,
                    "field": "$('req_obj_valid')",
                    "condition": "EQUALS",
                    "values": {
                        "string": true
                    }
                }
            }
        },
        "transportName": "HTTP Sender",
        "mode": "DESTINATION",
        "enabled": true,
        "waitForPrevious": true
    }
    return new_destination
}

const GenerateDestinationSendResponse = (model_name) => {
    const new_destination = {
        "@version": "4.3.0",
        "metaDataId": 7,
        "name": "Send Response",
        "properties": {
            "@class": "com.mirth.connect.connectors.js.JavaScriptDispatcherProperties",
            "@version": "4.3.0",
            "pluginProperties": null,
            "destinationConnectorProperties": {
                "@version": "4.3.0",
                "queueEnabled": false,
                "sendFirst": false,
                "retryIntervalMillis": 10000,
                "regenerateTemplate": false,
                "retryCount": 0,
                "rotate": false,
                "includeFilterTransformer": false,
                "threadCount": 1,
                "threadAssignmentVariable": null,
                "validateResponse": false,
                "resourceIds": {
                    "@class": "linked-hash-map",
                    "entry": {
                        "string": [
                            "Default Resource",
                            "[Default Resource]"
                        ]
                    }
                },
                "queueBufferSize": 1000,
                "reattachAttachments": true
            },
            "script": `globalMap.put('${model_name}', JSON.stringify({}))\nreturn channelMap.get('final_res')`
        },
        "transformer": {
            "@version": "4.3.0",
            "elements": null,
            "inboundTemplate": {
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
        "responseTransformer": {
            "@version": "4.3.0",
            "elements": null,
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
            "elements": {
                "com.mirth.connect.plugins.rulebuilder.RuleBuilderRule": {
                    "@version": "4.3.0",
                    "name": "Accept message if \"$('batchComplete')\" equals true",
                    "sequenceNumber": 0,
                    "enabled": true,
                    "field": "$('batchComplete')",
                    "condition": "EQUALS",
                    "values": {
                        "string": true
                    }
                }
            }
        },
        "transportName": "JavaScript Writer",
        "mode": "DESTINATION",
        "enabled": true,
        "waitForPrevious": true
    }
    return new_destination
}

const GenerateDestinationRequestPreparation = (table_name, model_name) => {
    const new_destination = {
        "@version": "4.3.0",
        "metaDataId": 4,
        "name": "Request Preparation",
        "properties": {
            "@class": "com.mirth.connect.connectors.js.JavaScriptDispatcherProperties",
            "@version": "4.3.0",
            "pluginProperties": null,
            "destinationConnectorProperties": {
                "@version": "4.3.0",
                "queueEnabled": false,
                "sendFirst": false,
                "retryIntervalMillis": 10000,
                "regenerateTemplate": false,
                "retryCount": 0,
                "rotate": false,
                "includeFilterTransformer": false,
                "threadCount": 1,
                "threadAssignmentVariable": null,
                "validateResponse": false,
                "resourceIds": {
                    "@class": "linked-hash-map",
                    "entry": {
                        "string": [
                            "Default Resource",
                            "[Default Resource]"
                        ]
                    }
                },
                "queueBufferSize": 1000,
                "reattachAttachments": true
            },
            "script": GenerateRequestPreparationScript(model_name, table_name)
        },
        "transformer": {
            "@version": "4.3.0",
            "elements": null,
            "inboundTemplate": {
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
        "responseTransformer": {
            "@version": "4.3.0",
            "elements": null,
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
            "elements": {
                "com.mirth.connect.plugins.rulebuilder.RuleBuilderRule": {
                    "@version": "4.3.0",
                    "name": "Accept message if \"$('req_obj_valid')\" equals true",
                    "sequenceNumber": 0,
                    "enabled": true,
                    "field": "$('req_obj_valid')",
                    "condition": "EQUALS",
                    "values": {
                        "string": true
                    }
                }
            }
        },
        "transportName": "JavaScript Writer",
        "mode": "DESTINATION",
        "enabled": true,
        "waitForPrevious": true
    }

    return new_destination
}

const GenerateRequestPreparationScript = (model_name, table_name) => {
    const new_script = `// Auto Generated Request Preparation Script

    // Fetching the global object
    const global_obj = JSON.parse(globalMap.get('${model_name}'))

    // Generating Unique ID
    var uuid = UUIDGenerator.getUUID();

    global_obj['req_id'] = uuid
    globalMap.put('${model_name}', JSON.stringify(global_obj))

    var db_req = {
    table_name: "${table_name}",
    values: global_obj
    }

    channelMap.put('db_req', JSON.stringify(db_req))

    // Fetching Preprocessed object
    var pre_proc_obj = JSON.parse(channelMap.get('pre_proc_obj'))
    pre_proc_obj['req_id'] = uuid

    channelMap.put('pre_proc_obj', JSON.stringify(pre_proc_obj))
    `

    return new_script
}

const GenerateDestinationPreprocessor = (model_name) => {
    const new_destination = {
        "@version": "4.3.0",
        "metaDataId": 3,
        "name": "Preprocessor",
        "properties": {
            "@class": "com.mirth.connect.connectors.http.HttpDispatcherProperties",
            "@version": "4.3.0",
            "pluginProperties": null,
            "destinationConnectorProperties": {
                "@version": "4.3.0",
                "queueEnabled": false,
                "sendFirst": false,
                "retryIntervalMillis": 10000,
                "regenerateTemplate": false,
                "retryCount": 0,
                "rotate": false,
                "includeFilterTransformer": false,
                "threadCount": 1,
                "threadAssignmentVariable": null,
                "validateResponse": false,
                "resourceIds": {
                    "@class": "linked-hash-map",
                    "entry": {
                        "string": [
                            "Default Resource",
                            "[Default Resource]"
                        ]
                    }
                },
                "queueBufferSize": 1000,
                "reattachAttachments": true
            },
            "host": `http://preprocessing-webservice:3000/api/preprocess/${model_name}`,
            "useProxyServer": false,
            "proxyAddress": null,
            "proxyPort": null,
            "method": "post",
            "headers": {
                "@class": "linked-hash-map"
            },
            "parameters": {
                "@class": "linked-hash-map"
            },
            "useHeadersVariable": false,
            "headersVariable": null,
            "useParametersVariable": false,
            "parametersVariable": null,
            "responseXmlBody": false,
            "responseParseMultipart": true,
            "responseIncludeMetadata": false,
            "responseBinaryMimeTypes": "application/.*(?<!json|xml)$|image/.*|video/.*|audio/.*",
            "responseBinaryMimeTypesRegex": true,
            "multipart": false,
            "useAuthentication": false,
            "authenticationType": "Basic",
            "usePreemptiveAuthentication": false,
            "username": null,
            "password": null,
            "content": "${pre_proc_obj}",
            "contentType": "application/json",
            "dataTypeBinary": false,
            "charset": "DEFAULT_ENCODING",
            "socketTimeout": 30000
        },
        "transformer": {
            "@version": "4.3.0",
            "elements": null,
            "inboundTemplate": {
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
        "responseTransformer": {
            "@version": "4.3.0",
            "elements": {
                "com.mirth.connect.plugins.mapper.MapperStep": {
                    "@version": "4.3.0",
                    "name": "pre_proc_obj",
                    "sequenceNumber": 0,
                    "enabled": true,
                    "variable": "pre_proc_obj",
                    "mapping": "JSON.stringify(msg['proc_obj'])",
                    "defaultValue": null,
                    "replacements": null,
                    "scope": "CHANNEL"
                }
            },
            "inboundTemplate": {
                "@encoding": "base64",
                "$": "ewogICAgInByb2Nfb2JqIjogewogICAgICAgICJ1cmdfZXBpc29kaW8iOiAxMjM0NSwKICAgICAgICAiaG9yYV9hZG1pc3NhbyI6IDE2ODUzNjMyNzgsCiAgICAgICAgImNvZF92aWFfdmVyZGUiOiAxLAogICAgICAgICJjb2RfcHJvdmVuaWVuY2lhIjogMSwKICAgICAgICAiY29kX2NhdXNhIjogMSwKICAgICAgICAiY29kX2NvbmNlbGhvIjogMSwKICAgICAgICAiY29kX3ByaW9yaWRhZGUiOiAxLAogICAgICAgICJpZGFkZSI6IDMzLAogICAgICAgICJzZXhvIjogMSwKICAgICAgICAibG9zIjogNDMyMDAwLAogICAgICAgICJhZmx1ZW5jaWEiOiAxMjAKICAgIH0KfQ=="
            },
            "outboundTemplate": {
                "@encoding": "base64",
                "$": "ewogICAgInByb2Nfb2JqIjogewogICAgICAgICJ1cmdfZXBpc29kaW8iOiAxMjM0NSwKICAgICAgICAiaG9yYV9hZG1pc3NhbyI6IDE2ODUzNjMyNzgsCiAgICAgICAgImNvZF92aWFfdmVyZGUiOiAxLAogICAgICAgICJjb2RfcHJvdmVuaWVuY2lhIjogMSwKICAgICAgICAiY29kX2NhdXNhIjogMSwKICAgICAgICAiY29kX2NvbmNlbGhvIjogMSwKICAgICAgICAiY29kX3ByaW9yaWRhZGUiOiAxLAogICAgICAgICJpZGFkZSI6IDMzLAogICAgICAgICJzZXhvIjogMSwKICAgICAgICAibG9zIjogNDMyMDAwLAogICAgICAgICJhZmx1ZW5jaWEiOiAxMjAKICAgIH0KfQ=="
            },
            "inboundDataType": "JSON",
            "outboundDataType": "JSON",
            "inboundProperties": {
                "@class": "com.mirth.connect.plugins.datatypes.json.JSONDataTypeProperties",
                "@version": "4.3.0",
                "batchProperties": {
                    "@class": "com.mirth.connect.plugins.datatypes.json.JSONBatchProperties",
                    "@version": "4.3.0",
                    "splitType": "JavaScript",
                    "batchScript": null
                }
            },
            "outboundProperties": {
                "@class": "com.mirth.connect.plugins.datatypes.json.JSONDataTypeProperties",
                "@version": "4.3.0",
                "batchProperties": {
                    "@class": "com.mirth.connect.plugins.datatypes.json.JSONBatchProperties",
                    "@version": "4.3.0",
                    "splitType": "JavaScript",
                    "batchScript": null
                }
            }
        },
        "filter": {
            "@version": "4.3.0",
            "elements": {
                "com.mirth.connect.plugins.rulebuilder.RuleBuilderRule": {
                    "@version": "4.3.0",
                    "name": "Accept message if \"$('req_obj_valid')\" equals true",
                    "sequenceNumber": 0,
                    "enabled": true,
                    "field": "$('req_obj_valid')",
                    "condition": "EQUALS",
                    "values": {
                        "string": true
                    }
                }
            }
        },
        "transportName": "HTTP Sender",
        "mode": "DESTINATION",
        "enabled": true,
        "waitForPrevious": true
    }
    return new_destination
}


module.exports = {
    GenerateDestinationHL7Extraction: GenerateDestinationHL7Extraction,
    GenerateDestinationBatchValidation: GenerateDestinationBatchValidation,
    GenerateDestinationSendDataDB: GenerateDestinationSendDataDB,
    GenerateDestinationSendDataMQ: GenerateDestinationSendDataMQ,
    GenerateDestinationSendResponse: GenerateDestinationSendResponse,
    GenerateDestinationRequestPreparation: GenerateDestinationRequestPreparation,
    GenerateDestinationPreprocessor: GenerateDestinationPreprocessor
}