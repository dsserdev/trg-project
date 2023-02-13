import {
  AfterViewInit, Directive,
  ElementRef, Renderer2
} from "@angular/core";

@Directive({
  selector: "[google-full-screen]"
})
export class GoogleFullScreenDirective implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log("rendererX", renderer)
    console.log("elX", el)
  }

  public ngAfterViewInit() {
    // this.renderer.addClass(this.el.nativeElement.firstChild, 'full-map');
  }
}
