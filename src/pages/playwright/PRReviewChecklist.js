import React, {Component} from 'react';
import Footer from '../../components/footer';
import { InlineCode } from '../../components/shared';
import { pageContainerStyles, modernCardStyles, sectionHeaderStyles } from '../../utils/globalStyles';

class PRReviewChecklist extends Component {
    render() {
        const cardStyle = modernCardStyles.base;
        const sectionHeaderStyle = sectionHeaderStyles.primary;

        return (
            <div style={pageContainerStyles.modern}>
                {/* Hero Section */}
                <div style={{
                    ...cardStyle,
                    marginBottom: '40px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: '#ffffff',
                    padding: '56px 48px',
                    boxShadow: '0 20px 25px -5px rgba(102, 126, 234, 0.3), 0 10px 10px -5px rgba(102, 126, 234, 0.2)',
                    border: 'none',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '200px',
                        height: '200px',
                        background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                        borderRadius: '50%',
                        transform: 'translate(30%, -30%)'
                    }}></div>
                    <h1 style={{
                        fontSize: 'clamp(32px, 5vw, 48px)',
                        fontWeight: '800',
                        marginBottom: '20px',
                        color: '#ffffff',
                        letterSpacing: '-0.02em',
                        lineHeight: '1.2',
                        position: 'relative',
                        zIndex: 1
                    }}>
                        PR Review Checklist (MANDATORY)
                    </h1>
                    <p style={{
                        fontSize: '19px',
                        opacity: 0.95,
                        lineHeight: '1.7',
                        margin: 0,
                        position: 'relative',
                        zIndex: 1
                    }}>
                        Reviewers must validate these items before approving a PR.
                    </p>
                </div>

                {/* Section A: Test Structure & Naming */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>A) Test Structure & Naming</h2>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li style={{ marginBottom: '12px' }}>
                            [ ] Test file name follows: <InlineCode>{'<feature>.<action>.spec.ts'}</InlineCode>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            [ ] <InlineCode>describe</InlineCode> blocks follow: <InlineCode>{'<Feature> - <Context>'}</InlineCode>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            [ ] Each test title clearly states expected outcome (uses "should …")
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            [ ] Tests include tags in title (e.g., <InlineCode>[@smoke]</InlineCode>, <InlineCode>[@functional]</InlineCode>, etc.)
                        </li>
                    </ul>
                </div>

                {/* Section B: Tags & Suite Alignment */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>B) Tags & Suite Alignment</h2>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li style={{ marginBottom: '12px' }}>
                            [ ] Every test has <strong>at least one</strong> test-type tag: <InlineCode>@smoke</InlineCode> / <InlineCode>@functional</InlineCode> / <InlineCode>@regression</InlineCode> / <InlineCode>@a11y</InlineCode>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            [ ] If the test is required for smoke, it includes <InlineCode>@smoke</InlineCode> even if also <InlineCode>@regression</InlineCode>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            [ ] <InlineCode>@wip</InlineCode> tests are not merged into main unless explicitly approved
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            [ ] <InlineCode>@flaky</InlineCode> tests have a tracking ticket and are not used for PR gating (unless exception approved)
                        </li>
                    </ul>
                </div>

                {/* Section C: Locator & Stability Rules */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>C) Locator & Stability Rules</h2>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li style={{ marginBottom: '12px' }}>
                            [ ] Uses <InlineCode>getByRole()</InlineCode> and/or <InlineCode>getByTestId()</InlineCode> where possible
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            [ ] Avoids brittle selectors (<InlineCode>nth-child</InlineCode>, deep CSS chains, XPath)
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            [ ] No <InlineCode>waitForTimeout()</InlineCode> or other hard waits in committed code
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            [ ] Uses explicit <InlineCode>expect()</InlineCode> for readiness only when needed
                        </li>
                    </ul>
                </div>

                {/* Section D: Page Object Model (POM) Rules */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>D) Page Object Model (POM) Rules</h2>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li style={{ marginBottom: '12px' }}>
                            [ ] Page Objects encapsulate locators and page actions only
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            [ ] No end-to-end orchestration logic inside Page Objects
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            [ ] POM methods are verb-based, readable, and reusable
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            [ ] Page Objects do not create test data or contain environment logic
                        </li>
                    </ul>
                </div>

                {/* Section E: Test Independence & Data */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>E) Test Independence & Data</h2>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li style={{ marginBottom: '12px' }}>
                            [ ] Test does not rely on execution order
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            [ ] Parallel-safe (unique data or isolated state)
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            [ ] Setup/teardown is handled via fixtures or API utilities
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            [ ] Cleanup is performed or state is reset when needed
                        </li>
                    </ul>
                </div>

                {/* Section F: Quality Gates */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>F) Quality Gates</h2>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li style={{ marginBottom: '12px' }}>
                            [ ] ESLint passes locally / in CI
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            [ ] Prettier formatting applied
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            [ ] TypeScript strict rules respected (no unexplained <InlineCode>any</InlineCode>)
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            [ ] Test failure artifacts are supported (trace/screenshot/video policy respected)
                        </li>
                    </ul>
                </div>

                {/* Section G: Documentation & Maintainability */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>G) Documentation & Maintainability</h2>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li style={{ marginBottom: '12px' }}>
                            [ ] New utilities/pages include brief comments where needed
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            [ ] Non-obvious design decisions are documented (short note in code or PR)
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            [ ] Any standards exception has justification and approval
                        </li>
                    </ul>
                </div>

                {/* Section 8: Acceptance Criteria Checklist */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>8) Acceptance Criteria Checklist (Must Pass)</h2>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li style={{ marginBottom: '12px' }}>
                            [ ] Naming defined for test files, describe blocks, test titles
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            [ ] Naming defined for Page Object classes and methods
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            [ ] Locator strategy documented (role-based, testid preferred)
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            [ ] Hard waits prohibited; auto-wait + expectations used correctly
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            [ ] Single responsibility rule for POM documented
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            [ ] Test independence and cleanup rules documented
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            [ ] ESLint/Prettier + TS strict baseline documented
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            [ ] PR Review Checklist included and enforced
                        </li>
                    </ul>
                </div>

                {/* Section 9: Governance */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>9) Governance</h2>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li style={{ marginBottom: '12px' }}>
                            Standards updates require PR + approval by Test Architect / QA Lead
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            Violations (hard waits, missing tags, brittle locators) are <strong>merge blockers</strong>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            Exceptions must be documented and approved
                        </li>
                    </ul>
                </div>

                <Footer />
            </div>
        );
    }
}

export default PRReviewChecklist;
