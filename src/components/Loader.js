import spinner from "./spinner.gif";

const Loader= () => {
    return (
    <div className= 'loader'>
        <img src={spinner} alt='loading' />
        <h2>Fetchng data</h2>
    </div>
    )
}

export default Loader;
