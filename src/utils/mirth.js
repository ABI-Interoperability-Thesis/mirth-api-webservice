const { v4: uuidv4 } = require('uuid');

const GenerateChannelData = async (channel_type, channel_name, channel_description, channel_port) => {
    if (channel_type === 'runner') {
        return GenerateRunnerData(channel_name, channel_description, channel_port);
    } else if (channel_type === 'test') {
        return GenerateTesterData(channel_name, channel_description, channel_port);
    }
}

const GenerateRunnerData = async (channel_name, channel_description, channel_port) => {
    const uniqueId = uuidv4();
    return JSON.stringify({
        "channel": {
            "@version": "4.3.0",
            "id": uniqueId,
            "nextMetaDataId": 9,
            "name": channel_name,
            "description": channel_description,
            "revision": 1,
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
                        "responseVariable": "d8",
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
                    "includeMetadata": false,
                    "binaryMimeTypes": "application/.*(?<!json|xml)$|image/.*|video/.*|audio/.*",
                    "binaryMimeTypesRegex": true,
                    "responseContentType": "application/json",
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
                    "elements": {
                        "com.mirth.connect.plugins.mapper.MapperStep": [
                            {
                                "@version": "4.3.0",
                                "name": "model_name",
                                "sequenceNumber": 0,
                                "enabled": true,
                                "variable": "model_name",
                                "mapping": "sourceMap.get('parameters').getParameter('model')",
                                "defaultValue": null,
                                "replacements": null,
                                "scope": "CHANNEL"
                            },
                            {
                                "@version": "4.3.0",
                                "name": "api_token",
                                "sequenceNumber": 1,
                                "enabled": true,
                                "variable": "api_token",
                                "mapping": "sourceMap.get('headers').getHeader('API-Token')",
                                "defaultValue": "000000000",
                                "replacements": null,
                                "scope": "CHANNEL"
                            }
                        ]
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
                    {
                        "@version": "4.3.0",
                        "metaDataId": 1,
                        "name": "Fetch Mappings",
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
                            "host": "http://mysql-webservice:3000/api/client-mappings/${model_name}",
                            "useProxyServer": false,
                            "proxyAddress": null,
                            "proxyPort": null,
                            "method": "get",
                            "headers": {
                                "@class": "linked-hash-map",
                                "entry": {
                                    "string": "session-token",
                                    "list": {
                                        "string": "${api_token}"
                                    }
                                }
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
                            "content": null,
                            "contentType": "text/plain",
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
                            "elements": {
                                "com.mirth.connect.plugins.javascriptstep.JavaScriptStep": {
                                    "@version": "4.3.0",
                                    "name": "client_permission",
                                    "sequenceNumber": 0,
                                    "enabled": true,
                                    "script": "var mapping;\n\ntry {\n    mapping = msg['status'];\n} catch (e) {\n    mapping = '';\n}\n\nif(mapping == 200){\n\tglobalMap.put('client_permission', true);\n}else{\n\tglobalMap.put('client_permission', false);\n}"
                                },
                                "com.mirth.connect.plugins.mapper.MapperStep": [
                                    {
                                        "@version": "4.3.0",
                                        "name": "client_mappings",
                                        "sequenceNumber": 1,
                                        "enabled": true,
                                        "variable": "client_mappings",
                                        "mapping": "JSON.stringify(msg['client_mappings'])",
                                        "defaultValue": "JSON.stringify([])",
                                        "replacements": null,
                                        "scope": "GLOBAL"
                                    },
                                    {
                                        "@version": "4.3.0",
                                        "name": "model_id",
                                        "sequenceNumber": 2,
                                        "enabled": true,
                                        "variable": "model_id",
                                        "mapping": "msg['model_id']",
                                        "defaultValue": 123,
                                        "replacements": null,
                                        "scope": "GLOBAL"
                                    },
                                    {
                                        "@version": "4.3.0",
                                        "name": "curr_client",
                                        "sequenceNumber": 3,
                                        "enabled": true,
                                        "variable": "curr_client",
                                        "mapping": "JSON.stringify(msg['curr_client'])",
                                        "defaultValue": "JSON.stringify({})",
                                        "replacements": null,
                                        "scope": "GLOBAL"
                                    }
                                ]
                            },
                            "inboundTemplate": {
                                "@encoding": "base64",
                                "$": "ewogICAgInN0YXR1cyI6IDIwMCwKICAgICJjbGllbnRfbWFwcGluZ3MiOiBbCiAgICAgICAgewogICAgICAgICAgICAibWFwcGluZ19pZCI6IDEwMCwKICAgICAgICAgICAgImNsaWVudF9pZCI6ICJEZWZhdWx0IiwKICAgICAgICAgICAgIm1vZGVsIjogImhvc3BpdGFsaXphdGlvbl9wcmVkIiwKICAgICAgICAgICAgIm1vZGVsX2lkIjogIjMxMTQ1MjRhLTc0ZDgtNDNmZi1iZWFlLTJjOGU0NDBhZWY1MCIsCiAgICAgICAgICAgICJmaWVsZCI6ICJ1cmdfZXBpc29kaW8iLAogICAgICAgICAgICAibWFwcGluZyI6ICJtc2dbXCJQVjFcIl1bXCJQVjEuMTlcIl1bXCJQVjEuMTkuMVwiXSIsCiAgICAgICAgICAgICJtc2dfdHlwZSI6ICJBRFQiLAogICAgICAgICAgICAibXNnX3RyaWdnZXJzIjogIltcIkEwMVwiLFwiQTAyXCIsXCJBMDNcIl0iLAogICAgICAgICAgICAidHJhbnNmb3JtZXJfc2NyaXB0IjogIlxuICAgIHZhciBtYXBwaW5nID0gZXZhbChtYXBwaW5nX2VsZW1lbnRbJ21hcHBpbmcnXSkudG9TdHJpbmcoKTtcblx0dmFyIG1zZ190eXBlID0gbXNnWydNU0gnXVsnTVNILjknXVsnTVNILjkuMSddLnRvU3RyaW5nKClcbiAgICB2YXIgbXNnX3RyaWdnZXIgPSBtc2dbJ01TSCddWydNU0guOSddWydNU0guOS4yJ10udG9TdHJpbmcoKVxuXHRcbiAgICBpZiAobWFwcGluZyAhPSAnJyAmJiBtc2dfdHlwZSA9PT0gbWFwcGluZ19lbGVtZW50Wydtc2dfdHlwZSddICYmIHRyaWdnZXJfZXZlbnRzLmluY2x1ZGVzKG1zZ190cmlnZ2VyKSkge1xuXHRcdGNoYW5uZWxNYXAucHV0KGZpZWxkX25hbWUsIG1hcHBpbmcpO1xuICAgIH0iCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAgICJtYXBwaW5nX2lkIjogNjgsCiAgICAgICAgICAgICJjbGllbnRfaWQiOiAiRGVmYXVsdCIsCiAgICAgICAgICAgICJtb2RlbCI6ICJob3NwaXRhbGl6YXRpb25fcHJlZCIsCiAgICAgICAgICAgICJtb2RlbF9pZCI6ICIzMTE0NTI0YS03NGQ4LTQzZmYtYmVhZS0yYzhlNDQwYWVmNTAiLAogICAgICAgICAgICAiZmllbGQiOiAiaG9yYV9hZG1pc3NhbyIsCiAgICAgICAgICAgICJtYXBwaW5nIjogIm1zZ1tcIlBWMVwiXVtcIlBWMS40NFwiXVtcIlBWMS40NC4xXCJdIiwKICAgICAgICAgICAgIm1zZ190eXBlIjogIkFEVCIsCiAgICAgICAgICAgICJtc2dfdHJpZ2dlcnMiOiAiW1wiQTAxXCIsXCJBMDJcIixcIkEwM1wiXSIsCiAgICAgICAgICAgICJ0cmFuc2Zvcm1lcl9zY3JpcHQiOiAiXG4gICAgdmFyIG1hcHBpbmcgPSBldmFsKG1hcHBpbmdfZWxlbWVudFsnbWFwcGluZyddKS50b1N0cmluZygpO1xuXHR2YXIgbXNnX3R5cGUgPSBtc2dbJ01TSCddWydNU0guOSddWydNU0guOS4xJ10udG9TdHJpbmcoKVxuICAgIHZhciBtc2dfdHJpZ2dlciA9IG1zZ1snTVNIJ11bJ01TSC45J11bJ01TSC45LjInXS50b1N0cmluZygpXG5cdFxuICAgIGlmIChtYXBwaW5nICE9ICcnICYmIG1zZ190eXBlID09PSBtYXBwaW5nX2VsZW1lbnRbJ21zZ190eXBlJ10gJiYgdHJpZ2dlcl9ldmVudHMuaW5jbHVkZXMobXNnX3RyaWdnZXIpKSB7XG5cdFx0Y2hhbm5lbE1hcC5wdXQoZmllbGRfbmFtZSwgbWFwcGluZyk7XG4gICAgfSIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICAgIm1hcHBpbmdfaWQiOiA2OSwKICAgICAgICAgICAgImNsaWVudF9pZCI6ICJEZWZhdWx0IiwKICAgICAgICAgICAgIm1vZGVsIjogImhvc3BpdGFsaXphdGlvbl9wcmVkIiwKICAgICAgICAgICAgIm1vZGVsX2lkIjogIjMxMTQ1MjRhLTc0ZDgtNDNmZi1iZWFlLTJjOGU0NDBhZWY1MCIsCiAgICAgICAgICAgICJmaWVsZCI6ICJjb2RfY2F1c2EiLAogICAgICAgICAgICAibWFwcGluZyI6ICJtc2dbXCJERzFcIl1bXCJERzEuM1wiXVtcIkRHMS4zLjFcIl0iLAogICAgICAgICAgICAibXNnX3R5cGUiOiAiQURUIiwKICAgICAgICAgICAgIm1zZ190cmlnZ2VycyI6ICJbXCJBMDFcIixcIkEwMlwiLFwiQTAzXCJdIiwKICAgICAgICAgICAgInRyYW5zZm9ybWVyX3NjcmlwdCI6ICJcbiAgICB2YXIgbWFwcGluZyA9IGV2YWwobWFwcGluZ19lbGVtZW50WydtYXBwaW5nJ10pLnRvU3RyaW5nKCk7XG5cdHZhciBtc2dfdHlwZSA9IG1zZ1snTVNIJ11bJ01TSC45J11bJ01TSC45LjEnXS50b1N0cmluZygpXG4gICAgdmFyIG1zZ190cmlnZ2VyID0gbXNnWydNU0gnXVsnTVNILjknXVsnTVNILjkuMiddLnRvU3RyaW5nKClcblx0XG4gICAgaWYgKG1hcHBpbmcgIT0gJycgJiYgbXNnX3R5cGUgPT09IG1hcHBpbmdfZWxlbWVudFsnbXNnX3R5cGUnXSAmJiB0cmlnZ2VyX2V2ZW50cy5pbmNsdWRlcyhtc2dfdHJpZ2dlcikpIHtcblx0XHRjaGFubmVsTWFwLnB1dChmaWVsZF9uYW1lLCBtYXBwaW5nKTtcbiAgICB9IgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgICAibWFwcGluZ19pZCI6IDcwLAogICAgICAgICAgICAiY2xpZW50X2lkIjogIkRlZmF1bHQiLAogICAgICAgICAgICAibW9kZWwiOiAiaG9zcGl0YWxpemF0aW9uX3ByZWQiLAogICAgICAgICAgICAibW9kZWxfaWQiOiAiMzExNDUyNGEtNzRkOC00M2ZmLWJlYWUtMmM4ZTQ0MGFlZjUwIiwKICAgICAgICAgICAgImZpZWxkIjogImNvZF9wcm92ZW5pZW5jaWEiLAogICAgICAgICAgICAibWFwcGluZyI6ICJtc2dbXCJQVjFcIl1bXCJQVjEuOVwiXVtcIlBWMS45LjdcIl0iLAogICAgICAgICAgICAibXNnX3R5cGUiOiAiQURUIiwKICAgICAgICAgICAgIm1zZ190cmlnZ2VycyI6ICJbXCJBMDFcIixcIkEwMlwiLFwiQTAzXCJdIiwKICAgICAgICAgICAgInRyYW5zZm9ybWVyX3NjcmlwdCI6ICJcbiAgICB2YXIgbWFwcGluZyA9IGV2YWwobWFwcGluZ19lbGVtZW50WydtYXBwaW5nJ10pLnRvU3RyaW5nKCk7XG5cdHZhciBtc2dfdHlwZSA9IG1zZ1snTVNIJ11bJ01TSC45J11bJ01TSC45LjEnXS50b1N0cmluZygpXG4gICAgdmFyIG1zZ190cmlnZ2VyID0gbXNnWydNU0gnXVsnTVNILjknXVsnTVNILjkuMiddLnRvU3RyaW5nKClcblx0XG4gICAgaWYgKG1hcHBpbmcgIT0gJycgJiYgbXNnX3R5cGUgPT09IG1hcHBpbmdfZWxlbWVudFsnbXNnX3R5cGUnXSAmJiB0cmlnZ2VyX2V2ZW50cy5pbmNsdWRlcyhtc2dfdHJpZ2dlcikpIHtcblx0XHRjaGFubmVsTWFwLnB1dChmaWVsZF9uYW1lLCBtYXBwaW5nKTtcbiAgICB9IgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgICAibWFwcGluZ19pZCI6IDcxLAogICAgICAgICAgICAiY2xpZW50X2lkIjogIkRlZmF1bHQiLAogICAgICAgICAgICAibW9kZWwiOiAiaG9zcGl0YWxpemF0aW9uX3ByZWQiLAogICAgICAgICAgICAibW9kZWxfaWQiOiAiMzExNDUyNGEtNzRkOC00M2ZmLWJlYWUtMmM4ZTQ0MGFlZjUwIiwKICAgICAgICAgICAgImZpZWxkIjogImNvZF9wcmlvcmlkYWRlIiwKICAgICAgICAgICAgIm1hcHBpbmciOiAibXNnW1wiUFYxXCJdW1wiUFYxLjJcIl1bXCJQVjEuMi4xXCJdIiwKICAgICAgICAgICAgIm1zZ190eXBlIjogIkFEVCIsCiAgICAgICAgICAgICJtc2dfdHJpZ2dlcnMiOiAiW1wiQTAxXCIsXCJBMDJcIixcIkEwM1wiXSIsCiAgICAgICAgICAgICJ0cmFuc2Zvcm1lcl9zY3JpcHQiOiAiXG4gICAgdmFyIG1hcHBpbmcgPSBldmFsKG1hcHBpbmdfZWxlbWVudFsnbWFwcGluZyddKS50b1N0cmluZygpO1xuXHR2YXIgbXNnX3R5cGUgPSBtc2dbJ01TSCddWydNU0guOSddWydNU0guOS4xJ10udG9TdHJpbmcoKVxuICAgIHZhciBtc2dfdHJpZ2dlciA9IG1zZ1snTVNIJ11bJ01TSC45J11bJ01TSC45LjInXS50b1N0cmluZygpXG5cdFxuICAgIGlmIChtYXBwaW5nICE9ICcnICYmIG1zZ190eXBlID09PSBtYXBwaW5nX2VsZW1lbnRbJ21zZ190eXBlJ10gJiYgdHJpZ2dlcl9ldmVudHMuaW5jbHVkZXMobXNnX3RyaWdnZXIpKSB7XG5cdFx0Y2hhbm5lbE1hcC5wdXQoZmllbGRfbmFtZSwgbWFwcGluZyk7XG4gICAgfSIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICAgIm1hcHBpbmdfaWQiOiA3MiwKICAgICAgICAgICAgImNsaWVudF9pZCI6ICJEZWZhdWx0IiwKICAgICAgICAgICAgIm1vZGVsIjogImhvc3BpdGFsaXphdGlvbl9wcmVkIiwKICAgICAgICAgICAgIm1vZGVsX2lkIjogIjMxMTQ1MjRhLTc0ZDgtNDNmZi1iZWFlLTJjOGU0NDBhZWY1MCIsCiAgICAgICAgICAgICJmaWVsZCI6ICJpZGFkZSIsCiAgICAgICAgICAgICJtYXBwaW5nIjogIm1zZ1tcIlBJRFwiXVtcIlBJRC43XCJdW1wiUElELjcuMVwiXSIsCiAgICAgICAgICAgICJtc2dfdHlwZSI6ICJBRFQiLAogICAgICAgICAgICAibXNnX3RyaWdnZXJzIjogIltcIkEwMVwiLFwiQTAyXCIsXCJBMDNcIl0iLAogICAgICAgICAgICAidHJhbnNmb3JtZXJfc2NyaXB0IjogIlxuICAgIHZhciBtYXBwaW5nID0gZXZhbChtYXBwaW5nX2VsZW1lbnRbJ21hcHBpbmcnXSkudG9TdHJpbmcoKTtcblx0dmFyIG1zZ190eXBlID0gbXNnWydNU0gnXVsnTVNILjknXVsnTVNILjkuMSddLnRvU3RyaW5nKClcbiAgICB2YXIgbXNnX3RyaWdnZXIgPSBtc2dbJ01TSCddWydNU0guOSddWydNU0guOS4yJ10udG9TdHJpbmcoKVxuXHRcbiAgICBpZiAobWFwcGluZyAhPSAnJyAmJiBtc2dfdHlwZSA9PT0gbWFwcGluZ19lbGVtZW50Wydtc2dfdHlwZSddICYmIHRyaWdnZXJfZXZlbnRzLmluY2x1ZGVzKG1zZ190cmlnZ2VyKSkge1xuXHRcdGNoYW5uZWxNYXAucHV0KGZpZWxkX25hbWUsIG1hcHBpbmcpO1xuICAgIH0iCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAgICJtYXBwaW5nX2lkIjogODIsCiAgICAgICAgICAgICJjbGllbnRfaWQiOiAiRGVmYXVsdCIsCiAgICAgICAgICAgICJtb2RlbCI6ICJob3NwaXRhbGl6YXRpb25fcHJlZCIsCiAgICAgICAgICAgICJtb2RlbF9pZCI6ICIzMTE0NTI0YS03NGQ4LTQzZmYtYmVhZS0yYzhlNDQwYWVmNTAiLAogICAgICAgICAgICAiZmllbGQiOiAiY29kX3ZpYV92ZXJkZSIsCiAgICAgICAgICAgICJtYXBwaW5nIjogIm1zZ1tcIk9CWFwiXVtcIk9CWC41XCJdW1wiT0JYLjUuMVwiXSIsCiAgICAgICAgICAgICJtc2dfdHlwZSI6ICJPUlUiLAogICAgICAgICAgICAibXNnX3RyaWdnZXJzIjogIltcIlIwMVwiLFwiUjAyXCJdIiwKICAgICAgICAgICAgInRyYW5zZm9ybWVyX3NjcmlwdCI6ICJcbiAgICB2YXIgbWFwcGluZyA9IGV2YWwobWFwcGluZ19lbGVtZW50WydtYXBwaW5nJ10pLnRvU3RyaW5nKCk7XG5cdHZhciBtc2dfdHlwZSA9IG1zZ1snTVNIJ11bJ01TSC45J11bJ01TSC45LjEnXS50b1N0cmluZygpXG4gICAgdmFyIG1zZ190cmlnZ2VyID0gbXNnWydNU0gnXVsnTVNILjknXVsnTVNILjkuMiddLnRvU3RyaW5nKClcbiAgICB2YXIgbWFwcGluZ19pZCA9IG1zZ1snT0JYJ11bJ09CWC4zJ11bJ09CWC4zLjEnXS50b1N0cmluZygpXG5cdFxuICAgIGlmIChtYXBwaW5nICE9ICcnICYmIG1hcHBpbmdfaWQgPT09ICdjb2RfdmlhX3ZlcmRlJyAmJiBtc2dfdHlwZSA9PT0gbWFwcGluZ19lbGVtZW50Wydtc2dfdHlwZSddICYmIHRyaWdnZXJfZXZlbnRzLmluY2x1ZGVzKG1zZ190cmlnZ2VyKSkge1xuXHRcdGNoYW5uZWxNYXAucHV0KGZpZWxkX25hbWUsIG1hcHBpbmcpO1xuICAgIH0iCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAgICJtYXBwaW5nX2lkIjogMTAyLAogICAgICAgICAgICAiY2xpZW50X2lkIjogIkRlZmF1bHQiLAogICAgICAgICAgICAibW9kZWwiOiAiaG9zcGl0YWxpemF0aW9uX3ByZWQiLAogICAgICAgICAgICAibW9kZWxfaWQiOiAiMzExNDUyNGEtNzRkOC00M2ZmLWJlYWUtMmM4ZTQ0MGFlZjUwIiwKICAgICAgICAgICAgImZpZWxkIjogInNleG8iLAogICAgICAgICAgICAibWFwcGluZyI6ICJtc2dbXCJQSURcIl1bXCJQSUQuOFwiXVtcIlBJRC44LjFcIl0iLAogICAgICAgICAgICAibXNnX3R5cGUiOiAiQURUIiwKICAgICAgICAgICAgIm1zZ190cmlnZ2VycyI6ICJbXCJBMDFcIixcIkEwMlwiLFwiQTAzXCJdIiwKICAgICAgICAgICAgInRyYW5zZm9ybWVyX3NjcmlwdCI6ICJcbiAgICB2YXIgbWFwcGluZyA9IGV2YWwobWFwcGluZ19lbGVtZW50WydtYXBwaW5nJ10pLnRvU3RyaW5nKCk7XG5cdHZhciBtc2dfdHlwZSA9IG1zZ1snTVNIJ11bJ01TSC45J11bJ01TSC45LjEnXS50b1N0cmluZygpXG4gICAgdmFyIG1zZ190cmlnZ2VyID0gbXNnWydNU0gnXVsnTVNILjknXVsnTVNILjkuMiddLnRvU3RyaW5nKClcblx0XG4gICAgaWYgKG1hcHBpbmcgIT0gJycgJiYgbXNnX3R5cGUgPT09IG1hcHBpbmdfZWxlbWVudFsnbXNnX3R5cGUnXSAmJiB0cmlnZ2VyX2V2ZW50cy5pbmNsdWRlcyhtc2dfdHJpZ2dlcikpIHtcblx0XHRjaGFubmVsTWFwLnB1dChmaWVsZF9uYW1lLCBtYXBwaW5nKTtcbiAgICB9IgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgICAibWFwcGluZ19pZCI6IDc1LAogICAgICAgICAgICAiY2xpZW50X2lkIjogIkRlZmF1bHQiLAogICAgICAgICAgICAibW9kZWwiOiAiaG9zcGl0YWxpemF0aW9uX3ByZWQiLAogICAgICAgICAgICAibW9kZWxfaWQiOiAiMzExNDUyNGEtNzRkOC00M2ZmLWJlYWUtMmM4ZTQ0MGFlZjUwIiwKICAgICAgICAgICAgImZpZWxkIjogImNvZF9jb25jZWxobyIsCiAgICAgICAgICAgICJtYXBwaW5nIjogIm1zZ1tcIlBJRFwiXVtcIlBJRC4xMVwiXVtcIlBJRC4xMS45XCJdIiwKICAgICAgICAgICAgIm1zZ190eXBlIjogIkFEVCIsCiAgICAgICAgICAgICJtc2dfdHJpZ2dlcnMiOiAiW1wiQTAxXCIsXCJBMDJcIixcIkEwM1wiXSIsCiAgICAgICAgICAgICJ0cmFuc2Zvcm1lcl9zY3JpcHQiOiAiXG4gICAgdmFyIG1hcHBpbmcgPSBldmFsKG1hcHBpbmdfZWxlbWVudFsnbWFwcGluZyddKS50b1N0cmluZygpO1xuXHR2YXIgbXNnX3R5cGUgPSBtc2dbJ01TSCddWydNU0guOSddWydNU0guOS4xJ10udG9TdHJpbmcoKVxuICAgIHZhciBtc2dfdHJpZ2dlciA9IG1zZ1snTVNIJ11bJ01TSC45J11bJ01TSC45LjInXS50b1N0cmluZygpXG5cdFxuICAgIGlmIChtYXBwaW5nICE9ICcnICYmIG1zZ190eXBlID09PSBtYXBwaW5nX2VsZW1lbnRbJ21zZ190eXBlJ10gJiYgdHJpZ2dlcl9ldmVudHMuaW5jbHVkZXMobXNnX3RyaWdnZXIpKSB7XG5cdFx0Y2hhbm5lbE1hcC5wdXQoZmllbGRfbmFtZSwgbWFwcGluZyk7XG4gICAgfSIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICAgIm1hcHBpbmdfaWQiOiA3NiwKICAgICAgICAgICAgImNsaWVudF9pZCI6ICJEZWZhdWx0IiwKICAgICAgICAgICAgIm1vZGVsIjogImhvc3BpdGFsaXphdGlvbl9wcmVkIiwKICAgICAgICAgICAgIm1vZGVsX2lkIjogIjMxMTQ1MjRhLTc0ZDgtNDNmZi1iZWFlLTJjOGU0NDBhZWY1MCIsCiAgICAgICAgICAgICJmaWVsZCI6ICJhZmx1ZW5jaWEiLAogICAgICAgICAgICAibWFwcGluZyI6ICJtc2dbXCJPQlhcIl1bXCJPQlguNVwiXVtcIk9CWC41LjFcIl0iLAogICAgICAgICAgICAibXNnX3R5cGUiOiAiT1JVIiwKICAgICAgICAgICAgIm1zZ190cmlnZ2VycyI6ICJbXCJSMDFcIixcIlIwMlwiXSIsCiAgICAgICAgICAgICJ0cmFuc2Zvcm1lcl9zY3JpcHQiOiAiXG4gICAgdmFyIG1hcHBpbmcgPSBldmFsKG1hcHBpbmdfZWxlbWVudFsnbWFwcGluZyddKS50b1N0cmluZygpO1xuXHR2YXIgbXNnX3R5cGUgPSBtc2dbJ01TSCddWydNU0guOSddWydNU0guOS4xJ10udG9TdHJpbmcoKVxuICAgIHZhciBtc2dfdHJpZ2dlciA9IG1zZ1snTVNIJ11bJ01TSC45J11bJ01TSC45LjInXS50b1N0cmluZygpXG4gICAgdmFyIG1hcHBpbmdfaWQgPSBtc2dbJ09CWCddWydPQlguMyddWydPQlguMy4xJ10udG9TdHJpbmcoKVxuXHRcbiAgICBpZiAobWFwcGluZyAhPSAnJyAmJiBtYXBwaW5nX2lkID09PSAnYWZsdWVuY2lhJyAmJiBtc2dfdHlwZSA9PT0gbWFwcGluZ19lbGVtZW50Wydtc2dfdHlwZSddICYmIHRyaWdnZXJfZXZlbnRzLmluY2x1ZGVzKG1zZ190cmlnZ2VyKSkge1xuXHRcdGNoYW5uZWxNYXAucHV0KGZpZWxkX25hbWUsIG1hcHBpbmcpO1xuICAgIH0iCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAgICJtYXBwaW5nX2lkIjogNzksCiAgICAgICAgICAgICJjbGllbnRfaWQiOiAiRGVmYXVsdCIsCiAgICAgICAgICAgICJtb2RlbCI6ICJob3NwaXRhbGl6YXRpb25fcHJlZCIsCiAgICAgICAgICAgICJtb2RlbF9pZCI6ICIzMTE0NTI0YS03NGQ4LTQzZmYtYmVhZS0yYzhlNDQwYWVmNTAiLAogICAgICAgICAgICAiZmllbGQiOiAibG9zIiwKICAgICAgICAgICAgIm1hcHBpbmciOiAibXNnW1wiUFYyXCJdW1wiUFYyLjEwXCJdW1wiUFYyLjEwLjFcIl0iLAogICAgICAgICAgICAibXNnX3R5cGUiOiAiQURUIiwKICAgICAgICAgICAgIm1zZ190cmlnZ2VycyI6ICJbXCJBMDFcIixcIkEwMlwiLFwiQTAzXCJdIiwKICAgICAgICAgICAgInRyYW5zZm9ybWVyX3NjcmlwdCI6ICJcbiAgICB2YXIgbWFwcGluZyA9IGV2YWwobWFwcGluZ19lbGVtZW50WydtYXBwaW5nJ10pLnRvU3RyaW5nKCk7XG5cdHZhciBtc2dfdHlwZSA9IG1zZ1snTVNIJ11bJ01TSC45J11bJ01TSC45LjEnXS50b1N0cmluZygpXG4gICAgdmFyIG1zZ190cmlnZ2VyID0gbXNnWydNU0gnXVsnTVNILjknXVsnTVNILjkuMiddLnRvU3RyaW5nKClcblx0XG4gICAgaWYgKG1hcHBpbmcgIT0gJycgJiYgbXNnX3R5cGUgPT09IG1hcHBpbmdfZWxlbWVudFsnbXNnX3R5cGUnXSAmJiB0cmlnZ2VyX2V2ZW50cy5pbmNsdWRlcyhtc2dfdHJpZ2dlcikpIHtcblx0XHRjaGFubmVsTWFwLnB1dChmaWVsZF9uYW1lLCBtYXBwaW5nKTtcbiAgICB9IgogICAgICAgIH0KICAgIF0sCiAgICAibW9kZWxfaWQiOiAiMzExNDUyNGEtNzRkOC00M2ZmLWJlYWUtMmM4ZTQ0MGFlZjUwIiwKICAgICJjdXJyX2NsaWVudCI6IHsKICAgICAgICAiY2xpZW50X2lkIjogIjBiOGQwNTg0LTliMTYtNDBmOS1iOWI3LTdkYzUxYTZlM2Y5MiIsCiAgICAgICAgImVtYWlsIjogImNsaWVudDFAZ21haWwuY29tIiwKICAgICAgICAibmFtZSI6ICJDbGllbnQgMSIsCiAgICAgICAgInBob25lIjogIjkxMjM0NTY3OCIsCiAgICAgICAgInBhc3N3b3JkIjogIiQyYSQxMCQuUEJ6bk9kVE11RG40NktCUGVTM0NPTzRlNm1Wd1IyLnhnOWFSOWxMalp0Z0VXNWJqWm9aQyIKICAgIH0KfQ=="
                            },
                            "outboundTemplate": {
                                "@encoding": "base64"
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
                                    "name": "Accept message if \"sourceMap.get('batchSequenceId')\" equals 1",
                                    "sequenceNumber": 0,
                                    "enabled": true,
                                    "field": "sourceMap.get('batchSequenceId')",
                                    "condition": "EQUALS",
                                    "values": {
                                        "string": 1
                                    }
                                }
                            }
                        },
                        "transportName": "HTTP Sender",
                        "mode": "DESTINATION",
                        "enabled": true,
                        "waitForPrevious": true
                    },
                    {
                        "@version": "4.3.0",
                        "metaDataId": 2,
                        "name": "Field Extraction",
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
                            "script": "const abi_global = JSON.parse(globalMap.get('abi_global'))\nconst client_mappings = JSON.parse($('client_mappings'))\n\n\nfor(var i = 0; i < client_mappings.length; i++){\n\tvar mapping_element = client_mappings[i]\n\tvar field_name = mapping_element['field']\n\n\tif(channelMap.get(field_name) != null){\n\t\tlogger.info(field_name + ' is present | value: ' + channelMap.get(field_name))\n\t\tabi_global[field_name] = channelMap.get(field_name)\n\t}else{\n\t\tlogger.info(field_name + ' is not present')\n\t}\n}\n\nglobalMap.put('abi_global', JSON.stringify(abi_global))\n"
                        },
                        "transformer": {
                            "@version": "4.3.0",
                            "elements": {
                                "com.mirth.connect.plugins.javascriptstep.JavaScriptStep": {
                                    "@version": "4.3.0",
                                    "name": "field",
                                    "sequenceNumber": 0,
                                    "enabled": true,
                                    "script": "const client_mappings = JSON.parse($('client_mappings'))\n\nfor(var i = 0; i < client_mappings.length; i++){\n\tvar mapping_element = client_mappings[i]\n\tvar field_name = mapping_element['field']\n\tvar trigger_events = JSON.parse(mapping_element['msg_triggers'])\n\n\teval(mapping_element['transformer_script'])\n\t\n}"
                                }
                            },
                            "inboundTemplate": {
                                "@encoding": "base64",
                                "$": "TVNIfF5+XCZ8SE9TUElUQUx8QURUfEhMN0xBQnxPUlV8MjAxOTA0MDIxMjAwfHxPUlVeUjAxfDU2Nzg5fFB8Mi41Ck9CWHx8fHNvbWVfY29kX3ZpYV92ZXJkZV5ibHVlfHx8fA=="
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
                                    "name": "Accept message if \"$('client_permission')\" equals true",
                                    "sequenceNumber": 0,
                                    "enabled": true,
                                    "field": "$('client_permission')",
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
                    },
                    {
                        "@version": "4.3.0",
                        "metaDataId": 3,
                        "name": "Request Completion",
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
                            "script": "logger.info('Batch complete')\nconst abi_global = JSON.parse(globalMap.get('abi_global'))\nconst client_mappings = JSON.parse($('client_mappings'))\n\nvar fields_response = {}\nvar complete_request = true\n\nfor(var i = 0; i < client_mappings.length; i++){\n\tvar mapping_element = client_mappings[i]\n\tvar field_name = mapping_element['field']\n\n\tif(abi_global[field_name] != null){\n\t\tfields_response[field_name] = {\n\t\t\tstatus: 'ok', \n\t\t\tvalue: abi_global[field_name]\n\t\t\t}\n\t}else{\n\t\tcomplete_request = false\n\t\tfields_response[field_name] = {\n\t\t\tstatus: 'missing',\n\t\t\tmsg_type: mapping_element['msg_type'],\n\t\t\tmapping: mapping_element['mapping'],\n\t\t\tmsg_triggers: JSON.parse(mapping_element['msg_triggers'])\n\t\t}\n\t}\n}\n\n\n\nglobalMap.put('abi_global', JSON.stringify(abi_global))\nchannelMap.put('fields_response', JSON.stringify(fields_response))\nchannelMap.put('complete_request', complete_request)"
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
                                "com.mirth.connect.plugins.rulebuilder.RuleBuilderRule": [
                                    {
                                        "@version": "4.3.0",
                                        "name": "Accept message if \"sourceMap.get('batchComplete')\" equals true",
                                        "sequenceNumber": 0,
                                        "enabled": true,
                                        "field": "sourceMap.get('batchComplete')",
                                        "condition": "EQUALS",
                                        "values": {
                                            "string": true
                                        }
                                    },
                                    {
                                        "@version": "4.3.0",
                                        "name": "Accept message if \"$('client_permission')\" equals true",
                                        "sequenceNumber": 1,
                                        "enabled": true,
                                        "operator": "AND",
                                        "field": "$('client_permission')",
                                        "condition": "EQUALS",
                                        "values": {
                                            "string": true
                                        }
                                    }
                                ]
                            }
                        },
                        "transportName": "JavaScript Writer",
                        "mode": "DESTINATION",
                        "enabled": true,
                        "waitForPrevious": true
                    },
                    {
                        "@version": "4.3.0",
                        "metaDataId": 4,
                        "name": "Validators",
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
                            "host": "http://mysql-webservice:3000/api/run-validation/${model_id}",
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
                            "content": "${proc_req_obj}",
                            "contentType": "application/json",
                            "dataTypeBinary": false,
                            "charset": "UTF-8",
                            "socketTimeout": 30000
                        },
                        "transformer": {
                            "@version": "4.3.0",
                            "elements": {
                                "com.mirth.connect.plugins.javascriptstep.JavaScriptStep": {
                                    "@version": "4.3.0",
                                    "name": "Validator Body",
                                    "sequenceNumber": 0,
                                    "enabled": true,
                                    "script": "// Fetching the actual data object\nconst abi_global = JSON.parse(globalMap.get('abi_global'))\n\n// Setting preprocessing object\nvar proc_req_obj = {\n\tpred_obj: abi_global\n}\nchannelMap.put('proc_req_obj', JSON.stringify(proc_req_obj))"
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
                            "elements": {
                                "com.mirth.connect.plugins.mapper.MapperStep": [
                                    {
                                        "@version": "4.3.0",
                                        "name": "val_obj",
                                        "sequenceNumber": 0,
                                        "enabled": true,
                                        "variable": "val_obj",
                                        "mapping": "JSON.stringify(msg['validated_obj'])",
                                        "defaultValue": null,
                                        "replacements": null,
                                        "scope": "CHANNEL"
                                    },
                                    {
                                        "@version": "4.3.0",
                                        "name": "req_valid",
                                        "sequenceNumber": 1,
                                        "enabled": true,
                                        "variable": "req_valid",
                                        "mapping": "msg['is_valid']",
                                        "defaultValue": null,
                                        "replacements": null,
                                        "scope": "CHANNEL"
                                    }
                                ]
                            },
                            "inboundTemplate": {
                                "@encoding": "base64",
                                "$": "ewogICAgImlzX3ZhbGlkIjogdHJ1ZSwKICAgICJ2YWxpZGF0ZWRfb2JqIjogewogICAgICAgICJjb2RfY2F1c2EiOiB7CiAgICAgICAgICAgICJ2YWxpZGF0aW9uX3Jlc3BvbnNlIjogdHJ1ZSwKICAgICAgICAgICAgInJlZ2V4IjogIi9eW2EtekEtWl9dW2EtekEtWjAtOV9dKiQvIgogICAgICAgIH0sCiAgICAgICAgImlkYWRlIjogewogICAgICAgICAgICAidmFsaWRhdGlvbl9yZXNwb25zZSI6IHRydWUsCiAgICAgICAgICAgICJyZWdleCI6ICIvXihcXGR7NH0oPzpcXGR7Mn0oPzpcXGR7Mn0oPzpcXGR7Mn0oPzpcXGR7Mn0oPzpcXGR7Mn0oPzpcXC5cXGR7MSw0fSk/KT8pPyk/KT8pPyk/KD86WystXVxcZHs0fSk/JC8iCiAgICAgICAgfSwKICAgICAgICAic2V4byI6IHsKICAgICAgICAgICAgInZhbGlkYXRpb25fcmVzcG9uc2UiOiB0cnVlLAogICAgICAgICAgICAicmVnZXgiOiAiL15bYS16QS1aX11bYS16QS1aMC05X10qJC8iCiAgICAgICAgfSwKICAgICAgICAiY29kX2NvbmNlbGhvIjogewogICAgICAgICAgICAidmFsaWRhdGlvbl9yZXNwb25zZSI6IHRydWUsCiAgICAgICAgICAgICJyZWdleCI6ICIvXlthLXpBLVpfXVthLXpBLVowLTlfXSokLyIKICAgICAgICB9LAogICAgICAgICJob3JhX2FkbWlzc2FvIjogewogICAgICAgICAgICAidmFsaWRhdGlvbl9yZXNwb25zZSI6IHRydWUsCiAgICAgICAgICAgICJyZWdleCI6ICIvXihcXGR7NH0oPzpcXGR7Mn0oPzpcXGR7Mn0oPzpcXGR7Mn0oPzpcXGR7Mn0oPzpcXGR7Mn0oPzpcXC5cXGR7MSw0fSk/KT8pPyk/KT8pPyk/KD86WystXVxcZHs0fSk/JC8iCiAgICAgICAgfSwKICAgICAgICAiY29kX3Byb3ZlbmllbmNpYSI6IHsKICAgICAgICAgICAgInZhbGlkYXRpb25fcmVzcG9uc2UiOiB0cnVlLAogICAgICAgICAgICAicmVnZXgiOiAiL15bYS16QS1aX11bYS16QS1aMC05X10qJC8iCiAgICAgICAgfSwKICAgICAgICAiY29kX3ByaW9yaWRhZGUiOiB7CiAgICAgICAgICAgICJ2YWxpZGF0aW9uX3Jlc3BvbnNlIjogdHJ1ZSwKICAgICAgICAgICAgInJlZ2V4IjogIi9eW2EtekEtWl9dW2EtekEtWjAtOV9dKiQvIgogICAgICAgIH0sCiAgICAgICAgInVyZ19lcGlzb2RpbyI6IHsKICAgICAgICAgICAgInZhbGlkYXRpb25fcmVzcG9uc2UiOiB0cnVlLAogICAgICAgICAgICAicmVnZXgiOiAiL15bMC05XSskLyIKICAgICAgICB9LAogICAgICAgICJjb2RfdmlhX3ZlcmRlIjogewogICAgICAgICAgICAidmFsaWRhdGlvbl9yZXNwb25zZSI6IHRydWUsCiAgICAgICAgICAgICJyZWdleCI6ICIvXlthLXpBLVpfXVthLXpBLVowLTlfXSokLyIKICAgICAgICB9LAogICAgICAgICJhZmx1ZW5jaWEiOiB7CiAgICAgICAgICAgICJ2YWxpZGF0aW9uX3Jlc3BvbnNlIjogdHJ1ZSwKICAgICAgICAgICAgInJlZ2V4IjogIi9eWzAtOV0rJC8iCiAgICAgICAgfSwKICAgICAgICAibG9zIjogewogICAgICAgICAgICAidmFsaWRhdGlvbl9yZXNwb25zZSI6IHRydWUsCiAgICAgICAgICAgICJyZWdleCI6ICIvXlswLTldKyQvIgogICAgICAgIH0KICAgIH0KfQ=="
                            },
                            "outboundTemplate": {
                                "@encoding": "base64"
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
                                "com.mirth.connect.plugins.rulebuilder.RuleBuilderRule": [
                                    {
                                        "@version": "4.3.0",
                                        "name": "Accept message if \"$('complete_request')\" equals true",
                                        "sequenceNumber": 0,
                                        "enabled": true,
                                        "field": "$('complete_request')",
                                        "condition": "EQUALS",
                                        "values": {
                                            "string": true
                                        }
                                    },
                                    {
                                        "@version": "4.3.0",
                                        "name": "Accept message if \"$('client_permission')\" equals true",
                                        "sequenceNumber": 1,
                                        "enabled": true,
                                        "operator": "AND",
                                        "field": "$('client_permission')",
                                        "condition": "EQUALS",
                                        "values": {
                                            "string": true
                                        }
                                    }
                                ]
                            }
                        },
                        "transportName": "HTTP Sender",
                        "mode": "DESTINATION",
                        "enabled": true,
                        "waitForPrevious": true
                    },
                    {
                        "@version": "4.3.0",
                        "metaDataId": 5,
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
                            "host": "http://mysql-webservice:3000/api/preprocessing/${model_id}",
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
                            "content": "${proc_req_obj}",
                            "contentType": "application/json",
                            "dataTypeBinary": false,
                            "charset": "UTF-8",
                            "socketTimeout": 30000
                        },
                        "transformer": {
                            "@version": "4.3.0",
                            "elements": {
                                "com.mirth.connect.plugins.javascriptstep.JavaScriptStep": {
                                    "@version": "4.3.0",
                                    "name": "Preprocessing Body",
                                    "sequenceNumber": 0,
                                    "enabled": true,
                                    "script": "// Fetching the actual data object\nconst abi_global = JSON.parse(globalMap.get('abi_global'))\n\n// Setting preprocessing object\nvar proc_req_obj = {\n\tpred_obj: abi_global\n}\nchannelMap.put('proc_req_obj', JSON.stringify(proc_req_obj))"
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
                            "elements": {
                                "com.mirth.connect.plugins.mapper.MapperStep": {
                                    "@version": "4.3.0",
                                    "name": "proc_obj",
                                    "sequenceNumber": 0,
                                    "enabled": true,
                                    "variable": "proc_obj",
                                    "mapping": "JSON.stringify(msg['proc_obj'])",
                                    "defaultValue": null,
                                    "replacements": null,
                                    "scope": "CHANNEL"
                                }
                            },
                            "inboundTemplate": {
                                "@encoding": "base64",
                                "$": "ewogICAgInByb2Nfb2JqIjogewogICAgICAgICJ1cmdfZXBpc29kaW8iOiAxMjM0NSwKICAgICAgICAiaG9yYV9hZG1pc3NhbyI6IDU1NDI2LAogICAgICAgICJjb2RfY2F1c2EiOiAiNSIsCiAgICAgICAgImNvZF9wcm92ZW5pZW5jaWEiOiAiMiIsCiAgICAgICAgImNvZF9wcmlvcmlkYWRlIjogIjUiLAogICAgICAgICJpZGFkZSI6IDMzLAogICAgICAgICJjb2RfdmlhX3ZlcmRlIjogIjMiLAogICAgICAgICJzZXhvIjogIjEiLAogICAgICAgICJjb2RfY29uY2VsaG8iOiAiNCIsCiAgICAgICAgImFmbHVlbmNpYSI6IDEyMywKICAgICAgICAibG9zIjogOTUwNDAwCiAgICB9Cn0="
                            },
                            "outboundTemplate": {
                                "@encoding": "base64"
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
                                "com.mirth.connect.plugins.rulebuilder.RuleBuilderRule": [
                                    {
                                        "@version": "4.3.0",
                                        "name": "Accept message if \"$('req_valid')\" equals true",
                                        "sequenceNumber": 0,
                                        "enabled": true,
                                        "field": "$('req_valid')",
                                        "condition": "EQUALS",
                                        "values": {
                                            "string": true
                                        }
                                    },
                                    {
                                        "@version": "4.3.0",
                                        "name": "Accept message if \"$('client_permission')\" equals true",
                                        "sequenceNumber": 1,
                                        "enabled": true,
                                        "operator": "AND",
                                        "field": "$('client_permission')",
                                        "condition": "EQUALS",
                                        "values": {
                                            "string": true
                                        }
                                    }
                                ]
                            }
                        },
                        "transportName": "HTTP Sender",
                        "mode": "DESTINATION",
                        "enabled": true,
                        "waitForPrevious": true
                    },
                    {
                        "@version": "4.3.0",
                        "metaDataId": 6,
                        "name": "Database Storing",
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
                            "elements": {
                                "com.mirth.connect.plugins.javascriptstep.JavaScriptStep": {
                                    "@version": "4.3.0",
                                    "name": "db_req",
                                    "sequenceNumber": 0,
                                    "enabled": true,
                                    "script": "// Fetching the actual data object\nconst abi_global = JSON.parse(globalMap.get('abi_global'))\n\n//Fetching the preprocessed data object\nconst proc_obj = JSON.parse(channelMap.get('proc_obj'))\n\n//Fetching the current client data object\nconst curr_client = JSON.parse(globalMap.get('curr_client'))\n\n// Generating Unique ID\nvar uuid = UUIDGenerator.getUUID();\n\n// Adding the same uuid to both objects\nabi_global['req_id'] = uuid\nproc_obj['req_id'] = uuid\n\n// Updating both objects in the channel\nglobalMap.put('abi_global', JSON.stringify(abi_global))\nchannelMap.put('proc_obj', JSON.stringify(proc_obj))\n\n\n\nvar db_req = {\n    table_name: $('model_name'),\n    client_id: curr_client.client_id,\n    client_name: curr_client.name,\n    values: abi_global,\n    values_pre_proc: proc_obj\n}\n\nchannelMap.put('db_req', JSON.stringify(db_req))"
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
                            "elements": {
                                "com.mirth.connect.plugins.mapper.MapperStep": {
                                    "@version": "4.3.0",
                                    "name": "db_response",
                                    "sequenceNumber": 0,
                                    "enabled": true,
                                    "variable": "db_response",
                                    "mapping": "JSON.stringify(msg)",
                                    "defaultValue": null,
                                    "replacements": null,
                                    "scope": "CHANNEL"
                                }
                            },
                            "inboundTemplate": {
                                "@encoding": "base64",
                                "$": "ewoibWVzc2FnZSI6ICJoZWxsbyIKfQ=="
                            },
                            "outboundTemplate": {
                                "@encoding": "base64"
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
                                "com.mirth.connect.plugins.rulebuilder.RuleBuilderRule": [
                                    {
                                        "@version": "4.3.0",
                                        "name": "Accept message if \"$('client_permission')\" equals true",
                                        "sequenceNumber": 0,
                                        "enabled": true,
                                        "field": "$('client_permission')",
                                        "condition": "EQUALS",
                                        "values": {
                                            "string": true
                                        }
                                    },
                                    {
                                        "@version": "4.3.0",
                                        "name": "Accept message if \"$('req_valid')\" equals true",
                                        "sequenceNumber": 1,
                                        "enabled": true,
                                        "operator": "AND",
                                        "field": "$('req_valid')",
                                        "condition": "EQUALS",
                                        "values": {
                                            "string": true
                                        }
                                    }
                                ]
                            }
                        },
                        "transportName": "HTTP Sender",
                        "mode": "DESTINATION",
                        "enabled": true,
                        "waitForPrevious": true
                    },
                    {
                        "@version": "4.3.0",
                        "metaDataId": 7,
                        "name": "Message Queue",
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
                            "content": "${proc_obj}",
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
                                "com.mirth.connect.plugins.rulebuilder.RuleBuilderRule": [
                                    {
                                        "@version": "4.3.0",
                                        "name": "Accept message if \"$('client_permission')\" equals true",
                                        "sequenceNumber": 0,
                                        "enabled": true,
                                        "field": "$('client_permission')",
                                        "condition": "EQUALS",
                                        "values": {
                                            "string": true
                                        }
                                    },
                                    {
                                        "@version": "4.3.0",
                                        "name": "Accept message if \"$('req_valid')\" is blank",
                                        "sequenceNumber": 1,
                                        "enabled": true,
                                        "operator": "AND",
                                        "field": "$('req_valid')",
                                        "condition": "EQUALS",
                                        "values": {
                                            "string": true
                                        }
                                    }
                                ]
                            }
                        },
                        "transportName": "HTTP Sender",
                        "mode": "DESTINATION",
                        "enabled": true,
                        "waitForPrevious": true
                    },
                    {
                        "@version": "4.3.0",
                        "metaDataId": 8,
                        "name": "Response",
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
                            "script": "const abi_global = JSON.parse(globalMap.get('abi_global'))\nconst client_permission = globalMap.get('client_permission')\nconst client_mappings = JSON.parse(globalMap.get('client_mappings'))\nconst fields_response = JSON.parse(channelMap.get('fields_response'))\nconst proc_obj = JSON.parse(channelMap.get('proc_obj'))\nconst val_obj = JSON.parse(channelMap.get('val_obj'))\nconst req_valid = channelMap.get('req_valid')\nconst complete_req = channelMap.get('complete_request')\n\nglobalMap.put('abi_global', JSON.stringify({}))\n\nlogger.info(client_permission)\nif(client_permission != true){\n\treturn JSON.stringify({\n\t\tstatus: 501,\n\t\tmessage: \"You have no permission to be performing this action\"\n\t})\n}\n\nif(complete_req != true){\n\treturn JSON.stringify({\n\t\tstatus: 501,\n\t\tmessage: \"The request was not complete!\",\n\t\treq: fields_response\n\t})\n}\n\nif(req_valid != true){\n\treturn JSON.stringify({\n\t\tstatus: 501,\n\t\tmessage: \"The request was not valid!\",\n\t\tvals: val_obj\n\t})\n}\n\n\nreturn JSON.stringify({\n\tstatus: 200,\n\tmessage: \"Request created successfully [\"+$('model_name')+\"]\"\n})\n"
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
                                    "name": "Accept message if \"sourceMap.get('batchComplete')\" equals true",
                                    "sequenceNumber": 0,
                                    "enabled": true,
                                    "field": "sourceMap.get('batchComplete')",
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
                ]
            },
            "preprocessingScript": "// Modify the message variable below to pre process data\nreturn message;",
            "postprocessingScript": "// This script executes once after a message has been processed\n// Responses returned from here will be stored as \"Postprocessor\" in the response map\nreturn;",
            "deployScript": "// This script executes once when the channel is deployed\n// You only have access to the globalMap and globalChannelMap here to persist data\nglobalMap.put('abi_global', JSON.stringify({}))\nreturn;",
            "undeployScript": "// This script executes once when the channel is undeployed\n// You only have access to the globalMap and globalChannelMap here to persist data\nreturn;",
            "properties": {
                "@version": "4.3.0",
                "clearGlobalChannelMap": true,
                "messageStorageMode": "PRODUCTION",
                "encryptData": false,
                "encryptAttachments": false,
                "encryptCustomMetaData": false,
                "removeContentOnCompletion": false,
                "removeOnlyFilteredOnCompletion": false,
                "removeAttachmentsOnCompletion": false,
                "initialState": "STARTED",
                "storeAttachments": false,
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
                        "time": 1690754746539,
                        "timezone": "Europe/Lisbon"
                    },
                    "pruningSettings": {
                        "pruneMetaDataDays": 3,
                        "pruneContentDays": 3,
                        "archiveEnabled": true,
                        "pruneErroredMessages": true
                    },
                    "userId": 1
                },
                "dependentIds": null,
                "dependencyIds": null,
                "channelTags": null
            }
        }
    })
}

const GenerateTesterData = async (channel_name, channel_description, channel_port) => {
    const uniqueId = uuidv4();

    return JSON.stringify({
        "channel": {
            "@version": "4.3.0",
            "id": uniqueId,
            "nextMetaDataId": 9,
            "name": channel_name,
            "description": channel_description,
            "revision": 2,
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
                        "responseVariable": "d6",
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
                    "includeMetadata": false,
                    "binaryMimeTypes": "application/.*(?<!json|xml)$|image/.*|video/.*|audio/.*",
                    "binaryMimeTypesRegex": true,
                    "responseContentType": "application/json",
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
                    "elements": {
                        "com.mirth.connect.plugins.mapper.MapperStep": [
                            {
                                "@version": "4.3.0",
                                "name": "model_name",
                                "sequenceNumber": 0,
                                "enabled": true,
                                "variable": "model_name",
                                "mapping": "sourceMap.get('parameters').getParameter('model')",
                                "defaultValue": null,
                                "replacements": null,
                                "scope": "CHANNEL"
                            },
                            {
                                "@version": "4.3.0",
                                "name": "api_token",
                                "sequenceNumber": 1,
                                "enabled": true,
                                "variable": "api_token",
                                "mapping": "sourceMap.get('headers').getHeader('API-Token')",
                                "defaultValue": "000000000",
                                "replacements": null,
                                "scope": "CHANNEL"
                            }
                        ]
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
                    {
                        "@version": "4.3.0",
                        "metaDataId": 1,
                        "name": "Fetch Mappings",
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
                            "host": "http://mysql-webservice:3000/api/client-mappings/${model_name}",
                            "useProxyServer": false,
                            "proxyAddress": null,
                            "proxyPort": null,
                            "method": "get",
                            "headers": {
                                "@class": "linked-hash-map",
                                "entry": {
                                    "string": "session-token",
                                    "list": {
                                        "string": "${api_token}"
                                    }
                                }
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
                            "content": null,
                            "contentType": "text/plain",
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
                            "elements": {
                                "com.mirth.connect.plugins.javascriptstep.JavaScriptStep": {
                                    "@version": "4.3.0",
                                    "name": "client_permission",
                                    "sequenceNumber": 0,
                                    "enabled": true,
                                    "script": "var mapping;\n\ntry {\n    mapping = msg['status'];\n} catch (e) {\n    mapping = '';\n}\n\nif(mapping == 200){\n\tglobalMap.put('client_permission', true);\n}else{\n\tglobalMap.put('client_permission', false);\n}"
                                },
                                "com.mirth.connect.plugins.mapper.MapperStep": [
                                    {
                                        "@version": "4.3.0",
                                        "name": "client_mappings",
                                        "sequenceNumber": 1,
                                        "enabled": true,
                                        "variable": "client_mappings",
                                        "mapping": "JSON.stringify(msg['client_mappings'])",
                                        "defaultValue": "JSON.stringify([])",
                                        "replacements": null,
                                        "scope": "GLOBAL"
                                    },
                                    {
                                        "@version": "4.3.0",
                                        "name": "model_id",
                                        "sequenceNumber": 2,
                                        "enabled": true,
                                        "variable": "model_id",
                                        "mapping": "msg['model_id']",
                                        "defaultValue": 123,
                                        "replacements": null,
                                        "scope": "GLOBAL"
                                    },
                                    {
                                        "@version": "4.3.0",
                                        "name": "curr_client",
                                        "sequenceNumber": 3,
                                        "enabled": true,
                                        "variable": "curr_client",
                                        "mapping": "JSON.stringify(msg['curr_client'])",
                                        "defaultValue": "JSON.stringify({})",
                                        "replacements": null,
                                        "scope": "GLOBAL"
                                    }
                                ]
                            },
                            "inboundTemplate": {
                                "@encoding": "base64",
                                "$": "ewogICAgInN0YXR1cyI6IDIwMCwKICAgICJjbGllbnRfbWFwcGluZ3MiOiBbCiAgICAgICAgewogICAgICAgICAgICAibWFwcGluZ19pZCI6IDEwMCwKICAgICAgICAgICAgImNsaWVudF9pZCI6ICJEZWZhdWx0IiwKICAgICAgICAgICAgIm1vZGVsIjogImhvc3BpdGFsaXphdGlvbl9wcmVkIiwKICAgICAgICAgICAgIm1vZGVsX2lkIjogIjMxMTQ1MjRhLTc0ZDgtNDNmZi1iZWFlLTJjOGU0NDBhZWY1MCIsCiAgICAgICAgICAgICJmaWVsZCI6ICJ1cmdfZXBpc29kaW8iLAogICAgICAgICAgICAibWFwcGluZyI6ICJtc2dbXCJQVjFcIl1bXCJQVjEuMTlcIl1bXCJQVjEuMTkuMVwiXSIsCiAgICAgICAgICAgICJtc2dfdHlwZSI6ICJBRFQiLAogICAgICAgICAgICAibXNnX3RyaWdnZXJzIjogIltcIkEwMVwiLFwiQTAyXCIsXCJBMDNcIl0iLAogICAgICAgICAgICAidHJhbnNmb3JtZXJfc2NyaXB0IjogIlxuICAgIHZhciBtYXBwaW5nID0gZXZhbChtYXBwaW5nX2VsZW1lbnRbJ21hcHBpbmcnXSkudG9TdHJpbmcoKTtcblx0dmFyIG1zZ190eXBlID0gbXNnWydNU0gnXVsnTVNILjknXVsnTVNILjkuMSddLnRvU3RyaW5nKClcbiAgICB2YXIgbXNnX3RyaWdnZXIgPSBtc2dbJ01TSCddWydNU0guOSddWydNU0guOS4yJ10udG9TdHJpbmcoKVxuXHRcbiAgICBpZiAobWFwcGluZyAhPSAnJyAmJiBtc2dfdHlwZSA9PT0gbWFwcGluZ19lbGVtZW50Wydtc2dfdHlwZSddICYmIHRyaWdnZXJfZXZlbnRzLmluY2x1ZGVzKG1zZ190cmlnZ2VyKSkge1xuXHRcdGNoYW5uZWxNYXAucHV0KGZpZWxkX25hbWUsIG1hcHBpbmcpO1xuICAgIH0iCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAgICJtYXBwaW5nX2lkIjogNjgsCiAgICAgICAgICAgICJjbGllbnRfaWQiOiAiRGVmYXVsdCIsCiAgICAgICAgICAgICJtb2RlbCI6ICJob3NwaXRhbGl6YXRpb25fcHJlZCIsCiAgICAgICAgICAgICJtb2RlbF9pZCI6ICIzMTE0NTI0YS03NGQ4LTQzZmYtYmVhZS0yYzhlNDQwYWVmNTAiLAogICAgICAgICAgICAiZmllbGQiOiAiaG9yYV9hZG1pc3NhbyIsCiAgICAgICAgICAgICJtYXBwaW5nIjogIm1zZ1tcIlBWMVwiXVtcIlBWMS40NFwiXVtcIlBWMS40NC4xXCJdIiwKICAgICAgICAgICAgIm1zZ190eXBlIjogIkFEVCIsCiAgICAgICAgICAgICJtc2dfdHJpZ2dlcnMiOiAiW1wiQTAxXCIsXCJBMDJcIixcIkEwM1wiXSIsCiAgICAgICAgICAgICJ0cmFuc2Zvcm1lcl9zY3JpcHQiOiAiXG4gICAgdmFyIG1hcHBpbmcgPSBldmFsKG1hcHBpbmdfZWxlbWVudFsnbWFwcGluZyddKS50b1N0cmluZygpO1xuXHR2YXIgbXNnX3R5cGUgPSBtc2dbJ01TSCddWydNU0guOSddWydNU0guOS4xJ10udG9TdHJpbmcoKVxuICAgIHZhciBtc2dfdHJpZ2dlciA9IG1zZ1snTVNIJ11bJ01TSC45J11bJ01TSC45LjInXS50b1N0cmluZygpXG5cdFxuICAgIGlmIChtYXBwaW5nICE9ICcnICYmIG1zZ190eXBlID09PSBtYXBwaW5nX2VsZW1lbnRbJ21zZ190eXBlJ10gJiYgdHJpZ2dlcl9ldmVudHMuaW5jbHVkZXMobXNnX3RyaWdnZXIpKSB7XG5cdFx0Y2hhbm5lbE1hcC5wdXQoZmllbGRfbmFtZSwgbWFwcGluZyk7XG4gICAgfSIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICAgIm1hcHBpbmdfaWQiOiA2OSwKICAgICAgICAgICAgImNsaWVudF9pZCI6ICJEZWZhdWx0IiwKICAgICAgICAgICAgIm1vZGVsIjogImhvc3BpdGFsaXphdGlvbl9wcmVkIiwKICAgICAgICAgICAgIm1vZGVsX2lkIjogIjMxMTQ1MjRhLTc0ZDgtNDNmZi1iZWFlLTJjOGU0NDBhZWY1MCIsCiAgICAgICAgICAgICJmaWVsZCI6ICJjb2RfY2F1c2EiLAogICAgICAgICAgICAibWFwcGluZyI6ICJtc2dbXCJERzFcIl1bXCJERzEuM1wiXVtcIkRHMS4zLjFcIl0iLAogICAgICAgICAgICAibXNnX3R5cGUiOiAiQURUIiwKICAgICAgICAgICAgIm1zZ190cmlnZ2VycyI6ICJbXCJBMDFcIixcIkEwMlwiLFwiQTAzXCJdIiwKICAgICAgICAgICAgInRyYW5zZm9ybWVyX3NjcmlwdCI6ICJcbiAgICB2YXIgbWFwcGluZyA9IGV2YWwobWFwcGluZ19lbGVtZW50WydtYXBwaW5nJ10pLnRvU3RyaW5nKCk7XG5cdHZhciBtc2dfdHlwZSA9IG1zZ1snTVNIJ11bJ01TSC45J11bJ01TSC45LjEnXS50b1N0cmluZygpXG4gICAgdmFyIG1zZ190cmlnZ2VyID0gbXNnWydNU0gnXVsnTVNILjknXVsnTVNILjkuMiddLnRvU3RyaW5nKClcblx0XG4gICAgaWYgKG1hcHBpbmcgIT0gJycgJiYgbXNnX3R5cGUgPT09IG1hcHBpbmdfZWxlbWVudFsnbXNnX3R5cGUnXSAmJiB0cmlnZ2VyX2V2ZW50cy5pbmNsdWRlcyhtc2dfdHJpZ2dlcikpIHtcblx0XHRjaGFubmVsTWFwLnB1dChmaWVsZF9uYW1lLCBtYXBwaW5nKTtcbiAgICB9IgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgICAibWFwcGluZ19pZCI6IDcwLAogICAgICAgICAgICAiY2xpZW50X2lkIjogIkRlZmF1bHQiLAogICAgICAgICAgICAibW9kZWwiOiAiaG9zcGl0YWxpemF0aW9uX3ByZWQiLAogICAgICAgICAgICAibW9kZWxfaWQiOiAiMzExNDUyNGEtNzRkOC00M2ZmLWJlYWUtMmM4ZTQ0MGFlZjUwIiwKICAgICAgICAgICAgImZpZWxkIjogImNvZF9wcm92ZW5pZW5jaWEiLAogICAgICAgICAgICAibWFwcGluZyI6ICJtc2dbXCJQVjFcIl1bXCJQVjEuOVwiXVtcIlBWMS45LjdcIl0iLAogICAgICAgICAgICAibXNnX3R5cGUiOiAiQURUIiwKICAgICAgICAgICAgIm1zZ190cmlnZ2VycyI6ICJbXCJBMDFcIixcIkEwMlwiLFwiQTAzXCJdIiwKICAgICAgICAgICAgInRyYW5zZm9ybWVyX3NjcmlwdCI6ICJcbiAgICB2YXIgbWFwcGluZyA9IGV2YWwobWFwcGluZ19lbGVtZW50WydtYXBwaW5nJ10pLnRvU3RyaW5nKCk7XG5cdHZhciBtc2dfdHlwZSA9IG1zZ1snTVNIJ11bJ01TSC45J11bJ01TSC45LjEnXS50b1N0cmluZygpXG4gICAgdmFyIG1zZ190cmlnZ2VyID0gbXNnWydNU0gnXVsnTVNILjknXVsnTVNILjkuMiddLnRvU3RyaW5nKClcblx0XG4gICAgaWYgKG1hcHBpbmcgIT0gJycgJiYgbXNnX3R5cGUgPT09IG1hcHBpbmdfZWxlbWVudFsnbXNnX3R5cGUnXSAmJiB0cmlnZ2VyX2V2ZW50cy5pbmNsdWRlcyhtc2dfdHJpZ2dlcikpIHtcblx0XHRjaGFubmVsTWFwLnB1dChmaWVsZF9uYW1lLCBtYXBwaW5nKTtcbiAgICB9IgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgICAibWFwcGluZ19pZCI6IDcxLAogICAgICAgICAgICAiY2xpZW50X2lkIjogIkRlZmF1bHQiLAogICAgICAgICAgICAibW9kZWwiOiAiaG9zcGl0YWxpemF0aW9uX3ByZWQiLAogICAgICAgICAgICAibW9kZWxfaWQiOiAiMzExNDUyNGEtNzRkOC00M2ZmLWJlYWUtMmM4ZTQ0MGFlZjUwIiwKICAgICAgICAgICAgImZpZWxkIjogImNvZF9wcmlvcmlkYWRlIiwKICAgICAgICAgICAgIm1hcHBpbmciOiAibXNnW1wiUFYxXCJdW1wiUFYxLjJcIl1bXCJQVjEuMi4xXCJdIiwKICAgICAgICAgICAgIm1zZ190eXBlIjogIkFEVCIsCiAgICAgICAgICAgICJtc2dfdHJpZ2dlcnMiOiAiW1wiQTAxXCIsXCJBMDJcIixcIkEwM1wiXSIsCiAgICAgICAgICAgICJ0cmFuc2Zvcm1lcl9zY3JpcHQiOiAiXG4gICAgdmFyIG1hcHBpbmcgPSBldmFsKG1hcHBpbmdfZWxlbWVudFsnbWFwcGluZyddKS50b1N0cmluZygpO1xuXHR2YXIgbXNnX3R5cGUgPSBtc2dbJ01TSCddWydNU0guOSddWydNU0guOS4xJ10udG9TdHJpbmcoKVxuICAgIHZhciBtc2dfdHJpZ2dlciA9IG1zZ1snTVNIJ11bJ01TSC45J11bJ01TSC45LjInXS50b1N0cmluZygpXG5cdFxuICAgIGlmIChtYXBwaW5nICE9ICcnICYmIG1zZ190eXBlID09PSBtYXBwaW5nX2VsZW1lbnRbJ21zZ190eXBlJ10gJiYgdHJpZ2dlcl9ldmVudHMuaW5jbHVkZXMobXNnX3RyaWdnZXIpKSB7XG5cdFx0Y2hhbm5lbE1hcC5wdXQoZmllbGRfbmFtZSwgbWFwcGluZyk7XG4gICAgfSIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICAgIm1hcHBpbmdfaWQiOiA3MiwKICAgICAgICAgICAgImNsaWVudF9pZCI6ICJEZWZhdWx0IiwKICAgICAgICAgICAgIm1vZGVsIjogImhvc3BpdGFsaXphdGlvbl9wcmVkIiwKICAgICAgICAgICAgIm1vZGVsX2lkIjogIjMxMTQ1MjRhLTc0ZDgtNDNmZi1iZWFlLTJjOGU0NDBhZWY1MCIsCiAgICAgICAgICAgICJmaWVsZCI6ICJpZGFkZSIsCiAgICAgICAgICAgICJtYXBwaW5nIjogIm1zZ1tcIlBJRFwiXVtcIlBJRC43XCJdW1wiUElELjcuMVwiXSIsCiAgICAgICAgICAgICJtc2dfdHlwZSI6ICJBRFQiLAogICAgICAgICAgICAibXNnX3RyaWdnZXJzIjogIltcIkEwMVwiLFwiQTAyXCIsXCJBMDNcIl0iLAogICAgICAgICAgICAidHJhbnNmb3JtZXJfc2NyaXB0IjogIlxuICAgIHZhciBtYXBwaW5nID0gZXZhbChtYXBwaW5nX2VsZW1lbnRbJ21hcHBpbmcnXSkudG9TdHJpbmcoKTtcblx0dmFyIG1zZ190eXBlID0gbXNnWydNU0gnXVsnTVNILjknXVsnTVNILjkuMSddLnRvU3RyaW5nKClcbiAgICB2YXIgbXNnX3RyaWdnZXIgPSBtc2dbJ01TSCddWydNU0guOSddWydNU0guOS4yJ10udG9TdHJpbmcoKVxuXHRcbiAgICBpZiAobWFwcGluZyAhPSAnJyAmJiBtc2dfdHlwZSA9PT0gbWFwcGluZ19lbGVtZW50Wydtc2dfdHlwZSddICYmIHRyaWdnZXJfZXZlbnRzLmluY2x1ZGVzKG1zZ190cmlnZ2VyKSkge1xuXHRcdGNoYW5uZWxNYXAucHV0KGZpZWxkX25hbWUsIG1hcHBpbmcpO1xuICAgIH0iCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAgICJtYXBwaW5nX2lkIjogODIsCiAgICAgICAgICAgICJjbGllbnRfaWQiOiAiRGVmYXVsdCIsCiAgICAgICAgICAgICJtb2RlbCI6ICJob3NwaXRhbGl6YXRpb25fcHJlZCIsCiAgICAgICAgICAgICJtb2RlbF9pZCI6ICIzMTE0NTI0YS03NGQ4LTQzZmYtYmVhZS0yYzhlNDQwYWVmNTAiLAogICAgICAgICAgICAiZmllbGQiOiAiY29kX3ZpYV92ZXJkZSIsCiAgICAgICAgICAgICJtYXBwaW5nIjogIm1zZ1tcIk9CWFwiXVtcIk9CWC41XCJdW1wiT0JYLjUuMVwiXSIsCiAgICAgICAgICAgICJtc2dfdHlwZSI6ICJPUlUiLAogICAgICAgICAgICAibXNnX3RyaWdnZXJzIjogIltcIlIwMVwiLFwiUjAyXCJdIiwKICAgICAgICAgICAgInRyYW5zZm9ybWVyX3NjcmlwdCI6ICJcbiAgICB2YXIgbWFwcGluZyA9IGV2YWwobWFwcGluZ19lbGVtZW50WydtYXBwaW5nJ10pLnRvU3RyaW5nKCk7XG5cdHZhciBtc2dfdHlwZSA9IG1zZ1snTVNIJ11bJ01TSC45J11bJ01TSC45LjEnXS50b1N0cmluZygpXG4gICAgdmFyIG1zZ190cmlnZ2VyID0gbXNnWydNU0gnXVsnTVNILjknXVsnTVNILjkuMiddLnRvU3RyaW5nKClcbiAgICB2YXIgbWFwcGluZ19pZCA9IG1zZ1snT0JYJ11bJ09CWC4zJ11bJ09CWC4zLjEnXS50b1N0cmluZygpXG5cdFxuICAgIGlmIChtYXBwaW5nICE9ICcnICYmIG1hcHBpbmdfaWQgPT09ICdjb2RfdmlhX3ZlcmRlJyAmJiBtc2dfdHlwZSA9PT0gbWFwcGluZ19lbGVtZW50Wydtc2dfdHlwZSddICYmIHRyaWdnZXJfZXZlbnRzLmluY2x1ZGVzKG1zZ190cmlnZ2VyKSkge1xuXHRcdGNoYW5uZWxNYXAucHV0KGZpZWxkX25hbWUsIG1hcHBpbmcpO1xuICAgIH0iCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAgICJtYXBwaW5nX2lkIjogMTAyLAogICAgICAgICAgICAiY2xpZW50X2lkIjogIkRlZmF1bHQiLAogICAgICAgICAgICAibW9kZWwiOiAiaG9zcGl0YWxpemF0aW9uX3ByZWQiLAogICAgICAgICAgICAibW9kZWxfaWQiOiAiMzExNDUyNGEtNzRkOC00M2ZmLWJlYWUtMmM4ZTQ0MGFlZjUwIiwKICAgICAgICAgICAgImZpZWxkIjogInNleG8iLAogICAgICAgICAgICAibWFwcGluZyI6ICJtc2dbXCJQSURcIl1bXCJQSUQuOFwiXVtcIlBJRC44LjFcIl0iLAogICAgICAgICAgICAibXNnX3R5cGUiOiAiQURUIiwKICAgICAgICAgICAgIm1zZ190cmlnZ2VycyI6ICJbXCJBMDFcIixcIkEwMlwiLFwiQTAzXCJdIiwKICAgICAgICAgICAgInRyYW5zZm9ybWVyX3NjcmlwdCI6ICJcbiAgICB2YXIgbWFwcGluZyA9IGV2YWwobWFwcGluZ19lbGVtZW50WydtYXBwaW5nJ10pLnRvU3RyaW5nKCk7XG5cdHZhciBtc2dfdHlwZSA9IG1zZ1snTVNIJ11bJ01TSC45J11bJ01TSC45LjEnXS50b1N0cmluZygpXG4gICAgdmFyIG1zZ190cmlnZ2VyID0gbXNnWydNU0gnXVsnTVNILjknXVsnTVNILjkuMiddLnRvU3RyaW5nKClcblx0XG4gICAgaWYgKG1hcHBpbmcgIT0gJycgJiYgbXNnX3R5cGUgPT09IG1hcHBpbmdfZWxlbWVudFsnbXNnX3R5cGUnXSAmJiB0cmlnZ2VyX2V2ZW50cy5pbmNsdWRlcyhtc2dfdHJpZ2dlcikpIHtcblx0XHRjaGFubmVsTWFwLnB1dChmaWVsZF9uYW1lLCBtYXBwaW5nKTtcbiAgICB9IgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgICAibWFwcGluZ19pZCI6IDc1LAogICAgICAgICAgICAiY2xpZW50X2lkIjogIkRlZmF1bHQiLAogICAgICAgICAgICAibW9kZWwiOiAiaG9zcGl0YWxpemF0aW9uX3ByZWQiLAogICAgICAgICAgICAibW9kZWxfaWQiOiAiMzExNDUyNGEtNzRkOC00M2ZmLWJlYWUtMmM4ZTQ0MGFlZjUwIiwKICAgICAgICAgICAgImZpZWxkIjogImNvZF9jb25jZWxobyIsCiAgICAgICAgICAgICJtYXBwaW5nIjogIm1zZ1tcIlBJRFwiXVtcIlBJRC4xMVwiXVtcIlBJRC4xMS45XCJdIiwKICAgICAgICAgICAgIm1zZ190eXBlIjogIkFEVCIsCiAgICAgICAgICAgICJtc2dfdHJpZ2dlcnMiOiAiW1wiQTAxXCIsXCJBMDJcIixcIkEwM1wiXSIsCiAgICAgICAgICAgICJ0cmFuc2Zvcm1lcl9zY3JpcHQiOiAiXG4gICAgdmFyIG1hcHBpbmcgPSBldmFsKG1hcHBpbmdfZWxlbWVudFsnbWFwcGluZyddKS50b1N0cmluZygpO1xuXHR2YXIgbXNnX3R5cGUgPSBtc2dbJ01TSCddWydNU0guOSddWydNU0guOS4xJ10udG9TdHJpbmcoKVxuICAgIHZhciBtc2dfdHJpZ2dlciA9IG1zZ1snTVNIJ11bJ01TSC45J11bJ01TSC45LjInXS50b1N0cmluZygpXG5cdFxuICAgIGlmIChtYXBwaW5nICE9ICcnICYmIG1zZ190eXBlID09PSBtYXBwaW5nX2VsZW1lbnRbJ21zZ190eXBlJ10gJiYgdHJpZ2dlcl9ldmVudHMuaW5jbHVkZXMobXNnX3RyaWdnZXIpKSB7XG5cdFx0Y2hhbm5lbE1hcC5wdXQoZmllbGRfbmFtZSwgbWFwcGluZyk7XG4gICAgfSIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICAgIm1hcHBpbmdfaWQiOiA3NiwKICAgICAgICAgICAgImNsaWVudF9pZCI6ICJEZWZhdWx0IiwKICAgICAgICAgICAgIm1vZGVsIjogImhvc3BpdGFsaXphdGlvbl9wcmVkIiwKICAgICAgICAgICAgIm1vZGVsX2lkIjogIjMxMTQ1MjRhLTc0ZDgtNDNmZi1iZWFlLTJjOGU0NDBhZWY1MCIsCiAgICAgICAgICAgICJmaWVsZCI6ICJhZmx1ZW5jaWEiLAogICAgICAgICAgICAibWFwcGluZyI6ICJtc2dbXCJPQlhcIl1bXCJPQlguNVwiXVtcIk9CWC41LjFcIl0iLAogICAgICAgICAgICAibXNnX3R5cGUiOiAiT1JVIiwKICAgICAgICAgICAgIm1zZ190cmlnZ2VycyI6ICJbXCJSMDFcIixcIlIwMlwiXSIsCiAgICAgICAgICAgICJ0cmFuc2Zvcm1lcl9zY3JpcHQiOiAiXG4gICAgdmFyIG1hcHBpbmcgPSBldmFsKG1hcHBpbmdfZWxlbWVudFsnbWFwcGluZyddKS50b1N0cmluZygpO1xuXHR2YXIgbXNnX3R5cGUgPSBtc2dbJ01TSCddWydNU0guOSddWydNU0guOS4xJ10udG9TdHJpbmcoKVxuICAgIHZhciBtc2dfdHJpZ2dlciA9IG1zZ1snTVNIJ11bJ01TSC45J11bJ01TSC45LjInXS50b1N0cmluZygpXG4gICAgdmFyIG1hcHBpbmdfaWQgPSBtc2dbJ09CWCddWydPQlguMyddWydPQlguMy4xJ10udG9TdHJpbmcoKVxuXHRcbiAgICBpZiAobWFwcGluZyAhPSAnJyAmJiBtYXBwaW5nX2lkID09PSAnYWZsdWVuY2lhJyAmJiBtc2dfdHlwZSA9PT0gbWFwcGluZ19lbGVtZW50Wydtc2dfdHlwZSddICYmIHRyaWdnZXJfZXZlbnRzLmluY2x1ZGVzKG1zZ190cmlnZ2VyKSkge1xuXHRcdGNoYW5uZWxNYXAucHV0KGZpZWxkX25hbWUsIG1hcHBpbmcpO1xuICAgIH0iCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAgICJtYXBwaW5nX2lkIjogNzksCiAgICAgICAgICAgICJjbGllbnRfaWQiOiAiRGVmYXVsdCIsCiAgICAgICAgICAgICJtb2RlbCI6ICJob3NwaXRhbGl6YXRpb25fcHJlZCIsCiAgICAgICAgICAgICJtb2RlbF9pZCI6ICIzMTE0NTI0YS03NGQ4LTQzZmYtYmVhZS0yYzhlNDQwYWVmNTAiLAogICAgICAgICAgICAiZmllbGQiOiAibG9zIiwKICAgICAgICAgICAgIm1hcHBpbmciOiAibXNnW1wiUFYyXCJdW1wiUFYyLjEwXCJdW1wiUFYyLjEwLjFcIl0iLAogICAgICAgICAgICAibXNnX3R5cGUiOiAiQURUIiwKICAgICAgICAgICAgIm1zZ190cmlnZ2VycyI6ICJbXCJBMDFcIixcIkEwMlwiLFwiQTAzXCJdIiwKICAgICAgICAgICAgInRyYW5zZm9ybWVyX3NjcmlwdCI6ICJcbiAgICB2YXIgbWFwcGluZyA9IGV2YWwobWFwcGluZ19lbGVtZW50WydtYXBwaW5nJ10pLnRvU3RyaW5nKCk7XG5cdHZhciBtc2dfdHlwZSA9IG1zZ1snTVNIJ11bJ01TSC45J11bJ01TSC45LjEnXS50b1N0cmluZygpXG4gICAgdmFyIG1zZ190cmlnZ2VyID0gbXNnWydNU0gnXVsnTVNILjknXVsnTVNILjkuMiddLnRvU3RyaW5nKClcblx0XG4gICAgaWYgKG1hcHBpbmcgIT0gJycgJiYgbXNnX3R5cGUgPT09IG1hcHBpbmdfZWxlbWVudFsnbXNnX3R5cGUnXSAmJiB0cmlnZ2VyX2V2ZW50cy5pbmNsdWRlcyhtc2dfdHJpZ2dlcikpIHtcblx0XHRjaGFubmVsTWFwLnB1dChmaWVsZF9uYW1lLCBtYXBwaW5nKTtcbiAgICB9IgogICAgICAgIH0KICAgIF0sCiAgICAibW9kZWxfaWQiOiAiMzExNDUyNGEtNzRkOC00M2ZmLWJlYWUtMmM4ZTQ0MGFlZjUwIiwKICAgICJjdXJyX2NsaWVudCI6IHsKICAgICAgICAiY2xpZW50X2lkIjogIjBiOGQwNTg0LTliMTYtNDBmOS1iOWI3LTdkYzUxYTZlM2Y5MiIsCiAgICAgICAgImVtYWlsIjogImNsaWVudDFAZ21haWwuY29tIiwKICAgICAgICAibmFtZSI6ICJDbGllbnQgMSIsCiAgICAgICAgInBob25lIjogIjkxMjM0NTY3OCIsCiAgICAgICAgInBhc3N3b3JkIjogIiQyYSQxMCQuUEJ6bk9kVE11RG40NktCUGVTM0NPTzRlNm1Wd1IyLnhnOWFSOWxMalp0Z0VXNWJqWm9aQyIKICAgIH0KfQ=="
                            },
                            "outboundTemplate": {
                                "@encoding": "base64"
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
                                    "name": "Accept message if \"sourceMap.get('batchSequenceId')\" equals 1",
                                    "sequenceNumber": 0,
                                    "enabled": true,
                                    "field": "sourceMap.get('batchSequenceId')",
                                    "condition": "EQUALS",
                                    "values": {
                                        "string": 1
                                    }
                                }
                            }
                        },
                        "transportName": "HTTP Sender",
                        "mode": "DESTINATION",
                        "enabled": true,
                        "waitForPrevious": true
                    },
                    {
                        "@version": "4.3.0",
                        "metaDataId": 2,
                        "name": "Field Extraction",
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
                            "script": "const abi_global = JSON.parse(globalMap.get('abi_global'))\nconst client_mappings = JSON.parse($('client_mappings'))\n\n\nfor(var i = 0; i < client_mappings.length; i++){\n\tvar mapping_element = client_mappings[i]\n\tvar field_name = mapping_element['field']\n\n\tif(channelMap.get(field_name) != null){\n\t\tlogger.info(field_name + ' is present | value: ' + channelMap.get(field_name))\n\t\tabi_global[field_name] = channelMap.get(field_name)\n\t}else{\n\t\tlogger.info(field_name + ' is not present')\n\t}\n}\n\nglobalMap.put('abi_global', JSON.stringify(abi_global))\n"
                        },
                        "transformer": {
                            "@version": "4.3.0",
                            "elements": {
                                "com.mirth.connect.plugins.javascriptstep.JavaScriptStep": {
                                    "@version": "4.3.0",
                                    "name": "field",
                                    "sequenceNumber": 0,
                                    "enabled": true,
                                    "script": "const client_mappings = JSON.parse($('client_mappings'))\n\nfor(var i = 0; i < client_mappings.length; i++){\n\tvar mapping_element = client_mappings[i]\n\tvar field_name = mapping_element['field']\n\tvar trigger_events = JSON.parse(mapping_element['msg_triggers'])\n\n\teval(mapping_element['transformer_script'])\n\t\n}"
                                }
                            },
                            "inboundTemplate": {
                                "@encoding": "base64",
                                "$": "TVNIfF5+XCZ8SE9TUElUQUx8QURUfEhMN0xBQnxPUlV8MjAxOTA0MDIxMjAwfHxPUlVeUjAxfDU2Nzg5fFB8Mi41Ck9CWHx8fHNvbWVfY29kX3ZpYV92ZXJkZV5ibHVlfHx8fA=="
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
                                    "name": "Accept message if \"$('client_permission')\" equals true",
                                    "sequenceNumber": 0,
                                    "enabled": true,
                                    "field": "$('client_permission')",
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
                    },
                    {
                        "@version": "4.3.0",
                        "metaDataId": 3,
                        "name": "Request Completion",
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
                            "script": "logger.info('Batch complete')\nconst abi_global = JSON.parse(globalMap.get('abi_global'))\nconst client_mappings = JSON.parse($('client_mappings'))\n\nvar fields_response = {}\nvar complete_request = true\n\nfor(var i = 0; i < client_mappings.length; i++){\n\tvar mapping_element = client_mappings[i]\n\tvar field_name = mapping_element['field']\n\n\tif(abi_global[field_name] != null){\n\t\tfields_response[field_name] = {\n\t\t\tstatus: 'ok', \n\t\t\tvalue: abi_global[field_name]\n\t\t\t}\n\t}else{\n\t\tcomplete_request = false\n\t\tfields_response[field_name] = {\n\t\t\tstatus: 'missing',\n\t\t\tmsg_type: mapping_element['msg_type'],\n\t\t\tmapping: mapping_element['mapping'],\n\t\t\tmsg_triggers: JSON.parse(mapping_element['msg_triggers'])\n\t\t}\n\t}\n}\n\n\n\nglobalMap.put('abi_global', JSON.stringify(abi_global))\nchannelMap.put('fields_response', JSON.stringify(fields_response))\nchannelMap.put('complete_request', complete_request)"
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
                                "com.mirth.connect.plugins.rulebuilder.RuleBuilderRule": [
                                    {
                                        "@version": "4.3.0",
                                        "name": "Accept message if \"sourceMap.get('batchComplete')\" equals true",
                                        "sequenceNumber": 0,
                                        "enabled": true,
                                        "field": "sourceMap.get('batchComplete')",
                                        "condition": "EQUALS",
                                        "values": {
                                            "string": true
                                        }
                                    },
                                    {
                                        "@version": "4.3.0",
                                        "name": "Accept message if \"$('client_permission')\" equals true",
                                        "sequenceNumber": 1,
                                        "enabled": true,
                                        "operator": "AND",
                                        "field": "$('client_permission')",
                                        "condition": "EQUALS",
                                        "values": {
                                            "string": true
                                        }
                                    }
                                ]
                            }
                        },
                        "transportName": "JavaScript Writer",
                        "mode": "DESTINATION",
                        "enabled": true,
                        "waitForPrevious": true
                    },
                    {
                        "@version": "4.3.0",
                        "metaDataId": 4,
                        "name": "Validators",
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
                            "host": "http://mysql-webservice:3000/api/run-validation/${model_id}",
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
                            "content": "${proc_req_obj}",
                            "contentType": "application/json",
                            "dataTypeBinary": false,
                            "charset": "UTF-8",
                            "socketTimeout": 30000
                        },
                        "transformer": {
                            "@version": "4.3.0",
                            "elements": {
                                "com.mirth.connect.plugins.javascriptstep.JavaScriptStep": {
                                    "@version": "4.3.0",
                                    "name": "Validator Body",
                                    "sequenceNumber": 0,
                                    "enabled": true,
                                    "script": "// Fetching the actual data object\nconst abi_global = JSON.parse(globalMap.get('abi_global'))\n\n// Setting preprocessing object\nvar proc_req_obj = {\n\tpred_obj: abi_global\n}\nchannelMap.put('proc_req_obj', JSON.stringify(proc_req_obj))"
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
                            "elements": {
                                "com.mirth.connect.plugins.mapper.MapperStep": [
                                    {
                                        "@version": "4.3.0",
                                        "name": "val_obj",
                                        "sequenceNumber": 0,
                                        "enabled": true,
                                        "variable": "val_obj",
                                        "mapping": "JSON.stringify(msg['validated_obj'])",
                                        "defaultValue": null,
                                        "replacements": null,
                                        "scope": "CHANNEL"
                                    },
                                    {
                                        "@version": "4.3.0",
                                        "name": "req_valid",
                                        "sequenceNumber": 1,
                                        "enabled": true,
                                        "variable": "req_valid",
                                        "mapping": "msg['is_valid']",
                                        "defaultValue": null,
                                        "replacements": null,
                                        "scope": "CHANNEL"
                                    }
                                ]
                            },
                            "inboundTemplate": {
                                "@encoding": "base64",
                                "$": "ewogICAgImlzX3ZhbGlkIjogdHJ1ZSwKICAgICJ2YWxpZGF0ZWRfb2JqIjogewogICAgICAgICJjb2RfY2F1c2EiOiB7CiAgICAgICAgICAgICJ2YWxpZGF0aW9uX3Jlc3BvbnNlIjogdHJ1ZSwKICAgICAgICAgICAgInJlZ2V4IjogIi9eW2EtekEtWl9dW2EtekEtWjAtOV9dKiQvIgogICAgICAgIH0sCiAgICAgICAgImlkYWRlIjogewogICAgICAgICAgICAidmFsaWRhdGlvbl9yZXNwb25zZSI6IHRydWUsCiAgICAgICAgICAgICJyZWdleCI6ICIvXihcXGR7NH0oPzpcXGR7Mn0oPzpcXGR7Mn0oPzpcXGR7Mn0oPzpcXGR7Mn0oPzpcXGR7Mn0oPzpcXC5cXGR7MSw0fSk/KT8pPyk/KT8pPyk/KD86WystXVxcZHs0fSk/JC8iCiAgICAgICAgfSwKICAgICAgICAic2V4byI6IHsKICAgICAgICAgICAgInZhbGlkYXRpb25fcmVzcG9uc2UiOiB0cnVlLAogICAgICAgICAgICAicmVnZXgiOiAiL15bYS16QS1aX11bYS16QS1aMC05X10qJC8iCiAgICAgICAgfSwKICAgICAgICAiY29kX2NvbmNlbGhvIjogewogICAgICAgICAgICAidmFsaWRhdGlvbl9yZXNwb25zZSI6IHRydWUsCiAgICAgICAgICAgICJyZWdleCI6ICIvXlthLXpBLVpfXVthLXpBLVowLTlfXSokLyIKICAgICAgICB9LAogICAgICAgICJob3JhX2FkbWlzc2FvIjogewogICAgICAgICAgICAidmFsaWRhdGlvbl9yZXNwb25zZSI6IHRydWUsCiAgICAgICAgICAgICJyZWdleCI6ICIvXihcXGR7NH0oPzpcXGR7Mn0oPzpcXGR7Mn0oPzpcXGR7Mn0oPzpcXGR7Mn0oPzpcXGR7Mn0oPzpcXC5cXGR7MSw0fSk/KT8pPyk/KT8pPyk/KD86WystXVxcZHs0fSk/JC8iCiAgICAgICAgfSwKICAgICAgICAiY29kX3Byb3ZlbmllbmNpYSI6IHsKICAgICAgICAgICAgInZhbGlkYXRpb25fcmVzcG9uc2UiOiB0cnVlLAogICAgICAgICAgICAicmVnZXgiOiAiL15bYS16QS1aX11bYS16QS1aMC05X10qJC8iCiAgICAgICAgfSwKICAgICAgICAiY29kX3ByaW9yaWRhZGUiOiB7CiAgICAgICAgICAgICJ2YWxpZGF0aW9uX3Jlc3BvbnNlIjogdHJ1ZSwKICAgICAgICAgICAgInJlZ2V4IjogIi9eW2EtekEtWl9dW2EtekEtWjAtOV9dKiQvIgogICAgICAgIH0sCiAgICAgICAgInVyZ19lcGlzb2RpbyI6IHsKICAgICAgICAgICAgInZhbGlkYXRpb25fcmVzcG9uc2UiOiB0cnVlLAogICAgICAgICAgICAicmVnZXgiOiAiL15bMC05XSskLyIKICAgICAgICB9LAogICAgICAgICJjb2RfdmlhX3ZlcmRlIjogewogICAgICAgICAgICAidmFsaWRhdGlvbl9yZXNwb25zZSI6IHRydWUsCiAgICAgICAgICAgICJyZWdleCI6ICIvXlthLXpBLVpfXVthLXpBLVowLTlfXSokLyIKICAgICAgICB9LAogICAgICAgICJhZmx1ZW5jaWEiOiB7CiAgICAgICAgICAgICJ2YWxpZGF0aW9uX3Jlc3BvbnNlIjogdHJ1ZSwKICAgICAgICAgICAgInJlZ2V4IjogIi9eWzAtOV0rJC8iCiAgICAgICAgfSwKICAgICAgICAibG9zIjogewogICAgICAgICAgICAidmFsaWRhdGlvbl9yZXNwb25zZSI6IHRydWUsCiAgICAgICAgICAgICJyZWdleCI6ICIvXlswLTldKyQvIgogICAgICAgIH0KICAgIH0KfQ=="
                            },
                            "outboundTemplate": {
                                "@encoding": "base64"
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
                                "com.mirth.connect.plugins.rulebuilder.RuleBuilderRule": [
                                    {
                                        "@version": "4.3.0",
                                        "name": "Accept message if \"$('complete_request')\" equals true",
                                        "sequenceNumber": 0,
                                        "enabled": true,
                                        "field": "$('complete_request')",
                                        "condition": "EQUALS",
                                        "values": {
                                            "string": true
                                        }
                                    },
                                    {
                                        "@version": "4.3.0",
                                        "name": "Accept message if \"$('client_permission')\" equals true",
                                        "sequenceNumber": 1,
                                        "enabled": true,
                                        "operator": "AND",
                                        "field": "$('client_permission')",
                                        "condition": "EQUALS",
                                        "values": {
                                            "string": true
                                        }
                                    }
                                ]
                            }
                        },
                        "transportName": "HTTP Sender",
                        "mode": "DESTINATION",
                        "enabled": true,
                        "waitForPrevious": true
                    },
                    {
                        "@version": "4.3.0",
                        "metaDataId": 5,
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
                            "host": "http://mysql-webservice:3000/api/preprocessing/${model_id}",
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
                            "content": "${proc_req_obj}",
                            "contentType": "application/json",
                            "dataTypeBinary": false,
                            "charset": "UTF-8",
                            "socketTimeout": 30000
                        },
                        "transformer": {
                            "@version": "4.3.0",
                            "elements": {
                                "com.mirth.connect.plugins.javascriptstep.JavaScriptStep": {
                                    "@version": "4.3.0",
                                    "name": "Preprocessing Body",
                                    "sequenceNumber": 0,
                                    "enabled": true,
                                    "script": "// Fetching the actual data object\nconst abi_global = JSON.parse(globalMap.get('abi_global'))\n\n// Setting preprocessing object\nvar proc_req_obj = {\n\tpred_obj: abi_global\n}\nchannelMap.put('proc_req_obj', JSON.stringify(proc_req_obj))"
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
                            "elements": {
                                "com.mirth.connect.plugins.mapper.MapperStep": {
                                    "@version": "4.3.0",
                                    "name": "proc_obj",
                                    "sequenceNumber": 0,
                                    "enabled": true,
                                    "variable": "proc_obj",
                                    "mapping": "JSON.stringify(msg['proc_obj'])",
                                    "defaultValue": null,
                                    "replacements": null,
                                    "scope": "CHANNEL"
                                }
                            },
                            "inboundTemplate": {
                                "@encoding": "base64",
                                "$": "ewogICAgInByb2Nfb2JqIjogewogICAgICAgICJ1cmdfZXBpc29kaW8iOiAxMjM0NSwKICAgICAgICAiaG9yYV9hZG1pc3NhbyI6IDU1NDI2LAogICAgICAgICJjb2RfY2F1c2EiOiAiNSIsCiAgICAgICAgImNvZF9wcm92ZW5pZW5jaWEiOiAiMiIsCiAgICAgICAgImNvZF9wcmlvcmlkYWRlIjogIjUiLAogICAgICAgICJpZGFkZSI6IDMzLAogICAgICAgICJjb2RfdmlhX3ZlcmRlIjogIjMiLAogICAgICAgICJzZXhvIjogIjEiLAogICAgICAgICJjb2RfY29uY2VsaG8iOiAiNCIsCiAgICAgICAgImFmbHVlbmNpYSI6IDEyMywKICAgICAgICAibG9zIjogOTUwNDAwCiAgICB9Cn0="
                            },
                            "outboundTemplate": {
                                "@encoding": "base64"
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
                                "com.mirth.connect.plugins.rulebuilder.RuleBuilderRule": [
                                    {
                                        "@version": "4.3.0",
                                        "name": "Accept message if \"$('req_valid')\" equals true",
                                        "sequenceNumber": 0,
                                        "enabled": true,
                                        "field": "$('req_valid')",
                                        "condition": "EQUALS",
                                        "values": {
                                            "string": true
                                        }
                                    },
                                    {
                                        "@version": "4.3.0",
                                        "name": "Accept message if \"$('client_permission')\" equals true",
                                        "sequenceNumber": 1,
                                        "enabled": true,
                                        "operator": "AND",
                                        "field": "$('client_permission')",
                                        "condition": "EQUALS",
                                        "values": {
                                            "string": true
                                        }
                                    }
                                ]
                            }
                        },
                        "transportName": "HTTP Sender",
                        "mode": "DESTINATION",
                        "enabled": true,
                        "waitForPrevious": true
                    },
                    {
                        "@version": "4.3.0",
                        "metaDataId": 6,
                        "name": "Response",
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
                            "script": "const abi_global = JSON.parse(globalMap.get('abi_global'))\nconst client_permission = globalMap.get('client_permission')\nconst client_mappings = JSON.parse(globalMap.get('client_mappings'))\nconst fields_response = JSON.parse(channelMap.get('fields_response'))\nconst proc_obj = JSON.parse(channelMap.get('proc_obj'))\nconst val_obj = JSON.parse(channelMap.get('val_obj'))\nconst req_valid = channelMap.get('req_valid')\nconst complete_req = channelMap.get('complete_request')\n\nglobalMap.put('abi_global', JSON.stringify({}))\n\nreturn JSON.stringify({\n\tstatus: 200,\n\tclient_permission: client_permission,\n\treq_valid: req_valid,\n\tcomplete_req: complete_req,\n\tfields_response: fields_response,\n\tval_obj: val_obj,\n\traw_data: abi_global,\n\tprocessed_data: proc_obj\n})\n"
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
                                    "name": "Accept message if \"sourceMap.get('batchComplete')\" equals true",
                                    "sequenceNumber": 0,
                                    "enabled": true,
                                    "field": "sourceMap.get('batchComplete')",
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
                ]
            },
            "preprocessingScript": "// Modify the message variable below to pre process data\nreturn message;",
            "postprocessingScript": "// This script executes once after a message has been processed\n// Responses returned from here will be stored as \"Postprocessor\" in the response map\nreturn;",
            "deployScript": "// This script executes once when the channel is deployed\n// You only have access to the globalMap and globalChannelMap here to persist data\nglobalMap.put('abi_global', JSON.stringify({}))\nreturn;",
            "undeployScript": "// This script executes once when the channel is undeployed\n// You only have access to the globalMap and globalChannelMap here to persist data\nreturn;",
            "properties": {
                "@version": "4.3.0",
                "clearGlobalChannelMap": true,
                "messageStorageMode": "PRODUCTION",
                "encryptData": false,
                "encryptAttachments": false,
                "encryptCustomMetaData": false,
                "removeContentOnCompletion": false,
                "removeOnlyFilteredOnCompletion": false,
                "removeAttachmentsOnCompletion": false,
                "initialState": "STARTED",
                "storeAttachments": false,
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
                        "time": 1690996614783,
                        "timezone": "Europe/Lisbon"
                    },
                    "pruningSettings": {
                        "pruneMetaDataDays": 3,
                        "pruneContentDays": 3,
                        "archiveEnabled": true,
                        "pruneErroredMessages": true
                    },
                    "userId": 1
                },
                "dependentIds": null,
                "dependencyIds": null,
                "channelTags": null
            }
        }
    })
}


const GenerateHL7MapperChannelData = (channel_port) => {
    const uniqueId = uuidv4();
    return JSON.stringify({
        "channel": {
            "@version": "4.3.0",
            "id": uniqueId,
            "nextMetaDataId": 2,
            "name": "HL7 Mapper",
            "description": "The HL7 Mapper Channel is a system-calling solution designed to swiftly extract requested values from provided HL7 messages using predefined mappings. It returns the identified value or signals the absence of data, ensuring efficient data retrieval within our healthcare system.",
            "revision": 30,
            "sourceConnector": {
                "@version": "4.3.0",
                "metaDataId": 0,
                "name": "sourceConnector",
                "properties": {
                    "@class": "com.mirth.connect.connectors.http.HttpReceiverProperties",
                    "@version": "4.3.0",
                    "pluginProperties": {
                        "com.mirth.connect.plugins.httpauth.basic.BasicHttpAuthProperties": {
                            "@version": "4.3.0",
                            "authType": "BASIC",
                            "realm": "My Realm",
                            "credentials": {
                                "@class": "linked-hash-map",
                                "entry": {
                                    "string": [
                                        "abi-system",
                                        123
                                    ]
                                }
                            },
                            "isUseCredentialsVariable": false,
                            "credentialsVariable": null
                        }
                    },
                    "listenerConnectorProperties": {
                        "@version": "4.3.0",
                        "host": "0.0.0.0",
                        "port": channel_port
                    },
                    "sourceConnectorProperties": {
                        "@version": "4.3.0",
                        "responseVariable": "d1",
                        "respondAfterProcessing": true,
                        "processBatch": false,
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
                    "includeMetadata": false,
                    "binaryMimeTypes": "application/.*(?<!json|xml)$|image/.*|video/.*|audio/.*",
                    "binaryMimeTypesRegex": true,
                    "responseContentType": "application/json",
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
                    "elements": {
                        "com.mirth.connect.plugins.mapper.MapperStep": {
                            "@version": "4.3.0",
                            "name": "field_mapping",
                            "sequenceNumber": 0,
                            "enabled": true,
                            "variable": "field_mapping",
                            "mapping": "sourceMap.get('headers').getHeader('Model-Mapping')",
                            "defaultValue": null,
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
                "connector": {
                    "@version": "4.3.0",
                    "metaDataId": 1,
                    "name": "Field Extraction and Response",
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
                        "script": "logger.info('Message received: ' + connectorMessage.getRawData())\n// Fetching the extracted value from the Transformer\nconst extracted_field = channelMap.get('extracted_field');\n\n// Instanciating the channel response\nvar channelResponse\n\nif(!extracted_field){\n\t// If no extracted_field was found\n\tchannelResponse = {\n\t\tstatus: 404,\n\t\tmessage: \"No value found for that mapping\"\n\t}\n}else{\n\t// If an extracted_field was found\n\tchannelResponse = {\n\t\tstatus: 200,\n\t\textracted_field: extracted_field,\n\t\tmessage: \"Value found\"\n\t}\n}\n\n// Returning the response\nreturn JSON.stringify(channelResponse)"
                    },
                    "transformer": {
                        "@version": "4.3.0",
                        "elements": {
                            "com.mirth.connect.plugins.javascriptstep.JavaScriptStep": {
                                "@version": "4.3.0",
                                "name": "field_extraction",
                                "sequenceNumber": 0,
                                "enabled": true,
                                "script": "// Fetching the mapping object\nconst mapping_element = JSON.parse($('field_mapping'))\n\n// Setting the evaluation variables\nvar trigger_events = mapping_element['msg_triggers']\nvar mapping = eval(mapping_element['mapping']).toString()\rvar msg_type = msg['MSH']['MSH.9']['MSH.9.1'].toString()\rvar msg_trigger = msg['MSH']['MSH.9']['MSH.9.2'].toString()\nvar mapping_field = mapping_element['field']\n\r\n\n\n// If mapping message type is ORU we also need to check if the identifier matches\nif (mapping_element['msg_type'] === 'ORU'){\n\tvar observation_identifier = msg['OBX']['OBX.3']['OBX.3.1'].toString();\n\n\t// Checking if current message obeys the mapping's rules\n\tif (observation_identifier === mapping_field &&  mapping != '' && msg_type === mapping_element['msg_type'] && trigger_events.includes(msg_trigger)) {\n\t\tchannelMap.put('extracted_field', mapping);\r\t}\n\t\n}else{\n\t// Checking if current message obeys the mapping's rules\n\tif (mapping != '' && msg_type === mapping_element['msg_type'] && trigger_events.includes(msg_trigger)) {\n\t\tchannelMap.put('extracted_field', mapping);\r\t}\r}"
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
                        "elements": null
                    },
                    "transportName": "JavaScript Writer",
                    "mode": "DESTINATION",
                    "enabled": true,
                    "waitForPrevious": true
                }
            },
            "preprocessingScript": "// Modify the message variable below to pre process data\nreturn message;",
            "postprocessingScript": "// This script executes once after a message has been processed\n// Responses returned from here will be stored as \"Postprocessor\" in the response map\nreturn;",
            "deployScript": "// This script executes once when the channel is deployed\n// You only have access to the globalMap and globalChannelMap here to persist data\nreturn;",
            "undeployScript": "// This script executes once when the channel is undeployed\n// You only have access to the globalMap and globalChannelMap here to persist data\nreturn;",
            "properties": {
                "@version": "4.3.0",
                "clearGlobalChannelMap": true,
                "messageStorageMode": "DEVELOPMENT",
                "encryptData": true,
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
                        "time": 1694356584316,
                        "timezone": "Europe/Lisbon"
                    },
                    "pruningSettings": {
                        "pruneMetaDataDays": 2,
                        "pruneContentDays": 2,
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
    })
}

module.exports = {
    GenerateChannelData: GenerateChannelData,
    GenerateHL7MapperChannelData: GenerateHL7MapperChannelData
}