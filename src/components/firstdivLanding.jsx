import { useState } from 'react';
import LightPillar from './LightPillar/LightPillar';
import './firstdivLanding.css';
import ShinyText from '../components/ShinyText/ShinyText';
import LoadingScreen from './loadingScreen';
import Navbar from './navbar';

function FirstDivLanding() {
    const [showLoader, setShowLoader] = useState(true);

    return (
        <div>
            <LoadingScreen
                isVisible={showLoader}
                onLoadingComplete={() => setShowLoader(false)}
            />
            {!showLoader && (
                <div className="landing-container">

                    <LightPillar
                        topColor="#E6BC82"
                        bottomColor="rgba(39, 36, 52, 1)"
                        intensity={1.0}
                        rotationSpeed={0.7}
                        glowAmount={0.002}
                        pillarWidth={3.8}
                        pillarHeight={0.5}
                        noiseIntensity={0.5}
                        pillarRotation={70}
                        interactive={true}
                        mixBlendMode="normal"
                    />
                    <Navbar />
                    <div className="content-center">

                        <ShinyText className='main-heading'
                            text="A New Class Of Elegant Software Solutions"
                            speed={3.3}
                            delay={0}
                            color="#c6c6c6ff"
                            shineColor="#ffffff"
                            spread={120}
                            direction="left"
                            yoyo={true}
                            pauseOnHover={false}
                        />
                        <ShinyText className='tagline'
                            text="Designed With Precision. Built for Growth."
                            speed={3.3}
                            delay={0}
                            color="#c6c6c6ff"
                            shineColor="#ffffff"
                            spread={120}
                            direction="left"
                            yoyo={true}
                            pauseOnHover={false}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
export default FirstDivLanding;