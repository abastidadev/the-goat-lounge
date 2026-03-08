import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { RouterLink } from '@angular/router';

interface LocationInfo {
  key: string;
  icon: string;
}

@Component({
  selector: 'app-location-section',
  standalone: true,
  imports: [TranslocoPipe, RouterLink],
  templateUrl: './location-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationSectionComponent {
  // Data
  protected readonly locationInfo: LocationInfo[] = [
    { key: 'address', icon: '📍' },
    { key: 'hours', icon: '🕐' },
    { key: 'phone', icon: '📞' },
    { key: 'email', icon: '✉️' },
  ];
}
