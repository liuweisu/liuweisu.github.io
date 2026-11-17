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
  name: 'Liu Wei Su', // TODO: your full name
  headline: 'Bioinformatician with expertise in genomics, Image analysis and AI engineering',
  // avatar: `https://github.com/${GITHUB_USER}.png`,
  avatar: `/workspaces/liuweisu.github.io/src/data/PF.jpeg`,
  github: `https://github.com/${GITHUB_USER}`,
  linkedin: 'https://www.linkedin.com/in/liu-wei-su-199784238/', // TODO: your LinkedIn URL, or leave empty to hide the icon
  intro:
    'I work on genomics, plant science and machine learning: genome assembly and transposable elements, ' +
    'image analysis and inpainting of plant images, and even testing deep learning algorithms.',
};

export type Skill = { icon: 'dna' | 'image' | 'robot'; title: string; text: string; tags: string[] };

export const skills: Skill[] = [
  {
    icon: 'dna',
    title: 'Bioinformatics & genomics',
    text:
      'Genome assembly and quality assessment, transposable element annotation in plant, human and bacterial genomes, ' +
      'RNA-seq differential expression and proteomics, always checked against data with a known answer.',
    tags: ['Python', 'Genome assembly', 'Transposable elements', 'RNA-seq', 'DESeq2', 'Proteomics', 'Nanopore', 'Illumina', '16S', 'SQL'],
  },
  {
    icon: 'image',
    title: 'Image analysis & inpainting',
    text:
      'Segmentation and measurement of leaves and cells, disease severity scoring, and restoring damaged leaves with ' +
      'classical and generative inpainting, evaluated on the traits a biologist actually measures.',
    tags: ['scikit-image', 'OpenCV', 'NumPy / SciPy', 'PyTorch', 'Diffusion models', 'Foundation Models', 'Quantitative analysis', 'LaMa', 'SAM', 'U-Net'],
  },
  {
    icon: 'robot',
    title: 'AI engineering',
    text:
      'Retrieval-augmented generation with citations, tool-using agents, and evaluation sets ' +
      ': APIs, containers, tests.',
    tags: ['RAG', 'LLM agents', 'Ollama', 'GitHub Actions', 'pytest'],
  },
];

export type TimelineItem = { date: string; title: string; place: string; text: string };

export const timeline: TimelineItem[] = [
  {
    date: 'Mar 2026 - Aug 2026',
    title: 'Internship, computational biology',
    place: 'Rijk Zwaan, Fijnaart',
    text: 'Thesis: Pangenomic detection of recently active transposable elements in melon: reproducible Snakemake workflows on HPC that benchmark detection pipelines across 25 genome assemblies.',
  },
  {
    date: 'Sep 2025 - Feb 2026',
    title: 'MSc thesis, Bioinformatics chair group',
    place: 'Wageningen University & Research, Wageningen',
    text: 'Quantify caterpillar-induced leaf damage using deep learning algorithms and restore heavily damaged leaves with inpainting models.',
  },
  {
    date: 'Sep 2024 - Aug 2026',
    title: 'MSc Bioinformatics and Systems Biology',
    place: 'Wageningen University & Research',
    text: 'Learned genomics, plant sciences, and specialized in machine-and deep learning. Also received consultancy training and worked in a multidisciplinary team.',
  },
  {
    date: 'Dec 2023',
    title: 'Junior Med School practical lab assistant',
    place: 'Erasmus MC, Rotterdam',
    text: 'Teaching junior med school students how to perform a luciferase assay and how aseptic techniques for cell culture.',
  },
  {
    date: 'Sep 2023 - Jun 2024',
    title: 'Research internship, preclinical drug research',
    place: 'Erasmus MC, Rotterdam',
    text: 'Developed and optimised biosensor assays to evaluate therapeutic compounds for thyroid disease, using cell culture, molecular cloning and transfections.',
  },
  {
    date: 'May 8 2023 - May 10 2023',
    title: 'Volunteer at the BioSB',
    place: 'Egmond aan Zee',
  },
  {
    date: 'Aug 2020 - Jul 2024',
    title: 'BSc Biology and Medical Laboratory Research',
    place: 'Avans University of Applied Sciences, Breda',
    text: 'Specialisation biotechnology, minor bioinformatics.',
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
      'Exemplar inpainting restores bitten margins best (shape IoU 0.89 vs 0.60-0.72).',
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
