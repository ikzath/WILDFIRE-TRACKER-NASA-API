

export default function LocationInfoBox({ info }) {

    return (
    <div className='location-box'>
        <h2>Event Info</h2>
        <ul>
            <li>ID: <strong>{ info.id }</strong></li>
            <li>TITLE: <strong>{ info.title }</strong></li>            
        </ul>
    </div>
    )
}
