import logo from './assets/hamburger.png';
import github from './assets/github.png';
import download from './assets/download.png';
import linkedin from './assets/linkedin.png';

import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img
                    src={logo}
                    className="App-logo"
                    alt="logo"
                    style={{ height: 200, width: 'auto' }}
                />
                <h2>Electron Pos</h2>
                <div className="links-wrap">
                    <a
                        className="link"
                        href="https://github.com/recreateideas/pos-electron"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ marginBottom: 0 }}
                    >
                        <div className="links">
                            <img
                                src={github}
                                style={{
                                    height: 48,
                                    width: 48,
                                    borderRadius: '100%'
                                }}
                                alt="github"
                            />
                            <div className="text">Github Repo</div>
                        </div>
                    </a>
                    <a
                        className="link"
                        href="https://claudio-electron-builds.s3-ap-southeast-2.amazonaws.com/Pos-0.10.0.dmg"
                    >
                        <div className="links" style={{ marginTop: 0 }}>
                            <img
                                src={download}
                                style={{
                                    height: 48,
                                    width: 48,
                                    borderRadius: '100%'
                                }}
                                alt="download"
                            />
                            <div className="text">Download Mac Installer</div>
                        </div>
                    </a>
                </div>

                <a
                    className="link"
                    href="https://www.linkedin.com/in/recreateideas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginTop: 24 }}
                >
                    <div className="links">
                        <img
                            src={linkedin}
                            style={{
                                height: 48,
                                width: 48,
                                borderRadius: '100%'
                            }}
                            alt="linkedin"
                        />
                        <div className="text">my Linkedin</div>
                    </div>
                </a>

                <p style={{ fontSize: 16 }}>
                    <b>If the app is blocked by macOS</b>:<br />{' '}
                    <u>
                        System Preferences -&gt; Security & Privacy -&gt;
                        General -&gt; Allow Anyway.
                    </u>
                </p>
            </header>
        </div>
    );
}

export default App;
