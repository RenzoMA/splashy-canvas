import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class PwaDetectorService {
	constructor() {}

	isPWA(): boolean {
		return (
			window.matchMedia('(display-mode: standalone)').matches ||
			!!('standalone' in window.navigator) ||
			document.referrer.startsWith('android-app://')
		);
	}
}
