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
        return `
        // Code generated automatically
        var client_mappings = JSON.parse($('client_mappings'))
        var curr_field = '${mapping.name}'
        eval(client_mappings[curr_field]['transformer_script'])
        `
    
}


module.exports = {
    CreateTransformers: CreateTransformers
}