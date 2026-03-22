import "../../globals.css";
import Image from "next/image";
import logo from "../../../../public/image.png";
import download from "../../../../public/download.png";
import user from "../../../../public/user.png";


export default function Navbar() {
    return (
        <div className="navbar">
            <Image src={logo} alt="logo" className="logo" />


            <div className="contact">
                <a href="tel:+917860663399">
                    <div className="mid-img">


                    </div>

                </a>
            </div>

            <div className="grprigth">
                <div className="download">
                    <div className="icon">
                        <Image src={download} alt="download" width={20} height={20} className="downloadbtn"/>
                    </div>
                    <p className="download-text">Download App</p>
                </div>

                <div className="profile">
                    <div className="icon green">
                        <Image src={user} alt="user" width={20} height={20} />
                    </div>
                    <p className="download-text">Hi, Ravi</p>
                </div>


            </div>



        </div>
    );
}


