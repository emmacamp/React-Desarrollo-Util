import '../styles/VideoList.css'

const VideoList = ({ title, children }) => {
    return (
        <div className="wrapper">
            <h2>{title}</h2>
            {children || <p>No hay videos</p>}
        </div>
    )
}

export default VideoList