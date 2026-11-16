// Everything the site shows lives in this file. Edit it, save, and the page updates.
// Lines marked TODO are placeholders only you can fill in.

import bioseq from '../assets/images/projects/bioseq-toolkit.png';
import biobank from '../assets/images/projects/genomics-biobank-sql.png';
import imaging from '../assets/images/projects/plant-cell-image-analysis.png';
import inpainting from '../assets/images/projects/leaf-inpainting.png';
import rag from '../assets/images/projects/bio-rag-assistant.png';
import rnaseq from '../assets/images/projects/rnaseq-agent.png';

const GITHUB_USER = 'liuweisu';
const repo = (name: string) => `https://github.com/${GITHUB_USER}/${name}`;
const pages = (name: string) => `https://${GITHUB_USER}.github.io/${name}/`;

export const profile = {
  name: 'liuweisu', // TODO: your full name
  headline: 'Bioinformatician · Image analysis · AI engineering',
  avatar: `https://github.com/${GITHUB_USER}.png`,
  github: `https://github.com/${GITHUB_USER}`,
  linkedin: '', // TODO: your LinkedIn URL, or leave empty to hide the icon
  intro:
    'I work where genomics, plant science and machine learning meet: genome assembly and transposable elements, ' +
    'image analysis and inpainting of plant images, and LLM systems that are tested before they are trusted.',
};

export type Skill = { icon: 'dna' | 'image' | 'robot'; title: string; text: string; tags: string[] };

export const skills: Skill[] = [
  {
    icon: 'dna',
    title: 'Bioinformatics & genomics',
    text:
      'Genome assembly and quality assessment, transposable element annotation in plant, human and bacterial genomes, ' +
      'RNA-seq differential expression and proteomics, always checked against data with a known answer.',
    tags: ['Python', 'Genome assembly', 'Transposable elements', 'EDTA', 'EarlGrey', 'RNA-seq', 'DESeq2', 'Proteomics', 'Nanopore / 16S', 'SQL'],
  },
  {
    icon: 'image',
    title: 'Image analysis & inpainting',
    text:
      'Segmentation and measurement of leaves and cells, disease severity scoring, and restoring damaged leaves with ' +
      'classical and generative inpainting, evaluated on the traits a biologist actually measures.',
    tags: ['scikit-image', 'OpenCV', 'NumPy / SciPy', 'PyTorch', 'Diffusion models', 'LaMa', 'SAM', 'U-Net'],
  },
  {
    icon: 'robot',
    title: 'AI engineering',
    text:
      'Retrieval-augmented generation with citations, tool-using agents, evaluation sets that include trap questions, ' +
      'and the plumbing around them: APIs, containers, tests and CI.',
    tags: ['RAG', 'LLM agents', 'Claude API', 'Ollama', 'FastAPI', 'Docker', 'GitHub Actions', 'pytest'],
  },
];

export type TimelineItem = { date: string; title: string; place: string; text: string };

export const timeline: TimelineItem[] = [
  {
    date: 'TODO: years',
    title: 'MSc — TODO: programme',
    place: 'TODO: university',
    text: 'Thesis: generative inpainting models to restore damaged leaves in plant images, and where they produce convincing but wrong leaf shapes.',
  },
  {
    date: 'TODO: years',
    title: 'Minor — databases',
    place: 'TODO: university',
    text: 'Designed a relational database from scratch, modelled its relations and extracted information with SQL.',
  },
];

export type Project = {
  title: string;
  description: string;
  image: string;
  repo: string;
  demo?: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: 'bioseq-toolkit',
    description:
      'Genome assembly (de Bruijn graph, N50/NG50), LTR and TIR transposon discovery with insertion dating, TE insertions in a patient gene, ' +
      'bacterial origin of replication and peptide mass fingerprinting. Pure Python, tested on simulated data with known answers, runs in the browser.',
    image: bioseq,
    repo: repo('bioseq-toolkit'),
    demo: pages('bioseq-toolkit'),
    tags: ['Genomics', 'Transposable elements', 'Proteomics', 'Python'],
  },
  {
    title: 'leaf-inpainting',
    description:
      'Restoring insect bites, holes and tears in leaf images with five inpainting methods, two written from scratch. ' +
      'A leaf-shape metric shows what PSNR and SSIM miss: exemplar inpainting restores bitten margins best (shape IoU 0.89 vs 0.60–0.72).',
    image: inpainting,
    repo: repo('leaf-inpainting'),
    demo: pages('leaf-inpainting'),
    tags: ['Inpainting', 'Computer vision', 'Evaluation'],
  },
  {
    title: 'plant-cell-image-analysis',
    description:
      'Leaf segmentation, shape traits and disease severity (error below 1 percentage point on light backgrounds), and nucleus counting ' +
      'in fluorescence microscopy where a watershed raises F1 from 0.61 to 0.98.',
    image: imaging,
    repo: repo('plant-cell-image-analysis'),
    demo: pages('plant-cell-image-analysis'),
    tags: ['Image analysis', 'Plant phenotyping', 'Microscopy'],
  },
  {
    title: 'bio-rag-assistant',
    description:
      'Retrieval-augmented question answering over bioinformatics notes with cited answers from Claude, BM25 written from scratch, ' +
      'an evaluation set with unanswerable questions, a FastAPI service and Docker.',
    image: rag,
    repo: repo('bio-rag-assistant'),
    demo: pages('bio-rag-assistant'),
    tags: ['RAG', 'LLM', 'FastAPI', 'Evaluation'],
  },
  {
    title: 'rnaseq-agent',
    description:
      'An LLM agent that answers questions about an RNA-seq dataset by calling DESeq2 tools on a local open-weight model, ' +
      'with an evaluation that includes trap questions designed to tempt it into making things up.',
    image: rnaseq,
    repo: repo('rnaseq-agent'),
    tags: ['LLM agents', 'RNA-seq', 'Ollama'],
  },
  {
    title: 'genomics-biobank-sql',
    description:
      'A normalised database for a genomics biobank and TE annotations, with constraints, triggers and twelve analysis queries ' +
      '(window functions, recursive CTEs). Query it live in the browser.',
    image: biobank,
    repo: repo('genomics-biobank-sql'),
    demo: pages('genomics-biobank-sql'),
    tags: ['SQL', 'Database design', 'SQLite'],
  },
];

// The interactive demos embedded in the "Try it" section, in tab order.
export const demos = projects.filter((p) => p.demo).map((p) => ({ title: p.title, url: p.demo as string }));
