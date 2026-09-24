import { Link } from "react-router-dom";
import type { Product } from "../types/product";

interface ProductCardProps {
    product: Product;
    isFavorite: boolean;
    onToggleFavorite: (id: number) => void;
}

export function ProductCard({
    product,
    isFavorite,
    onToggleFavorite,
}: ProductCardProps) {
    return (
        <div className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div>
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-48 w-full object-contain mb-4"
                />
                <h3 className="font-semibold text-lg line-clamp-1 mb-2">
                    {product.title}
                </h3>
                <p className="text-slate-600 font-bold text-lg mb-4">${product.price}</p>
            </div>
            <div className="flex flex-col gap-2">
                <button
                    onClick={() => onToggleFavorite(product.id)}
                    className={`cursor-pointer w-full py-2 px-4 rounded-lg font-medium transition ${isFavorite
                        ? "bg-red-500 hover:bg-red-600 text-white"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-800"
                        }`}
                >
                    {isFavorite ? "ფავორიტებიდან ამოშლა" : "ფავორიტებში დამატება"}
                </button>
                <Link
                    to={`/products/${product.id}`}
                    className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition"
                >
                    დეტალურად
                </Link>
            </div>
        </div>
    );
}