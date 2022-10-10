import '../styles/VideoItem.scss'

function VideoItem({ title, duration, description }) {
    const date = new Date()
    const uploadDate = date.toLocaleDateString()

    let secons = duration % 60
    if (secons < 10) {
        secons = `0${secons}`
    }
    const minutes = Math.floor(duration / 60)



    return (
        <div className='video'>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{uploadDate}</p>
            <p>{minutes}:{secons}</p>

        </div>
    )
}

export default VideoItem