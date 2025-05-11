# TaskManagerApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.0-next.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

§ How did you organise the modules and your signal store?
The project follows a modular, scalable architecture:

Core Module: Contains singleton services like configuration and shared utilities.(which is not exists as there is no services)

Shared Module: Reusable components, UI elements, and custom pipes/directives.(which is not exists and no shared elements used)

Features Module (e.g. Tasks): Encapsulates feature-specific components and the related signal store.

Store: Signal stores are colocated with the feature that uses them, ensuring scoped state and better maintainability.

§ Why did you choose certain patterns (e.g. signalEffect, computedSignal)?
computed(): Used to derive reactive state slices (e.g. task statistics, filtered views) directly from the source store. This avoids duplication and ensures UI stays in sync automatically.

patchState(): Chosen over update() for clarity and partial updates and as its compatible with angular 19.

Modular Structure: Keeps the project organized, easier to scale, and aligned with Angular best practices.

Reactive Forms: Ensures consistent form control logic and validation patterns, while keeping state in the store.

§ Any trade‑offs or alternative approaches you considered?
View Models in Components: Rejected in favor of keeping all logic in the store to ensure a single source of truth for update, add and delete.

Direct signal mutations: Avoided for better encapsulation. All changes go through store methods to ensure predictable state transitions.

Backend Integration: Omitted intentionally for simplicity and focus on in-memory behavior. In a real-world app, effects or services would wrap API interactions.
