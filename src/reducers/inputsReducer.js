var stateObj = {
  screenOne : true,
  screenTwo : false,
  screenThree :false,
  scenarioName : "",      
  scenarioDescription:'',
  sourceName : '',
  extractorName : '',
  extractorType : '',
  infocubeName : '',
  docType:{
    check1 : false,
    check2 : false,
    check3 : false,
    check4 : false,
    check5 : false
  },
  metaSource: {
    radio1 : false,
    radio2 : false
  },
  loadSettings : {
    radio1 : false,
    radio2 : false
  },
  sourceNameValidation : "",
  scenarioDescriptionValidation : "",
  scenarioNameValidation : '',
  extractorNameValidation : '',
  extractorTypeValidation : '',
  infocubeNameValidation : '',
  metaSourceValidation : '',
  loadSettingsValidation : ''
}
const InputsReducer = (state = stateObj,action) => {
    switch(action.type){
      
        case "SCREEN_ONE_DATA" :
        console.log("action.payload")
      console.log(action.payload)
      console.log(Object.assign({}, state,action.payload))
          return Object.assign({}, state,action.payload);
        case "SCREEN_TWO_DATA" : 
          return Object.assign({}, state,action.payload);

        case "SCREEN_THREE_DATA" : 
          return Object.assign({}, state,action.payload);
        case "SCENARIO_NAME_CHANGE" : 
          return Object.assign({}, state,action.payload);
        case "SCENARIO_DESCRIPTION_CHANGE" : 
          return Object.assign({}, state,action.payload)
        case "EXTRACTOR_NAME_CHANGE" :
          return Object.assign({}, state,action.payload)
        case "EXTRACTOR_TYPE_CHANGE" :
          return Object.assign({}, state,action.payload)
        case "INFOCUBE_NAME_CHANGE" :
          return Object.assign({}, state,action.payload)
        case "META_SOURCE1_CHANGE" : 
          return Object.assign({}, state,action.payload)
        case "META_SOURCE2_CHANGE" : 
          return Object.assign({}, state,action.payload)
        case "LOAD_SETTINGS1_CHANGE" : 
          return Object.assign({}, state,action.payload)
        case "LOAD_SETTINGS2_CHANGE" : 
          return Object.assign({}, state,action.payload)
        case "SOURCE_NAME_CHANGE" : 
          return Object.assign({}, state,action.payload)
        case "DOC_TYPE1_CHANGE" : 
          return Object.assign({}, state,action.payload)
        case "DOC_TYPE2_CHANGE" : 
          return Object.assign({}, state,action.payload)
        case "DOC_TYPE3_CHANGE" : 
          return Object.assign({}, state,action.payload)
        case "DOC_TYPE4_CHANGE" : 
          return Object.assign({}, state,action.payload)
        case "DOC_TYPE5_CHANGE" : 
          return Object.assign({}, state,action.payload)
        case "SCENARIO_NAME_VALIDATION" : 
          return Object.assign({}, state,action.payload)
          case "SCENARIO_DESCRIPTION_VALIDATION" : 
          return Object.assign({}, state,action.payload)
          case "SOURCE_NAME_VALIDATION" : 
          return Object.assign({}, state,action.payload)
          case "EXTRACTOR_NAME_VALIDATION" : 
          return Object.assign({}, state,action.payload)
          case "EXTRACTOR_TYPE_VALIDATION" : 
          return Object.assign({}, state,action.payload)
          case "INFOCUBE_NAME_VALIDATION" : 
          return Object.assign({}, state,action.payload)
          case "METASOURCE_VALIDATION" : 
          return Object.assign({}, state,action.payload)
          case "LOADSETTINGS_VALIDATION" : 
          return Object.assign({}, state,action.payload)
          case "DOCTYPE_VALIDATION" : 
          return Object.assign({}, state,action.payload)
        
        default:
        console.log('default')
        console.log(state)
           return state;
    }
}

export default InputsReducer;