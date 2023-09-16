import React, { useState, useEffect }  from 'react'
import './Consent.css'
import imglogo from './images/employera.jpg'
import jsPDF from 'jspdf';
import 'jspdf-autotable';
// import employeraa from './images/employeraa.jpg'
import cletter from './images/cletter.jpg'
function ConsentLetter() {
  const [isScrolled, setIsScrolled] = useState(false);
    const [formData, setFormData] = React.useState({
      studentName: '',
      parentName: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      date: '',
      relationship: '',
      signature: '',
    });
  
    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      const { studentName, parentName, address, city, state, zip, date, relationship, signature } = formData;
  
      const doc = new jsPDF();
  
      // Add header to the PDF document
      doc.setFillColor(255, 0, 0);
      doc.setFont('Helvetica-Bold', 'bold'); // set font family and font weight
      doc.setFontSize(18);
      doc.text('CONSENT LETTER', doc.internal.pageSize.getWidth() / 2, 35, { align: 'center' }); // align center
  
      // Add logo to the top left of the PDF document
      const logoData = 'https://cdn.dribbble.com/users/2185289/screenshots/4384598/23.png';
      doc.addImage(logoData, 'PNG', 4, 1, 30, 30); // align top left
  
      // Add border to the PDF document
      doc.setDrawColor(0);
      doc.setLineWidth(1);
      doc.rect(5, 5, doc.internal.pageSize.getWidth() - 10, doc.internal.pageSize.getHeight() - 10, 'S');
  
      // Add body to the PDF document
      doc.setFontSize(14);
// Add body to the PDF document
// Add body to the PDF document
const content = `
  From
  ${parentName}
  ${address}
  ${city}, ${state} ${zip}
  ${date}
  To
  Employera HR consultancy
  Malappuaram,Kerala,676394

  Sir,
  I, ${parentName}, hereby give my consent for ${studentName} to participate in [Name of Event/Activity] organized by Employera. I understand that this event/activity may involve [briefly mention any potential risks or hazards involved].

  I confirm that I have read and understood all the terms and conditions related to the event/activity and agree to release Employera from any liability in case of any accident or injury that may occur during the event/activity.

  Sincerely,
  ${parentName}
`;

const lines = doc.splitTextToSize(content, doc.internal.pageSize.getWidth() - 20); // Subtracting the margin

const yPos = 45;
const lineHeight = 10;
let y = yPos;

lines.forEach((line) => {
  if (line.includes(parentName) || line.includes(studentName)) {
    doc.setFont('times', 'italic');
  } else {
    doc.setFont('times', 'normal');
  }

  doc.text(line, 15, y);
  y += lineHeight;
});


      // Add the signature image to the PDF document
      const imgData = signature;
      doc.addImage(imgData, 'JPEG', doc.internal.pageSize.getWidth() - 39, 240, 25, 25); // align right
  
      doc.text(`${relationship}`, doc.internal.pageSize.getWidth() - doc.getTextWidth(`${relationship}`) - 14, 270); // align right
      const generatedTime = new Date().toLocaleString();
      doc.setFontSize(10);
      doc.text(`Generated on: ${generatedTime}`, 10, doc.internal.pageSize.getHeight() - 10);

      doc.save('consent-letter.pdf');
    };
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setIsScrolled(scrollTop > 0);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return (
      <div className="consentmain">
          <nav className={`navbar fixed-top bg-body-tertiary ${isScrolled ? 'expand' : ''}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/Home" style={{ display: 'flex' }}>
          <img src={imglogo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" id="logoImgg" />
          <div className="lognme">
            <span id="logoName">Employera</span>
            <span>HR Consultancy</span>
          </div>
        </a>
        {isScrolled && (
          <div className="contact-info" style={{backgroundColor:'#f8f9fa'}}>
            <span>Contact: +1 234 567 890</span>
            <span>Email: info@example.com</span>
          </div>
        )}
      </div>
    </nav>
      <div class="card mb-3" style={{border:'none'}} id='mainconsentletter'>
          <div class="row g-0">
            <div class="col-md-6" style={{alignSelf:'center'}}>
              <img src={cletter} class="img-fluid rounded-start" alt="..."/>
            </div>
            <div class="col-md-6" >
              <div class="card-body" >
                <h5 class="card-title">Consent Letter Form</h5>
                <form onSubmit={handleFormSubmit} id='form'>

       
        <div className="mb-3" id='inpconst'>
                <input type="text"  name="studentName" value={formData.studentName} onChange={handleInputChange}
                  className="form-control"
                  id="exampleFormControlInput3"
                  placeholder="Student Name"
                  required/>
        </div>
        <div className="mb-3" id='inpconst'>
        <input type="text" name="parentName" value={formData.parentName} onChange={handleInputChange}
              className="form-control"
              id="exampleFormControlInput3"
              placeholder="Parent Name"
              required/>
        </div>
        <div className="mb-3" id='inpconst'>
           <input type="text" name="address" value={formData.address} onChange={handleInputChange} 
              className="form-control"
              id="exampleFormControlInput3"
              placeholder="Address"
              required />
        </div>
        <div className="mb-3" id='inpconst'>
           <input type="text" name="city" value={formData.city} onChange={handleInputChange}
              className="form-control"
              id="exampleFormControlInput3"
              placeholder="City"
              required/>
        </div>
        <div className="mb-3" id='inpconst'>
           <input type="text" name="state" value={formData.state} onChange={handleInputChange} 
              className="form-control"
              id="exampleFormControlInput3"
              placeholder="State"
              required/>
        </div>
        <div className="mb-3" id='inpconst'>
           <input type="number"  name="zip" value={formData.zip} onChange={handleInputChange} 
              className="form-control"
              id="exampleFormControlInput3"
              placeholder="Zip"
              required/>
        </div>
        <div className="mb-3" id='inpconst'>
           <input type="text" name="relationship" value={formData.relationship} onChange={handleInputChange}
              className="form-control"
              id="exampleFormControlInput3"
              placeholder="Relationship"
              required/>
        </div>
        <div className="mb-3" id='inpconst'>
           <input type="date" name="date" value={formData.date} onChange={handleInputChange}
              className="form-control"
              id="exampleFormControlInput3"
              placeholder="Date"
              required/>
        </div>
        <div className="mb-3" id="inpconst">
            <input
              type="file"
              accept="image/*"
              capture="camera"
              name="signature"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  signature: URL.createObjectURL(e.target.files[0])
                })
              }
              className="form-control"
              id="exampleFormControlInput3"
              required />
  <span className="file-instructions" style={{color:'red'}}>signature</span>
</div>

        <button type="submit" id='conbuttons'>Download </button>
 </form>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    );
  }
  
  export default ConsentLetter;
  