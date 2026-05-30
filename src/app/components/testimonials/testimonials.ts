import { Component } from '@angular/core';
import { LucideAngularModule, LucideIconData, Quote, Star, MessageSquareQuote } from 'lucide-angular';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';

interface Testimonial {
  quote: string;
  name: string;
  position: string;
  company: string;
  rating: number;
}

// [COMPONENT: TestimonialsComponent] — Borderless floating quote cards.
@Component({
  selector: 'app-testimonials',
  imports: [LucideAngularModule, RevealOnScrollDirective],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class TestimonialsComponent {
  // [PROPERTY: icons] — Header, decorative quote mark, and rating star.
  readonly HeaderIcon = MessageSquareQuote;
  readonly QuoteIcon = Quote;
  readonly StarIcon = Star;

  // Used to render the 5-star rating row.
  readonly stars = [1, 2, 3, 4, 5];

  // [PROPERTY: testimonials] — Duplicate an entry to add a quote card.
  readonly testimonials: Testimonial[] = [
    {
      quote: '[TESTIMONIAL QUOTE] — Delivered beyond expectations, on time and with exceptional quality. A rare full-stack talent.',
      name: '[CLIENT NAME]',
      position: '[CLIENT POSITION]',
      company: '[CLIENT COMPANY]',
      rating: 5,
    },
    {
      quote: '[TESTIMONIAL QUOTE] — Communicates clearly, writes clean code, and genuinely cares about the product.',
      name: '[CLIENT NAME]',
      position: '[CLIENT POSITION]',
      company: '[CLIENT COMPANY]',
      rating: 5,
    },
    {
      quote: '[TESTIMONIAL QUOTE] — One of the most reliable developers we have worked with. Highly recommended.',
      name: '[CLIENT NAME]',
      position: '[CLIENT POSITION]',
      company: '[CLIENT COMPANY]',
      rating: 5,
    },
  ];
}
