import { useSearchParams } from "react-router-dom";

export default function Search() {
    const [params, setParams] = useSearchParams();
    return (
        <>
            Search "{params.get('q')}"
        </>
    );
}
