export interface Apartament {
    id: string;
    name: string;
    location: string;
    price: number;
    image: string;
    description: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    amenities: string[];
}

export interface ApartamentFilters {
    search:string;
    location: string;
    minBedrooms: number;
    maxPrice: number|null;
}

export interface ContactForm {
    name: string;
    email: string;
    phone: string;
    apartamentId: string;
    message: string;
}

export interface FavoriteContextValue {
    favorites: string[];
    toggleFavorite: (id: string) => void;
    isFavorite: (id: string) => boolean;
}