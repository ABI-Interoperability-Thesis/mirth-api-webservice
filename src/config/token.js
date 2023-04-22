require('dotenv').config();

const GenerateToken = () => {
    const mirth_user = process.env.MIRTH_USERNAME
    const mirth_password = process.env.MIRTH_PASSWORD

    const token_b64 = Buffer.from(`${mirth_user}:${mirth_password}`).toString('base64');
    const auth_token = `Basic ${token_b64}`
    return auth_token
}

module.exports = {
    GenerateToken: GenerateToken
}