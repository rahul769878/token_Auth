import AuthFetch from "./AuthFetch";

const Accounts = () => {
    AuthFetch.get("https://real-pear-fly-kilt.cyclic.app/accounts")
    .then(y => console.log(y.data));
 
    return <div>
        Account
    </div>;
}


export default Accounts;