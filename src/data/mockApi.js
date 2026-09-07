import products from './products';
import emiPlans from './emiPlans.json';

const SIMULATED_DELAY_MS = 800;

export function getProducts({ forceError = false } = {}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (forceError) {
        reject(new Error('Unable to load products. Please check your connection.'));
        return;
      }
      resolve(products);
    }, SIMULATED_DELAY_MS);
  });
}


export function getProductById(id, { forceError = false } = {}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (forceError) {
        reject(new Error('Unable to load product details.'));
        return;
      }
      const product = products.find((p) => p.id === id);
      if (!product) {
        reject(new Error('Product not found.'));
        return;
      }
      resolve(product);
    }, SIMULATED_DELAY_MS);
  });
}

export function getEmiPlans({ forceError = false } = {}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (forceError) {
        reject(new Error('Unable to load EMI plans.'));
        return;
      }
      resolve(emiPlans);
    }, SIMULATED_DELAY_MS / 2);
  });
}
