import '@testing-library/jest-dom';
import 'jest-canvas-mock';

window.matchMedia = window.matchMedia || function() {
  return {
    matches: false,
    addListener: function() {},
    removeListener: function() {}
  };
};
