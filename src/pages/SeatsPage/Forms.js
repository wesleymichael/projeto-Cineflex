import styled from "styled-components"

export default function Forms({reserveSeats, name, setName, cpf, setCpf}){
    return(
        <FormContainer onSubmit={reserveSeats}>
            Nome do Comprador:
            <input 
                type="text"
                placeholder="Digite seu nome..."
                value={name}
                onChange={e => setName(e.target.value)}
                data-test="client-name" 
                required
            />

            CPF do Comprador:
            <input 
                type="number"
                placeholder="Digite seu CPF..."
                value={cpf}
                onChange={e => setCpf(e.target.value)}
                data-test="client-cpf" 
                required
            />
            <button type="submit" data-test="book-seat-btn">Reservar Assento(s)</button>
        </FormContainer>
    )   
}

const FormContainer = styled.form`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
    font-size: 18px;
    button {
        align-self: center;
    }
    input {
        width: calc(100vw - 60px);
    }
`