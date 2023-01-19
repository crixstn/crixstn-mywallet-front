import { HomeLayout, Header, RegisterScreen,Footer } from "./styled";
import { Link } from "react-router-dom";

export default function HomePage(){
    return(
       <HomeLayout>
            <Header>
                <h1>Olá, Fulano</h1>

                <Link to="/">
                    <ion-icon name="exit-outline"></ion-icon>
                </Link>
            </Header>

            <RegisterScreen>
                <h2>Não há registros de <br/>entrada ou saida</h2>
            </RegisterScreen>

            <Footer>
                <Link to="/nova-entrada">
                    <div>
                        <ion-icon name="add-circle-outline"></ion-icon>
                        <p>Nova<br/>entrada</p>
                    </div>
                </Link>

                <Link to="/nova-saida">
                    <div>
                        <ion-icon name="remove-circle-outline"></ion-icon>
                        <p>Nova<br/>saída</p>
                    </div>
                </Link>
            </Footer>
       </HomeLayout> 
    )
}