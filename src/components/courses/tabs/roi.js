import React from 'react';

const roi = () => {
    return(
        <div style={{
            backgroundColor: '#f8f9fa',
            padding: '40px',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            marginBottom: '40px'
        }}>
            <h2 style={{
                color: '#00416A',
                fontSize: '32px',
                marginBottom: '30px',
                fontWeight: 'bold',
                textAlign: 'center'
            }}>
                Return on Investment (ROI) for KIDS
            </h2>
            
            <div style={{
                backgroundColor: '#ffffff',
                padding: '30px',
                borderRadius: '8px',
                border: '2px solid #00416A',
                lineHeight: '1.8'
            }}>
                <div style={{
                    backgroundColor: '#e8f4f8',
                    padding: '25px',
                    borderRadius: '8px',
                    marginBottom: '25px'
                }}>
                    <p style={{
                        fontSize: '18px',
                        color: '#333',
                        margin: 0,
                        fontWeight: '500'
                    }}>
                        I am paying my <strong style={{ color: '#00416A' }}>KIDS</strong> $20-30/hour to <strong style={{ color: '#00416A' }}>CODE</strong> and some people are thinking this is a <strong style={{ color: '#00416A' }}>STUPID</strong> and <strong style={{ color: '#00416A' }}>DUMB IDEA!</strong> but, I would like to say this a <strong style={{ color: '#00416A' }}>GENIUS IDEA</strong> because here is <strong style={{ color: '#00416A' }}>MATH</strong> and <strong style={{ color: '#00416A' }}>REALITY!</strong>
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '25px',
                    marginBottom: '25px'
                }}>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '25px',
                        borderRadius: '8px',
                        border: '2px solid #00416A',
                        textAlign: 'center'
                    }}>
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '24px',
                            marginBottom: '15px',
                            fontWeight: 'bold'
                        }}>
                            Traditional Approach
                        </h3>
                        <div style={{
                            fontSize: '18px',
                            color: '#333',
                            lineHeight: '1.8'
                        }}>
                            <p style={{ margin: '10px 0' }}>
                                <strong style={{ color: '#00416A' }}>First Car at Age 16:</strong>
                            </p>
                            <p style={{ margin: '10px 0' }}>
                                Car: <strong style={{ color: '#00416A' }}>$15K</strong>
                            </p>
                            <p style={{ margin: '10px 0' }}>
                                Insurance: <strong style={{ color: '#00416A' }}>$6K</strong>
                            </p>
                            <p style={{ 
                                margin: '15px 0 0 0',
                                fontSize: '20px',
                                fontWeight: 'bold',
                                color: '#00416A',
                                borderTop: '2px solid #00416A',
                                paddingTop: '15px'
                            }}>
                                Total: <strong>$21K</strong>
                            </p>
                        </div>
                    </div>

                    <div style={{
                        backgroundColor: '#e8f4f8',
                        padding: '25px',
                        borderRadius: '8px',
                        border: '2px solid #00416A',
                        textAlign: 'center'
                    }}>
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '24px',
                            marginBottom: '15px',
                            fontWeight: 'bold'
                        }}>
                            Coding Investment Approach
                        </h3>
                        <div style={{
                            fontSize: '18px',
                            color: '#333',
                            lineHeight: '1.8'
                        }}>
                            <p style={{ margin: '10px 0' }}>
                                <strong style={{ color: '#00416A' }}>Over 5 Years:</strong>
                            </p>
                            <p style={{ margin: '10px 0' }}>
                                Paying $20-30/hour to <strong style={{ color: '#00416A' }}>CODE</strong>
                            </p>
                            <p style={{ margin: '10px 0' }}>
                                Investment per kid: <strong style={{ color: '#00416A' }}>$10K</strong>
                            </p>
                            <p style={{ 
                                margin: '15px 0 0 0',
                                fontSize: '20px',
                                fontWeight: 'bold',
                                color: '#00416A',
                                borderTop: '2px solid #00416A',
                                paddingTop: '15px'
                            }}>
                                Savings: <strong>$11K</strong>
                            </p>
                        </div>
                    </div>
                </div>

                <div style={{
                    backgroundColor: '#00416A',
                    color: '#ffffff',
                    padding: '30px',
                    borderRadius: '8px',
                    marginTop: '25px'
                }}>
                    <h3 style={{
                        fontSize: '24px',
                        marginBottom: '20px',
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }}>
                        The Key Difference
            </h3>
                    <p style={{
                        fontSize: '18px',
                        lineHeight: '1.8',
                        margin: 0,
                        marginBottom: '15px'
                    }}>
                        I'm not <strong>"BUYING THE CAR"</strong> but they are <strong>EARNING</strong> the <strong>CAR</strong> with the <strong>SKILL</strong> set.
                    </p>
                    <p style={{
                        fontSize: '18px',
                        lineHeight: '1.8',
                        margin: 0,
                        marginBottom: '15px'
                    }}>
                        I don't make them do this. If they want to earn it, they can. If they don't, they don't, still, they can continue education to the next level and get a faster way to complete <strong>GRADUATION!</strong>
                    </p>
                    <div style={{
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        padding: '20px',
                        borderRadius: '8px',
                        marginTop: '20px',
                        textAlign: 'center'
                    }}>
                        <p style={{
                            fontSize: '20px',
                            fontWeight: 'bold',
                            margin: 0
                        }}>
                            💡 Invest in Skills, Not Just Things
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default roi;
