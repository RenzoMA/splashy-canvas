import {
	AfterRenderPhase,
	AfterViewInit,
	Component,
	ElementRef,
	Input,
	Renderer2,
	afterNextRender,
	inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from '../../../util/safe-html.pipe';

@Component({
	selector: 'app-paintable-image',
	standalone: true,
	imports: [CommonModule, SafeHtmlPipe],
	templateUrl: './paintable-image.component.html',
	styleUrl: './paintable-image.component.scss',
})
export class PaintableImageComponent implements AfterViewInit {
	@Input() svgContent: string = '';
	@Input() currentColor: string = '';
	element = inject(ElementRef);
	renderer = inject(Renderer2);

	constructor() {
		afterNextRender(() => {
			const svgElement = this.element.nativeElement.querySelector('svg');
			if (svgElement) {
				this.renderer.setStyle(svgElement, 'max-width', '100%');
				this.renderer.setStyle(svgElement, 'height', 'auto');
				const paths = svgElement.querySelectorAll('path');
				paths.forEach((path: any) => {
					this.renderer.removeAttribute(path, 'style');
					this.renderer.setStyle(path, 'fill', 'transparent');
					this.renderer.listen(path, 'click', () => {
						this.renderer.setStyle(path, 'fill', this.currentColor);
					});
				});
			}
		});
	}

	ngAfterViewInit(): void {}
}
