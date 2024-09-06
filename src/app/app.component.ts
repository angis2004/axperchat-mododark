import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test';
chartOptions: any;

// Variables para almacenar la fecha y hora
casinoDateTime: string = '';
tgmDateTime: string = '';

constructor() {}

  ngOnInit(): void {
    this.updateDateTime(); // Actualizamos la fecha y hora al cargar la página

    // Intervalo para actualizar la fecha y hora cada segundo
    setInterval(() => {
      this.updateDateTime();
    }, 1000);

    const sidebarToggle = document.querySelector<HTMLButtonElement>("#sidebar-toggle");
    const sidebar = document.querySelector<HTMLDivElement>("#sidebar");

    if (sidebarToggle && sidebar) {
      sidebarToggle.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed");
      });
    }

    // Lógica para tema oscuro
    this.applyStoredTheme();
    this.initializeThemeToggleListeners();
  }

  updateDateTime(): void {
    const now = new Date();
    this.casinoDateTime = now.toLocaleDateString(); // Actualizar solo la fecha para Casino
    this.tgmDateTime = now.toLocaleTimeString(); // Actualizar solo la hora para TGM
  }


  
initializeThemeToggleListeners(): void {
  const sidebar = document.getElementById('sidebar');
  const buttonSidebar = document.getElementById('sidebar-toggle');

  buttonSidebar?.addEventListener('click', () => {
    if (sidebar) {
      // Cambia el ancho del sidebar usando estilos directamente
      if (sidebar.style.maxWidth === "300px" && sidebar.style.minWidth === "300px") {
        sidebar.style.maxWidth = "0";
        sidebar.style.minWidth = "0";
      } else {
        sidebar.style.maxWidth = "300px";
        sidebar.style.minWidth = "300px";
      }
    }
  });




    // esto es el
    const themeToggleButtons = document.querySelectorAll<HTMLButtonElement>("[data-bs-theme-value]");
    themeToggleButtons.forEach(button => {
      button.addEventListener("click", () => {
        const theme = button.getAttribute("data-bs-theme-value");
        this.setTheme(theme);
      });
    });
  }

  setTheme(theme: string | null): void {
    if (theme) {
      document.documentElement.setAttribute('data-bs-theme', theme);
      localStorage.setItem("theme", theme);
    }
  }

  applyStoredTheme(): void {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      document.documentElement.setAttribute('data-bs-theme', storedTheme);
    }
  }

  toggleRootClass(): void {
    const current = document.documentElement.getAttribute('data-bs-theme');
    const inverted = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', inverted);
  }

  toggleLocalStorage(): void {
    if (this.isLight()) {
      localStorage.removeItem("light");
    } else {
      localStorage.setItem("light", "set");
    }
  }

  isLight(): boolean {
    return localStorage.getItem("light") !== null;
  }
}
