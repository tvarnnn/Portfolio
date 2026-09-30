import { portfolioImage } from './portfolioImages.js'

// Recruiter pages share a reading rhythm, while each outline follows its own project.
export const recruiterOutlines = {
  ibm: [
    { kind: 'copy', label: 'PROBLEM SPACE', title: 'Finding reliable product context', fields: ['context', 'problem'] },
    { kind: 'copy', label: 'MY CONTRIBUTION', title: 'The reusable context layer I built', fields: ['contribution'] },
    { kind: 'flow', label: 'TECHNICAL APPROACH', title: 'Documentation → context → evaluation' },
    { kind: 'details', label: 'IMPLEMENTATION', title: 'Ingestion, retrieval, and tests' },
    { kind: 'decisions', label: 'OWNERSHIP', title: 'Where my work met the team effort' },
    { kind: 'outcome', label: 'EVALUATION / OUTCOME', title: '200,000+ documents, measured with the team', note: 'This public account stays at the system level; internal customer data and implementation details are omitted.' },
  ],
  firebirds: [
    { kind: 'copy', label: 'OPERATING CONTEXT', title: 'A high-volume service with many moving parts', fields: ['context', 'problem'] },
    { kind: 'copy', label: 'MY ROLE', title: 'Leading the team through service', fields: ['contribution'] },
    { kind: 'flow', label: 'OPERATING FLOW', title: 'Plan, coordinate, adjust' },
    { kind: 'decisions', label: 'SERVICE DECISIONS', title: 'Staffing and pace under pressure' },
    { kind: 'outcome', label: 'OUTCOME', title: 'Volume without losing the pace', suppressBoundary: true },
  ],
  glasses: [
    { kind: 'copy', label: 'CORE IDEA', title: 'Frames are not memory', fields: ['context'] },
    { kind: 'copy', label: 'SYSTEM CONSTRAINT', title: 'Capture is light; understanding is heavy', fields: ['problem'] },
    { kind: 'flow', label: 'ARCHITECTURE', title: 'Glasses → iPhone → Tower' },
    { kind: 'details', label: 'WORLD-BUILDING PIPELINE', title: 'From frames to a saved world' },
    { kind: 'decisions', label: 'ENGINEERING DECISIONS', title: 'Where the system draws the line' },
    { kind: 'outcome', label: 'TESTING / CURRENT STATE', title: 'A photographed room, with coherence and speed still in work' },
  ],
  'agent-platform': [
    { kind: 'copy', label: 'WHAT IT IS', title: 'A coding agent with a system of record', fields: ['context', 'problem'] },
    { kind: 'copy', label: 'MY WORK', title: 'The platform I designed and built', fields: ['contribution'] },
    { kind: 'flow', label: 'ARCHITECTURE', title: 'Client → roles → gateway → state' },
    { kind: 'details', label: 'IMPLEMENTATION', title: 'Authority stays in the backend' },
    { kind: 'decisions', label: 'DESIGN DECISIONS', title: 'Permission and recovery by design' },
    { kind: 'outcome', label: 'CURRENT STATE', title: 'Validated pieces, active integration' },
  ],
  'finance-advisor': [
    { kind: 'copy', label: 'DATA PROBLEM', title: 'Statements are not ready-made records', fields: ['context', 'problem'] },
    { kind: 'copy', label: 'MY CONTRIBUTION', title: 'A private pipeline and application', fields: ['contribution'] },
    { kind: 'flow', label: 'SYSTEM / WORKFLOW', title: 'Statements → Records → Analysis → Advisor' },
    { kind: 'details', label: 'IMPLEMENTATION', title: 'The records beneath the dashboard' },
    { kind: 'decisions', label: 'DESIGN DECISIONS', title: 'Reconcile first, reason from records' },
    {
      kind: 'visuals', label: 'VISUAL PROOF', title: 'The records stay inspectable',
      intro: 'Screenshots are redacted because the underlying data is personal.',
      items: [
        { src: portfolioImage('finance-overview.png'), alt: 'Redacted Finance Advisor dashboard', title: 'Dashboard overview', detail: 'Normalized spending and category views bring years of statements into one place.' },
        { src: portfolioImage('finance-transactions.png'), alt: 'Redacted transaction filtering view', title: 'Transaction filtering', detail: 'The transaction table lets the user inspect records beneath the charts.' },
        { src: portfolioImage('finance-advisor.png'), alt: 'Redacted Finance Advisor question and answer', title: 'Advisor', detail: 'Questions can be answered with tools that retrieve the relevant transaction data.' },
      ],
    },
    { kind: 'outcome', label: 'CURRENT STATE', title: 'Queryable spending and grounded answers', suppressBoundary: true },
  ],
  'lastfm-dashboard': [
    { kind: 'copy', label: 'WHY I BUILT IT', title: '100,000 plays deserved a better view', fields: ['context', 'problem'] },
    { kind: 'flow', label: 'DATA / API PIPELINE', title: 'Fetch, cache, aggregate, explore' },
    { kind: 'details', label: 'IMPLEMENTATION', title: 'One archive, several ways through it' },
    { kind: 'decisions', label: 'INTERACTION', title: 'A month is a doorway, not an endpoint' },
    {
      kind: 'visuals', label: 'VISUAL PROOF', title: 'The history becomes navigable',
      items: [
        { src: portfolioImage('lastfm-overview.png'), alt: 'Last.fm dashboard overview', title: 'Listening overview', detail: 'The top-level view makes the scale of the listening history visible at a glance.' },
        { src: portfolioImage('lastfm-monthly.png'), alt: '2023 monthly scrobbles view with June selected', title: '2023 monthly scrobbles', detail: 'Selecting a month reveals its leading artists, albums, and tracks.' },
      ],
    },
    { kind: 'outcome', label: 'WHAT IT SHOWS', title: 'Years of music, open to exploration', note: 'This is a personal dashboard for one Last.fm account.' },
  ],
}

export function getRecruiterOutline(id, study, technical) {
  if (recruiterOutlines[id]) return recruiterOutlines[id]

  return [
    { kind: 'copy', label: 'CONTEXT', title: study.sections?.context?.title || 'Project context', fields: ['context', 'problem'] },
    { kind: 'copy', label: 'MY WORK', title: study.sections?.implementation?.title || 'What I built', fields: ['contribution', 'implementation'] },
    { kind: 'flow', label: 'APPROACH', title: technical.flowTitle },
    ...(technical.details?.length ? [{ kind: 'details', label: 'IMPLEMENTATION', title: study.sections?.approach?.title || 'Inside the system' }] : []),
    ...(technical.decisions.length ? [{ kind: 'decisions', label: 'DECISIONS', title: technical.decisionsTitle }] : []),
    ...(technical.evidence.length ? [{ kind: 'outcome', label: 'CURRENT STATE', title: study.sections?.evaluation?.title || technical.evidenceTitle }] : []),
  ]
}
