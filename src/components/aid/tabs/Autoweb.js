import React from 'react';
import { leftAlignStyles } from '../../../utils/globalStyles';

const DEMO_WEB_SHOP_URL = 'https://demowebshop.tricentis.com/';

const linkStyle = {
    color: '#00416A',
    fontWeight: 600,
    textDecoration: 'underline',
    wordBreak: 'break-word' };

const cardStyle = {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    marginBottom: '40px'
};

const h2Style = {
    color: '#00416A',
    fontSize: '28px',
    marginBottom: '20px',
    fontWeight: 'bold',
    textAlign: 'left',
    borderBottom: '2px solid #FFE000',
    paddingBottom: '12px'
};

const ResourceItem = ({ title, href, children }) => (
    <li style={{ marginBottom: '22px', lineHeight: 1.65, color: '#333', fontSize: '17px' }}>
        <strong style={{ color: '#00416A' }}>{title}</strong>
        {' — '}
        {children}{' '}
        <a href={href} target="_blank" rel="noopener noreferrer" style={linkStyle}>
            {href}
        </a>
    </li>
);

const AutoWeb = () => {
    return (
        <div style={leftAlignStyles.pageContainer}>
            <div style={leftAlignStyles.heroSection}>
                <h1 style={leftAlignStyles.heroTitle}>
                    AutoWeb
                </h1>
                <p style={leftAlignStyles.heroSubtitle}>
                    Curated demo applications and APIs for hands-on test automation practice
                </p>
            </div>

            <div style={cardStyle}>
                <p style={{ fontSize: '18px', lineHeight: 1.75, color: '#333', margin: '0 0 16px 0' }}>
                    Reliable practice sites help you learn locators, waits, APIs, and security checks without
                    touching production systems. Use this page as a launch pad: each entry includes a short
                    summary of what it is good for and a direct link so you can design exercises, spikes, and
                    portfolio demos with realistic behavior—dynamic UIs, authentication, CRUD APIs, and
                    intentional flaws for security tooling.
                </p>
                <p style={{ fontSize: '18px', lineHeight: 1.75, color: '#333', margin: 0 }}>
                    Start with a small goal (for example, login plus one happy-path flow), then layer in
                    negative cases, data setup, and reporting. Prefer official or long-running sandboxes;
                    respect terms of use and rate limits when hammering APIs.
                </p>
            </div>

            <div style={cardStyle}>
                <h2 style={h2Style}>E-commerce demo (quick reference)</h2>
                <p style={{ fontSize: '18px', lineHeight: 1.6, color: '#333', margin: 0 }}>
                    <a href={DEMO_WEB_SHOP_URL} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                        Demo Web Shop
                    </a>
                    {' '}
                    <span style={{ color: '#666' }}>=</span>{' '}
                    <a href={DEMO_WEB_SHOP_URL} target="_blank" rel="noopener noreferrer" style={{ ...linkStyle, fontWeight: 400 }}>
                        {DEMO_WEB_SHOP_URL}
                    </a>
                </p>
            </div>

            <div style={cardStyle}>
                <h2 style={h2Style}>Top Web UI automation practice sites</h2>
                <ul style={{ margin: 0, paddingLeft: '22px' }}>
                    <ResourceItem title="The Internet (Herokuapp)" href="https://the-internet.herokuapp.com/">
                        A comprehensive site for testing dynamic content, dropdowns, drag-and-drop, frames, and hovers.
                    </ResourceItem>
                    <ResourceItem title="SauceDemo" href="https://www.saucedemo.com/">
                        Ideal for beginners practicing login, cart navigation, and basic UI automation (Swag Labs).
                    </ResourceItem>
                    <ResourceItem title="Commit Quality" href="https://commitquality.com/">
                        A React-based app built for modern automation tools like Playwright, featuring CRUD-style flows.
                    </ResourceItem>
                    <ResourceItem title="Practice Automation (automateNow)" href="https://practice-automation.com/">
                        Focuses on challenging UI tasks like gestures, specialized forms, and popups.
                    </ResourceItem>
                </ul>
            </div>

            <div style={cardStyle}>
                <h2 style={h2Style}>API automation practice sites</h2>
                <ul style={{ margin: 0, paddingLeft: '22px' }}>
                    <ResourceItem title="JSONPlaceholder" href="https://jsonplaceholder.typicode.com/">
                        A free online REST API for testing CRUD operations (GET, POST, PUT, DELETE) with predictable fake data.
                    </ResourceItem>
                    <ResourceItem title="Restful Booker" href="https://restful-booker.herokuapp.com/apidoc/index.html">
                        An API-based reservation system with documented endpoints—ideal for exercising HTTP requests and auth flows.
                    </ResourceItem>
                    <ResourceItem title="Practice ExpandTesting" href="https://practice.expandtesting.com/">
                        Structured UI and API examples (including Swagger-style docs) for CRUD, authentication, and broader QA scenarios.
                    </ResourceItem>
                    <ResourceItem
                        title="Tricentis Training CoffeeShop"
                        href="https://webservice.toscacloud.com/api/ui/index.html?urls.primaryName=Tricentis%20Training%20CoffeeShop"
                    >
                        Hosted API UI (OpenAPI/Swagger-style) for the Tricentis Training CoffeeShop service—useful for exploring endpoints and trying requests against a training backend.
                    </ResourceItem>
                </ul>
            </div>

            <div style={cardStyle}>
                <h2 style={h2Style}>Specialized and security practice</h2>
                <ul style={{ margin: 0, paddingLeft: '22px' }}>
                    <ResourceItem title="OWASP Juice Shop" href="https://owasp.org/www-project-juice-shop/">
                        Highly recommended for security-focused automation: a deliberately vulnerable modern app aligned with the OWASP Top Ten and real-world flaws. See also the live project at{' '}
                        <a href="https://owasp-juice.shop" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                            owasp-juice.shop
                        </a>
                        .
                    </ResourceItem>
                    <ResourceItem title="Applitools Demo Site" href="https://applitools.com/">
                        Focused on visual AI and intelligent test automation—explore trials, docs, and examples from the vendor home.
                    </ResourceItem>
                </ul>
            </div>
        </div>
    );
};

export default AutoWeb;
