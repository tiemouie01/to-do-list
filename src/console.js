function logMessage(message) {
    console.log(message);
}

function getValue(name) {
    const value = prompt(`Enter the ${name}:`);
    return value;
}

export { logMessage, getValue };