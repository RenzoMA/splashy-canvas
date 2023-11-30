import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-landing-home',
	standalone: true,
	imports: [CommonModule, RouterLink, NgOptimizedImage],
	templateUrl: './landing-home.component.html',
	styleUrl: './landing-home.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingHomeComponent {
	startGame() {}
}
