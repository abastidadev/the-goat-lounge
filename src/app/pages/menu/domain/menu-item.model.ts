// Enums
export enum MenuCategory {
  Cachimbas = 'cachimbas',
  Sabores = 'sabores',
  Bebidas = 'bebidas',
  Cocteles = 'cocteles',
  Comida = 'comida',
}

export enum Badge {
  Signature = 'signature',
  Premium = 'premium',
  New = 'new',
  Popular = 'popular',
}

export enum Currency {
  EUR = 'EUR',
}

export enum Origin {
  Alemania = 'Alemania',
  Egipto = 'Egipto',
  Espana = 'España',
  Rusia = 'Rusia',
}

export enum DrawType {
  Abierto = 'abierto',
  Medio = 'medio',
  Cerrado = 'cerrado',
}

export enum Intensity {
  Signature = 'signature',
  Premium = 'premium',
  Standard = 'standard',
}

export enum FlavorType {
  Frutal = 'frutal',
  Mentolado = 'mentolado',
  Dulce = 'dulce',
  Especiado = 'especiado',
}

export enum Strength {
  Suave = 'suave',
  Medio = 'medio',
  Fuerte = 'fuerte',
}

export enum DrinkType {
  Cerveza = 'cerveza',
  Refresco = 'refresco',
  Te = 'te',
  Agua = 'agua',
}

export enum AlcoholContent {
  Bajo = 'bajo',
  Medio = 'medio',
  Alto = 'alto',
}

export enum DietaryType {
  Vegetarian = 'vegetarian',
  Vegan = 'vegan',
  GlutenFree = 'gluten-free',
}

// Base type for all menu items
export interface BaseMenuItem {
  id: string;
  category: MenuCategory;
  nameKey: string;
  price: number;
  currency: Currency;
  descriptionKey?: string;
  image?: string;
  badge?: Badge;
}

// Specific types for each category
export interface CachimbaItem extends BaseMenuItem {
  category: MenuCategory.Cachimbas;
  origin?: Origin;
  drawType?: DrawType;
  intensity?: Intensity;
}

export interface SaborItem extends BaseMenuItem {
  category: MenuCategory.Sabores;
  flavorType?: FlavorType;
  strength?: Strength;
}

export interface BebidaItem extends BaseMenuItem {
  category: MenuCategory.Bebidas;
  drinkType?: DrinkType;
  size?: string;
}

export interface CoctelItem extends BaseMenuItem {
  category: MenuCategory.Cocteles;
  ingredients?: string[];
  alcoholContent?: AlcoholContent;
}

export interface ComidaItem extends BaseMenuItem {
  category: MenuCategory.Comida;
  dietary?: DietaryType[];
}

// Union type for all menu items
export type MenuItem = CachimbaItem | SaborItem | BebidaItem | CoctelItem | ComidaItem;

// Type guards
export function isCachimbaItem(item: MenuItem): item is CachimbaItem {
  return item.category === MenuCategory.Cachimbas;
}

export function isSaborItem(item: MenuItem): item is SaborItem {
  return item.category === MenuCategory.Sabores;
}

export function isBebidaItem(item: MenuItem): item is BebidaItem {
  return item.category === MenuCategory.Bebidas;
}

export function isCoctelItem(item: MenuItem): item is CoctelItem {
  return item.category === MenuCategory.Cocteles;
}

export function isComidaItem(item: MenuItem): item is ComidaItem {
  return item.category === MenuCategory.Comida;
}

// Legacy class for backwards compatibility (to be removed after migration)
export class MenuItemLegacy {
  constructor(
    public id: string,
    public category: MenuCategory,
    public nameKey: string,
    public price: number,
    public currency: Currency,
    public descriptionKey?: string,
    public image?: string,
    public badge?: Badge,
    // For cachimbas
    public origin?: Origin,
    public drawType?: DrawType,
    public intensity?: Intensity,
    // For sabores
    public flavorType?: FlavorType,
    public strength?: Strength,
    // For bebidas
    public drinkType?: DrinkType,
    public size?: string,
    // For cocteles
    public ingredients?: string[],
    public alcoholContent?: AlcoholContent,
    // For comida
    public dietary?: DietaryType[]
  ) {}
}

export class MenuCategoryModel {
  constructor(
    public id: MenuCategory,
    public nameKey: string,
    public icon: string,
    public order: number
  ) {}
}

export class FilterOption {
  constructor(
    public id: string,
    public labelKey: string,
    public value: any
  ) {}
}
