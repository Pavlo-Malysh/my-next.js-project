'use client';

type Props = {
    error: Error;
    reset: () => void;
}

const Error = ({ error, reset }: Props) => {
    return (
        <div>
            <h2>Помилка при завантаженні</h2>
            <p> X {error.message}</p>
            <button type="button" onClick={reset}>Спробувати знову</button>
        </div>
    )
}

export default Error;