import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

interface GalleryImage {
  key: string;
}

@Component({
  selector: 'app-shisha-section',
  standalone: true,
  imports: [TranslocoPipe],
  templateUrl: './shisha-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShishaSectionComponent {
  // Data
  protected readonly galleryImages: GalleryImage[] = [
    { key: 'exterior' },
    { key: 'interior' },
    { key: 'bar' },
  ];
}
