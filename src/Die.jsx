export default function Die({ numSides }) {
    console.log(numSides);
    const roll = Math.floor(Math.random() * numSides) + 1;
    return <p>
        {numSides}-sided die roll:{roll}
    </p>;

}