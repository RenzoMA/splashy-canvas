import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-color-picker',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './color-picker.component.html',
	styleUrl: './color-picker.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorPickerComponent {
	opacity = 0.8;
	colors = [
		`rgb(0, 0, 255, ${this.opacity})`, // Blue
		`rgb(0, 128, 0, ${this.opacity})`, // Dark Green
		`rgb(0, 128, 128, ${this.opacity})`, // Teal
		`rgb(0, 206, 209, ${this.opacity})`, // Dark Turquoise
		`rgb(0, 255, 0, ${this.opacity})`, // Green
		`rgb(0, 255, 127, ${this.opacity})`, // Spring Green
		`rgb(0, 255, 255, ${this.opacity})`, // Cyan
		`rgb(25, 25, 112, ${this.opacity})`, // Midnight Blue (Night Sky)
		`rgb(32, 178, 170, ${this.opacity})`, // Light Sea Green
		`rgb(47, 79, 79, ${this.opacity})`, // Dark Slate Gray
		`rgb(64, 224, 208, ${this.opacity})`, // Turquoise
		`rgb(70, 130, 180, ${this.opacity})`, // Steel Blue
		`rgb(72, 61, 139, ${this.opacity})`, // Dark Slate Blue
		`rgb(75, 0, 130, ${this.opacity})`, // Indigo
		`rgb(102, 205, 170, ${this.opacity})`, // Medium Aquamarine
		`rgb(128, 0, 0, ${this.opacity})`, // Maroon
		`rgb(128, 0, 128, ${this.opacity})`, // Purple
		`rgb(135, 206, 235, ${this.opacity})`, // Light Sky Blue (Day Sky)
		`rgb(152, 251, 152, ${this.opacity})`, // Pastel Green
		`rgb(176, 196, 222, ${this.opacity})`, // Light Steel Blue
		`rgb(210, 105, 30, ${this.opacity})`, // Chocolate
		`rgb(218, 112, 214, ${this.opacity})`, // Orchid
		`rgb(220, 20, 60, ${this.opacity})`, // Crimson
		`rgb(230, 190, 255, ${this.opacity})`, // Light Purple (Lavender)
		`rgb(233, 150, 122, ${this.opacity})`, // Dark Salmon
		`rgb(240, 128, 128, ${this.opacity})`, // Light Coral
		`rgb(244, 164, 96, ${this.opacity})`, // Sandy Brown
		`rgb(245, 245, 220, ${this.opacity})`, // Beige
		`rgb(250, 128, 114, ${this.opacity})`, // Salmon
		`rgb(255, 0, 0, ${this.opacity})`, // Red
		`rgb(255, 0, 255, ${this.opacity})`, // Magenta
		`rgb(255, 105, 180, ${this.opacity})`, // Hot Pink
		`rgb(255, 140, 0, ${this.opacity})`, // Dark Orange
		`rgb(255, 160, 122, ${this.opacity})`, // Light Salmon
		`rgb(255, 165, 0, ${this.opacity})`, // Orange
		`rgb(255, 182, 193, ${this.opacity})`, // Light Pink
		`rgb(255, 192, 203, ${this.opacity})`, // Pink
		`rgb(255, 215, 0, ${this.opacity})`, // Gold
		`rgb(255, 218, 185, ${this.opacity})`, // Peach Puff
		`rgb(255, 222, 173, ${this.opacity})`, // Navajo White
		`rgb(255, 228, 181, ${this.opacity})`, // Moccasin
		`rgb(255, 228, 225, ${this.opacity})`, // Misty Rose
		`rgb(255, 240, 245, ${this.opacity})`, // Lavender Blush
		`rgb(255, 255, 0, ${this.opacity})`, // Yellow
	];

	selectedColor = signal(this.colors[0]);

	selectColor(color: string): void {
		this.selectedColor.set(color);
	}
}
