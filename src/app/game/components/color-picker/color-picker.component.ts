import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { colors } from '../../constants/colors';

@Component({
	selector: 'app-color-picker',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './color-picker.component.html',
	styleUrl: './color-picker.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorPickerComponent {
	colorList = colors;
	selectedColor = signal(this.colorList[0]);

	selectColor(color: string): void {
		this.selectedColor.set(color);
	}
}
