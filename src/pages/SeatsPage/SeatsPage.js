import { useEffect, useState } from "react"
import styled from "styled-components"
import Footer from "../../components/Footer"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { SELECTED, SELECTED_BORDER, AVAILABLE, AVAILABLE_BORDER, UNAVAILABLE, UNAVAILABLE_BORDER } from "../../constants/colors"
import Seats from "./Seats";
import Forms from "./Forms";

export default function SeatsPage() {
    const [session, setSession] = useState([]);
    const [listSeats, setListSeats] = useState([])
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const { idSessao } = useParams();
    const navigate = useNavigate();

    function reserveSeats(event){
        event.preventDefault();

        const url = "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many";
        const request = axios.post(url, {
            ids: listSeats,
            name: name,
            cpf: cpf,
        });

        request.then( () => navigate("/sucesso") );

    }

    useEffect( ()=> {
        const url = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`;
        const promise = axios.get(url);

        promise.then( (sucess) => setSession(sucess.data) )
        promise.catch( (err) => console.log(err.response.data) )
    }, [])

    if( session.length === 0){
        return <PageContainer>Loading...</PageContainer>
    }

    return (
        <PageContainer>
            Selecione o(s) assento(s)
            <Seats seats={session.seats} listSeats={listSeats} setListSeats={setListSeats} />

            <Caption />

            <Forms 
                reserveSeats={reserveSeats}
                name={name}
                setName={setName}
                cpf={cpf}
                setCpf={setCpf}
            />

            <Footer posterURL={session.movie.posterURL} title={session.movie.title} weekday={session.day.weekday} showtime={session.name} />

        </PageContainer>
    )
}

function Caption(){
    return(
        <CaptionContainer>
            <CaptionItem>
                <CaptionCircle border={SELECTED_BORDER} color={SELECTED} />
                Selecionado
            </CaptionItem>
            <CaptionItem>
                <CaptionCircle border={AVAILABLE_BORDER} color={AVAILABLE} />
                Disponível
            </CaptionItem>
            <CaptionItem>
                <CaptionCircle border={UNAVAILABLE_BORDER} color={UNAVAILABLE} />
                Indisponível
            </CaptionItem>
        </CaptionContainer>
    )
}
const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
`
const CaptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    justify-content: space-between;
    margin: 20px;
`
const CaptionCircle = styled.div`
    border: 1px solid ${ (props) => props.border};
    background-color: ${ (props) => props.color};
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
const CaptionItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
`