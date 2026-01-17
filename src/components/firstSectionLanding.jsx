import { useEffect, useState } from 'react';
import Threads from './Threads/Threads';
import './firstSectionLanding.css';
import ShinyText from './ShinyText/ShinyText';
import LoadingPage from './LOADINGPAGE/loading';
import Navbar from './navbar';
import vectorBg from '../assets/Vector.png';
import companies from '../assets/companies.png';
import that from '../assets/That.png';
import maintext from '../assets/mainText.png';

function FirstDivLanding() {
  const [showLoader, setShowLoader] = useState(true);
  const [rotation, setRotation] = useState(70);

  useEffect(() => {
    const handleResize = () => {
      setRotation(window.innerWidth < 768 ? 325 : 70);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <LoadingPage
        isVisible={showLoader}
        onLoadingComplete={() => setShowLoader(false)}
        config={{
          colors: {
            bgStart: '#ffffff',
            bgEnd: '#141d2f',
            markStart: '#000000',
            markEnd: '#d7b07a',
          },
        }}
      />

      <Navbar />

      <div className={`landing-container ${showLoader ? 'is-loading' : ''}`}>
        <img src={vectorBg} className="background-vector" alt="" />
        <div style={{ width: '100%', height: '600px', position: 'relative' }}>
          <Threads className="threads-container"
            amplitude={1.}
            color={[.83, .68, .47]}
            enableMouseInteraction={true}
            distance={0}
          />
        </div>



        <div className="content-center">

          <div className="main-text">
            <img src={maintext} alt="We Build Websites
That Click" className="main-text-img" />
          </div>
          {/*
          <ShinyText
            className="main-heading"
            text="We Build Websites
That Click"
            speed={3.3}
            delay={0}
            color="#c6c6c6ff"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={true}
            pauseOnHover={false}
          />
          <div className="that">
            <img src={that} alt="That" className="that-img" />
          </div>
          */}
        </div>


        <div className="trusted-by-section" id="clients">
          <ShinyText
            className="trusted-by-section-text"
            text="Trusted by founders like"
            speed={3.3}
            delay={0}
            color="#c6c6c6ff"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={true}
            pauseOnHover={false}
          />
          <div className="companies-container">
            <img src={companies} alt="Trusted Companies" className="companies-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstDivLanding;
