export default (props) => (
    <div id="container-class">
        <div>
            <h2>{props.ClassName} Class</h2>
            {props.pupils.map(item => {
                return (
                    <div className="list-class" key={item.id}>
                        <img src={item.image} alt=""></img>
                        <p>{item.first_name} {item.last_name}</p>
                    </div>
                )
            })}

            <style jsx>
                {
                    `
                #container-class{
                    perspective: 500px;
                }
                .list-class{
                    display: flex;
                }
                .list-class img{
                    padding: 3px;
                    border: solid 1px #ccc;
                }
                .list-class p {
                    font-size: 12px;
                    font-weight: bold;
                    font-style: italic;
                    margin-left: 12px;
                }
                .list-class:hover{
                    transform: translateY(10px)scale(1);
                }
                `
                }
            </style>
        </div>
    </div>
)