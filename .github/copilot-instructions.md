## Stack Tecnológico y Estilo de Código

- Framework: Angular 19+ (Standalone Components obligatorios).
- UI: Ionic 8+.
- Reactividad: Usar Angular Signals en lugar de variables
  simples siempre que sea posible.
- Arquitectura: Estructura de carpetas Core/Shared/Features.
- Estilo: Usar la función inject() para dependencias,
  evitar constructores.
- Sintaxis: Usar nuevo Control Flow (@if, @for).

## Directrices de Testing (Basadas en Guías Docentes)

### 1. Pruebas Unitarias e Integración (Jasmine + Karma)

Para archivos `.spec.ts`, se deben seguir estas reglas:

- **Configuración:** Utilizar `TestBed.configureTestingModule` importando los componentes Standalone necesarios.
- **Instanciación:** - Usar `fixture = TestBed.createComponent(ComponentName)`.
  - Acceder a la lógica mediante `component = fixture.componentInstance`.
- **Interacción con DOM:** - Usar `fixture.debugElement.query(By.css('selector'))` para acceso estructurado.
  - Usar `nativeElement` para aserciones de texto o atributos.
  - Ejecutar `fixture.detectChanges()` para procesar cambios de estado y Signals.
- **Servicios:** Realizar pruebas de servicios inyectándolos con `TestBed.inject(ServiceName)`.
- **Aserciones:** Uso de `expect(...).toBeTruthy()`, `toBe()`, `toContain()` y validación de longitudes en listas con `toBeGreaterThan(0)`.

### 2. Cypress Component Testing

- **Objetivo:** Validar la interacción visual de componentes aislados.
- **Casos de uso:** Verificar que los grupos de pestañas (`ion-tabs`) muestran los iconos y textos correctos.
- **Validación:** Comprobar que los listados de elementos se renderizan correctamente según el estado inyectado.

### 3. Cypress End-to-End (E2E)

Las pruebas deben cubrir los siguientes flujos críticos:

- **Navegación y Detalle:** Verificar que al pulsar en un elemento se navega a la página de detalle y se muestra el ID correcto en la vista.
- **Comportamiento del Botón Atrás:** - Validar que el botón de retroceso redirige a la pestaña o página de origen.
  - Probar la propiedad `defaultHref` accediendo directamente a una URL de detalle para asegurar que la navegación de retorno funciona sin historial previo.
- **Autenticación:** Validar que el botón de "Cerrar Sesión" limpia el estado y redirige correctamente a la página de Login.
- **Formularios:** Validar el acceso y la funcionalidad de las páginas de creación (ej. creación de reservas).
