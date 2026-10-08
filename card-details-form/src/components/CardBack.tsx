import bgCardBack from '../assets/bg-card-back.png';

interface CardBackProps {
    cvc: string;
}

export function CardBack({ cvc }: CardBackProps) {
    return (
        <div
            className="relative w-[280px] sm:w-[380px] md:w-[447px] h-[157px] sm:h-[213px] md:h-[245px] rounded-xl text-white shadow-2xl bg-cover bg-center"
            style={{ backgroundImage: `url(${bgCardBack})` }}
        >
            <span className="absolute right-[12%] top-[43.5%] text-xs md:text-sm tracking-widest text-white font-mono">
                {cvc || '000'}
            </span>
        </div>
    );
}