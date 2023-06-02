import {Card, Header} from 'semantic-ui-react';
import "./ListLastEvent.scss";
import Container from '../Container/Container';
import useFetch from '../../hooks/useFetch';
import LastEvents from '../LastEvents/LastEvents';

export default function ListLastEvents() {
    const lastEventsFetch = useFetch("https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=b825200c7d648761ce1ebbafadc0b0db&hash=10b2bc2134e9dbd54587a91640427437&limit=5");// Aca hacemos la peticion que os traiga los ultimos eventos de la Api
    
    
    return(
        <div className='container-list-last-events'>
            <Header size='large'>Ultimos eventos</Header>

            <Container>
                <Card.Group itemsPerRow={5}>
                    <LastEvents lastEventsFetch={lastEventsFetch}/>
                </Card.Group>
            </Container>
        </div>
    );  
}
