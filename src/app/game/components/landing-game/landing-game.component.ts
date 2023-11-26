import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePickerComponent } from '../image-picker/image-picker.component';
import { PaintableImage } from '../models/paintable-image.model';
import { GameState } from '../enum/game-state.enum';
import { PaintableImageComponent } from '../paintable-image/paintable-image.component';
import { SvgService } from '../../services/svg.service';
import { ColorPickerComponent } from '../color-picker/color-picker.component';

@Component({
	selector: 'app-landing-game',
	standalone: true,
	imports: [CommonModule, ImagePickerComponent, PaintableImageComponent, ColorPickerComponent],
	templateUrl: './landing-game.component.html',
	styleUrl: './landing-game.component.scss',
})
export class LandingGameComponent {
	GameState = GameState;
	gameState = signal(GameState.SettingUp);
	svgService = inject(SvgService);
	svgContent: string = '';
	images: PaintableImage[] = [
		{
			id: 'test',
			path: 'assets/pictures/unicorn1.svg',
		},
		{
			id: 'test2',
			path: 'assets/pictures/unicorn2.svg',
		},
	];

	imageSelected(data: PaintableImage) {
		this.svgService.loadSvg(data.path).subscribe(content => {
			this.svgContent = content;
			this.gameState.set(GameState.Ready);
		});
	}
}
