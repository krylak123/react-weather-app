import { observable, action, makeObservable } from 'mobx';

class GeneralStore {
  isMenuOpen = true;

  constructor() {
    makeObservable(this, {
      isMenuOpen: observable,
      setIsMenuOpen: action,
    });
  }

  setIsMenuOpen = () => {
    this.isMenuOpen = !this.isMenuOpen;
  };
}

export default GeneralStore;
