import React from 'react';
import basicLogo from '../../../images/tabs/basicLogo.png';
import { getImageSrc } from '../../../utils/getImageSrc';
import { leftAlignStyles } from '../../../utils/globalStyles';

const basic = () => {
    return(
        <div style={leftAlignStyles.pageContainer}>
            {/* Hero Section */}
            <div style={leftAlignStyles.heroSection}>
                <h1 style={leftAlignStyles.heroTitle}>
                    Basic
                </h1>
                <p style={leftAlignStyles.heroSubtitle}>
                    Fundamental Resources and Information
                </p>
            </div>

            {/* Image Section */}
            <div style={leftAlignStyles.imageSection}>
                <img 
                    src={getImageSrc(basicLogo)} 
                    alt='Basic Logo'
                    style={{
                        width: '100%',
                        maxWidth: '400px',
                        height: 'auto',
                        borderRadius: '8px'
                    }}
                />
            </div>

            <div>
            </div>
            <section style={{ marginTop: '40px' }}>
                </section>
        </div>
    )
}
export default basic;
