import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	EventEmitter,
	Input,
	Output,
	inject,
	signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintableImage } from '../models/paintable-image.model';

@Component({
	selector: 'app-image-picker',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './image-picker.component.html',
	styleUrl: './image-picker.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImagePickerComponent {
	@Input() images: PaintableImage[] = [];
	@Output() imageSelected = new EventEmitter<PaintableImage>();

	constructor() {}

	selectImage(image: PaintableImage) {
		this.imageSelected.emit(image);
	}
}
