import { Component } from '@angular/core';
import {
  LucideAngularModule,
  LucideIconData,
  Monitor,
  Server,
  Wrench,
  Layers,
  Atom,
  Braces,
  FileCode2,
  Paintbrush,
  Code2,
  Network,
  Database,
  ShieldCheck,
  GitBranch,
  Terminal,
  Container,
  Smartphone,
} from 'lucide-angular';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';

interface Skill {
  name: string;
  icon: LucideIconData;
}

interface SkillCategory {
  title: string;
  icon: LucideIconData;
  skills: Skill[];
}

// [COMPONENT: SkillsComponent] — Glass cards grouped by category, icon per skill.
@Component({
  selector: 'app-skills',
  imports: [LucideAngularModule, RevealOnScrollDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsComponent {
  readonly LayersIcon = Layers;

  // [PROPERTY: categories] — Duplicate a category or a skill object to add more.
  // `icon` accepts any imported Lucide icon (see imports above).
  readonly categories: SkillCategory[] = [
    {
      title: 'Frontend',
      icon: Monitor,
      skills: [
        { name: 'Angular', icon: Atom },
        { name: 'TypeScript', icon: FileCode2 },
        { name: 'JavaScript', icon: Braces },
        { name: 'HTML', icon: Code2 },
        { name: 'CSS / SCSS', icon: Paintbrush },
      ],
    },
    {
      title: 'Backend',
      icon: Server,
      skills: [
        { name: 'Node.js', icon: Server },
        { name: 'REST APIs', icon: Network },
        { name: 'Databases', icon: Database },
        { name: 'Authentication', icon: ShieldCheck },
      ],
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: [
        { name: 'Git', icon: GitBranch },
        { name: 'VS Code', icon: Terminal },
        { name: 'Docker', icon: Container },
        { name: 'Responsive', icon: Smartphone },
      ],
    },
  ];
}
