import { useState } from "react";

function app() {
    const faqData = [
        {
            id: 1,
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All transactions are securely encrypted."
        },
        {
            id: 2,
            question: "How long does shipping take?",
            answer: "Standard shipping takes 3–5 business days, while expedited shipping takes 1–2 business days. International shipping times vary depending on the destination."
        },
        {
            id: 3,
            question: "Can I change or cancel my order after it's placed?",
            answer: "Orders can be changed or canceled within 1 hour of placement. After that, the order enters the fulfillment process and cannot be modified, but you can return it once received."
        },
        {
            id: 4,
            question: "What is your return policy?",
            answer: "We offer a 30-day money-back guarantee on all products. Items must be returned in their original packaging and unused condition. Return shipping is free for domestic orders."
        },
        {
            id: 5,
            question: "How do I track my package?",
            answer: "Once your order ships, you will receive an email confirmation containing a tracking number and a link to live updates from the carrier."
        },
        {
            id: 6,
            question: "Do you offer customer support on weekends?",
            answer: "Our standard customer support team operates Monday through Friday, 9 AM to 6 PM. However, we have an automated help center and limited email monitoring for urgent issues over the weekend."
        }
    ]
    const [openId, setOpenId] = useState<number | null>(null);
    const toogleAccordeon = (id: any) => { setOpenId(openId === id ? null : id) };
    return (
        <>
            {faqData.map((faq) => {
                <div>
                    <button onClick={() => toogleAccordeon(faq.id)}>
                        {faq.question}
                    </button>
                    <p>{faq.answer}</p>
                </div>;
            })}
        </>
    );
}

