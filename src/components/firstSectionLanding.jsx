import { useEffect, useState } from 'react';
import LightPillar from './LightPillar/LightPillar';
import './firstSectionLanding.css';
import ShinyText from './ShinyText/ShinyText';
import LoadingPage from './LOADINGPAGE/loading';
import Navbar from './navbar';

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

            <div className={`landing-container ${showLoader ? 'is-loading' : ''}`}>
                <LightPillar
                    className="bg"
                    topColor="#E6BC82"
                    bottomColor="rgba(39, 36, 52, 1)"
                    intensity={1.0}
                    rotationSpeed={0.7}
                    glowAmount={0.002}
                    pillarWidth={3.8}
                    pillarHeight={0.5}
                    noiseIntensity={0.5}
                    pillarRotation={rotation}
                    interactive={true}
                    mixBlendMode="normal"
                />

                <Navbar />

                <div className="content-center">
                    <ShinyText
                        className="main-heading"
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
                    <ShinyText
                        className="tagline"
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
        </div>
    );
}

export default FirstDivLanding;
