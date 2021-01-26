import files from '../data/sampleFiles'

function Samples() {
    return (
        <div className="samples">
            <h1>Samples</h1>
            <h2 id="byline">Here is where you will find select samples of my work.</h2>
            <div className="samplesInner">
                {files.map(({ title, address }) =>
                    <div className="sample">
                        <p>{title}</p> <a href={address} target="_blank" rel="noreferrer">View</a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Samples