import React from 'react';
import link from '../../../utilities/links.json';
import GoogleAd from '../../../components/GoogleAd';
import Footer from '../../../components/footer';

const resNetwork = () => {
    return(
        <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '40px 20px'
        }}>
            {/* Hero Section */}
            <div style={{
                background: 'linear-gradient(135deg, #00416A 0%, #005a8a 100%)',
                color: '#ffffff',
                padding: '60px 20px',
                textAlign: 'center',
                borderRadius: '12px',
                marginBottom: '40px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }}>
                <h1 style={{
                    fontSize: '48px',
                    marginBottom: '20px',
                    fontWeight: 'bold'
                }}>
                    Networking
                </h1>
                <p style={{
                    fontSize: '20px',
                    opacity: '0.95'
                }}>
                    Understanding IP Addresses, VPNs, and Proxy Servers
                </p>
            </div>

            {/* VPN Image Section */}
            <div style={{
                textAlign: 'center',
                marginBottom: '40px',
                backgroundColor: '#f8f9fa',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
                <img 
                    src={link.VPN} 
                    alt='VPN Logo'
                    style={{
                        width: '100%',
                        maxWidth: '600px',
                        height: 'auto',
                        borderRadius: '8px'
                    }}
                />
            </div>

            {/* Main Content */}
            <div style={{
                backgroundColor: '#ffffff',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                marginBottom: '40px'
            }}>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '30px'
                }}>
                    A virtual private network (VPN) gives you online privacy and anonymity by creating a private network from a public internet connection. VPNs mask your internet protocol (IP) address so your online actions are virtually untraceable.
                </p>

                <h2 style={{
                    color: '#00416A',
                    fontSize: '32px',
                    marginBottom: '20px',
                    marginTop: '40px',
                    fontWeight: 'bold'
                }}>
                    How Do IP Addresses Work?
                </h2>
                <p style={{
                    fontSize: '18px',
                    color: '#666',
                    marginBottom: '20px'
                }}>
                    What's an IP address and how does it work?
                </p>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold'
                }}>
                    What's an IP Address?
                </h3>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '20px'
                }}>
                    An IP address is a unique identifier for every machine using the internet. Known as your "internet protocol address," this identifier is written as a string of numbers separated by periods. (Google "what is my IP address" to see yours.)
                </p>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '20px'
                }}>
                    <a href={link.IP_ADDRESS} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>IP Address</a>, We could talk about the two different standards for IP addresses. <a href={link.IPV6} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>Internet Protocol Version 6</a> (IPv6) is the most recent version of IP, while <a href={link.IPV4} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>Internet Protocol Version 4</a> (IPv4) was the first IP address used by the public. Most addresses are IPv4. It's the most widely-deployed IP used to connected devices to the internet.
                </p>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '20px'
                }}>
                    When we crunch the numbers, we see that IPv4's 32-bit address allows for about 4 billion addresses. While that sounds like a lot, we can safely assume that we already have 4 billion devices that want to connect to the internet. (See for yourself: <a href={link.IPV4_POOL} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>these guys track how many IPv4s are left</a>.)
                </p>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '20px'
                }}>
                    IPv6 uses eight blocks of four hexadecimal digits; it was designed as an upgrade that also satisfies the need for more addresses. In pure theory, there are <a href={link.UNDECLLION} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>340 undecillion IPv6 addresses</a>. That's more addresses than atoms on the surface of the Earth.
                </p>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold'
                }}>
                    How Do IP Addresses Work?
                </h3>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '20px'
                }}>
                    When you jump online to send an email, you're accessing a network that is connected to the internet itself or one that gives you access to the internet. Perhaps that's connecting to whatever internet service provider (ISP) you have at home or using a company network in the office.
                </p>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '20px'
                }}>
                    To do this successfully, your computer uses internet protocol, and your IP address is used as a virtual return address to establish a connection.
                </p>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold'
                }}>
                    Sidebar: Reading an IP Address
                </h3>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '20px'
                }}>
                    The blocks of hexadecimal digits that make up an address are called octets. These octets create an addressing scheme that accommodates different network types.
                </p>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '20px'
                }}>
                    <a href={link.TWO_PART} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>IP addresses are broken into two parts:</a> network address and host address (host = the specific device on the network).
                </p>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '20px'
                }}>
                    This is where it all comes together. The first few octets in an IP address identify the network. The exact amount of octets depends on the class of network. For example, in a Class A address, the network portion is contained within the first octet, while the rest of the address is used to denote <a href={link.SUBNET} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>subnets</a> and hosts. In a Class B address, the first two octets are the network portion, while the rest is for subnets and hosts, etc.
                </p>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold'
                }}>
                    How Are IP Addresses Assigned?
                </h3>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '20px'
                }}>
                    All of these addresses are allocated by the <a href={link.NUM_AUTHO} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>Internet Assigned Numbers Authority</a>. This nonprofit U.S. corporation coordinates global IP addresses, which you can read all about <a href={link.HERE} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>here</a>.
                </p>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '20px'
                }}>
                    More specifically, IANA assigns blocks of IP addresses to regional internet registries. In turn, these regional registries allocate addresses to ISP, companies, schools, and similar institutions within their zone.
                </p>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '20px'
                }}>
                    That means your IP address probably comes from your company network or ISP, which received that address from a regional internet registry, which was allocated a block of addresses from IANA. (It's a process.)
                </p>
            </div>

            {/* Action Buttons */}
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '15px',
                justifyContent: 'center',
                marginBottom: '40px'
            }}>
                <a 
                    href={link.FIND_IP} 
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
                        e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#00416A';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
                    }}
                >
                    Find Your IP Address on Windows or Mac
                </a>
                <a 
                    href={link.IP_WEBSITE} 
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
                        e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#00416A';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
                    }}
                >
                    Learn More...
                </a>
            </div>

            {/* Proxy Server Section */}
            <div style={{
                backgroundColor: '#ffffff',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                marginBottom: '40px'
            }}>
                <div style={{
                    textAlign: 'center',
                    marginBottom: '30px'
                }}>
                    <img 
                        src={link.PROXY_LOGO} 
                        alt='Proxy Logo'
                        style={{
                            width: '100%',
                            maxWidth: '650px',
                            height: 'auto',
                            borderRadius: '8px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                        }}
                    />
                </div>
                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold'
                }}>
                    Proxy server
                </h3>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333'
                }}>
                    A <a href={link.PROXY} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>proxy server</a> provides a gateway between users and the internet. It is a server, referred to as an "intermediary" because it goes between end-users and the web pages they visit online. When a computer connects to the internet, it uses an IP address.
                </p>
            </div>

            <div>
                <GoogleAd slot="1541085932" classNames="page-right-side" />
            </div>
            <section style={{ marginTop: '40px' }}>
                <Footer />
            </section>
        </div>
    )
}
export default resNetwork;
