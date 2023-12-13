export default function ColorList({ colors }) {
    const list = colors.map((color) => <li>{color}</li>);

    return (
        <div>
            <p>Color List</p>
            <ul>
                {colors.map((c) =>
                    <li style={{ color: c }}>{c}</li>
                )}
            </ul>
        </div>
    );
}