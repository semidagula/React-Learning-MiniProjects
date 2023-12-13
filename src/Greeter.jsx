export default function Greeter({ person = "everyone", from = "anonymus" }) {
    console.log(person)
    return (
        <>
            <h1>Hi there, {person}!!!</h1>
            <h2>--{from}</h2>
        </>
    );
}