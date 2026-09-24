import { useState, useEffect } from "react";
import { ProductCard } from "../components/ProductCard";
import type { Product } from "../types/product";

interface ProductPageProps {
    favorites: number[];
    onToggleFavorite: (id: number) => void;
}

export function ProductPage({
    favorites,
    onToggleFavorite,
}: ProductPageProps) {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=8")
            .then((res) => res.json())
            .then((data: Product[]) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching products:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="text-center py-20 text-xl font-semibold text-slate-600">
                იტვირთება...
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6 text-slate-800">პროდუქტები</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        isFavorite={favorites.includes(product.id)}
                        onToggleFavorite={onToggleFavorite}
                    />
                ))}
            </div>
        </div>
    );
}