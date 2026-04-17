import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/base.css';

const row = {
  marginBottom: '20px',
  paddingBottom: '20px',
  borderBottom: '1px solid #e2e8f0',
};

const lab = {
  display: 'block',
  fontSize: '13px',
  fontWeight: '600',
  color: '#475569',
  marginBottom: '8px',
};

const keyboardSection = {
  marginBottom: '24px',
  padding: '20px',
  backgroundColor: '#eff6ff',
  border: '1px solid #93c5fd',
  borderRadius: '10px',
};

const ROOT = "page.getByTestId('playwright-sandbox-root')";

function LocatorHints({ lines }) {
  return (
    <div
      style={{
        marginBottom: '10px',
        padding: '10px 12px',
        background: '#f8fafc',
        borderRadius: '6px',
        border: '1px solid #e2e8f0',
      }}
    >
      <div
        style={{
          fontSize: '10px',
          fontWeight: '700',
          color: '#94a3b8',
          marginBottom: '8px',
          letterSpacing: '0.04em',
        }}
      >
        Locator examples
      </div>
      {lines.map((line, i) => (
        <div
          key={i}
          style={{
            fontSize: '10px',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, monospace',
            color: '#475569',
            lineHeight: 1.5,
            marginBottom: '3px',
            wordBreak: 'break-word',
          }}
        >
          {line}
        </div>
      ))}
    </div>
  );
}

class PlaywrightSandbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0,
      dblClickCount: 0,
      enterLog: '',
      keyboardLastKey: '',
      spaceKeyCount: 0,
      hovered: false,
      fileName: '',
      sandboxCheckA: false,
      sandboxCheckB: true,
      fillField: '',
      typeField: '',
    };
  }

  render() {
    const { hovered } = this.state;

    return (
      <main
        id="playwright-sandbox-main"
        data-testid="playwright-sandbox-root"
        style={{
          minHeight: '100vh',
          backgroundColor: '#f1f5f9',
          padding: '24px 16px',
        }}
      >
        <div
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            backgroundColor: '#ffffff',
            padding: '24px',
            borderRadius: '10px',
            boxShadow: '0 2px 12px rgba(15, 23, 42, 0.06)',
          }}
        >
          <div style={row}>
            <span style={lab}>click</span>
            <LocatorHints
              lines={[
                `${ROOT}.getByTestId('sandbox-click-btn')`,
                `page.getByTestId('sandbox-click-btn')`,
                `page.locator('#sandbox-click-btn')`,
                `page.locator('css=button#sandbox-click-btn')`,
                `page.locator('xpath=//button[@id="sandbox-click-btn"]')`,
                `page.getByRole('button', { name: 'click' })`,
                `page.getByLabel('Sandbox primary click')`,
                `page.getByTitle('Sandbox click')`,
                `page.getByText('click', { exact: true })`,
                `page.getByPlaceholder('…') — not a text field`,
                `page.getByAltText('…') — not an image`,
                `page.locator('main').filter({ has: page.getByTestId('sandbox-click-btn') }).getByTestId('sandbox-click-btn')`,
              ]}
            />
            <button
              type="button"
              id="sandbox-click-btn"
              data-testid="sandbox-click-btn"
              aria-label="Sandbox primary click"
              title="Sandbox click"
              onClick={() =>
                this.setState((s) => ({ clickCount: s.clickCount + 1 }))
              }
              style={{
                padding: '8px 16px',
                background: '#00416A',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              click
            </button>
            <span style={{ marginLeft: '12px', fontSize: '13px', color: '#64748b' }}>
              {this.state.clickCount}
            </span>
          </div>

          <div style={row}>
            <span style={lab}>dblclick</span>
            <LocatorHints
              lines={[
                `${ROOT}.getByTestId('sandbox-dblclick-btn')`,
                `page.getByTestId('sandbox-dblclick-btn')`,
                `page.locator('#sandbox-dblclick-btn')`,
                `page.locator('css=button#sandbox-dblclick-btn')`,
                `page.locator('xpath=//button[@id="sandbox-dblclick-btn"]')`,
                `page.getByRole('button', { name: 'dblclick' })`,
                `page.getByLabel('Sandbox double click')`,
                `page.getByTitle('Sandbox double click')`,
                `page.getByText('dblclick', { exact: true })`,
                `page.getByPlaceholder('…') — not a text field`,
                `page.getByAltText('…') — not an image`,
                `page.locator('#playwright-sandbox-main').filter({ hasText: 'dblclick' }).locator('#sandbox-dblclick-btn')`,
              ]}
            />
            <button
              type="button"
              id="sandbox-dblclick-btn"
              data-testid="sandbox-dblclick-btn"
              aria-label="Sandbox double click"
              title="Sandbox double click"
              onDoubleClick={() =>
                this.setState((s) => ({ dblClickCount: s.dblClickCount + 1 }))
              }
              style={{
                padding: '8px 16px',
                background: '#5b21b6',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              dblclick
            </button>
            <span style={{ marginLeft: '12px', fontSize: '13px', color: '#64748b' }}>
              {this.state.dblClickCount}
            </span>
          </div>

          <div style={row}>
            <span style={lab}>fill / clear</span>
            <LocatorHints
              lines={[
                `${ROOT}.getByTestId('sandbox-fill-input')`,
                `page.getByTestId('sandbox-fill-input')`,
                `page.locator('#sandbox-fill-input')`,
                `page.locator('css=#sandbox-fill-input')`,
                `page.locator('xpath=//*[@id="sandbox-fill-input"]')`,
                `page.getByRole('textbox', { name: 'Sandbox fill and clear' })`,
                `page.getByLabel('Sandbox fill and clear')`,
                `page.getByPlaceholder('Sandbox fill placeholder')`,
                `page.getByTitle('Sandbox fill input')`,
                `page.getByText('…') — use role/label for field`,
                `page.getByAltText('…') — not an image`,
                `page.locator('main').getByTestId('sandbox-fill-input')`,
              ]}
            />
            <label htmlFor="sandbox-fill-input" style={{ ...lab, marginBottom: '6px' }}>
              Sandbox fill and clear
            </label>
            <input
              id="sandbox-fill-input"
              data-testid="sandbox-fill-input"
              type="text"
              title="Sandbox fill input"
              placeholder="Sandbox fill placeholder"
              value={this.state.fillField}
              onChange={(e) => this.setState({ fillField: e.target.value })}
              style={{
                width: '100%',
                maxWidth: '360px',
                padding: '8px 10px',
                borderRadius: '6px',
                border: '1px solid #cbd5e1',
              }}
            />
          </div>

          <div style={row}>
            <span style={lab}>type</span>
            <LocatorHints
              lines={[
                `${ROOT}.getByTestId('sandbox-type-input')`,
                `page.getByTestId('sandbox-type-input')`,
                `page.locator('#sandbox-type-input')`,
                `page.locator('css=#sandbox-type-input')`,
                `page.locator('xpath=//*[@id="sandbox-type-input"]')`,
                `page.getByRole('textbox', { name: 'Sandbox type field' })`,
                `page.getByLabel('Sandbox type field')`,
                `page.getByPlaceholder('Sandbox type placeholder')`,
                `page.getByTitle('Sandbox type input')`,
                `page.getByAltText('…') — not an image`,
                `page.locator('div').filter({ has: page.getByTestId('sandbox-type-input') }).getByTestId('sandbox-type-input')`,
              ]}
            />
            <label htmlFor="sandbox-type-input" style={{ ...lab, marginBottom: '6px' }}>
              Sandbox type field
            </label>
            <input
              id="sandbox-type-input"
              data-testid="sandbox-type-input"
              type="text"
              title="Sandbox type input"
              placeholder="Sandbox type placeholder"
              value={this.state.typeField}
              onChange={(e) => this.setState({ typeField: e.target.value })}
              style={{
                width: '100%',
                maxWidth: '360px',
                padding: '8px 10px',
                borderRadius: '6px',
                border: '1px solid #cbd5e1',
              }}
            />
          </div>

          <div style={row}>
            <span style={lab}>check / uncheck</span>
            <LocatorHints
              lines={[
                `page.getByTestId('sandbox-check-a') / page.getByTestId('sandbox-check-b')`,
                `page.locator('#sandbox-check-a')`,
                `page.locator('css=#sandbox-check-a')`,
                `page.locator('xpath=//*[@id="sandbox-check-a"]')`,
                `page.getByRole('checkbox', { name: 'Sandbox checkbox A' })`,
                `page.getByLabel('Sandbox checkbox A')`,
                `page.getByText('Sandbox checkbox A') — label text`,
                `page.getByPlaceholder('…') — not a text field`,
                `page.getByTitle('…') — use title on wrapper if needed`,
                `page.getByAltText('…') — not an image`,
                `page.locator('label').filter({ has: page.locator('#sandbox-check-a') })`,
              ]}
            />
            <label
              htmlFor="sandbox-check-a"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '8px',
                cursor: 'pointer',
              }}
            >
              <input
                id="sandbox-check-a"
                data-testid="sandbox-check-a"
                type="checkbox"
                checked={this.state.sandboxCheckA}
                onChange={() =>
                  this.setState((s) => ({ sandboxCheckA: !s.sandboxCheckA }))
                }
              />
              <span style={{ fontSize: '14px' }}>Sandbox checkbox A</span>
            </label>
            <label
              htmlFor="sandbox-check-b"
              style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
            >
              <input
                id="sandbox-check-b"
                data-testid="sandbox-check-b"
                type="checkbox"
                checked={this.state.sandboxCheckB}
                onChange={() =>
                  this.setState((s) => ({ sandboxCheckB: !s.sandboxCheckB }))
                }
              />
              <span style={{ fontSize: '14px' }}>Sandbox checkbox B</span>
            </label>
          </div>

          <div style={row}>
            <span style={lab}>hover</span>
            <LocatorHints
              lines={[
                `${ROOT}.getByTestId('sandbox-hover-target')`,
                `page.getByTestId('sandbox-hover-target')`,
                `page.locator('#sandbox-hover-target')`,
                `page.locator('css=#sandbox-hover-target')`,
                `page.locator('xpath=//*[@id="sandbox-hover-target"]')`,
                `page.getByText('hover', { exact: true })`,
                `page.getByLabel('Sandbox hover target')`,
                `page.getByTitle('Sandbox hover box')`,
                `page.getByRole('…') — generic div; prefer testId / text`,
                `page.getByPlaceholder('…') — not a field`,
                `page.getByAltText('…') — not an image`,
                `page.locator('div').filter({ hasText: 'hover' }).first()`,
              ]}
            />
            <div
              id="sandbox-hover-target"
              data-testid="sandbox-hover-target"
              aria-label="Sandbox hover target"
              title="Sandbox hover box"
              onMouseEnter={() => this.setState({ hovered: true })}
              onMouseLeave={() => this.setState({ hovered: false })}
              style={{
                display: 'inline-block',
                padding: '12px 20px',
                borderRadius: '6px',
                background: hovered ? '#bfdbfe' : '#e2e8f0',
                border: '1px dashed #64748b',
                transition: 'background 0.15s',
              }}
            >
              hover
            </div>
          </div>

          <div style={row}>
            <span style={lab}>focus</span>
            <LocatorHints
              lines={[
                `${ROOT}.getByTestId('sandbox-focus-btn')`,
                `page.getByTestId('sandbox-focus-btn')`,
                `page.locator('#sandbox-focus-btn')`,
                `page.locator('css=button#sandbox-focus-btn')`,
                `page.locator('xpath=//button[@id="sandbox-focus-btn"]')`,
                `page.getByRole('button', { name: 'focus' })`,
                `page.getByLabel('Sandbox focus button')`,
                `page.getByTitle('Sandbox focus target')`,
                `page.getByText('focus', { exact: true })`,
                `page.getByPlaceholder('…') — not a text field`,
                `page.getByAltText('…') — not an image`,
                `page.locator('button').filter({ hasText: 'focus' })`,
              ]}
            />
            <button
              type="button"
              id="sandbox-focus-btn"
              data-testid="sandbox-focus-btn"
              aria-label="Sandbox focus button"
              title="Sandbox focus target"
              style={{
                padding: '8px 16px',
                borderRadius: '6px',
                border: '1px solid #00416A',
                background: '#fff',
                color: '#00416A',
                cursor: 'pointer',
              }}
            >
              focus
            </button>
          </div>

          <div style={row}>
            <span style={lab}>selectOption</span>
            <LocatorHints
              lines={[
                `${ROOT}.getByTestId('sandbox-select')`,
                `page.getByTestId('sandbox-select')`,
                `page.locator('#sandbox-select')`,
                `page.locator('css=#sandbox-select')`,
                `page.locator('xpath=//*[@id="sandbox-select"]')`,
                `page.getByRole('combobox', { name: 'Sandbox dropdown' })`,
                `page.getByLabel('Sandbox dropdown')`,
                `page.getByTitle('Sandbox select')`,
                `page.getByText('option1') — option text when list open`,
                `page.getByPlaceholder('…') — native select has no placeholder`,
                `page.getByAltText('…') — not an image`,
                `page.locator('select').filter({ has: page.locator('option[value="option1"]') })`,
              ]}
            />
            <label htmlFor="sandbox-select" style={{ ...lab, marginBottom: '6px' }}>
              Sandbox dropdown
            </label>
            <select
              id="sandbox-select"
              data-testid="sandbox-select"
              title="Sandbox select"
              defaultValue="option1"
              style={{
                padding: '8px 12px',
                borderRadius: '6px',
                border: '1px solid #cbd5e1',
                minWidth: '160px',
              }}
            >
              <option value="option1">option1</option>
              <option value="option2">option2</option>
            </select>
          </div>

          <div style={row}>
            <span style={lab}>setInputFiles</span>
            <LocatorHints
              lines={[
                `${ROOT}.getByTestId('sandbox-file-input')`,
                `page.getByTestId('sandbox-file-input')`,
                `page.locator('#sandbox-file-input')`,
                `page.locator('css=input[type=file]#sandbox-file-input')`,
                `page.locator('xpath=//*[@id="sandbox-file-input"]')`,
                `page.getByLabel('Sandbox file upload')`,
                `page.getByTitle('Sandbox file input')`,
                `page.getByRole('button', { name: /Choose|Browse/i }) — browser-dependent`,
                `page.getByText('…') — not reliable for file input`,
                `page.getByPlaceholder('…') — not used on file input`,
                `page.getByAltText('…') — not an image`,
                `page.locator('input[type="file"]')`,
              ]}
            />
            <label htmlFor="sandbox-file-input" style={{ ...lab, marginBottom: '6px' }}>
              Sandbox file upload
            </label>
            <input
              id="sandbox-file-input"
              data-testid="sandbox-file-input"
              type="file"
              title="Sandbox file input"
              accept=".pdf"
              onChange={(e) => {
                const f = e.target.files && e.target.files[0];
                this.setState({ fileName: f ? f.name : '' });
              }}
            />
            {this.state.fileName ? (
              <span style={{ marginLeft: '8px', fontSize: '13px', color: '#64748b' }}>
                {this.state.fileName}
              </span>
            ) : null}
          </div>

          <section
            id="sandbox-keyboard-section"
            data-testid="sandbox-keyboard-section"
            style={{ ...keyboardSection, marginTop: '20px', marginBottom: '20px' }}
            aria-labelledby="sandbox-keyboard-heading"
          >
            <h2
              id="sandbox-keyboard-heading"
              style={{
                margin: '0 0 16px',
                fontSize: '18px',
                fontWeight: '700',
                color: '#1e3a8a',
              }}
            >
              Keyboard
            </h2>

            <div style={{ ...row, borderBottom: '1px solid #bfdbfe', paddingBottom: '16px', marginBottom: '16px' }}>
              <span style={lab}>press Enter</span>
              <LocatorHints
                lines={[
                  `page.getByTestId('sandbox-enter-input')`,
                  `page.locator('#sandbox-enter-input')`,
                  `page.getByRole('textbox', { name: 'Sandbox Enter key field' })`,
                  `page.getByLabel('Sandbox Enter key field')`,
                  `page.getByPlaceholder('Sandbox enter placeholder')`,
                  `page.getByTitle('Sandbox enter input')`,
                  `page.locator('css=#sandbox-enter-input')`,
                  `page.locator('xpath=//*[@id="sandbox-enter-input"]')`,
                  `page.getByText('ok') — after Enter on #sandbox-enter-log`,
                  `page.getByAltText('…') — not an image`,
                  `${ROOT}.getByTestId('sandbox-enter-input')`,
                ]}
              />
              <label htmlFor="sandbox-enter-input" style={{ ...lab, marginBottom: '6px' }}>
                Sandbox Enter key field
              </label>
              <input
                id="sandbox-enter-input"
                data-testid="sandbox-enter-input"
                type="text"
                title="Sandbox enter input"
                placeholder="Sandbox enter placeholder"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    this.setState({ enterLog: 'ok' });
                  }
                }}
                style={{
                  width: '100%',
                  maxWidth: '360px',
                  padding: '8px 10px',
                  borderRadius: '6px',
                  border: '1px solid #cbd5e1',
                  backgroundColor: '#fff',
                }}
              />
              {this.state.enterLog ? (
                <span
                  id="sandbox-enter-log"
                  data-testid="sandbox-enter-log"
                  style={{ marginLeft: '10px', fontSize: '13px', color: '#059669' }}
                >
                  {this.state.enterLog}
                </span>
              ) : null}
            </div>

            <div style={{ ...row, borderBottom: '1px solid #bfdbfe', paddingBottom: '16px', marginBottom: '16px' }}>
              <span style={lab}>locator.press (Escape, ArrowDown, …)</span>
              <LocatorHints
                lines={[
                  `page.getByTestId('sandbox-keyboard-press-input')`,
                  `page.locator('#sandbox-keyboard-press-input')`,
                  `page.getByLabel('Sandbox key press field')`,
                  `page.getByPlaceholder('Sandbox key press placeholder')`,
                  `page.getByTitle('Sandbox key press input')`,
                  `page.getByRole('textbox', { name: 'Sandbox key press field' })`,
                  `page.getByTestId('sandbox-keyboard-last-key') — assertion target`,
                  `page.locator('css=#sandbox-keyboard-press-input')`,
                  `page.locator('xpath=//*[@id="sandbox-keyboard-press-input"]')`,
                  `page.getByAltText('…') — not an image`,
                  `page.locator('div').filter({ has: page.getByTestId('sandbox-keyboard-press-input') })`,
                ]}
              />
              <label htmlFor="sandbox-keyboard-press-input" style={{ ...lab, marginBottom: '6px' }}>
                Sandbox key press field
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
                <input
                  id="sandbox-keyboard-press-input"
                  data-testid="sandbox-keyboard-press-input"
                  type="text"
                  title="Sandbox key press input"
                  placeholder="Sandbox key press placeholder"
                  autoComplete="off"
                  onKeyDown={(e) => {
                    this.setState({ keyboardLastKey: e.key });
                  }}
                  style={{
                    width: '100%',
                    maxWidth: '280px',
                    padding: '8px 10px',
                    borderRadius: '6px',
                    border: '1px solid #cbd5e1',
                    backgroundColor: '#fff',
                  }}
                />
                <span style={{ fontSize: '12px', color: '#64748b' }}>last key:</span>
                <span
                  id="sandbox-keyboard-last-key"
                  data-testid="sandbox-keyboard-last-key"
                  style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#1d4ed8',
                    minWidth: '2em',
                  }}
                >
                  {this.state.keyboardLastKey || '—'}
                </span>
              </div>
            </div>

            <div style={{ ...row, borderBottom: '1px solid #bfdbfe', paddingBottom: '16px', marginBottom: '16px' }}>
              <span style={lab}>page.keyboard.type</span>
              <LocatorHints
                lines={[
                  `page.getByTestId('sandbox-keyboard-type')`,
                  `page.locator('#sandbox-keyboard-type')`,
                  `page.getByLabel('Sandbox keyboard type field')`,
                  `page.getByPlaceholder(/keyboard.type/)`,
                  `page.getByTitle('Sandbox keyboard type')`,
                  `page.getByRole('textbox', { name: 'Sandbox keyboard type field' })`,
                  `page.locator('css=#sandbox-keyboard-type')`,
                  `page.locator('xpath=//*[@id="sandbox-keyboard-type"]')`,
                  `page.getByText('…') — use placeholder/label`,
                  `page.getByAltText('…') — not an image`,
                  `${ROOT}.getByTestId('sandbox-keyboard-type')`,
                ]}
              />
              <label htmlFor="sandbox-keyboard-type" style={{ ...lab, marginBottom: '6px' }}>
                Sandbox keyboard type field
              </label>
              <input
                id="sandbox-keyboard-type"
                data-testid="sandbox-keyboard-type"
                type="text"
                defaultValue=""
                autoComplete="off"
                title="Sandbox keyboard type"
                placeholder="Focus then page.keyboard.type('…')"
                style={{
                  width: '100%',
                  maxWidth: '360px',
                  padding: '8px 10px',
                  borderRadius: '6px',
                  border: '1px solid #cbd5e1',
                  backgroundColor: '#fff',
                }}
              />
            </div>

            <div style={{ ...row, borderBottom: '1px solid #bfdbfe', paddingBottom: '16px', marginBottom: '16px' }}>
              <span style={lab}>page.keyboard.insertText</span>
              <LocatorHints
                lines={[
                  `page.getByTestId('sandbox-keyboard-insert')`,
                  `page.locator('#sandbox-keyboard-insert')`,
                  `page.getByLabel('Sandbox keyboard insert field')`,
                  `page.getByPlaceholder(/insertText/)`,
                  `page.getByTitle('Sandbox keyboard insert')`,
                  `page.getByRole('textbox', { name: 'Sandbox keyboard insert field' })`,
                  `page.locator('css=#sandbox-keyboard-insert')`,
                  `page.locator('xpath=//*[@id="sandbox-keyboard-insert"]')`,
                  `page.getByAltText('…') — not an image`,
                  `${ROOT}.getByTestId('sandbox-keyboard-insert')`,
                ]}
              />
              <label htmlFor="sandbox-keyboard-insert" style={{ ...lab, marginBottom: '6px' }}>
                Sandbox keyboard insert field
              </label>
              <input
                id="sandbox-keyboard-insert"
                data-testid="sandbox-keyboard-insert"
                type="text"
                defaultValue=""
                autoComplete="off"
                title="Sandbox keyboard insert"
                placeholder="Focus then page.keyboard.insertText('…')"
                style={{
                  width: '100%',
                  maxWidth: '360px',
                  padding: '8px 10px',
                  borderRadius: '6px',
                  border: '1px solid #cbd5e1',
                  backgroundColor: '#fff',
                }}
              />
            </div>

            <div style={{ marginBottom: 0, paddingBottom: 0 }}>
              <span style={lab}>press Space (focusable div)</span>
              <LocatorHints
                lines={[
                  `page.getByTestId('sandbox-keyboard-space-target')`,
                  `page.locator('#sandbox-keyboard-space-target')`,
                  `page.getByRole('button', { name: /Space count/ })`,
                  `page.getByLabel('Sandbox space counter')`,
                  `page.getByTitle('Sandbox space target')`,
                  `page.locator('css=#sandbox-keyboard-space-target')`,
                  `page.locator('xpath=//*[@id="sandbox-keyboard-space-target"]')`,
                  `page.getByText(/Space count/)`,
                  `page.getByPlaceholder('…') — not a field`,
                  `page.getByAltText('Sandbox space section mark')`,
                  `${ROOT}.locator('#sandbox-keyboard-space-target')`,
                ]}
              />
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Crect fill='%230d9488' width='16' height='16' rx='2'/%3E%3C/svg%3E"
                alt="Sandbox space section mark"
                width="16"
                height="16"
                style={{ flexShrink: 0 }}
              />
              <div
                id="sandbox-keyboard-space-target"
                data-testid="sandbox-keyboard-space-target"
                role="button"
                tabIndex={0}
                aria-label="Sandbox space counter"
                title="Sandbox space target"
                onKeyDown={(e) => {
                  if (e.key === ' ' || e.key === 'Spacebar') {
                    e.preventDefault();
                    this.setState((s) => ({ spaceKeyCount: s.spaceKeyCount + 1 }));
                  }
                }}
                style={{
                  display: 'inline-block',
                  padding: '10px 16px',
                  borderRadius: '6px',
                  border: '2px solid #0d9488',
                  background: '#fff',
                  color: '#0f766e',
                  fontWeight: '600',
                  cursor: 'default',
                  outline: 'none',
                }}
              >
                Space count: {this.state.spaceKeyCount}
              </div>
              </div>
            </div>
          </section>

          <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #e2e8f0' }}>
            <span style={lab}>Back link</span>
            <LocatorHints
              lines={[
                `page.getByRole('link', { name: /Back/i })`,
                `page.getByText('← Back')`,
                `page.locator('a[href="/practice/examples"]')`,
                `page.locator('css=a[href*="practice/examples"]')`,
              ]}
            />
            <Link
              to="/practice/examples"
              style={{ color: '#00416A', fontWeight: '600', fontSize: '14px' }}
            >
              ← Back
            </Link>
            <div style={{ marginTop: '12px' }}>
              <Link
                to="/practice/playwright-syntax"
                style={{ color: '#2563eb', fontWeight: '600', fontSize: '14px' }}
              >
                Full Playwright syntax reference (cheat sheet + playground) →
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default PlaywrightSandbox;
