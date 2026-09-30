// Public-facing case studies. Replace bracketed prompts with your own facts and approved visuals.
// A visual can later use { label: '...', src: importedImage } in place of its placeholder.
import { portfolioImage } from './portfolioImages.js'

export const experienceCases = {
  ibm: {
    title: 'Enterprise AI at IBM Z',
    organization: 'IBM Z',
    summary: 'A reusable documentation MCP layer, ingestion tools, and evaluation for IBM Z AI workflows.',
    meta: [
      { label: 'Role', value: 'Forward Deployed Engineering Intern, IBM Z' },
      { label: 'Timeline', value: 'May – August 2026 · Durham, NC' },
      { label: 'Tools / environment', value: 'Python · RAG · MCP · OpenShift / Kubernetes' },
      { label: 'Team / ownership', value: 'Built ingestion, documentation context, and evaluation components; partnered with senior FDEs' },
    ],
    contribution: 'I built the documentation MCP server, ingestion tools, and testing pipeline. I also built a local log-validation prototype and worked with senior FDEs on the broader agent effort.',
    context: 'Forward Deployed Engineers needed reliable product documentation and diagnostic context when working through IBM Z customer issues.',
    problem: 'How could an AI workflow find useful context across a large documentation set and give the team a way to assess its answers?',
    approach: 'I prepared documentation for retrieval and built an MCP server that could supply IBM product context to RAG agents, log validation, or knowledge-gap workflows. I developed a testing pipeline and explored log validation in a separate local prototype.',
    decisions: [
      { title: 'Prepare sources for retrieval', body: 'I built ingestion tools to turn different source materials into usable documentation context.' },
      { title: 'Keep context reusable', body: 'I built the documentation MCP server as a separate product-context layer so multiple AI workflows could call the same tools.' },
      { title: 'Evaluate answers', body: 'I built the testing pipeline; our team evaluated the agent across a large question set.' },
    ],
    implementation: 'I built the ingestion components, the reusable documentation MCP service, a local log-validation prototype, and the evaluation pipeline. I worked with senior FDEs on the larger agent effort.',
    evaluation: 'I indexed 200,000+ IBM Z documents. Our team evaluated 800+ questions with an LLM judge followed by full-time FDE review for ground truth; the agent recorded a 97% pass rate.',
    sections: {
      context: { label: 'CONTEXT', title: 'Product answers need a source' },
      problem: { label: 'CHALLENGE', title: 'Finding context at scale' },
      approach: { label: 'APPROACH', title: 'Documents into retrieval' },
      decisions: { label: 'DECISIONS', title: 'Keeping context reusable' },
      implementation: { label: 'BUILD', title: 'The pieces I owned' },
      evaluation: { label: 'OUTCOME', title: 'Measured with the team' },
    },
    visuals: {
      hero: { label: 'IBM internship team photo', src: portfolioImage('ibm-group.jpeg') },
    },
  },
  firebirds: {
    title: 'Leading restaurant operations at Firebirds',
    organization: 'Firebirds Wood Fired Grill',
    summary: 'Leading 30+ employees across service, staffing, and operations in a high-volume restaurant.',
    meta: [
      { label: 'Role', value: 'Restaurant Manager' },
      { label: 'Timeline', value: 'May 2023 – May 2026 · Durham, NC' },
      { label: 'Tools / environment', value: 'Labor scheduling · Inventory · Cash management · Guest service' },
      { label: 'Team / ownership', value: 'Led 30+ employees across front- and back-of-house operations' },
    ],
    contribution: 'I ran front- and back-of-house operations, including labor scheduling, inventory, cash management, and guest experience, while leading 30+ employees.',
    context: 'The restaurant served 600–800 covers and generated $20K+ in daily sales, with service, staffing, and kitchen throughput moving at the same time.',
    problem: 'Keep peak service moving and ticket times under control while managing food cost and labor to budget targets.',
    approach: 'I coordinated front- and back-of-house work, scheduled labor, managed inventory and cash, and made time-sensitive service decisions during busy shifts.',
    decisions: [
      { title: 'Staffing and labor', body: 'I owned labor scheduling while managing labor to budget targets for a 30+ person team.' },
      { title: 'Peak-service pacing', body: 'I coordinated front- and back-of-house operations to keep ticket times under 20 minutes at peak volume.' },
    ],
    implementation: 'I ran day-to-day service through staffing, inventory, cash management, and guest-facing decisions across both sides of the restaurant.',
    evaluation: 'The restaurant handled 600–800 covers and $20K+ in daily sales. I held ticket times under 20 minutes at peak volume while managing food and labor to budget targets.',
    sections: {
      context: { label: 'CONTEXT', title: 'Six hundred covers, one service' },
      problem: { label: 'CHALLENGE', title: 'The peak-hour balancing act' },
      approach: { label: 'OPERATIONS', title: 'Running both sides of the shift', body: ['approach', 'implementation'] },
      decisions: { label: 'DECISIONS', title: 'Staffing and pacing choices' },
      evaluation: { label: 'OUTCOME', title: 'Under twenty minutes at peak' },
    },
    visuals: {
      hero: { label: 'My chefs jacket and red hat', src: portfolioImage('firebirds-chefsjacket.jpg'), portrait: true },
    },
  },
}

export const projectCases = {
  glasses: {
    summary: 'A wearable vision platform connecting glasses, an iPhone relay, and a GPU-backed Tower.',
    meta: [
      { label: 'Role', value: 'Builder · vision and systems engineering' },
      { label: 'Timeline', value: 'Started August 2026' },
      { label: 'Tools / stack', value: 'Swift · FastAPI · PyTorch · CUDA' },
      { label: 'Team / ownership', value: 'Independent project · designed and built by me' },
    ],
    context: 'First-person video can capture a useful view of the world, but the devices that capture it have limited room for heavy vision work and persistent memory.',
    problem: 'How can a wearable system turn frames into useful visual context without pretending it already knows an object’s unique identity or room location?',
    approach: 'The glasses capture, the iPhone relays, and a Windows Tower runs vision work. World Builder reconstructs saved, photo-backed rooms; modular cartridges keep it separate from Object Memory while sharing a runtime.',
    decisions: [
      { title: 'Keep heavy work on the Tower', body: 'The phone bridges capture and compute instead of owning the full vision pipeline.' },
      { title: 'Use cartridge boundaries', body: 'Each experiment has its own contract and state so one feature can change without rewriting the whole platform.' },
      { title: 'Name the memory limit', body: 'Object Memory reports category-level observations today; instance identity and room-level recall remain open problems.' },
    ],
    implementation: 'I built the glasses-to-iPhone-to-workstation streaming path and World Builder’s depth, camera-motion, and spatial-data pipeline. Physical walks now create saved photographic rooms that can be viewed on the phone. Object Memory records category observations rather than reliable instance-level room locations.',
    evaluation: 'A documented 5.6-minute physical walk streamed 4,005 frames at 11.92 FPS and produced a phone-viewable photographic room. The main room held 590 of 997 keyframes; a split bedroom area and a long post-walk wait exposed the next engineering work.',
    next: 'Reduce the post-walk wait and improve room coherence without accepting unreliable spatial links; then extend category observations toward dependable instance-level recall.',
    sections: {
      context: { label: 'IDEA / CONSTRAINT', title: 'Frames are not memory', body: ['context', 'problem'] },
      approach: { label: 'ARCHITECTURE', title: 'Glasses → iPhone → Tower' },
      decisions: { label: 'DECISIONS', title: 'Keep each vision job separate' },
      implementation: { label: 'BUILD', title: 'From a stream to a spatial trace' },
      evaluation: { label: 'TESTING', title: 'What the prototype can prove' },
      next: { label: 'NEXT', title: 'The physical loop comes next' },
    },
    visuals: {
      approach: { label: 'Glasses → iPhone → Tower architecture diagram' },
      implementation: { label: 'World Builder room view or real device photo' },
    },
  },
  'agent-platform': {
    summary: 'A local coding-agent platform with backend-owned permissions, tools, and persistent sessions.',
    meta: [
      { label: 'Role', value: 'Sole designer and engineer' },
      { label: 'Timeline', value: 'Started August 2026' },
      { label: 'Tools / stack', value: 'Python · FastAPI · MCP · Ollama · SQLite · TypeScript' },
      { label: 'Team / ownership', value: 'Independent project · designed and built by me' },
    ],
    context: 'Gary is a local-first coding agent built to operate on real repositories through a VS Code extension or CLI, with the backend responsible for the work it allows.',
    problem: 'How can an agent work on a real project without allowing model output or a thin client to become the authority for writes and state?',
    approach: 'A Python backend owns permission checks, filesystem and MCP calls, and SQLite session state. VS Code and CLI clients request work through that boundary.',
    decisions: [
      { title: 'Keep authority in one backend', body: 'Clients cannot widen permissions on their own; the backend evaluates each tool request.' },
      { title: 'Separate roles', body: 'Planner, Coder, and Reviewer operate inside a controlled workflow rather than one unrestricted loop.' },
      { title: 'Persist the session', body: 'SQLite stores plans, decisions, messages, and checkpoints so work can resume after a restart.' },
    ],
    implementation: 'I built the FastAPI backend, packaged VS Code extension, Planner/Coder/Reviewer workflow, permissioned ToolGateway, filesystem sandbox, and SQLite-backed sessions. I tested it with local Llama and Qwen models. Planning works well; the Coder currently loses its project/file target, and backend stability needs repair.',
    evaluation: 'A previous backend run passed 1,100+ tests, and I tried the workflow with Llama and Qwen models from 7B to 14B. A documented live plan-to-code run resumed after a backend restart; current coding reliability and backend stability need fresh validation.',
    next: 'Fix backend stability and Coder project targeting, then retest the complete planning → implementation workflow before expanding the case study.',
    sections: {
      context: { label: 'BOUNDARY', title: 'The model should not hold the keys', body: ['context', 'problem'] },
      approach: { label: 'ARCHITECTURE', title: 'One backend decides' },
      decisions: { label: 'DECISIONS', title: 'Roles, gates, and durable state' },
      implementation: { label: 'BUILD', title: 'The agent behind the editor' },
      evaluation: { label: 'CURRENT VALIDATION', title: 'A restart was part of the test' },
      next: { label: 'IN PROGRESS', title: 'Hardening the full workflow' },
    },
    visuals: {},
  },
  'finance-advisor': {
    summary: 'A dashboard that turns bank-statement PDFs into queryable transactions and grounded questions.',
    meta: [
      { label: 'Role', value: 'Builder · data pipeline and application' },
      { label: 'Timeline', value: 'Started March 2026' },
      { label: 'Tools / stack', value: 'React · FastAPI · SQLite · Python' },
      { label: 'Team / ownership', value: 'Independent project · designed and built by me' },
    ],
    context: 'Statements from multiple banks are difficult to compare when records are locked in PDFs and merchant labels vary.',
    problem: 'How can transactions be normalized without double-counting transfers, while still letting a user inspect an AI answer?',
    approach: 'The pipeline parses statements, normalizes records, detects transfer pairs, and stores transactions in SQLite. The advisor calls tools to retrieve relevant transaction data for a question.',
    decisions: [
      { title: 'Normalize before analysis', body: 'Parsing and merchant/category cleanup create a consistent record before charts or questions use it.' },
      { title: 'Pair transfers', body: 'Moving money between accounts should not appear as spending twice.' },
      { title: 'Ground the advisor in tools', body: 'The assistant retrieves transaction records rather than answering only from a free-form prompt.' },
    ],
    implementation: 'React presents spending views; FastAPI serves normalized transactions and analysis. Statistical checks and Isolation Forest flag anomalies.',
    evaluation: 'The upload workflow has processed 100+ bank statements and parsed and sorted 4,000+ transactions into queryable records and spending views. Screenshots are redacted because the source data is personal.',
    sections: {
      context: { label: 'STARTING POINT', title: 'Statements in separate silos' },
      problem: { label: 'CHALLENGE', title: 'A transfer is not spending' },
      approach: { label: 'PIPELINE', title: 'PDFs into transactions' },
      decisions: { label: 'LOGIC', title: 'Normalize before asking' },
      implementation: { label: 'ADVISOR', title: 'Questions grounded in records' },
      evaluation: { label: 'RESULT', title: 'A usable private dashboard' },
    },
    visuals: {
      approach: { label: 'Normalized transactions, with amounts redacted', note: 'sorry for the redaction, personal info :(', src: portfolioImage('finance-transactions.png') },
      implementation: { label: 'Advisor in action', note: 'sorry for the redaction, personal info :(', src: portfolioImage('finance-advisor.png') },
    },
  },
  'lastfm-dashboard': {
    summary: 'An interactive R Shiny dashboard for exploring over 100,000 listening events.',
    meta: [
      { label: 'Role', value: 'Builder · data visualization' },
      { label: 'Timeline', value: 'Started September 2025' },
      { label: 'Tools / stack', value: 'R · Shiny · Last.fm API' },
      { label: 'Team / ownership', value: 'Independent project · designed and built by me' },
    ],
    context: 'Years of listening history are rich as a dataset but awkward to explore as raw scrobbles.',
    problem: 'How can artist, album, track, and time-based patterns become visible without reducing the history to a single annual recap?',
    approach: 'The app fetches and caches listening history, then uses R Shiny views to explore artists, albums, tracks, and listening patterns over time.',
    decisions: [
      { title: 'Favor exploration', body: 'The history view lets someone choose a year, then open a month to see its leading artists, albums, and tracks.' },
      { title: 'Cache the history', body: 'The first fetch saves listening data locally; later visits load that copy until the user chooses to refresh it.' },
    ],
    implementation: 'A Shiny dashboard shows a listening clock, artist discovery timeline, ranked albums and tracks, and month-by-month history with drill-downs.',
    evaluation: 'The dashboard makes over 100,000 scrobbles explorable. Month-level views reveal distinct artist and album eras, while the listening clock shows a clear late-night bias.',
    sections: {
      context: { label: 'WHY / QUESTION', title: '100,000 plays is a dataset', body: ['context', 'problem'] },
      approach: { label: 'BUILD', title: 'Fetch once, explore often' },
      decisions: { label: 'INTERACTION', title: 'Follow a month down the rabbit hole' },
      implementation: { label: 'VISUALIZATION', title: 'Listening patterns, drawn out' },
      evaluation: { label: 'RESULT', title: 'A history I can navigate' },
    },
    visuals: {
      approach: { label: 'Monthly listening patterns in the dashboard', src: portfolioImage('lastfm-monthly.png') },
      implementation: { label: 'A listening clock showing when plays happened', src: portfolioImage('lastfm-listening-clock.png') },
    },
  },
}

const archiveSections = {
  'ml-visualizer': {
    context: { label: 'WHY', title: 'Diagrams I could move', body: ['context', 'problem'] },
    approach: { label: 'APPROACH', title: 'Training behavior on screen' },
    implementation: { label: 'BUILD', title: 'Small experiments, immediate feedback' },
    evaluation: { label: 'RESULT', title: 'A playground, not a lecture' },
  },
  'computer-vision-system': {
    context: { label: 'CHALLENGE', title: 'What one frame misses' },
    approach: { label: 'APPROACH', title: 'Following behavior through video' },
    implementation: { label: 'BUILD', title: 'Detection, tracks, and motion events' },
  },
  'nexus-cli': {
    context: { label: 'QUESTION', title: 'A CLI that finds its tools' },
    approach: { label: 'APPROACH', title: 'Discovery with controlled execution' },
    implementation: { label: 'BUILD', title: 'Retrieval in the local loop' },
  },
  'notebooklm-clone': {
    context: { label: 'CHALLENGE', title: 'An answer should point back' },
    approach: { label: 'APPROACH', title: 'Source material into passages' },
    implementation: { label: 'BUILD', title: 'A notebook for grounded questions' },
  },
  'RL-Stock Trader': {
    context: { label: 'QUESTION', title: 'One ticker is not a portfolio' },
    approach: { label: 'APPROACH', title: 'Rewards across multiple stocks' },
    implementation: { label: 'BUILD', title: 'A DQN in a trading environment' },
  },
  'mdm-advanced-rag': {
    context: { label: 'CHALLENGE', title: 'Specifications scattered across formats' },
    approach: { label: 'APPROACH', title: 'Retrieval before extraction' },
    implementation: { label: 'REVIEW', title: 'A human checks the output' },
  },
}

const soloArchiveIds = new Set(['ml-visualizer', 'computer-vision-system', 'notebooklm-clone', 'RL-Stock Trader'])

export function getProjectCase(project) {
  const study = projectCases[project.id]
  if (study) return { ...study, contribution: study.contribution || project.recruiter?.contribution }
  const soloProject = soloArchiveIds.has(project.id)
  return {
    summary: project.built,
    meta: [
      { label: 'Role', value: soloProject ? 'Sole designer and engineer' : '[Add your role]' },
      { label: 'Timeline', value: '[Add project dates]' },
      { label: 'Tools / stack', value: project.stack.join(' · ') },
      { label: 'Team / ownership', value: soloProject ? 'Independent project · designed and built by me' : '[Clarify individual and team work]' },
    ],
    contribution: project.recruiter?.contribution || (soloProject ? `I built ${project.built[0].toLowerCase()}${project.built.slice(1)}` : '[Specify your individual contribution and separate team work.]'),
    context: project.why,
    problem: project.recruiter?.problem || '[Describe the specific technical or user problem this project addressed.]',
    approach: project.detail,
    decisions: [],
    implementation: project.built,
    evaluation: project.outcome || '[Add a measured or clearly bounded result.]',
    sections: archiveSections[project.id],
    visuals: {},
  }
}
