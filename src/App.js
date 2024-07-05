import {ReactComponent as LogoIcon} from './common/images/LogoIcon.svg';
import {ReactComponent as AppleIcon} from './common/images/AppleIcon.svg';
import {ReactComponent as GoogleIcon} from './common/images/GoogleIcon.svg';
import {ReactComponent as StarIcon} from './common/images/StarIcon.svg';
import Banknote from './common/images/Banknote.png'
import './App.css';

function App() {
  return (
    <div className="App">
    <header className="App-header">
        <LogoIcon className='App-header--logo'/>
        <p className="App-header--title">DollarScan</p>
    </header>
    <section className="App-main">
        <img className="App-main--image" src={Banknote} alt='' />
        <p className="App-main--title">Quick and accurate identification of U.S. banknotes <br/>using your phone’s camera</p>
        <section className="App-main--button-links">
          <a href="https://apps.apple.com/us/app/payingback-cash-me-back/id1604011897" target="_blank" className="App-main--button-link">
            <AppleIcon/>
            <p className="App-main--button-link-text">iPhone</p>
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.payingback" target="_blank" className="App-main--button-link">
            <GoogleIcon/>
            <p className="App-main--button-link-text">Android</p>
          </a>
      </section>
    </section>
    <section className='App-main--features-wrapper'>
        <p className="App-main--features-title">Key Features</p>
        <div className="App-main--features">
          <div className="App-main--feature">
            <StarIcon className="App-main--feature-icon"/>
            <p className="App-main--feature-description">Fast banknote recognition</p>
          </div>
          <div className="App-main--feature">
            <StarIcon className="App-main--feature-icon"/>
            <p className="App-main--feature-description">Offer users up-to-date reference price of banknote based on latest transactions and actual market offers</p>
          </div>
          <div className="App-main--feature">
            <StarIcon className="App-main--feature-icon"/>
            <p className="App-main--feature-description">Scanning of banknote’s serial number</p>
          </div>
          <div className="App-main--feature">
            <StarIcon className="App-main--feature-icon"/>
            <p className="App-main--feature-description">Ability to create multiple collections of saved banknotes</p>
          </div>
          <div className="App-main--feature">
            <StarIcon className="App-main--feature-icon"/>
            <p className="App-main--feature-description">Easy-to-use interface</p>
          </div>
        </div>
    </section>
    <footer className="App-footer">
      
      <section className="App-footer--contacts">
        <a target="_blank" className="link" href="https://drive.google.com/file/d/1mvUO25VYaAFI4Gmqv-GrYFIe1UkgSGan/view?usp=sharing">Privacy Policy&nbsp;|&nbsp;</a>
        <a target="_blank" className="link" href="https://drive.google.com/file/d/15p_54WpQOkIXpzZzggBwco9i_yIv5v6V/view?usp=sharing">Terms of use&nbsp;|&nbsp;</a>
        <a target="_blank" className="link" href="mailto:rifse.osa@gmail.com?subject=DollarScan/Suggestion">&nbsp;Contact us</a>
        <p>&nbsp;(rifse.osa@gmail.com)</p>
      </section>
    </footer>
  </div>
  );
}

export default App;
