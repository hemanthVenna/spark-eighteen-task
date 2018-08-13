import React, { Component } from 'react';
import '../App.css';

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
    this.state = {
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
      screenOneValidation : '',
      screenTwoValidation : '',
      screenThreeValidation : ''
    }
  }
  handleNext1(e){
    e.preventDefault();
    console.log("next1 clicked")
    if((this.state.scenarioName.length > 0) && (this.state.scenarioDescription.length > 0)){
     
      this.setState({
        screenOne : false,
        screenTwo : true,
        screenThree :false
      })
    }else{
      console.log(this.state.scenarioName.length)
      console.log(this.state.scenarioDescription.length)
      
      console.log("next fail");
      this.setState({screenOneValidation : "Please enter all input feilds."})
    }
  }
  handleNext2(e){
    e.preventDefault();
    console.log(this.state.metaSource)
    console.log("next2 clicked")
    console.log(Object.values(this.state.metaSource).length)
    if((this.state.scenarioName.length > 0) && (this.state.sourceName.length > 0) && (this.state.extractorName.length > 0) && (this.state.extractorType.length > 0) && (this.state.infocubeName.length > 0) && (Object.values(this.state.metaSource).indexOf(true) !== -1) && ((Object.values(this.state.loadSettings).indexOf(true) !== -1))){
      
      this.setState({
        screenOne : false,
        screenTwo : false,
        screenThree :true
      })
    }else{
      console.log("next2 fail")
      this.setState({screenTwoValidation : "Please enter all input feilds."})
  }
  }
  handleNext3(e){
    e.preventDefault();
    console.log("next3 clicked")
    if(Object.values(this.state.docType).indexOf(true) !== -1){
      if(this.state.metaSource.radio1 == true){
        var metaDataSource = "File Input";
      }else{
        var metaDataSource = "Auto discovery from source system";
      }
      if(this.state.loadSettings.radio1 == true){
        var loadDataSettings = "Incremental load supported";
      }else{
        var loadDataSettings = "Incremental load feild";
      }
      if(this.state.docType.check1 == true){
        var checkbox1 = "check box1"
      }else{
        var checkbox1 = ""
      }
      if(this.state.docType.check2 == true){
        var checkbox2 = "check box2"
      }else{
        var checkbox2 = ""
      }
      if(this.state.docType.check3 == true){
        var checkbox3 = "check box3"
      }else{
        var checkbox3 = ''
      }
      if(this.state.docType.check4 == true){
        var checkbox4 = "check box4"
      }else{
        var checkbox4 = '';
      }
      if(this.state.docType.check5 == true){
        var checkbox5 = "check box5"
      }else{
        var checkbox5 = "" 
      }
      alert("Scenario name : " + this.state.scenarioName + " Scenario description : " + this.state.scenarioDescription + "Source name : "  + this.state.sourceName + "/n Extractor name : " + this.state.extractorName + "/n Extractor type : " +this.state.extractorName.type + "/n infocube name : " + this.state.infocubeName + "/n Meta data source : " + metaDataSource + "/n Incremental load data settings : " + loadDataSettings + "/n Check box checked : " + checkbox1 + ',' + checkbox2 + ',' + checkbox3 + ',' + checkbox4 + ',' + checkbox5  )
    }else{
      this.setState({screenThreeValidation : "Please check at least one check box."})
    }
  }
  handleBack2(e){
    e.preventDefault();
    console.log("next2 clicked")
    this.setState({
      screenOne : false,
      screenTwo : true,
      screenThree :false
    })
  }
  handleBack1(e){
    e.preventDefault();
    console.log("next2 clicked")
    this.setState({
      screenOne : true,
      screenTwo : false,
      screenThree :false,

    })
  }
  handleScenarioNameChange(event){
    this.setState({scenarioName:event.target.value})
  }
  handleScenarioDescription(event){
    console.log("description change")
    this.setState({scenarioDescription : event.target.value})
  }
  handleSourceNameChange(event){
    this.setState({sourceName : event.target.value})
  }
  handleExtractorName(event){
    this.setState({extractorName : event.target.value})
  }
  handleExtractorType(event){
    this.setState({extractorType : event.target.value})
  }
  handleInfocubename(event){
    this.setState({infocubeName : event.target.value})
  }
  handleDocType1(event){
    this.setState({docType : {...this.state.docType,check1: event.target.checked}})
  }
  handleDocType2(event){
    this.setState({docType : {...this.state.docType,check2: event.target.checked}})
  }
  handleDocType3(event){
    this.setState({docType : {...this.state.docType,check3: event.target.checked}})
  }
  handleDocType4(event){
    this.setState({docType : {...this.state.docType,check4: event.target.checked}})
  }
  handleDocType5(event){
    this.setState({docType : {...this.state.docType,check5: event.target.checked}})
  }
  metaSource1(event){
    this.setState({metaSource : {...this.state.metaSource,radio1 : event.target.checked,radio2 : !event.target.checked}})
    console.log(this.state.metaSource)
  }
  metaSource2(event){
    this.setState({metaSource : {...this.state.metaSource,radio2 : event.target.checked,radio1 : !event.target.checked}})
  }
  handleLoadSettings1(event){
    this.setState({loadSettings : {...this.state.loadSettings,radio1 : event.target.checked, radio2 : !event.target.checked}})
    console.log(this.state.loadSettings)
  }
  handleLoadSettings2(event){
    this.setState({loadSettings : {...this.state.loadSettings,radio2 : event.target.checked,radio1 : !event.target.checked}})
    console.log(this.state.loadSettings)
  }
  render() {
    return (
      <div className="App">
        
        <form>
          
          <div className='coreContentWrap' style={{display: this.state.screenOne ? 'block' : 'none'}}>
          <p>Scenario definition</p>
            <div className="queWrap" >
            <div className="spaceWrap">
              <label>Scenario name</label> <br />
              <select value={this.state.scenarioName} onChange={this.handleScenarioNameChange}>
                <option value="quote_end_customer">Quote_End_Customer</option>
                <option value="quote_end_customer1">Quote_End_Customer1</option>
                <option value="quote_end_customer2">Quote_End_Customer2</option>
              </select>
            </div>
            <div>
              <label>Scenario Description</label> <br />
              <input type="text" placeholder="Enter Description" value={this.state.scenarioDescription} onChange= {this.handleScenarioDescription} /> 
            </div>
            
            </div>
            <p className="validationStyle">{this.state.screenOneValidation}</p>
            <div className="next1">
              <button onClick={this.handleNext1}>NEXT</button>
            </div>
          </div>
          <div className='queWrap2 coreContentWrap' style={{display: this.state.screenTwo ? 'block' : 'none'}}>
            <div>
              <div className="queWrap">
                <div className="spaceWrap">
                  <label>Scenario name</label> <br />
                  <select value={this.state.scenarioName} onChange={this.handleScenarioNameChange}>
                    <option value="quote_end_customer">Quote_End_Customer</option>
                    <option value="quote_end_customer1">Quote_End_Customer1</option>
                    <option value="quote_end_customer2">Quote_End_Customer2</option>
                  </select>
                </div>
                <div>
                  <label>Source Name</label> <br />
                  <select value={this.state.sourceName} onChange={this.handleSourceNameChange}>
                    <option value="">Souce name</option>
                    <option value="sourceName1">Source name1</option>
                    <option value="sourceName2">Source name2</option>
                  </select>
                </div>
              </div>
              <div className="queWrap">
                <div className="spaceWrap">
                  <label>Extractor name</label> <br />
                  <input  value={this.state.extractorName} onChange={this.handleExtractorName} />
                </div>
                <div>
                  <label>Extractor type</label> <br />
                  <select value={this.state.extractorType} onChange={this.handleExtractorType}>
                    <option value="">Extractor type</option>
                    <option value="extractorType1">Extractor type1</option>
                    <option value="extractorType2">Extractor type2</option>
                  </select>
                </div>
              </div>
              <div className="queWrap">
                <div>
                  <label>Infocube name</label> <br />
                  <select value={this.state.infocubeName} onChange={this.handleInfocubename}>
                    <option value="">Infocube name</option>
                    <option value="infocubeName1">Infocube name1</option>
                    <option value="infocubeName2">Infocube name2</option>
                  </select>
                </div>
                
              </div>
              <div>
                <p>Meta data source</p>
                <div>
                  <label><input className="radioCustom" type="radio" name="metaSource" value={this.state.metaSource.radio1} onChange = {this.metaSource1} /> File Input</label>
                  <label><input className="radioCustom" type="radio" name='metaSource' value={this.state.metaSource.radio2} onChange = {this.metaSource2} />Auto discover from system</label>
                </div>  
              </div>
              <div>
                <div>
                  <p>Incremental data load settings</p> <br />
                  <div>
                    <div>
                    <label><input className="radioCustom" type="radio" name="loadSettings" value={this.state.loadSettings.radio1} onChange={this.handleLoadSettings1} /> Incremental load supported</label>
                    </div>
                    <div>
                    <label><input type="radio" className="radioCustom" name='loadSettings' value={this.state.loadSettings.radio2} onChange={this.handleLoadSettings2} />Incremental load field</label>
                    </div>
                  </div>
                </div>
              </div>
              <p className="validationStyle">{this.state.screenTwoValidation}</p>
              <div className='queWrapButton'>
              <button onClick={this.handleBack1}>BACK</button>
              <button onClick={this.handleNext2}>NEXT</button>
              </div>
            </div>
          </div>
          <div className="queWrap3 coreContentWrap" style={{display: this.state.screenThree ? 'block' : 'none'}}>
            <div className="queWrap">
              <div>
                <p>Scenario name</p>
                <p>{this.state.scenarioName}</p>
              </div>
              <div>
                <p>Source name</p>
                <p>{this.state.sourceName}</p>
              </div>
            </div>
            <div>
              <p>Select document type</p>
            </div>
            <div className="queWrap">
              <div>
              <div>
                <label><input className="radioCustom" type="checkbox" name="mapping" value={this.state.docType.check1} onChange={this.handleDocType1}  /> checkbox1</label>
              </div>
              <div>
              <label><input className="radioCustom" type="checkbox" name="mapping" value={this.state.docType.check2} onChange={this.handleDocType2} /> checkbox2</label>
              </div>
              <div>
              <label><input className="radioCustom" type="checkbox" name="mapping" value={this.state.docType.check3} onChange={this.handleDocType3}  /> checkbox3</label>
              </div>
              <div>
              <label><input className="radioCustom" type="checkbox" name="mapping" value={this.state.docType.check4} onChange={this.handleDocType4}  /> checkbox4</label>
              </div>
              <div>
              <label><input className="radioCustom" type="checkbox" name="mapping" value= {this.state.docType.check5} onChange={this.handleDocType5} /> checkbox5</label>
              </div>
              </div>              
            </div>
            <p className="validationStyle">{this.state.screenThreeValidation}</p>
            <div className='queWrap'>
              <button onClick={this.handleBack2}>Back</button>
              <button onClick={this.handleNext3}>NEXT</button>
              </div>
          </div>
          
        </form>
      </div>
    );
  }
}

export default App;
