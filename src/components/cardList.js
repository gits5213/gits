/**
 * CardList Component - Displays course cards in a grid
 * Uses reusable CourseCard component and modern design system
 */

import React from 'react'
import Grid from './ui/Grid'
import CourseCard from './ui/CourseCard'
import { spacing } from '../utils/universityDesignSystem'
import codeForkids from '../images/codeForKids.png'
import webDev from '../images/webDev.png'
import uiManualTest from '../images/uiManualTest.png'
import uiAutoTest from '../images/uiAutoTest.png'
import apiManualTest from '../images/apiManualTest.png'
import apiAutoTest from '../images/apiAutoTest.png'
import cypressIO from '../images/cypressIO.png'
import playwright from '../images/playwright.png'
import webAccessibility from '../images/webAccessibility.png'

const CardList = () => {
    const cards = [
        {
            id: 1,
            courseName: 'Code4Kids',
            techStack: 'Scratch, Python, JavaScript, HTML/CSS',
            image: codeForkids,
            link: '/courses/code4kids',
            category: 'Education',
            alt: 'Code4Kids Course'
        },
        {
            id: 2,
            courseName: 'Web Development',
            techStack: 'HTML, CSS, JavaScript, React, Node.js',
            image: webDev,
            link: '/courses/webdevelopment',
            category: 'Development'
        },
        {
            id: 3,
            courseName: 'UI Manual Testing',
            techStack: 'Test Planning, Test Cases, Bug Reporting, JIRA',
            image: uiManualTest,
            link: '/courses/manual',
            category: 'Testing'
        },
        {
            id: 4,
            courseName: 'UI Automation',
            techStack: 'Selenium, Playwright, Cypress, WebDriverIO',
            image: uiAutoTest,
            link: '/courses/automation',
            category: 'Automation'
        },
        {
            id: 5,
            courseName: 'API Manual Testing',
            techStack: 'Postman, REST APIs, API Documentation, Test Scenarios',
            image: apiManualTest,
            link: '/courses/manual',
            category: 'Testing'
        },
        {
            id: 6,
            courseName: 'API Automation',
            techStack: 'REST Assured, Postman, Newman, SuperTest, Frisby',
            image: apiAutoTest,
            link: '/courses/automation',
            category: 'Automation'
        },
        {
            id: 7,
            courseName: 'Cypress Framework',
            techStack: 'Cypress, JavaScript, E2E Testing, API Testing',
            image: cypressIO,
            link: '/courses/automation',
            category: 'Framework'
        },
        {
            id: 8,
            courseName: 'Playwright Framework',
            techStack: 'Playwright, TypeScript, E2E Testing, Cross-browser',
            image: playwright,
            link: '/courses/automation',
            category: 'Framework'
        },
        {
            id: 9,
            courseName: '508 Compliance',
            techStack: 'WCAG, Accessibility Testing, Screen Readers, ARIA',
            image: webAccessibility,
            link: '/courses/accessibility',
            category: 'Compliance'
        }
    ]

    return (
        <Grid 
            cols={{ default: 1, sm: 2, md: 3, lg: 3 }}
            gap={spacing[8]}
            style={{ 
                padding: `${spacing[10]} ${spacing[5]}`,
                maxWidth: '1400px',
                margin: '0 auto'
            }}
        >
            {cards.map((card) => (
                <CourseCard
                    key={card.id}
                    {...card}
                />
            ))}
        </Grid>
    )
}

export default CardList
