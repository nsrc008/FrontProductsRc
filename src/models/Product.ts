export class Product {
    id?: number;
    name: string;
    isActive: boolean;
  
    constructor(name: string, isActive: boolean = true, id?: number) {
      this.id = id;
      this.name = name;
      this.isActive = isActive;
    }
  
    static create(name: string): Product {
      return new Product(name);
    }
  
    toggleActive(): void {
      this.isActive = !this.isActive;
    }
  }
  