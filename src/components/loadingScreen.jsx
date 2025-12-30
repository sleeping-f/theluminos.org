import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import './loadingScreen.css';

function LoadingScreen({ isVisible = true, onLoadingComplete }) {
    const [percentage, setPercentage] = useState(0);
    const [text, setText] = useState('');
    const fullText = "TheLumiNos.org";

    useEffect(() => {
        if (!isVisible) return;

        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100);

        const interval = setInterval(() => {
            setPercentage((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    if (onLoadingComplete) {
                        setTimeout(onLoadingComplete, 300);
                    }
                    return 100;
                }
                return prev + Math.random() * 23;
            });
        }, 200);

        return () => {
            clearInterval(interval);
            clearInterval(typingInterval);
        };
    }, [isVisible, onLoadingComplete]);

    return (
        <div className={`loader-screen ${!isVisible ? 'hidden' : ''}`} id="loader">
            <div className="loader-content">
                <div className="loader-logo-wrapper">
                    <img src={logo} alt="TheLumiNos Logo" className="loader-logo" />
                </div>
                <div className="loader-code-text">
                    {text}<span className="cursor">_</span>
                </div>
                <div className="loader-spinner-wrapper">
                    <div className="loader-spinner"></div>
                </div>
                <div className="loader-progress-wrapper">
                    <div
                        className="loader-progress-bar"
                        style={{ width: `${Math.min(percentage, 100)}%` }}
                    ></div>
                </div>
                <div className="loader-percentage" id="loaderPercent">
                    {Math.floor(Math.min(percentage, 100))}%
                </div>
            </div>
        </div>
    );
}

export default LoadingScreen;
