import { CardFront } from './CardFront';
import { CardBack } from './CardBack';
import bgMainDesktop from '../assets/bg-main-desktop.png';
import bgMainMobile from '../assets/bg-main-mobile.png';

interface CardPreviewProps {
    cardNumber: string;
    name: string;
    expMonth: string;
    expYear: string;
    cvc: string;
}

export function CardPreviewSection(props: CardPreviewProps) {
    return (
        <div className="relative w-full lg:w-[483px] h-[240px] sm:h-[300px] lg:h-screen flex-shrink-0">
            <picture>
                <source media="(min-width: 1024px)" srcSet={bgMainDesktop} />
                <img
                    src={bgMainMobile}
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </picture>

            <div className="absolute inset-0 flex items-center justify-center lg:justify-end">
                <div className="relative w-full max-w-[340px] sm:max-w-[480px] lg:max-w-none h-full lg:h-[520px] flex flex-col-reverse lg:flex-col justify-center items-center lg:items-end">

                    <div className="absolute z-20 -bottom-10 sm:-bottom-12 lg:bottom-auto lg:top-0 lg:-right-20">
                        <CardFront
                            cardNumber={props.cardNumber}
                            name={props.name}
                            expMonth={props.expMonth}
                            expYear={props.expYear}
                        />
                    </div>

                    <div className="absolute z-10 top-8 sm:top-6 lg:top-auto lg:bottom-0 lg:-right-40">
                        <CardBack cvc={props.cvc} />
                    </div>
                </div>
            </div>
        </div>
    );
}