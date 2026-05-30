import { Component } from '@angular/core';
import {
  LucideAngularModule,
  LucideIconData,
  Code2,
  Lightbulb,
  Rocket,
  User,
  Sparkles,
} from 'lucide-angular';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';

interface Trait {
  icon: LucideIconData;
  title: string;
  text: string;
}

// [COMPONENT: AboutComponent] — Borderless floating card: photo left, story right.
@Component({
  selector: 'app-about',
  imports: [LucideAngularModule, RevealOnScrollDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {
  // [PROPERTY: icons] — Section accent + photo placeholder icons.
  readonly SparklesIcon = Sparkles;
  readonly UserIcon = User;

  // [PROPERTY: traits] — Edit / duplicate to change the highlighted strengths.
  readonly traits: Trait[] = [
    { icon: Code2, title: 'Clean, Tested Code', text: 'Maintainable architecture and readable code by default.' },
    { icon: Lightbulb, title: 'Product Thinking', text: 'I solve the real problem, not just the ticket.' },
    { icon: Rocket, title: 'Ship & Iterate', text: 'Fast delivery without sacrificing quality.' },
  ];
}
