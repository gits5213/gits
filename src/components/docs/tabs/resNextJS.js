import React from 'react';
import link from '../../../utilities/links.json';
import { getImageSrc } from '../../../utils/getImageSrc';
import { leftAlignStyles } from '../../../utils/globalStyles';

const resNextJS = () => {
    return(
        <div style={leftAlignStyles.pageContainer}>
            {/* Hero Section */}
            <div style={{
                ...leftAlignStyles.heroSection,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '40px',
                flexWrap: 'wrap'
            }}>
                <div style={{ flex: '1', minWidth: '300px' }}>
                    <h1 style={leftAlignStyles.heroTitle}>
                        Next.js
                    </h1>
                    <p style={leftAlignStyles.heroSubtitle}>
                        The React Framework for Production
                    </p>
                </div>
                <div style={{
                    flex: '0 0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end'
                }}>
                    <div style={{
                        width: '300px',
                        height: '300px',
                        backgroundColor: '#000000',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                        fontSize: '48px',
                        fontWeight: 'bold',
                        fontFamily: 'monospace'
                    }}>
                        ▲
                    </div>
                </div>
            </div>

            {/* GitHub Links */}
            <div style={leftAlignStyles.linksContainer}>
                <a 
                    href={link.NEXTJS_GITHUB || 'https://github.com/vercel/next.js'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '12px 30px',
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#ffffff',
                        backgroundColor: '#000000',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#333333';
                        e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#000000';
                        e.target.style.transform = 'translateY(0)';
                    }}
                >
                    <img src={getImageSrc(link.GITHUB_ICON)} alt='github' style={{ marginRight: '10px', width: '20px', height: '20px' }} />
                    Next.js on GitHub                 
                </a>
                <a 
                    href={link.NEXTJS_ORG || 'https://nextjs.org/'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '12px 30px',
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#ffffff',
                        backgroundColor: '#0070f3',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#0051cc';
                        e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#0070f3';
                        e.target.style.transform = 'translateY(0)';
                    }}
                >
                    <img src={link.GITHUB_ICON} alt='github' style={{ marginRight: '10px', width: '20px', height: '20px' }} />
                    Next.js.org                 
                </a>
            </div>

            {/* Main Content */}
            <div style={{
                backgroundColor: '#ffffff',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                marginBottom: '40px'
            }}>
                <h2 style={{
                    color: '#00416A',
                    fontSize: '32px',
                    marginBottom: '20px',
                    fontWeight: 'bold'
                }}>
                    What is Next.js?
                </h2>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '30px'
                }}>
                    <a href={link.NEXTJS_ORG || 'https://nextjs.org/'} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>Next.js</a> is a React framework that enables you to build full-stack web applications. It provides the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.
                </p>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold'
                }}>
                    Built on React
                </h3>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '20px'
                }}>
                    Next.js is built on top of React, the most popular JavaScript library for building user interfaces. If you know React, you already know Next.js. Next.js adds powerful features like Server-Side Rendering (SSR), Static Site Generation (SSG), API Routes, and automatic code splitting to help you build production-ready applications faster.
                </p>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold'
                }}>
                    Server-Side Rendering (SSR)
                </h3>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '20px'
                }}>
                    Next.js enables you to render React components on the server before sending the HTML to the client. This improves initial page load performance, enables better SEO, and provides a better user experience. Pages are rendered on each request, ensuring your content is always up-to-date.
                </p>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold'
                }}>
                    Static Site Generation (SSG)
                </h3>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '20px'
                }}>
                    With Next.js, you can pre-render pages at build time using Static Site Generation. This generates HTML pages that can be served from a CDN, providing the fastest possible page loads. Next.js supports both static and dynamic routes, allowing you to choose the best rendering strategy for each page.
                </p>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold'
                }}>
                    API Routes
                </h3>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '20px'
                }}>
                    Next.js includes built-in API Routes, allowing you to create API endpoints as serverless functions. You can build your entire full-stack application within a single Next.js project, handling both frontend and backend logic. API routes are perfect for handling form submissions, database operations, and third-party API integrations.
                </p>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold'
                }}>
                    File-Based Routing
                </h3>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '20px'
                }}>
                    Next.js uses a file-based routing system. Simply create files in the `pages` directory (or `app` directory in Next.js 13+), and they automatically become routes. This eliminates the need for complex routing configuration and makes it easy to understand your application's structure.
                </p>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold'
                }}>
                    Automatic Code Splitting
                </h3>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '20px'
                }}>
                    Next.js automatically splits your code into smaller chunks, loading only what's needed for each page. This reduces the initial bundle size and improves page load times. The framework also prefetches linked pages in the background, making navigation feel instant.
                </p>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold'
                }}>
                    TypeScript Support
                </h3>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '20px'
                }}>
                    Next.js has built-in TypeScript support. Simply rename your files from `.js` to `.tsx` and start using TypeScript. The framework provides excellent type safety, autocomplete, and error checking out of the box, making it easier to build robust applications.
                </p>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold'
                }}>
                    Image Optimization
                </h3>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '20px'
                }}>
                    Next.js includes an optimized Image component that automatically serves images in modern formats (WebP, AVIF), resizes them appropriately, and lazy loads them. This improves performance and reduces bandwidth usage without any additional configuration.
                </p>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold'
                }}>
                    CSS and Styling
                </h3>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '20px'
                }}>
                    Next.js supports multiple styling solutions including CSS Modules, Sass, Tailwind CSS, and styled-jsx. You can use global CSS files, component-scoped CSS modules, or utility-first CSS frameworks. The framework handles all the configuration automatically.
                </p>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold'
                }}>
                    Deployment
                </h3>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '20px'
                }}>
                    Next.js applications can be deployed anywhere. <a href={link.VERCEL || 'https://vercel.com/'} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>Vercel</a>, the creators of Next.js, provides seamless deployment with zero configuration. You can also deploy to other platforms like AWS, Azure, Google Cloud, or any Node.js hosting service.
                </p>
            </div>

            {/* Learning Resources */}
            <div style={{
                backgroundColor: '#ffffff',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                marginBottom: '40px'
            }}>
                <h2 style={{
                    color: '#00416A',
                    fontSize: '32px',
                    marginBottom: '20px',
                    fontWeight: 'bold'
                }}>
                    Key Concepts to Learn
                </h2>
                
                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold'
                }}>
                    Pages and Routing
                </h3>
                <ul style={{
                    fontSize: '16px',
                    lineHeight: '2',
                    color: '#333',
                    paddingLeft: '20px',
                    marginBottom: '20px'
                }}>
                    <li>Understanding the `pages` directory structure</li>
                    <li>Dynamic routes with `[id].js` and `[...slug].js`</li>
                    <li>Nested routes and route groups</li>
                    <li>Programmatic navigation with `next/link` and `next/router`</li>
                    <li>Route prefetching and optimization</li>
                </ul>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold'
                }}>
                    Data Fetching
                </h3>
                <ul style={{
                    fontSize: '16px',
                    lineHeight: '2',
                    color: '#333',
                    paddingLeft: '20px',
                    marginBottom: '20px'
                }}>
                    <li><code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px' }}>getStaticProps</code> for Static Site Generation</li>
                    <li><code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px' }}>getServerSideProps</code> for Server-Side Rendering</li>
                    <li><code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px' }}>getStaticPaths</code> for dynamic static pages</li>
                    <li>Client-side data fetching with `useEffect` and SWR</li>
                    <li>Incremental Static Regeneration (ISR)</li>
                </ul>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold'
                }}>
                    API Routes
                </h3>
                <ul style={{
                    fontSize: '16px',
                    lineHeight: '2',
                    color: '#333',
                    paddingLeft: '20px',
                    marginBottom: '20px'
                }}>
                    <li>Creating API endpoints in the `pages/api` directory</li>
                    <li>Handling HTTP methods (GET, POST, PUT, DELETE)</li>
                    <li>Request and response handling</li>
                    <li>Middleware and authentication</li>
                    <li>Connecting to databases and external APIs</li>
                </ul>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold'
                }}>
                    App Router (Next.js 13+)
                </h3>
                <ul style={{
                    fontSize: '16px',
                    lineHeight: '2',
                    color: '#333',
                    paddingLeft: '20px',
                    marginBottom: '20px'
                }}>
                    <li>Understanding the new `app` directory structure</li>
                    <li>Server Components vs Client Components</li>
                    <li>Layouts and nested layouts</li>
                    <li>Loading states and error boundaries</li>
                    <li>Streaming and Suspense</li>
                    <li>Route handlers (replacing API routes)</li>
                </ul>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold'
                }}>
                    Performance Optimization
                </h3>
                <ul style={{
                    fontSize: '16px',
                    lineHeight: '2',
                    color: '#333',
                    paddingLeft: '20px',
                    marginBottom: '20px'
                }}>
                    <li>Image optimization with `next/image`</li>
                    <li>Font optimization with `next/font`</li>
                    <li>Code splitting and lazy loading</li>
                    <li>Bundle analysis and optimization</li>
                    <li>Performance monitoring and metrics</li>
                </ul>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold'
                }}>
                    Deployment and Production
                </h3>
                <ul style={{
                    fontSize: '16px',
                    lineHeight: '2',
                    color: '#333',
                    paddingLeft: '20px',
                    marginBottom: '20px'
                }}>
                    <li>Building and exporting static sites</li>
                    <li>Deploying to Vercel</li>
                    <li>Environment variables and configuration</li>
                    <li>Custom server setup</li>
                    <li>Monitoring and analytics</li>
                </ul>
            </div>

            {/* References */}
            <div style={{
                marginBottom: '40px'
            }}>
                <h2 style={{
                    color: '#00416A',
                    fontSize: '32px',
                    marginBottom: '20px',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>
                    References
                </h2>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '15px',
                    justifyContent: 'center'
                }}>
                    <a
                        href={link.NEXTJS_ORG || 'https://nextjs.org/'}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-block',
                            padding: '12px 30px',
                            fontSize: '16px',
                            fontWeight: '600',
                            color: '#ffffff',
                            backgroundColor: '#00416A',
                            textDecoration: 'none',
                            borderRadius: '8px',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#005a8a';
                            e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#00416A';
                            e.target.style.transform = 'translateY(0)';
                        }}
                    >
                        Next.js.org
                    </a>
                    <a
                        href={link.NEXTJS_DOCS || 'https://nextjs.org/docs'}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-block',
                            padding: '12px 30px',
                            fontSize: '16px',
                            fontWeight: '600',
                            color: '#ffffff',
                            backgroundColor: '#00416A',
                            textDecoration: 'none',
                            borderRadius: '8px',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#005a8a';
                            e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#00416A';
                            e.target.style.transform = 'translateY(0)';
                        }}
                    >
                        Next.js Docs
                    </a>
                    <a
                        href={link.NEXTJS_LEARN || 'https://nextjs.org/learn'}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-block',
                            padding: '12px 30px',
                            fontSize: '16px',
                            fontWeight: '600',
                            color: '#ffffff',
                            backgroundColor: '#00416A',
                            textDecoration: 'none',
                            borderRadius: '8px',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#005a8a';
                            e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#00416A';
                            e.target.style.transform = 'translateY(0)';
                        }}
                    >
                        Next.js Learn
                    </a>
                    <a
                        href={link.VERCEL || 'https://vercel.com/'}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-block',
                            padding: '12px 30px',
                            fontSize: '16px',
                            fontWeight: '600',
                            color: '#ffffff',
                            backgroundColor: '#00416A',
                            textDecoration: 'none',
                            borderRadius: '8px',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#005a8a';
                            e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#00416A';
                            e.target.style.transform = 'translateY(0)';
                        }}
                    >
                        Vercel
                    </a>
                </div>
            </div>

            <div>
            </div>
            <section style={{ marginTop: '40px' }}>
                </section>
        </div>
    )
}
export default resNextJS;
