const path = require("path");
const glob = require("glob");

let getModules = (paths, tester) => glob.sync(paths)
    .filter((el) => tester(path.parse(el).name))
    .reduce((obj, el) => {
        obj[path.parse(el).name] = el;
        return obj;
    }, {});


module.exports = {
    getModules: getModules
};