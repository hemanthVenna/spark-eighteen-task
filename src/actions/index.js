export function screenOneData(data){
    console.log("action 1")
    return {
        type: "SCREEN_ONE_DATA",
        payload : data
    }
}

export function screenTwoData(data){
    return {
        type: "SCREEN_TWO_DATA",
        payload : data
    }
}

export function screenThreeData(data){
    return {
        type: "SCREEN_THREE_DATA",
        payload : data
    }
}

export function scenarioNameChange(data){
    return {
        type: "SCENARIO_NAME_CHANGE",
        payload : data
    }
}

export function scenarioDescriptonChange(data){
    return {
        type: "SCENARIO_DESCRIPTION_CHANGE",
        payload : data
    }
}
export function sourceNameChange(data){
    return {
        type: "SOURCE_NAME_CHANGE",
        payload : data
    }
}
export function extractorNameChange(data){
    return {
        type: "EXTRACTOR_NAME_CHANGE",
        payload : data
    }
}
export function extractorTypeChange(data){
    return {
        type: "EXTRACTOR_TYPE_CHANGE",
        payload : data
    }
}
export function infocubeNameChange(data){
    return {
        type: "INFOCUBE_NAME_CHANGE",
        payload : data
    }
}
export function metaSource1Change(data){
    return {
        type: "META_SOURCE1_CHANGE",
        payload : data
    }
}
export function metaSource2Change(data){
    return {
        type: "META_SOURCE2_CHANGE",
        payload : data
    }
}
export function loadSettings1Change(data){
    return {
        type: "LOAD_SETTINGS1_CHANGE",
        payload : data
    }
}
export function loadSettings2Change(data){
    return {
        type: "LOAD_SETTINGS2_CHANGE",
        payload : data
    }
}
export function DocType1Change(data){
    return {
        type: "DOC_TYPE1_CHANGE",
        payload : data
    }
}
export function DocType2Change(data){
    return {
        type: "DOC_TYPE2_CHANGE",
        payload : data
    }
}
export function DocType3Change(data){
    return {
        type: "DOC_TYPE3_CHANGE",
        payload : data
    }
}
export function DocType4Change(data){
    return {
        type: "DOC_TYPE4_CHANGE",
        payload : data
    }
}
export function DocType5Change(data){
    return {
        type: "DOC_TYPE5_CHANGE",
        payload : data
    }
}
export function scenarioNameValidationChange(data){
    return {
        type: "SCENARIO_NAME_VALIDATION",
        payload : data
    }
}
export function scenarioDescriptionValidationChange(data){
    return {
        type: "SCENARIO_DESCRIPTION_VALIDATION",
        payload : data
    }
}
export function sourceNameValidationChange(data){
    return {
        type: "SOURCE_NAME_VALIDATION",
        payload : data
    }
}
export function extractorNameValidationChange(data){
    return {
        type: "EXTRACTOR_NAME_VALIDATION",
        payload : data
    }
}
export function extractorTypeValidationChange(data){
    return {
        type: "EXTRACTOR_TYPE_VALIDATION",
        payload : data
    }
}
export function infocubeNameValidationChange(data){
    return {
        type: "INFOCUBE_NAME_VALIDATION",
        payload : data
    }
}
export function metaSourceValidationChange(data){
    return {
        type: "METASOURCE_VALIDATION",
        payload : data
    }
}
export function loadSettingsValidationChange(data){
    return {
        type: "LOADSETTINGS_VALIDATION",
        payload : data
    }
}
export function DocTypeValidationChange(data){
    return {
        type: "DOCTYPE_VALIDATION",
        payload : data
    }
}
