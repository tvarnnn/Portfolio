import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import * as projectData from '../src/data/projects.js'
import { experienceCases, getProjectCase } from '../src/data/caseStudies.js'
import { getRecruiterOutline, recruiterOutlines } from '../src/data/recruiterOutlines.js'
import { siteLinks } from '../src/data/site.js'
import { getTechnicalCase, technicalCases } from '../src/data/technicalCases.js'

test('resume link points to the published PDF', () => {
  assert.equal(siteLinks.resume, '/Portfolio/Varner_Tristan_Resume.pdf')
  assert.ok(existsSync(new URL('../public/Varner_Tristan_Resume.pdf', import.meta.url)))
})

test('email reveal has the requested address', () => {
  assert.equal(siteLinks.emailAddress, 'tv.lloyd.varner@gmail.com')
})

test('homepage features four curated project stories', () => {
  const { featuredProjects } = projectData
  assert.ok(featuredProjects, 'featuredProjects must be exported')
  assert.deepEqual(featuredProjects.map((project) => project.id), [
    'glasses', 'agent-platform', 'finance-advisor', 'lastfm-dashboard',
  ])
  for (const project of featuredProjects) {
    for (const field of ['homeHook', 'homeAction', 'intro', 'why', 'built', 'detail', 'outcome', 'visual']) {
      assert.ok(project[field]?.trim(), `${project.id} needs ${field}`)
    }
    assert.ok(project.homeNotes.length >= 1 && project.homeNotes.length <= 3, `${project.id} needs one to three homepage notes`)
    assert.ok(project.stack.length > 0, `${project.id} needs a stack`)
  }
})

test('recruiter mode uses the same selected work', () => {
  assert.deepEqual(projectData.recruiterProjects.map((project) => project.id), [
    'glasses', 'agent-platform', 'finance-advisor', 'lastfm-dashboard',
  ])
  for (const project of projectData.recruiterProjects) {
    for (const field of ['problem', 'contribution', 'result']) {
      assert.ok(project.recruiter?.[field]?.trim(), `${project.id} needs recruiter ${field}`)
    }
  }
  const gary = projectData.recruiterProjects.find((project) => project.id === 'agent-platform')
  assert.equal(gary.status, 'in-development')
  assert.match(gary.recruiter.description, /Planner, Coder, and Reviewer/)
  assert.match(gary.recruiter.statusNote, /Planning works/)
  assert.match(gary.recruiter.contribution, /Solely designed and built/)
  assert.match(gary.recruiter.result, /Coder’s project\/file targeting/)
  assert.ok(gary.detailSections.every(({ body }) => !body.startsWith('[')))
})

test('project IDs and optional links are safe to render', () => {
  const { projects } = projectData
  assert.equal(new Set(projects.map((project) => project.id)).size, projects.length)
  for (const project of projects) {
    for (const url of [project.github, project.demo].filter(Boolean)) {
      assert.match(url, /^https:\/\//, `${project.id} has an invalid URL`)
    }
  }
})

test('IBM and Firebirds have distinct, fillable experience case studies', () => {
  assert.deepEqual(Object.keys(experienceCases), ['ibm', 'firebirds'])
  for (const study of Object.values(experienceCases)) {
    assert.deepEqual(study.meta.map(({ label }) => label), ['Role', 'Timeline', 'Tools / environment', 'Team / ownership'])
    for (const field of ['title', 'summary', 'contribution', 'context', 'problem', 'approach', 'implementation', 'evaluation']) {
      assert.ok(study[field]?.trim(), `${study.title} needs ${field}`)
    }
    assert.ok(study.decisions.length >= 2 && study.decisions.length <= 4)
  }
  assert.equal(experienceCases.ibm.meta[0].value, 'Forward Deployed Engineering Intern, IBM Z')
  assert.match(experienceCases.ibm.visuals.hero?.src, /ibm-group\.jpeg$/)
  assert.match(experienceCases.firebirds.visuals.hero?.src, /firebirds-chefsjacket\.jpg$/)
  assert.ok(existsSync(new URL('../public/portfolio/firebirds-chefsjacket.jpg', import.meta.url)))
})

test('selected work has editorial case-study content and interleaved visual slots', () => {
  for (const project of projectData.featuredProjects) {
    const study = getProjectCase(project)
    assert.deepEqual(study.meta.map(({ label }) => label), ['Role', 'Timeline', 'Tools / stack', 'Team / ownership'])
    assert.ok(study.meta.every(({ value }) => !value.startsWith('[')), `${project.id} needs finished metadata`)
    for (const field of ['summary', 'contribution', 'context', 'problem', 'approach', 'implementation', 'evaluation']) {
      assert.ok(study[field]?.trim(), `${project.id} needs ${field}`)
    }
    assert.ok(study.decisions.length >= 2 && study.decisions.length <= 4)
    if (project.id === 'glasses') {
      assert.ok(study.visuals.approach?.label && study.visuals.implementation?.label)
      assert.equal(project.imagePending, true)
    } else if (project.id === 'agent-platform') {
      assert.deepEqual(study.visuals, {})
      assert.equal(project.imagePending, undefined)
      assert.match(study.next, /Fix backend stability/)
      assert.equal(study.meta.find(({ label }) => label === 'Role').value, 'Sole designer and engineer')
      assert.match(study.meta.find(({ label }) => label === 'Tools / stack').value, /Ollama/)
    } else {
      assert.ok(study.visuals.approach?.src && study.visuals.implementation?.src)
    }
  }
})

test('recruiter technical briefs cover every featured project and experience', () => {
  const ids = [...projectData.featuredProjects.map(({ id }) => id), ...Object.keys(experienceCases)]
  for (const id of ids) {
    const brief = technicalCases[id]
    assert.ok(brief, `${id} needs a technical brief`)
    for (const field of ['focus', 'problemTitle', 'ownershipTitle', 'flowTitle', 'decisionsTitle', 'evidenceTitle']) {
      assert.ok(brief[field]?.trim(), `${id} needs ${field}`)
    }
    assert.ok(brief.flow.length >= 3)
    assert.ok(brief.decisions.length >= 2)
    assert.ok(brief.evidence.length >= 1)
  }
  assert.equal(getTechnicalCase('ibm', experienceCases.ibm), technicalCases.ibm)
})

test('every project recruiter route has an architecture, implementation, decisions, and evidence', () => {
  for (const project of projectData.projects) {
    const study = getProjectCase(project)
    const technical = getTechnicalCase(project.id, study)
    const outline = getRecruiterOutline(project.id, study, technical)
    for (const kind of ['copy', 'flow', 'details', 'decisions', 'outcome']) {
      assert.ok(outline.some((section) => section.kind === kind), `${project.id} needs a ${kind} section`)
    }
    assert.ok(technical.details.length >= 3, `${project.id} needs implementation substance`)
    assert.ok(technical.decisions.length >= 2, `${project.id} needs engineering decisions`)
    assert.ok(technical.evidence.length, `${project.id} needs current evidence`)
  }
  assert.match(technicalCases.ibm.details[0].body, /I built/)
  assert.match(technicalCases.ibm.decisions.at(-1).body, /our team/)
  assert.match(technicalCases['agent-platform'].boundary, /IN DEVELOPMENT/)
})

test('recruiter detail routes have ordered, project-specific reading flows and real visuals only', () => {
  const cases = [
    ...Object.entries(experienceCases),
    ...projectData.projects.map((project) => [project.id, getProjectCase(project)]),
  ]

  for (const [id, study] of cases) {
    const outline = getRecruiterOutline(id, study, getTechnicalCase(id, study))
    assert.ok(outline.length >= 3, `${id} needs a readable outline`)
    assert.equal(outline[0].kind, 'copy', `${id} should start with context`)
    if (recruiterOutlines[id] || getTechnicalCase(id, study).evidence.length) {
      assert.equal(outline.at(-1).kind, 'outcome', `${id} should end with current results`)
    }
    for (const section of outline) {
      assert.ok(section.label?.trim() && section.title?.trim(), `${id} needs specific section headings`)
      if (section.kind === 'visuals') {
        for (const item of section.items) {
          assert.ok(item.alt && item.detail, `${id} visuals need context`)
          assert.ok(existsSync(new URL(`../public/portfolio/${item.src.split('/').at(-1)}`, import.meta.url)), `${id} references a missing image`)
        }
      }
    }
  }

  assert.deepEqual(recruiterOutlines['finance-advisor'].find((section) => section.kind === 'visuals').items.length, 3)
  assert.deepEqual(recruiterOutlines['lastfm-dashboard'].find((section) => section.kind === 'visuals').items.length, 2)
  for (const id of ['ibm', 'glasses', 'agent-platform']) {
    assert.ok(!recruiterOutlines[id].some((section) => section.kind === 'visuals'), `${id} should not force project screenshots`)
  }
})

test('every case-study route has a distinct outline grounded in its content', () => {
  const cases = [
    ...Object.entries(experienceCases).map(([id, study]) => [id, study]),
    ...projectData.projects.map((project) => [project.id, getProjectCase(project)]),
  ]
  const headings = new Set()
  const sectionCounts = new Set()
  const stockHeadings = new Set(['The setting.', 'The problem.', 'How I approached it.', 'What mattered.', 'What was built.', 'What happened.'])

  for (const [id, study] of cases) {
    const sections = Object.entries(study.sections || {})
    assert.ok(sections.length >= 3 && sections.length <= 6, `${id} needs a concise, project-specific outline`)
    sectionCounts.add(sections.length)
    for (const [key, section] of sections) {
      assert.ok(section.label?.trim() && section.title?.trim(), `${id} ${key} needs a label and heading`)
      assert.ok(!stockHeadings.has(section.title), `${id} repeats a stock heading`)
      assert.ok(!headings.has(section.title), `${id} repeats a heading from another case study`)
      headings.add(section.title)
      if (key === 'decisions') {
        assert.ok(study.decisions?.length, `${id} needs decisions to show that section`)
      } else {
        for (const field of Array.isArray(section.body) ? section.body : [section.body || key]) {
          assert.ok(study[field]?.trim(), `${id} ${key} needs ${field} copy`)
        }
      }
    }
  }
  assert.ok(sectionCounts.size > 1, 'case studies should not all have the same number of sections')
})
