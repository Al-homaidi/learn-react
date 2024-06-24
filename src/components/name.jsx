export default function Name (pepers) {
    return (
        <p>{pepers.name}
        <span style={{color: 'red'}}>{pepers.id}</span>
        <span style={{color: 'green'}}>{pepers.kye}
            <span style={{color: 'blue'}}>{pepers.$$typeof}</span>
        </span>
        </p>
    );
}