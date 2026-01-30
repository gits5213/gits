'use client';

import React from 'react';
import { pageContainerStyles } from '../../../utils/globalStyles';
import {
  APISectionContent,
  APICollapsibleSection,
  useCollapsible
} from '../shared';
import { CodeBlock, InlineCode, UpArrow } from '../../../components/shared';

const Automation = () => {
    const standardsCollapsible = useCollapsible(false);
    const bestPracticesCollapsible = useCollapsible(false);
    const prReviewCollapsible = useCollapsible(false);
    const frameworkStructureCollapsible = useCollapsible(false);

    return(
        <div style={pageContainerStyles.modern}>
            {/* Summary Section */}
            <div style={{
                backgroundColor: '#ffffff',
                padding: '30px',
                borderRadius: '12px',
                marginBottom: '40px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                border: '1px solid #e5e7eb'
            }}>
                <h2 style={{
                    color: '#00416A',
                    fontSize: '28px',
                    fontWeight: 'bold',
                    marginBottom: '20px',
                    textAlign: 'left'
                }}>
                    Overview
                </h2>
                <div style={{ marginBottom: '24px' }}>
                    <p style={{ 
                        fontSize: '17px', 
                        color: '#475569',
                        lineHeight: '1.9',
                        marginBottom: '18px',
                        textAlign: 'left'
                    }}>
                        This comprehensive checklist covers <strong>automation test case best practices</strong> that work for any UI automation framework—whether you're using <strong>Playwright</strong>, <strong>Cypress</strong>, <strong>Selenium</strong>, <strong>WebDriverIO</strong>, <strong>ProtractorJS</strong>, <strong>NightWatchJS</strong>, <strong>Tricentis Tosca</strong>, <strong>Accelq</strong>, or any other testing tool. These practices help ensure your tests are maintainable, reliable, and scalable.
                    </p>
                    <p style={{ 
                        fontSize: '17px', 
                        color: '#475569',
                        lineHeight: '1.9',
                        marginBottom: '18px',
                        textAlign: 'left'
                    }}>
                        Following these guidelines will help your team write better tests, reduce flakiness, and improve overall test suite quality. Each practice is framework-agnostic and can be adapted to your specific stack and team needs.
                    </p>
                </div>

                <div style={{ 
                    backgroundColor: '#f0f7fa',
                    padding: '16px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    marginTop: '24px'
                }}>
                    <p style={{ 
                        fontSize: '15px', 
                        color: '#475569',
                        lineHeight: '1.8',
                        margin: 0,
                        textAlign: 'left'
                    }}>
                        <strong>Framework Support:</strong> These best practices apply to <strong>Playwright</strong>, <strong>Cypress</strong>, <strong>Selenium</strong>, <strong>WebDriverIO</strong>, <strong>ProtractorJS</strong>, <strong>NightWatchJS</strong>, <strong>Tricentis Tosca</strong>, <strong>Accelq</strong>, and any other UI automation framework. Adapt the examples to your specific tool's syntax and conventions.
                    </p>
                </div>
            </div>

            {/* Content Header Navigation */}
            <div id="contents" style={{
                backgroundColor: '#ffffff',
                padding: '30px',
                borderRadius: '12px',
                marginBottom: '40px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                border: '1px solid #e5e7eb',
                scrollMarginTop: '100px'
            }}>
                <h2 style={{
                    color: '#00416A',
                    fontSize: '28px',
                    fontWeight: 'bold',
                    marginBottom: '30px',
                    textAlign: 'left'
                }}>
                    Contents
                </h2>
                
                <APICollapsibleSection
                    title="Standard Automation Framework Structure"
                    isExpanded={frameworkStructureCollapsible.isExpanded}
                    onToggle={frameworkStructureCollapsible.toggle}
                    borderColor="#667eea"
                    id="contents-framework-structure"
                >
                    <div style={{ marginBottom: '16px' }}>
                        <a 
                            href="#standard-automation-framework-structure"
                            onClick={(e) => {
                                e.preventDefault();
                                const element = document.getElementById('standard-automation-framework-structure');
                                if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}
                            style={{
                                color: '#667eea',
                                textDecoration: 'none',
                                fontSize: '16px',
                                fontWeight: '600'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.color = '#00416A';
                                e.target.style.textDecoration = 'underline';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = '#667eea';
                                e.target.style.textDecoration = 'none';
                            }}
                        >
                            → Go to Standard Automation Framework Structure Section
                        </a>
                    </div>
                    <ul style={{ paddingLeft: '20px', marginTop: '8px', marginBottom: '0', listStyle: 'none' }}>
                            <li style={{ marginBottom: '6px', fontSize: '14px', lineHeight: '1.6' }}>
                                <a href="#playwrightJS-automation-framework-structure" onClick={(e) => { e.preventDefault(); document.getElementById('playwrightJS-automation-framework-structure')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} style={{ color: '#667eea', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.color = '#00416A'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#667eea'; e.target.style.textDecoration = 'none'; }}>1) PlaywrightJS Automation Framework Structure</a>
                            </li>
                            <li style={{ marginBottom: '6px', fontSize: '14px', lineHeight: '1.6' }}>
                                <a href="#playwrightTS-automation-framework-structure" onClick={(e) => { e.preventDefault(); document.getElementById('playwrightTS-automation-framework-structure')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} style={{ color: '#667eea', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.color = '#00416A'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#667eea'; e.target.style.textDecoration = 'none'; }}>2) PlaywrightTS Automation Framework Structure</a>
                            </li>
                            <li style={{ marginBottom: '6px', fontSize: '14px', lineHeight: '1.6' }}>
                                <a href="#playwrightPY-automation-framework-structure" onClick={(e) => { e.preventDefault(); document.getElementById('playwrightPY-automation-framework-structure')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} style={{ color: '#667eea', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.color = '#00416A'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#667eea'; e.target.style.textDecoration = 'none'; }}>3) PlaywrightPY Automation Framework Structure</a>
                            </li>
                            <li style={{ marginBottom: '6px', fontSize: '14px', lineHeight: '1.6' }}>
                                <a href="#playwrightJava-automation-framework-structure" onClick={(e) => { e.preventDefault(); document.getElementById('playwrightJava-automation-framework-structure')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} style={{ color: '#667eea', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.color = '#00416A'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#667eea'; e.target.style.textDecoration = 'none'; }}>4) PlaywrightJava Automation Framework Structure</a>
                            </li>
                            <li style={{ marginBottom: '6px', fontSize: '14px', lineHeight: '1.6' }}>
                                <a href="#playwrightJSCucumber-automation-framework-structure" onClick={(e) => { e.preventDefault(); document.getElementById('playwrightJSCucumber-automation-framework-structure')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} style={{ color: '#667eea', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.color = '#00416A'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#667eea'; e.target.style.textDecoration = 'none'; }}>5) PlaywrightJSCucumber Automation Framework Structure</a>
                            </li>
                            <li style={{ marginBottom: '6px', fontSize: '14px', lineHeight: '1.6' }}>
                                <a href="#playwrightCSharp-automation-framework-structure" onClick={(e) => { e.preventDefault(); document.getElementById('playwrightCSharp-automation-framework-structure')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} style={{ color: '#667eea', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.color = '#00416A'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#667eea'; e.target.style.textDecoration = 'none'; }}>6) PlaywrightC# Automation Framework Structure</a>
                            </li>
                            <li style={{ marginBottom: '6px', fontSize: '14px', lineHeight: '1.6' }}>
                                <a href="#cypressJS-automation-framework-structure" onClick={(e) => { e.preventDefault(); document.getElementById('cypressJS-automation-framework-structure')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} style={{ color: '#667eea', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.color = '#00416A'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#667eea'; e.target.style.textDecoration = 'none'; }}>7) CypressJS Automation Framework Structure</a>
                            </li>
                            <li style={{ marginBottom: '6px', fontSize: '14px', lineHeight: '1.6' }}>
                                <a href="#cypressTS-automation-framework-structure" onClick={(e) => { e.preventDefault(); document.getElementById('cypressTS-automation-framework-structure')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} style={{ color: '#667eea', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.color = '#00416A'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#667eea'; e.target.style.textDecoration = 'none'; }}>8) CypressTS Automation Framework Structure</a>
                            </li>
                            <li style={{ marginBottom: '6px', fontSize: '14px', lineHeight: '1.6' }}>
                                <a href="#SeleniumJAVA-automation-framework-structure" onClick={(e) => { e.preventDefault(); document.getElementById('SeleniumJAVA-automation-framework-structure')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} style={{ color: '#667eea', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.color = '#00416A'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#667eea'; e.target.style.textDecoration = 'none'; }}>9) SeleniumJAVA Automation Framework Structure</a>
                            </li>
                            <li style={{ marginBottom: '6px', fontSize: '14px', lineHeight: '1.6' }}>
                                <a href="#SeleniumPY-automation-framework-structure" onClick={(e) => { e.preventDefault(); document.getElementById('SeleniumPY-automation-framework-structure')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} style={{ color: '#667eea', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.color = '#00416A'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#667eea'; e.target.style.textDecoration = 'none'; }}>10) SeleniumPY Automation Framework Structure</a>
                            </li>
                            <li style={{ marginBottom: '6px', fontSize: '14px', lineHeight: '1.6' }}>
                                <a href="#SeleniumCSharp-automation-framework-structure" onClick={(e) => { e.preventDefault(); document.getElementById('SeleniumCSharp-automation-framework-structure')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} style={{ color: '#667eea', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.color = '#00416A'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#667eea'; e.target.style.textDecoration = 'none'; }}>11) SeleniumC# Automation Framework Structure</a>
                            </li>
                            <li style={{ marginBottom: '6px', fontSize: '14px', lineHeight: '1.6' }}>
                                <a href="#seleniumJavaCucumber-automation-framework-structure" onClick={(e) => { e.preventDefault(); document.getElementById('seleniumJavaCucumber-automation-framework-structure')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} style={{ color: '#667eea', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.color = '#00416A'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#667eea'; e.target.style.textDecoration = 'none'; }}>12) SeleniumJavaCucumber Automation Framework Structure</a>
                            </li>
                        </ul>
                </APICollapsibleSection>

                <APICollapsibleSection
                    title="Automation Framework Standards & Guides"
                    isExpanded={standardsCollapsible.isExpanded}
                    onToggle={standardsCollapsible.toggle}
                    borderColor="#667eea"
                    id="contents-standards"
                >
                    <div style={{ marginBottom: '16px' }}>
                        <a 
                            href="#automation-standards-guides"
                            onClick={(e) => {
                                e.preventDefault();
                                const element = document.getElementById('automation-standards-guides');
                                if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}
                            style={{
                                color: '#667eea',
                                textDecoration: 'none',
                                fontSize: '16px',
                                fontWeight: '600'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.color = '#00416A';
                                e.target.style.textDecoration = 'underline';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = '#667eea';
                                e.target.style.textDecoration = 'none';
                            }}
                        >
                            → Go to Automation Framework Standards & Guides Section
                        </a>
                    </div>
                    <ul style={{ paddingLeft: '20px', marginTop: '8px', marginBottom: '0', listStyle: 'none' }}>
                            <li style={{ marginBottom: '6px', fontSize: '14px', lineHeight: '1.6', color: '#475569' }}>
                                <a href="#guiding-principles" onClick={(e) => { e.preventDefault(); document.getElementById('guiding-principles')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} style={{ color: '#667eea', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.color = '#00416A'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#667eea'; e.target.style.textDecoration = 'none'; }}>1) Guiding Principles</a>
                            </li>
                            <li style={{ marginBottom: '6px', fontSize: '14px', lineHeight: '1.6', color: '#475569' }}>
                                <a href="#naming-standards" onClick={(e) => { e.preventDefault(); document.getElementById('naming-standards')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} style={{ color: '#667eea', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.color = '#00416A'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#667eea'; e.target.style.textDecoration = 'none'; }}>2) Naming Standards</a>
                            </li>
                            <li style={{ marginBottom: '6px', fontSize: '14px', lineHeight: '1.6', color: '#475569' }}>
                                <a href="#page-object-naming" onClick={(e) => { e.preventDefault(); document.getElementById('page-object-naming')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} style={{ color: '#667eea', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.color = '#00416A'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#667eea'; e.target.style.textDecoration = 'none'; }}>3) Page Object Naming</a>
                            </li>
                            <li style={{ marginBottom: '6px', fontSize: '14px', lineHeight: '1.6', color: '#475569' }}>
                                <a href="#locator-strategy" onClick={(e) => { e.preventDefault(); document.getElementById('locator-strategy')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} style={{ color: '#667eea', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.color = '#00416A'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#667eea'; e.target.style.textDecoration = 'none'; }}>4) Locator Strategy</a>
                            </li>
                            <li style={{ marginBottom: '6px', fontSize: '14px', lineHeight: '1.6', color: '#475569' }}>
                                <a href="#coding-best-practices" onClick={(e) => { e.preventDefault(); document.getElementById('coding-best-practices')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} style={{ color: '#667eea', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.color = '#00416A'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#667eea'; e.target.style.textDecoration = 'none'; }}>5) Coding Best Practices</a>
                            </li>
                            <li style={{ marginBottom: '6px', fontSize: '14px', lineHeight: '1.6', color: '#475569' }}>
                                <a href="#linting-formatting" onClick={(e) => { e.preventDefault(); document.getElementById('linting-formatting')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} style={{ color: '#667eea', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.color = '#00416A'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#667eea'; e.target.style.textDecoration = 'none'; }}>6) Linting / Formatting</a>
                            </li>
                            <li style={{ marginBottom: '6px', fontSize: '14px', lineHeight: '1.6', color: '#475569' }}>
                                <a href="#test-type-taxonomy" onClick={(e) => { e.preventDefault(); document.getElementById('test-type-taxonomy')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} style={{ color: '#667eea', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.color = '#00416A'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#667eea'; e.target.style.textDecoration = 'none'; }}>7) Test Type Taxonomy</a>
                            </li>
                            <li style={{ marginBottom: '6px', fontSize: '14px', lineHeight: '1.6', color: '#475569' }}>
                                <a href="#pr-review-checklist-standards" onClick={(e) => { e.preventDefault(); document.getElementById('pr-review-checklist-standards')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} style={{ color: '#667eea', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.color = '#00416A'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#667eea'; e.target.style.textDecoration = 'none'; }}>8) PR Review Checklist</a>
                            </li>
                            <li style={{ marginBottom: '6px', fontSize: '14px', lineHeight: '1.6', color: '#475569' }}>
                                <a href="#acceptance-criteria" onClick={(e) => { e.preventDefault(); document.getElementById('acceptance-criteria')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} style={{ color: '#667eea', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.color = '#00416A'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#667eea'; e.target.style.textDecoration = 'none'; }}>9) Acceptance Criteria</a>
                            </li>
                            <li style={{ marginBottom: '6px', fontSize: '14px', lineHeight: '1.6', color: '#475569' }}>
                                <a href="#quick-examples" onClick={(e) => { e.preventDefault(); document.getElementById('quick-examples')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} style={{ color: '#667eea', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.color = '#00416A'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#667eea'; e.target.style.textDecoration = 'none'; }}>10) Quick Examples</a>
                            </li>
                            <li style={{ marginBottom: '6px', fontSize: '14px', lineHeight: '1.6', color: '#475569' }}>
                                <a href="#governance" onClick={(e) => { e.preventDefault(); document.getElementById('governance')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} style={{ color: '#667eea', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.color = '#00416A'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#667eea'; e.target.style.textDecoration = 'none'; }}>11) Governance</a>
                            </li>
                        </ul>
                </APICollapsibleSection>

                <APICollapsibleSection
                    title="Automation Test Cases Best Practices & Examples"
                    isExpanded={bestPracticesCollapsible.isExpanded}
                    onToggle={bestPracticesCollapsible.toggle}
                    borderColor="#667eea"
                    id="contents-best-practices"
                >
                    <div style={{ marginBottom: '16px' }}>
                        <a 
                            href="#detailed-best-practices"
                            onClick={(e) => {
                                e.preventDefault();
                                const element = document.getElementById('detailed-best-practices');
                                if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}
                            style={{
                                color: '#667eea',
                                textDecoration: 'none',
                                fontSize: '16px',
                                fontWeight: '600'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.color = '#00416A';
                                e.target.style.textDecoration = 'underline';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = '#667eea';
                                e.target.style.textDecoration = 'none';
                            }}
                        >
                            → Go to Automation Test Cases Best Practices & Examples Section
                        </a>
                    </div>
                    <ul style={{ paddingLeft: '20px', marginTop: '8px', marginBottom: '0', listStyle: 'none' }}>
                            <li style={{ marginBottom: '6px', fontSize: '14px', lineHeight: '1.6', color: '#475569' }}>
                                <a href="#dry-kiss" onClick={(e) => { e.preventDefault(); document.getElementById('dry-kiss')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} style={{ color: '#667eea', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.color = '#00416A'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#667eea'; e.target.style.textDecoration = 'none'; }}>1) Apply DRY + KISS</a>
                            </li>
                            <li style={{ marginBottom: '6px', fontSize: '14px', lineHeight: '1.6', color: '#475569' }}>
                                <a href="#no-hardcoding" onClick={(e) => { e.preventDefault(); document.getElementById('no-hardcoding')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} style={{ color: '#667eea', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.color = '#00416A'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#667eea'; e.target.style.textDecoration = 'none'; }}>2) No Hard-Coding</a>
                            </li>
                            <li style={{ marginBottom: '6px', fontSize: '14px', lineHeight: '1.6', color: '#475569' }}>
                                <a href="#pom" onClick={(e) => { e.preventDefault(); document.getElementById('pom')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} style={{ color: '#667eea', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.color = '#00416A'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#667eea'; e.target.style.textDecoration = 'none'; }}>3) Page Object Model</a>
                            </li>
                            <li style={{ marginBottom: '6px', fontSize: '14px', lineHeight: '1.6', color: '#475569' }}>
                                <a href="#locators" onClick={(e) => { e.preventDefault(); document.getElementById('locators')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} style={{ color: '#667eea', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.color = '#00416A'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#667eea'; e.target.style.textDecoration = 'none'; }}>4) Stable Locator Strategy</a>
                            </li>
                            <li style={{ marginBottom: '6px', fontSize: '14px', lineHeight: '1.6', color: '#475569' }}>
                                <a href="#no-waits" onClick={(e) => { e.preventDefault(); document.getElementById('no-waits')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} style={{ color: '#667eea', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.color = '#00416A'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#667eea'; e.target.style.textDecoration = 'none'; }}>5) No Hard Waits</a>
                            </li>
                            <li style={{ marginBottom: '6px', fontSize: '14px', lineHeight: '1.6', color: '#475569' }}>
                                <a href="#independence" onClick={(e) => { e.preventDefault(); document.getElementById('independence')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} style={{ color: '#667eea', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.color = '#00416A'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#667eea'; e.target.style.textDecoration = 'none'; }}>6) Tests Must Be Independent</a>
                            </li>
                            <li style={{ marginBottom: '6px', fontSize: '14px', lineHeight: '1.6', color: '#475569' }}>
                                <a href="#aaa" onClick={(e) => { e.preventDefault(); document.getElementById('aaa')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} style={{ color: '#667eea', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.color = '#00416A'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#667eea'; e.target.style.textDecoration = 'none'; }}>7) AAA Pattern</a>
                            </li>
                            <li style={{ marginBottom: '6px', fontSize: '14px', lineHeight: '1.6', color: '#475569' }}>
                                <a href="#naming" onClick={(e) => { e.preventDefault(); document.getElementById('naming')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} style={{ color: '#667eea', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.color = '#00416A'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#667eea'; e.target.style.textDecoration = 'none'; }}>8) Clear Naming</a>
                            </li>
                            <li style={{ marginBottom: '6px', fontSize: '14px', lineHeight: '1.6', color: '#475569' }}>
                                <a href="#test-data" onClick={(e) => { e.preventDefault(); document.getElementById('test-data')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} style={{ color: '#667eea', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.color = '#00416A'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#667eea'; e.target.style.textDecoration = 'none'; }}>9) Test Data Management</a>
                            </li>
                            <li style={{ marginBottom: '6px', fontSize: '14px', lineHeight: '1.6', color: '#475569' }}>
                                <a href="#assertions" onClick={(e) => { e.preventDefault(); document.getElementById('assertions')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} style={{ color: '#667eea', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.color = '#00416A'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#667eea'; e.target.style.textDecoration = 'none'; }}>10) Proper Assertions</a>
                            </li>
                            <li style={{ marginBottom: '6px', fontSize: '14px', lineHeight: '1.6', color: '#475569' }}>
                                <a href="#logging" onClick={(e) => { e.preventDefault(); document.getElementById('logging')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} style={{ color: '#667eea', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.color = '#00416A'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#667eea'; e.target.style.textDecoration = 'none'; }}>11) Logging + Reporting</a>
                            </li>
                            <li style={{ marginBottom: '6px', fontSize: '14px', lineHeight: '1.6', color: '#475569' }}>
                                <a href="#tagging" onClick={(e) => { e.preventDefault(); document.getElementById('tagging')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} style={{ color: '#667eea', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.color = '#00416A'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#667eea'; e.target.style.textDecoration = 'none'; }}>12) Tagging & Test Suite</a>
                            </li>
                            <li style={{ marginBottom: '6px', fontSize: '14px', lineHeight: '1.6', color: '#475569' }}>
                                <a href="#reliability" onClick={(e) => { e.preventDefault(); document.getElementById('reliability')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} style={{ color: '#667eea', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.color = '#00416A'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#667eea'; e.target.style.textDecoration = 'none'; }}>13) Reliability</a>
                            </li>
                            <li style={{ marginBottom: '6px', fontSize: '14px', lineHeight: '1.6', color: '#475569' }}>
                                <a href="#code-quality" onClick={(e) => { e.preventDefault(); document.getElementById('code-quality')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} style={{ color: '#667eea', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.color = '#00416A'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#667eea'; e.target.style.textDecoration = 'none'; }}>14) Code Quality Standards</a>
                            </li>
                        </ul>
                </APICollapsibleSection>

                <APICollapsibleSection
                    title="PR Review Best Practices Template"
                    isExpanded={prReviewCollapsible.isExpanded}
                    onToggle={prReviewCollapsible.toggle}
                    borderColor="#667eea"
                    id="contents-pr-review"
                >
                    <ul style={{ paddingLeft: '20px', marginTop: '8px', marginBottom: '0', listStyle: 'none' }}>
                            <li style={{ marginBottom: '6px', fontSize: '14px', lineHeight: '1.6', color: '#475569' }}>
                                <a href="#pr-review-checklist" onClick={(e) => { e.preventDefault(); document.getElementById('pr-review-checklist')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} style={{ color: '#667eea', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.color = '#00416A'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#667eea'; e.target.style.textDecoration = 'none'; }}>1) PR Review Best Practices</a>
                                <ul style={{ paddingLeft: '20px', marginTop: '4px', marginBottom: '0', listStyle: 'none', fontSize: '13px' }}>
                                    <li style={{ marginBottom: '4px', lineHeight: '1.5' }}>
                                        <a href="#pr-review-checklist-items" onClick={(e) => { e.preventDefault(); document.getElementById('pr-review-checklist-items')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} style={{ color: '#667eea', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.color = '#00416A'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#667eea'; e.target.style.textDecoration = 'none'; }}>1.1) PR Review Checklist</a>
                                    </li>
                                    <li style={{ marginBottom: '4px', lineHeight: '1.5' }}>
                                        <a href="#pr-review-guidelines" onClick={(e) => { e.preventDefault(); document.getElementById('pr-review-guidelines')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} style={{ color: '#667eea', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.color = '#00416A'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#667eea'; e.target.style.textDecoration = 'none'; }}>1.2) PR Review Guidelines</a>
                                    </li>
                                </ul>
                            </li>
                            <li style={{ marginBottom: '6px', fontSize: '14px', lineHeight: '1.6', color: '#475569' }}>
                                <a href="#pr-review-comments" onClick={(e) => { e.preventDefault(); document.getElementById('pr-review-comments')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} style={{ color: '#667eea', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.color = '#00416A'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#667eea'; e.target.style.textDecoration = 'none'; }}>2) PR Review Comment Templates</a>
                            </li>
                            <li style={{ marginBottom: '6px', fontSize: '14px', lineHeight: '1.6', color: '#475569' }}>
                                <a href="#pr-description-template" onClick={(e) => { e.preventDefault(); document.getElementById('pr-description-template')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} style={{ color: '#667eea', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.color = '#00416A'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#667eea'; e.target.style.textDecoration = 'none'; }}>3) PR Description Template</a>
                            </li>
                        </ul>
                </APICollapsibleSection>
            </div>

            {/* Automation Framework Standards & Guides Section */}
            <div id="automation-standards-guides" style={{
                backgroundColor: '#ffffff',
                padding: '30px',
                borderRadius: '12px',
                marginBottom: '40px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                border: '1px solid #e5e7eb',
                scrollMarginTop: '100px'
            }}>
                <h2 style={{
                    color: '#00416A',
                    fontSize: '28px',
                    fontWeight: 'bold',
                    marginBottom: '30px',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <span>Automation Framework Standards & Guides</span>
                    <UpArrow />
                </h2>

                <div style={{ marginBottom: '30px' }}>
                    <p style={{ 
                        fontSize: '16px', 
                        color: '#475569',
                        lineHeight: '1.8',
                        marginBottom: '20px',
                        textAlign: 'left'
                    }}>
                        <strong>Applies to:</strong> All GITS QA projects using <strong>Playwright</strong>, <strong>Cypress</strong>, <strong>Selenium</strong>, <strong>WebDriverIO</strong>, <strong>ProtractorJS</strong>, <strong>NightWatchJS</strong>, <strong>Tricentis Tosca</strong>, <strong>Accelq</strong>, or any other UI automation framework
                    </p>
                    <p style={{ 
                        fontSize: '16px', 
                        color: '#475569',
                        lineHeight: '1.8',
                        marginBottom: '20px',
                        textAlign: 'left'
                    }}>
                        <strong>Owner:</strong> Test Architect / QA Automation Lead
                    </p>
                    <p style={{ 
                        fontSize: '16px', 
                        color: '#475569',
                        lineHeight: '1.8',
                        marginBottom: '20px',
                        textAlign: 'left'
                    }}>
                        <strong>Goal:</strong> Make automation code <strong>readable, searchable, reusable, and consistent</strong> across all teams and frameworks.
                    </p>
                </div>

                {/* Section 1: Guiding Principles */}
                <div id="guiding-principles" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '22px', 
                        marginBottom: '20px',
                        fontWeight: '600',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span>1) Guiding Principles</span>
                        <UpArrow targetId="contents" title="Back to Contents" size={18} />
                    </h3>
                    <ol style={{
                        paddingLeft: '24px',
                        lineHeight: '1.8',
                        fontSize: '16px',
                        color: '#334155'
                    }}>
                        <li style={{ marginBottom: '14px' }}>
                            <strong>Consistency beats preference</strong> — we standardize to reduce cognitive load.
                        </li>
                        <li style={{ marginBottom: '14px' }}>
                            <strong>Readable test intent</strong> — test names should describe behavior and expected outcome.
                        </li>
                        <li style={{ marginBottom: '14px' }}>
                            <strong>Stable selectors first</strong> — prefer accessibility-first locators and <InlineCode>data-testid</InlineCode>.
                        </li>
                        <li style={{ marginBottom: '14px' }}>
                            <strong>No flakiness by design</strong> — rely on framework auto-wait and explicit expectations.
                        </li>
                        <li style={{ marginBottom: '14px' }}>
                            <strong>Single Responsibility</strong> — Page Objects represent UI interactions; tests represent scenarios.
                        </li>
                        <li style={{ marginBottom: '14px' }}>
                            <strong>Independent tests</strong> — tests must run in any order, in parallel, and in isolation.
                        </li>
                    </ol>
                </div>

                {/* Section 2: Naming Standards */}
                <div id="naming-standards" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '22px', 
                        marginBottom: '20px',
                        fontWeight: '600',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span>2) Naming Standards</span>
                        <UpArrow targetId="contents" title="Back to Contents" size={18} />
                    </h3>
                    
                    <h4 style={{ 
                        color: '#00416A', 
                        fontSize: '18px', 
                        marginBottom: '16px',
                        fontWeight: '600',
                        textAlign: 'left'
                    }}>
                        2.1 Test File Naming
                    </h4>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        <strong>Standard format:</strong><br />
                        <InlineCode>{'<feature-or-module>.<behavior-or-action>.spec.ts'}</InlineCode> (or <InlineCode>.spec.js</InlineCode> for JavaScript)
                    </p>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        ✅ Examples:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li><InlineCode>auth.login.spec.ts</InlineCode></li>
                        <li><InlineCode>user.create.spec.ts</InlineCode></li>
                        <li><InlineCode>orders.checkout.spec.ts</InlineCode></li>
                        <li><InlineCode>accessibility.homepage.spec.ts</InlineCode></li>
                    </ul>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        Rules:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Use <strong>lowercase</strong> and <strong>dot-separated</strong> segments.</li>
                        <li>Keep file names <strong>short, descriptive, and searchable</strong>.</li>
                        <li>One file should ideally focus on <strong>one feature area</strong>.</li>
                    </ul>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        <strong>Folder organization (recommended):</strong>
                    </p>
                    <CodeBlock code={`tests/
  smoke/
  functional/
  regression/
  a11y/`} />
                </div>

                {/* Section 2.2: describe Block Naming */}
                <div id="describe-block-naming" style={{ marginBottom: '30px' }}>
                    <h4 style={{ 
                        color: '#00416A', 
                        fontSize: '18px', 
                        marginBottom: '16px',
                        fontWeight: '600',
                        textAlign: 'left'
                    }}>
                        2.2 describe Block Naming
                    </h4>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        <strong>Purpose:</strong> Organize tests by feature/module and context.
                    </p>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        <strong>Standard format:</strong><br />
                        <InlineCode>{'<Feature/Module> - <Context>'}</InlineCode>
                    </p>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        ✅ Examples:
                    </p>
                    <CodeBlock code={`// Playwright / Jest
describe('Auth - Login', () => { ... });
describe('Orders - Checkout', () => { ... });

// Cypress
describe('User Management - Roles', () => { ... });`} />
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        Rules:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Use <strong>Title Case</strong> for readability.</li>
                        <li>Avoid overly long nested <InlineCode>describe</InlineCode> blocks (max 2 levels recommended).</li>
                        <li>Use describes to group by <strong>feature</strong> and <strong>scenario group</strong>, not by implementation.</li>
                    </ul>
                </div>

                {/* Section 2.3: Test Title Naming */}
                <div id="test-title-naming" style={{ marginBottom: '30px' }}>
                    <h4 style={{ 
                        color: '#00416A', 
                        fontSize: '18px', 
                        marginBottom: '16px',
                        fontWeight: '600',
                        textAlign: 'left'
                    }}>
                        2.3 Test Title Naming
                    </h4>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        <strong>Test titles must be outcome-focused and readable.</strong>
                    </p>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        <strong>Standard format:</strong><br />
                        <InlineCode>{'[@tag][@tag] should <expected behavior/outcome>'}</InlineCode>
                    </p>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        ✅ Examples:
                    </p>
                    <CodeBlock code={`// Playwright
test('[@smoke][@critical] should allow valid user to login and reach dashboard', async () => {});
test('[@functional] should block submission when email is invalid', async () => {});

// Cypress
it('[@regression] should persist user profile changes after refresh', () => {});
it('[@a11y] should have no critical accessibility violations on homepage', () => {});`} />
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        Rules:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Start with <strong>tags</strong>.</li>
                        <li>Use <strong>"should"</strong> language for consistent searching and reporting.</li>
                        <li>Avoid numbers and vague labels (❌ <InlineCode>test 1</InlineCode>, ❌ <InlineCode>login works</InlineCode>).</li>
                        <li>Do not include implementation details in titles (❌ <InlineCode>should click button and wait for URL</InlineCode>).</li>
                    </ul>
                </div>

                {/* Section 3: Page Object Naming & Structure */}
                <div id="page-object-naming" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '22px', 
                        marginBottom: '20px',
                        fontWeight: '600',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span>3) Page Object Naming & Structure</span>
                        <UpArrow targetId="contents" title="Back to Contents" size={18} />
                    </h3>
                    
                    <h4 style={{ 
                        color: '#00416A', 
                        fontSize: '18px', 
                        marginBottom: '16px',
                        fontWeight: '600',
                        textAlign: 'left'
                    }}>
                        3.1 Class Naming
                    </h4>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li><strong>Class names:</strong> <InlineCode>PascalCase</InlineCode></li>
                        <li><strong>File names:</strong> <InlineCode>kebab-case.ts</InlineCode> or <InlineCode>kebab-case.js</InlineCode> (recommended)</li>
                    </ul>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        ✅ Examples:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li><InlineCode>pages/login-page.ts</InlineCode> → <InlineCode>class LoginPage</InlineCode></li>
                        <li><InlineCode>pages/order-details-page.ts</InlineCode> → <InlineCode>class OrderDetailsPage</InlineCode></li>
                    </ul>

                    <h4 style={{ 
                        color: '#00416A', 
                        fontSize: '18px', 
                        marginBottom: '16px',
                        fontWeight: '600',
                        textAlign: 'left'
                    }}>
                        3.2 Method Naming
                    </h4>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Use <strong>lowerCamelCase</strong> verbs that describe user actions.</li>
                        <li>Prefer <strong>clear intent</strong> over short names.</li>
                    </ul>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        ✅ Good:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li><InlineCode>open()</InlineCode></li>
                        <li><InlineCode>login(email, password)</InlineCode></li>
                        <li><InlineCode>searchUser(name)</InlineCode></li>
                        <li><InlineCode>submitOrder()</InlineCode></li>
                    </ul>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        ❌ Avoid:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li><InlineCode>doLogin()</InlineCode></li>
                        <li><InlineCode>clickBtn()</InlineCode></li>
                        <li><InlineCode>t1()</InlineCode></li>
                    </ul>

                    <h4 style={{ 
                        color: '#00416A', 
                        fontSize: '18px', 
                        marginBottom: '16px',
                        fontWeight: '600',
                        textAlign: 'left'
                    }}>
                        3.3 Single Responsibility Rule (MANDATORY)
                    </h4>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        <strong>Page Objects must:</strong>
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Encapsulate <strong>locators</strong> and <strong>page interactions</strong></li>
                        <li>Provide methods that represent <strong>user actions</strong></li>
                    </ul>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        <strong>Page Objects must NOT:</strong>
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Contain test-case orchestration across multiple pages</li>
                        <li>Contain business validation that spans the system</li>
                        <li>Include environment/test-data creation logic</li>
                    </ul>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        ✅ Good POM:
                    </p>
                    <CodeBlock code={`// Playwright
export class LoginPage {
  constructor(private readonly page: Page) {}

  async open() { await this.page.goto('/login'); }
  async login(email: string, password: string) { /* fill + click */ }
}

// Cypress
export class LoginPage {
  open() { cy.visit('/login'); }
  login(email, password) { /* fill + click */ }
}`} />
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        ❌ Bad POM (too much logic):
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Creating users, seeding DB, verifying emails, and asserting end-to-end flow inside a Page Object.</li>
                    </ul>
                </div>

                {/* Section 4: Selector / Locator Strategy */}
                <div id="locator-strategy" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '22px', 
                        marginBottom: '20px',
                        fontWeight: '600',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span>4) Selector / Locator Strategy (Industry Standard)</span>
                        <UpArrow targetId="contents" title="Back to Contents" size={18} />
                    </h3>
                    
                    <h4 style={{ 
                        color: '#00416A', 
                        fontSize: '18px', 
                        marginBottom: '16px',
                        fontWeight: '600',
                        textAlign: 'left'
                    }}>
                        4.1 Locator Priority Order (MANDATORY)
                    </h4>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        Use locators in this order:
                    </p>
                    <ol style={{ paddingLeft: '24px', marginBottom: '20px', lineHeight: '1.8' }}>
                        <li><strong>Accessibility-first locators</strong>
                            <ul style={{ paddingLeft: '24px', marginTop: '8px' }}>
                                <li><InlineCode>getByRole()</InlineCode> (Playwright)</li>
                                <li><InlineCode>getByLabel()</InlineCode> (Playwright)</li>
                                <li><InlineCode>cy.getByRole()</InlineCode> (Cypress)</li>
                                <li><InlineCode>By.role()</InlineCode> (Selenium)</li>
                            </ul>
                        </li>
                        <li><strong>Test IDs</strong>
                            <ul style={{ paddingLeft: '24px', marginTop: '8px' }}>
                                <li><InlineCode>getByTestId()</InlineCode> (Playwright)</li>
                                <li><InlineCode>cy.get('[data-testid="..."]')</InlineCode> (Cypress)</li>
                                <li><InlineCode>By.css('[data-testid="..."]')</InlineCode> (Selenium)</li>
                                <li>Standard attribute: <InlineCode>data-testid</InlineCode></li>
                            </ul>
                        </li>
                        <li><strong>Text-based locators</strong> (use carefully; may be brittle)
                            <ul style={{ paddingLeft: '24px', marginTop: '8px' }}>
                                <li><InlineCode>getByText()</InlineCode>, <InlineCode>getByPlaceholder()</InlineCode> (Playwright)</li>
                                <li><InlineCode>cy.contains()</InlineCode> (Cypress)</li>
                                <li><InlineCode>By.linkText()</InlineCode> (Selenium)</li>
                            </ul>
                        </li>
                        <li><strong>CSS/XPath</strong> (last resort; must be justified with comment)</li>
                    </ol>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        ✅ Preferred:
                    </p>
                    <CodeBlock code={`// Playwright
page.getByRole('button', { name: 'Sign in' });
page.getByTestId('dashboard-title');
page.getByLabel('Email');

// Cypress
cy.getByRole('button', { name: 'Sign in' });
cy.get('[data-testid="dashboard-title"]');

// Selenium
driver.findElement(By.role('button', { name: 'Sign in' }));
driver.findElement(By.css('[data-testid="dashboard-title"]'));`} />
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        ❌ Avoid:
                    </p>
                    <CodeBlock code={`// Fragile selectors
page.locator('div:nth-child(2) > div > button');
cy.get('div:nth-child(2) > div > button');
driver.findElement(By.xpath('//div[@class="container"]/div[2]/button'));`} />

                    <h4 style={{ 
                        color: '#00416A', 
                        fontSize: '18px', 
                        marginBottom: '16px',
                        fontWeight: '600',
                        textAlign: 'left'
                    }}>
                        4.2 data-testid Standard
                    </h4>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Use <InlineCode>data-testid</InlineCode> for stable, automation-friendly selectors.</li>
                        <li>Test IDs should represent <strong>semantic UI meaning</strong>, not styling.</li>
                    </ul>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        ✅ Good:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li><InlineCode>data-testid="login-submit"</InlineCode></li>
                        <li><InlineCode>data-testid="user-search-input"</InlineCode></li>
                        <li><InlineCode>data-testid="order-confirmation-number"</InlineCode></li>
                    </ul>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        ❌ Bad:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li><InlineCode>data-testid="blue-button"</InlineCode></li>
                        <li><InlineCode>data-testid="div-12"</InlineCode></li>
                    </ul>
                </div>

                {/* Section 5: Coding Best Practices */}
                <div id="coding-best-practices" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '22px', 
                        marginBottom: '20px',
                        fontWeight: '600',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span>5) Coding Best Practices</span>
                        <UpArrow targetId="contents" title="Back to Contents" size={18} />
                    </h3>
                    
                    <h4 style={{ 
                        color: '#00416A', 
                        fontSize: '18px', 
                        marginBottom: '16px',
                        fontWeight: '600',
                        textAlign: 'left'
                    }}>
                        5.1 No Hard Waits (MANDATORY)
                    </h4>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        <strong>Hard waits are prohibited in committed code:</strong>
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>❌ <InlineCode>waitForTimeout()</InlineCode> (Playwright)</li>
                        <li>❌ <InlineCode>cy.wait(5000)</InlineCode> (Cypress - arbitrary delays)</li>
                        <li>❌ <InlineCode>Thread.sleep()</InlineCode> (Selenium)</li>
                    </ul>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        Use:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Framework auto-wait</li>
                        <li>Explicit locator expectations only when needed</li>
                    </ul>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        ✅ Example:
                    </p>
                    <CodeBlock code={`// Playwright
await page.getByRole('button', { name: 'Save' }).click();
await expect(page.getByTestId('toast-success')).toBeVisible();

// Cypress
cy.get('button').contains('Save').click();
cy.get('[data-testid="toast-success"]').should('be.visible');

// Selenium
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
wait.until(ExpectedConditions.elementToBeClickable(saveButton));`} />

                    <h4 style={{ 
                        color: '#00416A', 
                        fontSize: '18px', 
                        marginBottom: '16px',
                        fontWeight: '600',
                        textAlign: 'left'
                    }}>
                        5.2 Auto-wait + Explicit Expectations
                    </h4>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        Modern frameworks provide auto-wait, but use expectations to verify readiness when:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Waiting for navigation or state changes</li>
                        <li>Confirming visible/hidden/enabled states</li>
                        <li>Preventing race conditions</li>
                    </ul>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        ✅ Examples:
                    </p>
                    <CodeBlock code={`// Playwright
await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
await page.waitForURL(/dashboard/);
await expect(page.getByTestId('submit')).toBeEnabled();

// Cypress
cy.get('h1').contains('Dashboard').should('be.visible');
cy.url().should('include', '/dashboard');
cy.get('[data-testid="submit"]').should('be.enabled');`} />

                    <h4 style={{ 
                        color: '#00416A', 
                        fontSize: '18px', 
                        marginBottom: '16px',
                        fontWeight: '600',
                        textAlign: 'left'
                    }}>
                        5.3 Test Independence & Cleanup (MANDATORY)
                    </h4>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        Rules:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>No ordering dependency</li>
                        <li>Parallel-safe</li>
                        <li>Use fixtures for auth/session and setup (Playwright)</li>
                        <li>Use <InlineCode>beforeEach</InlineCode>/<InlineCode>afterEach</InlineCode> hooks for setup/teardown (Cypress)</li>
                        <li>Cleanup by API teardown or resetting state</li>
                    </ul>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        Recommended:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Unique test data per run (uuid/timestamp)</li>
                        <li>Avoid shared mutable accounts unless isolated and reset</li>
                    </ul>

                    <h4 style={{ 
                        color: '#00416A', 
                        fontSize: '18px', 
                        marginBottom: '16px',
                        fontWeight: '600',
                        textAlign: 'left'
                    }}>
                        5.4 AAA Pattern (Recommended)
                    </h4>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        Arrange → Act → Assert
                    </p>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        ✅ Example:
                    </p>
                    <CodeBlock code={`// Playwright
test('[@functional] should prevent invalid email submission', async ({ page }) => {
  // Arrange
  await page.goto('/signup');

  // Act
  await page.getByLabel('Email').fill('invalid-email');
  await page.getByRole('button', { name: 'Submit' }).click();

  // Assert
  await expect(page.getByText('Enter a valid email')).toBeVisible();
});

// Cypress
it('[@functional] should prevent invalid email submission', () => {
  // Arrange
  cy.visit('/signup');

  // Act
  cy.get('label').contains('Email').parent().find('input').type('invalid-email');
  cy.get('button').contains('Submit').click();

  // Assert
  cy.contains('Enter a valid email').should('be.visible');
});`} />
                </div>

                {/* Section 6: Linting / Formatting */}
                <div id="linting-formatting" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '22px', 
                        marginBottom: '20px',
                        fontWeight: '600',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span>6) Linting / Formatting Baseline (MANDATORY)</span>
                        <UpArrow targetId="contents" title="Back to Contents" size={18} />
                    </h3>
                    
                    <h4 style={{ 
                        color: '#00416A', 
                        fontSize: '18px', 
                        marginBottom: '16px',
                        fontWeight: '600',
                        textAlign: 'left'
                    }}>
                        6.1 TypeScript Strict (if using TypeScript)
                    </h4>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li><InlineCode>tsconfig.json</InlineCode> must be strict</li>
                        <li>Avoid <InlineCode>any</InlineCode> unless documented</li>
                    </ul>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        Recommended:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li><InlineCode>{'"strict": true'}</InlineCode></li>
                    </ul>

                    <h4 style={{ 
                        color: '#00416A', 
                        fontSize: '18px', 
                        marginBottom: '16px',
                        fontWeight: '600',
                        textAlign: 'left'
                    }}>
                        6.2 ESLint + Prettier
                    </h4>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>ESLint enforces quality</li>
                        <li>Prettier enforces formatting</li>
                        <li>CI must fail on lint errors</li>
                    </ul>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        Required scripts:
                    </p>
                    <CodeBlock code={`npm run lint
npm run format`} />
                </div>

                {/* Section 7: Test Type Taxonomy & Tagging */}
                <div id="test-type-taxonomy" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '22px', 
                        marginBottom: '20px',
                        fontWeight: '600',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span>7) Test Type Taxonomy & Tagging Standards</span>
                        <UpArrow targetId="contents" title="Back to Contents" size={18} />
                    </h3>
                    
                    <h4 style={{ 
                        color: '#00416A', 
                        fontSize: '18px', 
                        marginBottom: '16px',
                        fontWeight: '600',
                        textAlign: 'left'
                    }}>
                        7.1 Required Test-Type Tags
                    </h4>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        Every test must include <strong>at least one</strong> of the following:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li><InlineCode>@smoke</InlineCode> — Critical path tests, run on every PR (fast, &lt; 5 minutes)</li>
                        <li><InlineCode>@functional</InlineCode> — Feature-level correctness tests</li>
                        <li><InlineCode>@regression</InlineCode> — Full test suite, run nightly or on release</li>
                        <li><InlineCode>@a11y</InlineCode> — Accessibility/508 compliance tests</li>
                    </ul>

                    <h4 style={{ 
                        color: '#00416A', 
                        fontSize: '18px', 
                        marginBottom: '16px',
                        fontWeight: '600',
                        textAlign: 'left'
                    }}>
                        7.2 Optional Tags
                    </h4>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li><InlineCode>@api</InlineCode> — API-only tests (faster than UI tests)</li>
                        <li><InlineCode>@ui</InlineCode> — UI-specific scenario</li>
                        <li><InlineCode>@critical</InlineCode> — Business critical (used for prioritization)</li>
                        <li><InlineCode>@flaky</InlineCode> — Unstable test needing attention</li>
                        <li><InlineCode>@wip</InlineCode> — Work in progress; not production-ready</li>
                    </ul>

                    <h4 style={{ 
                        color: '#00416A', 
                        fontSize: '18px', 
                        marginBottom: '16px',
                        fontWeight: '600',
                        textAlign: 'left'
                    }}>
                        7.3 Tag Formatting
                    </h4>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        <strong>Standard format:</strong> <InlineCode>@tag</InlineCode> (lowercase)
                    </p>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        <strong>Where tags live:</strong> In the <strong>test title</strong> (recommended) or suite/describe name
                    </p>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        Example:
                    </p>
                    <CodeBlock code={`// Playwright
test('[@smoke][@critical] user can login and reach dashboard', async ({ page }) => {
  // ...
});

// Cypress
it('[@smoke][@critical] user can login and reach dashboard', () => {
  // ...
});`} />

                    <h4 style={{ 
                        color: '#00416A', 
                        fontSize: '18px', 
                        marginBottom: '16px',
                        fontWeight: '600',
                        textAlign: 'left'
                    }}>
                        7.4 Overlap Rules
                    </h4>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        A test may carry multiple tags. If a test is intended to run as smoke, it <strong>must include <InlineCode>@smoke</InlineCode></strong> even if it is also part of regression.
                    </p>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        ✅ Example:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li><InlineCode>[@smoke][@regression][@critical] checkout completes with valid payment</InlineCode></li>
                    </ul>
                </div>

                {/* Section 8: PR Review Checklist */}
                <div id="pr-review-checklist-standards" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '22px', 
                        marginBottom: '20px',
                        fontWeight: '600',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span>8) PR Review Checklist (MANDATORY)</span>
                        <UpArrow targetId="contents" title="Back to Contents" size={18} />
                    </h3>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        Reviewers must validate these items before approving a PR.
                    </p>
                    
                    <h4 style={{ 
                        color: '#00416A', 
                        fontSize: '18px', 
                        marginBottom: '16px',
                        fontWeight: '600',
                        textAlign: 'left'
                    }}>
                        A) Test Structure & Naming
                    </h4>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>[ ] Test file name follows: <InlineCode>{'<feature>.<action>.spec.ts'}</InlineCode></li>
                        <li>[ ] <InlineCode>describe</InlineCode> blocks follow: <InlineCode>{'<Feature> - <Context>'}</InlineCode></li>
                        <li>[ ] Each test title clearly states expected outcome (uses "should …")</li>
                        <li>[ ] Tests include tags in title (e.g., <InlineCode>[@smoke]</InlineCode>, <InlineCode>[@functional]</InlineCode>, etc.)</li>
                    </ul>

                    <h4 style={{ 
                        color: '#00416A', 
                        fontSize: '18px', 
                        marginBottom: '16px',
                        fontWeight: '600',
                        textAlign: 'left'
                    }}>
                        B) Tags & Suite Alignment
                    </h4>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>[ ] Every test has <strong>at least one</strong> test-type tag: <InlineCode>@smoke</InlineCode> / <InlineCode>@functional</InlineCode> / <InlineCode>@regression</InlineCode> / <InlineCode>@a11y</InlineCode></li>
                        <li>[ ] If the test is required for smoke, it includes <InlineCode>@smoke</InlineCode> even if also <InlineCode>@regression</InlineCode></li>
                        <li>[ ] <InlineCode>@wip</InlineCode> tests are not merged into main unless explicitly approved</li>
                        <li>[ ] <InlineCode>@flaky</InlineCode> tests have a tracking ticket and are not used for PR gating (unless exception approved)</li>
                    </ul>

                    <h4 style={{ 
                        color: '#00416A', 
                        fontSize: '18px', 
                        marginBottom: '16px',
                        fontWeight: '600',
                        textAlign: 'left'
                    }}>
                        C) Locator & Stability Rules
                    </h4>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>[ ] Uses accessibility-first locators (<InlineCode>getByRole()</InlineCode>, <InlineCode>getByTestId()</InlineCode>, etc.) where possible</li>
                        <li>[ ] Avoids brittle selectors (<InlineCode>nth-child</InlineCode>, deep CSS chains, XPath)</li>
                        <li>[ ] No hard waits (<InlineCode>waitForTimeout()</InlineCode>, <InlineCode>cy.wait(5000)</InlineCode>, <InlineCode>Thread.sleep()</InlineCode>) in committed code</li>
                        <li>[ ] Uses explicit <InlineCode>expect()</InlineCode> for readiness only when needed</li>
                    </ul>

                    <h4 style={{ 
                        color: '#00416A', 
                        fontSize: '18px', 
                        marginBottom: '16px',
                        fontWeight: '600',
                        textAlign: 'left'
                    }}>
                        D) Page Object Model (POM) Rules
                    </h4>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>[ ] Page Objects encapsulate locators and page actions only</li>
                        <li>[ ] No end-to-end orchestration logic inside Page Objects</li>
                        <li>[ ] POM methods are verb-based, readable, and reusable</li>
                        <li>[ ] Page Objects do not create test data or contain environment logic</li>
                    </ul>

                    <h4 style={{ 
                        color: '#00416A', 
                        fontSize: '18px', 
                        marginBottom: '16px',
                        fontWeight: '600',
                        textAlign: 'left'
                    }}>
                        E) Test Independence & Data
                    </h4>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>[ ] Test does not rely on execution order</li>
                        <li>[ ] Parallel-safe (unique data or isolated state)</li>
                        <li>[ ] Setup/teardown is handled via fixtures or API utilities</li>
                        <li>[ ] Cleanup is performed or state is reset when needed</li>
                    </ul>

                    <h4 style={{ 
                        color: '#00416A', 
                        fontSize: '18px', 
                        marginBottom: '16px',
                        fontWeight: '600',
                        textAlign: 'left'
                    }}>
                        F) Quality Gates
                    </h4>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>[ ] ESLint passes locally / in CI</li>
                        <li>[ ] Prettier formatting applied</li>
                        <li>[ ] TypeScript strict rules respected (if using TypeScript; no unexplained <InlineCode>any</InlineCode>)</li>
                        <li>[ ] Test failure artifacts are supported (trace/screenshot/video policy respected)</li>
                    </ul>

                    <h4 style={{ 
                        color: '#00416A', 
                        fontSize: '18px', 
                        marginBottom: '16px',
                        fontWeight: '600',
                        textAlign: 'left'
                    }}>
                        G) Documentation & Maintainability
                    </h4>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>[ ] New utilities/pages include brief comments where needed</li>
                        <li>[ ] Non-obvious design decisions are documented (short note in code or PR)</li>
                        <li>[ ] Any standards exception has justification and approval</li>
                    </ul>
                </div>

                {/* Section 9: Acceptance Criteria */}
                <div id="acceptance-criteria" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '22px', 
                        marginBottom: '20px',
                        fontWeight: '600',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span>9) Acceptance Criteria Checklist (Must Pass)</span>
                        <UpArrow targetId="contents" title="Back to Contents" size={18} />
                    </h3>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>[ ] Naming defined for test files, describe blocks, test titles</li>
                        <li>[ ] Naming defined for Page Object classes and methods</li>
                        <li>[ ] Locator strategy documented (role-based, testid preferred)</li>
                        <li>[ ] Hard waits prohibited; auto-wait + expectations used correctly</li>
                        <li>[ ] Single responsibility rule for POM documented</li>
                        <li>[ ] Test independence and cleanup rules documented</li>
                        <li>[ ] ESLint/Prettier + TS strict baseline documented (if using TypeScript)</li>
                        <li>[ ] PR Review Checklist included and enforced</li>
                    </ul>
                </div>

                {/* Section 10: Quick Examples */}
                <div id="quick-examples" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '22px', 
                        marginBottom: '20px',
                        fontWeight: '600',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span>10) Quick Examples (Copy/Paste)</span>
                        <UpArrow targetId="contents" title="Back to Contents" size={18} />
                    </h3>
                    
                    <h4 style={{ 
                        color: '#00416A', 
                        fontSize: '18px', 
                        marginBottom: '16px',
                        fontWeight: '600',
                        textAlign: 'left'
                    }}>
                        Standard test template
                    </h4>
                    <CodeBlock code={`// Playwright
test.describe('Auth - Login', () => {
  test('[@smoke][@critical] should allow valid user to login and reach dashboard', async ({ page }) => {
    await page.goto('/login');
    await page.getByLabel('Email').fill(process.env.E2E_USER_EMAIL!);
    await page.getByLabel('Password').fill(process.env.E2E_USER_PASS!);
    await page.getByRole('button', { name: 'Sign in' }).click();

    await expect(page.getByTestId('dashboard-title')).toBeVisible();
  });
});

// Cypress
describe('Auth - Login', () => {
  it('[@smoke][@critical] should allow valid user to login and reach dashboard', () => {
    cy.visit('/login');
    cy.get('label').contains('Email').parent().find('input').type(Cypress.env('E2E_USER_EMAIL'));
    cy.get('label').contains('Password').parent().find('input').type(Cypress.env('E2E_USER_PASS'));
    cy.get('button').contains('Sign in').click();

    cy.get('[data-testid="dashboard-title"]').should('be.visible');
  });
});`} />

                    <h4 style={{ 
                        color: '#00416A', 
                        fontSize: '18px', 
                        marginBottom: '16px',
                        fontWeight: '600',
                        textAlign: 'left'
                    }}>
                        Standard POM template
                    </h4>
                    <CodeBlock code={`// Playwright
export class DashboardPage {
  constructor(private readonly page: Page) {}

  readonly title = () => this.page.getByTestId('dashboard-title');

  async open() {
    await this.page.goto('/dashboard');
    await expect(this.title()).toBeVisible();
  }
}

// Cypress
export class DashboardPage {
  open() {
    cy.visit('/dashboard');
    cy.get('[data-testid="dashboard-title"]').should('be.visible');
  }

  get title() {
    return cy.get('[data-testid="dashboard-title"]');
  }
}`} />
                </div>

                {/* Section 11: Governance */}
                <div id="governance" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '22px', 
                        marginBottom: '20px',
                        fontWeight: '600',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span>11) Governance</span>
                        <UpArrow targetId="contents" title="Back to Contents" size={18} />
                    </h3>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Standards updates require PR + approval by Test Architect / QA Lead</li>
                        <li>Violations (hard waits, missing tags, brittle locators) are <strong>merge blockers</strong></li>
                        <li>Exceptions must be documented and approved</li>
                    </ul>
                </div>
            </div>

            {/* Detailed Best Practices Section */}
            <div id="detailed-best-practices" style={{
                backgroundColor: '#ffffff',
                padding: '30px',
                borderRadius: '12px',
                marginBottom: '40px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                border: '1px solid #e5e7eb',
                scrollMarginTop: '100px'
            }}>
                <h2 style={{
                    color: '#00416A',
                    fontSize: '28px',
                    fontWeight: 'bold',
                    marginBottom: '30px',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <span>Automation Test Cases Best Practices & Examples</span>
                    <UpArrow />
                </h2>

                {/* 1) DRY + KISS */}
                <div id="dry-kiss" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '22px', 
                        marginBottom: '16px',
                        fontWeight: '600',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span>1) Apply DRY + KISS</span>
                        <UpArrow targetId="contents" title="Back to Contents" size={18} />
                    </h3>
                    <p style={{ 
                        fontSize: '16px', 
                        color: '#475569',
                        lineHeight: '1.8',
                        marginBottom: '16px',
                        textAlign: 'left'
                    }}>
                        <strong>DRY (Don't Repeat Yourself)</strong> and <strong>KISS (Keep It Simple, Stupid)</strong> are fundamental principles in test automation.
                    </p>
                    <ul style={{ 
                        lineHeight: '2', 
                        fontSize: '15px',
                        color: '#475569',
                        paddingLeft: '24px',
                        margin: 0,
                        textAlign: 'left'
                    }}>
                        <li><strong>Extract common logic:</strong> Move repeated operations (login, navigation, data setup) to helper functions, fixtures, or page objects</li>
                        <li><strong>One clear goal per test:</strong> Each test should verify one specific behavior or scenario</li>
                        <li><strong>Reusable methods:</strong> Create small, focused utility functions instead of duplicating code</li>
                        <li><strong>Keep it simple:</strong> Avoid over-engineering—simple, readable tests are easier to maintain</li>
                    </ul>
                </div>

                {/* 2) No Hard-Coding */}
                <div id="no-hardcoding" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '22px', 
                        marginBottom: '16px',
                        fontWeight: '600',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span>2) No Hard-Coding</span>
                        <UpArrow targetId="contents" title="Back to Contents" size={18} />
                    </h3>
                    <p style={{ 
                        fontSize: '16px', 
                        color: '#475569',
                        lineHeight: '1.8',
                        marginBottom: '16px',
                        textAlign: 'left'
                    }}>
                        Hard-coded values make tests brittle and difficult to maintain across environments.
                    </p>
                    <APISectionContent
                        id="no-hardcoding-examples"
                        subtitle="What to Avoid"
                        definition="Never hard-code:"
                        code={`// ❌ Bad
const username = 'john.doe@example.com';
const password = 'password123';
const baseUrl = 'https://prod.example.com';
await page.waitForTimeout(5000);`}
                    />
                    <APISectionContent
                        id="no-hardcoding-solution"
                        subtitle="Better Approach"
                        definition="Use configuration and environment variables:"
                        code={`// ✅ Good
const username = process.env.TEST_USERNAME;
const password = process.env.TEST_PASSWORD;
const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
await page.waitForSelector('.element');`}
                    />
                </div>

                {/* 3) Page Object Model */}
                <div id="pom" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '22px', 
                        marginBottom: '16px',
                        fontWeight: '600',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span>3) Use Page Object Model (POM)</span>
                        <UpArrow targetId="contents" title="Back to Contents" size={18} />
                    </h3>
                    <p style={{ 
                        fontSize: '16px', 
                        color: '#475569',
                        lineHeight: '1.8',
                        marginBottom: '16px',
                        textAlign: 'left'
                    }}>
                        Page Object Model separates test logic from UI implementation details, making tests more maintainable.
                    </p>
                    <APISectionContent
                        id="pom-example"
                        subtitle="Example Structure"
                        definition="Page Object:"
                        code={`// LoginPage.js
class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.getByLabel('Username');
    this.passwordInput = page.getByLabel('Password');
    this.submitButton = page.getByRole('button', { name: 'Login' });
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }
}

// Test file
test('user can login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('user@example.com', 'password');
  await expect(page).toHaveURL('/dashboard');
});`}
                    />
                </div>

                {/* 4) Stable Locator Strategy */}
                <div id="locators" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '22px', 
                        marginBottom: '16px',
                        fontWeight: '600',
                        textAlign: 'left'
                    }}>
                        4) Stable Locator Strategy
                    </h3>
                    <p style={{ 
                        fontSize: '16px', 
                        color: '#475569',
                        lineHeight: '1.8',
                        marginBottom: '16px',
                        textAlign: 'left'
                    }}>
                        Choose locators that are resilient to UI changes and easy to maintain.
                    </p>
                    <APISectionContent
                        id="locator-priority"
                        subtitle="Locator Priority (Best to Worst)"
                        definition="1. Semantic locators (best):"
                        code={`// ✅ Best - Most stable
page.getByRole('button', { name: 'Submit' })
page.getByLabel('Email Address')
page.getByTestId('submit-button')`}
                    />
                    <APISectionContent
                        id="locator-avoid"
                        subtitle="Avoid Fragile Locators"
                        definition="2. Avoid these (fragile):"
                        code={`// ❌ Avoid - Fragile
page.locator('div > div > div > button:nth-child(3)')
page.locator('//div[@class="container"]/div[2]/button')
page.locator('.btn.btn-primary.btn-lg.mt-3')`}
                    />
                </div>

                {/* 5) No Hard Waits */}
                <div id="no-waits" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '22px', 
                        marginBottom: '16px',
                        fontWeight: '600',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span>5) No Hard Waits</span>
                        <UpArrow targetId="contents" title="Back to Contents" size={18} />
                    </h3>
                    <p style={{ 
                        fontSize: '16px', 
                        color: '#475569',
                        lineHeight: '1.8',
                        marginBottom: '16px',
                        textAlign: 'left'
                    }}>
                        Hard waits make tests slow and unreliable. Use framework's built-in waiting mechanisms instead.
                    </p>
                    <APISectionContent
                        id="wait-bad"
                        subtitle="❌ Bad - Hard Waits"
                        definition="Never use arbitrary waits:"
                        code={`await page.waitForTimeout(5000); // ❌ Bad
await new Promise(resolve => setTimeout(resolve, 3000)); // ❌ Bad`}
                    />
                    <APISectionContent
                        id="wait-good"
                        subtitle="✅ Good - Explicit Waits"
                        definition="Use explicit waits:"
                        code={`// Playwright
await page.waitForSelector('.element', { state: 'visible' });
await page.waitForResponse(response => response.url().includes('/api/data'));

// Cypress
cy.get('.element').should('be.visible');
cy.wait('@apiCall');

// Selenium
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
wait.until(ExpectedConditions.elementToBeClickable(element));`}
                    />
                </div>

                {/* 6) Independent Tests */}
                <div id="independence" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '22px', 
                        marginBottom: '16px',
                        fontWeight: '600',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span>6) Tests Must Be Independent</span>
                        <UpArrow targetId="contents" title="Back to Contents" size={18} />
                    </h3>
                    <p style={{ 
                        fontSize: '16px', 
                        color: '#475569',
                        lineHeight: '1.8',
                        marginBottom: '16px',
                        textAlign: 'left'
                    }}>
                        Each test should be able to run in isolation and produce the same result regardless of execution order.
                    </p>
                    <ul style={{ 
                        lineHeight: '2', 
                        fontSize: '15px',
                        color: '#475569',
                        paddingLeft: '24px',
                        margin: 0,
                        textAlign: 'left'
                    }}>
                        <li><strong>No dependencies:</strong> Tests shouldn't rely on data or state from other tests</li>
                        <li><strong>Clean setup:</strong> Each test sets up its own required data</li>
                        <li><strong>Clean teardown:</strong> Clean up created data after test execution</li>
                        <li><strong>Isolated accounts:</strong> Use unique test accounts or tenants to avoid collisions</li>
                    </ul>
                </div>

                {/* 7) AAA Pattern */}
                <div id="aaa" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '22px', 
                        marginBottom: '16px',
                        fontWeight: '600',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span>7) AAA Pattern (Arrange–Act–Assert)</span>
                        <UpArrow targetId="contents" title="Back to Contents" size={18} />
                    </h3>
                    <p style={{ 
                        fontSize: '16px', 
                        color: '#475569',
                        lineHeight: '1.8',
                        marginBottom: '16px',
                        textAlign: 'left'
                    }}>
                        Structure your tests clearly with three distinct sections.
                    </p>
                    <APISectionContent
                        id="aaa-example"
                        subtitle="AAA Pattern Example"
                        definition="Clear structure:"
                        code={`test('user can submit registration form', async ({ page }) => {
  // Arrange: Setup state and data
  const userData = {
    email: 'test@example.com',
    password: 'SecurePass123!'
  };
  await page.goto('/register');

  // Act: Perform the action
  await page.getByLabel('Email').fill(userData.email);
  await page.getByLabel('Password').fill(userData.password);
  await page.getByRole('button', { name: 'Register' }).click();

  // Assert: Validate the result
  await expect(page).toHaveURL('/dashboard');
  await expect(page.getByText('Welcome')).toBeVisible();
});`}
                    />
                </div>

                {/* 8) Clear Naming */}
                <div id="naming" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '22px', 
                        marginBottom: '16px',
                        fontWeight: '600',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span>8) Clear, Business-Friendly Naming</span>
                        <UpArrow targetId="contents" title="Back to Contents" size={18} />
                    </h3>
                    <p style={{ 
                        fontSize: '16px', 
                        color: '#475569',
                        lineHeight: '1.8',
                        marginBottom: '16px',
                        textAlign: 'left'
                    }}>
                        Test names should clearly describe what the test does and what outcome is expected.
                    </p>
                    <APISectionContent
                        id="naming-examples"
                        subtitle="Naming Examples"
                        definition="Good vs Bad:"
                        code={`// ✅ Good - Clear and descriptive
test('User can submit registration form with valid data')
test('User cannot login with invalid credentials')
test('Shopping cart displays correct total when items are added')

// ❌ Bad - Unclear and unhelpful
test('Test1_submit_form')
test('login_test')
test('cart_test_2')`}
                    />
                </div>

                {/* 9) Test Data Management */}
                <div id="test-data" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '22px', 
                        marginBottom: '16px',
                        fontWeight: '600',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span>9) Smart Test Data Management</span>
                        <UpArrow targetId="contents" title="Back to Contents" size={18} />
                    </h3>
                    <p style={{ 
                        fontSize: '16px', 
                        color: '#475569',
                        lineHeight: '1.8',
                        marginBottom: '16px',
                        textAlign: 'left'
                    }}>
                        Generate unique, meaningful test data that doesn't cause collisions.
                    </p>
                    <APISectionContent
                        id="test-data-example"
                        subtitle="Data Factory Pattern"
                        definition="Generate unique data:"
                        code={`// Test data factory
class UserFactory {
  static createUser() {
    const timestamp = Date.now();
    return {
      email: \`test-\${timestamp}@example.com\`,
      username: \`user_\${timestamp}\`,
      password: 'SecurePass123!'
    };
  }
}

// In test
test('user registration', async ({ page }) => {
  const userData = UserFactory.createUser();
  // Use userData...
});`}
                    />
                </div>

                {/* 10) Proper Assertions */}
                <div id="assertions" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '22px', 
                        marginBottom: '16px',
                        fontWeight: '600',
                        textAlign: 'left'
                    }}>
                        10) Proper Assertions
                    </h3>
                    <p style={{ 
                        fontSize: '16px', 
                        color: '#475569',
                        lineHeight: '1.8',
                        marginBottom: '16px',
                        textAlign: 'left'
                    }}>
                        Assert what matters for the scenario—not too many, not too few.
                    </p>
                    <ul style={{ 
                        lineHeight: '2', 
                        fontSize: '15px',
                        color: '#475569',
                        paddingLeft: '24px',
                        margin: 0,
                        textAlign: 'left'
                    }}>
                        <li><strong>Focus on functionality:</strong> Assert business outcomes, not implementation details</li>
                        <li><strong>Avoid over-asserting:</strong> Don't check every UI detail that might change</li>
                        <li><strong>One meaningful assertion minimum:</strong> Every test should verify something important</li>
                    </ul>
                </div>

                {/* 11) Logging + Reporting */}
                <div id="logging" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '22px', 
                        marginBottom: '16px',
                        fontWeight: '600',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span>11) Logging + Reporting</span>
                        <UpArrow targetId="contents" title="Back to Contents" size={18} />
                    </h3>
                    <p style={{ 
                        fontSize: '16px', 
                        color: '#475569',
                        lineHeight: '1.8',
                        marginBottom: '16px',
                        textAlign: 'left'
                    }}>
                        Good logging and reporting make debugging failures much easier.
                    </p>
                    <ul style={{ 
                        lineHeight: '2', 
                        fontSize: '15px',
                        color: '#475569',
                        paddingLeft: '24px',
                        margin: 0,
                        textAlign: 'left'
                    }}>
                        <li><strong>Screenshots on failure:</strong> Automatically capture screenshots when tests fail</li>
                        <li><strong>Videos/Traces:</strong> Record test execution for debugging (especially in CI)</li>
                        <li><strong>HTML reports:</strong> Use tools like Allure, HTML Reporter, or framework-specific reporters</li>
                        <li><strong>Structured logs:</strong> Log important steps and decisions in your tests</li>
                    </ul>
                </div>

                {/* 12) Tagging */}
                <div id="tagging" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '22px', 
                        marginBottom: '16px',
                        fontWeight: '600',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span>12) Tagging & Test Suite Discipline</span>
                        <UpArrow targetId="contents" title="Back to Contents" size={18} />
                    </h3>
                    <p style={{ 
                        fontSize: '16px', 
                        color: '#475569',
                        lineHeight: '1.8',
                        marginBottom: '16px',
                        textAlign: 'left'
                    }}>
                        Organize tests with tags and run appropriate suites at the right times.
                    </p>
                    <APISectionContent
                        id="tagging-examples"
                        subtitle="Common Tags"
                        definition="Tag your tests:"
                        code={`// Playwright
test('login test', { tag: '@smoke' }, async ({ page }) => { ... });
test('checkout flow', { tag: '@critical' }, async ({ page }) => { ... });

// Cypress
describe('User Registration', { tags: '@smoke @regression' }, () => { ... });

// Jest
test('api test', () => { ... }, { tags: ['@api', '@smoke'] });`}
                    />
                    <ul style={{ 
                        lineHeight: '2', 
                        fontSize: '15px',
                        color: '#475569',
                        paddingLeft: '24px',
                        margin: 0,
                        marginTop: '16px',
                        textAlign: 'left'
                    }}>
                        <li><strong>@smoke:</strong> Critical path tests—run on every PR (fast, &lt; 5 minutes)</li>
                        <li><strong>@regression:</strong> Full test suite—run nightly or on release</li>
                        <li><strong>@critical:</strong> Business-critical features</li>
                        <li><strong>@api:</strong> API-only tests (faster than UI tests)</li>
                        <li><strong>@accessibility:</strong> A11y-specific tests</li>
                    </ul>
                </div>

                {/* 13) Reliability */}
                <div id="reliability" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '22px', 
                        marginBottom: '16px',
                        fontWeight: '600',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span>13) Reliability: Minimize Flakiness</span>
                        <UpArrow targetId="contents" title="Back to Contents" size={18} />
                    </h3>
                    <p style={{ 
                        fontSize: '16px', 
                        color: '#475569',
                        lineHeight: '1.8',
                        marginBottom: '16px',
                        textAlign: 'left'
                    }}>
                        Flaky tests erode trust in your test suite. Fix root causes instead of adding retries.
                    </p>
                    <ul style={{ 
                        lineHeight: '2', 
                        fontSize: '15px',
                        color: '#475569',
                        paddingLeft: '24px',
                        margin: 0,
                        textAlign: 'left'
                    }}>
                        <li><strong>Fix timing issues:</strong> Use proper waits instead of arbitrary delays</li>
                        <li><strong>Mock external dependencies:</strong> Mock APIs, databases, or services that are unstable</li>
                        <li><strong>Isolate tests:</strong> Ensure tests don't interfere with each other</li>
                        <li><strong>Retry as last resort:</strong> Only retry if the failure is truly intermittent and unfixable</li>
                    </ul>
                </div>

                {/* 14) Code Quality */}
                <div id="code-quality" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '22px', 
                        marginBottom: '16px',
                        fontWeight: '600',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span>14) Code Quality Standards</span>
                        <UpArrow targetId="contents" title="Back to Contents" size={18} />
                    </h3>
                    <p style={{ 
                        fontSize: '16px', 
                        color: '#475569',
                        lineHeight: '1.8',
                        marginBottom: '16px',
                        textAlign: 'left'
                    }}>
                        Apply the same code quality standards to test code as you do to production code.
                    </p>
                    <ul style={{ 
                        lineHeight: '2', 
                        fontSize: '15px',
                        color: '#475569',
                        paddingLeft: '24px',
                        margin: 0,
                        textAlign: 'left'
                    }}>
                        <li><strong>Linting:</strong> Use ESLint, Prettier, or similar tools</li>
                        <li><strong>Code reviews:</strong> Review test code with the same rigor as production code</li>
                        <li><strong>Consistent structure:</strong> Follow consistent folder structure and naming conventions</li>
                        <li><strong>Documentation:</strong> Document complex test scenarios and setup requirements</li>
                    </ul>
                </div>
            </div>

            {/* PR Review Best Practices Section */}
            <div id="pr-review-best-practices" style={{
                backgroundColor: '#ffffff',
                padding: '30px',
                borderRadius: '12px',
                marginBottom: '40px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                border: '1px solid #e5e7eb',
                scrollMarginTop: '100px'
            }}>
                <h2 style={{
                    color: '#00416A',
                    fontSize: '28px',
                    fontWeight: 'bold',
                    marginBottom: '30px',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <span>PR Review Best Practices Template</span>
                    <UpArrow />
                </h2>

                <div style={{ marginBottom: '30px' }}>
                    <p style={{ 
                        fontSize: '16px', 
                        color: '#475569',
                        lineHeight: '1.8',
                        marginBottom: '20px',
                        textAlign: 'left'
                    }}>
                        Use this checklist when reviewing automation test PRs. It ensures consistency, quality, and maintainability across the test suite.
                    </p>
                </div>

                {/* PR Review Best Practices */}
                <div id="pr-review-checklist" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '22px', 
                        marginBottom: '20px',
                        fontWeight: '600',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span>1) PR Review Best Practices</span>
                        <UpArrow targetId="contents" title="Back to Contents" size={18} />
                    </h3>
                    
                    <div style={{ marginBottom: '30px' }}>
                        <p style={{ 
                            fontSize: '16px', 
                            color: '#475569',
                            lineHeight: '1.8',
                            marginBottom: '20px',
                            textAlign: 'left'
                        }}>
                            Use this checklist and guidelines when reviewing automation test PRs. It ensures consistency, quality, and maintainability across the test suite.
                        </p>
                    </div>
                    
                    <h4 id="pr-review-checklist-items" style={{
                        color: '#00416A',
                        fontSize: '18px',
                        fontWeight: '600',
                        marginBottom: '20px',
                        marginTop: '30px',
                        textAlign: 'left',
                        scrollMarginTop: '100px'
                    }}>
                        1.1) PR Review Checklist
                    </h4>
                    
                    <div style={{
                        backgroundColor: '#f8fafc',
                        padding: '20px',
                        borderRadius: '8px',
                        border: '1px solid #e5e7eb',
                        marginBottom: '20px'
                    }}>
                        <h4 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            fontWeight: '600',
                            marginBottom: '15px',
                            textAlign: 'left'
                        }}>
                            ✅ Test Structure & Organization
                        </h4>
                        <ul style={{ 
                            lineHeight: '2', 
                            fontSize: '15px',
                            color: '#475569',
                            paddingLeft: '24px',
                            margin: 0,
                            textAlign: 'left'
                        }}>
                            <li>Tests follow AAA pattern (Arrange-Act-Assert)</li>
                            <li>Test names are clear and describe expected behavior</li>
                            <li>Tests are independent (no dependencies on other tests)</li>
                            <li>Proper use of describe/test blocks for organization</li>
                            <li>Tests are grouped logically by feature/module</li>
                        </ul>
                    </div>

                    <div style={{
                        backgroundColor: '#f8fafc',
                        padding: '20px',
                        borderRadius: '8px',
                        border: '1px solid #e5e7eb',
                        marginBottom: '20px'
                    }}>
                        <h4 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            fontWeight: '600',
                            marginBottom: '15px',
                            textAlign: 'left'
                        }}>
                            ✅ Code Quality & Best Practices
                        </h4>
                        <ul style={{ 
                            lineHeight: '2', 
                            fontSize: '15px',
                            color: '#475569',
                            paddingLeft: '24px',
                            margin: 0,
                            textAlign: 'left'
                        }}>
                            <li>No hard-coded values (URLs, credentials, timeouts)</li>
                            <li>Uses Page Object Model or similar abstraction pattern</li>
                            <li>Stable locators (prefers getByRole, getByLabel, data-testid)</li>
                            <li>No hard waits (sleep, waitForTimeout)</li>
                            <li>DRY principle applied (no code duplication)</li>
                            <li>Proper error handling and meaningful error messages</li>
                        </ul>
                    </div>

                    <div style={{
                        backgroundColor: '#f8fafc',
                        padding: '20px',
                        borderRadius: '8px',
                        border: '1px solid #e5e7eb',
                        marginBottom: '20px'
                    }}>
                        <h4 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            fontWeight: '600',
                            marginBottom: '15px',
                            textAlign: 'left'
                        }}>
                            ✅ Assertions & Validation
                        </h4>
                        <ul style={{ 
                            lineHeight: '2', 
                            fontSize: '15px',
                            color: '#475569',
                            paddingLeft: '24px',
                            margin: 0,
                            textAlign: 'left'
                        }}>
                            <li>Appropriate number of assertions (not too many, not too few)</li>
                            <li>Assertions verify business outcomes, not implementation details</li>
                            <li>Clear assertion messages for better failure reporting</li>
                            <li>Uses framework-specific assertion methods correctly</li>
                        </ul>
                    </div>

                    <div style={{
                        backgroundColor: '#f8fafc',
                        padding: '20px',
                        borderRadius: '8px',
                        border: '1px solid #e5e7eb',
                        marginBottom: '20px'
                    }}>
                        <h4 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            fontWeight: '600',
                            marginBottom: '15px',
                            textAlign: 'left'
                        }}>
                            ✅ Test Data Management
                        </h4>
                        <ul style={{ 
                            lineHeight: '2', 
                            fontSize: '15px',
                            color: '#475569',
                            paddingLeft: '24px',
                            margin: 0,
                            textAlign: 'left'
                        }}>
                            <li>Test data is generated dynamically (no shared static data)</li>
                            <li>Uses factories/builders for test data creation</li>
                            <li>Proper cleanup of test data after execution</li>
                            <li>Test data is isolated and doesn't cause collisions</li>
                        </ul>
                    </div>

                    <div style={{
                        backgroundColor: '#f8fafc',
                        padding: '20px',
                        borderRadius: '8px',
                        border: '1px solid #e5e7eb',
                        marginBottom: '20px'
                    }}>
                        <h4 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            fontWeight: '600',
                            marginBottom: '15px',
                            textAlign: 'left'
                        }}>
                            ✅ Reliability & Performance
                        </h4>
                        <ul style={{ 
                            lineHeight: '2', 
                            fontSize: '15px',
                            color: '#475569',
                            paddingLeft: '24px',
                            margin: 0,
                            textAlign: 'left'
                        }}>
                            <li>No flaky test patterns (timing issues, race conditions)</li>
                            <li>Proper waiting strategies (explicit waits, not arbitrary delays)</li>
                            <li>Tests run in reasonable time (not unnecessarily slow)</li>
                            <li>Network mocking/stubbing where appropriate</li>
                            <li>Tests are deterministic (same input = same output)</li>
                        </ul>
                    </div>

                    <div style={{
                        backgroundColor: '#f8fafc',
                        padding: '20px',
                        borderRadius: '8px',
                        border: '1px solid #e5e7eb',
                        marginBottom: '20px'
                    }}>
                        <h4 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            fontWeight: '600',
                            marginBottom: '15px',
                            textAlign: 'left'
                        }}>
                            ✅ Documentation & Maintainability
                        </h4>
                        <ul style={{ 
                            lineHeight: '2', 
                            fontSize: '15px',
                            color: '#475569',
                            paddingLeft: '24px',
                            margin: 0,
                            textAlign: 'left'
                        }}>
                            <li>Complex logic is documented with comments</li>
                            <li>PR description explains what and why (not just what)</li>
                            <li>Test scenarios are clear and easy to understand</li>
                            <li>Follows team's coding standards and conventions</li>
                            <li>No commented-out code or debug statements</li>
                        </ul>
                    </div>

                    <div style={{
                        backgroundColor: '#f8fafc',
                        padding: '20px',
                        borderRadius: '8px',
                        border: '1px solid #e5e7eb',
                        marginBottom: '20px'
                    }}>
                        <h4 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            fontWeight: '600',
                            marginBottom: '15px',
                            textAlign: 'left'
                        }}>
                            ✅ CI/CD & Reporting
                        </h4>
                        <ul style={{ 
                            lineHeight: '2', 
                            fontSize: '15px',
                            color: '#475569',
                            paddingLeft: '24px',
                            margin: 0,
                            textAlign: 'left'
                        }}>
                            <li>Tests pass in CI/CD pipeline</li>
                            <li>Proper test tagging (@smoke, @regression, etc.)</li>
                            <li>Screenshots/videos configured for failures</li>
                            <li>Test reports are readable and actionable</li>
                            <li>No breaking changes to existing tests</li>
                        </ul>
                    </div>
                    
                    <h4 id="pr-review-guidelines" style={{
                        color: '#00416A',
                        fontSize: '18px',
                        fontWeight: '600',
                        marginBottom: '20px',
                        marginTop: '40px',
                        textAlign: 'left',
                        scrollMarginTop: '100px'
                    }}>
                        1.2) PR Review Guidelines
                    </h4>
                    
                    <div style={{
                        backgroundColor: '#f8fafc',
                        padding: '20px',
                        borderRadius: '8px',
                        border: '1px solid #e5e7eb',
                        marginBottom: '20px'
                    }}>
                        <ul style={{ 
                            lineHeight: '2', 
                            fontSize: '15px',
                            color: '#475569',
                            paddingLeft: '24px',
                            margin: 0,
                            textAlign: 'left'
                        }}>
                            <li><strong>Be constructive:</strong> Provide actionable feedback with examples</li>
                            <li><strong>Explain why:</strong> Help authors understand the reasoning behind suggestions</li>
                            <li><strong>Be respectful:</strong> Focus on code, not the person</li>
                            <li><strong>Prioritize:</strong> Distinguish between must-fix and nice-to-have</li>
                            <li><strong>Approve when ready:</strong> Don't block on minor style preferences</li>
                            <li><strong>Learn together:</strong> Use reviews as teaching opportunities</li>
                            <li><strong>Be timely:</strong> Review PRs within 24-48 hours</li>
                            <li><strong>Test locally:</strong> Run tests locally when reviewing complex changes</li>
                        </ul>
                    </div>
                </div>

                {/* PR Review Comments Template */}
                <div id="pr-review-comments" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '22px', 
                        marginBottom: '20px',
                        fontWeight: '600',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span>2) PR Review Comment Templates</span>
                        <UpArrow targetId="contents" title="Back to Contents" size={18} />
                    </h3>

                    <div style={{
                        backgroundColor: '#f0f7fa',
                        padding: '20px',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        marginBottom: '20px'
                    }}>
                        <h4 style={{
                            color: '#00416A',
                            fontSize: '16px',
                            fontWeight: '600',
                            marginBottom: '10px',
                            textAlign: 'left'
                        }}>
                            🔴 Must Fix (Blocking)
                        </h4>
                        <APISectionContent
                            id="pr-comment-blocking"
                            subtitle="Hard-coded values"
                            definition="Template:"
                            code={`❌ **Must Fix:** Hard-coded values detected
- Line X: Hard-coded URL 'https://prod.example.com'
- Line Y: Hard-coded credentials

**Suggestion:** Use environment variables:
\`\`\`javascript
const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
\`\`\``}
                        />
                    </div>

                    <div style={{
                        backgroundColor: '#fff7ed',
                        padding: '20px',
                        borderRadius: '8px',
                        border: '1px solid #fed7aa',
                        marginBottom: '20px'
                    }}>
                        <h4 style={{
                            color: '#00416A',
                            fontSize: '16px',
                            fontWeight: '600',
                            marginBottom: '10px',
                            textAlign: 'left'
                        }}>
                            ⚠️ Should Fix (Non-blocking)
                        </h4>
                        <APISectionContent
                            id="pr-comment-suggestion"
                            subtitle="Test naming"
                            definition="Template:"
                            code={`💡 **Suggestion:** Consider improving test name for clarity

**Current:** \`test('login test')\`
**Suggested:** \`test('User can login with valid credentials')\`

This makes test failures more actionable and easier to understand.`}
                        />
                    </div>

                    <div style={{
                        backgroundColor: '#f0fdf4',
                        padding: '20px',
                        borderRadius: '8px',
                        border: '1px solid #bbf7d0',
                        marginBottom: '20px'
                    }}>
                        <h4 style={{
                            color: '#00416A',
                            fontSize: '16px',
                            fontWeight: '600',
                            marginBottom: '10px',
                            textAlign: 'left'
                        }}>
                            ✅ Positive Feedback
                        </h4>
                        <APISectionContent
                            id="pr-comment-positive"
                            subtitle="Good practices"
                            definition="Template:"
                            code={`✅ **Great work!** 

- Excellent use of Page Object Model
- Clean AAA pattern structure
- Stable locators using getByRole
- Good test data factory implementation

This is exactly the kind of maintainable test code we want to see!`}
                        />
                    </div>
                </div>

                {/* PR Description Template */}
                <div id="pr-description-template" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '22px', 
                        marginBottom: '20px',
                        fontWeight: '600',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span>3) PR Description Template</span>
                        <UpArrow targetId="contents" title="Back to Contents" size={18} />
                    </h3>

                    <APISectionContent
                        id="pr-description-template-content"
                        subtitle="Use this template for PR descriptions"
                        definition="Copy and fill in:"
                        code={`## Description
Brief description of what this PR adds/fixes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Test improvement
- [ ] Refactoring

## Test Coverage
- [ ] New tests added
- [ ] Existing tests updated
- [ ] All tests passing locally
- [ ] CI/CD pipeline passing

## Checklist
- [ ] Follows DRY + KISS principles
- [ ] No hard-coded values
- [ ] Uses Page Object Model (if applicable)
- [ ] Stable locators used
- [ ] No hard waits
- [ ] Tests are independent
- [ ] Proper assertions
- [ ] Test data is isolated
- [ ] Code follows team standards
- [ ] Documentation updated (if needed)

## Screenshots/Evidence
(If applicable, add screenshots or test execution results)

## Related Issues
Closes #123`}
                    />
                </div>
            </div>

            {/* Standard Automation Framework Structure Section */}
            <div id="standard-automation-framework-structure" style={{
                backgroundColor: '#ffffff',
                padding: '30px',
                borderRadius: '12px',
                marginBottom: '40px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                border: '1px solid #e5e7eb',
                scrollMarginTop: '100px'
            }}>
                <h2 style={{
                    color: '#00416A',
                    fontSize: '28px',
                    fontWeight: 'bold',
                    marginBottom: '30px',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <span>Standard Automation Framework Structure</span>
                    <UpArrow />
                </h2>
                <p style={{ 
                    fontSize: '16px', 
                    color: '#475569',
                    lineHeight: '1.8',
                    marginBottom: '30px',
                    textAlign: 'left'
                }}>
                    Standard folder structures and organization patterns for various automation frameworks. These structures follow best practices and ensure maintainability, scalability, and consistency across projects.
                </p>

                {/* PlaywrightJS Framework Structure */}
                <div id="playwrightJS-automation-framework-structure" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '22px', 
                        marginBottom: '20px',
                        fontWeight: '600',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span>1) PlaywrightJS Automation Framework Structure</span>
                        <UpArrow targetId="contents" title="Back to Contents" size={18} />
                    </h3>
                    <CodeBlock code={`playwright-automation/
├── tests/
│   ├── smoke/
│   ├── functional/
│   ├── regression/
│   └── a11y/
├── pages/
│   └── *.page.js
├── fixtures/
│   └── *.fixture.js
├── utils/
│   └── helpers.js
├── config/
│   └── playwright.config.js
├── .github/
│   ├── workflows/
│   │   └── *.yml
│   ├── PR_TEMPLATE.md
│   └── CODEOWNERS
├── data-driven/
│   └── *.json
├── keyword-driven/
│   └── *.js
├── .gitignore
├── .env
├── .env.example
└── README.md`} />
                </div>

                {/* PlaywrightTS Framework Structure */}
                <div id="playwrightTS-automation-framework-structure" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '22px', 
                        marginBottom: '20px',
                        fontWeight: '600',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span>PlaywrightTS Automation Framework Structure</span>
                        <UpArrow targetId="contents" title="Back to Contents" size={18} />
                    </h3>
                    <CodeBlock code={`playwright-automation/
├── tests/
│   ├── smoke/
│   ├── functional/
│   ├── regression/
│   └── a11y/
├── pages/
│   └── *.page.ts
├── fixtures/
│   └── *.fixture.ts
├── utils/
│   └── helpers.ts
├── config/
│   └── playwright.config.ts
├── .github/
│   ├── workflows/
│   │   └── *.yml
│   ├── PR_TEMPLATE.md
│   └── CODEOWNERS
├── data-driven/
│   └── *.json
├── keyword-driven/
│   └── *.ts
├── .gitignore
├── .env
├── .env.example
├── README.md
├── tsconfig.json
└── package.json`} />
                </div>

                {/* PlaywrightPY Framework Structure */}
                <div id="playwrightPY-automation-framework-structure" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '22px', 
                        marginBottom: '20px',
                        fontWeight: '600',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span>3) PlaywrightPY Automation Framework Structure</span>
                        <UpArrow targetId="contents" title="Back to Contents" size={18} />
                    </h3>
                    <CodeBlock code={`playwright-automation/
├── tests/
│   ├── smoke/
│   ├── functional/
│   ├── regression/
│   └── a11y/
├── pages/
│   └── *.py
├── fixtures/
│   └── conftest.py
├── utils/
│   └── helpers.py
├── config/
│   └── pytest.ini
├── .github/
│   ├── workflows/
│   │   └── *.yml
│   ├── PR_TEMPLATE.md
│   └── CODEOWNERS
├── data-driven/
│   └── *.json
├── keyword-driven/
│   └── *.py
├── .gitignore
├── .env
├── .env.example
├── README.md
└── requirements.txt`} />
                </div>

                {/* PlaywrightJava Framework Structure */}
                <div id="playwrightJava-automation-framework-structure" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '22px', 
                        marginBottom: '20px',
                        fontWeight: '600',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span>4) PlaywrightJava Automation Framework Structure</span>
                        <UpArrow targetId="contents" title="Back to Contents" size={18} />
                    </h3>
                    <CodeBlock code={`playwright-automation/
├── src/
│   ├── test/
│   │   ├── java/
│   │   │   ├── smoke/
│   │   │   ├── functional/
│   │   │   ├── regression/
│   │   │   └── a11y/
│   │   └── resources/
│   └── main/
│       └── java/
│           ├── pages/
│           ├── fixtures/
│           └── utils/
├── .github/
│   ├── workflows/
│   │   └── *.yml
│   ├── PR_TEMPLATE.md
│   └── CODEOWNERS
├── data-driven/
│   └── *.json
├── keyword-driven/
│   └── *.java
├── .gitignore
├── .env
├── .env.example
├── README.md
├── pom.xml
└── playwright.config.js`} />
                </div>

                {/* PlaywrightJSCucumber Framework Structure */}
                <div id="playwrightJSCucumber-automation-framework-structure" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '22px', 
                        marginBottom: '20px',
                        fontWeight: '600',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span>PlaywrightJSCucumber Automation Framework Structure</span>
                        <UpArrow targetId="contents" title="Back to Contents" size={18} />
                    </h3>
                    <CodeBlock code={`playwright-automation/
├── features/
│   ├── smoke/
│   ├── functional/
│   └── regression/
├── step-definitions/
│   └── *.steps.js
├── pages/
│   └── *.page.js
├── support/
│   └── hooks.js
├── config/
│   └── playwright.config.js
├── .github/
│   ├── workflows/
│   │   └── *.yml
│   ├── PR_TEMPLATE.md
│   └── CODEOWNERS
├── data-driven/
│   └── *.json
├── keyword-driven/
│   └── *.js
├── .gitignore
├── .env
├── .env.example
├── README.md
└── package.json`} />
                </div>

                {/* PlaywrightC# Framework Structure */}
                <div id="playwrightC#-automation-framework-structure" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '22px', 
                        marginBottom: '20px',
                        fontWeight: '600',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span>6) PlaywrightC# Automation Framework Structure</span>
                        <UpArrow targetId="contents" title="Back to Contents" size={18} />
                    </h3>
                    <CodeBlock code={`PlaywrightAutomation/
├── Tests/
│   ├── Smoke/
│   ├── Functional/
│   ├── Regression/
│   └── A11y/
├── Pages/
│   └── *.cs
├── Fixtures/
│   └── BaseFixture.cs
├── Utils/
│   └── Helpers.cs
├── .github/
│   ├── workflows/
│   │   └── *.yml
│   ├── PR_TEMPLATE.md
│   └── CODEOWNERS
├── data-driven/
│   └── *.json
├── keyword-driven/
│   └── *.cs
├── .gitignore
├── .env
├── .env.example
├── README.md
├── PlaywrightAutomation.csproj
└── playwright.config.js`} />
                </div>

                {/* CypressJS Framework Structure */}
                <div id="cypressJS-automation-framework-structure" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '22px', 
                        marginBottom: '20px',
                        fontWeight: '600',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span>CypressJS Automation Framework Structure</span>
                        <UpArrow targetId="contents" title="Back to Contents" size={18} />
                    </h3>
                    <CodeBlock code={`cypress-automation/
├── cypress/
│   ├── e2e/
│   │   ├── smoke/
│   │   ├── functional/
│   │   └── regression/
│   ├── fixtures/
│   ├── support/
│   │   ├── commands.js
│   │   └── e2e.js
│   └── pages/
├── .github/
│   ├── workflows/
│   │   └── *.yml
│   ├── PR_TEMPLATE.md
│   └── CODEOWNERS
├── data-driven/
│   └── *.json
├── keyword-driven/
│   └── *.js
├── .gitignore
├── .env
├── .env.example
├── README.md
├── cypress.config.js
└── package.json`} />
                </div>

                {/* CypressTS Framework Structure */}
                <div id="cypressTS-automation-framework-structure" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '22px', 
                        marginBottom: '20px',
                        fontWeight: '600',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span>8) CypressTS Automation Framework Structure</span>
                        <UpArrow targetId="contents" title="Back to Contents" size={18} />
                    </h3>
                    <CodeBlock code={`cypress-automation/
├── cypress/
│   ├── e2e/
│   │   ├── smoke/
│   │   ├── functional/
│   │   └── regression/
│   ├── fixtures/
│   ├── support/
│   │   ├── commands.ts
│   │   └── e2e.ts
│   └── pages/
├── .github/
│   ├── workflows/
│   │   └── *.yml
│   ├── PR_TEMPLATE.md
│   └── CODEOWNERS
├── data-driven/
│   └── *.json
├── keyword-driven/
│   └── *.ts
├── .gitignore
├── .env
├── .env.example
├── README.md
├── cypress.config.ts
├── tsconfig.json
└── package.json`} />
                </div>

                {/* SeleniumJAVA Framework Structure */}
                <div id="SeleniumJAVA-automation-framework-structure" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '22px', 
                        marginBottom: '20px',
                        fontWeight: '600',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span>SeleniumJAVA Automation Framework Structure</span>
                        <UpArrow targetId="contents" title="Back to Contents" size={18} />
                    </h3>
                    <CodeBlock code={`selenium-automation/
├── src/
│   ├── test/
│   │   ├── java/
│   │   │   ├── smoke/
│   │   │   ├── functional/
│   │   │   └── regression/
│   │   └── resources/
│   └── main/
│       └── java/
│           ├── pages/
│           ├── utils/
│           └── base/
├── .github/
│   ├── workflows/
│   │   └── *.yml
│   ├── PR_TEMPLATE.md
│   └── CODEOWNERS
├── data-driven/
│   └── *.json
├── keyword-driven/
│   └── *.java
├── .gitignore
├── .env
├── .env.example
├── README.md
├── pom.xml
└── testng.xml`} />
                </div>

                {/* SeleniumPY Framework Structure */}
                <div id="SeleniumPY-automation-framework-structure" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '22px', 
                        marginBottom: '20px',
                        fontWeight: '600',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span>10) SeleniumPY Automation Framework Structure</span>
                        <UpArrow targetId="contents" title="Back to Contents" size={18} />
                    </h3>
                    <CodeBlock code={`selenium-automation/
├── tests/
│   ├── smoke/
│   ├── functional/
│   └── regression/
├── pages/
│   └── *.py
├── utils/
│   └── helpers.py
├── config/
│   └── conftest.py
├── .github/
│   ├── workflows/
│   │   └── *.yml
│   ├── PR_TEMPLATE.md
│   └── CODEOWNERS
├── data-driven/
│   └── *.json
├── keyword-driven/
│   └── *.py
├── .gitignore
├── .env
├── .env.example
├── README.md
└── requirements.txt`} />
                </div>

                {/* SeleniumC# Framework Structure */}
                <div id="SeleniumCSharp-automation-framework-structure" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '22px', 
                        marginBottom: '20px',
                        fontWeight: '600',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span>SeleniumC# Automation Framework Structure</span>
                        <UpArrow targetId="contents" title="Back to Contents" size={18} />
                    </h3>
                    <CodeBlock code={`SeleniumAutomation/
├── Tests/
│   ├── Smoke/
│   ├── Functional/
│   └── Regression/
├── Pages/
│   └── *.cs
├── Utils/
│   └── Helpers.cs
├── Base/
│   └── BaseTest.cs
├── .github/
│   ├── workflows/
│   │   └── *.yml
│   ├── PR_TEMPLATE.md
│   └── CODEOWNERS
├── data-driven/
│   └── *.json
├── keyword-driven/
│   └── *.cs
├── .gitignore
├── .env
├── .env.example
├── README.md
├── SeleniumAutomation.csproj
└── app.config`} />
                </div>

                {/* SeleniumJavaCucumber Framework Structure */}
                <div id="seleniumJavaCucumber-automation-framework-structure" style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '22px', 
                        marginBottom: '20px',
                        fontWeight: '600',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span>12) SeleniumJavaCucumber Automation Framework Structure</span>
                        <UpArrow targetId="contents" title="Back to Contents" size={18} />
                    </h3>
                    <CodeBlock code={`selenium-automation/
├── src/
│   ├── test/
│   │   ├── java/
│   │   │   ├── features/
│   │   │   │   ├── smoke/
│   │   │   │   ├── functional/
│   │   │   │   └── regression/
│   │   │   ├── stepDefinitions/
│   │   │   │   └── *.java
│   │   │   └── runners/
│   │   │       └── TestRunner.java
│   │   └── resources/
│   └── main/
│       └── java/
│           ├── pages/
│           ├── utils/
│           └── base/
├── .github/
│   ├── workflows/
│   │   └── *.yml
│   ├── PR_TEMPLATE.md
│   └── CODEOWNERS
├── data-driven/
│   └── *.json
├── keyword-driven/
│   └── *.java
├── .gitignore
├── .env
├── .env.example
├── README.md
├── pom.xml
└── cucumber.properties`} />
                </div>
            </div>
        </div>
    );
};

export default Automation;
