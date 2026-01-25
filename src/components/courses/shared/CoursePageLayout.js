import React from 'react';
import CourseHero from './CourseHero';
import CourseIntroduction from './CourseIntroduction';
import CourseROI from './CourseROI';
import LearningPathOverview from './LearningPathOverview';
import CourseModule from './CourseModule';
import WhatYoullLearn from './WhatYoullLearn';
import CourseCallToAction from './CourseCallToAction';

/**
 * Main Course Page Layout Component
 * Provides a consistent structure for all course pages
 * @param {Object} courseData - Course data object containing all course information
 */
const CoursePageLayout = ({ courseData }) => {
    const {
        hero,
        introduction,
        roi,
        learningPath,
        modules,
        whatYoullLearn,
        callToAction
    } = courseData;

    return (
        <div className='page-tab-body' style={{ 
            height: 'auto', 
            minHeight: 'auto', 
            paddingBottom: '100px', 
            marginBottom: '40px' 
        }}>
            {/* Hero Section */}
            <CourseHero title={hero.title} subtitle={hero.subtitle} />

            {/* Main Content Container */}
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 20px'
            }}>
                {/* Introduction Section */}
                {introduction && (
                    <CourseIntroduction 
                        programTitle={introduction.programTitle}
                        paragraphs={introduction.paragraphs}
                    />
                )}

                {/* ROI Section */}
                {roi && (
                    <CourseROI 
                        title={roi.title}
                        paragraphs={roi.paragraphs}
                    />
                )}

                {/* Program Outline Curriculum Section */}
                {learningPath && (
                    <section style={{
                        marginBottom: '60px'
                    }}>
                        <div style={{
                            backgroundColor: '#f8f9fa',
                            padding: '40px',
                            borderRadius: '8px',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                        }}>
                            <h2 style={{
                                color: '#00416A',
                                fontSize: '32px',
                                marginBottom: '40px',
                                fontWeight: 'bold',
                                textAlign: 'center'
                            }}>
                                {learningPath.curriculumTitle}
                            </h2>

                            {/* Learning Path Overview */}
                            <LearningPathOverview 
                                modules={learningPath.modules}
                                aiIntegration={learningPath.aiIntegration}
                                roiBenefits={learningPath.roiBenefits}
                                legendText={learningPath.legendText}
                            />

                            {/* Modules */}
                            {modules && modules.map((module, index) => (
                                <CourseModule
                                    key={index}
                                    moduleNumber={module.moduleNumber}
                                    moduleTitle={module.moduleTitle}
                                    topics={module.topics}
                                    learningOutcomes={module.learningOutcomes}
                                    aiTopics={module.aiTopics}
                                    earningOpportunities={module.earningOpportunities}
                                />
                            ))}
                        </div>
                    </section>
                )}

                {/* What You'll Learn Section */}
                {whatYoullLearn && (
                    <WhatYoullLearn 
                        title={whatYoullLearn.title}
                        categories={whatYoullLearn.categories}
                    />
                )}

                {/* Call to Action */}
                {callToAction && (
                    <CourseCallToAction 
                        title={callToAction.title}
                        description={callToAction.description}
                        buttonText={callToAction.buttonText}
                        enrollUrl={callToAction.enrollUrl}
                    />
                )}
            </div>
        </div>
    );
};

export default CoursePageLayout;
