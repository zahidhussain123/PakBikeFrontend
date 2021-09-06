import React from "react";
import axios from "axios";
import {useState} from 'react';




const Postadd = () => {
  setTimeout(() => {
    debugger;
    var elem = document.getElementById("loginButton");
    if (elem) {
      elem.textContent = "Log Out";
      elem.style.marginRight = "4em";
    }

    var elem2 = document.getElementById("signupButton");
    if (elem2) {
      elem2.parentNode.removeChild(elem2);
    }

    if (localStorage.getItem("token")) {
    } else {
      document.getElementById("loginButton").click();
    }
  }, 0);
  // const [title, setTitle] = useState([]);
  //   const [brand, setBrand] = useState("");
  return (
    <div className="Add">
      <div className="container">
        <div className="full_page">
          <div className="small_add">
            <div className="head_add">Bike information</div>
            <div class="add_form">
              <form onSubmit={(e) => postad(e)}>
                {/* title */}
                <label className="box_text" for="lname">
                  Title
                </label>
                <div className="post_box_control2">
                  <input
                    type="text"
                    id="inputtitle"
                    name="millage"
                    maxLength={35}
                    // pattern="[+-]?\d+(?:[.,]\d+)?"
                    placeholder="Title / Heading"
                  />
                </div>
                {/* brand */}
                {/* <label className="box_text" for="fname">
                  Brand
                </label>
                <div className="post_box_control2">
                  <input
                    type="text"
                    id="inputbrand"
                    name="make/model"
                    placeholder="Bike Brand"
                  />
                </div> */}
                {/*  */}
                <label className="box_text" for="fname">
                  Brand
                </label>
                <div className="post_box_control2">
                  <select
                    type="text"
                    id="inputbrand"
                    name="make/model"
                    placeholder="Bike Brand"
                  >
                    <option value="Brands">Brands</option>
                    <option value="Honda">Honda</option>
                    <option value="Yamah">Yamah</option>
                    <option value="BMW">BMW</option>
                    <option value="Unique">Unique</option>
                    <option value="Hi Speed">Hi Speed</option>
                    <option value="Kawasaki">Kawasaki</option>
                    <option value="Hero">Hero</option>
                    <option value="United">United</option>
                  </select>
                </div>
                {/* country form box */}
                <label className="box_text" for="country">
                  City
                </label>
                <div className="box_form">
                  <select
                    className="post_box_control"
                    id="inputcity"
                    name="country"
                  >
                    <option value="city">City</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="" disabled>
                      Punjab Cities
                    </option>
                    <option value="Ahmed Nager Chatha">
                      Ahmed Nager Chatha
                    </option>
                    <option value="Ahmadpur East">Ahmadpur East</option>
                    <option value="Ali Khan Abad">Ali Khan Abad</option>
                    <option value="Alipur">Alipur</option>
                    <option value="Arifwala">Arifwala</option>
                    <option value="Attock">Attock</option>
                    <option value="Bhera">Bhera</option>
                    <option value="Bhalwal">Bhalwal</option>
                    <option value="Bahawalnagar">Bahawalnagar</option>
                    <option value="Bahawalpur">Bahawalpur</option>
                    <option value="Bhakkar">Bhakkar</option>
                    <option value="Burewala">Burewala</option>
                    <option value="Chillianwala">Chillianwala</option>
                    <option value="Chakwal">Chakwal</option>
                    <option value="Chichawatni">Chichawatni</option>
                    <option value="Chiniot">Chiniot</option>
                    <option value="Chishtian">Chishtian</option>
                    <option value="Daska">Daska</option>
                    <option value="Darya Khan">Darya Khan</option>
                    <option value="Dera Ghazi Khan">Dera Ghazi Khan</option>
                    <option value="Dhaular">Dhaular</option>
                    <option value="Dina">Dina</option>
                    <option value="Dinga">Dinga</option>
                    <option value="Dipalpur">Dipalpur</option>
                    <option value="Faisalabad">Faisalabad</option>
                    <option value="Ferozewala">Ferozewala</option>
                    <option value="Fateh Jhang">Fateh Jang</option>
                    <option value="Ghakhar Mandi">Ghakhar Mandi</option>
                    <option value="Gojra">Gojra</option>
                    <option value="Gujranwala">Gujranwala</option>
                    <option value="Gujrat">Gujrat</option>
                    <option value="Gujar Khan">Gujar Khan</option>
                    <option value="Hafizabad">Hafizabad</option>
                    <option value="Haroonabad">Haroonabad</option>
                    <option value="Hasilpur">Hasilpur</option>
                    <option value="Haveli Lakha">Haveli Lakha</option>
                    <option value="Jatoi">Jatoi</option>
                    <option value="Jalalpur">Jalalpur</option>
                    <option value="Jattan">Jattan</option>
                    <option value="Jampur">Jampur</option>
                    <option value="Jaranwala">Jaranwala</option>
                    <option value="Jhang">Jhang</option>
                    <option value="Jhelum">Jhelum</option>
                    <option value="Kalabagh">Kalabagh</option>
                    <option value="Karor Lal Esan">Karor Lal Esan</option>
                    <option value="Kasur">Kasur</option>
                    <option value="Kamalia">Kamalia</option>
                    <option value="Kamoke">Kamoke</option>
                    <option value="Khanewal">Khanewal</option>
                    <option value="Khanpur">Khanpur</option>
                    <option value="Kharian">Kharian</option>
                    <option value="Khushab">Khushab</option>
                    <option value="Kot Addu">Kot Addu</option>
                    <option value="Jauharabad">Jauharabad</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Lalamusa">Lalamusa</option>
                    <option value="Layyah">Layyah</option>
                    <option value="Liaquat Pur">Liaquat Pur</option>
                    <option value="Lodhran">Lodhran</option>
                    <option value="Malakwal">Malakwal</option>
                    <option value="Mamoori">Mamoori</option>
                    <option value="Mailsi">Mailsi</option>
                    <option value="Mandi Bahauddin">Mandi Bahauddin</option>
                    <option value="Mian Channu">Mian Channu</option>
                    <option value="Mianwali">Mianwali</option>
                    <option value="Multan">Multan</option>
                    <option value="Murree">Murree</option>
                    <option value="Muridke">Muridke</option>
                    <option value="Mianwali Bangla">Mianwali Bangla</option>
                    <option value="Muzaffargarh">Muzaffargarh</option>
                    <option value="Narowal">Narowal</option>
                    <option value="Nankana Sahib">Nankana Sahib</option>
                    <option value="Okara">Okara</option>
                    <option value="Renala Khurd">Renala Khurd</option>
                    <option value="Pakpattan">Pakpattan</option>
                    <option value="Pattoki">Pattoki</option>
                    <option value="Pir Mahal">Pir Mahal</option>
                    <option value="Qaimpur">Qaimpur</option>
                    <option value="Qila Didar Singh">Qila Didar Singh</option>
                    <option value="Rabwah">Rabwah</option>
                    <option value="Raiwind">Raiwind</option>
                    <option value="Rajanpur">Rajanpur</option>
                    <option value="Rahim Yar Khan">Rahim Yar Khan</option>
                    <option value="Rawalpindi">Rawalpindi</option>
                    <option value="Sadiqabad">Sadiqabad</option>
                    <option value="Safdarabad">Safdarabad</option>
                    <option value="Sahiwal">Sahiwal</option>
                    <option value="Sangla Hill">Sangla Hill</option>
                    <option value="Sarai Alamgir">Sarai Alamgir</option>
                    <option value="Sargodha">Sargodha</option>
                    <option value="Shakargarh">Shakargarh</option>
                    <option value="Sheikhupura">Sheikhupura</option>
                    <option value="Sialkot">Sialkot</option>
                    <option value="Sohawa">Sohawa</option>
                    <option value="Soianwala">Soianwala</option>
                    <option value="Siranwali">Siranwali</option>
                    <option value="Talagang">Talagang</option>
                    <option value="Taxila">Taxila</option>
                    <option value="Toba Tek Singh">Toba Tek Singh</option>
                    <option value="Vehari">Vehari</option>
                    <option value="Wah Cantonment">Wah Cantonment</option>
                    <option value="Wazirabad">Wazirabad</option>
                    <option value="" disabled>
                      Sindh Cities
                    </option>
                    <option value="Badin">Badin</option>
                    <option value="Bhirkan">Bhirkan</option>
                    <option value="Rajo Khanani">Rajo Khanani</option>
                    <option value="Chak">Chak</option>
                    <option value="Dadu">Dadu</option>
                    <option value="Digri">Digri</option>
                    <option value="Diplo">Diplo</option>
                    <option value="Dokri">Dokri</option>
                    <option value="Ghotki">Ghotki</option>
                    <option value="Haala">Haala</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Islamkot">Islamkot</option>
                    <option value="Jacobabad">Jacobabad</option>
                    <option value="Jamshoro">Jamshoro</option>
                    <option value="Jungshahi">Jungshahi</option>
                    <option value="Kandhkot">Kandhkot</option>
                    <option value="Kandiaro">Kandiaro</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Kashmore">Kashmore</option>
                    <option value="Keti Bandar">Keti Bandar</option>
                    <option value="Khairpur">Khairpur</option>
                    <option value="Kotri">Kotri</option>
                    <option value="Larkana">Larkana</option>
                    <option value="Matiari">Matiari</option>
                    <option value="Mehar">Mehar</option>
                    <option value="Mirpur Khas">Mirpur Khas</option>
                    <option value="Mithani">Mithani</option>
                    <option value="Mithi">Mithi</option>
                    <option value="Mehrabpur">Mehrabpur</option>
                    <option value="Moro">Moro</option>
                    <option value="Nagarparkar">Nagarparkar</option>
                    <option value="Naudero">Naudero</option>
                    <option value="Naushahro Feroze">Naushahro Feroze</option>
                    <option value="Naushara">Naushara</option>
                    <option value="Nawabshah">Nawabshah</option>
                    <option value="Nazimabad">Nazimabad</option>
                    <option value="Qambar">Qambar</option>
                    <option value="Qasimabad">Qasimabad</option>
                    <option value="Ranipur">Ranipur</option>
                    <option value="Ratodero">Ratodero</option>
                    <option value="Rohri">Rohri</option>
                    <option value="Sakrand">Sakrand</option>
                    <option value="Sanghar">Sanghar</option>
                    <option value="Shahbandar">Shahbandar</option>
                    <option value="Shahdadkot">Shahdadkot</option>
                    <option value="Shahdadpur">Shahdadpur</option>
                    <option value="Shahpur Chakar">Shahpur Chakar</option>
                    <option value="Shikarpaur">Shikarpaur</option>
                    <option value="Sukkur">Sukkur</option>
                    <option value="Tangwani">Tangwani</option>
                    <option value="Tando Adam Khan">Tando Adam Khan</option>
                    <option value="Tando Allahyar">Tando Allahyar</option>
                    <option value="Tando Muhammad Khan">
                      Tando Muhammad Khan
                    </option>
                    <option value="Thatta">Thatta</option>
                    <option value="Umerkot">Umerkot</option>
                    <option value="Warah">Warah</option>
                    <option value="" disabled>
                      Khyber Pakhtunkhwa Cities
                    </option>
                    <option value="Abbottabad">Abbottabad</option>
                    <option value="Adezai">Peshawar</option>
                    <option value="Alpuri">Alpuri</option>
                    <option value="Akora Khattak">Akora Khattak</option>
                    <option value="Ayubia">Ayubia</option>
                    <option value="Banda Daud Shah">Banda Daud Shah</option>
                    <option value="Bannu">Bannu</option>
                    <option value="Batkhela">Batkhela</option>
                    <option value="Battagram">Battagram</option>
                    <option value="Birote">Birote</option>
                    <option value="Chakdara">Chakdara</option>
                    <option value="Charsadda">Charsadda</option>
                    <option value="Chitral">Chitral</option>
                    <option value="Daggar">Daggar</option>
                    <option value="Dargai">Dargai</option>
                    <option value="Darya Khan">Darya Khan</option>
                    <option value="Dera Ismail Khan">Dera Ismail Khan</option>
                    <option value="Doaba">Doaba</option>
                    <option value="Dir">Dir</option>
                    <option value="Drosh">Drosh</option>
                    <option value="Hangu">Hangu</option>
                    <option value="Haripur">Haripur</option>
                    <option value="Karak">Karak</option>
                    <option value="Kohat">Kohat</option>
                    <option value="Kulachi">Kurram</option>
                    <option value="Lakki Marwat">Lakki Marwat</option>
                    <option value="Latamber">Latamber</option>
                    <option value="Madyan">Madyan</option>
                    <option value="Mansehra">Mansehra</option>
                    <option value="Mardan">Mardan</option>
                    <option value="Mastuj">Mastuj</option>
                    <option value="Mingora">Mingora</option>
                    <option value="Nowshera">Nowshera</option>
                    <option value="Paharpur">Paharpur</option>
                    <option value="Pabbi">Pabbi</option>
                    <option value="Peshawar">Peshawar</option>
                    <option value="Saidu Sharif">Saidu Sharif</option>
                    <option value="Shorkot">Shorkot</option>
                    <option value="Shewa Adda">Shewa Adda</option>
                    <option value="Swabi">Swabi</option>
                    <option value="Swat">Swat</option>
                    <option value="Tangi">Tangi</option>
                    <option value="Tank">Tank</option>
                    <option value="Thall">Thall</option>
                    <option value="Timergara">Timergara</option>
                    <option value="Tordher">Tordher</option>
                    <option value="" disabled>
                      Balochistan Cities
                    </option>
                    <option value="Awaran">Awaran</option>
                    <option value="Barkhan">Barkhan</option>
                    <option value="Chagai">Chagai</option>
                    <option value="Dera Bugti">Dera Bugti</option>
                    <option value="Gwadar">Gwadar</option>
                    <option value="Harnai">Harnai</option>
                    <option value="Jafarabad">Jafarabad</option>
                    <option value="Jhal Magsi">Jhal Magsi</option>
                    <option value="Kacchi">Kacchi</option>
                    <option value="Kalat">Kalat</option>
                    <option value="Kech">Kech</option>
                    <option value="Kharan">Kharan</option>
                    <option value="Khuzdar">Khuzdar</option>
                    <option value="Killa Abdullah">Killa Abdullah</option>
                    <option value="Killa Saifullah">Killa Saifullah</option>
                    <option value="Kohlu">Kohlu</option>
                    <option value="Lasbela">Lasbela</option>
                    <option value="Lehri">Lehri</option>
                    <option value="Loralai">Loralai</option>
                    <option value="Mastung">Mastung</option>
                    <option value="Musakhel">Musakhel</option>
                    <option value="Nasirabad">Nasirabad</option>
                    <option value="Nushki">Nushki</option>
                    <option value="Panjgur">Panjgur</option>
                    <option value="Pishin Valley">Pishin Valley</option>
                    <option value="Quetta">Quetta</option>
                    <option value="Sherani">Sherani</option>
                    <option value="Sibi">Sibi</option>
                    <option value="Sohbatpur">Sohbatpur</option>
                    <option value="Washuk">Washuk</option>
                    <option value="Zhob">Zhob</option>
                    <option value="Ziarat">Ziarat</option>
                  </select>
                </div>
                {/* Bike Model form box */}
                {/* 
                <label className="box_text" for="fname">
                  Make/Model
                </label>
                <div className="post_box_control2">
                  <input
                    type="text"
                    id="inputmodel"
                    name="make/model"
                    placeholder="Bike Model...."
                  />
                </div> */}
                <label className="box_text" for="fname">
                  Make/Model
                </label>
                <div className="post_box_control2">
                  <select
                    type="text"
                    id="inputmodel"
                    name="make/model"
                    placeholder="Bike Model...."
                  >
                    <option value="model">Model</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    <option value="1997">1997</option>
                    <option value="1996">1996</option>
                    <option value="1995">1995</option>
                    <option value="1994">1994</option>
                    <option value="1993">1993</option>
                    <option value="1992">1992</option>
                    <option value="1991">1991</option>
                    <option value="1990">1990</option>
                    <option value="1989">1989</option>
                    <option value="1988">1988</option>
                  </select>
                </div>

                {/* Phone form box */}

                <label className="box_text" for="fname">
                  Phone Number
                </label>
                <div className="post_box_control2">
                  <input
                    type="text"
                    id="inputphone"
                    name="phone"
                    maxLength={11}
                    // pattern="[+-]?\d+(?:[.,]\d+)?"
                    placeholder="03.........."
                  />
                </div>
                {/* dddddddddddddddddddddddddddddd */}

                <label className="box_text" for="lname">
                  Millage
                </label>
                <div className="post_box_control2">
                  <input
                    type="text"
                    id="inputmillage"
                    name="millage"
                    // minlength="0"
                    maxlength="6"
                    placeholder="KM.."
                  />
                </div>
                {/*  Registration city */}
                {/* <label className="box_text" for="city">
                    Registration city (Optional)
                  </label>
                  <div className="box_form">
                    <select
                      className="post_box_control"
                      id="country"
                      name="country"
                    >
                      <option value="australia">City</option>
                      <option value="australia">Australia</option>
                      <option value="canada">Canada</option>
                      <option value="usa">USA</option>
                    </select>
                  </div> */}
                {/* Engine type */}
                <label className="box_text" for="Engine">
                  Condition
                </label>
                <div className="box_form">
                  <select
                    className="post_box_control"
                    id="inputcondition"
                    name="condition"
                  >
                    <option value="Condition">Bike Condition</option>
                    <option value="New">New</option>
                    <option value="Used">Used</option>
                  </select>
                </div>
                {/*  description form */}

                <label className="box_text" for="subject">
                  Description
                </label>
                <div className="box_form">
                  <textarea
                    className="post_box_control"
                    id="inputdescription"
                    name="description"
                    placeholder="Write something.."
                  ></textarea>
                </div>

                {/* Price form box */}
                <label className="box_text" for="lname">
                  Price (Rs)
                </label>
                <div className="post_box_control2">
                  <input
                    type="text"
                    id="inputprice"
                    name="price"
                    minlength="0"
                    maxlength="6"
                    placeholder="Price.."
                    inputmode="numeric"
                  />
                </div>

                {/* <h1 className="line_postad">
                  -----------------------------------------------------------------------
                </h1> */}
                {/* Attach portion */}
                {/* <div className="upload_img">Upload Images :</div> */}
                <div className="attach_cam">
                  <div className="attach_form_small">
                    <label className="add_attach_content" for="myfile">
                      <div className="upload_img">Upload Images :</div>
                      Select a file:
                    </label>
                    <input
                      className="img_attach_content"
                      type="file"
                      id="inputfile"
                      name="myfile"
                      multiple
                    />

                    {/* <form action="">
                        <label className="add_attach_content" for="myfile">
                          Select a file:
                        </label>
                        <input
                          className="img_attach_content"
                          type="file"
                          id="inputfile"
                          name="myfile"
                        />
                      </form>
                      <form action="">
                        <label className="add_attach_content" for="myfile">
                          Select a file:
                        </label>
                        <input
                          className="img_attach_content"
                          type="file"
                          id="inputfile"
                          name="myfile"
                        />
                      </form>
                      <form action="">
                        <label className="add_attach_content" for="myfile">
                          Select a file:
                        </label>
                        <input
                          className="img_attach_content"
                          type="file"
                          id="inputfile"
                          name="myfile"
                        />
                      </form>
                      <form action="">
                        <label className="add_attach_content" for="myfile">
                          Select a file:
                        </label>
                        <input
                          className="img_attach_content"
                          type="file"
                          id="inputfile"
                          name="myfile"
                        />
                      </form> */}
                    {/* <input className="submit_add_attach" type="submit" /> */}
                  </div>
                </div>
                {/* <div className="upload_vid">Upload Videos</div>
                  <div className="vid_attach_post">
                    <div className="Youtube_paste_attach">
                      Paste Youtube Link
                    </div>
                    <input
                      className="vid_attach"
                      type="text"
                      id="attachVideo"
                      name="Video"
                      placeholder="Video link...."
                    />
                  </div> */}
                <input
                  className="submit_add_end"
                  type="submit"
                  value="Submit"
                />
              </form>
              {/* <body>

<h1>Show File-select Fields</h1>

<h3>Show a file-select field which allows only one file to be chosen:</h3>
<form action="/action_page.php">
  <label for="myfile">Select a file:</label>
  <input type="file" id="myfile" name="myfile"/>
  <input type="submit"/>
</form>

<h3>Show a file-select field which allows multiple files:</h3>
<form action="/action_page.php">
  <label for="myfile">Select files:</label>
  <input type="file" id="myfile" name="myfile" multiple/>
  <input type="submit"/>
</form>

</body> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
function postad(e) {
  
  debugger;
  e.preventDefault();
  let request = {
    title: document.getElementById("inputtitle").value,
    brand: document.getElementById("inputbrand").value,
    location: document.getElementById("inputcity").value,
    model: document.getElementById("inputmodel").value,
    millage: document.getElementById("inputmillage").value,
    condition: document.getElementById("inputcondition").value,
    description: document.getElementById("inputdescription").value,
    price: document.getElementById("inputprice").value,
    phone: document.getElementById("inputphone").value,
    // imageFront: document.getElementById("inputfile").value,
  
    // imageFront:
    //   "http://localhost:3000/uploads/" +
      image : document.getElementById("inputfile").value,
  };
  // if(request.price<1){
  //   document.getElementById("inputprice").value=1;
  // } else{
  // document.getElementById("inputfile").value;

    axios
      .post("http://localhost:3000/Ad/add", request)
    
      .then((resp) => {
          // setTitle(resp[0].title);
        alert(resp.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
    // }
 axios
   .get("http://localhost:3000/Ad/", request)
   .then((resp) => {
     alert(resp.data.message);
   })
   .catch((err) => {
     console.log(err);
   });

// put method

}

// eslint-disable-next-line no-undef




export default Postadd;
