/**
 * Example Course Data Structure
 * This file demonstrates the data structure needed for CoursePageLayout
 * Use this as a template when refactoring course pages
 */

import React from 'react';

export const exampleSecurityCourseData = {
    hero: {
        title: "Security Testing & Penetration Testing Course Outline",
        subtitle: "Master security testing methodologies and penetration testing techniques to protect applications from vulnerabilities"
    },
    introduction: {
        programTitle: "Security Testing & Penetration Testing Program",
        paragraphs: [
            "Our comprehensive Security Testing & Penetration Testing program is designed to equip you with the skills needed to identify, assess, and remediate security vulnerabilities in web applications, APIs, and network infrastructure. Whether you're a QA professional, developer, or cybersecurity enthusiast, this course covers industry-leading security testing tools, methodologies, and ethical hacking techniques used by cybersecurity professionals.",
            <>
                You'll master powerful security testing tools including <strong style={{ color: '#00416A' }}>OWASP ZAP, Burp Suite, Nmap, Metasploit, Wireshark, ReadyAPI</strong>, and more. Our curriculum also integrates cutting-edge AI technologies including <strong style={{ color: '#00416A' }}>OpenAI GPT, Anthropic Claude, and Microsoft Copilot</strong> for AI-assisted vulnerability analysis, intelligent security testing, and automated security report generation.
            </>,
            "Our hands-on, project-based approach ensures you gain practical experience in vulnerability assessment, penetration testing, security code review, and security architecture analysis. You'll complete portfolio-ready projects that demonstrate your mastery of security testing tools, methodologies, and AI-enhanced security capabilities.",
            "Join our Security Testing & Penetration Testing program and become an expert in application security! Our comprehensive curriculum prepares you for roles as Security Test Engineer, Penetration Tester, Security Analyst, and AI-Enhanced Security Specialist."
        ]
    },
    roi: {
        title: "Return on Investment (ROI) for Security Testing",
        paragraphs: [
            "Security testing and penetration testing are among the most critical and high-paying specializations in cybersecurity. With the increasing frequency and sophistication of cyber attacks, skilled security professionals are in extremely high demand across all industries, especially in finance, healthcare, government, and technology sectors.",
            <>
                Our comprehensive Security Testing & Penetration Testing program prepares you for immediate entry into specialized roles with practical, hands-on experience in vulnerability assessment, penetration testing, and security analysis. Graduates typically see a <strong style={{ color: '#00416A' }}>300-500% return on investment</strong> within the first year, with security test engineers and penetration testers earning among the highest salaries in the QA and cybersecurity fields.
            </>,
            "Whether you're looking to specialize in security testing, transition from general QA or development, or enhance your skills with security expertise, this program provides the foundation for long-term success in the rapidly growing and highly lucrative field of cybersecurity and application security."
        ]
    },
    learningPath: {
        curriculumTitle: "Security Testing & Penetration Testing Program Curriculum",
        modules: [
            [
                { number: "Module 1", title: "Security Fundamentals" },
                { number: "Module 2", title: "OWASP ZAP & Burp Suite" }
            ],
            [
                { number: "Module 3", title: "Network Security Testing" },
                { number: "Module 4", title: "Penetration Testing" }
            ],
            [
                { number: "Module 5", title: "Web App Security", isHighlighted: true },
                { number: "Module 6", title: "Advanced Topics & Capstone" }
            ]
        ],
        aiIntegration: [
            { modules: "Modules 1-2", title: "AI-Assisted Security Analysis" },
            { modules: "Module 3", title: "AI-Powered Vulnerability Detection" },
            { modules: "Modules 4-5", title: "AI Security Strategy & Reporting" },
            { modules: "Module 6", title: "AI-Enhanced Security Solutions" }
        ],
        roiBenefits: [
            { icon: "💰", title: "Entry-Level Opportunities", description: "Security testers earn $70K-95K, with clear paths to senior roles" },
            { icon: "💼", title: "Career Foundation", description: "Essential foundation for advancing to security lead and penetration tester roles" },
            { icon: "🚀", title: "Career Growth", description: "Fast-track to Security Engineer, Penetration Tester, or Security Architect positions" },
            { icon: "🌐", title: "High Demand", description: "Security skills are essential and in constant demand across all industries" },
            { icon: "💡", title: "AI Specialization", description: "Become an AI-enhanced security specialist with cutting-edge vulnerability detection skills" },
            { icon: "📈", title: "Long-term ROI", description: "Potential lifetime earnings of $3M-6M+ in security careers, with pathways to $150K+ roles" }
        ],
        legendText: "Build from security fundamentals to advanced penetration testing and security architecture, with AI integration throughout the entire curriculum"
    },
    modules: [
        {
            moduleNumber: "Module 1",
            moduleTitle: "Security Testing Fundamentals & Core Concepts",
            topics: [
                "Introduction to Security Testing: Security testing vs. functional testing, security testing lifecycle, security testing objectives",
                "Security Testing Types: Vulnerability scanning, penetration testing, security auditing, risk assessment, security code review",
                "OWASP Top 10: Understanding the most critical web application security risks, attack vectors, prevention techniques",
                "Security Testing Methodologies: OWASP Testing Guide, PTES (Penetration Testing Execution Standard), security testing frameworks",
                "Legal and Ethical Considerations: Authorization, scope, responsible disclosure, compliance requirements",
                "Projects: Analyze security requirements, create security test plans, understand security testing lifecycle",
                "AI-Assisted Learning: Using GPT, Copilot, and Claude for security test planning, vulnerability analysis, and security strategy development"
            ],
            learningOutcomes: [
                "Understand security testing fundamentals and principles",
                "Master OWASP Top 10 and security testing methodologies",
                "Create comprehensive security test plans and strategies",
                "Use AI tools to enhance security test planning and analysis"
            ],
            aiTopics: [
                { label: "AI Security Planning", description: "Using GPT, Claude, and Copilot to generate security test plans and strategies" },
                { label: "AI Vulnerability Analysis", description: "Leveraging AI to analyze security requirements and identify potential vulnerabilities" }
            ],
            earningOpportunities: [
                { label: "Junior Security Tester", description: "Entry-level positions ($70-85K annually)" },
                { label: "Security Audit Services", description: "Create security audit plans for clients ($2,000-5,000 per project)" }
            ]
        }
        // Add more modules as needed
    ],
    whatYoullLearn: {
        title: "What You'll Learn",
        categories: [
            {
                title: "Security Fundamentals",
                items: [
                    "OWASP Top 10 & Security Risks",
                    "Security Testing Methodologies",
                    "Vulnerability Assessment",
                    "Risk Assessment & Analysis"
                ]
            },
            {
                title: "Tools & Techniques",
                items: [
                    "OWASP ZAP & Burp Suite",
                    "Nmap & Wireshark",
                    "Metasploit Framework",
                    "ReadyAPI for API Security Testing",
                    "Security Code Review Tools"
                ]
            },
            {
                title: "Advanced Topics",
                items: [
                    "Web Application Security Testing",
                    "Penetration Testing",
                    "Vulnerability Reporting & Remediation",
                    "AI-Enhanced Security Testing"
                ]
            }
        ]
    },
    callToAction: {
        title: "Ready to Start Your Security Testing Journey?",
        description: "Join our comprehensive Security Testing & Penetration Testing program and master the tools and techniques used by cybersecurity professionals to protect applications from threats.",
        buttonText: "Enroll Now",
        enrollUrl: "https://gitsics.com/enroll/"
    }
};
