import Logo from '../assets/Redleaflanding-logo.png';
import bgCardFront from '../assets/bg-card-front.avif';
import Mastercard from '../assets/Mastercard_logo.svg';

interface CardFrontProps {
    cardNumber: string;
    name: string;
    expMonth: string;
    expYear: string;
    secondLogoUrl?: string;
}

export function CardFront({
    cardNumber,
    name,
    expMonth,
    expYear,
    secondLogoUrl,
}: CardFrontProps) {
    const formattedCardNumber = cardNumber
        ? cardNumber.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim()
        : '0000 0000 0000 0000';

    return (
        <div
            className="relative w-[280px] sm:w-[380px] md:w-[447px] h-[157px] sm:h-[213px] md:h-[245px] rounded-xl p-5 md:p-8 text-white shadow-2xl flex flex-col justify-between bg-cover bg-center"
            style={{ backgroundImage: `url(${bgCardFront})` }}
        >
            <div className="flex justify-between items-center w-full">
                <img src={Logo} alt="Card Logo" className="w-15 md:w-15" />

                {Mastercard ? (
                    <img
                        src={Mastercard}
                        alt="Second Logo"
                        className="h-6 md:h-10 object-contain w-10 md:w-10"
                    />
                ) : (
                    null
                )}
            </div>

            <div className="space-y-4">
                <p className="text-lg sm:text-2xl md:text-2xl tracking-[0.18em] font-medium font-mono text-white">
                    {formattedCardNumber}
                </p>
                <div className="flex justify-between text-[10px] sm:text-xs tracking-widest uppercase text-white">
                    <span>{name || 'JANE APPLESEED'}</span>
                    <span>
                        {expMonth || '00'}/{expYear || '00'}
                    </span>
                </div>
            </div>
        </div>
    );
}