import './Footer.css';
import logo from '../../assets/logo.svg';

const siteMapLinks = [
	{ label: 'Services', href: '#services' },
	{ label: 'Projects', href: '#work' },
	{ label: 'Clients', href: '#clients' },
	{ label: 'Contact', href: '#contact' },
	{ label: 'Start Project', href: '#contact', emphasis: true },
];

const legalLinks = [
	{ label: 'Privacy Policy', href: '#' },
	{ label: 'Terms of Service', href: '#' },
	{ label: 'Cookies Policy', href: '#' },
];

export default function Footer() {
	return (
		<footer className="ln-footer" role="contentinfo">
			<div className="ln-footer__inner">
				<div className="ln-footer__grid">
					<div className="ln-footer__brand">
						<div className="ln-footer__brandRow">
							<img className="ln-footer__logo" src={logo} alt="TheLumiNos logo" />
							<div className="ln-footer__brandText">
								<div className="ln-footer__brandName">TheLumiNos</div>
							</div>
						</div>
						<p className="ln-footer__description">
							We craft complete digital experiences that turn attention into meaningful action — with elegance,
							care, and purpose.
						</p>
						<div className="ln-footer__social" aria-label="Social links">
							<a className="ln-footer__socialLink" href="#" aria-label="X">
								<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
									<path d="M18.9 3h2.6l-5.7 6.5 6.7 11.5h-5.6l-4.4-7.2-6.3 7.2H3.6l6.1-6.9L3 3h5.7l3.9 6.6L18.9 3zm-1 15.9h1.4L7.1 4.9H5.6l12.3 14z" />
								</svg>
							</a>
							<a className="ln-footer__socialLink" href="#" aria-label="LinkedIn">
								<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
									<path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.48 1s2.5 1.12 2.5 2.5zM0 8.98h5V24H0zM8.98 8.98h4.78v2.05h.07c.66-1.25 2.28-2.56 4.69-2.56 5.01 0 5.93 3.3 5.93 7.59V24h-5v-6.92c0-1.65-.03-3.78-2.3-3.78-2.3 0-2.65 1.8-2.65 3.66V24h-5V8.98z" />
								</svg>
							</a>
							<a className="ln-footer__socialLink" href="#" aria-label="Facebook">
								<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
									<path d="M22.68 0H1.32C.59 0 0 .59 0 1.32v21.36C0 23.41.59 24 1.32 24h11.5v-9.29H9.69V11.1h3.13V8.41c0-3.1 1.89-4.79 4.66-4.79 1.33 0 2.47.1 2.8.14v3.24h-1.92c-1.5 0-1.79.71-1.79 1.76v2.3h3.58l-.47 3.61h-3.11V24h6.1c.73 0 1.32-.59 1.32-1.32V1.32C24 .59 23.41 0 22.68 0z" />
								</svg>
							</a>
							<a className="ln-footer__socialLink" href="#" aria-label="Instagram">
								<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
									<path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.51 4.51 0 0 0 12 7.5zm0 7.4A2.9 2.9 0 1 1 14.9 12 2.91 2.91 0 0 1 12 14.9zm5.2-7.9a1.05 1.05 0 1 0 1.05 1.05A1.05 1.05 0 0 0 17.2 7z" />
								</svg>
							</a>
						</div>
						<a className="ln-footer__backToTop" href="#">
							<span className="ln-footer__backIcon" aria-hidden="true">↑</span>
							Back to top
						</a>
					</div>

					<nav className="ln-footer__col" aria-label="Site map">
						<div className="ln-footer__heading">Site Map</div>
						<ul className="ln-footer__list">
							{siteMapLinks.map((item) => (
								<li key={item.label} className="ln-footer__item">
									<a
										className={`ln-footer__link${item.emphasis ? ' ln-footer__link--emphasis' : ''}`}
										href={item.href}
									>
										{item.label}
									</a>
								</li>
							))}
						</ul>
					</nav>

					<nav className="ln-footer__col" aria-label="Legal">
						<div className="ln-footer__heading">Legal</div>
						<ul className="ln-footer__list">
							{legalLinks.map((item) => (
								<li key={item.label} className="ln-footer__item">
									<a className="ln-footer__link" href={item.href}>
										{item.label}
									</a>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</footer>
	);
}
