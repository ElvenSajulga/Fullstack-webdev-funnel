import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  LucideAngularModule,
  LucideIconData,
  User,
  Mail,
  MessageSquare,
  Send,
  Github,
  Linkedin,
  CircleCheck,
} from 'lucide-angular';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';

interface Social {
  icon: LucideIconData;
  label: string;
  url: string;
}

// [COMPONENT: ContactComponent] — Large centered glass form + social links row.
@Component({
  selector: 'app-contact',
  imports: [LucideAngularModule, ReactiveFormsModule, RevealOnScrollDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  // [PROPERTY: icons] — Inline field icons + submit / status icons.
  readonly UserIcon = User;
  readonly MailIcon = Mail;
  readonly MessageIcon = MessageSquare;
  readonly SendIcon = Send;
  readonly SuccessIcon = CircleCheck;

  // [PROPERTY: socials] — Replace with your real profile URLs.
  readonly socials: Social[] = [
    { icon: Github, label: 'GitHub', url: '[YOUR GITHUB URL]' },
    { icon: Linkedin, label: 'LinkedIn', url: '[YOUR LINKEDIN URL]' },
    { icon: Mail, label: 'Email', url: 'mailto:[YOUR EMAIL]' },
  ];

  private readonly fb = inject(FormBuilder);

  readonly submitted = signal(false);

  readonly form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  // [METHOD: onSubmit] — Form submission logic. Wire this to your API / email service.
  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // TODO: POST this.form.value to your backend or an email service (e.g. Formspree, EmailJS).
    console.log('Contact form submitted:', this.form.value);
    this.submitted.set(true);
    this.form.reset();
  }

  // Helper for the template to decide when to show a field error.
  showError(control: 'name' | 'email' | 'message'): boolean {
    const c = this.form.get(control);
    return !!c && c.invalid && (c.dirty || c.touched);
  }
}
