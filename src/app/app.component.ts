import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet, FooterComponent]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Adler Alves';
  private cursorAura: HTMLElement | null = null;

  ngOnInit() {
    console.log('AppComponent ngOnInit iniciado');
    // Aguardar o DOM estar completamente carregado
    setTimeout(() => {
      console.log('Iniciando criação do cursor...');
      this.createCustomCursor();
      this.addMouseListeners();
    }, 500);
  }

  ngOnDestroy() {
    this.removeMouseListeners();
  }

  private createCustomCursor() {
    console.log('Criando aura do cursor...');
    
    // Verificar se já existe
    if (document.querySelector('.cursor-aura')) {
      console.log('Aura já existe, removendo...');
      document.querySelector('.cursor-aura')?.remove();
    }
    
    // Criar apenas a aura do cursor (cursor padrão do sistema será usado)
    this.cursorAura = document.createElement('div');
    this.cursorAura.className = 'cursor-aura';
    this.cursorAura.style.position = 'fixed';
    this.cursorAura.style.width = '450px';
    this.cursorAura.style.height = '450px';
    this.cursorAura.style.background = 'radial-gradient(circle, rgba(255, 77, 23, 0.15) 0%, rgba(255, 77, 23, 0.1) 20%, rgba(255, 77, 23, 0.05) 40%, rgba(255, 77, 23, 0.02) 60%, transparent 80%)';
    this.cursorAura.style.borderRadius = '50%';
    this.cursorAura.style.pointerEvents = 'none';
    this.cursorAura.style.zIndex = '9998';
    this.cursorAura.style.opacity = '0';
    this.cursorAura.style.transition = 'opacity 0.2s ease';
    this.cursorAura.style.mixBlendMode = 'screen';
    this.cursorAura.style.filter = 'blur(4px)';
    this.cursorAura.style.transform = 'translate3d(0, 0, 0)';
    this.cursorAura.style.willChange = 'transform';
    document.body.appendChild(this.cursorAura);
    console.log('Aura do cursor criada:', this.cursorAura);
  }

  private addMouseListeners() {
    document.addEventListener('mousemove', this.handleMouseMove.bind(this));
    document.addEventListener('mouseenter', this.handleMouseEnter.bind(this));
    document.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
    document.addEventListener('mousedown', this.handleMouseDown.bind(this));
    document.addEventListener('mouseup', this.handleMouseUp.bind(this));
  }

  private removeMouseListeners() {
    document.removeEventListener('mousemove', this.handleMouseMove.bind(this));
    document.removeEventListener('mouseenter', this.handleMouseEnter.bind(this));
    document.removeEventListener('mouseleave', this.handleMouseLeave.bind(this));
    document.removeEventListener('mousedown', this.handleMouseDown.bind(this));
    document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
  }

  private handleMouseMove(event: MouseEvent) {
    if (this.cursorAura) {
      // Atualização direta e instantânea da posição (centralizada para 450px)
      const x = event.clientX - 225;
      const y = event.clientY - 225;
      this.cursorAura.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      this.cursorAura.style.opacity = '1';
    }
  }

  private handleMouseEnter() {
    if (this.cursorAura) {
      this.cursorAura.style.opacity = '1';
    }
  }

  private handleMouseLeave() {
    if (this.cursorAura) {
      this.cursorAura.style.opacity = '0';
    }
  }

  private handleMouseDown() {
    if (this.cursorAura) {
      this.cursorAura.classList.add('clicking');
      console.log('Mouse down - aura clicando');
    }
  }

  private handleMouseUp() {
    if (this.cursorAura) {
      this.cursorAura.classList.remove('clicking');
    }
  }
}
