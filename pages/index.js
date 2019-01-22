import ComponentClass from '../components/ComponentClass'
import Header from '../components/common/Header'
import { bioloyPupils, mathPupils } from '../data/pupils'
import TitleBar from '../components/common/TitleBar'

export default () => (
    <div>
        <Header />
        <TitleBar />
        <h1 style={{ textAlign: "center" }}>Plan Courses</h1>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
            <ComponentClass ClassName="Biology" pupils={bioloyPupils} />
            <ComponentClass ClassName="Math" pupils={mathPupils} />
        </div>
        <style jsx global>
            {
                `
            body{
                background:#ffca20;
            }
            `
            }
        </style>
    </div>
)