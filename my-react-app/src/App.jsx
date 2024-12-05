import jeevan from './assets/olg.png';
import jeevan1 from './assets/lotto.png';
import jeevan2 from './assets/lotto.png';
import jeevan3 from './assets/img1.png';
import jeevan4 from './assets/img1.png';
import jeevan5 from './assets/img2.png';
import jeevan6 from './assets/img3.png';
import jeevan7 from './assets/img4.png';
import jeevan8 from './assets/img5.png';
import jeevan9 from './assets/img6.png';
import jeevan10 from './assets/img14.png';
import jeevan11 from './assets/img10.png';
import jeevan12 from './assets/img11.png';
import jeevan13 from './assets/img12.png';
import jeevan14 from './assets/img13.png';



import './index.css';

function App() {
    return (
        <div>
            <div className="title">
                <div><img className="h1" src={jeevan} alt="" /></div>
                <div className="h2">
                    <p>LOTTERY</p><p >INSTANT</p><p >CASINO</p><p >SPORTS</p><p >WINNERS</p><p >LEARN</p>
                  
                </div><hr />

                <div className="blinking-image">
                    <img src={jeevan1} alt="Blinking Image" />
                </div>
                <div className="blinking-text"> $80 MILLION JACKPOT </div>
                <div className="color-box">LOGIN</div>
                <div className="pop-up-box">SIGN UP</div>
                <div><p className="en">EN</p><p className="fr">FR</p></div>
            </div>
            
            <div>
                <div><img className="a7" src={jeevan2} alt="" /></div>
                <div><p className="a8">NEXT JACKPOT: WEDNESDAY, DECEMBER 4</p></div>
                <div><p className="a9">$80 MILLION est.</p></div>
                <div className="a10">
                    <p>PLUS 29 MAXMILLIONS EST.</p>
                    <p>GET A $5 LOTTERY BONUS WHEN YOU SIGN UP</p>
                    <p>AND BUY A LOTTERY TICKET!</p>
                </div>
                <div><img className="a11" src={jeevan3} alt="" /></div>
                <div className="pop-up-box1">CLAIM OFFER</div>
                <div><p className="a12">*Terms and conditions apply.</p><p className="a13">Must be 18+ and a resident of Ontario located in the province at the time of opt-in.</p></div>
            </div>
            <div className="body"></div>

            <div className="box-container">
                <div className="box">
                    <img src={jeevan4} alt="Placeholder Image" />
                    <h1>LOTTERY</h1>
                    <h3>Buy a ticket, Get $5</h3>
                    <div className="pop-up-box2">CLAIM OFFER</div>
                </div>
            </div>

            <div className="box-container3">
                <div className="box3">
                    <img src={jeevan5} alt="Placeholder Image" />
                    <h1>CASINO</h1>
                    <h3>BET $20 on any casino game, get a $200 Casino Bonus</h3>
                    <div className="pop-up-box3">CLAIM OFFER</div>
                </div>
            </div>

            <div className="box-container4">
                <div className="box4">
                    <img src={jeevan6} alt="Placeholder Image" />
                    <h1>SPORTS</h1>
                    <h3>BET $25, get a $50</h3>
                    <div className="pop-up-box4">CLAIM OFFER</div>
                </div>

                <div className="div2">
                    <img className="image-box" src={jeevan7} alt="Main Image" class="main-image" />
                    <div className="pop-up-box5">CLAIM OFFER</div>

                    <img className="image1-box" src={jeevan8} alt="Main Image" class="main-image" />
                    <div className="pop-up-box6">CLAIM OFFER</div>
                    
                    <img className="image2-box" src={jeevan9} alt="Main Image" class="main-image" />
                    <div className="pop-up-box7">CLAIM OFFER</div>
                </div>

                <div><p className="a19">PLAY LOTTERY ONLINE WITH MORE GAMES TO CHOOSE FROM!</p></div>
                <div><p className="a20">view </p></div>

                <div className="body5">
                    <div className="image-container">
                        <img src={jeevan10} alt="Image" className="image" />
                        <div className="popup-box box1">BUY TICKET</div>
                        <div className="popup-box box2">LEARN MORE</div>
                        <div><p className="a21">$80,000,000 est.</p><p className="a22">PLUS 29</p><p class="a23"> MAXMILLIONS EST.</p></div>
                    </div>
                    <div className="image-container">
                        <img src={jeevan11} alt="Image" className="image" />
                        <div className="popup-box box1">BUY TICKET</div>
                        <div className="popup-box box2">LEARN MORE</div>
                        <div><p className="a24">$5,000,000 est.</p><p className="a25">GOLD Ball</p><p class="a26"> OR $1 Million Prize</p></div>

                    </div>
                    <div className="image-container">
                        <img src={jeevan12} alt="Image" className="image" />
                        <div className="popup-box box1">BUY TICKET</div>
                        <div className="popup-box box2">LEARN MORE</div>
                        <div><p className="a27">$1,000 a DAY for</p><p className="a28">LIFE</p></div>

                    </div>
                    <div className="image-container">
                        <img src={jeevan13} alt="Image" className="image" />
                        <div className="popup-box box1">BUY TICKET</div>
                        <div className="popup-box box2">LEARN MORE</div>
                        <p class="a29"> $690,000 est.</p>
                    </div>
                    <div className="image-container">
                        <img src={jeevan14} alt="Image" className="image" />
                        <div className="popup-box box1">BUY TICKET</div>
                        <div className="popup-box box2">LEARN MORE</div>
                        <p class="a30"> $690,000 est.</p>
                    </div>
                </div>
                
            </div>
        </div>
            
    );
}

export default App;
