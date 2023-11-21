import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class SvgService {
	constructor(private http: HttpClient) {}

	loadSvg(path: string) {
		return this.http.get(`/${path}`, { responseType: 'text' });
	}
}
