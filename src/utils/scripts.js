const GenerateDeployScript = (model_name) => {
    const deploy_script_string = `// Automatic Global variable
    globalMap.put('${model_name}', JSON.stringify({}))
    return;
    `
    return deploy_script_string
}

module.exports = {
    GenerateDeployScript: GenerateDeployScript
}