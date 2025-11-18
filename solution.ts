/*
- This solution.ts file is an example; replace it with your own code.
- Use the same function names and parameter names as in the problem statement.
- Write only the code inside the function bodies and return the result.
- Do not use any console.log statements or comments.
*/

const formatValue = (value: string | number | boolean) =>{
    if (typeof value === 'string') {
        return value.toUpperCase();
    } else if (typeof value === 'number') {
        return value * 10;
    } else if (typeof value === 'boolean') {
        return !value;
    }
}

const getLength = (value: string | any[]): number | undefined => {
    if (typeof value === 'string') {
        return value.length;
    } else if (Array.isArray(value)) {
        return value.length;
    }
}

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails(): string {
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }
}

const filterByRating = (items: { title: string; rating: number }[]): { title: string; rating: number }[] => {
    return items.filter(item => item.rating >= 4);
}

const filterActiveUsers = (
  users: {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
  }[]
): {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}[] => {
  return users.filter((user) => user.isActive);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
const printBookDetails = (book: Book): void => {
  const availability = book.isAvailable ? "Yes" : "No";
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
  );
};

const getUniqueValues = (
  array1: (string | number)[],
  array2: (string | number)[]
): string => {
  const combinedArray: (string | number)[] = [];
  for (let i = 0; i < array1.length; i++) {
    if (!combinedArray.includes(array1[i])) {
      combinedArray.push(array1[i]);
    }
  }
  for (let j = 0; j < array2.length; j++) {
    if (!combinedArray.includes(array2[j])) {
      combinedArray.push(array2[j]);
    }
  }
  return JSON.stringify(combinedArray);
};

const calculateTotalPrice = (
  products: {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
    }[]
): number => {
  return products.reduce((total, product) => {
    const productTotal = product.price * product.quantity;
    const discount = product.discount ? (product.discount / 100) * productTotal : 0;
    return total + (productTotal - discount);
  }, 0);
};

