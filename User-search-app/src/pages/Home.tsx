import Logo from "../assets/github-inspectocat.png"
export function Home() {
    return (
        <div className="p-8 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-2xl shadow-md text-center">
            <h2 className="text-3xl font-bold mb-4">მოგესალმებით GitHub user search-ში!</h2>
            <img
                src={Logo}
                alt="github inspector cat"
                className="w-55 h-55 object-contain rounded-md"
            />
            <p className="text-slate-600 dark:text-slate-300">
                გამოიყენეთ ძებნის გვერდი GitHub მომხმარებლების პროფილებისა და სტატისტიკის სანახავად.
            </p>
        </div>
    );
}