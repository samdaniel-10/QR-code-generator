import React, { useState } from "react";
//import collegeImg from "../assets/Images/college_image_1.jpg";
//import CollegeImg2 from "../assets/Images/college_image_2.jpg"; 
//import YoutubeQR from "../assets/Images/Youtube_QR_code_image.png"
// for <img> usage because React needs the image path in a variable.
import '../assets/CSS/Project/QR_code.css'




const QR_code = () =>{

     
    const [img, setImg] = useState()
    const [loading, setLoading ] =useState(false)
    const [qrData, setQrData] = useState("")  
    const [qrSize, setQrSize] = useState("")
    {/* for passing the data in this api, we created this qrData usestate */}

    
    const typechange_data = (e)=>{
        setQrData(e.target.value)
    }

    const typechange_size = (e)=>{
        setQrSize(e.target.value)
    }

    const download_file = ()=>{
        fetch(img)
        .then((res)=>res.blob())
        .then((blob)=> {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download= "qrcode.png"
            document.body.appendChild(link);
            link.click();      
            document.body.removeChild(link);
        })
        .catch((error)=>{
            console.error("Error in downloading QR code", error);
        })
    }

    async function generateQR(){
        setLoading(true);
        try {
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`      
                                                                                                        {/* using template string because if we scan this code, it will display based on the data we give at statevariable, orelse it will display the curly braces value */}
            setImg(url)
        }
        catch(error) {
            console.error("Error Generating QR code", error);
        }
        finally{
            setLoading(false)
        }

    } 
    return(

        <>
        <div>

            <header>
                <h3>QR Code Generator</h3>
            </header>

            
            <main className="maindiv">
                <div className="subdiv1">
                    
                    <h2>About</h2>

                    <p>
                        This QR Code Generator is a simple web application that allows
                        users to convert website links into a QR code. Users can enter their required data, select
                        an image size, and generate a QR code instantly.
                    </p>
                    <br />

                    <p>
                        The generated QR code can be scanned using a smartphone or
                        QR code scanner. This makes it easy to share website links,
                        text, and other useful information in a quick and convenient
                        way.
                    </p>
                    
                </div>

                <div className="subdiv2">
                    <h2>How it Works</h2>

                    <div className="subdiv22">
                        <div>
                            <h4>1. Enter Your Data</h4>
                            <p> Enter a website URL that you want to convert into a QR code.</p>
                        </div>

                        <div>
                            <h4>2. Select Image Size</h4>
                            <p>Enter the required image size to control the dimensions of the generated QR code.</p>
                        </div>

                        <div>
                            <h4>3. Generate QR Code</h4>
                            <p>Click the Generate QR Code button to create the QR code based on the information you entered.</p>
                        </div>

                        <div>
                            <h4>4. Download</h4>
                            <p>After generating the QR code, you can download the
                                image and use it wherever required.</p>
                        </div>
                    </div>
                </div>


                <div className="app-container">
                    <h1>QR code Generator</h1>

                    {img && <img src={img} className="qr-code-image"  />}  {/* using Conditional rendering, react displays the image. 
                                                                                if statevariable contains  default image , it will display img or it will not display image */}
                    {loading && <p>Please wait....</p>}
                    <div>
                        <label htmlFor="data-input" className="input-label">Data for QR code : </label> <input type="text" id="data-input" disabled = {loading} onChange={typechange_data} placeholder="Enter data for QR code" />
                        <label htmlFor="size-input" className="input-label">Image Size (e.g., 150): </label> <input type="text" id="size-input" onChange={typechange_size} placeholder="Enter value"/>
                        <br />
                        <button className="generate-button" onClick={generateQR}>Generate QR code</button>
                        <button className="download-button" onClick={download_file}>Download QR code</button>
                    </div>
                </div>

                <div className="subdiv4">

                    <h2>Uses</h2>

                    <div className="uses-container">

                        <div>
                            <h3>Website Sharing</h3>
                            <p>
                                Quickly share website URLs by converting them into QR codes.
                            </p>
                        </div>

                        <div>
                            <h3>Text Sharing</h3>
                            <p>
                                Convert text information into a QR code for easy sharing.
                            </p>
                        </div>

                        <div>
                            <h3>Digital Information</h3>
                            <p>
                                Share useful information without manually typing long content.
                            </p>
                        </div>

                        <div>
                            <h3>Personal Projects</h3>
                            <p>
                                Create QR codes for websites, projects, documents, and other
                                personal requirements.
                            </p>
                        </div>

                    </div>

                </div>
            </main>

            <footer>
                <p>© 2026 Sam Daniel. All Rights Reserved.</p>
                <p>QR Code Generator | Designed & Developed by Sam Daniel</p>
            </footer>

        </div>
    
        </>
    )
}

export default QR_code