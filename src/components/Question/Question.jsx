const mock = "src/mock"
const Question = ({mock})=>{
    return(
        <div>
            <h2>{mock.questions}</h2>
            <ul>
                {mock.questions.map((option, index)=>(
                    <li key={index}>{option}</li>
                ))}
            </ul>
        </div>
    )
}
export default Question;