import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-color-picker',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './color-picker.component.html',
	styleUrl: './color-picker.component.scss',
})
export class ColorPickerComponent {
	opacity = 0.6;
	colors = [
		`rgb(255, 0, 0, ${this.opacity})`, // Red
		`rgb(0, 255, 0, ${this.opacity})`, // Green
		`rgb(0, 0, 255, ${this.opacity})`, // Blue
		`rgb(255, 255, 0, ${this.opacity})`, // Yellow
		`rgb(0, 255, 255, ${this.opacity})`, // Cyan
		`rgb(255, 0, 255, ${this.opacity})`, // Magenta
		`rgb(128, 0, 128, ${this.opacity})`, // Purple
		`rgb(255, 192, 203, ${this.opacity})`, // Pink
		`rgb(255, 165, 0, ${this.opacity})`, // Orange
		`rgb(128, 0, 0, ${this.opacity})`, // Maroon
		`rgb(230, 190, 255, ${this.opacity})`, // Light Purple (Lavender)
		`rgb(64, 224, 208, ${this.opacity})`, // Turquoise
		`rgb(152, 251, 152, ${this.opacity})`, // Pastel Green
		`rgb(135, 206, 235, ${this.opacity})`, // Light Sky Blue (Day Sky)
		`rgb(25, 25, 112, ${this.opacity})`, // Midnight Blue (Night Sky)
	];

	selectedColor = signal(this.colors[0]);

	selectColor(color: string): void {
		this.selectedColor.set(color);
	}
}
