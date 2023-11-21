import { ChangeDetectorRef, Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintableImage } from '../models/paintable-image.model';

interface CarouselEvent extends Event {
	to: number; // The index of the slide the carousel is transitioning to
	from: number; // The index of the slide the carousel is transitioning from
	direction: string; // The direction in which the carousel is sliding
}

@Component({
	selector: 'app-image-picker',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './image-picker.component.html',
	styleUrl: './image-picker.component.scss',
})
export class ImagePickerComponent {
	@Input() images: PaintableImage[] = [];
	@Output() imageSelected = new EventEmitter<PaintableImage>();

	changeDetector = inject(ChangeDetectorRef);
	selectedIndex = 0;

	constructor() {}

	onSlide(event: Event) {
		const carouselEvent = event as CarouselEvent;
		this.selectedIndex = carouselEvent.to;
	}

	selectImage() {
		this.imageSelected.emit({ ...this.images[this.selectedIndex] });
	}
}
