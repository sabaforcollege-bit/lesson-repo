import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { Product } from "../types/product";

export function ProductDetailsPage() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (!id) return;

        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data: Product) => {
                setProduct(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching product details:", err);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className="text-center py-20 text-xl font-semibold text-slate-600">
                იტვირთება...
            </div>
        );
    }

    if (!product) {
        return (
            <div className="text-center py-20 text-xl text-slate-600">
                პროდუქტი ვერ მოიძებნა.
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <button
                onClick={() => navigate(-1)}
                className="mb-6 bg-slate-200 hover:bg-slate-300 text-slate-800 px-4 py-2 rounded-lg font-medium transition"
            >
                უკან დაბრუნება
            </button>

            <div className="bg-white border rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center shadow-sm">
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-72 w-full md:w-1/2 object-contain"
                />
                <div className="flex flex-col gap-4 md:w-1/2">
                    <h1 className="text-2xl font-bold text-slate-800">{product.title}</h1>
                    <p className="text-slate-600 leading-relaxed">{product.description}</p>
                    <p className="text-2xl font-extrabold text-blue-600">${product.price}</p>
                </div>
            </div>
        </div>
    );
}