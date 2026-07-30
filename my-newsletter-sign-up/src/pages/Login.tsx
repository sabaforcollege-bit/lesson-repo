export const Login = () => {
    return (
        <div className="bg-charcoal min-h-[calc(100vh-56px)] flex items-center justify-center p-4 font-sans">
            <div className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-xl space-y-6">
                <h1 className="text-2xl font-bold text-dark-slate text-center">ავტორიზაცია</h1>
                <form className="space-y-4">
                    <div>
                        <label className="block text-xs font-bold text-dark-slate mb-1">მომხმარებელი</label>
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full p-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-dark-slate"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-dark-slate mb-1">პაროლი</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full p-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-dark-slate"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-dark-slate text-white font-semibold py-3 rounded-lg hover:bg-tomato transition-colors duration-200 cursor-pointer"
                    >
                        შესვლა
                    </button>
                </form>
            </div>
        </div>
    );
};