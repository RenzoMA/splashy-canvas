import { Directive, OnInit, TemplateRef, ViewContainerRef, inject } from '@angular/core';
import { PwaDetectorService } from './pwa-detector.service';

@Directive({
	selector: '[appHideInPwa]',
	standalone: true,
})
export class HideInPwaDirective implements OnInit {
	private templateRef = inject(TemplateRef<unknown>);
	private viewContainer = inject(ViewContainerRef);
	private pwaService = inject(PwaDetectorService);
	constructor() {}
	ngOnInit(): void {
		if (!this.pwaService.isPWA()) {
			this.viewContainer.createEmbeddedView(this.templateRef);
		} else {
			this.viewContainer.clear();
		}
	}
}
