const { pattern } = require( "@stoplight/spectral-functions");

const rules = {
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

module.exports = rules;