import { Link } from "react-router-dom";
import { Container } from "./styled";

export default function NewExpensePage(){
    return(
        <Container>
            <h1>Nova saída</h1>

            <form>
                <input
                    type="number"
                    placeholder="Valor"
                    //value={expense}
                    //onChange={e => setExpense(e.target.value)}
                    required
                />

                <input
                    type="text"
                    placeholder="Descrição"
                    //value={DescriptionExpense}
                    //onChange={e => setDescriptionExpense(e.target.value)}
                    required
                />

                <Link to="/home">
                    <button>Salvar saída</button>
                </Link>
            </form>
        </Container>
    )
}