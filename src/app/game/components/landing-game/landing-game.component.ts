import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
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
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingGameComponent {
	GameState = GameState;
	gameState = signal(GameState.SettingUp);
	svgService = inject(SvgService);
	svgContent = signal('');
	images: PaintableImage[] = [
		{
			id: 'test',
			path: 'assets/pictures/unicorn1.svg',
		},
		{
			id: 'test2',
			path: 'assets/pictures/unicorn2.svg',
		},
		{
			id: 'test3',
			path: 'assets/pictures/unicorn3.svg',
		},
		{
			id: 'test4',
			path: 'assets/pictures/unicorn4.svg',
		},
		{
			id: 'test5',
			path: 'assets/pictures/dinosaur1.svg',
		},
		{
			id: 'test5',
			path: 'assets/pictures/princess1.svg',
		},
		{
			id: 'test6',
			path: 'assets/pictures/princess2.svg',
		},{
			id: 'test7',
			path: 'assets/pictures/dog.svg',
		},
	];

	imageSelected(data: PaintableImage) {
		this.svgService.loadSvg(data.path).subscribe(content => {
			this.svgContent.set(content);
			this.gameState.set(GameState.Ready);
		});
	}

	toSettingUp() {
		this.gameState.set(GameState.SettingUp);
	}
}
