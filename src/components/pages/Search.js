import React, { Component } from 'react';
import '../../App.css'
import CardsSearch from '../util/CardsSearch';
export default class Search extends Component {
  // async componentDidMount(){
  //   var select = document.getElementById('select_country').value
  //   this.setState({"inputValue":select})
  //   var getGlobalData = await this.fetchData(`https://covid-19.dataflowkit.com/v1/${select}`);
  //     this.setState({allData:getGlobalData})
  // }
  changeToNum = (StringNum) =>{
    
    var arryNum = StringNum.split(',');
    var concatNum = arryNum.join("");
    if(concatNum === "") {
      return 0;
    }else{
      return parseInt(concatNum);
    }
}
    state = {
        allSearchData: [],
        inputValue:"none"
    }
      fetchData = async (url) =>{
        var fetchedReport = await fetch(url,{
            method: "GET",
           
        })
       var fetchData = await fetchedReport.json()
        return fetchData
    }
   async handleQuery(id,e){
     this.setState({"inputValue":e})
      var getGlobalData = await this.fetchData(`https://covid-19.dataflowkit.com/v1/${e}`);
        let allGetData = []
        allGetData.push(getGlobalData);
        this.setState({allSearchData:allGetData})
    }
 
    render() {
      
        return (
            <div className="search-cont">
                <h3 className="sect-title">Search</h3>
                <div className="search-input-cont">
                <select id="select_country" value={this.state.inputValue} onChange={(e) => this.handleQuery("1", e.target.value)} >
                  <option value="world">None</option>
                  <option value="World">World</option>
                  <option value="USA">USA</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Russia">Russia</option>
                  <option value="Spain">Spain</option>
                  <option value="UK">UK</option>
                  <option value="India">India</option>
                  <option value="Italy">Italy</option>
                  <option value="Peru">Peru</option>
                  <option value="Germany">Germany</option>
                  <option value="Iran">Iran</option>
                  <option value="Turkey">Turkey</option>
                  <option value="France">France</option>
                  <option value="Chile">Chile</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Saudia Arabia">Saudia Arabia</option>
                  <option value="Canada">Canada</option>
                  <option value="China">China</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Baralus">Baralus</option>
                  <option value="South Africa">South Africa</option>
                  <option value="NetherLands">NetherLands</option>
                  <option value="Sween">Sween</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Colombia">Colombia</option>
                  <option value="UAE">UAE</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Portugai">Portugai</option>
                  <option value="Egypt">Egypt</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="Poland">Poland</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Argentine">Argentine</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Romania">Romania</option>
                  <option value="Dominican Republic">Dominican Republic</option>
                  <option value="Isreal">Isreal</option>
                  <option value="Japan">Japan</option>
                  <option value="Austria">Austria</option>
                  <option value="Oman">Oman</option>
                  <option value="Panama">Panama</option>
                  <option value="Bahrian">Bahrian</option>
                  <option value="Bolivia">Bolivia</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Kazakhstan">Kazakhstan</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Iraq">Iraq</option>
                  <option value="Denmark">Denmark</option>
                  <option value="Serbia">Serbia</option>
                  <option value="S. Korea">S. Korea</option>
                  <option value="Algeria">58</option>
                  <option value="Moldova">Moldova</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Czechia">Czechia</option>
                  <option value="Norway">Norway</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Morocco">Morocco</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Azerbaijan">Azerbaijan</option>
                  <option value="Australia">Australia</option>
                  <option value="Guatemale">Guatemale</option>
                  <option value="Finland">69</option>
                  <option value="Honduras">Honduras</option>
                  <option value="Sudan">Sudan</option>
                  <option value="Tajikistan">Tajikistan</option>
                  <option value="Uzbekistan">Uzbekistan</option>
                  <option value="Senegal">Senegal</option>
                  <option value="Djitbouti">Djitbouti</option>
                  <option value="Guinea">Guinea</option>
                  <option value="DRC">DRC</option>
                  <option value="Luxembourg">Luxembourg</option>
                  <option value="Hungary">Hungary</option>
                  <option value="Ivory Coast">Ivory Coast</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Haithi">Haithi</option>
                  <option value="El Salvador">El Salvador</option>
                  <option value="Gabon">Gabon</option>
                  <option value="North Macedonia">North Macedonia</option>
                  <option value="Greece">Greece</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Bulgeria">Bulgeria</option>
                  <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                  <option value="Venezuela">Venezuela</option>
                  <option value="Somalia">Somalia</option>
                  <option value="Croatia">Croatia</option>
                  <option value="Cuba">Cuba</option>
                  <option value="Mayotte">Mayotte</option>
                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="Estonia">Estonia</option>
                  <option value="Maldives">Maldives</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="Ice Land">Ice Land</option>
                  <option value="Lithunia">Lithunia</option>
                  <option value="CAR">CAR</option>
                  <option value="South Sudan">South Suda</option>
                  <option value="Mali">Mali</option>
                  <option value="Slovikia">Slovikia</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Slovenia">Slovenia</option>
                  <option value="Guinea-Bissau">Guinea-Bissau</option>
                  <option value="Lebanon">Lebanon</option>
                  <option value="Costa Rica">Costa Rica</option>
                  <option value="Equatorial Guinea">Equatorial Guinea</option>
                  <option value="Albania">Albania</option>
                  <option value="paraguay">paraguay</option>
                  <option value="Nicaragus">Nicaragus</option>
                  <option value="Hong Kong">Hong Kong</option>
                  <option value="Zambia">Zambia</option>
                  <option value="Latvia">Latvia</option>
                  <option value="Tunisia">Tunisia</option>
                  <option value="Madagascar">Madagascar</option>
                  <option value="Mauritania">Mauritania</option>
                  <option value="Niger">Niger</option>
                  <option value="Sierra Leone">Sierra Leone</option>
                  <option value="Cyprus">Cyprus</option>
                  <option value="Burkina Faso">Burkina Faso</option>
                  <option value="Andorra">Andorra</option>
                  <option value="Uruguary">Uruguary</option>
                  <option value="Chad">Chad</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Jordan">Jordan</option>
                  <option value="Diamond Princess">Diamond Princess</option>
                  <option value="French Guiana">French Guiana</option>
                  <option value="Congo">Congo</option>
                  <option value="San Marino">San Marino</option>
                  <option value="Malta">Malta</option>
                  <option value="Uganda">Uganda</option>
                  <option value="Jamaica">Jamaica</option>
                  <option value="Channel Islands">Channel Islands</option>
                  <option value="Cabo Verde">Cabo Verde</option>
                  <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                  <option value="Tanzania">Tanzania</option>
                  <option value="Togo">Togo</option>
                  <option value="Yemen">Yemen</option>
                  <option value="Réunion">Réunion</option>
                  <option value="Palestine">Palestine</option>
                  <option value="Taiwan">Taiwan</option>
                  <option value="Rwanda">Rwanda</option>
                  <option value="Malawi">Malawi</option>
                  <option value="Mozambique">Mozambique</option>
                  <option value="Liberia">Liberia</option>
                  <option value="Maturitius">Maturitius</option>
                  <option value="Isle of Man">Isle of Man</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Montenegro">Montenegro</option>
                  <option value="Zimbabwe">Zimbabwe</option>
                  <option value="Benin">Benin</option>
                  <option value="Libya">Libya</option>
                  <option value="Myanmar">Myanmar</option>
                  <option value="Martinique">Martinique</option>
                  <option value="Mongolia">Mongolia</option>
                  <option value="Faeroe Islands">Faeroe Islands</option>
                  <option value="Gibraltar">Gibraltar</option>
                  <option value="Guadeloupe">Guadeloupe</option>
                  <option value="Cayman Islands">Cayman Islands</option>
                  <option value="Guyana">Guyana</option>
                  <option value="Bermuda">Bermuda</option>
                  <option value="Syria">Syria</option>
                  <option value="Brunei">Brunei</option>
                  <option value="Comoros">Comoros</option>
                  <option value="Cambodia">Cambodia</option>
                  <option value="Suriname">Suriname</option>
                  <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                  <option value="Bahamas">Bahamas</option>
                  <option value="Aruba">Aruba</option>
                  <option value="Monaco">Monaco</option>
                  <option value="Barbados">Barbados</option>
                  <option value="Angola">Angola</option>
                  <option value="Burundi">Burundi</option>
                  <option value="Liechtenstein">Liechtenstein</option>
                  <option value="Sint Maarten">Sint Maarten</option>
                  <option value="French Polynesia">French Polynesia</option>
                  <option value="Bhutan">Bhutan</option>
                  <option value="Macao">Macao</option>
                  <option value="Saint Martin">Saint Martin</option>
                  <option value="Botswana">Botswana</option>
                  <option value="Eritrea">Eritrea</option>
                  <option value="Namibia">Namibia</option>
                  <option value="St. Vincent Grenadines">St. Vincent Grenadines</option>
                  <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                  <option value="Gambia">Gambia</option>
                  <option value="Timor-Leste">Timor-Leste</option>
                  <option value="Grenada">Grenada</option>
                  <option value="Curaçao">Curaçao</option>
                  <option value="New Caledonia">New Caledonia</option>
                  <option value="Belize">Belize</option>
                  <option value="Laos">Laos</option>
                  <option value="Saint Lucia">Saint Lucia</option>
                  <option value="Dominica">Dominica</option>
                  <option value="Fiji">Fiji</option>
                  <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                  <option value="Falkland Islands">Falkland Islands</option>
                  <option value="Greenland">Greenland</option>
                  <option value="Turks and Caicos">Turks and Caicos</option>
                  <option value="Vatican City">Vatican City</option>
                  <option value="Montserrat">Montserrat</option>
                  <option value="Seychelles">Seychelles</option>
                  <option value="MS Zaandam">MS Zaandam</option>
                  <option value="Western Sahara">Western Sahara</option>
                  <option value="British Virgin Islands">British Virgin Islands</option>
                  <option value="Papua New Guinea">Papua New Guinea</option>
                  <option value="Caribbean Netherlands">Caribbean Netherlands</option>
                  <option value="St. Barth">St. Barth</option>
                  <option value="Lesotho">Lesotho</option>
                  <option value="Anguilla">Anguilla</option>
                  <option value="Saint Pierre Miquelon">Saint Pierre Miquelon</option>
                </select>
                </div>
                <CardsSearch data={this.state.allSearchData} changeNum={this.changeToNum} title={this.state.inputValue} />
            </div>
        )
    }
}
