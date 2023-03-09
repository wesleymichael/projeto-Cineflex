import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import Footer from "../../components/Footer"
import Sessions from "./Sessions"

export default function SessionsPage() {
    const [sessions, setSessions] = useState([])
    const { idFilme } = useParams()

    useEffect( () => {
        const url = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`;
        const promise = axios.get(url);

        promise.then( (sucess) => setSessions(sucess.data) );
        promise.catch( (err) => console.log(err.response.data) );
    }, [])


    if(sessions.length === 0){
        return(
            <PageContainer>Loading...</PageContainer>
        )
    }

    return (
        <PageContainer>
            Selecione o horário
            <Sessions sessionsDays={sessions.days} />
            <Footer posterURL={sessions.posterURL} title={sessions.title} />
        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
    div {
        margin-top: 20px;
    }
`