import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  constructor(private el: ElementRef) {
  }

  @Input('appHighLight') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || '#ddd');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}

/**
 * @ElementRef :
 *    Pour référencer l'élement hôte de la DOM sur lequel on applique la directive
 *    Il garantit l'accès direct à l'élément à travers la propriété nativeElement
 * @HostListener :
 *    Permet de s'inscrire aux événements de l'élement de la DOM sur lequel la directive agit
 * @Input('alias')
 *    Permet d'aliaser l'input pour le lier à la directive en pouvant donner un autre nom à la variable
 */
