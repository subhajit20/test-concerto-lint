const configRules = require(process.cwd()+'/concerto-config.js');
const dfined_rules = require('../ruleset');

module.exports = function selectRules(){
    let rule_sets = {};
    Object.entries(configRules).map((rule)=>{
        if(rule[1] === true){
            rule_sets = {
                [rule[0]]:dfined_rules[rule[0]]
            };
        }
    })

    console.log(rule_sets)
}