globalThis.STUDIO_DB = {
  "lessons": [
    {
      "id": "project",
      "cat": "Setup",
      "title": "Create and save a project",
      "where": "File → New Project",
      "terms": [
        "new song",
        "start project",
        "save project",
        "template",
        "setup"
      ],
      "steps": [
        "Start an empty project from the Quick Start screen.",
        "Save it with a recognisable name before recording.",
        "Set a working tempo: double-click the tempo display in the transport."
      ],
      "check": "Close and reopen your test project to check you saved the right file.",
      "refs": [
        [
          "manual",
          "20"
        ],
        [
          "manual",
          "24"
        ],
        [
          "menus"
        ]
      ],
      "practice": "Start with a 92 BPM practice project."
    },
    {
      "id": "audio",
      "cat": "Setup",
      "title": "Set up audio and monitoring",
      "where": "Preferences → Audio / Track Inspector → Routing",
      "terms": [
        "audio preferences",
        "audio driver",
        "sound card",
        "latency",
        "interface",
        "no sound",
        "output"
      ],
      "steps": [
        "Connect the interface before launching Next.",
        "In Preferences → Audio, choose the driver and the input and output devices you actually use.",
        "Create a Mic/Line In track. Select its input in Track Inspector and watch its meter while you play.",
        "If you want to hear the live signal through Next, enable Track Monitor. If you hear a doubled signal, try monitoring through only one path."
      ],
      "check": "The input meter moves, and playback comes from the selected output.",
      "refs": [
        [
          "manual",
          "248"
        ],
        [
          "audio"
        ]
      ],
      "practice": "Record one clap and play it back before recording anything important."
    },
    {
      "id": "midi",
      "cat": "Setup",
      "title": "Connect a MIDI keyboard",
      "where": "Preferences → MIDI",
      "terms": [
        "midi controller",
        "midi input",
        "keyboard setup",
        "connect keyboard",
        "minilab connection",
        "all inputs"
      ],
      "steps": [
        "Connect the keyboard via USB before opening Next.",
        "On Windows, open Edit → Preferences; on macOS, open Preferences from the Cakewalk Next app menu. Select MIDI.",
        "Choose the keyboard as the default MIDI Input or use All Inputs. In the track inspector, confirm the Instrument track input."
      ],
      "check": "Play a key on a loaded Instrument track. MIDI is note/control data, not sound on its own.",
      "refs": [
        [
          "midi"
        ],
        [
          "manual",
          "250"
        ]
      ],
      "practice": "Try the virtual keyboard first if the hardware is not appearing."
    },
    {
      "id": "instrument",
      "cat": "Make a beat",
      "title": "Add a MIDI instrument",
      "where": "Track pane → + → Instrument",
      "terms": [
        "add midi instrument",
        "virtual instrument",
        "software synth",
        "instrument track",
        "vst instrument",
        "add piano",
        "analog lab"
      ],
      "steps": [
        "Click + in the Track pane and choose Instrument (not Mic/Line In).",
        "Pick a software instrument. Test with a built-in sound first; use Analog Lab if installed and visible in the instrument list.",
        "Check the track’s MIDI input in Track Inspector, select the track, and play from your keyboard or the Virtual MIDI Controller."
      ],
      "check": "Play a chord, then record a short take and confirm a MIDI clip appears on the Instrument track.",
      "refs": [
        [
          "manual",
          "273"
        ],
        [
          "parts"
        ],
        [
          "midi"
        ]
      ],
      "practice": "Practice the + → Instrument path in the simulator."
    },
    {
      "id": "virtual",
      "cat": "Make a beat",
      "title": "Play without a MIDI keyboard",
      "where": "View → Show Virtual MIDI Controller",
      "terms": [
        "virtual keyboard",
        "qwerty",
        "no controller",
        "computer keyboard",
        "arpeggiator",
        "scale mapping"
      ],
      "steps": [
        "Select a track that has a playable instrument loaded.",
        "Open the Virtual MIDI Controller from View, or use Ctrl+M on Windows / Cmd+M on macOS.",
        "Try triggering notes. On newer builds, also explore the layout, scale and arpeggiator controls shown in the feature notes."
      ],
      "check": "You can trigger an instrument without any plugged-in MIDI gear.",
      "refs": [
        [
          "manual",
          "69"
        ],
        [
          "keys"
        ],
        [
          "updates"
        ]
      ],
      "practice": "Compare the virtual controller to the keyboard grid in the lab."
    },
    {
      "id": "record",
      "cat": "Make a beat",
      "title": "Record a MIDI performance",
      "where": "Instrument track → Arm → Transport Record",
      "terms": [
        "record midi",
        "arm track",
        "overdub",
        "midi clip",
        "record notes"
      ],
      "steps": [
        "Select the Instrument track and verify its input.",
        "Confirm that the intended track is armed. For multiple tracks, manage the armed tracks manually.",
        "Use transport Record, play a phrase, then stop. Replay and open the resulting MIDI clip."
      ],
      "check": "The clip contains editable notes, not a rendered waveform.",
      "refs": [
        [
          "manual",
          "49"
        ],
        [
          "manual",
          "54"
        ],
        [
          "manual",
          "55"
        ]
      ],
      "practice": "Capture a four-bar melody; leave imperfect notes for the editing lesson."
    },
    {
      "id": "recordaudio",
      "cat": "Make a beat",
      "title": "Record vocals or line audio",
      "where": "+ → Mic/Line In → Routing → Record",
      "terms": [
        "record audio",
        "record vocals",
        "mic",
        "line input",
        "interface recording",
        "guitar"
      ],
      "steps": [
        "Insert a Mic/Line In track and choose the physical input in Track Inspector.",
        "Set input gain at the source/interface while watching the track meter; avoid clipping.",
        "Arm the track. Enable Track Monitor only if needed, then record and listen back."
      ],
      "check": "A waveform appears and replays from the expected output.",
      "refs": [
        [
          "manual",
          "49"
        ],
        [
          "audio"
        ]
      ],
      "practice": "Name the track by source before recording your second take."
    },
    {
      "id": "roll",
      "cat": "Make a beat",
      "title": "Edit notes in the Piano Roll",
      "where": "MIDI clip → Clip Inspector",
      "terms": [
        "piano roll",
        "midi editor",
        "quantize",
        "velocity",
        "draw notes",
        "snap grid",
        "move notes"
      ],
      "steps": [
        "Open a MIDI clip in the Clip Inspector.",
        "Add or move notes in the Piano Roll. The horizontal axis is time; the vertical axis is pitch.",
        "Change one note’s length and try editing its velocity. Use Snap when exact subdivisions are useful.",
        "Check the release notes if your MIDI Editor differs from the manual."
      ],
      "check": "Move a note up, replay it, and hear the pitch change.",
      "refs": [
        [
          "manual",
          "94"
        ],
        [
          "manual",
          "141"
        ],
        [
          "release"
        ]
      ],
      "practice": "Build a pattern in the grid and play it in the lab."
    },
    {
      "id": "loop",
      "cat": "Make a beat",
      "title": "Loop a section and set the click",
      "where": "Time ruler / Transport",
      "terms": [
        "loop recording",
        "loop playback",
        "metronome",
        "bpm",
        "tap tempo",
        "count in",
        "punch recording"
      ],
      "steps": [
        "Drag across the top third of the time ruler for a loop region.",
        "Enable Loop in the transport and play to verify the boundaries.",
        "Use the metronome options for practice. For takes, review the recording options before trying loop or punch recording."
      ],
      "check": "Start at bar 1 with the loop end at bar 5 for a four-bar repeat.",
      "refs": [
        [
          "manual",
          "44"
        ],
        [
          "manual",
          "56"
        ],
        [
          "manual",
          "62"
        ]
      ],
      "practice": "Choose Loop in the simulator to see a repeating playhead."
    },
    {
      "id": "import",
      "cat": "Make a beat",
      "title": "Import audio, MIDI and loops",
      "where": "Insert → Insert Audio/MIDI File / Loop Browser",
      "terms": [
        "import audio",
        "import midi",
        "bandlab sounds",
        "loop browser",
        "drag in wav",
        "one shot"
      ],
      "steps": [
        "Use Insert → Insert Audio/MIDI File to bring in a local file.",
        "Open the Loop Browser from the toolbar to explore available sounds and drag a loop to the project.",
        "If imported MIDI is silent, verify it is assigned to a playable instrument."
      ],
      "check": "You can distinguish a waveform in an audio clip from notes in a MIDI clip.",
      "refs": [
        [
          "manual",
          "61"
        ],
        [
          "manual",
          "71"
        ],
        [
          "menus"
        ]
      ],
      "practice": "Import a single loop, then build a new MIDI layer above it."
    },
    {
      "id": "sampler",
      "cat": "Make a beat",
      "title": "Turn a sample into an instrument",
      "where": "+ → Sampler → XSampler",
      "terms": [
        "xsampler",
        "sampler track",
        "sample chop",
        "one shot",
        "sample pitch"
      ],
      "steps": [
        "Insert a Sampler track and select it to reveal XSampler in the Track Inspector.",
        "Browse for an audio file or drag in an audio clip or Loop Browser item.",
        "Set useful start and end points and trigger the sample from MIDI."
      ],
      "check": "One source sample can be replayed across different pitches.",
      "refs": [
        [
          "manual",
          "156"
        ],
        [
          "manual",
          "164"
        ],
        [
          "xs"
        ]
      ],
      "practice": "Use a short sound you recorded, then play three different pitches."
    },
    {
      "id": "pads",
      "cat": "Make a beat",
      "title": "Build a drum kit with Pad Controller",
      "where": "+ → Pad Controller",
      "terms": [
        "pad controller",
        "drum kit",
        "pads",
        "step beat",
        "drum mapping",
        "drums"
      ],
      "steps": [
        "Insert a Pad Controller track.",
        "Put different sample or instrument content on separate pads and audition them.",
        "Check which incoming notes trigger which pads before recording, especially if you use a custom controller preset."
      ],
      "check": "At least two pads trigger different sounds.",
      "refs": [
        [
          "manual",
          "171"
        ],
        [
          "manual",
          "172"
        ],
        [
          "parts"
        ]
      ],
      "practice": "Try the Kick, Snare and Hat rows in the step sequencer."
    },
    {
      "id": "rack",
      "cat": "Make a beat",
      "title": "Layer sounds in Instrument Rack",
      "where": "+ → Instrument Rack",
      "terms": [
        "instrument rack",
        "layer synths",
        "stack instruments",
        "layering"
      ],
      "steps": [
        "Insert an Instrument Rack track.",
        "Add two complementary instruments in the rack and audition the layer.",
        "Balance the layers before increasing the overall track level."
      ],
      "check": "Two sounds respond to the same performance without one burying the other.",
      "refs": [
        [
          "manual",
          "177"
        ],
        [
          "parts"
        ]
      ],
      "practice": "Try pairing a short attack with a softer sustained sound."
    },
    {
      "id": "edit",
      "cat": "Arrange",
      "title": "Edit clips without losing the beat",
      "where": "Clips pane / Snap to Grid / Ripple Edit",
      "terms": [
        "trim clips",
        "duplicate clips",
        "split",
        "ripple editing",
        "snap grid",
        "clip edit",
        "move clips"
      ],
      "steps": [
        "Copy a clip to build a second phrase; use Snap to keep boundaries aligned.",
        "Trim or split clips at meaningful positions and listen at each join.",
        "Leave Ripple Edit off for isolated edits. If you need to shift later material, verify the selection or all-tracks mode first."
      ],
      "check": "After copying a four-bar clip, the next copy begins exactly at bar 5.",
      "refs": [
        [
          "manual",
          "134"
        ],
        [
          "manual",
          "139"
        ],
        [
          "manual",
          "147"
        ]
      ],
      "practice": "Make a variation by removing a layer near the end of the copy."
    },
    {
      "id": "arranger",
      "cat": "Arrange",
      "title": "Turn a loop into a song",
      "where": "Track View Options → Arranger / Arranger Inspector",
      "terms": [
        "arranger",
        "arrange song",
        "verse",
        "chorus",
        "sections",
        "intro",
        "outro"
      ],
      "steps": [
        "Show the Arranger track from Track View Options.",
        "Mark sections over the timeline, such as Intro, Verse and Chorus.",
        "Open Arranger Inspector to try a different sequence of sections before committing.",
        "Verify the arrangement before exporting."
      ],
      "check": "Play through a transition and check that the next section starts where you intended.",
      "refs": [
        [
          "manual",
          "101"
        ],
        [
          "manual",
          "111"
        ],
        [
          "manual",
          "121"
        ]
      ],
      "practice": "Toggle a sparse intro, full section and breakdown in the lab."
    },
    {
      "id": "tempo",
      "cat": "Arrange",
      "title": "Manage tempo, meter and time display",
      "where": "Transport / Track View Options → Tempo",
      "terms": [
        "tempo map",
        "time signature",
        "meter",
        "music time",
        "absolute time",
        "tempo change"
      ],
      "steps": [
        "Set the project tempo in the transport and set the meter in Track View Options.",
        "Show the Tempo track when the song needs a tempo change.",
        "After a tempo edit, check the alignment of audio and MIDI; audio behaviour depends on the clip settings.",
        "Use musical time to think in bars and beats, or absolute time to check minutes and seconds."
      ],
      "check": "Play across one deliberate tempo change and listen for misaligned clips.",
      "refs": [
        [
          "manual",
          "46"
        ],
        [
          "manual",
          "63"
        ],
        [
          "menus"
        ]
      ],
      "practice": "Start a test in 4/4 before changing tempo at a section boundary."
    },
    {
      "id": "lyrics",
      "cat": "Arrange",
      "title": "Draft, sync and follow lyrics",
      "where": "Track View Options → Lyrics / Lyrics Inspector",
      "terms": [
        "lyrics track",
        "lyrics editor",
        "scratch pad",
        "prompter",
        "sync words"
      ],
      "steps": [
        "Show the Lyrics track and open the Lyrics Inspector.",
        "Draft text or bring in existing lyrics, then place lyric events against the track timeline.",
        "Switch to the prompter and play the section to check timing."
      ],
      "check": "The next line shows up where the vocal actually enters.",
      "refs": [
        [
          "manual",
          "221"
        ],
        [
          "manual",
          "228"
        ],
        [
          "manual",
          "234"
        ]
      ],
      "practice": "Sync one chorus before working through the whole song."
    },
    {
      "id": "mix",
      "cat": "Mix",
      "title": "Balance tracks before adding FX",
      "where": "Track pane → Volume, Pan, Mute, Solo",
      "terms": [
        "mixing",
        "mix balance",
        "volume",
        "pan",
        "meter",
        "clipping"
      ],
      "steps": [
        "Pick a focal element and balance the other tracks around it.",
        "Use Mute and Solo to isolate problems, then recheck with the whole mix playing.",
        "Watch the main meter and pull levels down if peaks clip."
      ],
      "check": "Your main element stays clear without a clipped main output.",
      "refs": [
        [
          "manual",
          "187"
        ],
        [
          "fx"
        ]
      ],
      "practice": "Try turning down competing tracks before boosting your lead."
    },
    {
      "id": "insertfx",
      "cat": "Mix",
      "title": "Insert and bypass an effect",
      "where": "Track Inspector → FX",
      "terms": [
        "add effect",
        "insert fx",
        "add plugin",
        "track effect",
        "bypass fx",
        "effect chain"
      ],
      "steps": [
        "Select the track so its Track Inspector opens.",
        "Use the FX insert control and choose an effect from the list.",
        "Open the effect interface to edit it. Toggle the effect’s power button to compare processed and unprocessed sound.",
        "Reorder effects only after you can hear how the change affects the chain."
      ],
      "check": "Bypass changes just the effect; muting the track is not the same thing.",
      "refs": [
        [
          "manual",
          "193"
        ],
        [
          "fx"
        ]
      ],
      "practice": "Practice selecting FX in the simulator; compare effects on the grid."
    },
    {
      "id": "eq",
      "cat": "Mix",
      "title": "Use an EQ",
      "where": "Track Inspector → FX → EQ plug-in",
      "terms": [
        "eq",
        "equalizer",
        "low cut",
        "high pass",
        "muddy",
        "frequency"
      ],
      "steps": [
        "Add an EQ effect and loop the part you want to fix.",
        "Try a small cut in a distracting band or a high-pass filter if low rumble is unwanted.",
        "Compare bypass at similar loudness and keep the change only if the full mix improves."
      ],
      "check": "You can describe what you removed and why; settings depend on the track.",
      "refs": [
        [
          "manual",
          "193"
        ],
        [
          "fx"
        ]
      ],
      "practice": "Switch between Dry and Low-pass in the lab to hear a filter example (not a Cakewalk plug-in)."
    },
    {
      "id": "compressor",
      "cat": "Mix",
      "title": "Use compression",
      "where": "Track Inspector → FX → compressor plug-in",
      "terms": [
        "compressor",
        "compression",
        "ratio",
        "threshold",
        "dynamics",
        "gain reduction"
      ],
      "steps": [
        "Add a compressor and loop a passage with uneven peaks.",
        "Lower the threshold until the gain-reduction meter responds on louder moments; start with modest reduction.",
        "Adjust attack/release by ear and compare bypass at similar loudness."
      ],
      "check": "Peaks feel more controlled without the part losing its punch or pumping unintentionally.",
      "refs": [
        [
          "manual",
          "193"
        ],
        [
          "fx"
        ]
      ],
      "practice": "Observe gain reduction rather than treating louder as automatically better."
    },
    {
      "id": "reverb",
      "cat": "Mix",
      "title": "Add reverb without washing out the mix",
      "where": "Track Inspector → FX or shared reverb bus",
      "terms": [
        "reverb",
        "room",
        "space",
        "wet dry",
        "decay",
        "hall"
      ],
      "steps": [
        "For one track, insert a reverb and start with a low wet mix.",
        "For shared space, add reverb to a bus, use the plug-in fully wet (if it offers a mix control), and adjust each track’s send amount.",
        "Check the tail when the track stops; too much decay can blur the next phrase."
      ],
      "check": "The track gains space without pushing the direct sound into the background.",
      "refs": [
        [
          "manual",
          "189"
        ],
        [
          "manual",
          "193"
        ],
        [
          "fx"
        ]
      ],
      "practice": "Try short and long ambience on a small phrase before mixing a full song."
    },
    {
      "id": "delay",
      "cat": "Mix",
      "title": "Use a delay effect",
      "where": "Track Inspector → FX → delay plug-in",
      "terms": [
        "delay",
        "echo effect",
        "feedback",
        "wet",
        "tempo sync"
      ],
      "steps": [
        "Start with a modest mix amount and low feedback.",
        "Try tempo sync if the plug-in offers it; audition the repeats between existing notes.",
        "Bypass the effect and decide whether repeats help the rhythm or clutter it."
      ],
      "check": "Repeats are intentional and decay rather than building up.",
      "refs": [
        [
          "manual",
          "193"
        ],
        [
          "fx"
        ]
      ],
      "practice": "Compare the lab’s Dry and Echo settings on the same drum phrase."
    },
    {
      "id": "bus",
      "cat": "Mix",
      "title": "Route several tracks to a bus",
      "where": "+ → Bus / Track Inspector → Aux Sends",
      "terms": [
        "bus",
        "aux send",
        "return",
        "routing",
        "parallel",
        "track folders",
        "submix"
      ],
      "steps": [
        "Insert a Bus to share processing or control across tracks.",
        "Use output routing for a submix, or add an aux send to feed a parallel effect while keeping the dry track path.",
        "Send one track first and confirm signal at the bus before adding the others.",
        "Use Track Folders when you want to organize tracks in the project; the folder can also act as a submix."
      ],
      "check": "The bus meter responds and its level controls the intended signal.",
      "refs": [
        [
          "manual",
          "17"
        ],
        [
          "manual",
          "33"
        ],
        [
          "manual",
          "189"
        ],
        [
          "fx"
        ]
      ],
      "practice": "Route a few drum tracks to one drum bus for shared level control."
    },
    {
      "id": "automation",
      "cat": "Mix",
      "title": "Automate volume or an effect",
      "where": "Track pane → Show Automation Lanes",
      "terms": [
        "automation",
        "envelope",
        "fade",
        "automate effect",
        "automation node"
      ],
      "steps": [
        "Show Automation Lanes and select the parameter on the target track.",
        "Create points for the beginning and end of a change; for a fade, set the last point lower.",
        "Play through the section to confirm the parameter changes. For effect automation, choose a parameter exposed by the plug-in."
      ],
      "check": "Only the intended track and parameter change while it plays.",
      "refs": [
        [
          "manual",
          "211"
        ],
        [
          "manual",
          "218"
        ]
      ],
      "practice": "Fade the final bar of a part without changing its earlier volume."
    },
    {
      "id": "plug",
      "cat": "Mix",
      "title": "Troubleshoot missing plug-ins",
      "where": "Preferences → Plugins / Plugin Manager",
      "terms": [
        "plugin missing",
        "vst scan",
        "analog lab missing",
        "quarantine",
        "vst3",
        "safe mode"
      ],
      "steps": [
        "Verify the plug-in is installed in a format and architecture your Next build can load.",
        "Check Preferences → Plugins for scan settings, then review Plugin Manager and Quarantine Manager if it is still missing.",
        "If a project fails to open after adding a plug-in, the manual describes holding Shift when opening the project to skip individual plug-ins."
      ],
      "check": "A known built-in instrument still loads; this separates plug-in issues from MIDI routing problems.",
      "refs": [
        [
          "manual",
          "203"
        ],
        [
          "manual",
          "209"
        ],
        [
          "manual",
          "251"
        ],
        [
          "manual",
          "22"
        ]
      ],
      "practice": "Troubleshoot one plug-in at a time and write down what changed."
    },
    {
      "id": "bounce",
      "cat": "Finish",
      "title": "Bounce MIDI or clips to audio",
      "where": "Clip context menu / audio processing",
      "terms": [
        "bounce midi",
        "render midi",
        "freeze track",
        "normalize",
        "reverse audio",
        "convert midi to audio"
      ],
      "steps": [
        "Select the appropriate clip(s) and use the applicable Bounce command in the clip context menu.",
        "Check the new waveform and keep the editable source until you have verified the bounce.",
        "Treat Normalize (level scaling) and Reverse (reverse playback order) as separate edits; audition before committing."
      ],
      "check": "The rendered part plays back as audio without relying on an instrument plug-in.",
      "refs": [
        [
          "manual",
          "206"
        ],
        [
          "manual",
          "207"
        ],
        [
          "fx"
        ]
      ],
      "practice": "Save a version before bouncing any clips you plan to keep editing."
    },
    {
      "id": "stems",
      "cat": "Finish",
      "title": "Try stem separation",
      "where": "Stem Separation workflow",
      "terms": [
        "stem separation",
        "isolate vocals",
        "split song",
        "extract drums"
      ],
      "steps": [
        "Start with audio you have permission to use.",
        "Follow the Stem Separation chapter for your Next build and audition the results individually.",
        "Expect possible artifacts; decide whether the separated audio is suitable for your project."
      ],
      "check": "Listen to both isolated and combined material before using it.",
      "refs": [
        [
          "manual",
          "149"
        ],
        [
          "help"
        ]
      ],
      "practice": "Test on a short recording rather than processing a whole set."
    },
    {
      "id": "export",
      "cat": "Finish",
      "title": "Export a finished song",
      "where": "File → Export Audio",
      "terms": [
        "export audio",
        "render wav",
        "save mp3",
        "mixdown",
        "export project",
        "share song",
        "stems export"
      ],
      "steps": [
        "Open File → Export Audio (Ctrl+E on Windows / Cmd+E on Mac).",
        "Choose Master for the full mix, then choose Entire project or a deliberate time selection.",
        "Choose a format such as WAV and check the destination before exporting.",
        "Play the resulting file outside Next and listen to the start and end."
      ],
      "check": "The exported file includes the intended song and does not cut off the ending.",
      "refs": [
        [
          "manual",
          "242"
        ],
        [
          "keys"
        ]
      ],
      "practice": "Export two versions with different filenames and compare."
    },
    {
      "id": "interchange",
      "cat": "Finish",
      "title": "Move projects between apps",
      "where": "File → Publish to BandLab / Export to CXF",
      "terms": [
        "bandlab project",
        "cloud",
        "publish bandlab",
        "cxf",
        "sonar exchange",
        "export midi",
        "collaborate"
      ],
      "steps": [
        "Use the BandLab import/publish workflow for your online library. Check the track limits before publishing.",
        "To move a project to Cakewalk Sonar, use the documented CXF workflow. Keep your original Next project.",
        "Use MIDI export when you need note data, not a rendered mix. Test the destination project after importing."
      ],
      "check": "Open the destination version and check routing, clips and sound instead of assuming a perfect transfer.",
      "refs": [
        [
          "manual",
          "77"
        ],
        [
          "manual",
          "244"
        ],
        [
          "manual",
          "245"
        ],
        [
          "menus"
        ]
      ],
      "practice": "Export a small test project before moving a full song."
    },
    {
      "id": "minilab",
      "cat": "Gear",
      "title": "Play Next with the MiniLab 3",
      "where": "MiniLab 3 USB → Next Instrument track",
      "terms": [
        "minilab 3",
        "arturia",
        "analog lab intro",
        "mini lab",
        "knob mapping",
        "transport controls"
      ],
      "steps": [
        "Connect your MiniLab 3 to the computer by USB and set it as a MIDI input in Next.",
        "Load a built-in Instrument and verify the keys before testing Analog Lab Intro.",
        "For plug-in knobs or pads, check the Arturia preset and the target instrument’s assignments. Do not assume another DAW’s integration preset maps Next’s transport."
      ],
      "check": "A four-bar take plays back; key input works independently of transport mapping.",
      "refs": [
        [
          "lab"
        ],
        [
          "arturia"
        ],
        [
          "midi"
        ]
      ],
      "practice": "Record chords with MiniLab, then add the K.O. II as a separate audio layer."
    },
    {
      "id": "ko2",
      "cat": "Gear",
      "title": "Record your K.O. II into Next",
      "where": "K.O. II → audio device → Next Mic/Line In",
      "terms": [
        "ko ii",
        "ko2",
        "ko ii usb",
        "ep-133",
        "ep133",
        "record ko2",
        "sampler hardware",
        "usb audio",
        "hardware sync"
      ],
      "steps": [
        "The current EP–133 guide v2.5 documents USB audio. Check your installed firmware, then select the device in Next Audio preferences if your OS and driver expose it.",
        "Alternative: run the K.O. II analog output to suitable interface line inputs. Use a stereo input pair where available if you want stereo.",
        "Add Mic/Line In and choose the matching input. Set levels while the K.O. II plays, then record a short test.",
        "Treat MIDI notes and clock as separate from audio. If recording starts off the grid, record from an obvious downbeat and check alignment before building the arrangement."
      ],
      "check": "The audio waveform replays. USB audio availability and device combinations still need testing on your machine.",
      "refs": [
        [
          "ko"
        ],
        [
          "audio"
        ],
        [
          "manual",
          "248"
        ]
      ],
      "practice": "Record one drum pass, then separately print any additional parts you need to mix."
    },
    {
      "id": "gearroute",
      "cat": "Gear",
      "title": "Route MiniLab 3 to K.O. II",
      "where": "MiniLab DIN MIDI OUT → Type A adapter → K.O. II MIDI IN",
      "terms": [
        "minilab to ko2",
        "type a",
        "din midi",
        "midi channel",
        "external sampler",
        "midi routing"
      ],
      "steps": [
        "Use the MiniLab 3 5-pin DIN MIDI OUT and a matching Type A TRS MIDI adapter for the K.O. II MIDI IN.",
        "Give the MiniLab USB power and match its transmit channel to the desired K.O. II pad/channel assignment.",
        "Monitor the K.O. II’s own audio; this MIDI cable does not carry sound.",
        "If you also route MIDI through the computer, check for duplicate triggering before recording."
      ],
      "check": "A key triggers the expected pad or sound when you monitor the K.O. II.",
      "refs": [
        [
          "lab"
        ],
        [
          "ko"
        ]
      ],
      "practice": "Test one note and one channel before mapping an entire kit."
    }
  ],
  "sources": {
    "manual": [
      "Cakewalk Next User Manual",
      "https://bandlab.github.io/cakewalk/docs/Cakewalk_Next_User_Manual.pdf",
      "Cakewalk • PDF reference"
    ],
    "help": [
      "Cakewalk Next Help Center",
      "https://help.cakewalk.com/hc/en-us/categories/14729904305817-Next",
      "Cakewalk • articles and tutorials"
    ],
    "product": [
      "Cakewalk Next product page",
      "https://www.cakewalk.com/next",
      "Cakewalk • product and resources"
    ],
    "updates": [
      "What’s New in Cakewalk Next",
      "https://www.cakewalk.com/next/whats-new",
      "Cakewalk • feature updates"
    ],
    "release": [
      "Cakewalk Next release notes",
      "https://help.cakewalk.com/hc/en-us/articles/52961116916633-What-s-new-in-the-latest-Cakewalk-Next-release",
      "Cakewalk • release notes"
    ],
    "keys": [
      "Default keyboard shortcuts",
      "https://help.cakewalk.com/hc/en-us/articles/46039690837657-Cakewalk-Next-Keyboard-Shortcuts",
      "Cakewalk • Windows and macOS"
    ],
    "menus": [
      "Cakewalk Next Menu Commands",
      "https://help.cakewalk.com/hc/en-us/articles/46139023054745-Cakewalk-Next-Menu-Commands",
      "Cakewalk • reference"
    ],
    "midi": [
      "Connecting a MIDI Controller",
      "https://help.cakewalk.com/hc/en-us/articles/13814106790681-Connecting-a-MIDI-Controller",
      "Cakewalk • setup"
    ],
    "audio": [
      "Setting up an audio interface",
      "https://help.cakewalk.com/hc/en-us/articles/13918817982233-Setting-Up-a-Microphone-Instrument-Audio-Interface-on-Next",
      "Cakewalk • setup"
    ],
    "fx": [
      "Mixing, Effects and Audio Processing",
      "https://help.cakewalk.com/hc/en-us/articles/44466679262361-Mixing-Effects-and-Audio-Processing",
      "Cakewalk • production"
    ],
    "xs": [
      "How to use the XSampler",
      "https://help.cakewalk.com/hc/en-us/articles/13327319097753-How-to-use-the-XSampler",
      "Cakewalk • instruments"
    ],
    "parts": [
      "Understanding Track Types",
      "https://help.cakewalk.com/hc/en-us/articles/44458346977561-Cakewalk-Next-Understanding-Track-Types",
      "Cakewalk • tracks and routing"
    ],
    "lab": [
      "MiniLab 3 overview",
      "https://www.arturia.com/products/hybrid-synths/minilab-3/overview",
      "Arturia • hardware"
    ],
    "arturia": [
      "MiniLab 3 DAW Integration",
      "https://support.arturia.com/hc/en-us/articles/6283884020508-MiniLab-3-DAW-Integration",
      "Arturia • controller integration"
    ],
    "ko": [
      "EP–133 K.O. II user guide",
      "https://teenage.engineering/guides/ep-133",
      "teenage engineering • firmware and routing"
    ],
    "forum": [
      "Cakewalk discussion forum",
      "https://discuss.cakewalk.com",
      "Community • check product and version"
    ],
    "tutorials": [
      "Cakewalk Next tutorials",
      "https://help.cakewalk.com/hc/en-us/sections/14730006675481-Tutorials",
      "Cakewalk • tutorial index"
    ],
    "trouble": [
      "Cakewalk Next troubleshooting",
      "https://help.cakewalk.com/hc/en-us/sections/34146183563033-Cakewalk-Next",
      "Cakewalk • troubleshooting"
    ]
  },
  "shortcuts": [
    [
      "Project",
      "New project",
      "Ctrl+N",
      "Cmd+N"
    ],
    [
      "Project",
      "Open project",
      "Ctrl+O",
      "Cmd+O"
    ],
    [
      "Project",
      "Save project",
      "Ctrl+S",
      "Cmd+S"
    ],
    [
      "Project",
      "Save as",
      "Ctrl+Shift+S",
      "Cmd+Shift+S"
    ],
    [
      "Project",
      "Export audio",
      "Ctrl+E",
      "Cmd+E"
    ],
    [
      "Project",
      "Preferences",
      "Ctrl+,",
      "Cmd+,"
    ],
    [
      "Tracks",
      "Insert audio track",
      "Ctrl+T",
      "Cmd+T"
    ],
    [
      "Tracks",
      "Insert instrument track",
      "Ctrl+Shift+T",
      "Cmd+Shift+T"
    ],
    [
      "Tracks",
      "Insert sampler track",
      "Ctrl+Shift+X",
      "Cmd+Shift+X"
    ],
    [
      "Tracks",
      "Insert pad controller",
      "Ctrl+Shift+P",
      "Cmd+Shift+P"
    ],
    [
      "Tracks",
      "Insert track folder",
      "Ctrl+Shift+G",
      "Cmd+Shift+G"
    ],
    [
      "Tracks",
      "Insert bus",
      "Ctrl+Alt+T",
      "Cmd+Option+T"
    ],
    [
      "Edit",
      "Undo",
      "Ctrl+Z",
      "Cmd+Z"
    ],
    [
      "Edit",
      "Redo",
      "Ctrl+Shift+Z",
      "Cmd+Shift+Z"
    ],
    [
      "Edit",
      "Split at playhead",
      "S",
      "S"
    ],
    [
      "Edit",
      "Duplicate",
      "Ctrl+D",
      "Cmd+D"
    ],
    [
      "Edit",
      "Ripple edit toggle",
      "Ctrl+R",
      "Cmd+R"
    ],
    [
      "Edit",
      "Bounce in place",
      "Ctrl+Alt+B",
      "Cmd+Option+B"
    ],
    [
      "Edit",
      "Bounce to new tracks",
      "Ctrl+Shift+B",
      "Cmd+Shift+B"
    ],
    [
      "Transport",
      "Play / Pause",
      "Space",
      "Space"
    ],
    [
      "Transport",
      "Go to start",
      "Shift+W",
      "Shift+W"
    ],
    [
      "Transport",
      "Go to end",
      "Shift+E",
      "Shift+E"
    ],
    [
      "Transport",
      "Record",
      "R",
      "R"
    ],
    [
      "Transport",
      "Metronome",
      "K",
      "K"
    ],
    [
      "Transport",
      "Loop playback",
      "L",
      "L"
    ],
    [
      "Transport",
      "Loop selected range",
      "Shift+L",
      "Shift+L"
    ],
    [
      "Editor",
      "Piano Roll draw",
      "D",
      "D"
    ],
    [
      "Editor",
      "Piano Roll velocity",
      "Alt+V",
      "Option+V"
    ],
    [
      "Editor",
      "Track Inspector",
      "F3",
      "F3"
    ],
    [
      "Editor",
      "Clip Inspector",
      "F4",
      "F4"
    ],
    [
      "Editor",
      "Loop Browser",
      "F5",
      "F5"
    ],
    [
      "Editor",
      "Arranger Inspector",
      "F6",
      "F6"
    ],
    [
      "Editor",
      "Lyrics Inspector",
      "F7",
      "F7"
    ],
    [
      "Editor",
      "Arranger track",
      "A",
      "A"
    ],
    [
      "Editor",
      "Tempo track",
      "T",
      "T"
    ],
    [
      "Editor",
      "Virtual MIDI Controller",
      "Ctrl+M",
      "Cmd+M"
    ]
  ],
  "zones": [
    [
      "track",
      "Track pane",
      "Choose track types and manage arm, monitor, mute or solo.",
      "instrument"
    ],
    [
      "timeline",
      "Clips pane",
      "Audio waveforms and MIDI notes are arranged here.",
      "edit"
    ],
    [
      "ruler",
      "Time ruler",
      "Locate the playhead, define a loop and select ranges.",
      "loop"
    ],
    [
      "transport",
      "Transport",
      "Control playback, recording, tempo and the metronome.",
      "record"
    ],
    [
      "inspect",
      "Track Inspector",
      "Manage the selected track’s routing, effects and instruments.",
      "insertfx"
    ],
    [
      "piano",
      "Clip Inspector",
      "Open a MIDI clip in the Piano Roll to edit its notes.",
      "roll"
    ],
    [
      "arrange",
      "Arranger",
      "Name song sections, then audition different section orders.",
      "arranger"
    ],
    [
      "browser",
      "Loop Browser",
      "Find loops and one-shots, then drag sounds into the project.",
      "import"
    ]
  ]
};
