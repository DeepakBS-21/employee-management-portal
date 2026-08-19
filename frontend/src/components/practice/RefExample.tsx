import {useRef, useEffect} from 'react';

function RefExample(){

    const nameRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        nameRef.current?.focus();
    }, [])

    const handleSubmit = () => {
        console.log(nameRef.current?.value);
    };

    return(
        <div>
            <input ref = {nameRef}/>

            <button onClick={handleSubmit}>
                Submit
            </button>

        </div>
    );
}

export default RefExample;