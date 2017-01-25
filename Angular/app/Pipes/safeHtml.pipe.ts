import {Pipe,PipeTransform, SecurityContext} from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser'

@Pipe({ name: 'safeHtml'})

export class SafeHtmlPipe implements PipeTransform  { 

  constructor(private sanitized: DomSanitizer) {}

  transform(value: string) {

    console.log(this.sanitized.sanitize(SecurityContext.URL,value))
    //return this.sanitized.sanitize(SecurityContext.HTML,value);
    return this.sanitized.bypassSecurityTrustResourceUrl(value);

  }
}