import { useState } from "react"
import styled from "styled-components"
import { SELECTED, SELECTED_BORDER, AVAILABLE, AVAILABLE_BORDER, UNAVAILABLE, UNAVAILABLE_BORDER } from "../../constants/colors"


export default function Seats({seats}){
    return(
        <SeatsContainer>
            {seats.map( (seat) => (
                <Seat seat={seat} key={seat.id} />
            ) )}
        </SeatsContainer>
    )
}

function Seat({seat}){
    const [selected, setSelected] = useState(false);
    
    function selectSeat(isAvailable){
        if(isAvailable){
            if(selected){
                setSelected(false)
            } else {
                setSelected(true)
            }
        } else {
            alert('Este assento não está disponível');
        }
    }
    return(
        <SeatItem onClick={ () => selectSeat(seat.isAvailable)} selected={selected} isAvailable={seat.isAvailable} data-test={seat}>
            {seat.name}
        </SeatItem>
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
    border: 1px solid ${ (props) => { 
        if(props.selected){
            return SELECTED_BORDER;
        } else {
            if (props.isAvailable){
                return AVAILABLE_BORDER;
            } else {
                return UNAVAILABLE_BORDER;
            }
        }        
    }};  // Essa cor deve mudar
    
    background-color: ${ (props) => { 
        if(props.selected){
            return SELECTED;
        } else {
            if (props.isAvailable){
                return AVAILABLE;
            } else {
                return UNAVAILABLE;
            }
        }        
    }};  // Essa cor deve mudar

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
    cursor: pointer;
`