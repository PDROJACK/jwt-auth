const sign = require('./sign');
const verify = require('./verify')

const payload = {
    'hello' : 'heell'
}

const options = {
    expiresIn: '1D'
}

const token = sign(payload, "secret", options);

const decoded = verify(token, "secret")

console.log(token);

console.log(decoded);