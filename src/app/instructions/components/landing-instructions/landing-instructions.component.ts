import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-landing-instructions',
	standalone: true,
	imports: [CommonModule, RouterLink],
	templateUrl: './landing-instructions.component.html',
	styleUrl: './landing-instructions.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingInstructionsComponent {}
