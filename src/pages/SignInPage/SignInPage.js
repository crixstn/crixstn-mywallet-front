import { SignInLayout } from "./styled"
import { LinkStyle } from "../../components/LinkStyle"

export default function SignInPage(){
    return(
        <SignInLayout>
            <h1>My Wallet</h1>

            <form>
                <input
                    type="email"
                    placeholder="E-mail"
                    //value={email}
                    //onChange={e => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Senha"
                    //value={password}
                    //onChange={e => setPassword(e.target.value)}
                    required
                />

                <button>Entrar</button>
            </form>
            <LinkStyle to="/cadastro">Primeira vez? Cadastre-se!</LinkStyle>
        </SignInLayout>
    )
}