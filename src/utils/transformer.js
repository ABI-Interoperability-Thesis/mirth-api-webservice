const CreateTransformers = (mappings) => {
    let final_transformers = []

    for (let i = 0; i < mappings.length; i++) {
        const mapping = mappings[i];
        const mapping_script = CreateTransformerScript(mapping)

        const new_mapping = {
            "@version": "4.3.0",
            "name": mapping.name,
            "sequenceNumber": i,
            "enabled": true,
            "script": mapping_script
        }

        final_transformers.push(new_mapping)
    }

    return final_transformers
}

const CreateTransformerScript = (mapping) => {
    let script_string
    if (mapping.hl7_type === 'ADT') {
        script_string = `// Code generated automatically
    var mapping;
    var msg_type;

    var trigger_events = ${JSON.stringify(mapping.hl7_triggers)}

    try {
        mapping = ${mapping.map_to}.toString()
        msg_type = msg['MSH']['MSH.9']['MSH.9.1'].toString()
        msg_trigger = msg['MSH']['MSH.9']['MSH.9.2'].toString()
    } catch (e) {
        mapping = 'error';
    }

    if (mapping !== null && msg_type === '${mapping.hl7_type}' && trigger_events.includes(msg_trigger)) {
        channelMap.put('${mapping.name}', validate(mapping, '', new Array()));
    }`
    }

    if (mapping.hl7_type === 'ORU') {
        script_string = `// Code generated automatically
        var mapping;
        var msg_type;
        var trigger_events = ${JSON.stringify(mapping.hl7_triggers)}
        try {
            mapping = ${mapping.map_to}.toString()
            mapping_id = msg['OBX']['OBX.3']['OBX.3.1'].toString()
            msg_type = msg['MSH']['MSH.9']['MSH.9.1'].toString()
            msg_trigger = msg['MSH']['MSH.9']['MSH.9.2'].toString()
        } catch (e) {
            mapping = 'error';
        }
        
        if(mapping !== null && msg_type === '${mapping.hl7_type}' && mapping_id === '${mapping.mapping_id}' && trigger_events.includes(msg_trigger)){
            channelMap.put('${mapping.name}', mapping);
        }`
    }

    return script_string
}


module.exports = {
    CreateTransformers: CreateTransformers
}