import { useState } from "react"
import styled from "styled-components"
import { SELECTED, SELECTED_BORDER, AVAILABLE, AVAILABLE_BORDER, UNAVAILABLE, UNAVAILABLE_BORDER } from "../../constants/colors"

export default function Seats({seats, seatsIds, setSeatsIds, seatsName, setSeatsName}){
    return(
        <SeatsContainer>
            {seats.map( (seat) => (
                <Seat seat={seat} key={seat.id} seatsIds={seatsIds} setSeatsIds={setSeatsIds} seatsName={seatsName} setSeatsName={setSeatsName} />
            ) )}
        </SeatsContainer>
    )
}

function Seat({seat, seatsIds, setSeatsIds, seatsName, setSeatsName}){
    const [selected, setSelected] = useState(false);
    
    function selectSeat(isAvailable){
        if(isAvailable){
            if(selected){
                setSelected(false)
                const newList = seatsIds.filter( (id) => id !== seat.id )
                setSeatsIds(newList);
                const newseatsName = seatsName.filter( (name) => name !== seat.name).sort((a, b) => a - b);
                setSeatsName(newseatsName)
            } else {
                setSelected(true);
                setSeatsIds([...seatsIds, seat.id]);
                setSeatsName([...seatsName, seat.name].sort((a, b) => a - b));
            }
        } else {
            alert('Este assento não está disponível');
        }
    }
    return(
        <SeatItem onClick={ () => selectSeat(seat.isAvailable)} selected={selected} isAvailable={seat.isAvailable} data-test="seat">
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
    }};
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
    }};
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