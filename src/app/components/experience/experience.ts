import { Component } from '@angular/core';
import {
  LucideAngularModule,
  LucideIconData,
  Briefcase,
  CalendarDays,
  Building2,
  Check,
} from 'lucide-angular';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';

interface ExperienceEntry {
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

// [COMPONENT: ExperienceComponent] — Sharp-edged vertical timeline with icon nodes.
@Component({
  selector: 'app-experience',
  imports: [LucideAngularModule, RevealOnScrollDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class ExperienceComponent {
  // [PROPERTY: icons] — Header, timeline node, and bullet icons.
  readonly BriefcaseIcon = Briefcase;
  readonly NodeIcon = Briefcase; // timeline node marker (swap for MapPin if preferred)
  readonly CalendarIcon = CalendarDays;
  readonly CompanyIcon = Building2;
  readonly CheckIcon = Check;

  // [PROPERTY: entries] — Duplicate an entry to add a job. Newest first.
  readonly entries: ExperienceEntry[] = [
    {
      role: '[YOUR ROLE]',
      company: '[COMPANY NAME]',
      duration: '[START DATE - END DATE]',
      responsibilities: [
        '[RESPONSIBILITIES] — Led development of key product features end to end.',
        'Collaborated with design and product to ship user-facing improvements.',
        'Improved performance and reliability across the stack.',
      ],
    },
    {
      role: '[YOUR ROLE]',
      company: '[COMPANY NAME]',
      duration: '[START DATE - END DATE]',
      responsibilities: [
        '[RESPONSIBILITIES] — Built and maintained REST APIs and front-end apps.',
        'Wrote automated tests and set up CI/CD pipelines.',
        'Mentored junior developers and ran code reviews.',
      ],
    },
    {
      role: '[YOUR ROLE]',
      company: '[COMPANY NAME]',
      duration: '[START DATE - END DATE]',
      responsibilities: [
        '[RESPONSIBILITIES] — Delivered client projects from concept to launch.',
        'Translated requirements into clean, scalable solutions.',
      ],
    },
  ];
}
