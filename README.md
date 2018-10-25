# MovieTracker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3.

## Notes

HTTP requests, via the MovieService, were simulated using RXJS Observables.

Any necessary models include types.

## Dependencies/Libraries

This exercise is built using [Angular's Material Design framework](https://material.angular.io/).

## Accessibility Considerations

The movie list is built using a table, not only for alignment of data but also for a screen reader to have access to the data and keyboard navigation functionality.

Each editable field in the movie data (title and genre) announce the title of the field to the screen reader and both fields can be navigated with the keyboard (genre can be selected with up/down/enter keys).

Star ratings are coded as buttons, and each button announces the value it will assign to the movie's rating to the screen reader. The rating options can be navigated (tab key) and selected (spacebar or enter key) via the keyboard.

The New Movie section is coded as a form, and each control and button can be navigated to, modified, and selected via the keyboard. The control name (title, genre) is also announced to the screen reader when focus is on the control.

When a movie is added, modified, or deleted, the snackBar popup is announced to the screen reader and disappears automatically in 5 seconds.

## Testing

This exercise was built using Test Driven Development practices and uses Jasmine for the test-runner and spies. By using this method and understanding Angular testing I was able to achieve 100% code coverage.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
