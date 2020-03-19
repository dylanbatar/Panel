export class Storage {
  saveInStorage(storageName: string, token: any): void {
    localStorage.setItem(storageName, JSON.stringify(token));
  }

  getStorage(storageName: string): string {
    return JSON.parse(localStorage.getItem(storageName));
  }

  removeStorage(storageName: string): void {
    localStorage.removeItem(storageName);
  }
}
