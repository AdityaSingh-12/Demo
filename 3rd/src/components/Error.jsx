const Error =({fooditem}) => {
    return (
       <>
        {fooditem.length === 0 && <h3>I am still hungry</h3>}
        </>
    );
    };
    export default Error;