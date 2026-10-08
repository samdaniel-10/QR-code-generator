import React, { useState } from "react";
import "../assets/CSS/Project/QR_code_copy.css";

const QR_code = () => {
    const [img, setImg] = useState();
    const [loading, setLoading] = useState(false);
    const [qrData, setQrData] = useState("");
    const [qrSize, setQrSize] = useState("");

    const typechange_data = (e) => {
        setQrData(e.target.value);
    };

    const typechange_size = (e) => {
        setQrSize(e.target.value);
    };

    const download_file = () => {
        fetch(img)
            .then((res) => res.blob())
            .then((blob) => {
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = "qrcode.png";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch((error) => {
                console.error("Error in downloading QR code", error);
            });
    };

    async function generateQR() {
        setLoading(true);

        try {
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;

            setImg(url);
        } catch (error) {
            console.error("Error Generating QR code", error);
        } finally {
            setLoading(false);
        }
    }

    return(

    <>

        <div className="app-container">
            <h1>QR code Generator</h1>

            {img && <img src={img} className="qr-code-image"  />}

            {loading && <p>Please wait....</p>}

            <div>
                <label htmlFor="data-input" className="input-label">
                    Data for QR code :
                </label>

                <input
                    type="text"
                    id="data-input"
                    disabled={loading}
                    onChange={typechange_data}
                    placeholder="Enter data for QR code"
                />

                <label htmlFor="size-input" className="input-label">
                    Image Size (e.g., 150):
                </label>

                <input
                    type="text"
                    id="size-input"
                    onChange={typechange_size}
                    placeholder="Enter value"
                />

                <br />

                <button
                    className="generate-button"
                    onClick={generateQR}
                >
                    Generate QR code
                </button>

                <button
                    className="download-button"
                    onClick={download_file}
                >
                    Download QR code
                </button>
            </div>

            <p>Designed by Sam Daniel</p>
        </div>


        {/* ================================================== */}
        {/* ADDITIONAL CONTENT STARTS HERE */}
        {/* ================================================== */}

        <section className="qr-info-section">

            <h2>About QR Code Generator</h2>

            <p>
                This QR Code Generator is a simple web application that allows
                users to convert text, website links, and other information
                into a QR code. Users can enter their required data, select
                an image size, and generate a QR code instantly.
            </p>

            <p>
                The generated QR code can be scanned using a smartphone or
                QR code scanner. This makes it easy to share website links,
                text, and other useful information in a quick and convenient
                way.
            </p>


            <h2>How It Works</h2>

            <div className="qr-steps">

                <div className="qr-step">
                    <h3>1. Enter Your Data</h3>
                    <p>
                        Enter a website URL, text, or any other information
                        that you want to convert into a QR code.
                    </p>
                </div>

                <div className="qr-step">
                    <h3>2. Select Image Size</h3>
                    <p>
                        Enter the required image size to control the
                        dimensions of the generated QR code.
                    </p>
                </div>

                <div className="qr-step">
                    <h3>3. Generate QR Code</h3>
                    <p>
                        Click the Generate QR Code button to create the QR
                        code based on the information you entered.
                    </p>
                </div>

                <div className="qr-step">
                    <h3>4. Download</h3>
                    <p>
                        After generating the QR code, you can download the
                        image and use it wherever required.
                    </p>
                </div>

            </div>


            <h2>Features</h2>

            <ul>
                <li>Generate QR codes from text or website links.</li>
                <li>Choose the required QR code image size.</li>
                <li>Preview the generated QR code instantly.</li>
                <li>Download the QR code as an image.</li>
                <li>Simple and user-friendly interface.</li>
                <li>Works directly from the web browser.</li>
            </ul>


            <h2>Uses of QR Codes</h2>

            <p>
                QR codes can be used in many different situations. They can
                be used to share website links, contact information, event
                details, digital menus, product information, payment
                information, and other useful content.
            </p>

            <p>
                Instead of manually typing a long website address or piece
                of information, users can simply scan the QR code using
                their mobile device.
            </p>


            <h2>Technology Used</h2>

            <div className="technology-section">

                <div>
                    <h3>Frontend</h3>
                    <p>React.js</p>
                </div>

                <div>
                    <h3>Programming Language</h3>
                    <p>JavaScript</p>
                </div>

                <div>
                    <h3>Styling</h3>
                    <p>CSS</p>
                </div>

                <div>
                    <h3>QR Code API</h3>
                    <p>QRServer API</p>
                </div>

            </div>


            <h2>Application Workflow</h2>

            <p>
                The application collects the data entered by the user and
                stores it using React state. When the user clicks the
                Generate QR Code button, the application creates a QR code
                request using the entered data and selected image size.
            </p>

            <p>
                The QR code is then displayed on the webpage. Users can
                preview the generated image and download it for later use.
            </p>


            <h2>Why Use This QR Code Generator?</h2>

            <p>
                This application provides a quick and convenient way to
                create QR codes without requiring complicated software.
                It is useful for students, developers, businesses, events,
                websites, and personal projects.
            </p>

        </section>

        {/* ================================================== */}
        {/* ADDITIONAL CONTENT ENDS HERE */}
        {/* ================================================== */}

    </>

)
};

export default QR_code;