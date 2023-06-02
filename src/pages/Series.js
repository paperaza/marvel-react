import { Grid, Header} from "semantic-ui-react";
import Container from "../components/Container";
import ListSeries from "../components/ListSeries";
import useFetch from "../hooks/useFetch";
export default function Series() {

    const uri = process.env.REACT_APP_URL_BASE;
    const k = process.env.REACT_APP_API_KEY_MARVEL;
    const has = process.env.REACT_APP_HASH_ID;

    const listSeries = useFetch(`${uri}/series?ts=1&apikey=${k}&hash=${has}&limit=20`);
    
    return(
        <div>
            <div className="series-page">
                <div id="slide-series-image"/>
                <Grid>
                    <Grid.Column>
                        <Container bg="ligth">
                            <Header as="h2">Las últimas seríes de Marvel</Header>
                            <ListSeries listSeries={listSeries}/>
                        </Container>
                    </Grid.Column>
                </Grid>
            </div>
        </div>
    );
}
