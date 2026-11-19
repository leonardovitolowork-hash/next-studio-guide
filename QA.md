# Verification notes

## Automated checks

1. Run `node --test tests/smoke.cjs` to check content references, shortcut pairs, map targets, Q&A (including example questions, a named-effect follow-up and unknown question), pattern structure and shell assets.
2. Run `node --check` on `app.js`, `engine.js`, `library.js` and `sw.js`. The packaging run also checked that the static HTML and relative assets were available on localhost under a repository-style subpath.

## Browser release checklist — manual, not yet run

- Desktop Chromium and Safari/Firefox: open each navigation tab and inspect the console. Open a lesson directly by hash. Mark it complete, reload and confirm saved progress. Filter shortcuts, switch Windows/macOS and preview printing.
- Keyboard/mobile: check the skip link, visible focus, lesson search, map hotspots, chat submit and the sequencer scroll area at 360px width. Ask for reverb, then “How do I bypass that effect?” Ask an unrelated question and check the fallback. Confirm chat input is displayed as text, not HTML.
- Sound lab: toggle a beat cell and audition it; test play/stop, loop on/off, speed changes, intro/breakdown, Dry/Echo/Low-pass, reset and clear. Leave the lab during playback; it should stop. Complete the Add Track drill and answer the signal quiz.
- Offline/install: serve on HTTPS or localhost. Allow the service worker to finish installing, then reload offline and open the major tabs. On a browser that offers installation, install and reopen. External documentation is not cached.
- GitHub Pages: enable branch publishing and verify the HTTPS URL, including direct links such as `/#lesson/instrument` relative to the repository root, not just the base page.

## Hardware acceptance — manual, not yet run

Verify which Next build and operating system you have. Make a four-bar MiniLab Instrument take; play back the MIDI clip. Capture a short K.O. II audio pass using the source exposed by your firmware/driver or the analog alternative. Listen to the recording and then export a WAV. The lab is a teaching simulation, not a hardware integration test.
