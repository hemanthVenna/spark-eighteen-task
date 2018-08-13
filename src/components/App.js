import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import {screenOneData,screenTwoData,screenThreeData,scenarioNameChange,scenarioDescriptonChange,sourceNameChange,extractorNameChange,extractorTypeChange,infocubeNameChange,metaSource1Change,metaSource2Change,loadSettings1Change,loadSettings2Change,scenarioDescriptionValidationChange,scenarioNameValidationChange,sourceNameValidationChange,extractorNameValidationChange,extractorTypeValidationChange,infocubeNameValidationChange,metaSourceValidationChange,loadSettingsValidationChange,DocTypeValidationChange,DocType1Change,DocType2Change,DocType3Change,DocType4Change,DocType5Change} from '../actions'

class App extends Component {
  constructor(props){
    super(props);
    this.handleNext1 = this.handleNext1.bind(this)
    this.handleNext2 = this.handleNext2.bind(this)
    this.handleNext3 = this.handleNext3.bind(this)
    this.handleBack1 = this.handleBack1.bind(this)
    this.handleBack2 = this.handleBack2.bind(this)
    this.handleScenarioNameChange = this.handleScenarioNameChange.bind(this);
    this.handleScenarioDescription = this.handleScenarioDescription.bind(this);
    this.handleSourceNameChange = this.handleSourceNameChange.bind(this);
    this.handleExtractorName = this.handleExtractorName.bind(this);
    this.handleExtractorType = this.handleExtractorType.bind(this);
    this.handleInfocubename = this.handleInfocubename.bind(this)
    this.handleDocType1 = this.handleDocType1.bind(this)
    this.handleDocType2 = this.handleDocType2.bind(this)
    this.handleDocType3 = this.handleDocType3.bind(this)
    this.handleDocType4 = this.handleDocType4.bind(this)
    this.handleDocType5 = this.handleDocType5.bind(this)
    this.metaSource1 = this.metaSource1.bind(this)
    this.metaSource2 = this.metaSource2.bind(this)
    this.handleLoadSettings1 = this.handleLoadSettings1.bind(this);
    this.handleLoadSettings2 = this.handleLoadSettings2.bind(this)
  }
  handleNext1(e){
    e.preventDefault();
    console.log("next1 clicked")
    if((this.props.data.scenarioName.length > 0) && (this.props.data.scenarioDescription.length > 0)){
      this.props.screenOneData({screenOne : false,screenTwo : true,screenThree :false})
      this.props.scenarioDescriptionValidationChange({scenarioDescriptionValidation : ""})
      this.props.scenarioNameValidationChange({scenarioNameValidation : ""})

    }else{
     if((this.props.data.scenarioName.length <= 0)){
        this.props.scenarioNameValidationChange({scenarioNameValidation : "Please enter scenario name"})
     }else{
      this.props.scenarioNameValidationChange({scenarioNameValidation : ""})

     }
     if((this.props.data.scenarioDescription.length <= 0)){
      this.props.scenarioDescriptionValidationChange({scenarioDescriptionValidation : "Please enter scenario description"})
   }else{
    this.props.scenarioDescriptionValidationChange({scenarioDescriptionValidation : ""})

   }
    }
  }
  handleNext2(e){
    e.preventDefault();
    if((this.props.data.scenarioName.length > 0) && (this.props.data.sourceName.length > 0) && (this.props.data.extractorName.length > 0) && (this.props.data.extractorType.length > 0) && (this.props.data.infocubeName.length > 0) && (Object.values(this.props.data.metaSource).indexOf(true) !== -1) && ((Object.values(this.props.data.loadSettings).indexOf(true) !== -1))){
      
      this.props.screenTwoData({screenOne : false,screenTwo : false,screenThree :true})
      this.props.scenarioNameValidationChange({scenarioNameValidation : ""})
      this.props.sourceNameValidationChange({sourceNameValidation : ""})
      this.props.extractorNameValidationChange({extractorNameValidation : ""})
      this.props.extractorTypeValidationChange({extractorTypeValidation : ""})
      this.props.infocubeNameValidationChange({infocubeNameValidation : ""})
      this.props.metaSourceValidationChange({metaSourceValidation : ""})
      this.props.loadSettingsValidationChange({loadSettingsValidation : ""})

    }else{
      if((this.props.data.scenarioName.length <= 0)){
        this.props.scenarioNameValidationChange({scenarioNameValidation : "Please enter scenario name"})
     }else{
      this.props.scenarioNameValidationChange({scenarioNameValidation : ""})

     }
     if((this.props.data.sourceName.length <= 0)){
      this.props.sourceNameValidationChange({sourceNameValidation : "Please enter source name"})
   }else{
    this.props.sourceNameValidationChange({sourceNameValidation : ""})

   }
   if((this.props.data.extractorName.length <= 0)){
    this.props.extractorNameValidationChange({extractorNameValidation : "Please enter extractor name"})
 }else{
  this.props.extractorNameValidationChange({extractorNameValidation : ""})

 }
 if((this.props.data.extractorType.length <= 0)){
  this.props.extractorTypeValidationChange({extractorTypeValidation : "Please enter extractor type name"})
}else{
  this.props.extractorTypeValidationChange({extractorTypeValidation : ""})

}
if((this.props.data.infocubeName.length <= 0)){
  this.props.infocubeNameValidationChange({infocubeNameValidation : "Please enter infocube name"})
}else{
  this.props.infocubeNameValidationChange({infocubeNameValidation : ""})

}
if((Object.values(this.props.data.metaSource).indexOf(true) == -1)){
  this.props.metaSourceValidationChange({metaSourceValidation : "Please check meta source"})
}else{
  this.props.metaSourceValidationChange({metaSourceValidation : ""})

}
if((Object.values(this.props.data.loadSettings).indexOf(true) == -1)){
  this.props.loadSettingsValidationChange({loadSettingsValidation : "Please check load settings"})
}else{
  this.props.loadSettingsValidationChange({loadSettingsValidation : ""})

}
  }
  }
  handleNext3(e){
    e.preventDefault();
    console.log("next3 clicked")
    if(Object.values(this.props.data.docType).indexOf(true) !== -1){
      this.props.DocTypeValidationChange({docTypeValidation: ''})
      if(this.props.data.metaSource.radio1 == true){
        var metaDataSource = "File Input";
      }else{
        var metaDataSource = "Auto discovery from source system";
      }
      if(this.props.data.loadSettings.radio1 == true){
        var loadDataSettings = "Incremental load supported";
      }else{
        var loadDataSettings = "Incremental load feild";
      }
      if(this.props.data.docType.check1 == true){
        var checkbox1 = "check box1"
      }else{
        var checkbox1 = ""
      }
      if(this.props.data.docType.check2 == true){
        var checkbox2 = "check box2"
      }else{
        var checkbox2 = ""
      }
      if(this.props.data.docType.check3 == true){
        var checkbox3 = "check box3"
      }else{
        var checkbox3 = ''
      }
      if(this.props.data.docType.check4 == true){
        var checkbox4 = "check box4"
      }else{
        var checkbox4 = '';
      }
      if(this.props.data.docType.check5 == true){
        var checkbox5 = "check box5"
      }else{
        var checkbox5 = "" 
      }
      alert("Scenario name : " + this.props.data.scenarioName + " Scenario description : " + this.props.data.scenarioDescription + "Source name : "  + this.props.data.sourceName + "/n Extractor name : " + this.props.data.extractorName + "/n Extractor type : " +this.props.data.extractorName.type + "/n infocube name : " + this.props.data.infocubeName + "/n Meta data source : " + metaDataSource + "/n Incremental load data settings : " + loadDataSettings + "/n Check box checked : " + checkbox1 + ',' + checkbox2 + ',' + checkbox3 + ',' + checkbox4 + ',' + checkbox5  )
    }else{
    if(Object.values(this.props.data.docType).indexOf(true) === -1){
     this.props.DocTypeValidationChange({docTypeValidation: 'Please check atleast one check box'})
    }
    }
  }
  handleBack2(e){
    e.preventDefault();
    console.log("next2 clicked")
    this.props.screenTwoData({screenOne : false,screenTwo : true,screenThree :false})
  }
  handleBack1(e){
    e.preventDefault();
    console.log("next2 clicked")
    this.props.screenOneData({screenOne : true,screenTwo : false,screenThree :false})
  }
  handleScenarioNameChange(e){
    this.props.scenarioNameChange({scenarioName:e.target.value})
  }
  handleScenarioDescription(e){
    console.log("description change")
    this.props.scenarioDescriptonChange({scenarioDescription: e.target.value})
  }
  handleSourceNameChange(event){
    this.props.sourceNameChange({sourceName : event.target.value})
  }
  handleExtractorName(event){
    this.props.extractorNameChange({extractorName : event.target.value})
  }
  handleExtractorType(event){
    this.props.extractorTypeChange({extractorType : event.target.value})
  }
  handleInfocubename(event){
    this.props.infocubeNameChange({infocubeName : event.target.value})
  }
  handleDocType1(event){
    this.props.DocType1Change({docType : {...this.props.data.docType,check1: event.target.checked}})
  }
  handleDocType2(event){
    this.props.DocType2Change({docType : {...this.props.data.docType,check2: event.target.checked}})
  }
  handleDocType3(event){
    this.props.DocType3Change({docType : {...this.props.data.docType,check3: event.target.checked}})
  }
  handleDocType4(event){
    this.props.DocType4Change({docType : {...this.props.data.docType,check4: event.target.checked}})
  }
  handleDocType5(event){
    this.props.DocType5Change({docType : {...this.propps.data.docType,check5: event.target.checked}})
  }
  metaSource1(event){
    this.props.metaSource1Change({metaSource:{radio1 : event.target.checked,radio2 : !event.target.checked}})
    // console.log(this.state.metaSource)
  }
  metaSource2(event){
    this.props.metaSource2Change({metaSource:{radio2 : event.target.checked,radio1 : !event.target.checked}})
  }
  handleLoadSettings1(event){
    this.props.loadSettings1Change({loadSettings:{radio1 : event.target.checked, radio2 : !event.target.checked}})
  }
  handleLoadSettings2(event){
    this.props.loadSettings2Change({loadSettings:{radio2 : event.target.checked,radio1 : !event.target.checked}})
  }
  render() {
    return (
      <div className="App">
        
        <form>
          
          <div className='coreContentWrap' style={{display: this.props.data.screenOne ? 'block' : 'none'}}>
          <p>Scenario definition</p>
            <div className="queWrap" >
            <div className="spaceWrap">
              <label><b>Scenario name </b></label> <br />
              <select value={this.props.data.scenarioName} onChange={this.handleScenarioNameChange}>
                <option value="quote_end_customer">Quote_End_Customer</option>
                <option value="quote_end_customer1">Quote_End_Customer1</option>
                <option value="quote_end_customer2">Quote_End_Customer2</option>
              </select>
              <p className="validationStyle">{this.props.data.scenarioNameValidation}</p>
            </div>
            <div>
              <label><b>Scenario Description</b></label> <br />
              <input type="text" placeholder="Enter Description" value={this.props.data.scenarioDescription} onChange= {this.handleScenarioDescription} /> 
              <p className="validationStyle">{this.props.data.scenarioDescriptionValidation}</p>
            </div>
            
            </div>
            <p className="validationStyle">{this.props.data.screenOneValidation}</p>
            <div className="next1">
              <button onClick={this.handleNext1}>NEXT</button>
            </div>
          </div>
          <div className='queWrap2 coreContentWrap' style={{display: this.props.data.screenTwo ? 'block' : 'none'}}>
            <div>
            <p>Scenario Extractor</p>
              <div className="queWrap">
                <div className="spaceWrap">
                  <label><b>Scenario name</b></label> <br />
                  <select value={this.props.data.scenarioName} onChange={this.handleScenarioNameChange}>
                    <option value="quote_end_customer">Quote_End_Customer</option>
                    <option value="quote_end_customer1">Quote_End_Customer1</option>
                    <option value="quote_end_customer2">Quote_End_Customer2</option>
                  </select>
                  <p className="validationStyle">{this.props.data.scenarioNameValidation}</p>
                </div>
                <div>
                  <label><b>Source Name</b></label> <br />
                  <select value={this.props.data.sourceName} onChange={this.handleSourceNameChange}>
                    <option value="">Souce name</option>
                    <option value="sourceName1">Source name1</option>
                    <option value="sourceName2">Source name2</option>
                  </select>
                  <p className="validationStyle">{this.props.data.sourceNameValidation}</p>
                </div>
              </div>
              <div className="queWrap">
                <div className="spaceWrap">
                  <label><b>Extractor name</b></label> <br />
                  <input  value={this.props.data.extractorName} onChange={this.handleExtractorName} />
                  <p className="validationStyle">{this.props.data.extractorNameValidation}</p>
                </div>
                <div>
                  <label><b>Extractor type</b></label> <br />
                  <select value={this.props.data.extractorType} onChange={this.handleExtractorType}>
                    <option value="">Extractor type</option>
                    <option value="extractorType1">Extractor type1</option>
                    <option value="extractorType2">Extractor type2</option>
                  </select>
                  <p className="validationStyle">{this.props.data.extractorTypeValidation}</p>
                </div>
              </div>
              <div className="queWrap">
                <div>
                  <label><b>Infocube name</b></label> <br />
                  <select value={this.props.data.infocubeName} onChange={this.handleInfocubename}>
                    <option value="">Infocube name</option>
                    <option value="infocubeName1">Infocube name1</option>
                    <option value="infocubeName2">Infocube name2</option>
                  </select>
                  <p className="validationStyle">{this.props.data.infocubeNameValidation}</p>
                </div>
                
              </div>
              <div>
                <p><b>Meta data source</b></p>
                <div>
                  <label><input className="radioCustom" type="radio" name="metaSource" value={this.props.data.metaSource.radio1} onChange = {this.metaSource1} /> File Input</label>
                  <label><input className="radioCustom" type="radio" name='metaSource' value={this.props.data.metaSource.radio2} onChange = {this.metaSource2} />Auto discover from system</label>
                </div> 
                <p className="validationStyle">{this.props.data.metaSourceValidation}</p> 
              </div>
              <div>
                <div>
                  <p><b>Incremental data load settings</b></p> <br />
                  <div>
                    <div>
                    <label><input className="radioCustom" type="radio" name="loadSettings" value={this.props.data.loadSettings.radio1} onChange={this.handleLoadSettings1} /> Incremental load supported</label>
                    
                    </div>
                    <div>
                    <label><input type="radio" className="radioCustom" name='loadSettings' value={this.props.data.loadSettings.radio2} onChange={this.handleLoadSettings2} />Incremental load field</label>
                    <p className="validationStyle">{this.props.data.loadSettingsValidation}</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="validationStyle">{this.props.data.screenTwoValidation}</p>
              <div className='queWrapButton'>
              <button onClick={this.handleBack1}>BACK</button>
              <button onClick={this.handleNext2}>NEXT</button>
              </div>
            </div>
          </div>
          <div className="queWrap3 coreContentWrap" style={{display: this.props.data.screenThree ? 'block' : 'none'}}>
            <div className="queWrap">
              <div className="spaceWrap">
                <p><b>Scenario name</b></p>
                <p>{this.props.data.scenarioName}</p>
              </div>
              
            </div>
            <div>
                <p><b>Source name</b></p>
                <p>{this.props.data.sourceName}</p>
              </div>
            <div>
              <p><b>Select document type</b></p>
            </div>
            <div className="queWrap">
              <div>
              <div>
                <label><input className="radioCustom" type="checkbox" name="mapping" value={this.props.data.docType.check1} onChange={this.handleDocType1}  /> checkbox1</label>
              </div>
              <div>
              <label><input className="radioCustom" type="checkbox" name="mapping" value={this.props.data.docType.check2} onChange={this.handleDocType2} /> checkbox2</label>
              </div>
              <div>
              <label><input className="radioCustom" type="checkbox" name="mapping" value={this.props.data.docType.check3} onChange={this.handleDocType3}  /> checkbox3</label>
              </div>
              <div>
              <label><input className="radioCustom" type="checkbox" name="mapping" value={this.props.data.docType.check4} onChange={this.handleDocType4}  /> checkbox4</label>
              </div>
              <div>
              <label><input className="radioCustom" type="checkbox" name="mapping" value= {this.props.data.docType.check5} onChange={this.handleDocType5} /> checkbox5</label>
              </div>
              <p className="validationStyle">{this.props.data.docTypeValidation}</p>
              </div>              
            </div>
            <p className="validationStyle">{this.props.data.screenThreeValidation}</p>
            <div className='queWrapButton'>
              <button onClick={this.handleBack2}>Back</button>
              <button onClick={this.handleNext3}>NEXT</button>
            </div>
          </div>
          
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  console.log(state.dataList)
  return {data:state.dataList}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({screenOneData,screenTwoData,screenThreeData,scenarioNameChange,scenarioDescriptonChange,sourceNameChange,extractorNameChange,extractorTypeChange,infocubeNameChange,metaSource1Change,metaSource2Change,loadSettings1Change,loadSettings2Change,scenarioDescriptionValidationChange,scenarioNameValidationChange,sourceNameValidationChange,extractorNameValidationChange,extractorTypeValidationChange,infocubeNameValidationChange,metaSourceValidationChange,loadSettingsValidationChange,DocTypeValidationChange,DocType1Change,DocType2Change,DocType3Change,DocType4Change,DocType5Change},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
