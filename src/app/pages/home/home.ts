import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero';
import { AboutComponent } from '../../components/about/about';
import { SkillsComponent } from '../../components/skills/skills';
import { ExperienceComponent } from '../../components/experience/experience';
import { PortfolioComponent } from '../../components/portfolio/portfolio';
import { TestimonialsComponent } from '../../components/testimonials/testimonials';
import { ContactComponent } from '../../components/contact/contact';

// [COMPONENT: Home] — The single funnel page. Reorder sections by reordering the
// tags in home.html. Each section component owns its own anchor id.
@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    PortfolioComponent,
    TestimonialsComponent,
    ContactComponent,
  ],
  templateUrl: './home.html',
})
export class Home {}
