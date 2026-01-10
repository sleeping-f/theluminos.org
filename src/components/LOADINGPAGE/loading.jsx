import { useEffect, useMemo, useRef, useState } from 'react';
import './loading.css';

const LOGO_PATH_D =
	'M62.76,13.01c-13.52-8.67-15.68,43-18.7,30.83-.95-5.15-1.74-9.41-3.85-14.03-1.01,6.14-3.8,12.32-7.2,17.4,7.96,2.63,23.04,2.44,27.24-7.08,2.03-5.13.19-9.59-3.96-12.84.26-1.26,1.47-.11,2.04.36,13.9,15.44-12.67,29.8-26.58,24.18-.41-.11-1.78-.68-1.96-.64-3.75,4.73-10.1,6.88-15.98,4.79,5.12-.16,12.03-.33,14.88-5.28-2.77-.77-5.11-2.64-7.8-3.59-23.51,13.48-27.34-17.18-1.95-4.78.89.3-.14,1.49-.43,1.9-.86.71-2.24-.78-3.09-1.26-7.27-5.77-18.86-.42-10.47,5.43,7.07,3.13,15.14-1.83,17.55-8.81,4.34-8.47,6.83-19.81,10.15-27.53-7.15-1.37-16.47-2.77-22.2,2.99-2.44,2.65-3.13,7.81-.27,10.35.6,1,.73,2.39-.68,1.4-4.85-3.4-2.95-10.96,1.07-14.27,6.78-5.45,15.9-2.86,23.74-2.14,2.21-3.31,8.26-9.47,10.88-8.85-3.19,1.08-7.05,6.46-7.62,9.31,6.2.61,13.74,1.05,17.88-4.56,1.08.71.37,1.57-.26,2.38-3.9,5.08-11.83,4.2-17.49,3.84-3.51.1-2.99,15.66-4.99,19.28-1.2,4.95-5.86,9.08-7.62,13.37l6.59,1.94c1.09-.33,1.83-2.36,2.48-3.29,5.86-7.45,3.85-20.45,7.6-22.41,1.03-.02.38,1.27.35,1.8-.23,3.71,3.07,9.86,3.83,13.94.1.55-.32,1.49.49,1.31,1.63-6.22,6.07-35.18,16.32-26.16v.72Z';

const defaultConfig = {
	// If you don't pass totalMs, it will be derived from timings.
	totalMs: undefined,
	colors: {
		bgStart: '#ffffff',
		bgEnd: '#141d2f',
		markStart: '#000000',
		markEnd: '#d7b07a',
	},
	// Slow defaults for debugging; tighten back to <=2s later.
	timings: {
		blankMs: 250,
		drawMs: 1600,
		fillMs: 450,
		shiftMs: 700,
		flipMs: 800,
		curtainMs: 900,
		gapMs: 0,
	},
};

function LoadingPage({ isVisible = true, onLoadingComplete, config }) {
	const mergedConfig = useMemo(() => {
		const c = config ?? {};
		const timings = {
			...defaultConfig.timings,
			...(c.timings ?? {}),
		};

		const derivedTotalMs =
			timings.blankMs +
			timings.drawMs +
			timings.fillMs +
			timings.shiftMs +
			timings.flipMs +
			timings.curtainMs +
			timings.gapMs * 5;

		return {
			timings,
			totalMs:
				typeof c.totalMs === 'number'
					? c.totalMs
					: typeof defaultConfig.totalMs === 'number'
						? defaultConfig.totalMs
						: derivedTotalMs,
			colors: {
				...defaultConfig.colors,
				...(c.colors ?? {}),
			},
		};
	}, [config]);

	const pathRef = useRef(null);
	const didCompleteRef = useRef(false);
	const [running, setRunning] = useState(false);

	useEffect(() => {
		didCompleteRef.current = false;

		if (!isVisible) {
			setRunning(false);
			return;
		}

		const raf = requestAnimationFrame(() => setRunning(true));
		return () => {
			cancelAnimationFrame(raf);
		};
	}, [isVisible]);

	useEffect(() => {
		if (!isVisible) return;
		const path = pathRef.current;
		if (!path) return;

		const length = Math.ceil(path.getTotalLength());
		path.style.setProperty('--ln-path-len', String(length));
	}, [isVisible]);

	useEffect(() => {
		if (!isVisible || !running) return;

		const prefersReduced =
			typeof window !== 'undefined' &&
			typeof window.matchMedia === 'function' &&
			window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (prefersReduced) {
			const t = window.setTimeout(() => {
				if (didCompleteRef.current) return;
				didCompleteRef.current = true;
				onLoadingComplete?.();
			}, 150);
			return () => window.clearTimeout(t);
		}

		// Fallback in case animationend doesn't fire.
		const t = window.setTimeout(() => {
			if (didCompleteRef.current) return;
			didCompleteRef.current = true;
			onLoadingComplete?.();
		}, mergedConfig.totalMs);

		return () => window.clearTimeout(t);
	}, [isVisible, running, mergedConfig.totalMs, onLoadingComplete]);

	const handleCurtainEnd = (e) => {
		if (didCompleteRef.current) return;
		if (e?.animationName !== 'lnCurtainBottom') return;
		didCompleteRef.current = true;
		onLoadingComplete?.();
	};

	if (!isVisible) return null;

	return (
		<div
			className={`ln-loader ${running ? 'is-running' : ''}`}
			style={
				{
					'--ln-bg-start': mergedConfig.colors.bgStart,
					'--ln-bg-end': mergedConfig.colors.bgEnd,
					'--ln-mark-start': mergedConfig.colors.markStart,
					'--ln-mark-end': mergedConfig.colors.markEnd,
					'--ln-t-blank': `${mergedConfig.timings.blankMs}ms`,
					'--ln-t-draw': `${mergedConfig.timings.drawMs}ms`,
					'--ln-t-fill': `${mergedConfig.timings.fillMs}ms`,
					'--ln-t-shift': `${mergedConfig.timings.shiftMs}ms`,
					'--ln-t-flip': `${mergedConfig.timings.flipMs}ms`,
					'--ln-t-curtain': `${mergedConfig.timings.curtainMs}ms`,
					'--ln-t-gap': `${mergedConfig.timings.gapMs}ms`,
				}
			}
			role="status"
			aria-live="polite"
			aria-label="Loading"
		>
			<div className="ln-bgFlip" aria-hidden="true" />

			<div className="ln-stage" aria-hidden="true">
				<div className="ln-lockup">
					<svg
						className="ln-mark"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 64.26 58.27"
						focusable="false"
						aria-hidden="true"
					>
						<path ref={pathRef} className="ln-markPath" d={LOGO_PATH_D} />
					</svg>
					<div className="ln-word">TheLumiNos</div>
				</div>
			</div>

			<div className="ln-curtain ln-curtain--top" aria-hidden="true" />
			<div
				className="ln-curtain ln-curtain--bottom"
				aria-hidden="true"
				onAnimationEnd={handleCurtainEnd}
			/>
		</div>
	);
}

export default LoadingPage;
