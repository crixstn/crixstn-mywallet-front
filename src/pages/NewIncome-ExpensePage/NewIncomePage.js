import { Link } from "react-router-dom";
import { Container } from "./styled";

export default function NewIncomePage(){
    return(
        <Container>
            <h1>Nova entrada</h1>

            <form>
                <input
                    type="number"
                    placeholder="Valor"
                    //value={Income}
                    //onChange={e => setIncome(e.target.value)}
                    required
                />

                <input
                    type="text"
                    placeholder="Descrição"
                    //value={DescriptionIncome}
                    //onChange={e => setDescriptionIncome(e.target.value)}
                    required
                />

                <Link to="/home">
                    <button>Salvar entrada</button>
                </Link>
            </form>
        </Container>
    )
}