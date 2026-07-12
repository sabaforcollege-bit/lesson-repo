interface Ragaca {
    text: string;
}

function MyButton({ text }: Ragaca) {
    return (
        <button className="inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-50 transition active:scale-110 ">
            {text}
        </button>
    );
}

export default MyButton;