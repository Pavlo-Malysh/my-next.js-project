import { FadeLoader } from 'react-spinners';
import { CSSProperties } from 'react';

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",

};


const Loading = () => {
    return (
        <FadeLoader color={"#d6d6d6ff"}
            loading={true}
            cssOverride={override}
            aria-label="Loading Spinner"
            data-testid="loader" />
    )
}

export default Loading;

