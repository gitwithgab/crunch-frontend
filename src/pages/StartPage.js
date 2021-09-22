import React from 'react';
import Logo from "../components/Logo";
import BtnLogin from "../components/BtnLogin";
import BgStart from "../assets/img/crunch-hero.png";

const StartPage = () => {
    return (
        <>

            <div className="start-page">

                <div>
                        <div><Logo /></div>
                        <div><BtnLogin /></div>
                </div>

                <div style={{ backgroundImage: `url(${BgStart})`, 
                         backgroundRepeat: 'no-repeat',
                         backgroundSize: 'cover',
                         backgroundPosition: 'center',
                         width:'100vw',
                         height:'100%'
                         }}>
                    <div>
                        <h1>
                            Unlimited Movies, <br/>
                            TV Shows and more.
                        </h1>
                    
                        <p>Ready to watch? Enter your email to create your account.</p>
                        
                        <input type="text" placeholder="Email Address" name="register"/>
                    
                        <button> GET STARTED </button>
                    </div>
                </div>

            </div>
          
        </>
    )
}

export default StartPage
