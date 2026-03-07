import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

interface Feature {
  key: string;
  icon: string;
}

@Component({
  selector: 'app-essence-section',
  standalone: true,
  imports: [TranslocoPipe],
  templateUrl: './essence-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EssenceSectionComponent {
  // Data
  protected readonly features: Feature[] = [
    { key: 'cocktails', icon: '🍹' },
    { key: 'dancing', icon: '💃' },
    { key: 'shisha', icon: '💨' },
  ];
}
