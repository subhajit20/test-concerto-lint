#! /usr/bin/env node

const data = require(process.cwd()+'/concerto-config.js');
const selectRules = require("../helper/select-rules");

function getRules(){
    selectRules()
    // Object.entries(data).map((rules)=>{
    //     console.log(rules[1])
    // })
}

getRules();

module.exports = getRules;