function Button({ score, setRating }: { score: number; setRating: any }) {
    return (
        <button
            onClick={() => setRating(score)}>
            {score}
        </button>
    )
};

export default Button;