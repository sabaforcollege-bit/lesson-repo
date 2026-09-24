import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import type { Product } from "../types/product";

interface FavoritesPageProps {
    favorites: number[];
    onToggleFavorite: (id: number) => void;
}

export function FavoritesPage({
    favorites,
    onToggleFavorite,
}: FavoritesPageProps) {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data: Product[]) => {
                const favoriteProducts = data.filter((item) =>
                    favorites.includes(item.id)
                );
                setProducts(favoriteProducts);
                setLoading(false);
            })
            .catch((err) => {
                console.error("ფავორიტების წამოღებისას მოხდა შეცდომა:", err);
                setLoading(false);
            });
    }, [favorites]);

    if (loading) {
        return (
            <div className="text-center py-20 text-xl font-semibold text-slate-600">
                იტვირთება...
            </div>
        );
    }

    if (products.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col justify-center items-center text-center px-4">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">
                    ფავორიტების სია ცარიელია
                </h2>
                <p className="text-slate-600 mb-6">
                    თქვენ ჯერ არ დაგიმატებიათ პროდუქტები ფავორიტებში.
                </p>
                <Link
                    to="/products"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-lg transition"
                >
                    პროდუქტების დათვალიერება
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6 text-slate-800">
                ჩემი ფავორიტები ({products.length})
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        isFavorite={true}
                        onToggleFavorite={onToggleFavorite}
                    />
                ))}
            </div>
        </div>
    );
}