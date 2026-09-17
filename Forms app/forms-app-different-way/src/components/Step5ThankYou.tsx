export function Step5ThankYou() {
    return (
        <div className="flex flex-col items-center justify-center h-full text-center py-12">
            <div className="w-16 h-16 bg-red-400 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-md">
                ✓
            </div>
            <h1 className="text-3xl font-bold text-slate-800 mb-3">Thank you!</h1>
            <p className="text-slate-400 max-w-md leading-relaxed">
                Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
            </p>
        </div>
    );
}