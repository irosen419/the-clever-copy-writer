import files from '../data/sampleFiles'

function Samples() {
    return (
        <div className="samples">
            <h1>Portfolio</h1>
            <p id="byline">Samples of my work</p>
            <div className="samplesInner">
                {files.map(({ title, address, preview }, i) =>
                    <div className="sample" key={`sample-${i}`}>
                        <div className="innerSample">
                            <p className="title">{title}</p>
                            <p className="preview">{preview}</p>
                            <a href={address} target="_blank" rel="noreferrer">Continue reading...</a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Samples