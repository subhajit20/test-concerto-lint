#! /usr/bin/env node

// console.log("Okkk")

const fs = require("fs");
const {ModelManager} = require("@accordproject/concerto-core");
const spectralCore = require("@stoplight/spectral-core");
const { Spectral, Document } = spectralCore;
const Parsers = require("@stoplight/spectral-parsers");
const { pattern } = require( "@stoplight/spectral-functions");

// const data = fs.readdirSync('./lint');

// console.log(data)
// data.forEach((file)=>{
//   const d = fs.readFileSync(`lint/${file}`,'utf8');
//   console.log(d);
// })

async function lintConcertoModel() {
  let data;
  try{
    data = fs.readFileSync(process.argv[2],'utf8');

  }catch(e){
    console.log("No file exist");
  }
    // const d = new Document(data,Parsers.Yaml);
    // console.log(d)
    const model_manager = new ModelManager()
    const modelFile = model_manager.addCTOModel(data,'test.cto');
    const ast = modelFile.getAst();

    // console.log(data)

    const spectral = new Spectral();
    spectral.setRuleset({
        rules: {
            "concept-name-capitalized": {
              description:"Concept names should start with a capital letter.",
              given: "$.declarations[*].name",
              message: "Declaration '{{value}}' should use Pascal case.",
              then: {
                field:"name",
                function: pattern,
                functionOptions:{
                    match:"^[A-Z]"
                }
              },
            },
            "properties-small-case": {
              description:"Concept names should start with a capital letter.",
              given: "$.declarations[*].properties[?(@.$class=='concerto.metamodel@1.0.0.StringProperty')].name",
              message: "Properties '{{value}}' should use small case.",
              then: {
                field:"name",
                function: pattern,
                functionOptions:{
                    match:"^[a-z]{2,5}"
                }
              },
            },
        }
    });

    spectral.run(ast).then((e)=>{
        console.log(e)
    })
    .catch((err)=>{

        console.log(err)
    })
  
    // return results;
  }


lintConcertoModel();

module.exports = lintConcertoModel