
module.exports = filterObj = (inputData , ...obj) => {
    const newObj = {};

    Object.keys(inputData).forEach(element => {
        if(obj.includes(element)){
            newObj[element] = inputData[element];
        }
    })

    return newObj;
}