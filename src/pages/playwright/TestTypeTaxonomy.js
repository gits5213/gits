import React, {Component} from 'react';
import Footer from '../../components/footer';
import { CodeBlock, InlineCode } from '../../components/shared';
import { pageContainerStyles, modernCardStyles, sectionHeaderStyles } from '../../utils/globalStyles';

class TestTypeTaxonomy extends Component {
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
                        GITS Test Type Taxonomy & Tagging Standards
                    </h1>
                    <div style={{
                        fontSize: '17px',
                        opacity: 0.95,
                        lineHeight: '1.7',
                        position: 'relative',
                        zIndex: 1
                    }}>
                        <p style={{ marginBottom: '8px' }}>
                            <strong>Applies to:</strong> All GITS QA projects (Manual + Automation), especially Playwright TypeScript automation
                        </p>
                        <p style={{ margin: 0 }}>
                            <strong>Owner:</strong> Test Architect / QA Automation Lead
                        </p>
                    </div>
                </div>

                {/* Section 1: Purpose */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>1) Purpose</h2>
                    <p style={{ fontSize: '17px', color: '#475569', lineHeight: '1.9', marginBottom: '14px' }}>
                        This document defines <strong>standard test types</strong> and <strong>tagging rules</strong> so that all QA Engineers can:
                    </p>
                    <ul style={{ paddingLeft: '24px', marginTop: '12px', lineHeight: '1.8', fontSize: '16px', color: '#334155' }}>
                        <li>Categorize tests consistently</li>
                        <li>Run the correct suites in CI/CD</li>
                        <li>Communicate coverage clearly (Smoke vs Functional vs 508 vs Regression)</li>
                        <li>Reduce confusion and prevent mis-tagging</li>
                    </ul>
                </div>

                {/* Section 2: Test Type Definitions */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>2) Test Type Definitions (Standard Taxonomy)</h2>
                    
                    <h3 style={{ color: '#334155', fontSize: '24px', fontWeight: '600', marginBottom: '16px', marginTop: '32px', letterSpacing: '-0.01em' }}>
                        2.1 Smoke Tests (<InlineCode>@smoke</InlineCode>)
                    </h3>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        <strong>Definition:</strong> Minimal set of tests that proves the build is usable and core flows work.
                    </p>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        <strong>Goal:</strong> Fast signal that blocks bad builds early.
                    </p>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        <strong>Examples:</strong>
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Application loads successfully</li>
                        <li>Login works</li>
                        <li>Main dashboard is accessible</li>
                        <li>Critical transaction completes (e.g., checkout / submit / save)</li>
                    </ul>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        <strong>Run Frequency:</strong>
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li><strong>Every PR</strong></li>
                        <li><strong>Every deployment pipeline</strong></li>
                    </ul>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        <strong>Inclusion Criteria (Must meet):</strong>
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Covers critical user journeys only</li>
                        <li>Fast (target: seconds to a few minutes total suite)</li>
                        <li>Highly stable (no flaky dependencies)</li>
                    </ul>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        <strong>Exclusion Criteria (Must NOT be):</strong>
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Deep edge cases</li>
                        <li>Large data setups</li>
                        <li>Multi-module long journeys unless business-critical</li>
                    </ul>

                    <h3 style={{ color: '#00416A', fontSize: '24px', fontWeight: '600', marginBottom: '16px', marginTop: '32px' }}>
                        2.2 Functional Tests (<InlineCode>@functional</InlineCode>)
                    </h3>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        <strong>Definition:</strong> Tests that validate specific feature requirements behave correctly.
                    </p>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        <strong>Goal:</strong> Ensure requirement-level correctness.
                    </p>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        <strong>Examples:</strong>
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Form validations</li>
                        <li>CRUD flows (Create/Read/Update/Delete)</li>
                        <li>Role/permission enforcement</li>
                        <li>Search/filter/sort correctness</li>
                    </ul>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        <strong>Run Frequency:</strong>
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li><strong>PR subset</strong> (risk-based / impacted areas)</li>
                        <li><strong>Nightly full functional suite</strong> (as required by the project)</li>
                    </ul>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        <strong>Inclusion Criteria (Must meet):</strong>
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Directly maps to a requirement/user story/acceptance criteria</li>
                        <li>Validates expected behavior for a given feature</li>
                    </ul>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        <strong>Exclusion Criteria (Must NOT be):</strong>
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Broad system-wide coverage (belongs to regression)</li>
                        <li>Accessibility checks (belongs to a11y/508)</li>
                    </ul>

                    <h3 style={{ color: '#00416A', fontSize: '24px', fontWeight: '600', marginBottom: '16px', marginTop: '32px' }}>
                        2.3 508 Accessibility Tests (<InlineCode>@a11y</InlineCode>)
                    </h3>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        <strong>Definition:</strong> Automated accessibility checks aligned to <strong>Section 508</strong> and common <strong>WCAG A/AA</strong> expectations.
                    </p>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        <strong>Goal:</strong> Catch accessibility regressions early and continuously.
                    </p>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        <strong>Examples:</strong>
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Missing accessible labels / names</li>
                        <li>Contrast issues (tool-dependent)</li>
                        <li>Keyboard navigation blockers</li>
                        <li>ARIA attribute violations, landmark/heading issues</li>
                    </ul>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        <strong>Run Frequency:</strong>
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li><strong>Nightly</strong></li>
                        <li><strong>Pre-release</strong></li>
                        <li><strong>After major UI changes</strong></li>
                    </ul>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        <strong>Inclusion Criteria (Must meet):</strong>
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Runs automated a11y scans/checks using an approved tool (e.g., axe-core integration)</li>
                        <li>Produces clear actionable outputs (violation list with selectors/context)</li>
                    </ul>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        <strong>Exclusion Criteria (Must NOT be):</strong>
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Full manual accessibility audits (manual process, separate checklist)</li>
                        <li>Deep functional verification (belongs to functional/regression)</li>
                    </ul>
                    <div style={{
                        backgroundColor: '#eff6ff',
                        padding: '20px',
                        borderRadius: '12px',
                        border: '2px solid #3b82f6',
                        marginTop: '20px',
                        boxShadow: '0 2px 4px rgba(59, 130, 246, 0.1)'
                    }}>
                        <p style={{ fontSize: '17px', color: '#1e40af', lineHeight: '1.8', margin: 0, fontWeight: '500' }}>
                            <strong>Note:</strong> Automated a11y checks do <strong>not</strong> replace manual accessibility testing.
                        </p>
                    </div>

                    <h3 style={{ color: '#00416A', fontSize: '24px', fontWeight: '600', marginBottom: '16px', marginTop: '32px' }}>
                        2.4 Regression Tests (<InlineCode>@regression</InlineCode>)
                    </h3>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        <strong>Definition:</strong> Broad suite ensuring existing functionality hasn't broken.
                    </p>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        <strong>Goal:</strong> Release confidence and prevention of reintroducing known issues.
                    </p>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        <strong>Examples:</strong>
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Stable high-value scenarios across modules</li>
                        <li>End-to-end user journeys covering multiple features</li>
                        <li>Bug-prevention tests (once stable)</li>
                    </ul>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        <strong>Run Frequency:</strong>
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li><strong>Nightly</strong></li>
                        <li><strong>Before releases</strong></li>
                    </ul>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        <strong>Inclusion Criteria (Must meet):</strong>
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Stable and repeatable across environments</li>
                        <li>Covers cross-feature/system behaviors</li>
                    </ul>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        <strong>Exclusion Criteria (Must NOT be):</strong>
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Experimental tests (<InlineCode>@wip</InlineCode>)</li>
                        <li>Known flaky tests not yet fixed (<InlineCode>@flaky</InlineCode> should be quarantined from gating)</li>
                    </ul>
                </div>

                {/* Section 3: Tagging Rules */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>3) Tagging Rules (Mandatory)</h2>
                    
                    <h3 style={{ color: '#334155', fontSize: '24px', fontWeight: '600', marginBottom: '16px', marginTop: '32px', letterSpacing: '-0.01em' }}>
                        3.1 Required test-type tags
                    </h3>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        Every test must include <strong>at least one</strong> of the following:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li><InlineCode>@smoke</InlineCode></li>
                        <li><InlineCode>@functional</InlineCode></li>
                        <li><InlineCode>@regression</InlineCode></li>
                        <li><InlineCode>@a11y</InlineCode></li>
                    </ul>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        ✅ <strong>Rule:</strong> A test <strong>cannot</strong> be merged without a test-type tag.
                    </p>

                    <h3 style={{ color: '#00416A', fontSize: '24px', fontWeight: '600', marginBottom: '16px', marginTop: '32px' }}>
                        3.2 Optional tags (standard set)
                    </h3>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        Optional tags may be applied to provide additional filtering and reporting:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li><InlineCode>@api</InlineCode> — API-level validation (if applicable)</li>
                        <li><InlineCode>@ui</InlineCode> — UI-specific scenario</li>
                        <li><InlineCode>@critical</InlineCode> — business critical (used for prioritization)</li>
                        <li><InlineCode>@flaky</InlineCode> — unstable test needing attention</li>
                        <li><InlineCode>@wip</InlineCode> — work in progress; not production-ready</li>
                        <li>(Project-specific tags may exist, but must be documented in repo <InlineCode>/docs/tags.md</InlineCode>)</li>
                    </ul>

                    <h3 style={{ color: '#00416A', fontSize: '24px', fontWeight: '600', marginBottom: '16px', marginTop: '32px' }}>
                        3.3 Tag formatting standard
                    </h3>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        <strong>Standard format:</strong> <InlineCode>@tag</InlineCode> (lowercase)
                    </p>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        <strong>Where tags live:</strong> In the <strong>test title</strong> (recommended) or suite/describe name
                    </p>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        Example:
                    </p>
                    <CodeBlock code={`test('[@smoke][@critical] user can login and reach dashboard', async ({ page }) => {
  // ...
});`} />
                </div>

                {/* Section 4: Overlap Rules */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>4) Overlap Rules (Important)</h2>
                    
                    <h3 style={{ color: '#334155', fontSize: '24px', fontWeight: '600', marginBottom: '16px', marginTop: '32px', letterSpacing: '-0.01em' }}>
                        4.1 Overlap is allowed
                    </h3>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        A test may carry multiple tags, for example:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Smoke + Regression: <InlineCode>[@smoke][@regression]</InlineCode></li>
                    </ul>

                    <h3 style={{ color: '#00416A', fontSize: '24px', fontWeight: '600', marginBottom: '16px', marginTop: '32px' }}>
                        4.2 Overlap rule (mandatory)
                    </h3>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        If a test is intended to run as smoke, it <strong>must include <InlineCode>@smoke</InlineCode></strong> even if it is also part of regression.
                    </p>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        ✅ Example:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li><InlineCode>[@smoke][@regression] critical checkout flow</InlineCode></li>
                    </ul>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        ❌ Not allowed:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li><InlineCode>[@regression] critical checkout flow</InlineCode> <em>(if it's required as smoke)</em></li>
                    </ul>
                </div>

                {/* Section 5: CI/CD Suite Execution Standards */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>5) CI/CD Suite Execution Standards (By Tags)</h2>
                    
                    <h3 style={{ color: '#334155', fontSize: '24px', fontWeight: '600', marginBottom: '16px', marginTop: '32px', letterSpacing: '-0.01em' }}>
                        5.1 Required CI support
                    </h3>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        CI pipelines must support running suites via tags:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Smoke only</li>
                        <li>Regression only</li>
                        <li>A11y only</li>
                        <li>Functional only (optional for PR, required for nightly if used)</li>
                    </ul>

                    <h3 style={{ color: '#00416A', fontSize: '24px', fontWeight: '600', marginBottom: '16px', marginTop: '32px' }}>
                        5.2 Standard commands (Playwright examples)
                    </h3>
                    <CodeBlock code={`# Smoke
npx playwright test --grep @smoke

# Functional
npx playwright test --grep @functional

# Regression
npx playwright test --grep @regression

# Accessibility / 508
npx playwright test --grep @a11y`}
                    />

                    <h3 style={{ color: '#00416A', fontSize: '24px', fontWeight: '600', marginBottom: '16px', marginTop: '32px' }}>
                        5.3 Standard pipeline triggers (recommended baseline)
                    </h3>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li><strong>PR Gate:</strong> <InlineCode>@smoke</InlineCode> (and optionally risk-based <InlineCode>@functional</InlineCode>)</li>
                        <li><strong>Nightly:</strong> <InlineCode>@regression</InlineCode> + <InlineCode>@a11y</InlineCode> (+ full <InlineCode>@functional</InlineCode> if required)</li>
                        <li><strong>Pre-release:</strong> <InlineCode>@regression</InlineCode> + <InlineCode>@a11y</InlineCode> (plus cross-browser if required)</li>
                    </ul>
                </div>

                {/* Section 6: Examples */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>6) Examples: Correct Categorization</h2>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li style={{ marginBottom: '12px' }}>
                            <strong>Example A (Smoke):</strong><br />
                            <InlineCode>[@smoke] app loads and login succeeds</InlineCode>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            <strong>Example B (Functional):</strong><br />
                            <InlineCode>[@functional] user cannot submit form with invalid email</InlineCode>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            <strong>Example C (A11y/508):</strong><br />
                            <InlineCode>[@a11y] homepage has no critical accessibility violations</InlineCode>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            <strong>Example D (Regression):</strong><br />
                            <InlineCode>[@regression] user can create and update a profile across modules</InlineCode>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            <strong>Example E (Overlap):</strong><br />
                            <InlineCode>[@smoke][@regression][@critical] checkout completes with valid payment</InlineCode>
                        </li>
                    </ul>
                </div>

                {/* Section 7: Acceptance Criteria */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>7) Acceptance Criteria Checklist (Must Pass)</h2>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>[ ] Standards define required tags: <InlineCode>@smoke</InlineCode>, <InlineCode>@functional</InlineCode>, <InlineCode>@a11y</InlineCode>, <InlineCode>@regression</InlineCode></li>
                        <li>[ ] Optional tags are documented: <InlineCode>@api</InlineCode>, <InlineCode>@ui</InlineCode>, <InlineCode>@critical</InlineCode>, <InlineCode>@flaky</InlineCode>, <InlineCode>@wip</InlineCode></li>
                        <li>[ ] Each test includes at least one <strong>test-type</strong> tag</li>
                        <li>[ ] CI can run suites by tags (smoke-only, regression-only, etc.)</li>
                        <li>[ ] Overlap rules are documented and enforced (<InlineCode>@smoke</InlineCode> must be present if it's smoke)</li>
                    </ul>
                </div>

                {/* Section 8: Governance */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>8) Governance</h2>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Changes require PR + approval (Test Architect + QA Lead)</li>
                        <li>Project-specific tags must be documented and reviewed</li>
                        <li>Tag misuse or missing tags is a <strong>merge blocker</strong></li>
                    </ul>
                </div>

                {/* Section 9: Quick Reference Table */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>9) Quick Reference</h2>
                    <div style={{ overflowX: 'auto', marginTop: '20px' }}>
                        <table style={{
                            width: '100%',
                            borderCollapse: 'collapse',
                            fontSize: '16px',
                            minWidth: '600px',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                        }}>
                            <thead>
                                <tr style={{
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    color: '#ffffff'
                                }}>
                                    <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', border: '1px solid rgba(255,255,255,0.2)' }}>Test Type</th>
                                    <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', border: '1px solid rgba(255,255,255,0.2)' }}>Tag</th>
                                    <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', border: '1px solid rgba(255,255,255,0.2)' }}>Purpose</th>
                                    <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', border: '1px solid rgba(255,255,255,0.2)' }}>Run</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid #e9ecef', transition: 'background-color 0.2s ease' }}>
                                    <td style={{ padding: '16px', border: '1px solid #e9ecef' }}>Smoke</td>
                                    <td style={{ padding: '16px', border: '1px solid #e9ecef' }}><InlineCode>@smoke</InlineCode></td>
                                    <td style={{ padding: '16px', border: '1px solid #e9ecef' }}>Fast build usability check</td>
                                    <td style={{ padding: '16px', border: '1px solid #e9ecef' }}>Every PR + Deploy</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #e9ecef', transition: 'background-color 0.2s ease' }}>
                                    <td style={{ padding: '16px', border: '1px solid #e9ecef' }}>Functional</td>
                                    <td style={{ padding: '16px', border: '1px solid #e9ecef' }}><InlineCode>@functional</InlineCode></td>
                                    <td style={{ padding: '16px', border: '1px solid #e9ecef' }}>Feature-level correctness</td>
                                    <td style={{ padding: '16px', border: '1px solid #e9ecef' }}>PR subset + Nightly</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #e9ecef', transition: 'background-color 0.2s ease' }}>
                                    <td style={{ padding: '16px', border: '1px solid #e9ecef' }}>508 / A11y</td>
                                    <td style={{ padding: '16px', border: '1px solid #e9ecef' }}><InlineCode>@a11y</InlineCode></td>
                                    <td style={{ padding: '16px', border: '1px solid #e9ecef' }}>Accessibility validation</td>
                                    <td style={{ padding: '16px', border: '1px solid #e9ecef' }}>Nightly + Pre-release</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #e9ecef', transition: 'background-color 0.2s ease' }}>
                                    <td style={{ padding: '16px', border: '1px solid #e9ecef' }}>Regression</td>
                                    <td style={{ padding: '16px', border: '1px solid #e9ecef' }}><InlineCode>@regression</InlineCode></td>
                                    <td style={{ padding: '16px', border: '1px solid #e9ecef' }}>Broad stability assurance</td>
                                    <td style={{ padding: '16px', border: '1px solid #e9ecef' }}>Nightly + Release</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Section 10: Tag Enforcement */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>10) Tag Enforcement (Automated) — Missing Tags Fail the Pipeline</h2>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        <strong>Goal:</strong> Ensure every test is correctly categorized and runnable by suite.
                    </p>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        <strong>Policy:</strong> A PR <strong>must fail</strong> if any test is missing a required test-type tag.
                    </p>

                    <h3 style={{ color: '#00416A', fontSize: '24px', fontWeight: '600', marginBottom: '16px', marginTop: '32px' }}>
                        10.1 Required Test-Type Tags
                    </h3>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        Every test must include <strong>at least one</strong> of:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li><InlineCode>@smoke</InlineCode></li>
                        <li><InlineCode>@functional</InlineCode></li>
                        <li><InlineCode>@regression</InlineCode></li>
                        <li><InlineCode>@a11y</InlineCode></li>
                    </ul>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        Optional tags (allowed, not required):
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li><InlineCode>@api</InlineCode>, <InlineCode>@ui</InlineCode>, <InlineCode>@critical</InlineCode>, <InlineCode>@flaky</InlineCode>, <InlineCode>@wip</InlineCode></li>
                    </ul>

                    <h3 style={{ color: '#00416A', fontSize: '24px', fontWeight: '600', marginBottom: '16px', marginTop: '32px' }}>
                        10.2 PR Checklist (Human Gate)
                    </h3>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        Reviewers must confirm:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>[ ] Each new/updated test includes at least one required test-type tag</li>
                        <li>[ ] Smoke-required tests include <InlineCode>@smoke</InlineCode> even if also <InlineCode>@regression</InlineCode></li>
                        <li>[ ] No tests are added without tags (merge blocker)</li>
                    </ul>

                    <h3 style={{ color: '#00416A', fontSize: '24px', fontWeight: '600', marginBottom: '16px', marginTop: '32px' }}>
                        10.3 Local Pre-Commit / Git Hook (Optional but Recommended)
                    </h3>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        <strong>Option A: Husky pre-commit hook (recommended)</strong>
                    </p>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        1) Install husky:
                    </p>
                    <CodeBlock code={`npm i -D husky
npx husky init`}
                    />
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        2. Add a pre-commit hook:
                    </p>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        Create/update <InlineCode>.husky/pre-commit</InlineCode>:
                    </p>
                    <CodeBlock code={`#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run check:tags`}
                    />
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        3. Add this script to <InlineCode>package.json</InlineCode>:
                    </p>
                    <CodeBlock code={`{
  "scripts": {
    "check:tags": "node ./scripts/check-required-tags.js"
  }
}`}
                    />

                    <h3 style={{ color: '#00416A', fontSize: '24px', fontWeight: '600', marginBottom: '16px', marginTop: '32px' }}>
                        10.4 CI Step (Mandatory) — Block PRs if Tags Missing
                    </h3>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        <strong>10.4.1 Add a tag check script</strong>
                    </p>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        Create: <InlineCode>scripts/check-required-tags.js</InlineCode>
                    </p>
                    <CodeBlock code={`/**
 * Fails if any Playwright test() title is missing a required test-type tag.
 * Required: @smoke | @functional | @regression | @a11y
 *
 * Notes:
 * - This is a lightweight enforcement. It expects tags in the test title string:
 *   test('[@smoke] ...', async () => {})
 * - If you use tag-in-describe only, update this script accordingly or enforce title tagging.
 */

const fs = require("fs");
const path = require("path");

const REQUIRED_TAGS = ["@smoke", "@functional", "@regression", "@a11y"];
const TEST_DIR = path.join(process.cwd(), "tests");

// Basic patterns for Playwright tests
const TEST_CALL_REGEX = /\\btest\\s*\\(\\s*(['"\`])([\\s\\S]*?)\\1\\s*,/g; // captures test title
const TS_FILE_REGEX = /\\.(spec|test)\\.(ts|tsx)$/i;

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(fullPath));
    else if (TS_FILE_REGEX.test(entry.name)) files.push(fullPath);
  }
  return files;
}

function hasRequiredTag(title) {
  return REQUIRED_TAGS.some((tag) => title.includes(tag));
}

function main() {
  if (!fs.existsSync(TEST_DIR)) {
    console.log("No tests directory found. Skipping tag check.");
    process.exit(0);
  }

  const files = walk(TEST_DIR);
  let violations = [];

  for (const file of files) {
    const content = fs.readFileSync(file, "utf8");
    let match;

    while ((match = TEST_CALL_REGEX.exec(content)) !== null) {
      const title = match[2];

      // Ignore skipped tests? (Optional policy)
      // If you want skipped tests to be exempt, uncomment:
      // if (content.slice(0, match.index).match(/test\\.skip\\s*\\($/)) continue;

      if (!hasRequiredTag(title)) {
        violations.push({
          file,
          title: title.trim().slice(0, 140),
        });
      }
    }
  }

  if (violations.length > 0) {
    console.error("\\n❌ Tag Enforcement Failed: Missing required test-type tags.\\n");
    console.error(\`Each test must include at least one of: \${REQUIRED_TAGS.join(", ")}\\n\`);
    for (const v of violations) {
      console.error(\`- \${path.relative(process.cwd(), v.file)} :: "\${v.title}"\`);
    }
    console.error("\\nFix: Add a required tag to each test title, e.g.:");
    console.error(\`test('[@smoke] should ...', async () => { ... })\\n\`);
    process.exit(1);
  }

  console.log("✅ Tag Enforcement Passed: All tests have required test-type tags.");
  process.exit(0);
}

main();`}
                    />
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        <strong>10.4.2 Add CI job step to run the tag check</strong>
                    </p>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        Add to <InlineCode>package.json</InlineCode>:
                    </p>
                    <CodeBlock code={`{
  "scripts": {
    "check:tags": "node ./scripts/check-required-tags.js"
  }
}`}
                    />
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        Then in CI, run:
                    </p>
                    <CodeBlock code={`npm ci
npm run check:tags
npm run lint
npm run test:smoke`}
                    />

                    <h3 style={{ color: '#00416A', fontSize: '24px', fontWeight: '600', marginBottom: '16px', marginTop: '32px' }}>
                        10.5 GitHub Actions Example (CI Enforcement)
                    </h3>
                    <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', marginBottom: '12px' }}>
                        Example <InlineCode>.github/workflows/ci.yml</InlineCode> snippet:
                    </p>
                    <CodeBlock code={`name: CI

on:
  pull_request:
  push:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Use Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"

      - name: Install
        run: npm ci

      - name: Enforce Tags
        run: npm run check:tags

      - name: Lint
        run: npm run lint

      - name: Smoke Suite
        run: npm run test:smoke`}
                    />

                    <h3 style={{ color: '#00416A', fontSize: '24px', fontWeight: '600', marginBottom: '16px', marginTop: '32px' }}>
                        10.6 Enforcement Notes / Exceptions
                    </h3>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li><strong>Default enforcement expects tags in test titles.</strong> If your project uses tags in <InlineCode>describe()</InlineCode> blocks only, either:
                            <ul style={{ paddingLeft: '24px', marginTop: '8px' }}>
                                <li>Standardize tags in titles, or</li>
                                <li>Extend the script to inherit tags from <InlineCode>describe()</InlineCode> scopes.</li>
                            </ul>
                        </li>
                        <li><strong>Exceptions</strong> must be documented and approved (Test Architect + QA Lead). Example: experimental WIP suites may allow <InlineCode>@wip</InlineCode> only <strong>if approved</strong>.</li>
                    </ul>
                </div>

                <Footer />
            </div>
        );
    }
}

export default TestTypeTaxonomy;
