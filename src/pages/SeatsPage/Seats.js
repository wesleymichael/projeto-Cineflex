import styled from "styled-components"
import { SELECTED, SELECTED_BORDER, AVAILABLE, AVAILABLE_BORDER, UNAVAILABLE, UNAVAILABLE_BORDER } from "../../constants/colors"


export default function Seats({seats}){
    return(
        <SeatsContainer>
            {seats.map( (seat) => (
                <SeatItem isAvailable={seat.isAvailable} key={seat.id} data-test={seat}>
                    {seat.name}
                </SeatItem>
            ) )}
        </SeatsContainer>
    )
}

const SeatsContainer = styled.div`
    width: 330px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`
const SeatItem = styled.div`
    border: 1px solid ${ (props) => props.isAvailable ? AVAILABLE_BORDER : UNAVAILABLE_BORDER };  // Essa cor deve mudar
    background-color: ${ (props) => props.isAvailable ? AVAILABLE : UNAVAILABLE };    // Essa cor deve mudar
    color: #000000;
    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`