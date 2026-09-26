import fs from 'node:fs';
import path from 'node:path';
import { load as parseYaml } from 'js-yaml';

const dataDir = path.resolve(process.cwd(), 'src/data');

function loadYaml(file) {
  const full = path.join(dataDir, file);
  return parseYaml(fs.readFileSync(full, 'utf-8'));
}

export function getPublications() {
  return loadYaml('publications.yml');
}

export function getProjects() {
  return loadYaml('projects.yml');
}

export function getPeople() {
  return loadYaml('people.yml');
}
