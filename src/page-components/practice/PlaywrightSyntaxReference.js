import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PLAYWRIGHT_SYNTAX_SECTIONS } from './playwrightSyntaxContent';
import '../../styles/base.css';

const preBox = {
  margin: 0,
  padding: '14px 16px',
  backgroundColor: '#0f172a',
  color: '#e2e8f0',
  borderRadius: '8px',
  fontSize: '12px',
  lineHeight: 1.5,
  overflowX: 'auto',
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, monospace',
};

const sectionCard = {
  marginBottom: '28px',
  padding: '20px',
  backgroundColor: '#ffffff',
  borderRadius: '10px',
  border: '1px solid #e2e8f0',
};

export default function PlaywrightSyntaxReference() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [delayedVisible, setDelayedVisible] = useState(false);
  const [hiddenBox, setHiddenBox] = useState(false);
  const [disabledBtn, setDisabledBtn] = useState(false);
  const [checkedDemo, setCheckedDemo] = useState(true);
  const [lsOut, setLsOut] = useState('');

  useEffect(() => {
    const t = document.title;
    const u = typeof window !== 'undefined' ? window.location.href : '';
    const elTitle = document.getElementById('pg-title');
    const elUrl = document.getElementById('pg-url');
    if (elTitle) elTitle.textContent = t;
    if (elUrl) elUrl.textContent = u;
  }, []);

  return (
    <main
      id="playwright-syntax-reference-main"
      data-testid="playwright-syntax-reference-root"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #f1f5f9 0%, #fff 40%)',
        padding: '24px 16px 48px',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <header style={{ marginBottom: '28px' }}>
          <h1
            style={{
              fontSize: '26px',
              color: '#00416A',
              margin: '0 0 8px',
              fontWeight: '800',
            }}
          >
            Playwright syntax reference
          </h1>
          <p style={{ margin: 0, color: '#64748b', lineHeight: 1.55, fontSize: '15px' }}>
            Common Playwright patterns for automation engineers. Each block mirrors the official-style API;
            use the playground at the bottom to try locators, navigation, dialogs, frames, downloads, and more
            against real DOM.
          </p>
          <p style={{ margin: '12px 0 0', fontSize: '14px' }}>
            <Link
              to="/practice/playwright-sandbox"
              style={{ color: '#2563eb', fontWeight: '600' }}
            >
              Open action sandbox (click, fill, keyboard, …)
            </Link>
            {' · '}
            <Link to="/practice/examples" style={{ color: '#00416A', fontWeight: '600' }}>
              ← UI Practice Examples
            </Link>
          </p>
        </header>

        {PLAYWRIGHT_SYNTAX_SECTIONS.map((sec) => (
          <article key={sec.id} id={`syntax-section-${sec.id}`} style={sectionCard}>
            <h2
              style={{
                fontSize: '16px',
                margin: '0 0 12px',
                color: '#1e293b',
                fontWeight: '700',
              }}
            >
              {sec.title}
            </h2>
            <pre style={preBox}>
              <code>{sec.code}</code>
            </pre>
          </article>
        ))}

        <section
          id="syntax-playground"
          data-testid="syntax-playground"
          style={{
            marginTop: '8px',
            padding: '24px',
            backgroundColor: '#eff6ff',
            border: '2px solid #3b82f6',
            borderRadius: '12px',
          }}
        >
          <h2 style={{ margin: '0 0 8px', fontSize: '20px', color: '#1e3a8a' }}>
            Playground (maps to sections above)
          </h2>
          <p style={{ margin: '0 0 20px', color: '#475569', fontSize: '14px' }}>
            Use these nodes from <code>@playwright/test</code> specs. Ids and labels are stable for{' '}
            <code>page.*</code> and <code>locator.*</code> exercises.
          </p>

          <div style={{ ...sectionCard, backgroundColor: '#fff' }}>
            <h3 style={{ marginTop: 0, color: '#334155' }}>§5–6 Navigation & page info</h3>
            <p style={{ fontSize: '13px', color: '#64748b' }}>
              <strong>Title:</strong> <span id="pg-title">—</span>
            </p>
            <p style={{ fontSize: '13px', color: '#64748b', wordBreak: 'break-all' }}>
              <strong>URL:</strong> <span id="pg-url">—</span>
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '12px' }}>
              <button type="button" id="pg-reload" onClick={() => window.location.reload()}>
                Reload (page.reload)
              </button>
              <button type="button" id="pg-back" onClick={() => window.history.back()}>
                History back
              </button>
              <Link
                id="pg-goto-sandbox"
                to="/practice/playwright-sandbox"
                style={{
                  display: 'inline-block',
                  padding: '8px 14px',
                  background: '#00416A',
                  color: '#fff',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: '600',
                }}
              >
                Goto sandbox (same origin)
              </Link>
            </div>
          </div>

          <div style={{ ...sectionCard, backgroundColor: '#fff' }}>
            <h3 style={{ marginTop: 0, color: '#334155' }}>§7 Locators</h3>
            <p style={{ margin: '0 0 8px', fontSize: '13px' }}>
              <span id="syntax-login-text">Login</span>
            </p>
            <button type="button" id="syntax-login-btn">
              Login
            </button>
            <div style={{ marginTop: '12px' }}>
              <label htmlFor="syntax-email" style={{ display: 'block', fontWeight: '600', marginBottom: '4px' }}>
                Email
              </label>
              <input
                id="syntax-email"
                type="email"
                placeholder="Enter email"
                autoComplete="off"
                style={{ padding: '8px', width: '100%', maxWidth: '280px' }}
              />
            </div>
            <div style={{ marginTop: '12px' }}>
              <button type="button" data-testid="submit-btn" id="syntax-submit-btn">
                Submit
              </button>
            </div>
            <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Crect fill='%2300416A' width='40' height='40' rx='6'/%3E%3C/svg%3E"
                alt="Logo"
                width="40"
                height="40"
              />
              <button type="button" id="syntax-close-btn" title="Close">
                × Close
              </button>
            </div>
          </div>

          <div style={{ ...sectionCard, backgroundColor: '#fff' }}>
            <h3 style={{ marginTop: 0, color: '#334155' }}>§8 Chaining & filter</h3>
            <div className="card" style={{ padding: '12px', border: '1px solid #cbd5e1', marginBottom: '8px' }}>
              Card without button
            </div>
            <div className="card" style={{ padding: '12px', border: '1px solid #cbd5e1', marginBottom: '12px' }}>
              <button type="button">Inside card</button>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 12px' }}>
              <li className="item" style={{ padding: '6px', background: '#f1f5f9', marginBottom: '4px' }}>
                item 0
              </li>
              <li className="item" style={{ padding: '6px', background: '#f1f5f9', marginBottom: '4px' }}>
                item 1
              </li>
              <li className="item" style={{ padding: '6px', background: '#f1f5f9' }}>
                item 2
              </li>
            </ul>
            <div
              className="row"
              style={{ display: 'flex', justifyContent: 'space-between', padding: '8px', borderBottom: '1px solid #e2e8f0' }}
            >
              <span>Product 1</span>
            </div>
            <div
              className="row"
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px' }}
            >
              <span>Product 2</span>
              <button type="button">Add</button>
            </div>
          </div>

          <div style={{ ...sectionCard, backgroundColor: '#fff' }}>
            <h3 style={{ marginTop: 0, color: '#334155' }}>§9 Legacy page.click / fill / …</h3>
            <label htmlFor="username" style={{ display: 'block', fontWeight: '600', marginBottom: '4px' }}>
              Username
            </label>
            <input id="username" type="text" style={{ padding: '8px', width: '100%', maxWidth: '280px' }} />
            <label htmlFor="legacy-search" style={{ display: 'block', fontWeight: '600', margin: '10px 0 4px' }}>
              Search
            </label>
            <input id="legacy-search" type="text" style={{ padding: '8px', width: '100%', maxWidth: '280px' }} />
            <div style={{ marginTop: '10px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input id="rememberMe" type="checkbox" />
                Remember me
              </label>
            </div>
            <div style={{ marginTop: '8px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input id="subscribe" type="checkbox" defaultChecked />
                Subscribe
              </label>
            </div>
            <label htmlFor="country" style={{ display: 'block', fontWeight: '600', margin: '10px 0 4px' }}>
              Country
            </label>
            <select id="country" defaultValue="USA" style={{ padding: '8px', minWidth: '160px' }}>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>
            <label htmlFor="upload" style={{ display: 'block', fontWeight: '600', margin: '10px 0 4px' }}>
              Upload
            </label>
            <input id="upload" type="file" accept=".pdf,.txt" />
          </div>

          <div style={{ ...sectionCard, backgroundColor: '#fff' }}>
            <h3 style={{ marginTop: 0, color: '#334155' }}>§11 Keyboard & mouse</h3>
            <p style={{ fontSize: '13px', color: '#64748b' }}>
              Move inside the pad — read coordinates for <code>page.mouse.move</code> / <code>click</code>:
            </p>
            <div
              id="pg-mouse-pad"
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                setMousePos({ x: Math.round(e.clientX - r.left), y: Math.round(e.clientY - r.top) });
              }}
              style={{
                width: '100%',
                maxWidth: '320px',
                height: '140px',
                background: '#f8fafc',
                border: '2px dashed #94a3b8',
                borderRadius: '8px',
                position: 'relative',
              }}
            >
              <span
                id="pg-mouse-xy"
                style={{
                  position: 'absolute',
                  bottom: '8px',
                  right: '8px',
                  fontSize: '12px',
                  fontFamily: 'monospace',
                  color: '#334155',
                }}
              >
                {mousePos.x},{mousePos.y}
              </span>
            </div>
            <input
              id="pg-keyboard-sample"
              type="text"
              placeholder="page.keyboard.type target"
              style={{ marginTop: '12px', padding: '8px', width: '100%', maxWidth: '280px' }}
            />
          </div>

          <div style={{ ...sectionCard, backgroundColor: '#fff' }}>
            <h3 style={{ marginTop: 0, color: '#334155' }}>§12 Assertion targets (toggle state)</h3>
            <button type="button" id="pg-toggle-hidden" onClick={() => setHiddenBox((v) => !v)}>
              Toggle hidden box
            </button>
            <div
              id="pg-assert-hidden"
              style={{
                marginTop: '8px',
                padding: '8px',
                background: '#dcfce7',
                display: hiddenBox ? 'none' : 'block',
              }}
            >
              Now you see me (hidden when toggled)
            </div>
            <div style={{ marginTop: '12px' }}>
              <button type="button" id="pg-toggle-disable" onClick={() => setDisabledBtn((v) => !v)}>
                Toggle disabled submit
              </button>
              <button
                type="button"
                id="pg-disabled-target"
                disabled={disabledBtn}
                style={{ marginLeft: '8px' }}
              >
                Conditional submit
              </button>
            </div>
            <div style={{ marginTop: '12px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input
                  id="pg-assert-checked"
                  type="checkbox"
                  checked={checkedDemo}
                  onChange={() => setCheckedDemo((c) => !c)}
                />
                Toggle for toBeChecked()
              </label>
            </div>
            <p id="pg-assert-text" style={{ marginTop: '12px', fontWeight: '600' }}>
              Welcome automation engineer
            </p>
            <input id="pg-assert-value" type="text" defaultValue="admin" style={{ marginTop: '8px', padding: '8px' }} />
            <div
              id="pg-assert-class"
              className={checkedDemo ? 'syntax-active' : 'syntax-idle'}
              style={{ marginTop: '8px', padding: '8px', borderRadius: '4px' }}
            >
              Class toggles with checkbox (syntax-active / syntax-idle)
            </div>
          </div>

          <div style={{ ...sectionCard, backgroundColor: '#fff' }}>
            <h3 style={{ marginTop: 0, color: '#334155' }}>§13 Waiting</h3>
            <button
              type="button"
              id="pg-show-delayed"
              onClick={() => {
                setDelayedVisible(false);
                setTimeout(() => setDelayedVisible(true), 2000);
              }}
            >
              Show #login after 2s (waitForSelector)
            </button>
            {delayedVisible ? (
              <div id="login" style={{ marginTop: '10px', padding: '10px', background: '#fef3c7', fontWeight: '600' }}>
                #login appeared
              </div>
            ) : null}
          </div>

          <div style={{ ...sectionCard, backgroundColor: '#fff' }}>
            <h3 style={{ marginTop: 0, color: '#334155' }}>§14 Dialogs</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <button type="button" id="pg-alert" onClick={() => window.alert('Playwright dialog message')}>
                alert()
              </button>
              <button type="button" id="pg-confirm" onClick={() => window.confirm('Confirm?')}>
                confirm()
              </button>
              <button type="button" id="pg-prompt" onClick={() => window.prompt('Name?', '')}>
                prompt()
              </button>
            </div>
          </div>

          <div style={{ ...sectionCard, backgroundColor: '#fff' }}>
            <h3 style={{ marginTop: 0, color: '#334155' }}>§15 Popup / new page</h3>
            <a
              id="pg-open-tab"
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#2563eb', fontWeight: '600' }}
            >
              Open New Tab (example.com)
            </a>
          </div>

          <div style={{ ...sectionCard, backgroundColor: '#fff' }}>
            <h3 style={{ marginTop: 0, color: '#334155' }}>§16 iframe</h3>
            <iframe
              id="my-frame"
              title="Syntax reference inner frame"
              srcDoc="<!DOCTYPE html><html><body style='font-family:sans-serif;padding:12px'><p>Inner frame</p><button type='button' id='in-frame-btn'>Submit in frame</button></body></html>"
              style={{ width: '100%', maxWidth: '360px', height: '140px', border: '1px solid #cbd5e1', borderRadius: '6px' }}
            />
          </div>

          <div style={{ ...sectionCard, backgroundColor: '#fff' }}>
            <h3 style={{ marginTop: 0, color: '#334155' }}>§17–18 Screenshot & download</h3>
            <p style={{ fontSize: '13px', color: '#64748b' }}>
              Use <code>page.screenshot</code> in tests. For downloads:
            </p>
            <a
              id="pg-download-link"
              href="data:text/plain;charset=utf-8,Playwright%20syntax%20reference%20sample"
              download="playwright-syntax-sample.txt"
              style={{ fontWeight: '600', color: '#059669' }}
            >
              Download sample file
            </a>
          </div>

          <div style={{ ...sectionCard, backgroundColor: '#fff' }}>
            <h3 style={{ marginTop: 0, color: '#334155' }}>§23 Evaluate / storage</h3>
            <button
              type="button"
              id="pg-ls-run"
              onClick={() => {
                try {
                  localStorage.setItem('token', '123');
                  setLsOut(localStorage.getItem('token') || '');
                } catch (err) {
                  setLsOut(String(err));
                }
              }}
            >
              page.evaluate-style: setItem token
            </button>
            <p id="pg-ls-out" style={{ marginTop: '8px', fontFamily: 'monospace', fontSize: '13px' }}>
              {lsOut || '(run button)'}
            </p>
          </div>

          <div style={{ ...sectionCard, backgroundColor: '#fff' }}>
            <h3 style={{ marginTop: 0, color: '#334155' }}>§20 API request</h3>
            <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>
              Run <code>page.request.get/post</code> from tests against your API base URL. Browser CORS does not apply to
              Playwright request context.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
