import React, { useState } from 'react';
import { leftAlignStyles } from '../../../utils/globalStyles';

const TTosca = () => {
  const [isCICDExpanded, setIsCICDExpanded] = useState(false);

  return (
    <div style={leftAlignStyles.pageContainer}>
      <div
        style={{
          ...leftAlignStyles.heroSection,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '40px',
          flexWrap: 'wrap'
        }}
      >
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h1 style={leftAlignStyles.heroTitle}>Tricentis Tosca Automation (For Everyone)</h1>
          <p style={leftAlignStyles.heroSubtitle}>
            A plain-language, step-by-step guide to start building test automation without needing to be a developer.
          </p>
        </div>
      </div>

      <div style={leftAlignStyles.mainContent}>
        <h2 style={leftAlignStyles.sectionHeading}>What is Tosca, in simple words?</h2>
        <p style={leftAlignStyles.paragraph}>
          Tosca is a test automation tool. Think of it like a “smart LEGO builder” for testing your application.
          You capture real parts of the app (buttons, fields, pages), then you connect those parts into a test you can
          run again and again.
        </p>

        <h3 style={leftAlignStyles.sectionHeadingWithMargin}>Before you start (important)</h3>
        <ul style={leftAlignStyles.list}>
          <li>
            Confirm you have access: usually an account in your company + permission to use Tosca tools.
          </li>
          <li>
            Confirm the app-under-test works manually: if you cannot log in or reach the page yourself, automation will be hard.
          </li>
          <li>
            Use a clear example flow: start with one small user journey (example: “Login”).
          </li>
          <li>
            Expect small differences by version: button names and menus can vary slightly by Tosca version and company setup.
          </li>
        </ul>

        <div
          style={{
            ...leftAlignStyles.highlightedBox,
            marginTop: '20px'
          }}
        >
          <strong style={{ color: '#00416A' }}>Goal of this guide:</strong> By the end, you will have an automated test that:
          (1) opens your app, (2) performs a simple flow, and (3) verifies something important.
        </div>

        <h2 style={leftAlignStyles.sectionHeadingWithMargin}>Tosca step-by-step (granular)</h2>
        <ol style={leftAlignStyles.list}>
          <li style={{ marginBottom: '16px' }}>
            <strong>Pick one tiny workflow to automate</strong>
            <div style={{ marginTop: '8px' }}>
              Choose something you already know how to do manually, for example:
              <ul style={{ marginTop: '8px' }}>
                <li>Open the login page</li>
                <li>Enter username</li>
                <li>Enter password</li>
                <li>Click “Sign in”</li>
                <li>Verify a message or dashboard is displayed</li>
              </ul>
            </div>
          </li>

          <li style={{ marginBottom: '16px' }}>
            <strong>Open Tosca Commander (the “build” tool)</strong>
            <div style={{ marginTop: '8px' }}>
              Look for the Tosca icon in your applications list and open it.
              If you see multiple Tosca tools, pick the one used to design tests (often called “Commander” in Tosca setups).
            </div>
          </li>

          <li style={{ marginBottom: '16px' }}>
            <strong>Create a new project/workspace for your automation</strong>
            <div style={{ marginTop: '8px' }}>
              Use a meaningful name, for example: <code style={leftAlignStyles.codeBlock}>Tosca_Tutorial_Login</code>.
              If your company uses folders for teams, save it in the correct folder.
            </div>
          </li>

          <li style={{ marginBottom: '16px' }}>
            <strong>Understand Tosca building blocks (use these words as your map)</strong>
            <div style={{ marginTop: '8px' }}>
              <ul>
                <li>
                  <strong>Test Object</strong>: a named “thing” in the UI (like a login button) with instructions on how to find it.
                </li>
                <li>
                  <strong>Test Module</strong>: reusable steps you can call (example: “Perform Login”).
                </li>
                <li>
                  <strong>Test Case</strong>: the final script that runs your steps from start to finish (example: “Login Test Case”).
                </li>
              </ul>
              You do not need to memorize everything today. Just remember: objects first, then steps, then run.
            </div>
          </li>

          <li style={{ marginBottom: '16px' }}>
            <strong>Capture/identify the UI elements (Test Objects)</strong>
            <div style={{ marginTop: '8px' }}>
              The basic idea:
              <ul>
                <li>Open the application (or keep it open).</li>
                <li>Go to the section in Tosca where you create test objects.</li>
                <li>Select the login fields and buttons you need.</li>
                <li>Give them clear names.</li>
              </ul>
              Example object names:
              <ul>
                <li><code style={leftAlignStyles.codeBlock}>obj_username</code></li>
                <li><code style={leftAlignStyles.codeBlock}>obj_password</code></li>
                <li><code style={leftAlignStyles.codeBlock}>obj_login_button</code></li>
                <li><code style={leftAlignStyles.codeBlock}>obj_welcome_text</code></li>
              </ul>
              If you are unsure what to name something, use the same words you would use in a ticket (“welcome text”, “login button”).
            </div>
          </li>

          <li style={{ marginBottom: '16px' }}>
            <strong>Create a simple “Perform Login” step list (Test Module)</strong>
            <div style={{ marginTop: '8px' }}>
              In Tosca, build a reusable module that represents the actions:
              <ul>
                <li>Set value in username field</li>
                <li>Set value in password field</li>
                <li>Click login button</li>
              </ul>
              Keep the module focused on one journey. Do not try to automate everything at once.
            </div>
          </li>

          <li style={{ marginBottom: '16px' }}>
            <strong>Create a Test Case that uses your module</strong>
            <div style={{ marginTop: '8px' }}>
              Now connect the dots:
              <ul>
                <li>Add your “Perform Login” module as a step.</li>
                <li>Add one verification step (example: “welcome text is shown”).</li>
              </ul>
              Verification examples in plain words:
              <ul>
                <li>The dashboard page loads</li>
                <li>A welcome message appears</li>
                <li>An error message shows when login is wrong</li>
              </ul>
            </div>
          </li>

          <li style={{ marginBottom: '16px' }}>
            <strong>Run your test once (the “first victory”) </strong>
            <div style={{ marginTop: '8px' }}>
              Click the run/execute option for your test case.
              Then check:
              <ul>
                <li>Did the steps reach the expected screen?</li>
                <li>Did the verification pass?</li>
                <li>Do you see any “object not found” style errors?</li>
              </ul>
            </div>
          </li>

          <li style={{ marginBottom: '16px' }}>
            <strong>Fix problems the easy way (debug like a checklist)</strong>
            <div style={{ marginTop: '8px' }}>
              If the test fails, do not panic. Most failures are caused by one of these:
              <ul>
                <li>The UI changed (object still exists, but moved/renamed).</li>
                <li>The timing is different (page loads slower than expected).</li>
                <li>The object identification is too strict or not strict enough.</li>
              </ul>
              What to do:
              <ul>
                <li>Open the test execution log.</li>
                <li>Find the exact step where it failed.</li>
                <li>Confirm that the expected screen is visible at that moment.</li>
                <li>If the UI element is missing, recapture or adjust the test object.</li>
              </ul>
            </div>
          </li>

          <li style={{ marginBottom: '16px' }}>
            <strong>Make it data-driven (so you can test more users)</strong>
            <div style={{ marginTop: '8px' }}>
              Right now your test may use fixed username/password values.
              Add parameters so the same test can run with different inputs.
              For example:
              <ul>
                <li>username = valid user / invalid user</li>
                <li>password = correct / incorrect</li>
              </ul>
              This lets you expand coverage without rebuilding everything.
            </div>
          </li>

          <li style={{ marginBottom: '16px' }}>
            <strong>Organize your tests (so others can find them)</strong>
            <div style={{ marginTop: '8px' }}>
              Give your test case a clear name:
              <ul>
                <li><code style={leftAlignStyles.codeBlock}>TC_Login_ValidUser_ShowsDashboard</code></li>
                <li><code style={leftAlignStyles.codeBlock}>TC_Login_InvalidUser_ShowsError</code></li>
              </ul>
              Add it to the appropriate test suite/folder used by your team.
            </div>
          </li>

          <li style={{ marginBottom: '16px' }}>
            <strong>Create a simple “automation plan” for your next steps</strong>
            <div style={{ marginTop: '8px' }}>
              After the first test works, improve in this order:
              <ul>
                <li>Add one more verification (besides the welcome text).</li>
                <li>Automate the next workflow (example: search + open details).</li>
                <li>Add negative test (wrong password) to ensure errors are correct.</li>
                <li>Reduce flaky behavior (stability fixes) after you run multiple times.</li>
              </ul>
            </div>
          </li>
        </ol>

        <h2 style={leftAlignStyles.sectionHeadingWithMargin}>A plain-English Tosca glossary</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
          <div style={{ padding: '15px', backgroundColor: '#f0f8ff', borderRadius: '8px', borderLeft: '4px solid #00416A', marginBottom: '15px' }}>
            <strong>Test Object</strong>: a UI element with instructions on how Tosca finds it.
          </div>
          <div style={{ padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px', borderLeft: '4px solid #00416A', marginBottom: '15px' }}>
            <strong>Test Module</strong>: reusable steps (a “process”) you can call from multiple tests.
          </div>
          <div style={{ padding: '15px', backgroundColor: '#fff9e6', borderRadius: '8px', borderLeft: '4px solid #ffc107', marginBottom: '15px' }}>
            <strong>Test Case</strong>: the full scenario you run (start to finish).
          </div>
          <div style={{ padding: '15px', backgroundColor: '#fef3c7', borderRadius: '8px', borderLeft: '4px solid #dc3545', marginBottom: '15px' }}>
            <strong>Stable test</strong>: a test that passes consistently, even when the app is slightly slow.
          </div>
        </div>

        <h2 style={leftAlignStyles.sectionHeadingWithMargin}>Common mistakes (and the fix)</h2>
        <ul style={leftAlignStyles.list}>
          <li>
            <strong>Mistake:</strong> Automating too big a flow at once.
            <br />
            <strong>Fix:</strong> Start with login only, then expand.
          </li>
          <li>
            <strong>Mistake:</strong> Unclear object names.
            <br />
            <strong>Fix:</strong> Use names that match what a human would say (“login button”, “welcome text”).
          </li>
          <li>
            <strong>Mistake:</strong> Ignoring failure logs.
            <br />
            <strong>Fix:</strong> Find the exact failing step and fix that object/step first.
          </li>
          <li>
            <strong>Mistake:</strong> Hard-coding test data forever.
            <br />
            <strong>Fix:</strong> Parameterize inputs so you can test multiple cases quickly.
          </li>
        </ul>

        {/* CI/CD Section - Collapsible */}
        <div
          style={{
            backgroundColor: '#ffffff',
            padding: '25px',
            borderRadius: '8px',
            marginBottom: '25px',
            borderLeft: '4px solid #00416A',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}
        >
          <div
            onClick={() => setIsCICDExpanded(!isCICDExpanded)}
            style={{
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingBottom: isCICDExpanded ? '15px' : '0',
              borderBottom: isCICDExpanded ? '2px solid #00416A' : 'none',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              if (!isCICDExpanded) e.currentTarget.style.backgroundColor = '#f0f7fa';
            }}
            onMouseLeave={(e) => {
              if (!isCICDExpanded) e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <h2
              style={{
                ...leftAlignStyles.sectionHeading,
                marginBottom: 0,
                color: '#00416A'
              }}
            >
              CI/CD with Tosca (GitHub + GitHub Actions)
            </h2>
            <span
              style={{
                fontSize: '32px',
                color: '#00416A',
                fontWeight: 'bold',
                marginLeft: '20px',
                flexShrink: 0,
                transition: 'transform 0.3s ease'
              }}
            >
              {isCICDExpanded ? '−' : '+'}
            </span>
          </div>

          {isCICDExpanded && (
            <div style={{ marginTop: '25px' }}>
              <p style={leftAlignStyles.paragraph}>
                CI/CD means your tests run automatically when you push code (or open a pull request),
                so the team gets fast feedback. For Tosca, the most important idea is: your GitHub workflow
                will trigger a Tosca execution somewhere that has Tosca installed and can reach the application.
              </p>

              <h3 style={leftAlignStyles.sectionHeadingWithMargin}>Big picture (easy mental model)</h3>
              <ul style={leftAlignStyles.list}>
                <li>
                  You edit your code in GitHub and open a pull request.
                </li>
                <li>
                  GitHub Actions starts a workflow.
                </li>
                <li>
                  The workflow runs Tosca (usually on a machine/runner that already has Tosca installed).
                </li>
                <li>
                  Tosca produces results (pass/fail + logs).
                </li>
                <li>
                  GitHub Actions shows results in the workflow page and fails the pipeline if tests fail.
                </li>
              </ul>

              <h3 style={leftAlignStyles.sectionHeadingWithMargin}>Prerequisites (what must be ready)</h3>
              <ul style={leftAlignStyles.list}>
                <li>
                  A Tosca test suite you can run automatically (not just manually).
                </li>
                <li>
                  Tosca execution environment available to the pipeline (commonly a self-hosted runner on Windows).
                </li>
                <li>
                  Access to the app-under-test (URL/network/credentials), either inside your company network or via VPN.
                </li>
                <li>
                  A safe way to store secrets in GitHub (so you do not hard-code usernames/passwords in the workflow).
                </li>
              </ul>

              <h3 style={leftAlignStyles.sectionHeadingWithMargin}>Step-by-step implementation details</h3>
              <ol style={leftAlignStyles.list}>
                <li style={{ marginBottom: '16px' }}>
                  <strong>Decide where Tosca will run</strong>
                  <div style={{ marginTop: '8px' }}>
                    Most teams use a <strong>self-hosted GitHub Actions runner</strong> (a Windows machine) that already has:
                    Tosca installed, the required test environment access, and whatever execution connector your Tosca setup expects.
                    <div style={{ marginTop: '8px' }}>
                      If you only have GitHub-hosted runners (cloud machines), Tosca usually cannot be installed there,
                      so you will still need a self-hosted runner.
                    </div>
                  </div>
                </li>

                <li style={{ marginBottom: '16px' }}>
                  <strong>Prepare your Tosca “run package”</strong>
                  <div style={{ marginTop: '8px' }}>
                    In Tosca, make sure your tests can be executed without a person clicking buttons.
                    Keep your test inputs ready (example: environment, test data, and credentials via parameters).
                    <div style={{ marginTop: '8px' }}>
                      For the pipeline, you typically commit or generate a test artifact/package that Tosca can run.
                      (The exact file names depend on your Tosca version and configuration.)
                    </div>
                  </div>
                </li>

                <li style={{ marginBottom: '16px' }}>
                  <strong>Add secrets to GitHub</strong>
                  <div style={{ marginTop: '8px' }}>
                    In your repo go to: <strong>Settings</strong> → <strong>Secrets and variables</strong> → <strong>Actions</strong>.
                    Create entries like:
                    <ul style={{ marginTop: '8px' }}>
                      <li><strong>TOSCA_USERNAME</strong> (only if your setup requires it)</li>
                      <li><strong>TOSCA_PASSWORD</strong> (store it as a secret)</li>
                      <li><strong>APP_URL</strong> (example: https://your-test-env)</li>
                      <li><strong>APP_USERNAME</strong> / <strong>APP_PASSWORD</strong> (if the app needs login)</li>
                    </ul>
                  </div>
                </li>

                <li style={{ marginBottom: '16px' }}>
                  <strong>Create a workflow file</strong>
                  <div style={{ marginTop: '8px' }}>
                    Add: <code style={leftAlignStyles.codeBlock}>.github/workflows/tosca-ci.yml</code>
                    (GitHub will pick it up automatically).
                  </div>
                </li>

                <li style={{ marginBottom: '16px' }}>
                  <strong>Run Tosca from the workflow</strong>
                  <div style={{ marginTop: '8px' }}>
                    The workflow uses your self-hosted runner, checks out the repo, and then calls a Tosca command/script.
                    Because Tosca commands differ by setup, treat this snippet as the “shape” of the workflow:
                  </div>
                  <div style={leftAlignStyles.codeBlock}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`# .github/workflows/tosca-ci.yml
name: Tosca CI

on:
  pull_request:
  push:
    branches: [ "main" ]

jobs:
  run-tosca:
    runs-on: [self-hosted, windows]
    steps:
      - name: Checkout repo
        uses: actions/checkout@v4

      - name: Run Tosca tests
        env:
          APP_URL: \${{ secrets.APP_URL }}
          APP_USERNAME: \${{ secrets.APP_USERNAME }}
          APP_PASSWORD: \${{ secrets.APP_PASSWORD }}
        run: |
          echo "Starting Tosca test execution..."
          # TODO: Replace this with your Tosca execution command/script
          # Example placeholder:
          # call RunToscaTests.bat --env "test" --appUrl "%APP_URL%"

      - name: Upload test logs
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: tosca-results
          path: ./tosca-results
`}</pre>
                  </div>
                  <div style={{ marginTop: '8px' }}>
                    In your real workflow, you must replace the placeholder “Run Tosca tests” command
                    and the results folder path with whatever your Tosca setup generates.
                  </div>
                </li>

                <li style={{ marginBottom: '16px' }}>
                  <strong>Make failures visible (so nobody ignores them)</strong>
                  <div style={{ marginTop: '8px' }}>
                    Configure the pipeline so the job fails when Tosca reports test failures.
                    This is usually automatic if your execution command returns a non-zero exit code.
                    Also upload logs as artifacts so the team can debug quickly.
                  </div>
                </li>
              </ol>

              <h3 style={leftAlignStyles.sectionHeadingWithMargin}>What you’ll see after it works</h3>
              <ul style={leftAlignStyles.list}>
                <li>
                  A new “Tosca CI” workflow run for each pull request.
                </li>
                <li>
                  Pass/fail status in the workflow page.
                </li>
                <li>
                  A downloadable artifact called “tosa-results” (or your chosen name) with logs/screenshots.
                </li>
                <li>
                  Faster feedback: developers know quickly if a change broke automated flows.
                </li>
              </ul>
            </div>
          )}
        </div>

        <h2 style={leftAlignStyles.sectionHeadingWithMargin}>Quick start checklist (print-friendly)</h2>
        <ul style={leftAlignStyles.list}>
          <li>Pick 1 small workflow (example: Login)</li>
          <li>Capture the required UI elements as test objects</li>
          <li>Create a module with actions</li>
          <li>Create a test case that calls the module</li>
          <li>Add at least 1 verification step</li>
          <li>Run once and confirm it passes</li>
          <li>Fix failures step-by-step using the execution log</li>
          <li>Parameterize data to test more scenarios</li>
        </ul>
      </div>
    </div>
  );
};

export default TTosca;

