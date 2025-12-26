import LightPillar from './LightPillar/LightPillar';
import './firstdivLanding.css';

function FirstDivLanding() {
    return (

        <div style={{ width: '100%', height: '800px', position: 'relative' }}>
            <LightPillar
                topColor="#6b0986"
                bottomColor="#161a98"
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
        </div>
    );
}
export default FirstDivLanding;